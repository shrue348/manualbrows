$(function(){

	$(' .quantity').on('click','a', function(e){
		var self = $(this),
			input = self.siblings('input')[0],
			currentValue = +input.value;

		if (self.is('.plus')  ){
		  input.value = currentValue + 1;
		} else if (currentValue == 1) {
			return false;
		} else {
		  input.value = currentValue - 1;
		}
		return false;
	});
});

$(function(){
	var win_height = document.documentElement.clientHeight,
		header_height = $('header').outerHeight(),
		footer_height = $('footer').outerHeight(),
		min_height = win_height - header_height - footer_height;
		
	
	$('main').css('min-height', min_height);	
});