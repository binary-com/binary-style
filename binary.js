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


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hide_menu = hide_menu;
exports.show_menu = show_menu;
exports.navMenuListener = navMenuListener;
exports.topNavMenuListener = topNavMenuListener;
exports.documentListener = documentListener;
exports.langListener = langListener;
exports.initMenuContent = initMenuContent;
exports.tabListener = tabListener;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2M2UyZmU3NjNkN2NhNzVhNjQwMiIsIndlYnBhY2s6Ly8vLi9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9fc2Fzcy9hbGwuc2NzcyJdLCJuYW1lcyI6WyJoaWRlX21lbnUiLCJzaG93X21lbnUiLCJuYXZNZW51TGlzdGVuZXIiLCJ0b3BOYXZNZW51TGlzdGVuZXIiLCJkb2N1bWVudExpc3RlbmVyIiwibGFuZ0xpc3RlbmVyIiwiaW5pdE1lbnVDb250ZW50IiwidGFiTGlzdGVuZXIiLCIkZWxlbWVudCIsImFuaW1hdGUiLCJjc3MiLCIkIiwib24iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIiRlbCIsImNoaWxkTWVudSIsImZpbmQiLCJ0YXJnZXQiLCJoYXNDbGFzcyIsImRvY3VtZW50IiwiX21lbnVfY29udGFpbmVycyIsImxpc3RlbmVyc19ldmVudHMiLCJmaWx0ZXIiLCJkZWxlZ2F0ZSIsInByZXZlbnREZWZhdWx0IiwidGFiX2lkIiwicGFyZW50cyIsImF0dHIiLCJ0YWJfY29udGFpbmVyIiwic2VsZWN0ZWRfdGFiIiwicmVtb3ZlQ2xhc3MiLCJlbmQiLCJ1bndyYXAiLCJhZGRDbGFzcyIsIndyYXAiLCJzaWJsaW5ncyIsInNwYW5fdG1fYSIsInJlcGxhY2VXaXRoIiwiaHRtbCIsIm1lbnVfbGkiLCJzdWJfbWVudV9zZWxlY3RlZCIsInNlbGVjdGVkX3RhYl9pZCIsImxlbmd0aCIsInNlbGVjdGVkX2NvbnRlbnQiLCJwdXNoX3RvX2xpc3RlbmVycyIsImluZm8iLCJpIiwiaG92ZXIiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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akI7QUFDSCxLQUhMLEVBSUksWUFBWTtBQUNSdkIsVUFBRSxJQUFGLEVBQVFvQixXQUFSLENBQW9CLE9BQXBCO0FBQ0gsS0FOTDtBQVFBekIsb0JBQWdCSyxFQUFFLHdCQUFGLEVBQTRCTSxJQUE1QixDQUFpQyxRQUFqQyxDQUFoQjtBQUNIOztBQUVETixFQUFFUyxRQUFGLEVBQVk2QixLQUFaLENBQWtCLFlBQVc7QUFDekIvQztBQUNBQztBQUNBQztBQUNBQztBQUNBRTtBQUNILENBTkQsRTs7Ozs7O0FDaktBLHlDIiwiZmlsZSI6ImJpbmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjNlMmZlNzYzZDdjYTc1YTY0MDIiLCJpbXBvcnQgJy4uL19zYXNzL2FsbC5zY3NzJztcbi8qXG4gKiBqcyBjb2RlIGZvciBEcm9wLURvd24gTWVudVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlX21lbnUoJGVsZW1lbnQpIHtcbiAgICAkZWxlbWVudC5hbmltYXRlKHsnb3BhY2l0eSc6IDB9LCAxMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAkZWxlbWVudC5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJylcbiAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd19tZW51KCRlbGVtZW50KSB7XG4gICAgJGVsZW1lbnQuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgICAuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJylcbiAgICAgICAgLmFuaW1hdGUoeydvcGFjaXR5JzogMX0sIDEwMCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuYXZNZW51TGlzdGVuZXIoKSB7XG4gICAgJCgnLm5hdi1tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGhpZGVfbWVudSgkKCcudG9wLW5hdi1tZW51IGxpIHVsJykpO1xuICAgICAgICBoaWRlX21lbnUoJCgnI2xhbmd1YWdlX3NlbGVjdCwgI3NlbGVjdF9sYW5ndWFnZScpKTtcbiAgICAgICAgdmFyICRlbCA9ICQoJyNhbGwtYWNjb3VudHMsICNhbGwtYWNjb3VudHMtdG9wJyk7XG4gICAgICAgIGlmICgkZWwuY3NzKCdvcGFjaXR5JykgPT0gMSApIHtcbiAgICAgICAgICAgIGhpZGVfbWVudSgkZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd19tZW51KCRlbCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcE5hdk1lbnVMaXN0ZW5lcigpIHtcbiAgICAkKCcudG9wLW5hdi1tZW51ID4gbGknKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaGlkZV9tZW51KCQoJyNhbGwtYWNjb3VudHMsICNhbGwtYWNjb3VudHMtdG9wJykpO1xuICAgICAgICBoaWRlX21lbnUoJCgnI2xhbmd1YWdlX3NlbGVjdCwgI3NlbGVjdF9sYW5ndWFnZScpKTtcbiAgICAgICAgdmFyIGNoaWxkTWVudSA9ICQodGhpcykuZmluZCgnID4gdWwnKSxcbiAgICAgICAgICAgICRlbCA9ICQoJy50b3AtbmF2LW1lbnUgbGkgdWwnKTtcbiAgICAgICAgaWYgKGNoaWxkTWVudS5jc3MoJ29wYWNpdHknKSA9PSAxICYmICQoZXZlbnQudGFyZ2V0KS5maW5kKCdzcGFuJykuaGFzQ2xhc3MoJ25hdi1jYXJldCcpKSB7XG4gICAgICAgICAgICBoaWRlX21lbnUoJGVsKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZE1lbnUuY3NzKCdvcGFjaXR5JykgPT0gMCAmJiAkKGV2ZW50LnRhcmdldCkuZmluZCgnc3BhbicpLmhhc0NsYXNzKCduYXYtY2FyZXQnKSkge1xuICAgICAgICAgICAgJGVsLmFuaW1hdGUoeydvcGFjaXR5JzogMH0sIDEwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJGVsLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBzaG93X21lbnUoY2hpbGRNZW51KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkb2N1bWVudExpc3RlbmVyKCkge1xuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGhpZGVfbWVudSgkKCcjYWxsLWFjY291bnRzLCAjYWxsLWFjY291bnRzLXRvcCcpKTtcbiAgICAgICAgaGlkZV9tZW51KCQoJy50b3AtbmF2LW1lbnUgbGkgdWwnKSk7XG4gICAgICAgIGhpZGVfbWVudSgkKCcjbGFuZ3VhZ2Vfc2VsZWN0LCAjc2VsZWN0X2xhbmd1YWdlJykpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFuZ0xpc3RlbmVyKCkge1xuICAgICQoJy5sYW5ndWFnZXMnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaGlkZV9tZW51KCQoJy50b3AtbmF2LW1lbnUgbGkgdWwnKSk7XG4gICAgICAgIGhpZGVfbWVudSgkKCcjYWxsLWFjY291bnRzLCAjYWxsLWFjY291bnRzLXRvcCcpKTtcbiAgICAgICAgdmFyICRlbCA9ICQoJyNsYW5ndWFnZV9zZWxlY3QsICNzZWxlY3RfbGFuZ3VhZ2UnKTtcbiAgICAgICAgaWYgKCRlbC5jc3MoJ29wYWNpdHknKSA9PSAxICkge1xuICAgICAgICAgICAgaGlkZV9tZW51KCRlbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaG93X21lbnUoJGVsKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1lbnVDb250ZW50KF9tZW51X2NvbnRhaW5lcnMpIHtcbiAgICB2YXIgbGlzdGVuZXJzX2V2ZW50cyA9IFtdO1xuICAgIF9tZW51X2NvbnRhaW5lcnMuZmlsdGVyKCc6bm90KC5mb2xsb3ctZGVmYXVsdCknKS5kZWxlZ2F0ZSgnLnRtLWEsLnRtLWEtMicsICdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIHZhciB0YWJfaWQgPSB0YXJnZXQucGFyZW50cygnbGk6Zmlyc3QnKS5hdHRyKCdpZCcpO1xuXG4gICAgICAgIGlmICh0YWJfaWQpIHtcbiAgICAgICAgICAgIHZhciB0YWJfY29udGFpbmVyID0gdGFyZ2V0LnBhcmVudHMoJy50bS11bCcpO1xuXG4gICAgICAgICAgICB2YXIgc2VsZWN0ZWRfdGFiID1cbiAgICAgICAgICAgICAgICAvLyBmaW5kIHByZXZpb3VzbHkgYWN0aXZlIHRhYlxuICAgICAgICAgICAgICAgIHRhYl9jb250YWluZXIuZmluZCgnLnRtLWEsLnRtLWEtMicpXG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHByZXZpb3VzbHkgYWN0aXZlIHRhYlxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2EtYWN0aXZlJykuZW5kKClcbiAgICAgICAgICAgICAgICAvLyB1bndyYXAgcHJldmlvdXNseSBhY3RpdmUgdGFiXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcubWVudS13cmFwLWEgLnRtLWEnKS51bndyYXAoKS51bndyYXAoKVxuICAgICAgICAgICAgICAgIC8vIGdvIGJhY2sgdG8gc2VsZWN0ZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKS5lbmQoKVxuICAgICAgICAgICAgICAgIC8vIHNldCBhY3RpdmUgY2xhc3MgdG8gaXRcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldCBhY3RpdmUgY2xhc3MgdG8gaXRzIHBhcmVudCBhcyB3ZWxsXG4gICAgICAgICAgICAgICAgICAgIC5wYXJlbnRzKCcudG0tbGknKS5hZGRDbGFzcygnYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2hvdmVyJykuZmluZCgnLnRtLWxpLTInKS5hZGRDbGFzcygnYWN0aXZlJykuZW5kKClcbiAgICAgICAgICAgICAgICAvLyB3cmFwIGl0XG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCcudG0tYScpLndyYXAoJzxzcGFuIGNsYXNzPVwibWVudS13cmFwLWFcIj48c3BhbiBjbGFzcz1cIm1lbnUtd3JhcC1iXCI+PC9zcGFuPjwvc3Bhbj4nKS5lbmQoKVxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBwcmV2aW91c2x5IGFjdGl2ZSBwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmZpbmQoJy50bS1saS0yJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLmVuZCgpXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKS5lbmQoKTtcblxuICAgICAgICAgICAgLy8gcmVwbGFjZSBzcGFuIHRvIGEsIHRvIG1ha2UgaXQgY2xpY2thYmxlIGZvciByZWFsXG4gICAgICAgICAgICB2YXIgc3Bhbl90bV9hID0gdGFiX2NvbnRhaW5lci5maW5kKCdzcGFuLnRtLWEnKTtcbiAgICAgICAgICAgIHNwYW5fdG1fYS5yZXBsYWNlV2l0aCgnPGEgaHJlZj1cIiNcIiBjbGFzcz1cIicgKyBzcGFuX3RtX2EuYXR0cignY2xhc3MnKSArICdcIj4nICsgc3Bhbl90bV9hLmh0bWwoKSArICc8L2E+Jyk7XG5cbiAgICAgICAgICAgIHZhciBtZW51X2xpID0gc2VsZWN0ZWRfdGFiLnBhcmVudHMoJ2xpJyk7XG4gICAgICAgICAgICB2YXIgc3ViX21lbnVfc2VsZWN0ZWQgPSBtZW51X2xpLmZpbmQoJy50bS11bC0yIC5hLWFjdGl2ZScpO1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkX3RhYl9pZCA9IG1lbnVfbGkuYXR0cignaWQnKTtcblxuICAgICAgICAgICAgaWYgKCFzdWJfbWVudV9zZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzdWJfbWVudV9zZWxlY3RlZCA9IG1lbnVfbGkuZmluZCgnLnRtLWEtMjpmaXJzdCcpLmFkZENsYXNzKCdhLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN1Yl9tZW51X3NlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZF90YWIgPSBzdWJfbWVudV9zZWxlY3RlZDtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGFiX2lkID0gc3ViX21lbnVfc2VsZWN0ZWQucGFyZW50cygnbGknKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZF9jb250ZW50ID0gJCgnIycgKyBzZWxlY3RlZF90YWJfaWQgKyAnLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGFiX2lkID0gbWVudV9saS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkX2NvbnRlbnQgPSAkKCcjJyArIHNlbGVjdGVkX3RhYl9pZCArICctY29udGVudCcpXG4gICAgICAgICAgICAvLyBzaG93IHNlbGVjdGVkIHRhYiBjb250ZW50XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKVxuICAgICAgICAgICAgICAgIC8vIGFuZCBoaWRlIHRoZSByZXN0XG4gICAgICAgICAgICAgICAgLnNpYmxpbmdzKCc6bm90KC5zdGlja3kpJykuYWRkQ2xhc3MoJ2ludmlzaWJsZScpLmVuZCgpO1xuXG4gICAgICAgICAgICBwdXNoX3RvX2xpc3RlbmVycyh7XG4gICAgICAgICAgICAgICAgJ2lkJzogc2VsZWN0ZWRfdGFiX2lkLFxuICAgICAgICAgICAgICAgICd0YXJnZXQnOiBzZWxlY3RlZF90YWIsXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQnOiBzZWxlY3RlZF9jb250ZW50LFxuICAgICAgICAgICAgICAgICdtZW51JzogbWVudV9saS5wYXJlbnRzKCd1bC50bS11bCcpLFxuICAgICAgICAgICAgICAgICdldmVudCc6IGV2ZW50XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gcHVzaF90b19saXN0ZW5lcnMoaW5mbykge1xuICAgICAgICAvLyBwdXNoIHRvIGxpc3RlbmVycyBldmVudHNcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPGxpc3RlbmVyc19ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc19ldmVudHNbaV0oaW5mbyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qXG4gKiBqcyBjb2RlIGZvciB0YWJzIHdpdGggc3Vic2VjdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhYkxpc3RlbmVyKCkge1xuICAgICQoJy50bS11bCA+IGxpJykuaG92ZXIoXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hvdmVyJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2hvdmVyJyk7XG4gICAgICAgIH1cbiAgICApO1xuICAgIGluaXRNZW51Q29udGVudCgkKCcuY29udGVudC10YWItY29udGFpbmVyJykuZmluZCgnLnRtLXVsJykpO1xufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBuYXZNZW51TGlzdGVuZXIoKTtcbiAgICB0b3BOYXZNZW51TGlzdGVuZXIoKTtcbiAgICBkb2N1bWVudExpc3RlbmVyKCk7XG4gICAgbGFuZ0xpc3RlbmVyKCk7XG4gICAgdGFiTGlzdGVuZXIoKTtcbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9qcy9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9fc2Fzcy9hbGwuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9