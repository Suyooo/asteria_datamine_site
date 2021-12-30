<?php
$db_connection = NULL;

function get_db_connection() {
	global $db_connection;
	if ($db_connection == NULL) $db_connection = new \PDO("sqlite:" . __DIR__ . "/database.db");
	return $db_connection;
}
?>