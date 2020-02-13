/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/about/about.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/about/about.js ***!
  \*******************************************/
/*! exports provided: aboutInit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutInit", function() { return aboutInit; });
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scrollmagic__WEBPACK_IMPORTED_MODULE_0__);


 // animate numbers functionality

function animateCount() {
  $('.about__animated-numbers').each(function () {
    var _this = $(this);

    _this.prop('Counter', 0).animate({
      Counter: _this.data('count')
    }, {
      duration: 2500,
      easing: 'swing',
      step: function step(now) {
        _this.text(Math.ceil(now));
      }
    });
  });
}

function aboutInit() {
  var controller = new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Controller();
  new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Scene({
    triggerElement: "#about",
    reverse: false
  }).on('start', function () {
    animateCount();
  }).addTo(controller);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/feedback/feedback.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/feedback/feedback.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! owl.carousel/dist/owl.carousel.min */ "./node_modules/owl.carousel/dist/owl.carousel.min.js");
/* harmony import */ var owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(owl_carousel_dist_owl_carousel_min__WEBPACK_IMPORTED_MODULE_0__);


 // slider functionality

$('.feedback__slider').owlCarousel({
  loop: true,
  margin: 10,
  responsive: {
    300: {
      items: 1
    }
  },
  smartSpeed: 700
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");



gsap_all__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_0__["TweenMax"]);
gsap_all__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_0__["TimelineMax"]);
gsap_all__WEBPACK_IMPORTED_MODULE_0__["gsap"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_0__["TweenLite"]);
var formInput = $('#form input');
var counter = $('.counter'); // form class active/invalid functionality

var _loop = function _loop(i) {
  formInput[i].oninput = function () {
    counter[i].innerHTML = counter[i].dataset.counter - formInput[i].value.length;
    addNeededClass(formInput[i], 'active');
  };

  formInput[i].onblur = function () {
    addNeededClass(formInput[i], 'invalid');
  };
};

for (var i = 0; i < formInput.length; i++) {
  _loop(i);
}

function addNeededClass(item, className) {
  if (className === 'invalid' && !$(item).val().length) {
    $(item).addClass(className);
  } else if (className === 'active' && $(item).val().length) {
    $(item).addClass(className);
  } else {
    $(item).removeClass(className);
  }
} // Result message animation


var showMessage = new gsap_all__WEBPACK_IMPORTED_MODULE_0__["TimelineMax"]();
showMessage.add(gsap_all__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].to(".message", 0.7, {
  opacity: 1,
  ease: gsap_all__WEBPACK_IMPORTED_MODULE_0__["Expo"].easeOut
}));
showMessage.add(gsap_all__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].to(".message", 0.7, {
  opacity: 0,
  ease: gsap_all__WEBPACK_IMPORTED_MODULE_0__["Expo"].easeOut,
  delay: 2
}));
showMessage.pause(); // Dice animation of the loader

var loadingAnimation = gsap_all__WEBPACK_IMPORTED_MODULE_0__["TweenLite"].to(".loading", 1, {
  autoAlpha: 0.8
});
loadingAnimation.pause(); // Sending data to the server

