(function(){
	// Generate Document Object
	$('#winParseCookie .contents').append('\
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
				url		: '/proc/parseCookie.php?s=' + encodeURIComponent($('#winParseCookie textarea[name=input]').val()) + '&e=' + $('#winParseCookie .opt input:radio:checked').val(),
				dataType: 'text',
				success	: function(v){
					$('#winParseCookie textarea[name=res]').val(v);
				}
			});
		}, 200);
	}
	
	$('#winParseCookie textarea[name=input]').bind('keydown', submit);
	$('#winParseCookie input[type=radio]').bind('click', submit);
})()