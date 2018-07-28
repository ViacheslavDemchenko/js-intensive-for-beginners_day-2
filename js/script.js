window.addEventListener('DOMContentLoaded', function() {

let modal = document.querySelector('.modal'),
	close = document.querySelector('.close'),
	receiveBtn = document.getElementById('receive'),
	nameInput = document.getElementsByClassName('contactform_name')[0],
	phoneInput = document.querySelector('.contactform_phone'),
	mailInput = document.querySelectorAll('.contactform_mail')[0],
	text = document.getElementsByName('message')[0];



receiveBtn.addEventListener('click', function() {
	modal.style.display = 'block';

});

close.addEventListener('click', function() {
	modal.style.display = 'none';
});

nameInput.addEventListener('input', function() {
	text.value = 'Меня зовут ' + nameInput.value + '. И я хочу спросить: ';

	if (nameInput.value == '') {
		text.value = '';
	}
});

});