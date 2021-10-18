<?php
require_once(__DIR__ . "/database.php");
require_once(__DIR__ . "/souls.php");

function get_char_en_name($char_id) {
	return get_char_field($char_id, "char_name_en");
}
function get_char_en_short_name($char_id) {
	return get_char_field($char_id, "char_short_en");
}
function get_char_en_subtitle($char_id) {
	$sub = get_char_field($char_id, "char_subtitle_en");
	if ($sub == NULL) return "";
	else return " [" . str_replace(" ", "&nbsp;", $sub) . "]";
}
function get_char_jp_name($char_id) {
	return get_char_field($char_id, "char_name_jp");
}
function get_char_jp_short_name($char_id) {
	return get_char_field($char_id, "char_short_jp");
}
function get_char_jp_subtitle($char_id) {
	$sub = get_char_field($char_id, "char_subtitle_jp");
	if ($sub == NULL) return "";
	else return "【" . str_replace(" ", "&nbsp;", $sub) . "】";
}
function get_char_field($char_id, $field) {
	$query = get_db_connection()->prepare('SELECT ' . $field . ' FROM characters WHERE char_id = :id');
	$query->execute([':id' => ((int) $char_id)]);
	$row = $query->fetch(\PDO::FETCH_ASSOC);
	if ($row == NULL) throw new Exception("No character with ID " . $char_id);
	return $row[$field];
}

function get_source_en_name($src_id) {
	return get_source_field($src_id, "src_name_en") . (($src_id >= 990) ? " (Collab)" : "");
}
function get_source_jp_name($src_id) {
	return get_source_field($src_id, "src_name_jp") . (($src_id >= 990) ? " (コラボイベント)" : "");
}
function get_source_short_name($src_id) {
	return get_source_field($src_id, "src_short");
}
function get_source_field($src_id, $field) {
	$query = get_db_connection()->prepare('SELECT ' . $field . ' FROM sources WHERE src_id = :id');
	$query->execute([':id' => ((int) $src_id)]);
	$row = $query->fetch(\PDO::FETCH_ASSOC);
	if ($row == NULL) throw new Exception("No source with ID " . $src_id);
	return $row[$field];
}

function get_usub_en($usub_id) {
	if ($usub_id == NULL) return "";
	return " [" . str_replace(" ", "&nbsp;", get_usub_field($usub_id, "usub_en")) . "]";
}
function get_usub_jp($usub_id) {
	if ($usub_id == NULL) return "";
	return "【" . str_replace(" ", "&nbsp;", get_usub_field($usub_id, "usub_jp")) . "】";
}
function get_usub_field($usub_id, $field) {
	$query = get_db_connection()->prepare('SELECT ' . $field . ' FROM unit_subtitles WHERE usub_id = :id');
	$query->execute([':id' => ((int) $usub_id)]);
	$row = $query->fetch(\PDO::FETCH_ASSOC);
	if ($row == NULL) throw new Exception("No subtitle with ID " . $usub_id);
	return $row[$field];
}

function get_element_string($element, $capitalize = true) {
	if ($element == 0)		return "";
	else if ($element == 1)		$ret = "fire";
	else if ($element == 2)		$ret = "water";
	else if ($element == 3)		$ret = "wind";
	else if ($element == 4)		$ret = "earth";
	else if ($element == 5)		$ret = "light";
	else if ($element == 6)		$ret = "dark";
	else				throw new Exception($element . " is not a known element");
	
	if ($capitalize==true)		return ucfirst($ret);
	else				return $ret;
}

function get_target_string($target, $capitalize = false) {
	if ($target >= 1 && $target <= 6)
					$ret = "all " . get_element_string($target) . " party units";
	else if ($target == 9)		$ret = "all party units";
	else if ($target == 10)		$ret = "one enemy";
	else if ($target == 11)		$ret = "all enemies";
	else if ($target == 99)		$ret = "this unit";
	else				throw new Exception($target . " is not a known target");
	
	if ($capitalize==true)		return ucfirst($ret);
	else				return $ret;
}
	
function get_target_string_short($target) {
	if ($target >= 1 && $target <= 6)
					return " " . get_element_string($target) . " Units";
	else if ($target == 9)		return " All";
	else if ($target == 10)		return "";
	else if ($target == 11)		return " All";
	else if ($target == 99)		return " Self";
	else				throw new Exception($target . " is not a known target");
}

function get_turn_string($turns, $the = false) {
	if ($turns == 1) {
		if ($the==true)		return "the current turn";
		else			return "current turn";
	} else if ($turns==2)		return "1 turn";
	else				return ($turns - 1) . " turns";
}

function get_arte_string($type, $value, $hits, $target) {
	if ($type==2)			return "Heal " . get_target_string($target) . " for " . $value . "%";
	else if ($type==3)		return "Cure status effects on " . get_target_string($target);
	else if ($type==5)		return $value . "% of damage to " . get_target_string($target) . " (" . $hits . " hits)";
	else if ($type==6)		return $value . " HP of damage to " . get_target_string($target) . " (" . $hits . " hits)";
	else if ($type==7)		return "Increase attack power of " . get_target_string($target) . " by " . $value . "%";
	else if ($type==8)		return "Increase defense power of " . get_target_string($target) . " by " . $value . "%";
	else if ($type==9)		return "Decrease attack power of " . get_target_string($target) . " by " . $value . "%";
	else if ($type==10)		return "Decrease defense power of " . get_target_string($target) . " by " . $value . "%";
	else if ($type==13) {
		if ($value==0)		return "Delay the enemy attack and stop the turn counter for one turn (hit gauge is reset to 0)";
		else			return "Delay the enemy attack and stop the turn counter for one turn (" . $value . "% of the hit gauge is carried over)";
	} else if ($type==14)		return "Heal " . get_target_string($target) . " for " . $value . "% and cure status effects on them";
	else if ($type==19)		return "Cleanse ATK debuffs on " . get_target_string($target);
	else if ($type==20)		return "Cleanse DEF debuffs on " . get_target_string($target);
	else if ($type==21)		return "Cleanse ATK and DEF debuffs on " . get_target_string($target);
	else if ($type==22)		return "Remove MA seals on " . get_target_string($target);
	else if ($type==23)		return "Increase Crit chance by 10% and damage by " . $value . "% on " . get_target_string($target);
	else				throw new Exception($type . " is not a known arte type");
}

function get_arte_string_short($type, $value, $hits, $target) {
	if ($type==2)			return "Heal " . $value . "%" . get_target_string_short($target);
	else if ($type==3)		return "Status Cure" . get_target_string_short($target);
	else if ($type==5)		return $value . "%/" . $hits . get_target_string_short($target);
	else if ($type==6)		return $value . " HP fixed/" . $hits . get_target_string_short($target);
	else if ($type==7)		return "ATK Buff " . $value . "%" . get_target_string_short($target);
	else if ($type==8)		return "DEF Buff " . $value . "%" . get_target_string_short($target);
	else if ($type==9)		return "ATK Debuff " . $value . "%" . get_target_string_short($target);
	else if ($type==10)		return "DEF Debuff " . $value . "%" . get_target_string_short($target);
	else if ($type==13)		return "Time Stop" . ($value > 0 ? ", keep gauge" : "");
	else if ($type==14)		return "Status Cure + Heal " . $value . "%" . get_target_string_short($target);
	else if ($type==19)		return "Cleanse ATK Debuffs " . get_target_string_short($target);
	else if ($type==20)		return "Cleanse DEF Debuffs " . get_target_string_short($target);
	else if ($type==21)		return "Cleanse ATK + DEF Debuffs " . get_target_string_short($target);
	else if ($type==22)		return "Unseal " . get_target_string_short($target);
	else if ($type==23)		return "Crit chance +10%, damage +" . $value . "%" . get_target_string_short($target);
	else				throw new Exception($type . " is not a known arte type");
}

function get_ma_coop_difference_string($type, $value, $coop_value) {
	if ($type==6)			return $coop_value . "% of damage";
	else if ($type==13)		return "Freeze the boss for " . $coop_value . " seconds";
	else				return NULL;
}

function get_ma_summary_string($type, $value, $hits, $target, $olcharge = 9999) {
	if ($type == 13) $matypes = ["Time Stop"];
	else if ($type == 2) $matypes = ["Heal"];
	else {
		$matypes = [];
		if ($type == 5 && $value >= 500) $matypes[] = "Finish";
		if ($hits >= 40) $matypes[] = "Hit";
		if ($target == 11) $matypes[] = "AOE";
		if ($type == 6) $matypes[] = "Fixed" . ((count($matypes) == 0) ? " Damage" : "");
		if (count($matypes) == 0) $matypes[] = "Mixed";
	}
	if ($olcharge <= 20) $matypes[] = "Quick Charge";
	return implode(" + ", $matypes) . " MA";
}

