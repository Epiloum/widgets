<?php
if($res = json_decode($_GET['s'])) {
	print_r($res);
} else {
	echo 'Error';
}