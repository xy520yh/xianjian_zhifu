function rePosition(){
    var width = document.documentElement.clientWidth || document.body.clientWidth;
    var ratio = width/750;
    if(width<=750){
        document.getElementsByTagName('html')[0].style.fontSize=100*ratio+"px";
    }else{
        document.getElementsByTagName('html')[0].style.fontSize="100px";
    }
}
rePosition();
window.onresize = function(){
    rePosition();
};
$(function(){
	//点击成功
  $('body').on("click", '.btn', function () {
    $('.success').addClass('active');
	$('.masked').css('display','block');
  });
  $('body').on("click", '.success .fan_index', function () {
    $('.success').removeClass('active');
	$('.masked').css('display','none');
  });

	
});
