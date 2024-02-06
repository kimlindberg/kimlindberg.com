//http://kimlindberg.com/mailgun/?name=stefan&email=stefan@mail.com&text=hej

(function($) {

	$('form').submit(function() {
		var name = $('form').find('input[name="name"]').val()
		var email = $('form').find('input[name="email"]').val()
		var text = $('form').find('textarea').val()

		var url = '/mailgun/?name='+name+'&email='+email+'&text='+text;
		$.get(url, function() {
			alert('Mail sent!');
		});
	});

})(jQuery);