$(document).ready(function() {
	"use strict";
/*
|----------------------------------------------------------------------------
| PRELOADER
|----------------------------------------------------------------------------
*/
// makes sure the whole site is loaded
$(window).on('load', function() {
   // will first fade out the loading animation
   $(".spinner").fadeOut();
   //then background color will fade out slowly
   $(".pre-loader").delay(200).fadeOut("slow");
});


//----------------------------------------------------
//-----------Appearence of navigation-----------------
//----------------------------------------------------

  $('header .nav').onePageNav({
    scrollThreshold: 0.5, // Adjust if Navigation highlights too early or too late
    scrollOffset: 70 //Height of Navigation Bar
  });

//====================================================
//==================Navigation========================
//====================================================
  
    $(window).scroll(function() {       
       var $scrollHeight = $(window).scrollTop();
          if ($scrollHeight > 120) {
            $('.header-2 nav').addClass('addbg').slideDown(400);
          } else {
            $('.header-2 nav').removeClass('addbg');
          }
   });

//----------------------------------------------------
//--------------- For navigation----------------------
//----------------------------------------------------

$('.navbar-collapse ul li a').on( "click",function() {
    $('.navbar-toggle:visible').click();
});

//----------------------------------------------------
//------------Scroll to Next Section------------------
//----------------------------------------------------
  
  $('.next a').on( "click",function() {
    $('html,body').animate({scrollTop:$('#about').offset().top - 70}, 750);
 return false;
  });
  

//   =======================================================
//   =======================Countdown=======================
//   =======================================================
  

   $('.countdown').countdown({
     date: "June 7, 2087 15:03:25",
      render: function(data) {
      $(this.el).html("<div>"
      + this.leadingZeros(data.days)
      + " <span>days</span></div><div>" 
      + this.leadingZeros(data.hours)
      + " <span>hours</span></div><div>" 
      + this.leadingZeros(data.min)
      + " <span>minutes</span></div><div>" 
      + this.leadingZeros(data.sec)
      + " <span>second</span></div>");
    }
   });

  $('.event-block-count-down').countdown({
     date: "June 7, 2087 15:03:25",
      render: function(data) {
      $(this.el).html("<div>"
      + this.leadingZeros(data.days)
      + " <span>days</span></div><div>" 
      + this.leadingZeros(data.hours)
      + " <span>hours</span></div><div>" 
      + this.leadingZeros(data.min)
      + " <span>minutes</span></div><div>" 
      + this.leadingZeros(data.sec)
      + " <span>second</span></div>");
    }
   });
   
   $('.countdown-2').countdown({
     date: "June 7, 2087 15:03:25",
      render: function(data) {
      $(this.el).html("<div>"
      + this.leadingZeros(data.days)
      + " <span>days</span></div><div>" 
      + this.leadingZeros(data.hours)
      + " <span>hours</span></div><div>" 
      + this.leadingZeros(data.min)
      + " <span>minutes</span></div><div>" 
      + this.leadingZeros(data.sec)
      + " <span>second</span></div>");
    }
   });


  
//   =======================================================
//   =====================Flexi slider =====================
//   =======================================================

   $('.flexslider').flexslider({
      animation: "fade",
      
      controlNav: false,
      start:function(slider){
        //HIDE THE ARROWS BY DEFAULT...
        $('.flexslider .flex-direction-nav').css({display:'none'});
    
        //THEN INSERT YOUR CUSTOM JQUERY CLICK ACTIONS TO REVEAL THEM AGAIN
        slider.find('a').on('click',function(){
        $('.flexslider .flex-direction-nav').css({display:'none'});
        });
      }//end start function     
    });

//====================================================
//===============Text Slider on Banner================
//====================================================

    $('.flex_text').flexslider({
        animation: "slide",
            selector: ".slides li",
            controlNav: false,
            directionNav: false,
            slideshowSpeed: 4000,
            touch: true,
            useCSS: false,
            direction: "vertical",
      before: function(slider){   
       var height = $('.flex_text').find('.flex-viewport').innerHeight();
       $('.flex_text').find('li').css({ height: height + 'px' });
        }
    });

//   =======================================================
//   =====================Banner-carousel =====================
//   =======================================================

$('.banner-carousel').owlCarousel({
   //items: 1,
   singleItem : true,
   pagination: false,
   navigation : true, // Show next and prev buttons
   autoplay: true,
   dots: false,
   loop: true
   
});


//   =======================================================
//   =====================Ministires-carousel =====================
//   =======================================================


 
  $("#ministires-carousel").owlCarousel({
    items : 3,
    autoPlay: 5000,
	itemsDesktop : [1024,3],
  });
  
//   =======================================================
//   =====================wow.js =====================
//   =======================================================  

  new WOW().init();


 //===================================================
//================ Magnific Image Popup==============
//===================================================

    $('.gallery-popup').magnificPopup({
      type:'image',
      closeBtnInside:true,
      // Delay in milliseconds before popup is removed
      removalDelay: 300,

      // Class that is added to popup wrapper and background
      // make it unique to apply your CSS animations just to this exact popup
      mainClass: 'mfp-fade',
      gallery: {
          enabled: true, // set to true to enable gallery

          preload: [0,2], // read about this option in next Lazy-loading section

          navigateByImgClick: true,

          //arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

          closeMarkup: '<button title="%title%" class="mfp-close"><i class="mfp-close-icn">&times;</i></button>',

          tPrev: 'Previous (Left arrow key)', // title for left button
          tNext: 'Next (Right arrow key)', // title for right button
          //tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        }
   });
   


//----------------------------------------------------
//--------------- SmoothSroll-------------------------
//----------------------------------------------------

var scrollAnimationTime = 1200,
   scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
   event.preventDefault();
   var target = this.hash;
   $('html, body').stop().animate({
       'scrollTop': $(target).offset().top
   }, scrollAnimationTime, scrollAnimation, function () {
       window.location.hash = target;
   });
});

//========================================================
//====================== Newsletter ======================
//========================================================

	$(".newsletter-signup").ajaxChimp({
		callback: mailchimpResponse,
		url: "http://codepassenger.us10.list-manage.com/subscribe/post?u=6b2e008d85f125cf2eb2b40e9&id=6083876991" // Replace your mailchimp post url inside double quote "".  
	});

	function mailchimpResponse(resp) {
		 if(resp.result === 'success') {
		 
			$('.newsletter-success').html(resp.msg).fadeIn().delay(3000).fadeOut();
			
		} else if(resp.result === 'error') {
			$('.newsletter-error').html(resp.msg).fadeIn().delay(3000).fadeOut();
		}  
	};


/*
|----------------------------------------------------------------------------
| AJAX CONTACT FORM
|----------------------------------------------------------------------------
*/
// Function for email address validation
function isValidEmail(emailAddress) {
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

	return pattern.test(emailAddress);
}


$("#contact-form").on('submit', function(e) {
    e.preventDefault();
    var data = {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#subject").val(),
        url: $("#website").val(),
        message: $("#message").val()
    };

    if ( isValidEmail(data.email) && (data.message.length > 1) && (data.name.length > 1) ) {
        $.ajax({
            type: "POST",
            url: "sendmail.php",
            data: data,
            success: function() {
                $('.contact_form .contact-success').delay(500).fadeIn(1000);
                $('.contact_form .contact-error').fadeOut(500);
            }
        });
    } else {
        $('.contact_form .contact-error').delay(500).fadeIn(1000);
        $('.contact_form .contact-success').fadeOut(500);
    }

    return false;
});

/* =================================
===  IE10 ON WINDOWS 8 FIX      ====
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

/*==========================================================
		Instantiate MixItUp
=============================================================*/
    $('#gallery_grid_filter').mixItUp();

});