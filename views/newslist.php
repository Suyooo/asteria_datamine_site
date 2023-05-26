<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
define("CATEGORY_ID", 0);
define("PAGE", 1);
require_once('../includes/general.php');
require_once('../includes/database.php');
require_once('../includes/news.php');

$page = count($params) > 0 ? max(((int)$params[PAGE])-1, 0) : 0;

$newslist = array();
$query = get_db_connection()->prepare('SELECT news_page_id, news_title, news_date_from FROM news INNER JOIN ( SELECT news_page_id AS max_pid, MAX(news_version) AS max_ver FROM news GROUP BY news_page_id ) ON news_page_id = max_pid AND news_version = max_ver WHERE news_category = :category ORDER BY news_date_from DESC, news_id ASC LIMIT :page, 100');
if (count($params) > 0) {
	$cat = (int) $params[CATEGORY_ID];
	if (!array_key_exists($cat, $news_category_names)) $cat = 1;
} else $cat = 1;
$query->execute([':category' => $cat, ':page' => $page * 100]);

//$latest_post = 7;
while ($news_row = $query->fetch(\PDO::FETCH_ASSOC)) {
	$days_since_post = (int) ((time() - $news_row['news_date_from'] / 1000) / (60*60*24));
	/*if ($days_since_post <= $latest_post) {
		$latest_post = $days_since_post;
		$mark_new = true;
	} else {
		$mark_new = false;
	}*/
	$mark_new = false;
	$news = ["page_id" => $news_row["news_page_id"], "title" => $news_row["news_title"], "last_update" => unix_to_jp_time($news_row['news_date_from'], "M j, Y"), "mark_new" => $mark_new];
	$newslist[] = $news;
}

echo $templates->render('news_list', ["category" => $cat, "newslist" => $newslist, "page" => $page]);
?>
