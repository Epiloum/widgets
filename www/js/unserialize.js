(function(){
	// Generate Document Object
	$('#winUnserialize .contents').append('\
		<form>\
			<div><label>Character Set</label>\
				<span class="opt">\
					<label><input type="radio" name="enc" value="utf8" checked="checked" /> UTF-8</label>\
					<label><input type="radio" name="enc" value="euckr" /> EUC-KR</label>\
				</span>\
			</div>\
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
				type	: 'post',
				url		: '/proc/unserialize.php',
				data	: {s:$('#winUnserialize textarea[name=input]').val(), e:$('#winUnserialize .opt input:radio:checked').val()},
				dataType: 'text',
				success	: function(v){
					$('#winUnserialize textarea[name=res]').val(v);
				}
			});
		}, 200);
	}
	
	$('#winUnserialize textarea[name=input]').bind('keydown', submit);
	$('#winUnserialize input[type=radio]').bind('click', submit);
})()