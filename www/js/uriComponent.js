(function(){
	// Generate Document Object
	$('#winUriComponent .contents').append('\
		<form>\
			<div><label>Option</label>\
				<span class="opt">\
					<label><input type="radio" name="mode" value="e" checked="checked" /> Encoder</label>\
					<label><input type="radio" name="mode" value="d" /> Decoder</label>\
				</span>\
			</div>\
			<div><label>Character Set</label>\
				<span class="enc">\
					<label><input type="radio" name="enc" value="utf8" checked="checked" /> UTF-8</label>\
					<label><input type="radio" name="enc" value="euckr" /> EUC-KR</label>\
				</span>\
			</div>\
			<div><label>Input String</label><input type="text" name="str" /></div>\
			<div><label>Encoded String</label><input type="text" name="res" readonly="readonly" /></div>\
		</form>\
	');
	
	// Submit Event Handler
	var timer;
	var submit = function(e) {
		clearTimeout(timer);
		timer = setTimeout(function(){
			var s = $('#winUriComponent input[name=str]').val();
			var m = $('#winUriComponent .opt input:radio:checked').val();

			if(m == 'e')
			{
				s = encodeURIComponent(s);
			}

			$.ajax({
				type	: 'get',
				url		: '/proc/uriComponent.php?m=' + m + '&s=' + s + '&e=' + $('#winUriComponent .enc input:radio:checked').val(),
				dataType: 'text',
				success	: function(v){
					$('#winUriComponent input[name=res]').val(v);
				}
			});
		}
		, 200);
	}
	
	$('#winUriComponent input[type=text]').bind('keydown', submit);
	$('#winUriComponent input[type=radio]').bind('click', submit);
})()