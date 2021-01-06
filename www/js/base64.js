(function(){
	// Generate Document Object
	$('#winBase64 .contents').append('\
		<form>\
			<div><label>Option</label>\
				<span class="opt">\
					<label><input type="radio" name="mode" value="e" checked="checked" /> Encoder</label>\
					<label><input type="radio" name="mode" value="d" /> Decoder</label>\
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
			$.ajax({
				type	: 'get',
				url		: '/proc/base64.php?m=' + $('#winBase64 .opt input:radio:checked').val() + '&s=' + encodeURIComponent($('#winBase64 input[name=str]').val()),
				dataType: 'text',
				success	: function(v){
					$('#winBase64 input[name=res]').val(v);
				}
			});
		}
		, 200);
	}
	
	$('#winBase64 input[type=text]').bind('keydown', submit);
	$('#winBase64 input[type=radio]').bind('click', submit);
})()