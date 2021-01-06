<?php
parse_str(trim($_GET['s']), $a);
echo json_encode($a);