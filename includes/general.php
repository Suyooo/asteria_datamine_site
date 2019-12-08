<?php
require_once('../vendor/autoload.php'); 
$templates = League\Plates\Engine::create('../templates');

$collection_ids = array();
if (isset($_COOKIE["collection"]) && $_COOKIE["collection"] !== "") {
	$string_ids = explode("/", $_COOKIE["collection"]);
	foreach ($string_ids as $v) {
		$collection_ids[] = (int) $v;
	}
	sort($collection_ids);
}
$templates->addData(['collection_ids' => $collection_ids]);

function unix_to_jp_time($unix_timestamp, $format) {
	return date($format, $unix_timestamp / 1000 + 60 * 60 * 9);
}
?>