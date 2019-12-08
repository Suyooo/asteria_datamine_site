<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
define("UNIT_ID", 0);
require_once('../includes/general.php');
require_once('../includes/units.php'); 

if (!isset($params[UNIT_ID]) || (int) $params[UNIT_ID] <= 0) {
	echo $templates->render('error', ['error' => 'No unit ID specified.']);
	exit;
}

$unit = get_object_for_unit_id($params[UNIT_ID]);

if ($unit == NULL) {
	echo $templates->render('error', ['error' => 'Invalid unit ID.']);
	exit;
}

echo $templates->render('unit_single', ['unit' => $unit]);
?>