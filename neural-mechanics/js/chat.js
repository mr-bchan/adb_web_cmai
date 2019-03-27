$(function() {
	// alert('chat!');
	// $('.btn-chat.close').hide();
	$('.btn-chat.show').on('click', function(event) {
		event.preventDefault();
		$(this).hide();
		$('.btn-chat.hide').show();
		$('.chat-box').show();
	});

	$('.btn-chat.hide').on('click', function(event) {
		event.preventDefault();
		$(this).hide();
		$('.btn-chat.show').show();
		$('.chat-box').hide();
	});

});