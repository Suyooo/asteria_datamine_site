<?php
require_once('../includes/general.php');
//require_once('../includes/units.php');

/*$query = get_db_connection()->prepare("SELECT * FROM index_page_features WHERE idxf_id = 0");
$query->execute();
$feature_row = $query->fetch(\PDO::FETCH_ASSOC);
$feature_row["idxf_thumb_units"] = explode(",", $feature_row["idxf_thumb_units"]);*/

/*$date = new DateTime("now", new DateTimeZone("Japan"));
$hour = (int) $date->format('H');
if ($hour >= 1 && $hour < 8) {
	$live = false;
	$minutes = $date->format('i');
	$seconds = $date->format('s');
	$date->modify("+" . (8-$hour) . " hour");
	$date->modify("-" . $minutes . " minutes");
	$date->modify("-" . $seconds . " seconds");
	$endTime = $date->getTimestamp();
} else {
	$live = true;
	$liveTime = time();
	$liveTime -= $liveTime % (60 * 60);
	$endTime = $liveTime + (60 * 60);
}*/

echo $templates->render('index', []);
?>
