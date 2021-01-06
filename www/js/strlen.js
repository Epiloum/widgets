(function(){
	// Generate Document Object
	$('#winStrlen .contents').append('\
		<form>\
			<div><label>Input String</label><input type="text" name="str" /></div>\
			<div><label>Length(Byte)</label><input type="text" name="res" readonly="readonly" /></div>\
		</form>\
	');
	
	// Submit Event Handler
	var timer;
	
	$('#winStrlen input[type=text]').bind('keydown', function(e){
		clearTimeout(timer);
		timer = setTimeout(function(){
			$.ajax({
				type	: 'get',
				url		: '/proc/strlen.php?s=' + $('#winStrlen input[name=str]').val(),
				dataType: 'text',
				success	: function(v){
					$('#winStrlen input[name=res]').val(v);
				}
			});
		}, 200);
	});
})()