function get_coop_type_string($type, $pdef = NULL, $mdef = NULL) {
	if ($type==1)			return "Attack";
	else if ($type==2)	{
		if ($pdef == NULL) 	return "Defense";
		else if ($pdef > $mdef) return "Defense (Physical)";
		else 			return "Defense (Magic)";
	} else if ($type==3)		return "Magic";
	else				throw new Exception($type . " is not a known coop party type");
}

function get_coop_type_string_short($type) {
	if ($type==1)			return "atk";
	else if ($type==2)		return "def";
	else if ($type==3)		return "matk";
	else				throw new Exception($type . " is not a known coop party type");
}

function filter_empty_strings($element) {
    return ($element != "");
}

function get_coop_skill_name_string($type, $element, $image_variation, $variant, $rarity, $duration) {
	if ($type==1)			$ret = implode(" ", array_filter([get_coop_skill_modifier_string($image_variation, 1), get_element_string($element), "Attack"], "filter_empty_strings"));
	else if ($type==5)		$ret = implode(" ", array_filter([get_coop_skill_modifier_string($image_variation, 1), get_element_string($element), "Shot"], "filter_empty_strings"));
	else if ($type==7)		$ret = implode(" ", array_filter([get_coop_skill_modifier_string($image_variation, 2), "Physical Attack Boost"], "filter_empty_strings"));
	else if ($type==9)		$ret = implode(" ", array_filter([get_coop_skill_modifier_string($image_variation, 2), "Magical Attack Boost"], "filter_empty_strings"));
	else if ($type==11)		$ret = implode(" ", array_filter([get_coop_skill_modifier_string($image_variation, 2), "Physical Defense Boost"], "filter_empty_strings"));
	else if ($type==13)		$ret = implode(" ", array_filter([get_coop_skill_modifier_string($image_variation, 2), "Magical Defense Boost"], "filter_empty_strings"));
	else if ($type==15)		$ret = implode(" ", array_filter([get_coop_skill_modifier_string($image_variation, 1), "Appeal Target"], "filter_empty_strings"));
	else if ($type==16)		$ret = implode(" ", array_filter([get_coop_skill_modifier_string($image_variation, 1), "Hidden Target"], "filter_empty_strings"));
	else if ($type==17)		$ret = "Cross Counter";
	else if ($type==18)	{
		if ($duration == 1)	$ret = implode(" ", array_filter([get_coop_skill_modifier_string($image_variation, 1), "Guard"], "filter_empty_strings"));
		else				$ret = implode(" ", array_filter([get_coop_skill_modifier_string($image_variation, 1), "Double Guard"], "filter_empty_strings"));
	} else if ($type==19)	$ret = implode(" ", array_filter([get_coop_skill_modifier_string($image_variation, 1), "Heal"], "filter_empty_strings"));
	else if ($type==22)		$ret = "Poison Guard";
	else if ($type==50)		$ret = "Protect";
	else				throw new Exception($type . " is not a known coop skill type");
	
	$ret = $ret . " " . $rarity;
	
	if ($variant==0)		return $ret;
	else if ($variant==1)		return $ret . " + Chain Plus";
	else if ($variant==2)		return $ret . " + Drain";
	else if ($variant==3)		return $ret . " + HP Lost";
	else if ($variant==4)		return $ret . " + Luck Heal";
	else if ($variant==5)		return $ret . " + Revenge";
	else if ($variant==6)		return $ret . " + Vital Pinch";
	else				throw new Exception($variant . " is not a known coop skill variant");
}

function get_coop_skill_modifier_string($image_variation, $cat) {
	if ($cat==1)	{					# non-boost skills
		if ($image_variation==1)	return "Fast";
		else if ($image_variation==2)	return "";
		else if ($image_variation==3)	return "High";
		else 				throw new Exception($image_variation . " is not a known coop skill image variation");
	} else if ($cat==2) {				# boost skills
		if ($image_variation==1)	return "Long";
		else if ($image_variation==2)	return "";
		else if ($image_variation==3)	return "Short";
		else 				throw new Exception($image_variation . " is not a known coop skill image variation");
	} else 					throw new Exception("No idea what to do with type " . $cat);
}

function get_coop_skill_desc_string($type, $element, $value, $duration, $variant, $variant_v1, $variant_v2) {
	if ($type==1)			$ret = $value . "% of physical " . get_element_string($element) . " damage";
	else if ($type==5)		$ret = $value . "% of magical " . get_element_string($element) . " damage";
	else if ($type==7)		$ret = "Increase your party's physical attack power by " . $value . "% for " . $duration . " seconds";
	else if ($type==9)		$ret = "Increase your party's magical attack power by " . $value . "% for " . $duration . " seconds";
	else if ($type==11)		$ret = "Increase your party's physical defense power by " . $value . "% for " . $duration . " seconds";
	else if ($type==13)		$ret = "Increase your party's magical defense power by " . $value . "% for " . $duration . " seconds";
	else if ($type==15)		$ret = "Increase the boss' aggression towards your party";
	else if ($type==16)		$ret = "Decrease the boss' aggression towards your party";
	else if ($type==17)		$ret = "Reflect a part of damage taken by your party back at the boss for " . $duration . " seconds";
	else if ($type==18) {
		if ($duration==1)	$ret = "Reduce damage taken by your party from the boss' next attack by " . $value . "%";
		else			$ret = "Reduce damage taken by your party from the boss' next " . $duration . " attacks by " . $value . "%";
	} else if ($type==19)		$ret = "Heal your party for " . $value . "%";
	else if ($type==22)		$ret = "Guard your party against Poison status effects for " . $duration . " seconds";
	else if ($type==50) {
		if ($duration==1)	$ret = "Cover " . $value . " party slots in the target range behind yours for the boss' next attack";
		else			$ret = "Cover " . $value . " party slots in the target range behind yours for the boss' next " . $duration . " attacks";
	} else				throw new Exception($type . " is not a known coop skill type");
	
	if ($variant==0)		return $ret;
	else if ($variant==1)		return $ret . ", and increase the Attack chain by an additional " . $variant_v1 . " points";
	else if ($variant==2)		return $ret . ", and heal your party for a fraction of the damage dealt";
	else if ($variant==3)		return $ret . ", sacrificing " . $variant_v1 . "% of your party's HP";
	else if ($variant==4)		return $ret . ", plus a " . $variant_v1 . "% chance to heal your party by " . $variant_v2 . "%";
	else if ($variant==5)		return $ret . ", and deal additional damage based on the amount of other players' parties currently KO'd";
	else if ($variant==6)		return $ret . ", and deal additional damage if your party is at critical health (30% HP or less)";
	else				throw new Exception($variant + " is not a known coop skill variant");
}