$(function () {
  $('#form').on('submit', function (e) {
    $('.message').removeClass('error success');
    $('input').removeClass('email-error');
    loadingAnimation.play();
    e.preventDefault();
    $.ajax({
      url: 'phpmailer/send.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: new FormData(this),
      success: function success(message) {
        if (message === 'ok') {
          $('#form').trigger('reset');
          $('input').removeClass('active');

          for (var _i = 0; _i < formInput.length; _i++) {
            counter[_i].innerHTML = counter[_i].dataset.counter - formInput[_i].value.length;
          }

          $('.message').text('Message sent successfully, we will answer you soon').addClass('success');
          showMessage.restart();
          loadingAnimation.duration(0.3).reverse();
        } else {
          if (message === 'mailerror') {
            $("#email").addClass('email-error');
          }

          $('.message').text('Error, check the entered data').addClass('error');
          showMessage.restart();
          loadingAnimation.duration(0.3).reverse();
        }
      }
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! exports provided: scrollto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollto", function() { return scrollto; });
/* harmony import */ var velocity_animate_velocity_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! velocity-animate/velocity.min */ "./node_modules/velocity-animate/velocity.min.js");
/* harmony import */ var velocity_animate_velocity_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(velocity_animate_velocity_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var velocity_animate_velocity_ui_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! velocity-animate/velocity.ui.min */ "./node_modules/velocity-animate/velocity.ui.min.js");
/* harmony import */ var velocity_animate_velocity_ui_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(velocity_animate_velocity_ui_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var modal_video_js_modal_video_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modal-video/js/modal-video.min */ "./node_modules/modal-video/js/modal-video.min.js");
/* harmony import */ var modal_video_js_modal_video_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(modal_video_js_modal_video_min__WEBPACK_IMPORTED_MODULE_4__);







var burger = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.burger-icon');
var links = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.header__animate-nav ul li a');
var menu = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.header__animate-nav ul li');
var overlay_navigation = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.header__navigation-overlay'); // Burger menu functionality

burger.click(showMenu);
links.click(hideMenu);

function showMenu() {
  menu.css('flex-basis', "calc(100%/ ".concat(menu.length, ")"));
  overlay_navigation.toggleClass('overlay-active');
  jquery__WEBPACK_IMPORTED_MODULE_3___default()("body").addClass("fixed");

  if (overlay_navigation.hasClass('overlay-active')) {
    burger.css('pointer-events', 'none');
    burger.addClass('active');
    overlay_navigation.velocity('transition.slideLeftIn', {
      begin: function begin() {
        menu.velocity('transition.perspectiveLeftIn', {
          stagger: 70,
          delay: 0
        });
      },
      complete: function complete() {
        burger.css('pointer-events', 'auto');
      }
    });
  } else {
    hideMenu();
  }
}

function hideMenu() {
  burger.removeClass('active');
  burger.css('pointer-events', 'none');
  overlay_navigation.removeClass('overlay-active');
  jquery__WEBPACK_IMPORTED_MODULE_3___default()("body").removeClass("fixed");
  menu.velocity('transition.perspectiveRightOut', {
    stagger: 50,
    delay: 0,
    complete: function complete() {
      overlay_navigation.velocity('transition.fadeOut', {});
      burger.css('pointer-events', 'auto');
    }
  });
} // On Scroll Functionality


jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).scroll(function (e) {
  var st = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).scrollTop();
  st > 200 ? jquery__WEBPACK_IMPORTED_MODULE_3___default()('.burger-wrapper').addClass('navShadow') : jquery__WEBPACK_IMPORTED_MODULE_3___default()('.burger-wrapper').removeClass('navShadow');
  var $sections = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.section');
  $sections.each(function (i, el) {
    var top = jquery__WEBPACK_IMPORTED_MODULE_3___default()(el).offset().top - 90;
    var bottom = top + jquery__WEBPACK_IMPORTED_MODULE_3___default()(el).height();
    var scroll = jquery__WEBPACK_IMPORTED_MODULE_3___default()(window).scrollTop();
    var id = jquery__WEBPACK_IMPORTED_MODULE_3___default()(el).attr('id');

    if (scroll > top && scroll < bottom) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('a.active').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('a[href="#' + id + '"]').addClass('active');
    }
  });
}); // Type machine Functionality

var options = {
  strings: ['Chilly Agency', 'Developers', 'Designers', 'Strategists', 'Marketers'],
  typeSpeed: 40,
  showCursor: false,
  loop: true,
  backSpeed: 40
};
var typed = new typed_js__WEBPACK_IMPORTED_MODULE_2___default.a('#main-text', options); // scroll to chosen block on page functionality

function scrollto() {
  jquery__WEBPACK_IMPORTED_MODULE_3___default()(".scrollto").click(function () {
    var elementClick = jquery__WEBPACK_IMPORTED_MODULE_3___default()(this).attr("href");
    var destination = jquery__WEBPACK_IMPORTED_MODULE_3___default()(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination - 80
    }, 1500);
    return false;
  });
} // Video functionality

new modal_video_js_modal_video_min__WEBPACK_IMPORTED_MODULE_4___default.a('.open-video');
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/portfolio/portfolio.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/portfolio/portfolio.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var categories = $('.filter-item');
var elem = $(".portfolio__item");
categories.click(applyFilter); // filter functionality

function applyFilter() {
  var value = $(this).attr("data-filter");
  categories.removeClass('active');
  $(this).addClass('active');

  if (value === "all") {
    elem.show("slow");
  } else {
    elem.not("." + value).hide("slow");
    elem.filter("." + value).show("slow");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_about_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/about/about */ "./src/blocks/modules/about/about.js");
/* harmony import */ var _modules_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/portfolio/portfolio */ "./src/blocks/modules/portfolio/portfolio.js");
/* harmony import */ var _modules_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_portfolio_portfolio__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_feedback_feedback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/feedback/feedback */ "./src/blocks/modules/feedback/feedback.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");






