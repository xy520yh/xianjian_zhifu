// JavaScript Document
$(function(){
	
	// 导航位置连接到对应屏幕
	  $('#one').click(function(){
		  jQuery('html,body').animate({scrollTop:$('#pro2').offset().top}, 1000);
	  });
	  $('#two').click(function(){
		  jQuery('html,body').animate({scrollTop:$('#pro4').offset().top}, 1000);
	  });
	  $('#three').click(function(){
		  jQuery('html,body').animate({scrollTop:$('#pro3').offset().top}, 1000);
	  });
  
	  $('#four').click(function(){
		  jQuery('html,body').animate({scrollTop:$('#pro5').offset().top}, 1000);
	  });
	  $('.hand').click(function(){
		  jQuery('html,body').animate({scrollTop:$('#pro3').offset().top}, 1000);
	  });
	  $('#five').click(function(){
		  jQuery('html,body').animate({scrollTop:$('#pro7').offset().top}, 1000);
	  });
	 // 游戏角色对应介绍
	  $('.role_main li').mouseover(function(){
		  $(this).addClass('active').siblings().removeClass('active');
		  $('.role_text_dis').removeClass('on');
		  $('.role_text_dis').eq($(this).index()).addClass('on')
	  })
	   // 返回顶部
	  $("#gotop").click(function(){
			  jQuery("html,body").animate({scrollTop:0},1000);
	  });	
	  $(window).scroll(function() {
			  if ( $(this).scrollTop() > 300){
				  $('#gotop').fadeIn("fast");
			  } else {
				  $('#gotop').stop().fadeOut("fast");
			  }
	  });
					  
  })
