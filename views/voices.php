<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
define("CHAR", 0);

require_once('../includes/general.php');
require_once('../includes/database.php');

if (count($params) === 0) {
    echo $templates->render('voices_index', []);
} else {
    $char = preg_replace("/[^A-Za-z0-9 ]/", '', $params[CHAR]);
    
    $nquery = get_db_connection()->prepare('SELECT char_short_en, char_subtitle_en FROM characters WHERE char_abbreviation = :char');
    $nquery->execute([':char' => $char]);
    $char_row = $nquery->fetch(\PDO::FETCH_ASSOC);
    if ($char_row == NULL) {
	    http_response_code(404);
	    die();
    }
    $char_name = $char_row["char_short_en"] . ($char_row["char_subtitle_en"] !== NULL ? " [".$char_row["char_subtitle_en"]."]" : "");

    $query = get_db_connection()->prepare('SELECT voice_char, voice_category, voice_partner, voice_file FROM voices WHERE voice_char = :char ORDER BY voice_partner, voice_category, voice_file');
    $query->execute([':char' => $char]);
    
    $voicelist = array();
    $partners = array();
    while ($voice_row = $query->fetch(\PDO::FETCH_ASSOC)) {
        if (!array_key_exists($voice_row["voice_partner"], $voicelist)) {
            if ($voice_row["voice_partner"] === NULL) {
                $partners[] = NULL;
            } else {
                $nquery->execute([':char' => $voice_row["voice_partner"]]);
                $char_row = $nquery->fetch(\PDO::FETCH_ASSOC);
                $partners[] = ["abbrv" => $voice_row["voice_partner"], "name" => $char_row["char_short_en"] . ($char_row["char_subtitle_en"] !== NULL ? " [".$char_row["char_subtitle_en"]."]" : "")];
            }
            $voicelist[$voice_row["voice_partner"]] = [[],[],[]];
        }
        $voicelist[$voice_row["voice_partner"]][$voice_row["voice_category"]][] = $voice_row["voice_file"];
    }
    
    echo $templates->render('voices_list', ["char_name" => $char_name, "voicelist" => $voicelist, "partners" => $partners]);
}
?>
