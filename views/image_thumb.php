<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
define("UNIT_ID", 0);
$params[UNIT_ID] = (int) $params[UNIT_ID];

define("WIDTH", 126);
define("HEIGHT", 126);
define("THUMB_X", 3);
define("THUMB_Y", 3);
define("THUMB_WIDTH", 120);
define("THUMB_HEIGHT", 120);
header("Content-type: image/png");
header("Expires: ".gmdate("D, d M Y H:i:s", time()+2419200)." GMT");
header("Cache-Control: max-age=2419200");

$cachepath = "../cache/image_thumb/" . $params[UNIT_ID] . ".png";
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
$bgpath = "../assets/" . $unit["image_thumb"];
$fgpath = "../image/thumb_frame.png";

$img = imagecreatetruecolor(WIDTH, HEIGHT);
imagesavealpha($img, true);
$color = imagecolorallocatealpha($img, 0, 0, 0, 127);
imagefill($img, 0, 0, $color);
$bgcolor = imagecolorallocatealpha($img, 2, 47, 64, 96);
imagefilledrectangle($img, THUMB_X, THUMB_Y, THUMB_X + THUMB_WIDTH, THUMB_Y + THUMB_HEIGHT, $bgcolor);

if (substr($bgpath, -4) === ".jpg") $bg = imagecreatefromjpeg($bgpath);
else $bg = imagecreatefrompng($bgpath);
imagecopyresampled($img, $bg, THUMB_X, THUMB_Y, 0, 0, THUMB_WIDTH, THUMB_HEIGHT, THUMB_WIDTH, THUMB_HEIGHT);
imagedestroy($bg);

$fg = imagecreatefrompng($fgpath);
imagecopyresampled($img, $fg, 0, 0, 0, 0, WIDTH, HEIGHT, WIDTH, HEIGHT);
imagedestroy($fg);

imagepng($img);
imagepng($img, $cachepath);
imagedestroy($img);
?>