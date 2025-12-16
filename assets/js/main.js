(function ($){
    "use strict";
   
  var windowOn = $(window);

  windowOn.on('load', function () {
      wowAnimation();
  });

  // wow
  function wowAnimation() {
    var wow = new WOW({
       boxClass: 'wow',
       animateClass: 'animated',
       offset: 0,
       mobile: false,
       live: true
    });
    wow.init();
 }
 
// preloader 
windowOn.on('load', function () {
  $("#loading").fadeOut(500);
})

//smooth-wrapper
	if($('#smooth-wrapper').length && $('#smooth-content').length){
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
	
		gsap.config({
			nullTargetWarn: false,
		});
	
		let smoother = ScrollSmoother.create({
			smooth: 2,
			effects: true,
			smoothTouch: true,
			normalizeScroll: false,
			ignoreMobileResize: true,
		});
	}

// back-to-top
var btn = $('#back-to-top');
windowOn.scroll(function () {
    if (windowOn.scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
});
btn.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, '300');
});


 // sticky js 
 var windowOn = $(window);
 windowOn.on('scroll', function () {
   var scroll = windowOn.scrollTop();
   if (scroll < 100) {
     $("#er-header-sticky").removeClass("header-sticky");
   } else {
     $("#er-header-sticky").addClass("header-sticky");
   }
 });



// mobile menu 
var erMenuWrap = $('.er-mobile-menu-active > ul').clone();
var erSideMenu = $('.er-offcanvas-menu nav');
erSideMenu.append(erMenuWrap);
if ($(erSideMenu).find('.sub-menu, .er-mega-menu').length != 0) {
  $(erSideMenu).find('.sub-menu, .er-mega-menu').parent().append('<button class="er-menu-close"><i class="fas fa-chevron-right"></i></button>');
}

var sideMenuList = $('.er-offcanvas-menu nav > ul > li button.er-menu-close, .er-offcanvas-menu nav > ul li.has-dropdown > a');
$(sideMenuList).on('click', function (e) {
  console.log(e);
  e.preventDefault();
  if (!($(this).parent().hasClass('active'))) {
    $(this).parent().addClass('active');
    $(this).siblings('.sub-menu, .er-mega-menu').slideDown();
  } else {
    $(this).siblings('.sub-menu, .er-mega-menu').slideUp();
    $(this).parent().removeClass('active');
  }
});
//  Nice Select Js
	$('select').niceSelect();

// offcanvas
$(".er-offcanvas-toogle").on('click', function(){
$(".er-offcanvas").addClass("er-offcanvas-open");
});
$(".er-offcanvas-close-toggle").on('click', function(){
$(".er-offcanvas").removeClass("er-offcanvas-open");
});
$(".er-offcanvas-overlay").on('click', function(){
$(".er-offcanvas").removeClass("er-offcanvas-open");
});

//  // Search bar
 $(".er-search-toggle").on('click', function(){
  $(".er-header-search-bar").addClass("er-search-open");
  
});

$(".er-search-close").on('click', function(){
  $(".er-header-search-bar").removeClass("er-search-open");
  
});
// // 

// filter
if ($('.grid').length != 0) {  
  var $grid = $('.grid').imagesLoaded( function() {
    $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: 1
      }
    })

  // filter items on button click
  $('.er-portfolio-filter').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
    //for menu active class
    $('.er-portfolio-filter button').on('click', function (event) {
      $(this).siblings('.active').removeClass('active');
      $(this).addClass('active');
      event.preventDefault();
    });
  });
}



// data bg img
$("[data-background]").each(function(){
  $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})


// data bg color
$("[data-bg-color]").each(function(){
  $(this).css("background-color", $(this).attr("data-bg-color")) 
})

// data  color
$("[data-color]").each(function(){
  $(this).css("color", $(this).attr("data-color")) 
})

$('.popup-image').magnificPopup({
  type: 'image'
  // other options
});

$('.popup-video').magnificPopup({
  type: 'iframe'
  // other options
});

