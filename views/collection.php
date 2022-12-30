<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
require_once('../includes/general.php');
require_once('../includes/database.php'); 
require_once('../includes/units.php');

function base64url_encode($data) { 
	return rtrim(strtr(base64_encode($data), '+/', '*;'), '='); 
}

function base64url_decode($data) { 
	return base64_decode(str_pad(strtr($data, '*;', '+/'), strlen($data) % 4, '=', STR_PAD_RIGHT)); 
}

$ids = array();
if (count($params) == 0 || $params[0] === "") {
	$ids = $collection_ids;
} else if (count($params) === 2 && $params[0] === "s") {
	$bytes = base64url_decode($params[1]);
		
	$binstring = "";
	for ($i=0; $i < strlen($bytes); $i++) {
		$binstring = str_pad(decbin(ord($bytes[$i])), 8, "0", STR_PAD_LEFT) . $binstring;
	}
	$binstring = substr($binstring, strpos($binstring, "1") + 1);
	
	$last = 1001001;
	while (strlen($binstring) > 0) {
		$len = substr($binstring, 0, 5);
		$binstring = substr($binstring, 5);
		$len = bindec($len);
		
		if ($len > 27) {
			$ids[count($ids) - 1] += $len % 4;
			continue;
		}
		
		$nextid = substr($binstring, 0, $len);
		$binstring = substr($binstring, $len);
		$nextid = bindec($nextid);
		$last += $nextid;
		$ids[] = $last * 10;
	}
	
	if (count($ids) == 0) {
		echo $templates->render('error', ['error' => 'Invalid Collection URL.']);
		exit;
	}
	
	if ($ids == $collection_ids) {
		header('Location: https://suyo.be/asteria/collection/', true, 303);
		exit;
	}
	
	header('Location: https://suyo.be/asteria/collection/'.implode("/",$ids), true, 303);
	exit;
} else {
	for ($i = 0; $i < count($params); $i++) {
		$ids[] = (int) $params[$i];
	}
	
	if ($ids == $collection_ids) {
		header('Location: https://suyo.be/asteria/collection/', true, 303);
		exit;
	}
}

$units = array();
sort($ids);
for ($i = 0; $i < count($ids); $i++) {
	$obj = get_object_for_unit_id($ids[$i]);
	if ($obj == NULL) continue;
	$units[] = $obj;
}

if (count($units) == 0) {
	echo $templates->render('error', ['error' => 'No units added to the collection yet. Go to the unit list and add some!', 'titleoverride' => 'Collection']);
	exit;
}

$last = 1001001;
$binarystring = "1";
foreach ($ids as $id) {	
	$compressedid = (int) ($id / 10 - $last);
	$last = (int) ($id / 10);
	
	if ($id % 10 > 3) die("Error: Unexpected Evolution ID (only 0 and 1 are known as I write this, there is one that is somehow higher than 3. PLEASE REPORT! Twitter @Suyooo_)");
	
	$binaryid = decbin($compressedid);
	$binarystring .= str_pad(decbin(strlen($binaryid)), 5, "0", STR_PAD_LEFT) . $binaryid . ($id % 10 == 0 ? "" : "111" . str_pad(decbin($id % 10), 2, "0", STR_PAD_LEFT));
}
$bytes = "";
while (strlen($binarystring) > 0) {
	$stringbyte = substr($binarystring, -8);
	$binarystring = substr($binarystring, 0, -8);
	$bytes .= chr(bindec($stringbyte));
}
$b64url = "https://suyo.be/asteria/collection/s/" . base64url_encode($bytes);

$summarystring = "empty collection";
if (count($units) > 3) {
    $summarystring = "including " . $units[0]["name"] . ", " . $units[1]["name"] . ", " . $units[2]["name"] . " and more";
} else if (count($units) == 3) {
    $summarystring = $units[0]["name"] . ", " . $units[1]["name"] . " and " . $units[2]["name"];
} else if (count($units) == 2) {
    $summarystring = $units[0]["name"] . " and " . $units[1]["name"];
} else if (count($units) == 1) {
    $summarystring = $units[0]["name"];
}

echo $templates->render('unit_list', ['page' => 0, 'has_next_page' => false, 'showfilters' => false, 'units' => $units, 'tophtml' => '<div class="row"><div class="one-half column">' . (($ids == $collection_ids) ? '<a class="icon remove smallbutton" style="margin-top: calc(19px - (1.6em + 3px) / 2);" onClick="clearCollection()">Remove All From My Collection</a>' : '<a class="icon add smallbutton" style="margin-top: calc(19px - (1.6em + 3px) / 2);" onClick="saveCollection()">Replace My Collection With This</a>') . '</div><div class="one-half column" ' . (($ids == $collection_ids) ? 'id="myCollectionShareLink" ' : "") . '>Share ' . (($ids == $collection_ids) ? "My" : "This") . ' Collection: <input type="text" value="' . $b64url . '" readonly></div></div>', 'titleoverride' => 'Collection', 'descoverride' => count($units) . ' Unit' . (count($units) != 1 ? "s" : "") . ' (' . $summarystring . ')']);
?>
