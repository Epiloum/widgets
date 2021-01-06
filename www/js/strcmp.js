(function(){
	// Generate Document Object
	$('#winStrcmp .contents').append('\
		<form>\
			<div><label>Input String #1</label><input type="text" name="s1" /></div>\
			<div><label>Input String #2</label><input type="text" name="s2" /></div>\
			<div><label>Result</label><input type="text" name="res" readonly="readonly" /></div>\
		</form>\
	');
	
	// Submit Event Handler
	var timer;
	
	$('#winStrcmp input[type=text]').bind('keydown', function(e){
		clearTimeout(timer);
		timer = setTimeout(function(){
			$.ajax({
				type	: 'get',
				url		: '/proc/strcmp.php?s1=' + $('#winStrcmp input[name=s1]').val() + '&s2=' + $('#winStrcmp input[name=s2]').val(),
				dataType: 'text',
				success	: function(v){
					$('#winStrcmp input[name=res]').val(v);
				}
			});
		}, 200);
	});
})()