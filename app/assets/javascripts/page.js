
//shrinking header function
$(window).scroll(function() {
if ($(this).scrollTop() > 0){  
    $("header").addClass("sticky");
	 $(".h1").addClass("sticky");
	 $(".menuWrapper").addClass("sticky");
      //$("#boxOne").hide(1000);
      //$("#boxTwo").hide(1000);
      //$("#boxThree").hide(1000);
      //$("#boxFour").hide(1000);
      $("#button").show(1000)
  }
  else{
    $("header").removeClass("sticky");
	 $(".h1").removeClass("sticky");
	 $(".menuWrapper").removeClass("sticky");
     $("#boxNav").fadeOut(500);
//	 $("#boxOne").slideDown(1000);
//     $("#boxTwo").slideDown(1000);
//     $("#boxThree").slideDown(1000);
//     $("#boxFour").slideDown(1000);
     $("#button").fadeOut(1500)
  }
});

//dropdown menu fuction
$(document).ready(function() {
    $("#drop").click(function(){
        $("#dropNav").toggle(500);
    });
});


//scroll to top function aka "home"
$(document).ready(function(){
$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});	
});
	
//show menu function
$(document).ready(function(){
    $("#button").click(function(){
        $("#boxNav").slideToggle(1000);
    });
});

//Read more function
 $(document).ready(function(){
    $(".more").click(function(){
        $(".complete").slideDown(1000);
		$(".more").hide();
    });
});
 
//Read less function
 $(document).ready(function(){
    $(".less").click(function(){
        $(".complete").slideUp(1000);
		$(".more").show();
    });
});
 