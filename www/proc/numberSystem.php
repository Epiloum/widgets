<?php
switch($_GET['i']) {
	case 'hex':
		$i = hexdec($_GET['s']);
		break;
		
	case 'dec':
		$i = intval($_GET['s']);
		break;
		
	case 'oct':
		$i = octdec($_GET['s']);
		break;
		
	case 'bin':
		$i = bindec($_GET['s']);
		break;
}

switch($_GET['o']) {
	case 'hex':
		echo strtoupper(dechex($i));
		break;
		
	case 'dec':
		echo intval($i);
		break;
		
	case 'oct':
		echo decoct($i);
		break;
		
	case 'bin':
		echo decbin($i);
		break;
}