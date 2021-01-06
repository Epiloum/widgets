(function(){
	// Generate Document Object
	$('#winNumberSystem .contents').append('\
		<form>\
			<div><label>Input / Output</label>\
				<span class="opt">\
					<select name="i">\
						<option value="bin">Binary</option>\
						<option value="oct">Octal</option>\
						<option value="dec" selected="selected">Decimal</option>\
						<option value="hex">Hexadecimal</option>\
					</select>\
					<select name="o">\
						<option value="bin">Binary</option>\
						<option value="oct">Octal</option>\
						<option value="dec" selected="selected">Decimal</option>\
						<option value="hex">Hexadecimal</option>\
					</select>\
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
				url		: '/proc/numberSystem.php?i=' + $('#winNumberSystem select[name=i]').val() + '&o=' + $('#winNumberSystem select[name=o]').val() + '&s=' + encodeURIComponent($('#winNumberSystem input[name=str]').val()),
				dataType: 'text',
				success	: function(v){
					$('#winNumberSystem input[name=res]').val(v);
				}
			});
		}
		, 200);
	}
	
	$('#winNumberSystem input[type=text]').bind('keydown', submit);
	$('#winNumberSystem select').bind('change', submit);
})()