/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_modules_about_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blocks/modules/about/about.js */ "./src/blocks/modules/about/about.js");
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");







gsap_all__WEBPACK_IMPORTED_MODULE_3__["gsap"].registerPlugin(gsap_all__WEBPACK_IMPORTED_MODULE_3__["TweenMax"]);
jquery__WEBPACK_IMPORTED_MODULE_1___default()(document).ready(function () {
  Object(_blocks_modules_about_about_js__WEBPACK_IMPORTED_MODULE_2__["aboutInit"])();
  Object(_modules_header_header__WEBPACK_IMPORTED_MODULE_4__["scrollto"])();
  initialParallax();
  setTimeout(function () {
    var preloader = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#preloader');

    if (!preloader.hasClass('done')) {
      preloader.addClass('done');
    }
  }, 2000);
  setCompanyName();
});
var companyName = 'Chilly Agency';

function setCompanyName() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.company-name').each(function () {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).text(companyName);
  });
} // parallax on page functionality


function initialParallax() {
  if (document.documentElement.clientWidth >= 1050) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#header').mousemove(function (e) {
      parallaxIt(e, ".h-circle-1", -30, '#header');
      parallaxIt(e, ".h-circle-2", 10, '#header');
      parallaxIt(e, ".h-circle-3", 20, '#header');
      parallaxIt(e, ".h-square-1", -40, '#header');
      parallaxIt(e, ".h-trapezoid-1", -5, '#header');
      parallaxIt(e, ".repeat-grid-circles", 20, '#header');
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#about').mousemove(function (e) {
      parallaxIt(e, ".repeat-circles", 30, '#about');
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#services').mousemove(function (e) {
      parallaxIt(e, ".pentagon-1", 30, '#services');
      parallaxIt(e, ".pentagon-2", -30, '#services');
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#feedback').mousemove(function (e) {
      parallaxIt(e, ".feedback-circle-1", 10, '#feedback');
      parallaxIt(e, ".feedback-circle-2", -5, '#feedback');
      parallaxIt(e, ".feedback-circle-3", 20, '#feedback');
      parallaxIt(e, ".feedback-circle-4", -20, '#feedback');
      parallaxIt(e, ".feedback-circle-5", 5, '#feedback');
      parallaxIt(e, ".feedback-circle-6", -10, '#feedback');
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#footer').mousemove(function (e) {
      parallaxIt(e, ".footer-circle-1", 10, '#footer');
      parallaxIt(e, ".footer-circle-2", -5, '#footer');
      parallaxIt(e, ".footer-circle-3", 20, '#footer');
      parallaxIt(e, ".footer-square", -20, '#footer');
      parallaxIt(e, ".footer-trapezoid", 5, '#footer');
    });
  }
}

function parallaxIt(e, target, movement, parent) {
  var $this = jquery__WEBPACK_IMPORTED_MODULE_1___default()(parent);
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;
  gsap_all__WEBPACK_IMPORTED_MODULE_3__["TweenMax"].to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map