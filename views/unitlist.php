<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
define("PAGE", 0);
define("FILTERS", 1);
require_once('../includes/general.php');
require_once('../includes/database.php'); 
define("PAGESIZE", 30);

require_once('../includes/units.php'); 

if (!isset($params[PAGE]) || (int) $params[PAGE] <= 0) {
	$params[PAGE] = 1;
}

$joins = [];
$filters = [];
$filterparams = [];
$group = "";
$sort = "";
for ($i = FILTERS; $i < count($params); $i++) {
	$filter = explode(":", $params[$i]);
	if ($filter == "0") continue;
	
	if ($filter[0] == "id") {
		if (count($filter) != 2) continue;
		$filters[] = "units.unit_ingame_id = " . ((int) $filter[1]);
	} else if ($filter[0] == "rarity") {
		if (count($filter) != 2) continue;
		if ($filter[1] == "EVO") {
			$filters[] = "units.unit_rarity = 6 AND units.unit_ex_type = 1";
		} else if ($filter[1] == "AWK") {
			$filters[] = "units.unit_rarity = 6 AND units.unit_ex_type >= 2";
		} else if ($filter[1] == "BAW") {
			$filters[] = "units.unit_rarity = 6 AND units.unit_ex_type = 3";
		} else {
			$filters[] = "units.unit_rarity = " . ((int) $filter[1]);
		}
	} else if ($filter[0] == "element") {
		if (count($filter) != 2) continue;
		$filters[] = "units.unit_element = " . ((int) $filter[1]);
	} else if ($filter[0] == "source") {
		if (count($filter) != 2) continue;
		$ids = explode(",",$filter[1]);
		if (count($ids) == 1) {
			if (((int) $filter[1]) >= 100) {
				$filters[] = "unit_id LIKE \"" . ((int) $filter[1]) . "%\"";
			} else {
				$filters[] = "units.unit_game_id = " . ((int) $filter[1]);
			}
		} else {
			$idlist = implode(",", array_map('intval', $ids));
			$filters[] = "(units.unit_id / 100000) IN (" . $idlist . ")";
		}
	} else if ($filter[0] == "char") {
		if (count($filter) != 2) continue;
		$ids = explode(",",$filter[1]);
		if (count($ids) == 1) $filters[] = "(units.unit_id / 10000) = " . ((int) $filter[1]);
		else {
			$idlist = implode(",", array_map('intval', $ids));
			$filters[] = "(units.unit_id / 10000) IN (" . $idlist . ")";
		}
	} else if ($filter[0] == "arte") {
		if (count($filter) < 2) continue;
		$joinconds = [];
		$joincondsbp = [];
		for ($j = 1; $j < count($filter); $j++) {
			switch ($filter[$j]) {
				case "pct_damage": $joinconds[] = "(artes.arte_type = 5) AS is_pct_damage"; $havingconds[] = "IFNULL(SUM(is_pct_damage),0) > 0"; break;
				case "fix_damage": $joinconds[] = "(artes.arte_type = 6) AS is_fix_damage"; $havingconds[] = "IFNULL(SUM(is_fix_damage),0) > 0"; break;
				case "aoe_damage": $joinconds[] = "(artes.arte_type IN (5,6) AND artes.arte_target = 11) AS is_aoe_damage"; $havingconds[] = "IFNULL(SUM(is_aoe_damage),0) > 0"; break;
				case "heal": $joinconds[] = "(artes.arte_type IN (2,14) AND artes.arte_target = 99) AS is_heal"; $joincondsbp[] = "(bpot_type = 3 AND bpot_target = 99) AS is_heal_bp"; $havingconds[] = "IFNULL(SUM(is_heal),0) + IFNULL(SUM(is_heal_bp),0) > 0"; break;
				case "status": $joinconds[] = "(artes.arte_type IN (3,14) AND artes.arte_target = 99) AS is_status"; $joincondsbp[] = "(bpot_type = 8 AND bpot_target = 99) AS is_status_bp"; $havingconds[] = "IFNULL(SUM(is_status),0) + IFNULL(SUM(is_status_bp),0) > 0"; break;
				case "atk_up": $joinconds[] = "(artes.arte_type = 7 AND artes.arte_target = 99) AS is_atk_up"; $joincondsbp[] = "(bpot_type = 4 AND bpot_target = 99) AS is_atk_up_bp"; $havingconds[] = "IFNULL(SUM(is_atk_up),0) + IFNULL(SUM(is_atk_up_bp),0) > 0"; break;
				case "atk_down": $joinconds[] = "(artes.arte_type = 9 AND artes.arte_target = 10) AS is_atk_down"; $joincondsbp[] = "(bpot_type = 6 AND bpot_target = 10) AS is_atk_down_bp"; $havingconds[] = "IFNULL(SUM(is_atk_down),0) + IFNULL(SUM(is_atk_down_bp),0) > 0"; break;
				case "def_up": $joinconds[] = "(artes.arte_type = 8 AND artes.arte_target = 99) AS is_def_up"; $joincondsbp[] = "(bpot_type = 5 AND bpot_target = 99) AS is_def_up_bp"; $havingconds[] = "IFNULL(SUM(is_def_up),0) + IFNULL(SUM(is_def_up_bp),0) > 0"; break;
				case "def_down": $joinconds[] = "(artes.arte_type = 10 AND artes.arte_target = 10) AS is_def_down"; $joincondsbp[] = "(bpot_type = 7 AND bpot_target = 10) AS is_def_down_bp"; $havingconds[] = "IFNULL(SUM(is_def_down),0) + IFNULL(SUM(is_def_down_bp),0) > 0"; break;
				case "heal_aoe": $joinconds[] = "(artes.arte_type IN (2,14) AND artes.arte_target != 99) AS is_heal_aoe"; $joincondsbp[] = "(bpot_type = 3 AND bpot_target != 99) AS is_heal_aoe_bp"; $havingconds[] = "IFNULL(SUM(is_heal_aoe),0) + IFNULL(SUM(is_heal_aoe_bp),0) > 0"; break;
				case "status_aoe": $joinconds[] = "(artes.arte_type IN (3,14) AND artes.arte_target != 99) AS is_status_aoe"; $joincondsbp[] = "(bpot_type = 8 AND bpot_target != 99) AS is_status_aoe_bp"; $havingconds[] = "IFNULL(SUM(is_status_aoe),0) + IFNULL(SUM(is_status_aoe_bp),0) > 0"; break;
				case "atk_up_aoe": $joinconds[] = "(artes.arte_type = 7 AND artes.arte_target != 99) AS is_atk_up_aoe"; $joincondsbp[] = "(bpot_type = 4 AND bpot_target != 99) AS is_atk_up_aoe_bp"; $havingconds[] = "IFNULL(SUM(is_atk_up_aoe),0) + IFNULL(SUM(is_atk_up_aoe_bp),0) > 0"; break;
				case "atk_down_aoe": $joinconds[] = "(artes.arte_type = 9 AND artes.arte_target != 10) AS is_atk_down_aoe"; $joincondsbp[] = "(bpot_type = 6 AND bpot_target != 10) AS is_atk_down_aoe_bp"; $havingconds[] = "IFNULL(SUM(is_atk_down_aoe),0) + IFNULL(SUM(is_atk_down_aoe_bp),0) > 0"; break;
				case "def_up_aoe": $joinconds[] = "(artes.arte_type = 8 AND artes.arte_target != 99) AS is_def_up_aoe"; $joincondsbp[] = "(bpot_type = 5 AND bpot_target != 99) AS is_def_up_aoe_bp"; $havingconds[] = "IFNULL(SUM(is_def_up_aoe),0) + IFNULL(SUM(is_def_up_aoe_bp),0) > 0"; break;
				case "def_down_aoe": $joinconds[] = "(artes.arte_type = 10 AND artes.arte_target != 10) AS is_def_down_aoe"; $joincondsbp[] = "(bpot_type = 7 AND bpot_target != 10) AS is_def_down_aoe_bp"; $havingconds[] = "IFNULL(SUM(is_def_down_aoe),0) + IFNULL(SUM(is_def_down_aoe_bp),0) > 0"; break;
				case "atk_cleanse": $joinconds[] = "(artes.arte_type IN (19,21)) AS is_atk_cleanse"; $joincondsbp[] = "(bpot_type = 14) AS is_atk_cleanse_bp"; $havingconds[] = "IFNULL(SUM(is_atk_cleanse),0) + IFNULL(SUM(is_atk_cleanse_bp),0) > 0"; break;
				case "def_cleanse": $joinconds[] = "(artes.arte_type IN (20,21)) AS is_def_cleanse"; $joincondsbp[] = "(bpot_type = 15) AS is_def_cleanse_bp"; $havingconds[] = "IFNULL(SUM(is_def_cleanse),0) + IFNULL(SUM(is_def_cleanse_bp),0) > 0"; break;
				case "break_dmg_up": $joincondsbp[] = "(bpot_type = 12) AS is_break_dmg_up"; $havingconds[] = "IFNULL(SUM(is_break_dmg_up),0) > 0"; break;
				case "crit_up": $joinconds[] = "(artes.arte_type = 23) AS is_crit_up"; $joincondsbp[] = "(bpot_type = 13) AS is_crit_up_bp"; $havingconds[] = "IFNULL(SUM(is_crit_up),0) + IFNULL(SUM(is_crit_up_bp),0) > 0"; break;
				case "shield_dmg_up": $joincondsbp[] = "(bpot_type = 17) AS is_shield_dmg_up"; $havingconds[] = "IFNULL(SUM(is_shield_dmg_up),0) > 0"; break;
				case "poison": $joincondsbp[] = "(bpot_type = 9) AS is_poison"; $havingconds[] = "IFNULL(SUM(is_poison),0) > 0"; break;
				case "paralyze": $joincondsbp[] = "(bpot_type = 10) AS is_paralyze"; $havingconds[] = "IFNULL(SUM(is_paralyze),0) > 0"; break;
				case "unseal": $joinconds[] = "(artes.arte_type = 22) AS is_unseal"; $havingconds[] = "IFNULL(SUM(is_unseal),0) > 0"; break;
			}
		}
		if (count($joinconds) + count($joincondsbp) > 0) {
			$joins[] = "LEFT JOIN (SELECT artes.arte_id, artes.arte_type, artes.arte_target" . (count($joinconds) > 0 ? ", " . implode(", ", $joinconds) : "") . " FROM artes) AS artes ON artes.arte_id IN (units.unit_arte1_id, units.unit_arte2_id, units.unit_arte3_id, units.unit_tf_basearte1_id, units.unit_tf_basearte2_id, units.unit_tf_basearte3_id)";
			$joins[] = "LEFT JOIN (SELECT bpot_id, bpot_type, bpot_target" . (count($joincondsbp) > 0 ? ", " . implode(", ", $joincondsbp) : "") . " FROM bond_potentials) AS bp ON bp.bpot_id IN (units.unit_arte1_bpot_id, units.unit_arte2_bpot_id, units.unit_arte3_bpot_id, units.unit_tf_basearte1_bpot_id, units.unit_tf_basearte2_bpot_id, units.unit_tf_basearte3_bpot_id, units.unit_ma_bpot_id, units.unit_maex_bpot_id, units.unit_dualma_bpot_id, units.unit_dualmaex_bpot_id)";
			$group = "GROUP BY units.unit_id HAVING " . implode(" AND ", $havingconds);
		}
	} else if ($filter[0] == "ma") {
		if (count($filter) < 2) continue;
		$joins[] = "LEFT JOIN mysticartes ON units.unit_ma_id = mysticartes.ma_id";
		$joins[] = "LEFT JOIN mysticartes_ex ON units.unit_maex_id = mysticartes_ex.maex_id";
		$joins[] = "LEFT JOIN mysticartes mysticartes_dual ON units.unit_dualmaex_id = mysticartes_dual.ma_id";
		$joins[] = "LEFT JOIN mysticartes_ex mysticartes_ex_dual ON units.unit_dualmaex_id = mysticartes_ex_dual.maex_id";
		for ($j = 1; $j < count($filter); $j++) {
			switch ($filter[$j]) {
				case "pct_damage": $filters[] = "(mysticartes.ma_type IN (5,6) OR mysticartes_dual.ma_type IN (5,6))"; break;
				case "fix_damage": $filters[] = "(mysticartes.ma_type = 6 OR mysticartes_dual.ma_type = 6)"; break;
				case "aoe_damage": $filters[] = "((mysticartes.ma_type IN (5,6) AND 11 IN (mysticartes.ma_target, mysticartes_ex.maex_target)) OR (mysticartes_dual.ma_type IN (5,6) AND 11 IN (mysticartes_dual.ma_target, mysticartes_ex_dual.maex_target)))"; break;
				case "heal": $filters[] = "(mysticartes.ma_type = 2 OR mysticartes_dual.ma_type = 2)"; break;
				case "finish": $filters[] = "((mysticartes.ma_type = 5 AND (mysticartes.ma_value >= 500 OR mysticartes_ex.maex_value >= 500)) OR (mysticartes_dual.ma_type = 5 AND (mysticartes_dual.ma_value >= 500 OR mysticartes_ex_dual.maex_value >= 500)))"; break;
				case "time_stop": $filters[] = "(mysticartes.ma_type = 13 OR mysticartes_dual.ma_type = 13)"; break;
				case "mixed": $filters[] = "((mysticartes.ma_type = 5 AND ((mysticartes.ma_hits < 40 AND mysticartes.ma_value < 500) OR (mysticartes.ma_hits >= 40 AND mysticartes.ma_value >= 500) OR (mysticartes_ex.maex_hits < 40 AND mysticartes_ex.maex_value < 500) OR (mysticartes_ex.maex_hits >= 40 AND mysticartes_ex.maex_value >= 500))) OR (mysticartes_dual.ma_type = 5 AND ((mysticartes_dual.ma_hits < 40 AND mysticartes_dual.ma_value < 500) OR (mysticartes_dual.ma_hits >= 40 AND mysticartes_dual.ma_value >= 500) OR (mysticartes_ex_dual.maex_hits < 40 AND mysticartes_ex_dual.maex_value < 500) OR (mysticartes_ex_dual.maex_hits >= 40 AND mysticartes_ex_dual.maex_value >= 500))))"; break;
				case "quick_charge": $filters[] = "((mysticartes.ma_charge <= 20 OR mysticartes_ex.maex_charge <= 20) OR (mysticartes_dual.ma_charge <= 20 OR mysticartes_ex_dual.maex_charge <= 20))"; break;
				case "hit": $filters[] = "((mysticartes.ma_hits >= 40 OR mysticartes_ex.maex_hits >= 40) OR (mysticartes_dual.ma_hits >= 40 OR mysticartes_ex_dual.maex_hits >= 40))"; break;
			}
		}
	} else if ($filter[0] == "cooptype") {
		if (count($filter) != 2) continue;
		$filters[] = "units.unit_coop_type = " . ((int) $filter[1]);
	} else if ($filter[0] == "coopskill") {
		if (count($filter) != 2) continue;
		$joins[] = "JOIN coop_skills ON units.unit_coop_skill_id = coop_skills.coop_id";
		$filters[] = "coop_skills.coop_type = " . ((int) $filter[1]);
	} else if ($filter[0] == "coopvariant") {
		if (count($filter) != 2) continue;
		$joins[] = "JOIN coop_skills ON units.unit_coop_skill_id = coop_skills.coop_id";
		$filters[] = "coop_skills.coop_variant_type = " . ((int) $filter[1]);
	} else if ($filter[0] == "exskill") {
		if (count($filter) != 3 && count($filter) != 4) continue;
		$joins[] = "JOIN ex_skills ON units.unit_exskill_id = ex_skills.ex_id";
		if ($filter[1] != "-") $filters[] = "ex_skills.ex_type_effect = " . ((int) $filter[1]);
		if ($filter[2] != "-") $filters[] = "ex_skills.ex_type_condition = " . ((int) $filter[2]);
		if (count($filter) == 4 && $filter[3] != "-") $filters[] = "ex_skills.ex_type_values = " . ((int) $filter[3]);
	} else if ($filter[0] == "transform") {
		if (count($filter) != 1) continue;
		$filters[] = "units.unit_exskill_transform_id IS NOT NULL";
	} else if ($filter[0] == "subquests") {
		if (count($filter) != 1) continue;
		$filters[] = "EXISTS (SELECT 1 FROM subquests WHERE subquests.subq_unit_id = units.unit_id)";
	} else if ($filter[0] == "voiced") {
		if (count($filter) != 1) continue;
		$filters[] = "units.unit_cv != \"\"";
	} else if ($filter[0] == "sort") {
		if (count($filter) != 2) continue;
		switch ((int)$filter[1]) {
			case 1: $sort = "ORDER BY units.unit_rarity DESC"; break;
			case 2: $sort = "ORDER BY units.unit_battle_hp DESC"; break;
			case 3: $sort = "ORDER BY units.unit_battle_atk DESC"; break;
			case 4: $sort = "ORDER BY units.unit_battle_def DESC"; break;
			case 5: $sort = "ORDER BY (units.unit_battle_atk + units.unit_battle_def) DESC"; break;
			case 6: $sort = "ORDER BY units.unit_coop_patk DESC"; break;
			case 7: $sort = "ORDER BY units.unit_coop_matk DESC"; break;
			case 8: $sort = "ORDER BY units.unit_coop_pdef DESC"; break;
			case 9: $sort = "ORDER BY units.unit_coop_mdef DESC"; break;
		}
	}
	
	$filterparams[] = $params[$i];
}
$filterjoins = implode(" ", array_unique($joins));
$filterwhere = "";
if (count($filters) > 0) {
	$filterwhere = "WHERE " . implode(" AND ", $filters);
}

