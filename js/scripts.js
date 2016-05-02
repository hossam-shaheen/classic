$(document).ready(function(){
    
    /*centralize slider*/
    

    $('.main').height($(window).height());
    

        
  
    $(".slider").css({
            paddingTop: $(".main").outerHeight()/2 -( ($(".header").outerHeight()+ $(".slider").outerHeight())/2)
        });
    
   
    
    $(window).on("resize",function(){
        
         $('.main').height($(window).height());
    
  
    $(".slider").css({
            paddingTop: $('.main').outerHeight()/2 -( ($(".header").outerHeight()+ $(".slider").outerHeight())/2)
        });
    
        
      
        
    });

    /*Slider*/
  $('.bxslider').bxSlider({
      speed : 600,
      pager:false
  });
    
    
    
   /*shuffle Liberary*/
        
   // Instantiate MixItUp:

	$('#projectFilter').mixItUp();

        
        
});