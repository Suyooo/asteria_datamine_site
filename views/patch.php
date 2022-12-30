<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
define("PATCH_ID", 0);
require_once('../includes/general.php');
require_once('../includes/database.php'); 
require_once('../includes/units.php'); 

if (!isset($params[PATCH_ID]) || (int) $params[PATCH_ID] <= 0) {
    http_response_code(404);
	echo $templates->render('error', ['error' => 'No patch ID specified.']);
	exit;
}

$query = get_db_connection()->prepare('SELECT * FROM patches WHERE patch_id = :id');
$query->execute([':id' => ((int) $params[PATCH_ID])]);
$patch_row = $query->fetch(\PDO::FETCH_ASSOC);

if ($patch_row == NULL) {
    http_response_code(404);
	echo $templates->render('error', ['error' => 'Invalid patch ID.']);
	exit;
}

$change_reasons = ["New Unit", "Stats Changed", "Buffed", "Nerfed", "Evolution Added", "Bond Awakening Added", "Dual MA Added"];

$categories = [];
$query = get_db_connection()->prepare('SELECT pcat_id, pcat_name FROM patch_categories WHERE pcat_patch_id = :id ORDER BY pcat_order');
$query->execute([':id' => ((int) $params[PATCH_ID])]);
while ($cat_row = $query->fetch(\PDO::FETCH_ASSOC)) {
	$cat = ["name" => $cat_row["pcat_name"], "units" => array()];
	$query2 = get_db_connection()->prepare('SELECT punit_unit_id, punit_change FROM patch_units WHERE punit_category_id = :id AND punit_pending = 0 ORDER BY punit_unit_id');
	$query2->execute([':id' => $cat_row["pcat_id"]]);
	while ($unit_row = $query2->fetch(\PDO::FETCH_ASSOC)) {
		$punit = get_object_for_unit_id($unit_row["punit_unit_id"]);
		$punit["patch_change"] = $change_reasons[$unit_row["punit_change"]];
		$cat["units"][] = $punit;
	}
	$categories[] = $cat;
}

echo $templates->render('patch_single', ['name' => $patch_row['patch_name'], 'categories' => $categories]);
?>
