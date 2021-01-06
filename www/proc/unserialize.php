<?php
$s = trim($_POST['s']);

if($_POST['e'] == 'euckr') {
	$s = iconv('UTF-8', 'CP949', $s);
}

if($s = unserialize($s)) {
	ob_start();
	print_r($s);
	$s = ob_get_clean();
	
	if($_POST['e'] == 'euckr')
	{
		$s = iconv('CP949', 'UTF-8', $s);
	}

	echo $s;
} else {
	echo 'Unserialize Error (Last Time : ' . date('Y-m-d H:i:s') . ')';
}