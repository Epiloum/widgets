<?php
$s = explode(';', trim($_GET['s']));
$a = array();

foreach($s as $v) {
	list($k, $v) = explode('=', $v);
	$a[trim($k)] = $v;
}

print_r($a);