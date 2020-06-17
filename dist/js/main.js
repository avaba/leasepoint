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

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $("#my-menu").mmenu({
    extensions: ["theme-light", "border-none", "position-front", "position-left", "shadow-page", "pagedim-black"],
    navbar: {
      title: "\n        <img src=\"../../img/svg/logo.svg\" alt=\"\">\n        <a class=\"navbar-accout\" href=\"#\"><img src=\"./img/svg/user.svg\" alt=\"\"></a>\n        "
    },
    "navbars": [{
      "position": "bottom",
      "content": ['<a href="#"><i class="fa fa-youtube-play"></i></a>', '<a href="#"><i class="fa fa-vk"></i></a>', '<a href="#"><i class="fa fa-facebook"></i></a>', '<a href="#"><i class="fa fa-instagram"></i></a>']
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/history/history.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/history/history.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(function () {
  $('.history-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1
  });
  $('.history__tabs').on('click', '.history__tabs_item:not(.history__tabs_item--active)', function () {
    $(this).addClass('history__tabs_item--active').siblings().removeClass('history__tabs_item--active');
  });
  $('.history__tabs_item').on('click', function () {
    var target = $(this).data('target');
    $('.history__content[data-id=' + target + ']').addClass('history__content--active').siblings().removeClass('history__content--active');
    $('.history-slider').slick('setPosition');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/partners/partners.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/partners/partners.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
  $('.partners-slider').slick(_defineProperty({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000
  }, "infinite", true));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/slide-home/slide-home.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/slide-home/slide-home.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
  $('.slide-home__slide').slick(_defineProperty({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  }, "infinite", true));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/formstyler.js":
/*!*************************************!*\
  !*** ./src/js/import/formstyler.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * jQuery Form Styler v2.0.2
 * https://github.com/Dimox/jQueryFormStyler
 *
 * Copyright 2012-2017 Dimox (http://dimox.name/)
 * Released under the MIT license.
 *
 * Date: 2017.10.22
 *
 */
;

(function (factory) {
  if (true) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var pluginName = 'styler',
      defaults = {
    idSuffix: '-styler',
    filePlaceholder: 'Файл не выбран',
    fileBrowse: 'Обзор...',
    fileNumber: 'Выбрано файлов: %s',
    selectPlaceholder: 'Выберите...',
    selectSearch: false,
    selectSearchLimit: 10,
    selectSearchNotFound: 'Совпадений не найдено',
    selectSearchPlaceholder: 'Поиск...',
    selectVisibleOptions: 0,
    selectSmartPositioning: true,
    locale: 'ru',
    locales: {
      'en': {
        filePlaceholder: 'No file selected',
        fileBrowse: 'Browse...',
        fileNumber: 'Selected files: %s',
        selectPlaceholder: 'Select...',
        selectSearchNotFound: 'No matches found',
        selectSearchPlaceholder: 'Search...'
      }
    },
    onSelectOpened: function onSelectOpened() {},
    onSelectClosed: function onSelectClosed() {},
    onFormStyled: function onFormStyled() {}
  };

  function Plugin(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    var locale = this.options.locale;

    if (this.options.locales[locale] !== undefined) {
      $.extend(this.options, this.options.locales[locale]);
    }

    this.init();
  }

  Plugin.prototype = {
    // инициализация
    init: function init() {
      var el = $(this.element);
      var opt = this.options;
      var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? true : false;
      var Android = navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/(Windows\sPhone)/i) ? true : false;

      function Attributes() {
        if (el.attr('id') !== undefined && el.attr('id') !== '') {
          this.id = el.attr('id') + opt.idSuffix;
        }

        this.title = el.attr('title');
        this.classes = el.attr('class');
        this.data = el.data();
      } // checkbox


      if (el.is(':checkbox')) {
        var checkboxOutput = function checkboxOutput() {
          var att = new Attributes();
          var checkbox = $('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({
            id: att.id,
            title: att.title
          }).addClass(att.classes).data(att.data);
          el.after(checkbox).prependTo(checkbox);
          if (el.is(':checked')) checkbox.addClass('checked');
          if (el.is(':disabled')) checkbox.addClass('disabled'); // клик на псевдочекбокс

          checkbox.click(function (e) {
            e.preventDefault();
            el.triggerHandler('click');

            if (!checkbox.is('.disabled')) {
              if (el.is(':checked')) {
                el.prop('checked', false);
                checkbox.removeClass('checked');
              } else {
                el.prop('checked', true);
                checkbox.addClass('checked');
              }

              el.focus().change();
            }
          }); // клик на label

          el.closest('label').add('label[for="' + el.attr('id') + '"]').on('click.styler', function (e) {
            if (!$(e.target).is('a') && !$(e.target).closest(checkbox).length) {
              checkbox.triggerHandler('click');
              e.preventDefault();
            }
          }); // переключение по Space или Enter

          el.on('change.styler', function () {
            if (el.is(':checked')) checkbox.addClass('checked');else checkbox.removeClass('checked');
          }) // чтобы переключался чекбокс, который находится в теге label
          .on('keydown.styler', function (e) {
            if (e.which == 32) checkbox.click();
          }).on('focus.styler', function () {
            if (!checkbox.is('.disabled')) checkbox.addClass('focused');
          }).on('blur.styler', function () {
            checkbox.removeClass('focused');
          });
        }; // end checkboxOutput()


        checkboxOutput(); // обновление при динамическом изменении

        el.on('refresh', function () {
          el.closest('label').add('label[for="' + el.attr('id') + '"]').off('.styler');
          el.off('.styler').parent().before(el).remove();
          checkboxOutput();
        }); // end checkbox
        // radio
      } else if (el.is(':radio')) {
        var radioOutput = function radioOutput() {
          var att = new Attributes();
          var radio = $('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({
            id: att.id,
            title: att.title
          }).addClass(att.classes).data(att.data);
          el.after(radio).prependTo(radio);
          if (el.is(':checked')) radio.addClass('checked');
          if (el.is(':disabled')) radio.addClass('disabled'); // определяем общего родителя у радиокнопок с одинаковым name
          // http://stackoverflow.com/a/27733847

          $.fn.commonParents = function () {
            var cachedThis = this;
            return cachedThis.first().parents().filter(function () {
              return $(this).find(cachedThis).length === cachedThis.length;
            });
          };

          $.fn.commonParent = function () {
            return $(this).commonParents().first();
          }; // клик на псевдорадиокнопке


          radio.click(function (e) {
            e.preventDefault();
            el.triggerHandler('click');

            if (!radio.is('.disabled')) {
              var inputName = $('input[name="' + el.attr('name') + '"]');
              inputName.commonParent().find(inputName).prop('checked', false).parent().removeClass('checked');
              el.prop('checked', true).parent().addClass('checked');
              el.focus().change();
            }
          }); // клик на label

          el.closest('label').add('label[for="' + el.attr('id') + '"]').on('click.styler', function (e) {
            if (!$(e.target).is('a') && !$(e.target).closest(radio).length) {
              radio.triggerHandler('click');
              e.preventDefault();
            }
          }); // переключение стрелками

          el.on('change.styler', function () {
            el.parent().addClass('checked');
          }).on('focus.styler', function () {
            if (!radio.is('.disabled')) radio.addClass('focused');
          }).on('blur.styler', function () {
            radio.removeClass('focused');
          });
        }; // end radioOutput()


        radioOutput(); // обновление при динамическом изменении

        el.on('refresh', function () {
          el.closest('label').add('label[for="' + el.attr('id') + '"]').off('.styler');
          el.off('.styler').parent().before(el).remove();
          radioOutput();
        }); // end radio
        // file
      } else if (el.is(':file')) {
        var fileOutput = function fileOutput() {
          var att = new Attributes();
          var placeholder = el.data('placeholder');
          if (placeholder === undefined) placeholder = opt.filePlaceholder;
          var browse = el.data('browse');
          if (browse === undefined || browse === '') browse = opt.fileBrowse;
          var file = $('<div class="jq-file">' + '<div class="jq-file__name">' + placeholder + '</div>' + '<div class="jq-file__browse">' + browse + '</div>' + '</div>').attr({
            id: att.id,
            title: att.title
          }).addClass(att.classes).data(att.data);
          el.after(file).appendTo(file);
          if (el.is(':disabled')) file.addClass('disabled');
          var value = el.val();
          var name = $('div.jq-file__name', file); // чтобы при динамическом изменении имя файла не сбрасывалось

          if (value) name.text(value.replace(/.+[\\\/]/, ''));
          el.on('change.styler', function () {
            var value = el.val();

            if (el.is('[multiple]')) {
              value = '';
              var files = el[0].files.length;

              if (files > 0) {
                var number = el.data('number');
                if (number === undefined) number = opt.fileNumber;
                number = number.replace('%s', files);
                value = number;
              }
            }

            name.text(value.replace(/.+[\\\/]/, ''));

            if (value === '') {
              name.text(placeholder);
              file.removeClass('changed');
            } else {
              file.addClass('changed');
            }
          }).on('focus.styler', function () {
            file.addClass('focused');
          }).on('blur.styler', function () {
            file.removeClass('focused');
          }).on('click.styler', function () {
            file.removeClass('focused');
          });
        }; // end fileOutput()


        fileOutput(); // обновление при динамическом изменении

        el.on('refresh', function () {
          el.off('.styler').parent().before(el).remove();
          fileOutput();
        }); // end file
        // number
      } else if (el.is('input[type="number"]')) {
        var numberOutput = function numberOutput() {
          var att = new Attributes();
          var number = $('<div class="jq-number">' + '<div class="jq-number__spin minus"></div>' + '<div class="jq-number__spin plus"></div>' + '</div>').attr({
            id: att.id,
            title: att.title
          }).addClass(att.classes).data(att.data);
          el.after(number).prependTo(number).wrap('<div class="jq-number__field"></div>');
          if (el.is(':disabled')) number.addClass('disabled');
          var min,
              max,
              step,
              timeout = null,
              interval = null;
          if (el.attr('min') !== undefined) min = el.attr('min');
          if (el.attr('max') !== undefined) max = el.attr('max');
          if (el.attr('step') !== undefined && $.isNumeric(el.attr('step'))) step = Number(el.attr('step'));else step = Number(1);

          var changeValue = function changeValue(spin) {
            var value = el.val(),
                newValue;

            if (!$.isNumeric(value)) {
              value = 0;
              el.val('0');
            }

            if (spin.is('.minus')) {
              newValue = Number(value) - step;
            } else if (spin.is('.plus')) {
              newValue = Number(value) + step;
            } // определяем количество десятичных знаков после запятой в step


            var decimals = (step.toString().split('.')[1] || []).length;

            if (decimals > 0) {
              var multiplier = '1';

              while (multiplier.length <= decimals) {
                multiplier = multiplier + '0';
              } // избегаем появления лишних знаков после запятой


              newValue = Math.round(newValue * multiplier) / multiplier;
            }

            if ($.isNumeric(min) && $.isNumeric(max)) {
              if (newValue >= min && newValue <= max) el.val(newValue);
            } else if ($.isNumeric(min) && !$.isNumeric(max)) {
              if (newValue >= min) el.val(newValue);
            } else if (!$.isNumeric(min) && $.isNumeric(max)) {
              if (newValue <= max) el.val(newValue);
            } else {
              el.val(newValue);
            }
          };

          if (!number.is('.disabled')) {
            number.on('mousedown', 'div.jq-number__spin', function () {
              var spin = $(this);
              changeValue(spin);
              timeout = setTimeout(function () {
                interval = setInterval(function () {
                  changeValue(spin);
                }, 40);
              }, 350);
            }).on('mouseup mouseout', 'div.jq-number__spin', function () {
              clearTimeout(timeout);
              clearInterval(interval);
            }).on('mouseup', 'div.jq-number__spin', function () {
              el.change().trigger('input');
            });
            el.on('focus.styler', function () {
              number.addClass('focused');
            }).on('blur.styler', function () {
              number.removeClass('focused');
            });
          }
        }; // end numberOutput()


        numberOutput(); // обновление при динамическом изменении

        el.on('refresh', function () {
          el.off('.styler').closest('.jq-number').before(el).remove();
          numberOutput();
        }); // end number
        // select
      } else if (el.is('select')) {
        var selectboxOutput = function selectboxOutput() {
          // запрещаем прокрутку страницы при прокрутке селекта
          function preventScrolling(selector) {
            var scrollDiff = selector.prop('scrollHeight') - selector.outerHeight(),
                wheelDelta = null,
                scrollTop = null;
            selector.off('mousewheel DOMMouseScroll').on('mousewheel DOMMouseScroll', function (e) {
              /**
               * нормализация направления прокрутки
               * (firefox < 0 || chrome etc... > 0)
               * (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0)
               */
              wheelDelta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1; // направление прокрутки (-1 вниз, 1 вверх)

              scrollTop = selector.scrollTop(); // позиция скролла

              if (scrollTop >= scrollDiff && wheelDelta < 0 || scrollTop <= 0 && wheelDelta > 0) {
                e.stopPropagation();
                e.preventDefault();
              }
            });
          }

          var option = $('option', el);
          var list = ''; // формируем список селекта

          function makeList() {
            for (var i = 0; i < option.length; i++) {
              var op = option.eq(i);
              var li = '',
                  liClass = '',
                  liClasses = '',
                  id = '',
                  title = '',
                  dataList = '',
                  optionClass = '',
                  optgroupClass = '',
                  dataJqfsClass = '';
              var disabled = 'disabled';
              var selDis = 'selected sel disabled';
              if (op.prop('selected')) liClass = 'selected sel';
              if (op.is(':disabled')) liClass = disabled;
              if (op.is(':selected:disabled')) liClass = selDis;
              if (op.attr('id') !== undefined && op.attr('id') !== '') id = ' id="' + op.attr('id') + opt.idSuffix + '"';
              if (op.attr('title') !== undefined && option.attr('title') !== '') title = ' title="' + op.attr('title') + '"';

              if (op.attr('class') !== undefined) {
                optionClass = ' ' + op.attr('class');
                dataJqfsClass = ' data-jqfs-class="' + op.attr('class') + '"';
              }

              var data = op.data();

              for (var k in data) {
                if (data[k] !== '') dataList += ' data-' + k + '="' + data[k] + '"';
              }

              if (liClass + optionClass !== '') liClasses = ' class="' + liClass + optionClass + '"';
              li = '<li' + dataJqfsClass + dataList + liClasses + title + id + '>' + op.html() + '</li>'; // если есть optgroup

              if (op.parent().is('optgroup')) {
                if (op.parent().attr('class') !== undefined) optgroupClass = ' ' + op.parent().attr('class');
                li = '<li' + dataJqfsClass + dataList + ' class="' + liClass + optionClass + ' option' + optgroupClass + '"' + title + id + '>' + op.html() + '</li>';

                if (op.is(':first-child')) {
                  li = '<li class="optgroup' + optgroupClass + '">' + op.parent().attr('label') + '</li>' + li;
                }
              }

              list += li;
            }
          } // end makeList()
          // одиночный селект


          function doSelect() {
            var att = new Attributes();
            var searchHTML = '';
            var selectPlaceholder = el.data('placeholder');
            var selectSearch = el.data('search');
            var selectSearchLimit = el.data('search-limit');
            var selectSearchNotFound = el.data('search-not-found');
            var selectSearchPlaceholder = el.data('search-placeholder');
            var selectSmartPositioning = el.data('smart-positioning');
            if (selectPlaceholder === undefined) selectPlaceholder = opt.selectPlaceholder;
            if (selectSearch === undefined || selectSearch === '') selectSearch = opt.selectSearch;
            if (selectSearchLimit === undefined || selectSearchLimit === '') selectSearchLimit = opt.selectSearchLimit;
            if (selectSearchNotFound === undefined || selectSearchNotFound === '') selectSearchNotFound = opt.selectSearchNotFound;
            if (selectSearchPlaceholder === undefined) selectSearchPlaceholder = opt.selectSearchPlaceholder;
            if (selectSmartPositioning === undefined || selectSmartPositioning === '') selectSmartPositioning = opt.selectSmartPositioning;
            var selectbox = $('<div class="jq-selectbox jqselect">' + '<div class="jq-selectbox__select">' + '<div class="jq-selectbox__select-text"></div>' + '<div class="jq-selectbox__trigger">' + '<div class="jq-selectbox__trigger-arrow"></div></div>' + '</div>' + '</div>').attr({
              id: att.id,
              title: att.title
            }).addClass(att.classes).data(att.data);
            el.after(selectbox).prependTo(selectbox);
            var selectzIndex = selectbox.css('z-index');
            selectzIndex = selectzIndex > 0 ? selectzIndex : 1;
            var divSelect = $('div.jq-selectbox__select', selectbox);
            var divText = $('div.jq-selectbox__select-text', selectbox);
            var optionSelected = option.filter(':selected');
            makeList();
            if (selectSearch) searchHTML = '<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="' + selectSearchPlaceholder + '"></div>' + '<div class="jq-selectbox__not-found">' + selectSearchNotFound + '</div>';
            var dropdown = $('<div class="jq-selectbox__dropdown">' + searchHTML + '<ul>' + list + '</ul>' + '</div>');
            selectbox.append(dropdown);
            var ul = $('ul', dropdown);
            var li = $('li', dropdown);
            var search = $('input', dropdown);
            var notFound = $('div.jq-selectbox__not-found', dropdown).hide();
            if (li.length < selectSearchLimit) search.parent().hide(); // показываем опцию по умолчанию
            // если у 1-й опции нет текста, она выбрана по умолчанию и параметр selectPlaceholder не false, то показываем плейсхолдер

            if (option.first().text() === '' && option.first().is(':selected') && selectPlaceholder !== false) {
              divText.text(selectPlaceholder).addClass('placeholder');
            } else {
              divText.text(optionSelected.text());
            } // определяем самый широкий пункт селекта


            var liWidthInner = 0,
                liWidth = 0;
            li.css({
              'display': 'inline-block'
            });
            li.each(function () {
              var l = $(this);

              if (l.innerWidth() > liWidthInner) {
                liWidthInner = l.innerWidth();
                liWidth = l.width();
              }
            });
            li.css({
              'display': ''
            }); // подстраиваем ширину свернутого селекта в зависимости
            // от ширины плейсхолдера или самого широкого пункта

            if (divText.is('.placeholder') && divText.width() > liWidthInner) {
              divText.width(divText.width());
            } else {
              var selClone = selectbox.clone().appendTo('body').width('auto');
              var selCloneWidth = selClone.outerWidth();
              selClone.remove();

              if (selCloneWidth == selectbox.outerWidth()) {
                divText.width(liWidth);
              }
            } // подстраиваем ширину выпадающего списка в зависимости от самого широкого пункта


            if (liWidthInner > selectbox.width()) dropdown.width(liWidthInner); // прячем 1-ю пустую опцию, если она есть и если атрибут data-placeholder не пустой
            // если все же нужно, чтобы первая пустая опция отображалась, то указываем у селекта: data-placeholder=""

            if (option.first().text() === '' && el.data('placeholder') !== '') {
              li.first().hide();
            }

            var selectHeight = selectbox.outerHeight(true);
            var searchHeight = search.parent().outerHeight(true) || 0;
            var isMaxHeight = ul.css('max-height');
            var liSelected = li.filter('.selected');
            if (liSelected.length < 1) li.first().addClass('selected sel');

            if (li.data('li-height') === undefined) {
              var liOuterHeight = li.outerHeight();
              if (selectPlaceholder !== false) liOuterHeight = li.eq(1).outerHeight();
              li.data('li-height', liOuterHeight);
            }

            var position = dropdown.css('top');
            if (dropdown.css('left') == 'auto') dropdown.css({
              left: 0
            });

            if (dropdown.css('top') == 'auto') {
              dropdown.css({
                top: selectHeight
              });
              position = selectHeight;
            }

            dropdown.hide(); // если выбран не дефолтный пункт

            if (liSelected.length) {
              // добавляем класс, показывающий изменение селекта
              if (option.first().text() != optionSelected.text()) {
                selectbox.addClass('changed');
              } // передаем селекту класс выбранного пункта


              selectbox.data('jqfs-class', liSelected.data('jqfs-class'));
              selectbox.addClass(liSelected.data('jqfs-class'));
            } // если селект неактивный


            if (el.is(':disabled')) {
              selectbox.addClass('disabled');
              return false;
            } // при клике на псевдоселекте


            divSelect.click(function () {
              // колбек при закрытии селекта
              if ($('div.jq-selectbox').filter('.opened').length) {
                opt.onSelectClosed.call($('div.jq-selectbox').filter('.opened'));
              }

              el.focus(); // если iOS, то не показываем выпадающий список,
              // т.к. отображается нативный и неизвестно, как его спрятать

              if (iOS) return; // умное позиционирование

              var win = $(window);
              var liHeight = li.data('li-height');
              var topOffset = selectbox.offset().top;
              var bottomOffset = win.height() - selectHeight - (topOffset - win.scrollTop());
              var visible = el.data('visible-options');
              if (visible === undefined || visible === '') visible = opt.selectVisibleOptions;
              var minHeight = liHeight * 5;
              var newHeight = liHeight * visible;
              if (visible > 0 && visible < 6) minHeight = newHeight;
              if (visible === 0) newHeight = 'auto';

              var dropDown = function dropDown() {
                dropdown.height('auto').css({
                  bottom: 'auto',
                  top: position
                });

                var maxHeightBottom = function maxHeightBottom() {
                  ul.css('max-height', Math.floor((bottomOffset - 20 - searchHeight) / liHeight) * liHeight);
                };

                maxHeightBottom();
                ul.css('max-height', newHeight);

                if (isMaxHeight != 'none') {
                  ul.css('max-height', isMaxHeight);
                }

                if (bottomOffset < dropdown.outerHeight() + 20) {
                  maxHeightBottom();
                }
              };

              var dropUp = function dropUp() {
                dropdown.height('auto').css({
                  top: 'auto',
                  bottom: position
                });

                var maxHeightTop = function maxHeightTop() {
                  ul.css('max-height', Math.floor((topOffset - win.scrollTop() - 20 - searchHeight) / liHeight) * liHeight);
                };

                maxHeightTop();
                ul.css('max-height', newHeight);

                if (isMaxHeight != 'none') {
                  ul.css('max-height', isMaxHeight);
                }

                if (topOffset - win.scrollTop() - 20 < dropdown.outerHeight() + 20) {
                  maxHeightTop();
                }
              };

              if (selectSmartPositioning === true || selectSmartPositioning === 1) {
                // раскрытие вниз
                if (bottomOffset > minHeight + searchHeight + 20) {
                  dropDown();
                  selectbox.removeClass('dropup').addClass('dropdown'); // раскрытие вверх
                } else {
                  dropUp();
                  selectbox.removeClass('dropdown').addClass('dropup');
                }
              } else if (selectSmartPositioning === false || selectSmartPositioning === 0) {
                // раскрытие вниз
                if (bottomOffset > minHeight + searchHeight + 20) {
                  dropDown();
                  selectbox.removeClass('dropup').addClass('dropdown');
                }
              } else {
                // если умное позиционирование отключено
                dropdown.height('auto').css({
                  bottom: 'auto',
                  top: position
                });
                ul.css('max-height', newHeight);

                if (isMaxHeight != 'none') {
                  ul.css('max-height', isMaxHeight);
                }
              } // если выпадающий список выходит за правый край окна браузера,
              // то меняем позиционирование с левого на правое


              if (selectbox.offset().left + dropdown.outerWidth() > win.width()) {
                dropdown.css({
                  left: 'auto',
                  right: 0
                });
              } // конец умного позиционирования


              $('div.jqselect').css({
                zIndex: selectzIndex - 1
              }).removeClass('opened');
              selectbox.css({
                zIndex: selectzIndex
              });

              if (dropdown.is(':hidden')) {
                $('div.jq-selectbox__dropdown:visible').hide();
                dropdown.show();
                selectbox.addClass('opened focused'); // колбек при открытии селекта

                opt.onSelectOpened.call(selectbox);
              } else {
                dropdown.hide();
                selectbox.removeClass('opened dropup dropdown'); // колбек при закрытии селекта

                if ($('div.jq-selectbox').filter('.opened').length) {
                  opt.onSelectClosed.call(selectbox);
                }
              } // поисковое поле


              if (search.length) {
                search.val('').keyup();
                notFound.hide();
                search.keyup(function () {
                  var query = $(this).val();
                  li.each(function () {
                    if (!$(this).html().match(new RegExp('.*?' + query + '.*?', 'i'))) {
                      $(this).hide();
                    } else {
                      $(this).show();
                    }
                  }); // прячем 1-ю пустую опцию

                  if (option.first().text() === '' && el.data('placeholder') !== '') {
                    li.first().hide();
                  }

                  if (li.filter(':visible').length < 1) {
                    notFound.show();
                  } else {
                    notFound.hide();
                  }
                });
              } // прокручиваем до выбранного пункта при открытии списка


              if (li.filter('.selected').length) {
                if (el.val() === '') {
                  ul.scrollTop(0);
                } else {
                  // если нечетное количество видимых пунктов,
                  // то высоту пункта делим пополам для последующего расчета
                  if (ul.innerHeight() / liHeight % 2 !== 0) liHeight = liHeight / 2;
                  ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top - ul.innerHeight() / 2 + liHeight);
                }
              }

              preventScrolling(ul);
            }); // end divSelect.click()
            // при наведении курсора на пункт списка

            li.hover(function () {
              $(this).siblings().removeClass('selected');
            });
            var selectedText = li.filter('.selected').text(); // при клике на пункт списка

            li.filter(':not(.disabled):not(.optgroup)').click(function () {
              el.focus();
              var t = $(this);
              var liText = t.text();

              if (!t.is('.selected')) {
                var index = t.index();
                index -= t.prevAll('.optgroup').length;
                t.addClass('selected sel').siblings().removeClass('selected sel');
                option.prop('selected', false).eq(index).prop('selected', true);
                selectedText = liText;
                divText.text(liText); // передаем селекту класс выбранного пункта

                if (selectbox.data('jqfs-class')) selectbox.removeClass(selectbox.data('jqfs-class'));
                selectbox.data('jqfs-class', t.data('jqfs-class'));
                selectbox.addClass(t.data('jqfs-class'));
                el.change();
              }

              dropdown.hide();
              selectbox.removeClass('opened dropup dropdown'); // колбек при закрытии селекта

              opt.onSelectClosed.call(selectbox);
            });
            dropdown.mouseout(function () {
              $('li.sel', dropdown).addClass('selected');
            }); // изменение селекта

            el.on('change.styler', function () {
              divText.text(option.filter(':selected').text()).removeClass('placeholder');
              li.removeClass('selected sel').not('.optgroup').eq(el[0].selectedIndex).addClass('selected sel'); // добавляем класс, показывающий изменение селекта

              if (option.first().text() != li.filter('.selected').text()) {
                selectbox.addClass('changed');
              } else {
                selectbox.removeClass('changed');
              }
            }).on('focus.styler', function () {
              selectbox.addClass('focused');
              $('div.jqselect').not('.focused').removeClass('opened dropup dropdown').find('div.jq-selectbox__dropdown').hide();
            }).on('blur.styler', function () {
              selectbox.removeClass('focused');
            }) // изменение селекта с клавиатуры
            .on('keydown.styler keyup.styler', function (e) {
              var liHeight = li.data('li-height');

              if (el.val() === '') {
                divText.text(selectPlaceholder).addClass('placeholder');
              } else {
                divText.text(option.filter(':selected').text());
              }

              li.removeClass('selected sel').not('.optgroup').eq(el[0].selectedIndex).addClass('selected sel'); // вверх, влево, Page Up, Home

              if (e.which == 38 || e.which == 37 || e.which == 33 || e.which == 36) {
                if (el.val() === '') {
                  ul.scrollTop(0);
                } else {
                  ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top);
                }
              } // вниз, вправо, Page Down, End


              if (e.which == 40 || e.which == 39 || e.which == 34 || e.which == 35) {
                ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top - ul.innerHeight() + liHeight);
              } // закрываем выпадающий список при нажатии Enter


              if (e.which == 13) {
                e.preventDefault();
                dropdown.hide();
                selectbox.removeClass('opened dropup dropdown'); // колбек при закрытии селекта

                opt.onSelectClosed.call(selectbox);
              }
            }).on('keydown.styler', function (e) {
              // открываем выпадающий список при нажатии Space
              if (e.which == 32) {
                e.preventDefault();
                divSelect.click();
              }
            }); // прячем выпадающий список при клике за пределами селекта

            if (!onDocumentClick.registered) {
              $(document).on('click', onDocumentClick);
              onDocumentClick.registered = true;
            }
          } // end doSelect()
          // мультиселект


          function doMultipleSelect() {
            var att = new Attributes();
            var selectbox = $('<div class="jq-select-multiple jqselect"></div>').attr({
              id: att.id,
              title: att.title
            }).addClass(att.classes).data(att.data);
            el.after(selectbox);
            makeList();
            selectbox.append('<ul>' + list + '</ul>');
            var ul = $('ul', selectbox);
            var li = $('li', selectbox);
            var size = el.attr('size');
            var ulHeight = ul.outerHeight();
            var liHeight = li.outerHeight();

            if (size !== undefined && size > 0) {
              ul.css({
                'height': liHeight * size
              });
            } else {
              ul.css({
                'height': liHeight * 4
              });
            }

            if (ulHeight > selectbox.height()) {
              ul.css('overflowY', 'scroll');
              preventScrolling(ul); // прокручиваем до выбранного пункта

              if (li.filter('.selected').length) {
                ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top);
              }
            } // прячем оригинальный селект


            el.prependTo(selectbox); // если селект неактивный

            if (el.is(':disabled')) {
              selectbox.addClass('disabled');
              option.each(function () {
                if ($(this).is(':selected')) li.eq($(this).index()).addClass('selected');
              }); // если селект активный
            } else {
              // при клике на пункт списка
              li.filter(':not(.disabled):not(.optgroup)').click(function (e) {
                el.focus();
                var clkd = $(this);
                if (!e.ctrlKey && !e.metaKey) clkd.addClass('selected');
                if (!e.shiftKey) clkd.addClass('first');
                if (!e.ctrlKey && !e.metaKey && !e.shiftKey) clkd.siblings().removeClass('selected first'); // выделение пунктов при зажатом Ctrl

                if (e.ctrlKey || e.metaKey) {
                  if (clkd.is('.selected')) clkd.removeClass('selected first');else clkd.addClass('selected first');
                  clkd.siblings().removeClass('first');
                } // выделение пунктов при зажатом Shift


                if (e.shiftKey) {
                  var prev = false,
                      next = false;
                  clkd.siblings().removeClass('selected').siblings('.first').addClass('selected');
                  clkd.prevAll().each(function () {
                    if ($(this).is('.first')) prev = true;
                  });
                  clkd.nextAll().each(function () {
                    if ($(this).is('.first')) next = true;
                  });

                  if (prev) {
                    clkd.prevAll().each(function () {
                      if ($(this).is('.selected')) return false;else $(this).not('.disabled, .optgroup').addClass('selected');
                    });
                  }

                  if (next) {
                    clkd.nextAll().each(function () {
                      if ($(this).is('.selected')) return false;else $(this).not('.disabled, .optgroup').addClass('selected');
                    });
                  }

                  if (li.filter('.selected').length == 1) clkd.addClass('first');
                } // отмечаем выбранные мышью


                option.prop('selected', false);
                li.filter('.selected').each(function () {
                  var t = $(this);
                  var index = t.index();
                  if (t.is('.option')) index -= t.prevAll('.optgroup').length;
                  option.eq(index).prop('selected', true);
                });
                el.change();
              }); // отмечаем выбранные с клавиатуры

              option.each(function (i) {
                $(this).data('optionIndex', i);
              });
              el.on('change.styler', function () {
                li.removeClass('selected');
                var arrIndexes = [];
                option.filter(':selected').each(function () {
                  arrIndexes.push($(this).data('optionIndex'));
                });
                li.not('.optgroup').filter(function (i) {
                  return $.inArray(i, arrIndexes) > -1;
                }).addClass('selected');
              }).on('focus.styler', function () {
                selectbox.addClass('focused');
              }).on('blur.styler', function () {
                selectbox.removeClass('focused');
              }); // прокручиваем с клавиатуры

              if (ulHeight > selectbox.height()) {
                el.on('keydown.styler', function (e) {
                  // вверх, влево, PageUp
                  if (e.which == 38 || e.which == 37 || e.which == 33) {
                    ul.scrollTop(ul.scrollTop() + li.filter('.selected').position().top - liHeight);
                  } // вниз, вправо, PageDown


                  if (e.which == 40 || e.which == 39 || e.which == 34) {
                    ul.scrollTop(ul.scrollTop() + li.filter('.selected:last').position().top - ul.innerHeight() + liHeight * 2);
                  }
                });
              }
            }
          } // end doMultipleSelect()


          if (el.is('[multiple]')) {
            // если Android или iOS, то мультиселект не стилизуем
            // причина для Android - в стилизованном селекте нет возможности выбрать несколько пунктов
            // причина для iOS - в стилизованном селекте неправильно отображаются выбранные пункты
            if (Android || iOS) return;
            doMultipleSelect();
          } else {
            doSelect();
          }
        }; // end selectboxOutput()


        selectboxOutput(); // обновление при динамическом изменении

        el.on('refresh', function () {
          el.off('.styler').parent().before(el).remove();
          selectboxOutput();
        }); // end select
        // reset
      } else if (el.is(':reset')) {
        el.on('click', function () {
          setTimeout(function () {
            el.closest('form').find('input, select').trigger('refresh');
          }, 1);
        });
      } // end reset

    },
    // init: function()
    // деструктор
    destroy: function destroy() {
      var el = $(this.element);

      if (el.is(':checkbox') || el.is(':radio')) {
        el.removeData('_' + pluginName).off('.styler refresh').removeAttr('style').parent().before(el).remove();
        el.closest('label').add('label[for="' + el.attr('id') + '"]').off('.styler');
      } else if (el.is('input[type="number"]')) {
        el.removeData('_' + pluginName).off('.styler refresh').closest('.jq-number').before(el).remove();
      } else if (el.is(':file') || el.is('select')) {
        el.removeData('_' + pluginName).off('.styler refresh').removeAttr('style').parent().before(el).remove();
      }
    } // destroy: function()

  }; // Plugin.prototype

  $.fn[pluginName] = function (options) {
    var args = arguments;

    if (options === undefined || _typeof(options) === 'object') {
      this.each(function () {
        if (!$.data(this, '_' + pluginName)) {
          $.data(this, '_' + pluginName, new Plugin(this, options));
        }
      }) // колбек после выполнения плагина
      .promise().done(function () {
        var opt = $(this[0]).data('_' + pluginName);
        if (opt) opt.options.onFormStyled.call();
      });
      return this;
    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      var returns;
      this.each(function () {
        var instance = $.data(this, '_' + pluginName);

        if (instance instanceof Plugin && typeof instance[options] === 'function') {
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
      });
      return returns !== undefined ? returns : this;
    }
  }; // прячем выпадающий список при клике за пределами селекта


  function onDocumentClick(e) {
    // e.target.nodeName != 'OPTION' - добавлено для обхода бага в Opera на движке Presto
    // (при изменении селекта с клавиатуры срабатывает событие onclick)
    if (!$(e.target).parents().hasClass('jq-selectbox') && e.target.nodeName != 'OPTION') {
      if ($('div.jq-selectbox.opened').length) {
        var selectbox = $('div.jq-selectbox.opened'),
            search = $('div.jq-selectbox__search input', selectbox),
            dropdown = $('div.jq-selectbox__dropdown', selectbox),
            opt = selectbox.find('select').data('_' + pluginName).options; // колбек при закрытии селекта

        opt.onSelectClosed.call(selectbox);
        if (search.length) search.val('').keyup();
        dropdown.hide().find('li.sel').addClass('selected');
        selectbox.removeClass('focused opened dropup dropdown');
      }
    }
  }

  onDocumentClick.registered = false;
});

$(function () {
  $("select").styler();
});
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
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_slide_home_slide_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/slide-home/slide-home */ "./src/blocks/modules/slide-home/slide-home.js");
/* harmony import */ var _modules_slide_home_slide_home__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_slide_home_slide_home__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_partners_partners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/partners/partners */ "./src/blocks/modules/partners/partners.js");
/* harmony import */ var _modules_partners_partners__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_partners_partners__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_history_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/history/history */ "./src/blocks/modules/history/history.js");
/* harmony import */ var _modules_history_history__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_history_history__WEBPACK_IMPORTED_MODULE_4__);






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
/* harmony import */ var _import_formstyler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/formstyler */ "./src/js/import/formstyler.js");
/* harmony import */ var _import_formstyler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_formstyler__WEBPACK_IMPORTED_MODULE_1__);



__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");

__webpack_require__(/*! mmenu-js */ "./node_modules/mmenu-js/src/mmenu.js");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map