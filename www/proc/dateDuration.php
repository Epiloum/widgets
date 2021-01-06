<?php
$dur = abs(strtotime($_GET['e']) - strtotime($_GET['s']));

// seconds
$sec = $dur . ' seconds';

// minutes
if($dur >= 60) {
	$min = floor($dur / 60) . ' minutes ' . ($dur % 60) . ' seconds';
}

// hours
if($dur >= 3600) {
	$hour = floor($dur / 3600) . ' hours ' . floor(($dur % 3600) / 60) . ' minutes ' . ($dur % 60) . ' seconds';
}

// days
if($dur >= 86400) {
	$day = floor($dur / 86400) . ' days ' . floor(($dur % 86400) / 3600) . ' hours ' . floor(($dur % 3600) / 60) . ' minutes ' . ($dur % 60) . ' seconds';
}

// export
echo '{"sec":"' . $sec . '","min":"' . ($min? $min: 'false') . '","hour":"' . ($hour? $hour: 'false') . '","day":"' . ($day? $day: 'false') . '"}';