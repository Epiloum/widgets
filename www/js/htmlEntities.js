(function(){
	// Generate Document Object
	$('#winHtmlEntities .contents').append('\
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
				url		: '/proc/htmlEntities.php?m=' + $('#winHtmlEntities .opt input:radio:checked').val() + '&s=' + encodeURIComponent($('#winHtmlEntities input[name=str]').val()),
				dataType: 'text',
				success	: function(v){
					$('#winHtmlEntities input[name=res]').val(v);
				}
			});
		}
		, 200);
	}
	
	$('#winHtmlEntities input[type=text]').bind('keydown', submit);
	$('#winHtmlEntities input[type=radio]').bind('click', submit);
})()