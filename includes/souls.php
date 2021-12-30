<?php
require_once(__DIR__ . "/database.php");
require_once(__DIR__ . "/units.php");

function get_soul_effect_string($type) {
	if ($type==1)			return "Attack Bonus";
	else if ($type==2)		return "Defense Bonus";
	else if ($type==3)		return "Max HP Bonus";
	else if ($type==4)		return "Attack and Defense Bonus";
	else if ($type==5)		return "Attack and Max HP Bonus";
	else if ($type==6)		return "Defense and Max HP Bonus";
	else if ($type==7)		return "Attack, Defense and Max HP Bonus";
	else if ($type==8)		return "At the end of every turn, heal a set amount of HP";
	else if ($type==10)		return "When being attacked, reduce damage by a set percentage";
	else if ($type==11)		return "When starting a quest, begin with a set amount of OL charge";
	else					throw new Exception($type . " is not a known soul type");
}

function get_soul_effect_string_short($type) {
	if ($type==1)			return "+ATK";
	else if ($type==2)		return "+DEF";
	else if ($type==3)		return "+Max HP";
	else if ($type==4)		return "+ATK, +DEF";
	else if ($type==5)		return "+ATK, +Max HP";
	else if ($type==6)		return "+DEF, +Max HP";
	else if ($type==7)		return "+ATK, +DEF, +Max HP";
	else if ($type==8)		return "Heal Every Turn";
	else if ($type==10)		return "Reduce Damage Taken";
	else if ($type==11)		return "OL on Quest Start";
	else					throw new Exception($type . " is not a known soul type");
}

function get_soul_values_string($type, $value1, $value2, $value3) {
	if ($type==1)			return "+" . $value1 . " ATK";
	else if ($type==2)		return "+" . $value1 . " DEF";
	else if ($type==3)		return "+" . $value1 . " max HP";
	else if ($type==4)		return "+" . $value1 . " ATK, +" . $value2 . " DEF";
	else if ($type==5)		return "+" . $value1 . " ATK, +" . $value2 . " max HP";
	else if ($type==6)		return "+" . $value1 . " DEF, +" . $value2 . " max HP";
	else if ($type==7)		return "+" . $value2 . " ATK, +" . $value3 . " DEF, +" . $value1 . " max HP";
	else if ($type==8)		return "Heal " . $value1 . " HP";
	else if ($type==10)		return "Reduce by " . $value1 . "%";
	else if ($type==11)		return "Start with " . $value1 . " OL";
	else					throw new Exception($type . " is not a known soul type");
}

function get_object_for_soul_id($soul_id, $baseonly = false) {
	$query = get_db_connection()->prepare('SELECT * FROM souls WHERE soul_id = :id');
	$query->execute([':id' => ((int) $soul_id)]);
	$soul_row = $query->fetch(\PDO::FETCH_ASSOC);
	if ($soul_row == NULL) return NULL;
	
	if ($baseonly) return make_soul_object($soul_row, NULL, NULL);
	else return get_object_for_soul_row($soul_row);
}

function get_object_for_soul_row($soul_row) {
	$matching_units = [];
	if ($soul_row["soul_match_type"] == 0) {
		$query = get_db_connection()->prepare('SELECT smch_unit_id FROM soul_matches WHERE smch_soul_id = :id');
		$query->execute([':id' => $soul_row["soul_id"]]);
		while ($match_row = $query->fetch(\PDO::FETCH_ASSOC)) {
			$matching_units[] = get_object_for_unit_id($match_row["smch_unit_id"], true);
		}
	}
		
	$value_rows = [];
	$query = get_db_connection()->prepare('SELECT * FROM soul_skills WHERE sskl_id IN (:id1, :id2, :id3)');
	$query->execute([':id1' => $soul_row["soul_skill_rarity1_id"], ':id2' => $soul_row["soul_skill_rarity2_id"], ':id3' => $soul_row["soul_skill_rarity3_id"]]);
	while ($value_row = $query->fetch(\PDO::FETCH_ASSOC)) {
		$value_rows[$value_row["sskl_id"]] = $value_row;
	}
	
	return make_soul_object($soul_row, $value_rows, $matching_units);
}

function make_soul_object($soul_row, $value_rows, $matching_units) {
	$charname_en = get_char_en_short_name($soul_row["soul_id"] / 100);
	$soulname_en = $charname_en . get_usub_en($soul_row["soul_subtitle_id"]);
	$ret = [
		'id'					=> $soul_row["soul_id"],
		'name'					=> $soulname_en,
		'name_short'			=> $charname_en,
		'game'					=> get_source_en_name(floor($soul_row["soul_id"] / 10000)),
		'game_id'				=> floor($soul_row["soul_id"] / 10000),
		
		'effect'				=> get_soul_effect_string_short($soul_row["soul_type"]),
		'longeffect'			=> get_soul_effect_string($soul_row["soul_type"]),
		'limited'				=> $soul_row["soul_limited_logo"] != NULL,
		
		'matchtype'				=> $soul_row["soul_match_type"],
		'matchgame'				=> $soul_row["soul_match_type"] >= 10 ? get_source_en_name($soul_row["soul_match_type"]) : "",
		'availability'			=> array(),
		
		'image'					=> $soul_row["soul_image"],
		
		'force_open'			=> false
		];
	
	if ($ret["matchtype"] == 0) $ret["matchinfo"] = $matching_units;
	
	$av = $soul_row["soul_availability"];
	for ($rarity = 1; $rarity <= 3; $rarity++) {
		$rarityarr = array();
		for ($element = 1; $element <= 6; $element++) {
			if ($av % 2 == 1) $rarityarr[] = get_element_string($element, false);
			$av = $av >> 1;
		}
		$ret["availability"][] = $rarityarr;
	}
	
	if ($value_rows == NULL) return $ret;
	
	$values = array();
	if ($soul_row["soul_skill_rarity1_id"])
		$values[] = get_soul_values_string($soul_row["soul_type"], $value_rows[$soul_row["soul_skill_rarity1_id"]]["sskl_value1"], $value_rows[$soul_row["soul_skill_rarity1_id"]]["sskl_value2"], $value_rows[$soul_row["soul_skill_rarity1_id"]]["sskl_value3"]);
	else $values[] = NULL;
	if ($soul_row["soul_skill_rarity2_id"])
		$values[] = get_soul_values_string($soul_row["soul_type"], $value_rows[$soul_row["soul_skill_rarity2_id"]]["sskl_value1"], $value_rows[$soul_row["soul_skill_rarity2_id"]]["sskl_value2"], $value_rows[$soul_row["soul_skill_rarity2_id"]]["sskl_value3"]);
	else $values[] = NULL;
	if ($soul_row["soul_skill_rarity3_id"])
		$values[] = get_soul_values_string($soul_row["soul_type"], $value_rows[$soul_row["soul_skill_rarity3_id"]]["sskl_value1"], $value_rows[$soul_row["soul_skill_rarity3_id"]]["sskl_value2"], $value_rows[$soul_row["soul_skill_rarity3_id"]]["sskl_value3"]);
	else $values[] = NULL;
	$ret["values"] = $values;
	
	return $ret;
}
?>
