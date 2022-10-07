//header-fix
var className = "fixed-top";
var scrollTrigger = 60;

window.onscroll = function() {
// We add pageYOffset for compatibility with IE.
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.getElementsByTagName("header")[0].classList.add(className);
        } else {
        document.getElementsByTagName("header")[0].classList.remove(className);
    }
};
//javascript for the responsive navigation menu
    var menu = document.querySelector(".menu-box");
    var menuBtn = document.querySelector(".menu-btn");
    var closeBtn = document.querySelector(".close-btn");

    menuBtn.addEventListener("click", () => {
        menu.classList.add("active");
    });
    closeBtn.addEventListener("click", () => {
        menu.classList.remove("active");
    });

// typed words
    var typed = new Typed('.typed-words', {
        strings: ["WEB DEVELOPER.","WEB DESIGNER."," UI/UX DESIGNER."," CONTENT WRITER."],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 4000,
        startDelay: 1000,
        loop: true,
        showCursor: true
    });


// counter
$('.count').each(function () {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		duration: 4000,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now));
		}
	});
});

// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "slideShow",
      "thumbs",
      "zoom",
      "fullScreen",
      "share",
      "close"
    ],
    loop: false,
    protect: true
  });
// team & blog
  $(document).ready(function(){
    $('.team-inner').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
    {
        breakpoint: 1501,
        settings: {
            slidesToShow: 4,
        }
        },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    });

    // logo
    $('.logo-inner').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: true,
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
    });
  });