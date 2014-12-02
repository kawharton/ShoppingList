$(document).ready(function() {

	//add item
	$('#add-item').on('click', function() {
		addItem();
	}); 

	$('#new-item').on('keypress', function(event) {
		if (event.which===13) {
			event.preventDefault();
			addItem();
		}
	});

	//remove item	
	$('.list-group').on('click','.glyphicon-remove', function() {
   		$(this).parent().remove();
	});

	//show remove on hover
	$('.list-group').on('mouseenter', '.list-group-item', function() {
    	$(this).children('.glyphicon-remove').toggleClass('show');     
 	});

	$('.list-group').on('mouseleave', '.list-group-item', function() {
		$(this).children('.glyphicon-remove').toggleClass('show');
	});

	//toggle between checked and unchecked box
	$('.list-group').on('click','.glyphicon-unchecked', function() {
		$(this).hide();
    	$(this).parent().children('.glyphicon-check').show();
    	$(this).parent().css({'background-color': 'blue'})   
 	});

	$('.list-group').on('click','.glyphicon-check', function() {
		$(this).hide();
    	$(this).parent().children('.glyphicon-unchecked').show();   
    	$(this).parent().css({'background-color': '#01A2A6'});
 });

	function addItem() {
		var text = $('#new-item');
		var textValue = text.val();

		if(textValue.trim().length === 0 ) {
			alert("Please enter an item"); 
		}
		else {
			$('.list-group').append('<li class="list-group-item"><span class="glyphicon glyphicon-remove pull-left"></span>' + 
			textValue + '<span class="glyphicon glyphicon-unchecked pull-right"></span><span class="glyphicon glyphicon-check pull-right"></span></li>'); 
			text.val("");
		}
	};








});