<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
define("PARTNER_ID", 0);
require_once('../includes/general.php');
require_once('../includes/database.php'); 
require_once('../includes/units.php'); 

if (!isset($params[PARTNER_ID]) || (int) $params[PARTNER_ID] <= 0) {
	echo $templates->render('error', ['error' => 'No partner ID specified.']);
	exit;
}

$query = get_db_connection()->prepare('SELECT * FROM units WHERE unit_id = :id');
$query->execute([':id' => ((int) $params[PARTNER_ID])]);
$part_row = $query->fetch(\PDO::FETCH_ASSOC);

if ($part_row == NULL) {
	echo $templates->render('error', ['error' => 'Invalid unit ID.']);
	exit;
}

$awakens = [];
$query = get_db_connection()->prepare('SELECT pmch_awakening_id FROM partner_matches WHERE pmch_partner_id = :id ORDER BY pmch_awakening_id');
$query->execute([':id' => ((int) $params[PARTNER_ID])]);
while ($awk_row = $query->fetch(\PDO::FETCH_ASSOC)) {
	$awakens[] = get_object_for_unit_id($awk_row["pmch_awakening_id"], true);
}

if (count($awakens) == 0) {
	echo $templates->render('error', ['error' => 'This unit is not a partner.']);
	exit;
}

echo $templates->render('partner_single', ['partner' => get_object_for_unit_id($part_row["unit_id"]), 'awakens' => $awakens ]);
?>
