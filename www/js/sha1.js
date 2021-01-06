(function(){
	// Generate Document Object
	$('#winSha1 .contents').append('\
		<form>\
			<div><label>Input String</label><input type="text" name="str" /></div>\
			<div><label>Encoded String</label><input type="text" name="res" readonly="readonly" /></div>\
		</form>\
	');
	
	// Submit Event Handler
	var timer;
	
	$('#winSha1 input[type=text]').bind('keydown', function(e){
		clearTimeout(timer);
		timer = setTimeout(function(){
			$.ajax({
				type	: 'get',
				url		: '/proc/sha1.php?s=' + $('#winSha1 input[name=str]').val(),
				dataType: 'text',
				success	: function(v){
					$('#winSha1 input[name=res]').val(v);
				}
			});
		}, 200);
	});
})()