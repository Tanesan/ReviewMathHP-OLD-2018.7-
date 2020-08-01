jQuery(function($){
// JavaScript Document
$('.img-container').waypoint(function(direction){
    var activePoint = $(this.element);
    //scroll down
    if (direction === 'down') {
        activePoint.addClass('active');
    }
    else{
        activePoint.removeClass('active');
    }
},{offset : '70%'});
 
$('.text-container').waypoint(function(direction){
    var activePoint = $(this.element);
    //scroll down
    if (direction === 'down') {
        activePoint.addClass('active');
    }
    else{
        activePoint.removeClass('active');
    }       
},{offset : '70%'});
	
	/******************************************
	window scroll
	******************************************/	
	$(window).on('scroll',function(){
		winScrollTop = $(this).scrollTop();
		if (winScrollTop >= startPos) {
			if(winScrollTop >= 200){
				$('.site-header').addClass('hide');
			}
		} else {
			$('.site-header').removeClass('hide');
		}
		startPos = winScrollTop;
	});
});	