<?php
$params = array_slice(explode('/', getenv('REQUEST_URI')), 3);
define("NEWS_ID", 0);
define("VERSION_ID", 1);
require_once('../includes/general.php');
require_once('../includes/database.php');
require_once('../includes/news.php');

if (!isset($params[NEWS_ID]) || (int) $params[NEWS_ID] <= 0) {
    http_response_code(404);
	echo $templates->render('error', ['error' => 'No news ID specified.']);
	exit;
}

$query = get_db_connection()->prepare('SELECT * FROM news WHERE news_page_id = :id ORDER BY news_version DESC');
$query->execute([':id' => ((int) $params[NEWS_ID])]);
$news_row = $query->fetch(\PDO::FETCH_ASSOC);
$all_versions = array();

if ($news_row == NULL) {
    http_response_code(404);
	echo $templates->render('error', ['error' => 'Invalid news ID.']);
	exit;
}

$max_version = $news_row['news_version'];

if (count($params) > 1) {
	while ($news_row != NULL && $news_row['news_version'] != $params[VERSION_ID]) {
		$all_versions[] = ['version' => $news_row['news_version'], 'date' => unix_to_jp_time($news_row['news_date_from'], "M j, Y \a\\t H:i"), 'link' => true];
		$news_row = $query->fetch(\PDO::FETCH_ASSOC);
	}
}

if ($news_row == NULL) {
	echo $templates->render('error', ['error' => 'Invalid version number.']);
	exit;
}

$title = $news_row['news_title'];
$page_id = $news_row['news_page_id'];
$version = $news_row['news_version'];
$image = ($news_row['news_image_or_action'] == NULL || $news_row['news_category'] == 5) ? NULL : "https://suyo.be/asteria/assets/" . $news_row['news_image_or_action'];
$category = $news_category_names[$news_row['news_category']];
$originalDate = unix_to_jp_time($news_row['news_date_original'], "M j, Y");
$fromDate = unix_to_jp_time($news_row['news_date_from'], "M j, Y \a\\t H:i");

$all_versions[] = ['version' => $version, 'date' => $fromDate, 'link' => false];
$news_row = $query->fetch(\PDO::FETCH_ASSOC);
while ($news_row != NULL) {
	$all_versions[] = ['version' => $news_row['news_version'], 'date' => unix_to_jp_time($news_row['news_date_from'], "M j, Y \a\\t H:i"), 'link' => true];
	$news_row = $query->fetch(\PDO::FETCH_ASSOC);
}

echo $templates->render('news_post', ['title' => $title, 'page_id' => $page_id, 'version' => $version, 'image' => $image, 'category' => $category, 'originalDate' => $originalDate, 'fromDate' => $fromDate, 'max_version' => $max_version, 'all_versions' => $all_versions]);
?>