function get_ex_skill_string($type, $cond_type, $value_type, $element, $value1, $value2, $value3) {
	if ($type==11)			return get_ex_skill_cond_string($cond_type, $element, true) . " gain " . get_ex_skill_value_string($value_type, $value1) . " Attack power";
	else if ($type==12)		return get_ex_skill_cond_string($cond_type, $element, true) . " gain " . get_ex_skill_value_string($value_type, $value1) . " Defense power";
	else if ($type==13)		return get_ex_skill_cond_string($cond_type, $element, true) . " gain " . get_ex_skill_value_string($value_type, $value1) . " max HP";
	else if ($type==14)		return get_ex_skill_cond_string($cond_type, $element, true) . " gain " . get_ex_skill_value_string($value_type, $value1) . " Attack power and " . get_ex_skill_value_string($value_type, $value2) . " Defense power";
	else if ($type==15)		return get_ex_skill_cond_string($cond_type, $element, true) . " gain " . get_ex_skill_value_string($value_type, $value1) . " max HP and " . get_ex_skill_value_string($value_type, $value2) . " Attack power";
	else if ($type==16)		return get_ex_skill_cond_string($cond_type, $element, true) . " gain " . get_ex_skill_value_string($value_type, $value1) . " max HP and " . get_ex_skill_value_string($value_type, $value2) . " Defense power";
	else if ($type==17)		return get_ex_skill_cond_string($cond_type, $element, true) . " gain " . get_ex_skill_value_string($value_type, $value1) . " max HP, " . get_ex_skill_value_string($value_type, $value2) . " Attack power and " . get_ex_skill_value_string($value_type, $value3) . " Defense power";
	else if ($type==18)		return get_ex_skill_cond_string($cond_type, $element, true) . " gain " . get_ex_skill_value_string($value_type, $value1) . " Attack power, but lose " . get_ex_skill_value_string($value_type, $value2) . " Defense power";
	else if ($type==33)		return get_ex_skill_cond_string($cond_type, $element, true) . " gain " . get_ex_skill_value_string($value_type, $value1) . " OL charge";
	else if ($type==34)		return get_ex_skill_cond_string($cond_type, $element, true) . " gain " . get_ex_skill_value_string($value_type, $value1) . " Critical chance";
	else if ($type==51)		return "The effect of Frame Attack bonuses increases by " . get_ex_skill_value_string($value_type, $value1) . " for " . get_ex_skill_cond_string($cond_type, $element);
	else if ($type==52)		return "The effect of Frame Defense bonuses increases by " . get_ex_skill_value_string($value_type, $value1) . " for " . get_ex_skill_cond_string($cond_type, $element);
	else if ($type==53)		return "Frame Heal bonuses heal an additional " . get_ex_skill_value_string($value_type, $value1) . " for " . get_ex_skill_cond_string($cond_type, $element);
	else if ($type==54)		return "Frame OL bonuses charge an additional " . get_ex_skill_value_string($value_type, $value1) . " points for " . get_ex_skill_cond_string($cond_type, $element);
	else if ($type==55)		return "The effect of Frame Attack bonuses increases by " . get_ex_skill_value_string(1, $value1) . " and the effect of Frame Defense bonuses by " . get_ex_skill_value_string(1, $value2) . " for " . get_ex_skill_cond_string($cond_type, $element);
	else if ($type==56)		return "Frame Heal bonuses heal an additional " . get_ex_skill_value_string(1, $value1) . " and the effect of Frame Attack bonuses increases by " . get_ex_skill_value_string(1, $value2) . " for " . get_ex_skill_cond_string($cond_type, $element);
	else if ($type==57)		return "The effect of Frame Attack bonuses increases by " . get_ex_skill_value_string(1, $value1) . " and Frame OL bonuses charge an additional " . get_ex_skill_value_string(2, $value2) . " points for " . get_ex_skill_cond_string($cond_type, $element);
	else if ($type==58)		return "Frame Heal bonuses heal an additional " . get_ex_skill_value_string(1, $value1) . " and the effect of Frame Defense bonuses increases by " . get_ex_skill_value_string(1, $value2) . " for " . get_ex_skill_cond_string($cond_type, $element);
	else if ($type==59)		return "The effect of Frame Defense bonuses increases by " . get_ex_skill_value_string(1, $value1) . " and Frame OL bonuses charge an additional " . get_ex_skill_value_string(2, $value2) . " points for " . get_ex_skill_cond_string($cond_type, $element);
	else if ($type==60)		return "Frame Heal bonuses heal an additional " . get_ex_skill_value_string(1, $value1) . " and Frame OL bonuses charge an additional " . get_ex_skill_value_string(2, $value2) . " points for " . get_ex_skill_cond_string($cond_type, $element);
	else if ($type==81)		return get_ex_skill_cond_string($cond_type, $element, true) . " are healed for " . get_ex_skill_value_string(2, $value1) . " HP";
	else if ($type==83)		return "Once per quest, " . get_ex_skill_cond_string($cond_type, $element, false) . ", revive one unit with " . get_ex_skill_value_string(1, $value1) . " HP";
	else				throw new Exception($type . " is not a known EX skill type");
}

function get_ex_skill_string_short($type, $cond_type, $value_type, $element, $value1, $value2, $value3) {
	if ($type==11)			return get_ex_skill_cond_string_short($cond_type, $element) . " gain " . get_ex_skill_value_string($value_type, $value1) . " ATK";
	else if ($type==12)		return get_ex_skill_cond_string_short($cond_type, $element) . " gain " . get_ex_skill_value_string($value_type, $value1) . " DEF";
	else if ($type==13)		return get_ex_skill_cond_string_short($cond_type, $element) . " gain " . get_ex_skill_value_string($value_type, $value1) . " max HP";
	else if ($type==14)		return get_ex_skill_cond_string_short($cond_type, $element) . " gain " . get_ex_skill_value_string($value_type, $value1) . " ATK, " . get_ex_skill_value_string($value_type, $value2) . " DEF";
	else if ($type==15)		return get_ex_skill_cond_string_short($cond_type, $element) . " gain " . get_ex_skill_value_string($value_type, $value1) . " max HP and " . get_ex_skill_value_string($value_type, $value2) . " ATK";
	else if ($type==16)		return get_ex_skill_cond_string_short($cond_type, $element) . " gain " . get_ex_skill_value_string($value_type, $value1) . " max HP and " . get_ex_skill_value_string($value_type, $value2) . " DEF";
	else if ($type==17)		return get_ex_skill_cond_string_short($cond_type, $element) . " gain " . get_ex_skill_value_string($value_type, $value1) . " max HP, " . get_ex_skill_value_string($value_type, $value2) . " ATK, " . get_ex_skill_value_string($value_type, $value3) . " DEF";
	else if ($type==18)		return get_ex_skill_cond_string_short($cond_type, $element) . " gain " . get_ex_skill_value_string($value_type, $value1) . " ATK, lose " . get_ex_skill_value_string($value_type, $value2) . " DEF";
	else if ($type==33)		return get_ex_skill_cond_string_short($cond_type, $element) . " gain " . get_ex_skill_value_string($value_type, $value1) . " OL";
	else if ($type==34)		return get_ex_skill_cond_string_short($cond_type, $element) . " gain " . get_ex_skill_value_string($value_type, $value1) . " Crit chance";
	else if ($type==51)		return "Frame ATK +" . get_ex_skill_value_string($value_type, $value1);
	else if ($type==52)		return "Frame DEF +" . get_ex_skill_value_string($value_type, $value1);
	else if ($type==53)		return "Frame Heal +" . get_ex_skill_value_string($value_type, $value1);
	else if ($type==54)		return "Frame OL +" . get_ex_skill_value_string($value_type, $value1);
	else if ($type==55)		return "Frame ATK +" . get_ex_skill_value_string(1, $value1) . ", DEF +" . get_ex_skill_value_string(1, $value2);
	else if ($type==56)		return "Frame Heal +" . get_ex_skill_value_string(1, $value1) . ", ATK +" . get_ex_skill_value_string(1, $value2);
	else if ($type==57)		return "Frame ATK +" . get_ex_skill_value_string(1, $value1) . ", OL +" . get_ex_skill_value_string(2, $value2);
	else if ($type==58)		return "Frame Heal +" . get_ex_skill_value_string(1, $value1) . ", DEF +" . get_ex_skill_value_string(1, $value2);
	else if ($type==59)		return "Frame DEF +" . get_ex_skill_value_string(1, $value1) . ", OL +" . get_ex_skill_value_string(2, $value2);
	else if ($type==60)		return "Frame Heal +" . get_ex_skill_value_string(1, $value1) . ", OL +" . get_ex_skill_value_string(2, $value2);
	else if ($type==81)		return get_ex_skill_cond_string_short($cond_type, $element) . " heal " . get_ex_skill_value_string(2, $value1) . " HP";
	else if ($type==83)		return "Revive one " . get_ex_skill_cond_string_short($cond_type, $element);
	else				throw new Exception($type . " is not a known EX skill type");
}

function get_ex_skill_cond_string($cond_type, $element, $capitalize = false) {
	if ($cond_type==10)		$ret = "all " . get_element_string($element) . " units";
	else if ($cond_type==21)	$ret = "all " . get_element_string($element) . " units in matching frames";
	else if ($cond_type==31)	$ret = "all " . get_element_string($element) . " units at critical health (30% HP or less)";
	else if ($cond_type==32)	$ret = "all " . get_element_string($element) . " units at full health";
	else if ($cond_type==33)	$ret = "while the first OL bar is filled, change arte set and";
	else if ($cond_type==35)	$ret = "when a " . get_element_string($element) . " unit is KO'd";
	else if ($cond_type==41)	$ret = "every turn, all " . get_element_string($element) . " units";
	else if ($cond_type==44)	$ret = "all " . get_element_string($element) . " units at full health";
	else if ($cond_type==51)	$ret = "at the end of every turn, all " . get_element_string($element) . " units that were damaged in this turn";
	else if ($cond_type==61)	$ret = "for each enemy alive, all " . get_element_string($element) . " units";
	else				throw new Exception($cond_type . " is not a known EX skill condition type");
	
	if ($capitalize==true)		return ucfirst($ret);
	else				return $ret;
}

function get_ex_skill_cond_string_short($cond_type, $element) {
	if ($cond_type==10)		return "all";
	else if ($cond_type==21)	return "matching frames";
	else if ($cond_type==31)	return "crit health";
	else if ($cond_type==32)	return "full health";
	else if ($cond_type==33)	return "Transformation:";
	else if ($cond_type==35)	return "KO\\'d Unit";
	else if ($cond_type==41)	return "Every turn,";
	else if ($cond_type==44)	return "full health";
	else if ($cond_type==51)	return "Damaged Units";
	else if ($cond_type==61)	return "For each enemy,";
	else				throw new Exception($cond_type . " is not a known EX skill condition type");
}

function get_ex_skill_value_string($value_type, $value) {
	if ($value_type==0)		throw new Exception("Can't parse value type 0 - I have no idea what to do!");
	else if ($value_type==1)	return $value . "%";
	else if ($value_type==2)	return $value;
	else				throw new Exception($value_type . " is not a known EX skill value type");
}

