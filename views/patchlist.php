<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
define("PAGE", 0);
require_once('../includes/general.php');
require_once('../includes/units.php');

$page = count($params) > 0 ? max(((int)$params[PAGE])-1, 0) : 0;

$patchlist = array();
$query = get_db_connection()->prepare('SELECT patch_id, patch_name FROM patches ORDER BY patch_id DESC LIMIT :page, 20');
$query->execute([':page' => $page * 20]);
while ($patch_row = $query->fetch(\PDO::FETCH_ASSOC)) {
	if ($patch_row["patch_name"] == "PENDING") continue;
	$patch = ["id" => $patch_row["patch_id"], "name" => $patch_row["patch_name"], "list" => array()];
	
	$query2 = get_db_connection()->prepare('SELECT punit_unit_id FROM patch_units JOIN patch_categories ON punit_category_id = pcat_id WHERE pcat_patch_id = :id AND punit_pending = 0 ORDER BY pcat_order,punit_unit_id');
	$query2->execute([':id' => $patch_row["patch_id"]]);
	while ($unit_row = $query2->fetch(\PDO::FETCH_ASSOC)) {
		$patch["list"][] = $unit_row["punit_unit_id"];
	}
	
	$patchlist[] = $patch;
}

echo $templates->render('patch_list', ["patches" => $patchlist, "page" => $page]);
?>
