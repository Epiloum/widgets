<?php
/*------------------------------------------------------------
 Timestamp
------------------------------------------------------------*/
switch($_GET['mode']) {
	case 'timestamp':		
		$timestamp = intval(trim($_GET['timestamp']));
		$date = date('Y-m-d H:i:s', $timestamp);
		break;
		
	case 'date':		
		$date = $_GET['date'];
		$timestamp = strtotime($_GET['date']);
		break;
}

echo '{"date":"' . $date . '","timestamp":' . $timestamp . '}';