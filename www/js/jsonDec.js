(function(){
	// Generate Document Object
	$('#winJsonDec .contents').append('\
		<form>\
			<div><label>Input</label><textarea name="input"></textarea></div>\
			<div><label>Result</label><textarea name="res" readonly="readonly"></textarea></div>\
		</form>\
	');
	
	// Submit Event Handler
	var timer;
	var submit = function(e) {
		clearTimeout(timer);
		timer = setTimeout(function(){
			$.ajax({
				type	: 'get',
				url		: '/proc/jsonDec.php?s=' + encodeURIComponent($('#winJsonDec textarea[name=input]').val()),
				dataType: 'text',
				success	: function(v){
				console.log('a');
					$('#winJsonDec textarea[name=res]').val(v);
				}
			});
		}, 200);
	}
	
	$('#winJsonDec textarea[name=input]').bind('keydown', submit);
})()