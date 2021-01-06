(function(){
	// Generate Document Object
	$('#winParseUrl .contents').append('\
		<form>\
			<div class="input"><label>URL</label><input type="text" name="url" /></div>\
			<div class="output"><label>Scheme</label><input type="text" name="scheme" readonly="readonly" /></div>\
			<div class="output"><label>Host</label><input type="text" name="host" readonly="readonly" /></div>\
			<div class="output"><label>Port</label><input type="text" name="port" readonly="readonly" /></div>\
			<div class="output"><label>Pass</label><input type="text" name="pass" readonly="readonly" /></div>\
			<div class="output"><label>Path</label><input type="text" name="path" readonly="readonly" /></div>\
			<div class="output"><label>Query</label><input type="text" name="query" readonly="readonly" /></div>\
			<div class="output"><label>Fragment</label><input type="text" name="fragment" readonly="readonly" /></div>\
		</form>\
	');
	
	// Submit Event Handler
	var timer;
	
	$('#winParseUrl input[type=text]').bind('keydown', function(e){
		clearTimeout(timer);
		timer = setTimeout(function(){
			$.ajax({
				type	: 'get',
				url		: '/proc/parseUrl.php?s=' + encodeURIComponent($('#winParseUrl input[name=url]').val()),
				dataType: 'json',
				success	: function(v){
					$('#winParseUrl input[name=scheme]').val(v.scheme);
					$('#winParseUrl input[name=host]').val(v.host);
					$('#winParseUrl input[name=port]').val(v.port);
					$('#winParseUrl input[name=pass]').val(v.pass);
					$('#winParseUrl input[name=path]').val(v.path);
					$('#winParseUrl input[name=query]').val(v.query);
					$('#winParseUrl input[name=fragment]').val(v.fragment);
				}
			});
		}, 200);
	});
})()