<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
define("SOUL_ID", 0);
require_once('../includes/general.php');
require_once('../includes/souls.php'); 

if (!isset($params[SOUL_ID]) || (int) $params[SOUL_ID] <= 0) {
    http_response_code(404);
	echo $templates->render('error', ['error' => 'No soul ID specified.']);
	exit;
}

$soul = get_object_for_soul_id($params[SOUL_ID]);

if ($soul == NULL) {
    http_response_code(404);
	echo $templates->render('error', ['error' => 'Invalid soul ID.']);
	exit;
}

echo $templates->render('soul_single', ['soul' => $soul]);
?>