// fact count

 document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".er-facts-number span");

  // ✅ তুমি এখানে target value নিজে দিচ্ছো, index অনুযায়ী
  const targetValues = [25, 95,  35];
  const duration = 5000; // মোট সময়
  const delay = 300; // scroll detect হওয়ার পর শুরু হবার সময়

  const startCount = (el, target, duration) => {
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * target);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(counters).indexOf(entry.target);
        const target = targetValues[index];

        setTimeout(() => {
          startCount(entry.target, target, duration);
        }, delay);

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => observer.observe(counter));
});

// fact count 2

 document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".er-facts-number-2 span");

  // ✅ তুমি এখানে target value নিজে দিচ্ছো, index অনুযায়ী
  const targetValues = [25, 95, 365, 35];
  const duration = 5000; // মোট সময়
  const delay = 300; // scroll detect হওয়ার পর শুরু হবার সময়

  const startCount = (el, target, duration) => {
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * target);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(counters).indexOf(entry.target);
        const target = targetValues[index];

        setTimeout(() => {
          startCount(entry.target, target, duration);
        }, delay);

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => observer.observe(counter));
});
// fact count 3

 document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".er-facts-number-3 span");

  // ✅ তুমি এখানে target value নিজে দিচ্ছো, index অনুযায়ী
  const targetValues = [25, 365];
  const duration = 5000; // মোট সময়
  const delay = 300; // scroll detect হওয়ার পর শুরু হবার সময়

  const startCount = (el, target, duration) => {
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * target);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(counters).indexOf(entry.target);
        const target = targetValues[index];

        setTimeout(() => {
          startCount(entry.target, target, duration);
        }, delay);

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => observer.observe(counter));
});

// fact count 4

 document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".er-facts-number-4 span");

  // ✅ তুমি এখানে target value নিজে দিচ্ছো, index অনুযায়ী
  const targetValues = [98, 36];
  const duration = 5000; // মোট সময়
  const delay = 300; // scroll detect হওয়ার পর শুরু হবার সময়

  const startCount = (el, target, duration) => {
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const current = Math.floor(progress * target);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target;
      }
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(counters).indexOf(entry.target);
        const target = targetValues[index];

        setTimeout(() => {
          startCount(entry.target, target, duration);
        }, delay);

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => observer.observe(counter));
});

// fact count 5
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".er-fact-title span");

  function animateValue(el, target, duration = 1500) {
    let start = 0;
    const isFloat = target % 1 !== 0;
    const stepTime = Math.max(Math.floor(duration / target), 10);

    const timer = setInterval(() => {
      start += 1;
      el.textContent = isFloat ? (start).toFixed(1) : start;
      if (start >= target) {
        el.textContent = target; // exact final value
        clearInterval(timer);
      }
    }, stepTime);
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const text = el.textContent;
          const suffix = text.replace(/\d/g, ""); // যেমন %, M
          const number = parseInt(text);

          if (!isNaN(number)) {
            el.textContent = "0" + suffix;
            animateValue(el, number);
            observer.unobserve(el);
          }
        }
      });
    },
    { threshold: 0.5 } // ৫০% এলিমেন্ট স্ক্রিনে এলেই শুরু
  );

  counters.forEach(counter => {
    observer.observe(counter);
  });
});


// *******************************
// Accordind

document.addEventListener("DOMContentLoaded", function () {
  
  const accordionButtons = document.querySelectorAll(".er-accordion-button");

  accordionButtons.forEach(button => {
    button.addEventListener("click", function () {
     
      if (this.classList.contains("er-top")) {
        this.classList.remove("er-top");
        this.classList.add("er-top2");
      } else if (this.classList.contains("er-top2")) {
        this.classList.remove("er-top2");
        this.classList.add("er-top");
      } else {
      
        this.classList.add("er-top");
      }

      
      accordionButtons.forEach(btn => {
        if (btn !== this) {
          btn.classList.remove("er-top", "er-top2");
        }
      });
    });
  });
});

