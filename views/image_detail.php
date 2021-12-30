<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
define("UNIT_ID", 0);
$params[UNIT_ID] = (int) $params[UNIT_ID];

define("WIDTH", 296);
define("HEIGHT", 263);
define("COPYRIGHT_LINE_HEIGHT", 29);
header("Content-type: image/png");
header("Expires: ".gmdate("D, d M Y H:i:s", time()+2419200)." GMT");
header("Cache-Control: max-age=2419200");

$cachepath = "../cache/image_detail/" . $params[UNIT_ID] . ".png";
if (file_exists($cachepath)) {
	readfile($cachepath);
	die();
}

require_once('../includes/units.php');
$unit = get_object_for_unit_id($params[UNIT_ID], true);
if ($unit == NULL) {
	http_response_code(404);
	die();
}
$bgpath = "../assets/" . $unit["image_background"];
$fgpath = "../assets/" . $unit["image_detail"];

$img = imagecreatetruecolor(WIDTH, HEIGHT);
imagesavealpha($img, true);
$color = imagecolorallocatealpha($img, 0, 0, 0, 127);
imagefill($img, 0, 0, $color);

if (substr($bgpath, -4) === ".jpg") $bg = imagecreatefromjpeg($bgpath);
else $bg = imagecreatefrompng($bgpath);
$fac = WIDTH / imagesx($bg);
if ($fac * imagesy($bg) < HEIGHT) $fac = HEIGHT / imagesy($bg);
$targetw = $fac * imagesx($bg);
$targeth = $fac * imagesy($bg);
imagecopyresampled($img, $bg, (WIDTH - $targetw) / 2, 0, 0, 0, $targetw, $targeth, imagesx($bg), imagesy($bg));
imagedestroy($bg);

$fg = imagecreatefrompng($fgpath);
$fac = WIDTH / imagesx($fg);
if ($fac * imagesy($fg) < HEIGHT) $fac = HEIGHT / imagesy($fg);
$targetw = $fac * imagesx($fg);
$targeth = $fac * imagesy($fg);
imagecopyresampled($img, $fg, (WIDTH - $targetw) / 2, 0, 0, 0, $targetw, $targeth, imagesx($fg), imagesy($fg));
imagedestroy($fg);

$wm = imagecreatefrompng("../image/watermark.png");
imagecopyresampled($img, $wm, WIDTH - imagesx($wm)*0.5, HEIGHT - COPYRIGHT_LINE_HEIGHT*0.5, 0, imagesy($wm)-COPYRIGHT_LINE_HEIGHT, imagesx($wm)*0.5, COPYRIGHT_LINE_HEIGHT*0.5, imagesx($wm), COPYRIGHT_LINE_HEIGHT);
imagedestroy($wm);

imagepng($img);
imagepng($img, $cachepath);
imagedestroy($img);
?>