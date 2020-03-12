$( document ).ready(function() {
	
	$('.filters > .btn-primary').click(function(){
		

		if($('.filters > .btn-primary').attr('aria-expanded') == 'true'){
			$(this).children('h4').html('Filtres <i class="fas fa-plus-square"></i>')
		} else {
			$(this).children('h4').html('Filtres <i class="fas fa-minus-square"></i>')		
		}

	});
}) ;