(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

/*
 * js code for Drop-Down Menu
 */

function hide_menu($element) {
    $element.animate({ 'opacity': 0 }, 100, function () {
        $element.css('visibility', 'hidden').css('display', 'none');
    });
}

function show_menu($element) {
    $element.css('visibility', 'visible').css('display', 'block').animate({ 'opacity': 1 }, 100);
}

function navMenuListener() {
    $('.nav-menu').on('click', function (event) {
        event.stopPropagation();
        hide_menu($('.top-nav-menu li ul'));
        hide_menu($('#language_select, #select_language'));
        var $el = $('#all-accounts, #all-accounts-top');
        if ($el.css('opacity') == 1) {
            hide_menu($el);
        } else {
            show_menu($el);
        }
    });
}

function topNavMenuListener() {
    $('.top-nav-menu > li').on('click', function (event) {
        event.stopPropagation();
        hide_menu($('#all-accounts, #all-accounts-top'));
        hide_menu($('#language_select, #select_language'));
        var childMenu = $(this).find(' > ul'),
            $el = $('.top-nav-menu li ul');
        if (childMenu.css('opacity') == 1 && $(event.target).find('span').hasClass('nav-caret')) {
            hide_menu($el);
        } else if (childMenu.css('opacity') == 0 && $(event.target).find('span').hasClass('nav-caret')) {
            $el.animate({ 'opacity': 0 }, 100, function () {
                $el.css('visibility', 'hidden');
                show_menu(childMenu);
            });
        }
    });
}

function documentListener() {
    $(document).on('click', function () {
        hide_menu($('#all-accounts, #all-accounts-top'));
        hide_menu($('.top-nav-menu li ul'));
        hide_menu($('#language_select, #select_language'));
    });
}

function langListener() {
    $('.languages').on('click', function (event) {
        event.stopPropagation();
        hide_menu($('.top-nav-menu li ul'));
        hide_menu($('#all-accounts, #all-accounts-top'));
        var $el = $('#language_select, #select_language');
        if ($el.css('opacity') == 1) {
            hide_menu($el);
        } else {
            show_menu($el);
        }
    });
}

function initMenuContent(_menu_containers) {
    var listeners_events = [];
    _menu_containers.filter(':not(.follow-default)').delegate('.tm-a,.tm-a-2', 'click', function (event) {
        event.preventDefault();

        var target = $(event.target);
        var tab_id = target.parents('li:first').attr('id');

        if (tab_id) {
            var tab_container = target.parents('.tm-ul');

            var selected_tab =
            // find previously active tab
            tab_container.find('.tm-a,.tm-a-2')
            // remove previously active tab
            .removeClass('a-active').end()
            // unwrap previously active tab
            .find('.menu-wrap-a .tm-a').unwrap().unwrap()
            // go back to selected target
            .end().end()
            // set active class to it
            .addClass('a-active')
            // set active class to its parent as well
            .parents('.tm-li').addClass('active').removeClass('hover').find('.tm-li-2').addClass('active').end()
            // wrap it
            .find('.tm-a').wrap('<span class="menu-wrap-a"><span class="menu-wrap-b"></span></span>').end()
            // remove previously active parent
            .siblings().removeClass('active').find('.tm-li-2').removeClass('active').end().end().end();

            // replace span to a, to make it clickable for real
            var span_tm_a = tab_container.find('span.tm-a');
            span_tm_a.replaceWith('<a href="#" class="' + span_tm_a.attr('class') + '">' + span_tm_a.html() + '</a>');

            var menu_li = selected_tab.parents('li');
            var sub_menu_selected = menu_li.find('.tm-ul-2 .a-active');
            var selected_tab_id = menu_li.attr('id');

            if (!sub_menu_selected.length) {
                sub_menu_selected = menu_li.find('.tm-a-2:first').addClass('a-active');

                if (sub_menu_selected.length) {
                    selected_tab = sub_menu_selected;
                    selected_tab_id = sub_menu_selected.parents('li').attr('id');
                    selected_content = $('#' + selected_tab_id + '-content').removeClass('invisible');
                } else {
                    selected_tab_id = menu_li.attr('id');
                }
            }

            var selected_content = $('#' + selected_tab_id + '-content')
            // show selected tab content
            .removeClass('invisible')
            // and hide the rest
            .siblings(':not(.sticky)').addClass('invisible').end();

            push_to_listeners({
                'id': selected_tab_id,
                'target': selected_tab,
                'content': selected_content,
                'menu': menu_li.parents('ul.tm-ul'),
                'event': event
            });
        }
        return false;
    });
    function push_to_listeners(info) {
        // push to listeners events
        for (var i = 0; i < listeners_events.length; i++) {
            listeners_events[i](info);
        }
    }
}

/*
 * js code for tabs with subsections
 */
function tabListener() {
    $('.tm-ul > li').hover(function () {
        $(this).addClass('hover');
    }, function () {
        $(this).removeClass('hover');
    });
    initMenuContent($('.content-tab-container').find('.tm-ul'));
}

$(document).ready(function () {
    navMenuListener();
    topNavMenuListener();
    documentListener();
    langListener();
    tabListener();
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZmRhZjdhMGIyNjZiNTY0M2QwMSIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5pc29sYXRlZC5qcyIsIndlYnBhY2s6Ly8vLi9fc2Fzcy9hbGwuaXNvbGF0ZWQuc2NzcyJdLCJuYW1lcyI6WyJoaWRlX21lbnUiLCIkZWxlbWVudCIsImFuaW1hdGUiLCJjc3MiLCJzaG93X21lbnUiLCJuYXZNZW51TGlzdGVuZXIiLCIkIiwib24iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIiRlbCIsInRvcE5hdk1lbnVMaXN0ZW5lciIsImNoaWxkTWVudSIsImZpbmQiLCJ0YXJnZXQiLCJoYXNDbGFzcyIsImRvY3VtZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImxhbmdMaXN0ZW5lciIsImluaXRNZW51Q29udGVudCIsIl9tZW51X2NvbnRhaW5lcnMiLCJsaXN0ZW5lcnNfZXZlbnRzIiwiZmlsdGVyIiwiZGVsZWdhdGUiLCJwcmV2ZW50RGVmYXVsdCIsInRhYl9pZCIsInBhcmVudHMiLCJhdHRyIiwidGFiX2NvbnRhaW5lciIsInNlbGVjdGVkX3RhYiIsInJlbW92ZUNsYXNzIiwiZW5kIiwidW53cmFwIiwiYWRkQ2xhc3MiLCJ3cmFwIiwic2libGluZ3MiLCJzcGFuX3RtX2EiLCJyZXBsYWNlV2l0aCIsImh0bWwiLCJtZW51X2xpIiwic3ViX21lbnVfc2VsZWN0ZWQiLCJzZWxlY3RlZF90YWJfaWQiLCJsZW5ndGgiLCJzZWxlY3RlZF9jb250ZW50IiwicHVzaF90b19saXN0ZW5lcnMiLCJpbmZvIiwiaSIsInRhYkxpc3RlbmVyIiwiaG92ZXIiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FB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QyxRQUFqQyxDQUFoQjtBQUNIOztBQUVEUCxFQUFFVyxRQUFGLEVBQVlnQyxLQUFaLENBQWtCLFlBQVc7QUFDekI1QztBQUNBTTtBQUNBSztBQUNBRTtBQUNBNkI7QUFDSCxDQU5ELEU7Ozs7OztBQ2pLQSx5QyIsImZpbGUiOiJiaW5hcnkuaXNvbGF0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNmZGFmN2EwYjI2NmI1NjQzZDAxIiwiaW1wb3J0ICcuLi9fc2Fzcy9hbGwuaXNvbGF0ZWQuc2Nzcyc7XG4vKlxuICoganMgY29kZSBmb3IgRHJvcC1Eb3duIE1lbnVcbiAqL1xuXG5mdW5jdGlvbiBoaWRlX21lbnUoJGVsZW1lbnQpIHtcbiAgICAkZWxlbWVudC5hbmltYXRlKHsnb3BhY2l0eSc6IDB9LCAxMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkZWxlbWVudC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93X21lbnUoJGVsZW1lbnQpIHtcbiAgICAkZWxlbWVudC5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICAgIC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKVxuICAgICAgICAuYW5pbWF0ZSh7J29wYWNpdHknOiAxfSwgMTAwKTtcbn1cblxuZnVuY3Rpb24gbmF2TWVudUxpc3RlbmVyKCkge1xuICAgICQoJy5uYXYtbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBoaWRlX21lbnUoJCgnLnRvcC1uYXYtbWVudSBsaSB1bCcpKTtcbiAgICAgICAgaGlkZV9tZW51KCQoJyNsYW5ndWFnZV9zZWxlY3QsICNzZWxlY3RfbGFuZ3VhZ2UnKSk7XG4gICAgICAgIHZhciAkZWwgPSAkKCcjYWxsLWFjY291bnRzLCAjYWxsLWFjY291bnRzLXRvcCcpO1xuICAgICAgICBpZiAoJGVsLmNzcygnb3BhY2l0eScpID09IDEgKSB7XG4gICAgICAgICAgICBoaWRlX21lbnUoJGVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dfbWVudSgkZWwpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvcE5hdk1lbnVMaXN0ZW5lcigpIHtcbiAgICAkKCcudG9wLW5hdi1tZW51ID4gbGknKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaGlkZV9tZW51KCQoJyNhbGwtYWNjb3VudHMsICNhbGwtYWNjb3VudHMtdG9wJykpO1xuICAgICAgICBoaWRlX21lbnUoJCgnI2xhbmd1YWdlX3NlbGVjdCwgI3NlbGVjdF9sYW5ndWFnZScpKTtcbiAgICAgICAgdmFyIGNoaWxkTWVudSA9ICQodGhpcykuZmluZCgnID4gdWwnKSxcbiAgICAgICAgICAgICRlbCA9ICQoJy50b3AtbmF2LW1lbnUgbGkgdWwnKTtcbiAgICAgICAgaWYgKGNoaWxkTWVudS5jc3MoJ29wYWNpdHknKSA9PSAxICYmICQoZXZlbnQudGFyZ2V0KS5maW5kKCdzcGFuJykuaGFzQ2xhc3MoJ25hdi1jYXJldCcpKSB7XG4gICAgICAgICAgICBoaWRlX21lbnUoJGVsKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZE1lbnUuY3NzKCdvcGFjaXR5JykgPT0gMCAmJiAkKGV2ZW50LnRhcmdldCkuZmluZCgnc3BhbicpLmhhc0NsYXNzKCduYXYtY2FyZXQnKSkge1xuICAgICAgICAgICAgJGVsLmFuaW1hdGUoeydvcGFjaXR5JzogMH0sIDEwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJGVsLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBzaG93X21lbnUoY2hpbGRNZW51KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRvY3VtZW50TGlzdGVuZXIoKSB7XG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaGlkZV9tZW51KCQoJyNhbGwtYWNjb3VudHMsICNhbGwtYWNjb3VudHMtdG9wJykpO1xuICAgICAgICBoaWRlX21lbnUoJCgnLnRvcC1uYXYtbWVudSBsaSB1bCcpKTtcbiAgICAgICAgaGlkZV9tZW51KCQoJyNsYW5ndWFnZV9zZWxlY3QsICNzZWxlY3RfbGFuZ3VhZ2UnKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGxhbmdMaXN0ZW5lcigpIHtcbiAgICAkKCcubGFuZ3VhZ2VzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGhpZGVfbWVudSgkKCcudG9wLW5hdi1tZW51IGxpIHVsJykpO1xuICAgICAgICBoaWRlX21lbnUoJCgnI2FsbC1hY2NvdW50cywgI2FsbC1hY2NvdW50cy10b3AnKSk7XG4gICAgICAgIHZhciAkZWwgPSAkKCcjbGFuZ3VhZ2Vfc2VsZWN0LCAjc2VsZWN0X2xhbmd1YWdlJyk7XG4gICAgICAgIGlmICgkZWwuY3NzKCdvcGFjaXR5JykgPT0gMSApIHtcbiAgICAgICAgICAgIGhpZGVfbWVudSgkZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd19tZW51KCRlbCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdE1lbnVDb250ZW50KF9tZW51X2NvbnRhaW5lcnMpIHtcbiAgICB2YXIgbGlzdGVuZXJzX2V2ZW50cyA9IFtdO1xuICAgIF9tZW51X2NvbnRhaW5lcnMuZmlsdGVyKCc6bm90KC5mb2xsb3ctZGVmYXVsdCknKS5kZWxlZ2F0ZSgnLnRtLWEsLnRtLWEtMicsICdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIHZhciB0YWJfaWQgPSB0YXJnZXQucGFyZW50cygnbGk6Zmlyc3QnKS5hdHRyKCdpZCcpO1xuXG4gICAgICAgIGlmICh0YWJfaWQpIHtcbiAgICAgICAgICAgIHZhciB0YWJfY29udGFpbmVyID0gdGFyZ2V0LnBhcmVudHMoJy50bS11bCcpO1xuXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRfdGFiID1cbiAgICAgICAgICAgICAgICAvLyBmaW5kIHByZXZpb3VzbHkgYWN0aXZlIHRhYlxuICAgICAgICAgICAgICAgIHRhYl9jb250YWluZXIuZmluZCgnLnRtLWEsLnRtLWEtMicpXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHByZXZpb3VzbHkgYWN0aXZlIHRhYlxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2EtYWN0aXZlJykuZW5kKClcbiAgICAgICAgICAgICAgICAvLyB1bndyYXAgcHJldmlvdXNseSBhY3RpdmUgdGFiXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcubWVudS13cmFwLWEgLnRtLWEnKS51bndyYXAoKS51bndyYXAoKVxuICAgICAgICAgICAgICAgIC8vIGdvIGJhY2sgdG8gc2VsZWN0ZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKS5lbmQoKVxuICAgICAgICAgICAgICAgIC8vIHNldCBhY3RpdmUgY2xhc3MgdG8gaXRcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBhY3RpdmUgY2xhc3MgdG8gaXRzIHBhcmVudCBhcyB3ZWxsXG4gICAgICAgICAgICAgICAgICAgIC5wYXJlbnRzKCcudG0tbGknKS5hZGRDbGFzcygnYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2hvdmVyJykuZmluZCgnLnRtLWxpLTInKS5hZGRDbGFzcygnYWN0aXZlJykuZW5kKClcbiAgICAgICAgICAgICAgICAvLyB3cmFwIGl0XG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcudG0tYScpLndyYXAoJzxzcGFuIGNsYXNzPVwibWVudS13cmFwLWFcIj48c3BhbiBjbGFzcz1cIm1lbnUtd3JhcC1iXCI+PC9zcGFuPjwvc3Bhbj4nKS5lbmQoKVxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBwcmV2aW91c2x5IGFjdGl2ZSBwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmZpbmQoJy50bS1saS0yJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmVuZCgpXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKS5lbmQoKTtcblxuICAgICAgICAgICAgLy8gcmVwbGFjZSBzcGFuIHRvIGEsIHRvIG1ha2UgaXQgY2xpY2thYmxlIGZvciByZWFsXG4gICAgICAgICAgICB2YXIgc3Bhbl90bV9hID0gdGFiX2NvbnRhaW5lci5maW5kKCdzcGFuLnRtLWEnKTtcbiAgICAgICAgICAgIHNwYW5fdG1fYS5yZXBsYWNlV2l0aCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cIicgKyBzcGFuX3RtX2EuYXR0cignY2xhc3MnKSArICdcIj4nICsgc3Bhbl90bV9hLmh0bWwoKSArICc8L2E+Jyk7XG5cbiAgICAgICAgICAgIHZhciBtZW51X2xpID0gc2VsZWN0ZWRfdGFiLnBhcmVudHMoJ2xpJyk7XG4gICAgICAgICAgICB2YXIgc3ViX21lbnVfc2VsZWN0ZWQgPSBtZW51X2xpLmZpbmQoJy50bS11bC0yIC5hLWFjdGl2ZScpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkX3RhYl9pZCA9IG1lbnVfbGkuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgaWYgKCFzdWJfbWVudV9zZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzdWJfbWVudV9zZWxlY3RlZCA9IG1lbnVfbGkuZmluZCgnLnRtLWEtMjpmaXJzdCcpLmFkZENsYXNzKCdhLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN1Yl9tZW51X3NlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZF90YWIgPSBzdWJfbWVudV9zZWxlY3RlZDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGFiX2lkID0gc3ViX21lbnVfc2VsZWN0ZWQucGFyZW50cygnbGknKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZF9jb250ZW50ID0gJCgnIycgKyBzZWxlY3RlZF90YWJfaWQgKyAnLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGFiX2lkID0gbWVudV9saS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkX2NvbnRlbnQgPSAkKCcjJyArIHNlbGVjdGVkX3RhYl9pZCArICctY29udGVudCcpXG4gICAgICAgICAgICAvLyBzaG93IHNlbGVjdGVkIHRhYiBjb250ZW50XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKVxuICAgICAgICAgICAgICAgIC8vIGFuZCBoaWRlIHRoZSByZXN0XG4gICAgICAgICAgICAgICAgLnNpYmxpbmdzKCc6bm90KC5zdGlja3kpJykuYWRkQ2xhc3MoJ2ludmlzaWJsZScpLmVuZCgpO1xuXG4gICAgICAgICAgICBwdXNoX3RvX2xpc3RlbmVycyh7XG4gICAgICAgICAgICAgICAgJ2lkJzogc2VsZWN0ZWRfdGFiX2lkLFxuICAgICAgICAgICAgICAgICd0YXJnZXQnOiBzZWxlY3RlZF90YWIsXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQnOiBzZWxlY3RlZF9jb250ZW50LFxuICAgICAgICAgICAgICAgICdtZW51JzogbWVudV9saS5wYXJlbnRzKCd1bC50bS11bCcpLFxuICAgICAgICAgICAgICAgICdldmVudCc6IGV2ZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcHVzaF90b19saXN0ZW5lcnMoaW5mbykge1xuICAgICAgICAvLyBwdXNoIHRvIGxpc3RlbmVycyBldmVudHNcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGxpc3RlbmVyc19ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc19ldmVudHNbaV0oaW5mbyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qXG4gKiBqcyBjb2RlIGZvciB0YWJzIHdpdGggc3Vic2VjdGlvbnNcbiAqL1xuZnVuY3Rpb24gdGFiTGlzdGVuZXIoKSB7XG4gICAgJCgnLnRtLXVsID4gbGknKS5ob3ZlcihcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaG92ZXInKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnaG92ZXInKTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgaW5pdE1lbnVDb250ZW50KCQoJy5jb250ZW50LXRhYi1jb250YWluZXInKS5maW5kKCcudG0tdWwnKSk7XG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIG5hdk1lbnVMaXN0ZW5lcigpO1xuICAgIHRvcE5hdk1lbnVMaXN0ZW5lcigpO1xuICAgIGRvY3VtZW50TGlzdGVuZXIoKTtcbiAgICBsYW5nTGlzdGVuZXIoKTtcbiAgICB0YWJMaXN0ZW5lcigpO1xufSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2pzL2luZGV4Lmlzb2xhdGVkLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL19zYXNzL2FsbC5pc29sYXRlZC5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=