(function(){
	// Generate Document Object
	$('#winTimestamp .contents').append('\
		<form class="opt">\
			<input type="radio" name="timestampOpt" id="timestampOpt1" checked="checked" />\
			<label for="timestampOpt1">Timestamp to Date String</label>\
			<input type="radio" name="timestampOpt" id="timestampOpt2" />\
			<label for="timestampOpt2">String to Timestamp</label>\
		</form>\
		<form class="frmTime2Str">\
			<label>Timestamp</label><input type="text" name="timestamp" />\
			<label>Date String</label><input type="text" name="date" readonly="readonly" />\
		</form>\
		<form class="frmStr2Time">\
			<label>Date String</label><input type="text" name="date" />\
			<label>Timestamp</label><input type="text" name="timestamp" readonly="readonly" />\
		</form>\
	');
	
	// Submit Event Handler
	var timer;
	
	$('#winTimestamp form.frmTime2Str input[type=text]').bind('keydown', function(e){
		clearTimeout(timer);
		timer = setTimeout(function(){
			$.ajax({
				type	: 'get',
				url		: '/proc/timestamp.php?timestamp=' + $('#winTimestamp form.frmTime2Str input[name=timestamp]').val() + '&mode=timestamp',
				dataType: 'json',
				success	: function(v){
					$('#winTimestamp form.frmTime2Str input[name=date]').val(v.date);
				}
			});
		}, 200);
	});
	
	$('#winTimestamp form.frmStr2Time input[type=text]').bind('keydown', function(e){
		if((e.which >= 9 && e.which <= 20) || (e.which >= 34 && e.which <= 45))
		{
			// Do Nothing
		}
		else
		{
			clearTimeout(timer);
			timer = setTimeout(function(){
				$.ajax({
					type	: 'get',
					url		: '/proc/timestamp.php?date=' + $('#winTimestamp form.frmStr2Time input[name=date]').val() + '&mode=date',
					dataType: 'json',
					success	: function(v){
						$('#winTimestamp form.frmStr2Time input[name=timestamp]').val(v.timestamp);
					}
				});
			}, 200);
		}
	});
	
	$('#winTimestamp #timestampOpt1').bind('click', function(e){
		$('#winTimestamp .frmTime2Str').css('display', 'block');
		$('#winTimestamp .frmStr2Time').css('display', 'none');
		$('#winTimestamp input[type=text]').val('');
	});
	
	$('#winTimestamp #timestampOpt2').bind('click', function(e){
		$('#winTimestamp .frmTime2Str').css('display', 'none');
		$('#winTimestamp .frmStr2Time').css('display', 'block');
		$('#winTimestamp input[type=text]').val('');
	});
})()