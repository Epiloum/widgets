<?php
switch($_GET['m']) {
	case 'e':
		echo htmlentities($_GET['s']);
		break;
		
	case 'd':
		echo html_entity_decode($_GET['s']);
		break;
}