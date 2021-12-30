<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
define("PAGE", 0);
define("FILTERS", 1);
require_once('../includes/general.php');
require_once('../includes/database.php');
define("PAGESIZE", 30);

require_once('../includes/souls.php');

if (!isset($params[PAGE]) || (int) $params[PAGE] <= 0) {
	$params[PAGE] = 1;
}

$joins = [];
$filters = [];
$filterparams = [];
$group = "";
$sort = "ORDER BY souls.soul_id";
for ($i = FILTERS; $i < count($params); $i++) {
	$filter = explode(":", $params[$i]);
	if ($filter == "0") continue;
	
	if ($filter[0] == "id") {
		if (count($filter) != 2) continue;
		$filters[] = "souls.soul_ingame_id = " . ((int) $filter[1]);
	} else if ($filter[0] == "source") {
		if (count($filter) != 2) continue;
		$filters[] = "souls.soul_id LIKE \"" . ((int) $filter[1]) . "%\"";
	} else if ($filter[0] == "char") {
		if (count($filter) != 2) continue;
		$ids = explode(",",$filter[1]);
		if (count($ids) == 1) $filters[] = "(souls.soul_id / 100) = " . ((int) $filter[1]);
		else {
			$idlist = implode(",", array_map('intval', $ids));
			$filters[] = "(souls.soul_id / 100) IN (" . $idlist . ")";
		}
	} else if ($filter[0] == "type") {
		if (count($filter) != 2) continue;
		$filters[] = "souls.soul_type = " . ((int) $filter[1]);
	} else if ($filter[0] == "limited") {
		if (count($filter) != 1) continue;
		$filters[] = "souls.soul_limited_logo IS NOT NULL";
	} else if ($filter[0] == "allmatch") {
		if (count($filter) != 1) continue;
		$filters[] = "souls.soul_match_type = 1";
	}
	
	$filterparams[] = $params[$i];
}
$filterjoins = implode(" ", array_unique($joins));
$filterwhere = "";
if (count($filters) > 0) {
	$filterwhere = "WHERE " . implode(" AND ", $filters);
}

$souls = [];
$query = get_db_connection()->prepare('SELECT souls.* FROM souls ' . $filterjoins . ' ' . $filterwhere . ' ' . $group .' ' . $sort .' LIMIT ' . (PAGESIZE+1) . ' OFFSET :pageoff');
$query->execute([':pageoff' => (((int) $params[PAGE] - 1) * PAGESIZE)]);
while ($soul = $query->fetch(\PDO::FETCH_ASSOC)) {
	$souls[] = get_object_for_soul_row($soul);
}

echo $templates->render('soul_list', ['page' => $params[PAGE], 'has_next_page' => (count($souls) > PAGESIZE), 'filters' => implode("/", $filterparams), 'showfilters' => true, 'souls' => array_slice($souls, 0, PAGESIZE)]);
?>
