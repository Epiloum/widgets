<?php
switch($_GET['m']) {
	case 'e':
		echo base64_encode($_GET['s']);
		break;
		
	case 'd':
		echo base64_decode($_GET['s']);
		break;
}