// testimonial slider
var swiper = new Swiper(".er-testimonial-active", {
  slidesPerView: 1,
  spaceBetween: 80,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
      enabled: true,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".er-swiper-test-button-next",
      prevEl: ".er-swiper-test-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
  },
});

// blog slider
var swiper = new Swiper(".er-blog-active", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  keyboard: {
      enabled: true,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".er-swiper-test-button-next",
      prevEl: ".er-swiper-test-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".er-blog-slider", {
  slidesPerView: 1,
  
  autoplay: {
    delay: 5000,
  },
  keyboard: {
      enabled: true,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".er-swiper-test-button-next",
      prevEl: ".er-swiper-test-button-prev",
  },
  
});

// team slider
var swiper = new Swiper(".er-team-active", {
  slidesPerView: 3,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".er-swiper-button-next",
    prevEl: ".er-swiper-button-prev",
},
breakpoints: {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 3,
  },
},
});
// single testimonial slider
var swiper = new Swiper(".er-single-test-active", {
  slidesPerView: 1,
  spaceBetween: 30,

  centeredSlides: true,
  loop: true,
  autoplayDisableOnInteraction:true,
  autoplay: {
    delay: 1000,
    pauseOnMouseEnter: true,
    
  },
  keyboard: {
    enabled: true,
},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".er-swiper-button-next",
    prevEl: ".er-swiper-button-prev",
},
});


// project
// project slider 
   var swiper = new Swiper(".er-project-active", {
      //slidesPerView: 4,
    spaceBetween: 30,
      keyboard: {
         enabled: true,
      },
      pagination: {
         el: ".swiper-pagination",
         clickable: true,
      },
      navigation: {
         nextEl: ".er-swiper-project-button-next",
         prevEl: ".er-swiper-project-button-prev",
      },
      breakpoints: {
         0: {
            slidesPerView: 1,
         },
         768: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
         1200: {
            slidesPerView: 4,
         }
      },
   });


// paralaxbig
var swiper = new Swiper(".paralaxbig", {
  slidesPerView: '3',
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplayDisableOnInteraction:true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    
  },
  keyboard: {
      enabled: true,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".er-swiper-button-next",
      prevEl: ".er-swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView:2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  
});


// Brand

var swiper = new Swiper(".er-brand-active", {
 // slidesPerView: '5',
  spaceBetween: 100,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  keyboard: {
      enabled: true,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".er-swiper-button-next",
      prevEl: ".er-swiper-button-prev",
  },
  breakpoints: {
   
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 4,
    },
    1920: {
      slidesPerView: 9,
    },
     2560: {
    slidesPerView: 10,
  },
  },
  
});
// Brand home 03
var swiper = new Swiper(".er-brand-active-two", {
  //slidesPerView: 9,
  spaceBetween: 60,
  centeredSlides: false,
  loop: true,
  // autoplayDisableOnInteraction:true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    
  },
  keyboard: {
      enabled: true,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".er-swiper-button-next",
      prevEl: ".er-swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView:1,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 9,
    },
    1920: {
      slidesPerView: 9,
    },
    2560: {
    slidesPerView: 11,
  },
  },
  
});


