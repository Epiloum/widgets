<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta property="og:url" content="http://widget.epiloum.net/">
<meta property="og:type" content="website">
<meta property="og:title" content="Epiloum Widget for Web Developer">
<meta property="og:image" content="">
<meta property="og:description" content="Epiloum Widget suggests some of small tools as widget, which have useful function for developer, programmer and DB manager. (e.g. Unix timestamp converter, base64 decoder and encoder, and so on.)">
<title>Epiloum Widget for Web Developer</title>
<link rel="stylesheet" type="text/css" href="/css/basis/index.css" />
<script type="text/javascript" src="/js/basis/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="/js/basis/index.js"></script>
<script>
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-45774432-3', 'auto');
	ga('send', 'pageview');
</script>
</head>
<body>
<!-- Title -->
<header>
	<h1>Epiloum Widget for Web Developer</h1>
</header>
<!-- Main Menu -->
<nav>
	<ul class="main">
		<li>
			Date
			<ul>
				<li onclick="ModuleManager.add('timestamp', 'Unix Timestamp Converter')">Unix Timestamp Converter</li>
				<li onclick="ModuleManager.add('dateDuration', 'Date &amp; Time Duration Calculator')">Date &amp; Time Duration Calculator</li>
			</ul>
		</li>
		<li>
			Number
			<ul>
				<li onclick="ModuleManager.add('numberSystem', 'Number System Conversion')">Number System Conversion</li>
			</ul>
		</li>
		<li>
			JSON
			<ul>
				<li onclick="ModuleManager.add('jsonDec', 'JSON Decoder')">JSON Decoder</li>
				<li class="disabled">JSON to XML Converter</li>
			</ul>
		</li>
		<li>
			String
			<ul>
				<li onclick="ModuleManager.add('strlen', 'String Length')">String Length</li>
				<li onclick="ModuleManager.add('strcmp', 'String Compare')">String Compare</li>
				<li onclick="ModuleManager.add('unserialize', 'PHP Unserialize Tool')">PHP Unserialize</li>
				<li onclick="ModuleManager.add('md5', 'MD5 Encrypter')">MD5 Encrypter</li>
				<li onclick="ModuleManager.add('sha1', 'SHA-1 Hash Generator')">SHA-1 Hash Generator</li>
				<li onclick="ModuleManager.add('base64', 'Base64 Encoder &amp; Decoder')">Base64 Encoder &amp; Decoder</li>
				<li onclick="ModuleManager.add('htmlEntities', 'HTML Entities Encoder &amp; Decoder')">HTML Entities Encoder &amp; Decoder</li>
			</ul>
		</li>
		<li>
			Network
			<ul>
				<li class="disabled">HTTP Request Sender</li>
				<li onclick="ModuleManager.add('uriComponent', 'URL Encoder &amp; Decoder')">URL Encoder &amp; Decoder</li>
				<li onclick="ModuleManager.add('parseUrl', 'URL Parser')">URL Parser</li>
				<li onclick="ModuleManager.add('parseUrlQuery', 'URL Query String Parser')">URL Query String Parser</li>
				<li onclick="ModuleManager.add('parseCookie', 'Cookie Parser')">Cookie Parser</li>
			</ul>
		</li>
	</ul>
</nav>
<footer>Epiloum &copy; <?=date('Y')?></footer>
</body>
</html>