//jQuery
$('.decor').submit(function validate_form() {
	let st_exp = /^[А-Яа-яІі\s]+/;
	let gr_exp = /^[А-Яа-яІі]{2,2}\-[0-9]/;
	let sp_exp = /^\d{3,3}$/;
	let em_exp = /^[a-z0-9._-]+\@[a-z0-9]+\.[a-z]{2,4}$/;
	let student = document.getElementById('st_input').value;
	let group = document.getElementById('gr_input').value;
	let specialty = document.getElementById('sp_input').value;
	let email = document.getElementById('em_input').value;

	if(student == '')
	{
		alert('Поле ПІБ пусте');
		return false;
	}

	if(group == '')
	{
		alert('Поле Група пусте');
		return false;
	}

	if(specialty == '')
	{
		alert('Поле Спеціальність пусте');
		return false;
	}

	if(email == '')
	{
		alert('Поле Email пусте');
		return false;
	}

	if (st_exp.test(student) == false)
	{
		alert('Ім\'я повинно бути введене українськими літерами');
		return false;
	}

	if (gr_exp.test(group) == false)
	{
		alert('Поле групи повинне містити дві українські літери, дефіс та номер');
		return false;
	}

	if (sp_exp.test(specialty) == false)
	{
		alert('Номер спеціальності має бути трьохзначним числом');
		return false;
	}

	if (em_exp.test(email) == false)
	{
		alert('Це не схоже на Email');
		return false;
	}

	else {
		$.post(
        	'./PHP/serv.php',
        	$(".decor").serialize(),    
        
        	function(msg) {
            	$('#message').html(msg);
        	}
    	);
    	return false;
	}
});


//JS
function validate() {
	let st_exp = /^[А-Яа-яІі\s]+/;
	let gr_exp = /^[А-Яа-яІі]{2,2}\-[0-9]/;
	let sp_exp = /^\d{3,3}$/;
	let em_exp = /^[a-z0-9._-]+\@[a-z0-9]+\.[a-z]{2,4}$/;
	let student = document.getElementById('st_input').value;
	let group = document.getElementById('gr_input').value;
	let specialty = document.getElementById('sp_input').value;
	let email = document.getElementById('em_input').value;

	if(student == '')
	{
		alert('Поле ПІБ пусте');
		return false;
	}

	if(group == '')
	{
		alert('Поле Група пусте');
		return false;
	}

	if(specialty == '')
	{
		alert('Поле Спеціальність пусте');
		return false;
	}

	if(email == '')
	{
		alert('Поле Email пусте');
		return false;
	}

	if (st_exp.test(student) == false)
	{
		alert('Ім\'я повинно бути введене українськими літерами');
		return false;
	}

	if (gr_exp.test(group) == false)
	{
		alert('Поле групи повинне містити дві українські літери, дефіс та номер');
		return false;
	}

	if (sp_exp.test(specialty) == false)
	{
		alert('Номер спеціальності має бути трьохзначним числом');
		return false;
	}

	if (em_exp.test(email) == false)
	{
		alert('Це не схоже на Email');
		return false;
	}

	else {
		let formData = new FormData(".decor");
        var request = new XMLHttpRequest();
        request.open("POST", "./PHP/serv.php");
        request.onreadystatechange = function () {
            $('#message').html(this.responseText);
        }
        request.send(formData);
    	return false;
	}
};