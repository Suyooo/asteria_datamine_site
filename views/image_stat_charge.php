<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
define("UNIT_ID", 0);
$getEx = (substr($params[UNIT_ID], -2) == "EX");
$getDual = (substr($params[UNIT_ID], -3) == "DEX" || substr($params[UNIT_ID], -1) == "D");
$params[UNIT_ID] = (int) $params[UNIT_ID];

define("WIDTH", 600);
define("HEIGHT", 280);
define("BARHEIGHT", 160);
define("BAROFFSET", 60);
define("FONT", 5);
header("Content-type: image/png");
header("Expires: ".gmdate("D, d M Y H:i:s", time()+2419200)." GMT");
header("Cache-Control: max-age=2419200");

$cachepath = "../cache/image_stat_charge/" . $params[UNIT_ID] . ($getDual ? "d" : "") . ($getEx ? "ex" : "") . ".png";
if (file_exists($cachepath)) {
	readfile($cachepath);
	die();
}

require_once('../includes/units.php');
$unit = get_object_for_unit_id($params[UNIT_ID]);
if ($unit == NULL) {
	http_response_code(404);
	die();
}

$img = imagecreatetruecolor(WIDTH, HEIGHT);
imagesavealpha($img, true);
$color = imagecolorallocatealpha($img, 0, 0, 0, 127);
imagefill($img, 0, 0, $color);

if ($getDual) {
	$olgoal = $unit["ma_dual_charge"] + ($getEx ? $unit["ma_dual_ex_charge"] : 0);
	$baseolgoal = $unit["ma_dual_charge"];
} else {
	$olgoal = $unit["ma_charge"] + ($getEx ? $unit["ma_ex_charge"] : 0);
	$baseolgoal = $unit["ma_charge"];
}
$artes = array();
$baseartes = array();
foreach ($unit["artes"] as $arte) {
	$artes[$arte["olcharge"]] = (isset($artes[$arte["olcharge"]]) ? $artes[$arte["olcharge"]] : 0) + $arte["chance"] / 100;
}
if (isset($unit["tf_baseartes"])) {
	foreach ($unit["tf_baseartes"] as $arte) {
		$baseartes[$arte["olcharge"]] = (isset($baseartes[$arte["olcharge"]]) ? $baseartes[$arte["olcharge"]] : 0) + $arte["chance"] / 100;
	}
}

$probs = array(0 => 1);
$regAtkChances = array(6 => 0.2, 7 => 0.15, 8 => 0.13, 9 => 0.13, 10 => 0.11, 11 => 0.1, 12 => 0.06, 13 => 0.06, 14 => 0.06);
$results = array();
$turn = 0;

while (count($probs) > 0) {
	$newProbs = array();
	$turn++;
	
	foreach ($probs as $oldOl => $oldProb) {
		foreach (((count($baseartes) > 0 && $oldOl < $baseolgoal) ? $baseartes : $artes) as $arteHits => $arteChance) {
			$arteOl = $oldOl + $arteHits;
			$arteProb = $oldProb * $arteChance;
			for ($regAtk = 6; $regAtk <= 14; $regAtk++) {
				$newOl = $arteOl + $regAtk;
				$newProb = $arteProb * $regAtkChances[$regAtk];
				if ($newOl >= $olgoal) {
					$results[$turn] = (isset($results[$turn]) ? $results[$turn] : 0) + $newProb;
				} else {
					$newProbs[$newOl] = (isset($newProbs[$newOl]) ? $newProbs[$newOl] : 0) + $newProb;
				}
			}
		}
	}
	
	$probs = $newProbs;
}

$spacewidth = floor(WIDTH / count($results));
$blue = imagecolorallocatealpha($img, 4, 110, 143, 0);
$black = imagecolorallocatealpha($img, 0, 0, 0, 0);
$i = 0;

function roundToFirstDigit($num, $limit) {
	$i = 0;
	while (round($num, $i) == 0 && $i < $limit) $i++;
	if ($i == $limit) return "<0." . str_repeat("0", $i-2) . "1";
	else return round($num, $i);
}

$fw = imagefontwidth(FONT);
$fh = imagefontheight(FONT);
$maxchance = 0;
foreach ($results as $turns => $chance) {
	if ($chance > $maxchance) $maxchance = $chance;
}
foreach ($results as $turns => $chance) {
	imagefilledrectangle($img, $i * $spacewidth, ceil((1 - $chance / $maxchance) * BARHEIGHT + BAROFFSET), ($i + 1) * $spacewidth - 2, BARHEIGHT + BAROFFSET, $blue);
	imagestringup($img, FONT, ($i + 0.5) * $spacewidth - $fh * 0.5, ceil((1 - $chance / $maxchance) * BARHEIGHT + BAROFFSET) - 5, roundToFirstDigit($chance*100, 5)."%", $black);
	if ($turns >= 10) imagestring($img, FONT, ($i + 0.5) * $spacewidth - $fw, BARHEIGHT + BAROFFSET + 5, $turns, $black);
	else imagestring($img, FONT, ($i + 0.5) * $spacewidth - $fw * 0.5, BARHEIGHT + BAROFFSET + 5, $turns, $black);
	$i++;
}

imagepng($img);
imagepng($img, $cachepath);
imagedestroy($img);
?>