///////////////////////////////////////////////////
		//  er-char-animation
		if ($('.er-char-animation').length > 0) {
			let char_come = gsap.utils.toArray(".er-char-animation");
			char_come.forEach(splitTextLine => {
				const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
				});
	
				const itemSplitted = new SplitText(splitTextLine, { type: "chars, words" });
				gsap.set(splitTextLine, { perspective: 300});
				itemSplitted.split({ type: "chars, words"})
				tl.from(itemSplitted.chars, 
					{
						duration: 0.5,
						x: 100,
						autoAlpha: 0,
						stagger: 0.05 
					});
			});	
		}

		///////////////////////////////////////////////////

        // er_fade_top
    if ($('.er_fade_top').length > 0) {
      gsap.set(".er_fade_top", { y: -100, opacity: 0 }); 
      const fadeArray = gsap.utils.toArray(".er_fade_top")
      fadeArray.forEach((item, i) => {
        let fadeTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center+=400",
          }
        })
        fadeTl.to(item, {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.5,
        })
      })
    }
   

    //  er_fade_bottom
		if ($('.er_fade_bottom').length > 0) {
			gsap.set(".er_fade_bottom", { y: 100, opacity: 0 });
			const fadeArray = gsap.utils.toArray(".er_fade_bottom")
			fadeArray.forEach((item, i) => {
				let fadeTl = gsap.timeline({
					scrollTrigger: {
						trigger: item,
						start: "top center+=400",
					}
				})
				fadeTl.to(item, {
					y: 0,
					opacity: 1,
					ease: "power2.out",
					duration: 1.5,
				})
			})
		}
    //  er_fade_bottom
		if ($('.er_fade_bottom2').length > 0) {
			gsap.set(".er_fade_bottom2", { y: 200, opacity: 0 });
			const fadeArray = gsap.utils.toArray(".er_fade_bottom2")
			fadeArray.forEach((item, i) => {
				let fadeTl = gsap.timeline({
					scrollTrigger: {
						trigger: item,
						start: "top center+=400",
					}
				})
				fadeTl.to(item, {
					y: 0,
					opacity: 1,
					ease: "power2.out",
					duration: 1.5,
				})
			})
		}

    // er_fade_right
  if ($('.er_fade_right').length > 0) {
    gsap.set(".er_fade_right", { x: 200, opacity: 0 }); 
    const fadeArray = gsap.utils.toArray(".er_fade_right")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=400",
        }
      })
      fadeTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }
    // er_fade_left
  if ($('.er_fade_left').length > 0) {
    gsap.set(".er_fade_left", { x: -100, opacity: 0 }); 
    const fadeArray = gsap.utils.toArray(".er_fade_left")
    fadeArray.forEach((item, i) => {
      let fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=400",
        }
      })
      fadeTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      })
    })
  }

    // text-animetion-jsap
		if ($('.er-title-anim').length > 0) {
			let splitTitleLines = gsap.utils.toArray(".er-title-anim");
			splitTitleLines.forEach(splitTextLine => {
				const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
				});
	
				const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
				gsap.set(splitTextLine, { perspective: 300});
				itemSplitted.split({ type: "lines" })
				tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -50, force3D: true, transformOrigin: "top center -50", stagger: 0.2 });
			});	
		}
  //  er-btn-trigger
    if ($('.er-btn-trigger').length > 0) {

      gsap.set(".er-btn-bounce", { y: -100, opacity: 0 });
      var mybtn = gsap.utils.toArray(".er-btn-bounce");
      mybtn.forEach((btn) => {
        var $this = $(btn);
        gsap.to(btn, {
          scrollTrigger: {
            trigger: $this.closest('.er-btn-trigger'),
            start: "top center",
            markers: false
          },
          duration: 1,
          ease: "bounce.out",
          y: 0,
          opacity: 1,
        })
      });
    }


    // zoom img
    let zm = gsap.matchMedia();
		zm.add("(min-width: 1200px)", () => {
			if ($('.er-hero-area').length > 0) {
				// Testimonial 3 Image Animation
				gsap.set(".er-zoom-img", { scale: 0, opacity: 0 });
	
				gsap.to(".er-zoom-img", {
					scrollTrigger: {
						trigger: ".er-zoom-img",
						start: "center center",
						markers: false
					},
					duration: 1,
					ease: "none",
					scale: 1,
					opacity: 1,
				})
	
			}
		});

// foreground award-img fast move
gsap.to(".er-award-img", {
  y: -100,
  ease: "none",
  scrollTrigger: {
    trigger: ".er-award-area",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  }
});

  // go full width 
