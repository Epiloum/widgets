<?php
switch($_GET['m']) {
	case 'e':
		switch($_GET['e'])
		{
			case 'euckr':
				$_GET['s'] = iconv('UTF-8', 'CP949', $_GET['s']);
				break;

			default:
			case 'utf8':
				break;
		}
		echo urlencode($_GET['s']);
		break;
		
	case 'd':
		$s = urldecode($_GET['s']);
		switch($_GET['e'])
		{
			case 'euckr':
				$s = iconv('CP949', 'UTF-8', $_GET['s']);
				break;

			default:
			case 'utf8':
				break;
		}
		echo $s;
		break;
}