$units = [];
$query = get_db_connection()->prepare('SELECT units.* FROM units ' . $filterjoins . ' ' . $filterwhere . ' ' . $group .' ' . $sort .' LIMIT ' . (PAGESIZE+1) . ' OFFSET :pageoff');
//error_log('SELECT units.* FROM units ' . $filterjoins . ' ' . $filterwhere . ' ' . $group .' ' . $sort .' LIMIT ' . (PAGESIZE+1) . ' OFFSET :pageoff');
if ( false===$query ) {
  error_log('SELECT units.* FROM units ' . $filterjoins . ' ' . $filterwhere . ' ' . $group .' ' . $sort .' LIMIT ' . (PAGESIZE+1) . ' OFFSET :pageoff');
  error_log('prepare() failed: ' . print_r(get_db_connection()->errorInfo(),true));
  die();
}
$query->execute([':pageoff' => (((int) $params[PAGE] - 1) * PAGESIZE)]);
while ($unit = $query->fetch(\PDO::FETCH_ASSOC)) {
	$units[] = get_object_for_unit_row($unit);
}

echo $templates->render('unit_list', ['page' => $params[PAGE], 'has_next_page' => (count($units) > PAGESIZE), 'filters' => implode("/", $filterparams), 'showfilters' => true, 'units' => array_slice($units, 0, PAGESIZE)]);
?>