function get_ex_skill_transform_label_string($label) {
	if ($label == "【アクセルモード時】")		return "While in Accel Mode";
	else if ($label == "【天使化時】")		return "While Angelized";
	else if ($label == "【神依時】")			return "While in Armatus";
	else if ($label == "【天元神依時】")		return "While in Armatus";
	else if ($label == "【四属性神依時】")		return "While in Armatus";
	else if ($label == "【骸殻化時】")		return "While in Chromatus";
	else if ($label == "【獣人化時】")		return "While transformed";
	else if ($label == "【魔族化時】")		return "While transformed";
	else if ($label == "【第二形態時】")		return "While transformed";
	else if ($label == "【メルネス化時】")		return "While transformed";
	else if ($label == "【ガルデニア完全融合時】")	return "While fused with Gardenia";
	else if ($label == "【ウェヌス化時】")		return "While in Venus Form";
	else if ($label == "【ファイナルフォーム時】")	return "While in Final Form";
	else if ($label == "【ラムダ共鳴時】")		return "While in Lambda Form";
	else if ($label == "【未完成神依時】")		return "While in Experimental Armatus";
	else if ($label == "【増霊極使用時】")		return "While using Booster";
	else						throw new Exception("Unknown transformation type \"" . $label . "\"");
}

function get_bond_potential_string($type, $parent_type, $chance, $value1, $value2, $value3, $turns, $target) {
	if ($type==1) {
		if ($parent_type==2)		$ret = "Heal an additional " . $value1 . "%";
		else if ($parent_type==5)	$ret = "Deal an additional " . $value1 . "% of damage";
		else if ($parent_type==6)	$ret = "Deal an additional " . $value1 . "HP of damage";
		else if ($parent_type==7)	$ret = "Increase Attack power by an additional " . $value1 . "%";
		else if ($parent_type==8)	$ret = "Increase Defense power by an additional " . $value1 . "%";
		else if ($parent_type==9)	$ret = "Decrease Attack power by an additional " . $value1 . "%";
		else if ($parent_type==10)	$ret = "Decrease Defense power by an additional " . $value1 . "%";
		else if ($parent_type==14)	$ret = "Heal an additional " . $value1 . "%";
		else						throw new Exception("No idea how to apply power up bond potential to arte type " . $parent_type);
	} else if ($type==2)			$ret = "Hit count increases by " . $value1;
	else if ($type==3)			$ret = get_arte_string(2, $value1, 0, $target);
	else if ($type==4)			$ret = get_arte_string(7, $value1, 0, $target) . " (" . get_turn_string($turns) . ")";
	else if ($type==5)			$ret = get_arte_string(8, $value1, 0, $target) . " (" . get_turn_string($turns) . ")";
	else if ($type==6)			$ret = get_arte_string(9, $value1, 0, $target) . " (" . get_turn_string($turns) . ")";
	else if ($type==7)			$ret = get_arte_string(10, $value1, 0, $target) . " (" . get_turn_string($turns) . ")";
	else if ($type==8)			$ret = get_arte_string(3, 0, 0, $target);
	else if ($type==9)			$ret = "Poison " . get_target_string($target) . " for " . get_turn_string($turns, true);
	else if ($type==10)			$ret = "Paralyze " . get_target_string($target) . " for " . get_turn_string($turns, true);
	else if ($type==12)			$ret = "Deal an additional " . $value1 . "% of break gauge damage";
	else if ($type==13)			$ret = "Crit chance is increased by " . $value1 . "%";
	else if ($type==14)			$ret = get_arte_string(19, 0, 0, $target);
	else if ($type==15)			$ret = get_arte_string(20, 0, 0, $target);
	else if ($type==17)			$ret = "Shield damage is increased by " . $value1 . "%";
	else					throw new Exception($type . " is not a known bond potential type");
	
	if ($chance==100)			return $ret;
	else					return $ret + " (" . $chance . "% chance)";
}

function get_bond_potential_string_short($type, $parent_type, $chance, $value1, $value2, $value3, $turns, $target) {
	if ($type==1) {
		if ($parent_type==6)	$ret = "+" . $value1 . " HP";
		else			$ret = "+" . $value1 . "%";
	} else if ($type==2)		$ret = "+" . $value1 . " hits";
	else if ($type==3)		$ret = get_arte_string_short(2, $value1, 0, $target);
	else if ($type==4)		$ret = get_arte_string_short(7, $value1, 0, $target);
	else if ($type==5)		$ret = get_arte_string_short(8, $value1, 0, $target);
	else if ($type==6)		$ret = get_arte_string_short(9, $value1, 0, $target);
	else if ($type==7)		$ret = get_arte_string_short(10, $value1, 0, $target);
	else if ($type==8)		$ret = get_arte_string_short(3, 0, 0, $target);
	else if ($type==9)		$ret = "Poison" . get_target_string_short($target);
	else if ($type==10)		$ret = "Paralyze" . get_target_string_short($target);
	else if ($type==12)		$ret = $value1 . "% break gauge damage" . get_target_string_short($target);
	else if ($type==13)		$ret = "Crit chance +" . $value1 . "%";
        else if ($type==14)             $ret = get_arte_string_short(19, 0, 0, $target);
        else if ($type==15)             $ret = get_arte_string_short(20, 0, 0, $target);
	else if ($type==17)		$ret = "Shield DMG +" . $value1 . "%";
	else				throw new Exception($type . " is not a known bond potential type");
	
	if ($chance==100)		return $ret;
	else				return $ret . ", " . $chance . "% chance";
}