if (document.querySelectorAll(".go_full").length > 0) {
  var go_full = document.querySelectorAll(".go_full");
  go_full.forEach((item) => {
    gsap.set(item, {
      position: "relative",
      left: "50%",
      transform: "translate(-50%, 0)",
      width: "100vw", // শুরুতেই full width
    });
    gsap.to(item, {
      scale: 1.1, // zoom-in effect
      ease: "none",
      scrollTrigger: {
        trigger: item,
        scrub: 0,
        start: "top bottom",
        end: "bottom bottom",
      }
    });
  });
}
// servicee
document.querySelectorAll(".er-service-item").forEach(item => {
  let hoverContent = item.querySelector(".er-service-hover");

  // প্রথমে লুকিয়ে রাখো (কিন্তু DOM এ থাকবে)
  gsap.set(hoverContent, {
    opacity: 0,
    y: 20,
    pointerEvents: "none"
  });

  item.addEventListener("mouseenter", () => {
    gsap.to(hoverContent, {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      duration: 0.4,
      ease: "power2.out"
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(hoverContent, {
      opacity: 0,
      y: 20,
      pointerEvents: "none",
      duration: 0.3,
      ease: "power2.in"
    });
  });
});

// text scrool
gsap.to(".er-marquee-track", {
  xPercent: -50,   // শুধু অর্ধেক ট্র্যাক সরাও
  duration: 20,    // স্পিড
  repeat: -1,
  ease: "linear"
});
// shop detail add to cart
//  $('.er-cart-plus').on('click', function () {
//     let $input = $(this).siblings('input');
//     let value = parseInt($input.val()) || 0;
//     $input.val(value + 1);
//   });

//   // Minus button click
//   $('.er-cart-minus').on('click', function () {
//     let $input = $(this).siblings('input');
//     let value = parseInt($input.val()) || 0;
//     if (value > 1) {
//       $input.val(value - 1);
//     }
//   });

	////////////////////////////////////////////////////
	//1. Wow Js
	new WOW().init();
  

	function tp_ecommerce() {
		$('.er-cart-minus').on('click', function () {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			return false;
		});
	
		$('.er-cart-plus').on('click', function () {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		});

		// $("#slider-range").slider({
		// 	range: true,
		// 	min: 0,
		// 	max: 500,
		// 	values: [75, 300],
		// 	slide: function (event, ui) {
		// 		$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
		// 	}
		// });
		// $("#amount").val("$" + $("#slider-range").slider("values", 0) +
		// 	" - $" + $("#slider-range").slider("values", 1));
	
		

		$('.er-checkout-payment-item label').on('click', function () {
			$(this).siblings('.er-checkout-payment-desc').slideToggle(400);
			
		});

		
		$('.er-service-2-item').on('mouseenter', function () {
			$(this).addClass('active').parent().siblings().find('.er-service-2-item').removeClass('active');
		});
		
		$('.er-feature-2-item').on('mouseenter', function () {
			$(this).addClass('active').parent().siblings().find('.er-feature-2-item').removeClass('active');
		});

		$('.er-service-3-item').on('mouseenter', function () {
			$(this).addClass('active').parent().siblings().find('.er-service-3-item').removeClass('active');
		});

		$('.er-step-item-box').on('mouseenter', function () {
			$(this).addClass('active').parent().siblings().find('.er-step-item-box').removeClass('active');
		});

	
		////////////////////////////////////////////////////
		// 2. Show Login Toggle Js
		$('.er-checkout-login-form-reveal-btn').on('click', function () {
			$('#tpReturnCustomerLoginForm').slideToggle(400);
		});
	
		////////////////////////////////////////////////////
		// 3. Show Coupon Toggle Js
		$('.er-checkout-coupon-form-reveal-btn').on('click', function () {
			$('#tpCheckoutCouponForm').slideToggle(400);
		});
	
		////////////////////////////////////////////////////
		// 4. Create An Account Toggle Js
		$('#cbox').on('click', function () {
			$('#cbox_info').slideToggle(900);
		});
	
		////////////////////////////////////////////////////
		// 5. Shipping Box Toggle Js
		$('#ship-box').on('click', function () {
			$('#ship-box-info').slideToggle(1000);
		});
	}
	tp_ecommerce();

	////////////////////////////////////////////////////
})(jQuery);