$(document).on('submit', '.create-form', function (event) {
	event.preventDefault();
	var $form = $(this);
	$.ajax({
		url: $form.attr('action'),
		method: 'POST',
		data: $form.serialize(),
	})
	.done(reloadPage)
});

$(document).on('submit', '.update-form', function (event) {
	event.preventDefault();
	var $form = $(this);
	$.ajax({
		url: $form.attr('action'),
		method: 'PUT',
		data: $form.serialize(),
	})
	.done(reloadPage)
});

$(document).on('submit', '.delete-form', function (event) {
	event.preventDefault();
	var $form = $(this);
	$.ajax({
		url: $form.attr('action'),
		method: 'DELETE',
		data: $form.serialize(),
	})
	.done(reloadPage)
});

function reloadPage () {
	$('index').load('/burgers');
};
