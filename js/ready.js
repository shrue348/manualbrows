$(function(){
	baguetteBox.run('.baguetteBox');

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