(function(){
	// Generate Document Object
	$('#winParseUrlQuery .contents').append('\
		<form>\
			<label>URL</label><input type="text" name="str" />\
			<label style="float:left">Result</label>\
			<table>\
				<colgroup>\
					<col width="120px" />\
					<col width="*" />\
				</colgroup>\
				<tbody>\
					<th>Key</th>\
					<td>Value</td>\
				</tbody>\
			</table>\
		</form>\
	');
	
	// Submit Event Handler
	var timer;
	
	$('#winParseUrlQuery input[type=text]').bind('keydown', function(e){
		clearTimeout(timer);
		timer = setTimeout(function(){
			$.ajax({
				type	: 'get',
				url		: '/proc/parseUrlQuery.php?s=' + encodeURIComponent($('#winParseUrlQuery input').val()),
				dataType: 'json',
				success	: function(v){
				console.log(v);
					var s = '';
					for(var x in v)
					{
						s += '<tr><th>' + x + '</th><td>' + v[x] + '</td></tr>';
					}
					$('#winParseUrlQuery tbody').html(s);
				}
			});
		}, 200);
	});
})()