function get_object_for_unit_id($unit_id, $baseonly = false) {
	$query = get_db_connection()->prepare('SELECT * FROM units WHERE unit_id = :id');
	$query->execute([':id' => ((int) $unit_id)]);
	$unit_row = $query->fetch(\PDO::FETCH_ASSOC);
	if ($unit_row == NULL) return NULL;
	
	if ($baseonly) return make_unit_object($unit_row, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
	else return get_object_for_unit_row($unit_row);
}

function get_object_for_unit_row($unit_row) {
	$query = get_db_connection()->prepare('SELECT * FROM coop_skills WHERE coop_id = :id');
	$query->execute([':id' => $unit_row["unit_coop_skill_id"]]);
	$coop_skill_row = $query->fetch(\PDO::FETCH_ASSOC);
	if ($coop_skill_row == NULL) return NULL;
	
	$bonds = [];
	
	$arte_rows = NULL;
	if ($unit_row["unit_arte1_id"] != NULL) {
		$arte_rows = [];
		$query = get_db_connection()->prepare('SELECT * FROM artes WHERE arte_id IN (:id1, :id2, :id3)');
		$query->execute([':id1' => $unit_row["unit_arte1_id"], ':id2' => $unit_row["unit_arte2_id"], ':id3' => $unit_row["unit_arte3_id"]]);
		while ($arte_row = $query->fetch(\PDO::FETCH_ASSOC)) {
			if ($arte_row["arte_id"] == $unit_row["unit_arte1_id"]) $arte_rows[0] = $arte_row;
			else if ($arte_row["arte_id"] == $unit_row["unit_arte2_id"]) $arte_rows[1] = $arte_row;
			else if ($arte_row["arte_id"] == $unit_row["unit_arte3_id"]) $arte_rows[2] = $arte_row;
		}
	}
	
	$basearte_rows = NULL;
	if ($unit_row["unit_tf_basearte1_id"] != NULL) {
		$basearte_rows = [];
		$query = get_db_connection()->prepare('SELECT * FROM artes WHERE arte_id IN (:id1, :id2, :id3)');
		$query->execute([':id1' => $unit_row["unit_tf_basearte1_id"], ':id2' => $unit_row["unit_tf_basearte2_id"], ':id3' => $unit_row["unit_tf_basearte3_id"]]);
		while ($arte_row = $query->fetch(\PDO::FETCH_ASSOC)) {
			if ($arte_row["arte_id"] == $unit_row["unit_tf_basearte1_id"]) $basearte_rows[0] = $arte_row;
			else if ($arte_row["arte_id"] == $unit_row["unit_tf_basearte2_id"]) $basearte_rows[1] = $arte_row;
			else if ($arte_row["arte_id"] == $unit_row["unit_tf_basearte3_id"]) $basearte_rows[2] = $arte_row;
		}
	}
	
	$ma_row = NULL;
	if ($unit_row["unit_ma_id"] != NULL) {
		$query = get_db_connection()->prepare('SELECT * FROM mysticartes WHERE ma_id = :id');
		$query->execute([':id' => $unit_row["unit_ma_id"]]);
		$ma_row = $query->fetch(\PDO::FETCH_ASSOC);
	}
	
	$maex_row = NULL;
	if ($unit_row["unit_maex_id"] != NULL) {
		$query = get_db_connection()->prepare('SELECT * FROM mysticartes_ex WHERE maex_id = :id');
		$query->execute([':id' => $unit_row["unit_maex_id"]]);
		$maex_row = $query->fetch(\PDO::FETCH_ASSOC);
	}
	
	$dualma_row = NULL;
	if ($unit_row["unit_dualma_id"] != NULL) {
		$query = get_db_connection()->prepare('SELECT * FROM mysticartes WHERE ma_id = :id');
		$query->execute([':id' => $unit_row["unit_dualma_id"]]);
		$dualma_row = $query->fetch(\PDO::FETCH_ASSOC);
	}
	
	$dualmaex_row = NULL;
	if ($unit_row["unit_dualmaex_id"] != NULL) {
		$query = get_db_connection()->prepare('SELECT * FROM mysticartes_ex WHERE maex_id = :id');
		$query->execute([':id' => $unit_row["unit_dualmaex_id"]]);
		$dualmaex_row = $query->fetch(\PDO::FETCH_ASSOC);
	}
	
	$ex_skill_row = NULL;
	if ($unit_row["unit_exskill_id"] != NULL) {
		$query = get_db_connection()->prepare('SELECT * FROM ex_skills WHERE ex_id = :id');
		$query->execute([':id' => $unit_row["unit_exskill_id"]]);
		$ex_skill_row = $query->fetch(\PDO::FETCH_ASSOC);
	}
	
	$ex_skill_tf_row = NULL;
	if ($unit_row["unit_exskill_transform_id"] != NULL) {
		$query = get_db_connection()->prepare('SELECT * FROM ex_skills WHERE ex_id = :id');
		$query->execute([':id' => $unit_row["unit_exskill_transform_id"]]);
		$ex_skill_tf_row = $query->fetch(\PDO::FETCH_ASSOC);
	}
	
	$souls = NULL;
	$bond_rows = NULL;
	if ($unit_row["unit_ex_type"] == 3 && $unit_row["unit_rarity"] == 6) {
		$souls = [];
		$query = get_db_connection()->prepare('SELECT smch_soul_id FROM soul_matches WHERE smch_unit_id = :id');
		$query->execute([':id' => $unit_row["unit_id"]]);
		while ($match_row = $query->fetch(\PDO::FETCH_ASSOC)) {
			$souls[] = get_object_for_soul_id($match_row["smch_soul_id"], true);
		}
		
		$bond_rows = [];
		$query = get_db_connection()->prepare('SELECT * FROM bond_potentials WHERE bpot_id IN (:id1, :id2, :id3, :id4, :id5, :id6, :id7, :id8, :id9, :id10)');
		$query->execute([':id1' => $unit_row["unit_arte1_bpot_id"], ':id2' => $unit_row["unit_arte2_bpot_id"], ':id3' => $unit_row["unit_arte3_bpot_id"], ':id4' => $unit_row["unit_ma_bpot_id"], ':id5' => $unit_row["unit_maex_bpot_id"], ':id6' => $unit_row["unit_dualma_bpot_id"], ':id7' => $unit_row["unit_dualmaex_bpot_id"], ':id8' => $unit_row["unit_tf_basearte1_bpot_id"], ':id9' => $unit_row["unit_tf_basearte2_bpot_id"], ':id10' => $unit_row["unit_tf_basearte3_bpot_id"]]);
		while ($bond_row = $query->fetch(\PDO::FETCH_ASSOC)) {
			$bond_rows[$bond_row["bpot_id"]] = $bond_row;
		}
	}
	
	$subquest_rows = [];
	$query = get_db_connection()->prepare('SELECT * FROM subquests WHERE subq_unit_id = :id');
	$query->execute([':id' => $unit_row["unit_id"]]);
	while ($subquest_row = $query->fetch(\PDO::FETCH_ASSOC)) {
		$subquest_rows[] = $subquest_row;
	}
	if (count($subquest_rows) == 0) $subquest_rows = NULL;
	
	$partner_info = [];
	$partner_info["partner_id"] = false;
	$partner_info["partners"] = [];
	$query = get_db_connection()->prepare('SELECT pmch_partner_id FROM partner_matches WHERE pmch_awakening_id = :id');
	$query->execute([':id' => $unit_row["unit_id"]]);
	while ($partner_row = $query->fetch(\PDO::FETCH_ASSOC)) {
		$partner_info["partners"][] = get_object_for_unit_id($partner_row["pmch_partner_id"], true);
	}
	
	return make_unit_object($unit_row, $coop_skill_row, $arte_rows, $basearte_rows, $ma_row, $maex_row, $dualma_row, $dualmaex_row, $ex_skill_row, $ex_skill_tf_row, $souls, $subquest_rows, $bond_rows, $partner_info);
}

function make_unit_object($unit_row, $coop_skill_row, $arte_rows, $basearte_rows, $ma_row, $maex_row, $dualma_row, $dualmaex_row, $ex_skill_row, $ex_skill_tf_row, $souls, $subquest_rows, $bond_rows, $partner_info) {
	$avgOlPerTurnFromAttacks = 9; 			// Regular attacks on matched frame are a weighted random distribution from 6 to 14 hits.
	$stdOlPerTurnFromAttacks = 2.45764;		// More info: https://docs.google.com/document/d/1j0b1Ddii3TrUEEIZ54V5CaIzAnKjKUDHQzBdwMdU_Fc
	$avgOlPerTurn = 0;						// avgOl will save the sums while iterating over the artes, and will store the mean when done
	$avgOlPerTurnBaseArtes = 0;
	$stdOlPerTurn = 0;						// stdOl will save the squared sums while iterating over the artes, and will store the stddev when done
	$stdOlPerTurnBaseArtes = 0;
	$minOlPerTurn = 999;
	$maxOlPerTurn = 0;
	$minOlPerTurnBaseArtes = 999;
	$maxOlPerTurnBaseArtes = 0;
	
	$awaken_info = NULL;
	$awaken_id_offset = NULL;
	$awaken_link_label = NULL;
	if ($unit_row["unit_ex_type"] == 1) {
		if ($unit_row["unit_rarity"] == 5) {
			$awaken_info = "Evolvable";
			$awaken_id_offset = 1;
			$awaken_link_label = "See Evolved Unit ▶";
		} else if ($unit_row["unit_rarity"] == 6) {
			$awaken_info = "Evolved";
			$awaken_id_offset = -1;
			$awaken_link_label = "◀ See Base Unit";
		}
	} else if ($unit_row["unit_ex_type"] == 2) {
		if ($unit_row["unit_rarity"] == 5) {
			$awaken_info = "Awakenable";
			$awaken_id_offset = 10;
			$awaken_link_label = "See Awakened Unit ▶";
		} else if ($unit_row["unit_rarity"] == 6) {
			$awaken_info = "Awakened";
			$awaken_id_offset = -10;
			$awaken_link_label = "◀ See Base Unit";
		}
	} else if ($unit_row["unit_ex_type"] == 3) {
		if ($unit_row["unit_rarity"] == 5) {
			$awaken_info = "(Bond) Awakenable";
			$awaken_id_offset = 10;
			$awaken_link_label = "See Awakened Unit ▶";
		} else if ($unit_row["unit_rarity"] == 6) {
			$awaken_info = "Bond Awakenable";
			$awaken_id_offset = -10;
			$awaken_link_label = "◀ See Base Unit";
		}
	} else if ($unit_row["unit_ex_type"] == 4) {
		$awaken_info = "Awakening Partner";
		$awaken_id_offset = 0;
		$awaken_link_label = "View Partners ▶";
	}
	
	$charname_en = get_char_en_short_name($unit_row["unit_id"] / 10000);
	$charname_jp = get_char_jp_short_name($unit_row["unit_id"] / 10000);
	$unitname_en = $charname_en . get_usub_en($unit_row["unit_subtitle_id"]);
	$unitname_jp = $charname_jp . get_usub_jp($unit_row["unit_subtitle_id"]);
	$ret = [
		'id'				=> $unit_row["unit_id"],
		'ingame_id'			=> $unit_row["unit_ingame_id"],
		'name'				=> $unitname_en,
		'name_jp'			=> $unitname_jp,
        'name_short'		=> $charname_en,
        'name_short_jp'		=> $charname_jp,
		'game'				=> get_source_en_name($unit_row["unit_game_id"]),
		'rarity'			=> $unit_row["unit_rarity"] . (($unit_row["unit_ex_type"] == 0) ? "" : " " . (($unit_row["unit_ex_type"] == 1) ? "evo" : "awk")),
		'element'			=> get_element_string($unit_row["unit_element"], false),
		'awaken_info'		=> $awaken_info,
		'awaken_star_type'	=> ($unit_row["unit_ex_type"] == 1) ? "evolve" : "awaken",
		'awaken_related_id'	=> $unit_row["unit_id"] + $awaken_id_offset,
		'awaken_link_label'	=> $awaken_link_label,
		
		'has_bonus'         => $unit_row["unit_has_bonus_level"] == 1,
		'level'				=> $unit_row["unit_max_level"],
		'stats_hp'			=> $unit_row["unit_battle_hp"],
		'stats_atk'			=> $unit_row["unit_battle_atk"],
		'stats_def'			=> $unit_row["unit_battle_def"],
		
		'coop_type'			=> get_coop_type_string($unit_row["unit_coop_type"]),
		'coop_type_short'		=> get_coop_type_string_short($unit_row["unit_coop_type"]),
		'coop_hp'			=> $unit_row["unit_battle_hp"],
		'coop_patk'			=> $unit_row["unit_coop_patk"],
		'coop_pdef'			=> $unit_row["unit_coop_pdef"],
		'coop_matk'			=> $unit_row["unit_coop_matk"],
		'coop_mdef'			=> $unit_row["unit_coop_mdef"],
		'coop_bonus_hp'			=> $unit_row["unit_coop_type_bonus_hp"],
		'coop_bonus_patk'		=> $unit_row["unit_coop_type_bonus_patk"],
		'coop_bonus_pdef'		=> $unit_row["unit_coop_type_bonus_pdef"],
		'coop_bonus_matk'		=> $unit_row["unit_coop_type_bonus_matk"],
		'coop_bonus_mdef'		=> $unit_row["unit_coop_type_bonus_mdef"],
		
		'image_detail'			=> $unit_row["unit_image_detail"],
		'image_background'		=> $unit_row["unit_image_background"],
		'image_mypage'			=> $unit_row["unit_image_mypage"],
		'image_thumb'			=> $unit_row["unit_image_thumbnail"],
		'image_preview'			=> $unit_row["unit_image_preview"],
		
		'partner_info'			=> $partner_info,
		
		// properties used only by certain pages, setting them here to avoid warnings
		'patch_change'			=> false
		];
	
	if (!$coop_skill_row) return $ret;	// only get base object
		
	if ($unit_row["unit_has_bonus_level"] == 1) {
	    $ret += [
		    'level_bonus'		=> $ret["level"],
		    'stats_hp_bonus'	=> $ret["stats_hp"],
		    'stats_atk_bonus'	=> $ret["stats_atk"],
		    'stats_def_bonus'	=> $ret["stats_def"],
	    ];
	    
	    if ($unit_row["unit_rarity"] < 6) $r = 24 + $unit_row["unit_rarity"];
	    else if ($unit_row["unit_ex_type"] == 1) $r = 54;
	    else $r = 60;
	    $oldpow = $ret["stats_hp"]/10 + $ret["stats_atk"] + $ret["stats_def"] - $r*10;
	    
		$ret["level"] -= 20;
		$ret["stats_hp"] = $ret["stats_hp"] - round($ret["stats_hp"] - ($ret["stats_hp"] * $oldpow) / ($oldpow + $r * 10),-2);
		$ret["stats_atk"] = $ret["stats_atk"] - round($ret["stats_atk"] - ($ret["stats_atk"] * $oldpow) / ($oldpow + $r * 10),-1);
		$ret["stats_def"] = $ret["stats_def"] - round($ret["stats_def"] - ($ret["stats_def"] * $oldpow) / ($oldpow + $r * 10),-1);
	}
	
	$ret["copyinfo"] = (($unit_row["unit_rarity"] > 6) ? "6" : $unit_row["unit_rarity"]) . "★ ";
	if ($unit_row["unit_rarity"] == 5) {
		if ($unit_row["unit_ex_type"] == 1)			$ret["copyinfo"] .= "(Evolvable) ";
		else if ($unit_row["unit_ex_type"] == 2)	$ret["copyinfo"] .= "(Awakenable) ";
		else if ($unit_row["unit_ex_type"] == 3)	$ret["copyinfo"] .= "(Bond Awakenable) ";
	} else if ($unit_row["unit_rarity"] == 6) {
		if ($unit_row["unit_ex_type"] == 1)			$ret["copyinfo"] .= "(Evo) ";
		else if ($unit_row["unit_ex_type"] == 2)	$ret["copyinfo"] .= "(Awk) ";
		else if ($unit_row["unit_ex_type"] == 3)	$ret["copyinfo"] .= "(BAW) ";
	}
	$ret["copyinfo"] .= get_element_string($unit_row["unit_element"]) . " " . $unitname_en . " | HP " . $unit_row["unit_battle_hp"] . " Atk " . $unit_row["unit_battle_atk"] . " Def " . $unit_row["unit_battle_def"];
	
	$ret += [
		'coop_name'		=> get_coop_skill_name_string($coop_skill_row["coop_type"], $coop_skill_row["coop_element"], $coop_skill_row["coop_icon_variation"], $coop_skill_row["coop_variant_type"], $coop_skill_row["coop_rarity"], $coop_skill_row["coop_duration"]),
		'coop_element'	=> get_element_string($coop_skill_row["coop_element"], false),
		'coop_description'=> get_coop_skill_desc_string($coop_skill_row["coop_type"], $coop_skill_row["coop_element"], $coop_skill_row["coop_value"], $coop_skill_row["coop_duration"], $coop_skill_row["coop_variant_type"], $coop_skill_row["coop_variant_value1"], $coop_skill_row["coop_variant_value2"])
	];
	
	if ($ex_skill_row) {
		$ret["ex_skill"] = get_ex_skill_string($ex_skill_row["ex_type_effect"], $ex_skill_row["ex_type_condition"], $ex_skill_row["ex_type_values"], $unit_row["unit_element"], $ex_skill_row["ex_value1"], $ex_skill_row["ex_value2"], $ex_skill_row["ex_value3"]);
		$ret["copyinfo"] .= " | EX Skill: " . get_ex_skill_string_short($ex_skill_row["ex_type_effect"], $ex_skill_row["ex_type_condition"], $ex_skill_row["ex_type_values"], $unit_row["unit_element"], $ex_skill_row["ex_value1"], $ex_skill_row["ex_value2"], $ex_skill_row["ex_value3"]);
	} else $ret["ex_skill"] = NULL;
	
	if ($ex_skill_tf_row) {
		$ret["ex_skill_tf"] = get_ex_skill_string($ex_skill_tf_row["ex_type_effect"], $ex_skill_tf_row["ex_type_condition"], $ex_skill_tf_row["ex_type_values"], $unit_row["unit_element"], $ex_skill_tf_row["ex_value1"], $ex_skill_tf_row["ex_value2"], $ex_skill_tf_row["ex_value3"]);
		$ret["copyinfo"] .= " | " . get_ex_skill_string_short($ex_skill_tf_row["ex_type_effect"], $ex_skill_tf_row["ex_type_condition"], $ex_skill_tf_row["ex_type_values"], $unit_row["unit_element"], $ex_skill_tf_row["ex_value1"], $ex_skill_tf_row["ex_value2"], $ex_skill_tf_row["ex_value3"]);
	} else $ret["ex_skill_tf"] = NULL;
	
	$ret["copyinfo"] .= "\\nArtes: ";
	if ($basearte_rows) {
		$artes = [];
		$i = 1;
		foreach ($basearte_rows as $arte_row) {
			$bond_row = NULL;
			$maxOl = $arte_row["arte_hits"];
			$minOl = $arte_row["arte_hits"];
			$olWeighted = $arte_row["arte_hits"];
			if (isset($bond_rows[$unit_row['unit_tf_basearte'.$i.'_bpot_id']])) {
				$bond_row = $bond_rows[$unit_row['unit_tf_basearte'.$i.'_bpot_id']];
				if ($bond_row["bpot_type"] == 2) { // is hit bonus
					if ($bond_row['bpot_chance'] == 100) $minOl += $bond_row["bpot_value1"];
					if ($bond_row['bpot_chance'] != 0) $maxOl += $bond_row["bpot_value1"];
					$olWeighted += ($bond_row['bpot_chance']/100) * $bond_row["bpot_value1"];
				}
			}
			$avgOlPerTurnBaseArtes += $olWeighted * $arte_row['arte_chance'] ;
			$stdOlPerTurnBaseArtes += $olWeighted * $olWeighted * $arte_row['arte_chance'] ;
			if ($minOl < $minOlPerTurnBaseArtes) $minOlPerTurnBaseArtes = $minOl;
			else if ($maxOl > $maxOlPerTurnBaseArtes) $maxOlPerTurnBaseArtes = $maxOl;
			
			$artes[] =	[
				'name'			=> $arte_row['arte_name'],
				'description'	=> get_arte_string($arte_row["arte_type"], $arte_row["arte_value"], $arte_row["arte_hits"], $arte_row["arte_target"]),
				'olcharge'		=> $olWeighted,
				'chance'		=> $arte_row['arte_chance'],
				'bond'			=> isset($bond_row) ? get_bond_potential_string($bond_row["bpot_type"], $arte_row["arte_type"], $bond_row["bpot_chance"], $bond_row["bpot_value1"], $bond_row["bpot_value2"], $bond_row["bpot_value3"], $bond_row["bpot_turns"], $bond_row["bpot_target"]) : NULL,
				'voice'			=> $arte_row['arte_voice'],
				'num'			=> $i
			];
			if ($i > 1) $ret["copyinfo"] .= " | ";
			$ret["copyinfo"] .= get_arte_string_short($arte_row["arte_type"], $arte_row["arte_value"], $arte_row["arte_hits"], $arte_row["arte_target"]);
			if (isset($bond_row)) $ret["copyinfo"] .= " (BP: " . get_bond_potential_string_short($bond_row["bpot_type"], $arte_row["arte_type"], $bond_row["bpot_chance"], $bond_row["bpot_value1"], $bond_row["bpot_value2"], $bond_row["bpot_value3"], $bond_row["bpot_turns"], $bond_row["bpot_target"]) . ")";
			$i++;
		}
		$ret['tf_baseartes'] = $artes;
		$ret['tf_label'] = get_ex_skill_transform_label_string($unit_row["unit_tf_label"]);
		
		$minOlPerTurnBaseArtes += 6;
		$maxOlPerTurnBaseArtes += 14;
		$stdOlPerTurnBaseArtes = sqrt(100 * $stdOlPerTurnBaseArtes - $avgOlPerTurnBaseArtes * $avgOlPerTurnBaseArtes) / 100 + $stdOlPerTurnFromAttacks;
		$avgOlPerTurnBaseArtes = $avgOlPerTurnBaseArtes / 100 + $avgOlPerTurnFromAttacks;
	    
	    $ret["copyinfo"] .= "\\nTransformed Artes: ";
	} else $ret['tf_baseartes'] = NULL;
	
	if ($arte_rows) {
		$artes = [];
		$i = 1;
		foreach ($arte_rows as $arte_row) {
			$bond_row = NULL;
			$maxOl = $arte_row["arte_hits"];
			$minOl = $arte_row["arte_hits"];
			$olWeighted = $arte_row["arte_hits"];
			if (isset($bond_rows[$unit_row['unit_arte'.$i.'_bpot_id']])) {
				$bond_row = $bond_rows[$unit_row['unit_arte'.$i.'_bpot_id']];
				if ($bond_row["bpot_type"] == 2) { // is hit bonus
					if ($bond_row['bpot_chance'] == 100) $minOl += $bond_row["bpot_value1"];
					if ($bond_row['bpot_chance'] != 0) $maxOl += $bond_row["bpot_value1"];
					$olWeighted += ($bond_row['bpot_chance']/100) * $bond_row["bpot_value1"];
				}
			}
			$avgOlPerTurn += $olWeighted * $arte_row['arte_chance'];
			$stdOlPerTurn += $olWeighted * $olWeighted * $arte_row['arte_chance'];
			if ($minOl < $minOlPerTurn) $minOlPerTurn = $minOl;
			else if ($maxOl > $maxOlPerTurn) $maxOlPerTurn = $maxOl;
			
			$artes[] =	[
				'name'			=> $arte_row['arte_name'],
				'description'	=> get_arte_string($arte_row["arte_type"], $arte_row["arte_value"], $arte_row["arte_hits"], $arte_row["arte_target"]),
				'olcharge'		=> $olWeighted,
				'chance'		=> $arte_row['arte_chance'],
				'bond'			=> isset($bond_row) ? get_bond_potential_string($bond_row["bpot_type"], $arte_row["arte_type"], $bond_row["bpot_chance"], $bond_row["bpot_value1"], $bond_row["bpot_value2"], $bond_row["bpot_value3"], $bond_row["bpot_turns"], $bond_row["bpot_target"]) : NULL,
				'voice'			=> $arte_row['arte_voice'],
				'num'			=> $i
			];
			if ($i > 1) $ret["copyinfo"] .= " | ";
			$ret["copyinfo"] .= get_arte_string_short($arte_row["arte_type"], $arte_row["arte_value"], $arte_row["arte_hits"], $arte_row["arte_target"]);
			if (isset($bond_row)) $ret["copyinfo"] .= " (BP: " . get_bond_potential_string_short($bond_row["bpot_type"], $arte_row["arte_type"], $bond_row["bpot_chance"], $bond_row["bpot_value1"], $bond_row["bpot_value2"], $bond_row["bpot_value3"], $bond_row["bpot_turns"], $bond_row["bpot_target"]) . ")";
			$i++;
		}
		$ret['artes'] = $artes;
		
		$minOlPerTurn += 5;
		$maxOlPerTurn += 14;
		$stdOlPerTurn = sqrt(100 * $stdOlPerTurn - $avgOlPerTurn * $avgOlPerTurn) / 100 + $stdOlPerTurnFromAttacks;
		$avgOlPerTurn = $avgOlPerTurn / 100 + $avgOlPerTurnFromAttacks;
	} else $ret['artes'] = NULL;
	
	if ($ma_row) {
		$ret["copyinfo"] .= "\\nMA: ";
		
		$bond_row = NULL;
		if (isset($bond_rows[$unit_row['unit_ma_bpot_id']])) $bond_row = $bond_rows[$unit_row['unit_ma_bpot_id']];
		$ret += [
			'ma_name'				=> $ma_row["ma_name"],
			'ma_element'			=> get_element_string($ma_row["ma_element"], false),
			'ma_summary'			=> get_ma_summary_string($ma_row["ma_type"], $ma_row["ma_value"], $ma_row["ma_hits"], $ma_row["ma_target"], $ma_row["ma_charge"]),
			'ma_summary_short'		=> get_ma_summary_string($ma_row["ma_type"], $ma_row["ma_value"], $ma_row["ma_hits"], $ma_row["ma_target"]),
			'ma_description'		=> get_arte_string($ma_row["ma_type"], $ma_row["ma_value"], $ma_row["ma_hits"], $ma_row["ma_target"]),
			'ma_coopdiff'			=> get_ma_coop_difference_string($ma_row["ma_type"], $ma_row["ma_value"], $ma_row["ma_coop_value"]),
			'ma_bond'				=> isset($bond_row) ? get_bond_potential_string($bond_row["bpot_type"], $ma_row["ma_type"], $bond_row["bpot_chance"], $bond_row["bpot_value1"], $bond_row["bpot_value2"], $bond_row["bpot_value3"], $bond_row["bpot_turns"], $bond_row["bpot_target"]) : NULL,
			'ma_charge'				=> $ma_row["ma_charge"],
			'ma_chargeturns'		=> isset($basearte_rows) ? make_chargeturns_object($ma_row["ma_charge"], $avgOlPerTurnBaseArtes, $stdOlPerTurnBaseArtes, $minOlPerTurnBaseArtes, $maxOlPerTurnBaseArtes) : make_chargeturns_object($ma_row["ma_charge"], $avgOlPerTurn, $stdOlPerTurn, $minOlPerTurn, $maxOlPerTurn),
			'ma_voice_use'			=> $ma_row["ma_voice_use"],
			'ma_voice_ready'		=> $ma_row["ma_voice_ready"],
			'ma_image_cutin'		=> $ma_row["ma_image_cutin"]
		];
		$ret["copyinfo"] .= get_arte_string_short($ma_row["ma_type"], $ma_row["ma_value"], $ma_row["ma_hits"], $ma_row["ma_target"]);
		if (isset($bond_row)) $ret["copyinfo"] .= " (BP: " . get_bond_potential_string_short($bond_row["bpot_type"], $ma_row["ma_type"], $bond_row["bpot_chance"], $bond_row["bpot_value1"], $bond_row["bpot_value2"], $bond_row["bpot_value3"], $bond_row["bpot_turns"], $bond_row["bpot_target"]) . ")";
		
		if ($maex_row) {
			$bond_row = NULL;
			if (isset($bond_rows[$unit_row['unit_maex_bpot_id']])) $bond_row = $bond_rows[$unit_row['unit_maex_bpot_id']];
			$ret += [
				'ma_ex_summary'			=> get_ma_summary_string($ma_row["ma_type"], $maex_row["maex_value"], $maex_row["maex_hits"], $maex_row["maex_target"], $maex_row["maex_charge"]),
				'ma_ex_description'		=> get_arte_string($ma_row["ma_type"], $maex_row["maex_value"], $maex_row["maex_hits"], $maex_row["maex_target"]),
				'ma_ex_coopdiff'		=> get_ma_coop_difference_string($ma_row["ma_type"], $maex_row["maex_value"], $maex_row["maex_coop_value"]),
				'ma_ex_bond'			=> isset($bond_row) ? get_bond_potential_string($bond_row["bpot_type"], $ma_row["ma_type"], $bond_row["bpot_chance"], $bond_row["bpot_value1"], $bond_row["bpot_value2"], $bond_row["bpot_value3"], $bond_row["bpot_turns"], $bond_row["bpot_target"]) : NULL,
				'ma_ex_charge'			=> $maex_row["maex_charge"],
				'ma_ex_chargeturns'		=> isset($basearte_rows) ? make_chargeturns_object($maex_row["maex_charge"], $avgOlPerTurn, $stdOlPerTurn, $minOlPerTurn, $maxOlPerTurn, $ma_row["ma_charge"], $avgOlPerTurnBaseArtes, $stdOlPerTurnBaseArtes, $minOlPerTurnBaseArtes, $maxOlPerTurnBaseArtes) : make_chargeturns_object($ma_row["ma_charge"] + $maex_row["maex_charge"], $avgOlPerTurn, $stdOlPerTurn, $minOlPerTurn, $maxOlPerTurn),
				'ma_ex_voice_use'		=> $maex_row["maex_voice_use"],
				'ma_ex_voice_ready'		=> $maex_row["maex_voice_ready"]
			];
			$ret['ma_summary_short'] = get_ma_summary_string($ma_row["ma_type"], $maex_row["maex_value"], $maex_row["maex_hits"], $maex_row["maex_target"]);
			$ret["copyinfo"] .= " | MA2: " . get_arte_string_short($ma_row["ma_type"], $maex_row["maex_value"], $maex_row["maex_hits"], $maex_row["maex_target"]);
			if (isset($bond_row)) $ret["copyinfo"] .= " (BP: " . get_bond_potential_string_short($bond_row["bpot_type"], $ma_row["ma_type"], $bond_row["bpot_chance"], $bond_row["bpot_value1"], $bond_row["bpot_value2"], $bond_row["bpot_value3"], $bond_row["bpot_turns"], $bond_row["bpot_target"]) . ")";
		} else $ret['ma_ex_summary'] = NULL;
	} else $ret['ma_name'] = NULL;
	
	
	if ($unit_row["unit_dualma_soul_id"] != 0) {
		$dualma_soul = get_object_for_soul_id($unit_row["unit_dualma_soul_id"], true);
		$ret['ma_dual_soul'] = $dualma_soul;
		$ret["copyinfo"] .= "\\nDual MA: ";
		
		$bond_row = NULL;
		if (isset($bond_rows[$unit_row['unit_dualma_bpot_id']])) $bond_row = $bond_rows[$unit_row['unit_dualma_bpot_id']];
		$ret += [
			'ma_dual_name'				=> $dualma_row["ma_name"],
			'ma_dual_element'			=> get_element_string($dualma_row["ma_element"], false),
			'ma_dual_summary'			=> get_ma_summary_string($dualma_row["ma_type"], $dualma_row["ma_value"], $dualma_row["ma_hits"], $dualma_row["ma_target"], $dualma_row["ma_charge"]),
			'ma_dual_description'		=> get_arte_string($dualma_row["ma_type"], $dualma_row["ma_value"], $dualma_row["ma_hits"], $dualma_row["ma_target"]),
			'ma_dual_coopdiff'			=> get_ma_coop_difference_string($dualma_row["ma_type"], $dualma_row["ma_value"], $dualma_row["ma_coop_value"]),
			'ma_dual_bond'				=> isset($bond_row) ? get_bond_potential_string($bond_row["bpot_type"], $dualma_row["ma_type"], $bond_row["bpot_chance"], $bond_row["bpot_value1"], $bond_row["bpot_value2"], $bond_row["bpot_value3"], $bond_row["bpot_turns"], $bond_row["bpot_target"]) : NULL,
			'ma_dual_charge'			=> $dualma_row["ma_charge"],
			'ma_dual_chargeturns'		=> isset($basearte_rows) ? make_chargeturns_object($dualma_row["ma_charge"], $avgOlPerTurnBaseArtes, $stdOlPerTurnBaseArtes, $minOlPerTurnBaseArtes, $maxOlPerTurnBaseArtes) : make_chargeturns_object($dualma_row["ma_charge"], $avgOlPerTurn, $stdOlPerTurn, $minOlPerTurn, $maxOlPerTurn),
			'ma_dual_voice_use'			=> $dualma_row["ma_voice_use"],
			'ma_dual_voice_ready'		=> $dualma_row["ma_voice_ready"],
			'ma_dual_image_cutin'		=> $dualma_row["ma_image_cutin"]
		];
		$ret["copyinfo"] .= get_arte_string_short($dualma_row["ma_type"], $dualma_row["ma_value"], $dualma_row["ma_hits"], $dualma_row["ma_target"]);
		if (isset($bond_row)) $ret["copyinfo"] .= " (BP: " . get_bond_potential_string_short($bond_row["bpot_type"], $dualma_row["ma_type"], $bond_row["bpot_chance"], $bond_row["bpot_value1"], $bond_row["bpot_value2"], $bond_row["bpot_value3"], $bond_row["bpot_turns"], $bond_row["bpot_target"]) . ")";
		
		$bond_row = NULL;
		if (isset($bond_rows[$unit_row['unit_dualmaex_bpot_id']])) $bond_row = $bond_rows[$unit_row['unit_dualmaex_bpot_id']];
		$ret += [
			'ma_dual_ex_summary'		=> get_ma_summary_string($dualma_row["ma_type"], $dualmaex_row["maex_value"], $dualmaex_row["maex_hits"], $dualmaex_row["maex_target"], $dualmaex_row["maex_charge"]),
			'ma_dual_ex_description'	=> get_arte_string($dualma_row["ma_type"], $dualmaex_row["maex_value"], $dualmaex_row["maex_hits"], $dualmaex_row["maex_target"]),
			'ma_dual_ex_coopdiff'		=> get_ma_coop_difference_string($dualma_row["ma_type"], $dualmaex_row["maex_value"], $dualmaex_row["maex_coop_value"]),
			'ma_dual_ex_bond'			=> isset($bond_row) ? get_bond_potential_string($bond_row["bpot_type"], $dualma_row["ma_type"], $bond_row["bpot_chance"], $bond_row["bpot_value1"], $bond_row["bpot_value2"], $bond_row["bpot_value3"], $bond_row["bpot_turns"], $bond_row["bpot_target"]) : NULL,
			'ma_dual_ex_charge'			=> $dualmaex_row["maex_charge"],
			'ma_dual_ex_chargeturns'	=> isset($basearte_rows) ? make_chargeturns_object($dualmaex_row["maex_charge"], $avgOlPerTurn, $stdOlPerTurn, $minOlPerTurn, $maxOlPerTurn, $dualma_row["ma_charge"], $avgOlPerTurnBaseArtes, $stdOlPerTurnBaseArtes, $minOlPerTurnBaseArtes, $maxOlPerTurnBaseArtes) : make_chargeturns_object($dualma_row["ma_charge"] + $dualmaex_row["maex_charge"], $avgOlPerTurn, $stdOlPerTurn, $minOlPerTurn, $maxOlPerTurn),
			'ma_dual_ex_voice_use'		=> $dualmaex_row["maex_voice_use"],
			'ma_dual_ex_voice_ready'	=> $dualmaex_row["maex_voice_ready"]
		];
		$ret["copyinfo"] .= " | MA2: " . get_arte_string_short($dualma_row["ma_type"], $dualmaex_row["maex_value"], $dualmaex_row["maex_hits"], $dualmaex_row["maex_target"]);
		if (isset($bond_row)) $ret["copyinfo"] .= " (BP: " . get_bond_potential_string_short($bond_row["bpot_type"], $dualma_row["ma_type"], $bond_row["bpot_chance"], $bond_row["bpot_value1"], $bond_row["bpot_value2"], $bond_row["bpot_value3"], $bond_row["bpot_turns"], $bond_row["bpot_target"]) . ")";
		
		$ret['ma_summary_short'] = "Dual " . get_ma_summary_string($dualma_row["ma_type"], $dualmaex_row["maex_value"], $dualmaex_row["maex_hits"], $dualmaex_row["maex_target"]);
	} else $ret['ma_dual_name'] = NULL;
	
	$ret['souls'] = $souls;
	
	if ($subquest_rows) {
		$subquests = [];
		foreach ($subquest_rows as $subquest_row) {
			$subquests[] = [
				'name'		=>	$subquest_row["subq_name"],
				'level'		=>	$subquest_row["subq_level"]
			];
		}
		$ret['subquests'] = $subquests;
	} else $ret['subquests'] = NULL;
	
	return $ret;
}

function make_chargeturns_object($charge, $avg, $std, $min, $max, $chargeBase = 0, $avgBase = 1, $stdBase = 0, $minBase = 1, $maxBase = 1) {
	$avgTurns = $charge / $avg + $chargeBase / $avgBase;
	$ret = [
		'avg'					=> round(($avgTurns < 1) ? 1 : $avgTurns + 0.5, 2), // 0.5 magic number so the displayed turn count makes more sense to the human
		'ol_avg'				=> round($avg, 2),
		'ol_std'				=> round($std, 2),
		'min'					=> ceil($charge / $max + (($chargeBase > 0) ? ($chargeBase - (ceil($charge / $max) * $max - $charge)) / $maxBase : 0)),
		'max'					=> ceil($charge / $min + (($chargeBase > 0) ? ($chargeBase - (ceil($charge / $min) * $min - $charge)) / $minBase : 0)),
		'std_lower'				=> round($charge / ($avg + $std) + $chargeBase / ($avgBase + $stdBase), 2) + 0.53,
		'std_higher'			=> round($charge / ($avg - $std) + $chargeBase / ($avgBase - $stdBase), 2) + 0.53
	];
	if ($ret['avg'] == 1)	$ret['avg_plural'] = "";
	else					$ret['avg_plural'] = "s";
	
	if ($ret['std_higher'] > $ret['max'] || $ret['std_higher'] < 0) $ret['std_higher'] = $ret['max'];
	if ($ret['std_lower'] < $ret['min']) $ret['std_lower'] = $ret['min'];
	return $ret;
}
?>
