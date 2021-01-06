(function(){
	// Generate Document Object
	$('#winDateDuration .contents').append('\
		<form>\
			<label>Start Date</label><input type="text" name="start" />\
			<label>End Date</label><input type="text" name="end" />\
		</form>\
		<label>Results</label>\
		<ol></ol>\
	');
	
	// Submit Event Handler
	var timer;
	
	$('#winDateDuration input[type=text]').bind('keydown', function(e){

		clearTimeout(timer);
		timer = setTimeout(function(){
			var s = $('#winDateDuration input[name=start]').val();
			var e = $('#winDateDuration input[name=end]').val();
			
			if(s && e)
			{
				$.ajax({
					type	: 'get',
					url		: '/proc/dateDuration.php?s=' + s + '&e=' + e,
					dataType: 'json',
					success	: function(v){
						console.log(v);
						$('#winDateDuration ol').empty();
						$('#winDateDuration ol').append('<li>' + v.sec + '</li>');						
						if(v.min != 'false')
						{
							$('#winDateDuration ol').append('<li>' + v.min + '</li>');
						}
						if(v.hour != 'false')
						{
							$('#winDateDuration ol').append('<li>' + v.hour + '</li>');
						}
						if(v.day != 'false')
						{
							$('#winDateDuration ol').append('<li>' + v.day + '</li>');
						}
					},
					error	: function(v){
						console.log(v);
						$('#winDateDuration ol').empty();
						$('#winDateDuration ol').append('<li>Error</li>');
					}
				});
			}
		}, 200);
	});
})()