$(document).ready(main);

var contador = 1 ;

function main(){
	$('.menu_bar').click(function(){

		if(contandor == 1){
			$('nav').animate({
				left:'0'
			});
		} else {
			$('nav').animate({
				left: '-100%'
			});
		}


	});
};