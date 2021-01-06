(function(){
	// Generate Document Object
	$('#winMd5 .contents').append('\
		<form>\
			<div><label>Input String</label><input type="text" name="str" /></div>\
			<div><label>Encoded String</label><input type="text" name="res" readonly="readonly" /></div>\
		</form>\
	');
	
	// Submit Event Handler
	var timer;
	
	$('#winMd5 input[type=text]').bind('keydown', function(e){
		clearTimeout(timer);
		timer = setTimeout(function(){
			$.ajax({
				type	: 'get',
				url		: '/proc/md5.php?s=' + encodeURIComponent($('#winMd5 input[name=str]').val()),
				dataType: 'text',
				success	: function(v){
					$('#winMd5 input[name=res]').val(v);
				}
			});
		}, 200);
	});
})()