( function($) {
	$('.rollDice').on('click', function(e) {
		e.preventDefault();
		$.ajax({
			url: "https://api.adviceslip.com/advice",
			type: "GET",
			dataType: "json",
			success: function(result) {
				$('#adviceID').html(result.slip.id);
				$('#advice').html(result.slip.advice);
				console.log(result);
			},
			error: function(x,y,z) {
				alert("Error! " + z + "!");
				$('#adviceID').html('117');
				$('#advice').html('It is easy to sit up and take notice, what&apos;s difficult is getting up and taking action.');
			}
		});
	});
})(jQuery);