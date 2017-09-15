/******/ (function(modules) { // webpackBootstrap
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
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

/*! jQuery UI - v1.12.1 - 2017-05-12
 * http://jqueryui.com
 * Includes: widget.js, data.js, keycode.js, scroll-parent.js, unique-id.js,
 *   widgets/draggable.js, widgets/accordion.js, widgets/datepicker.js, widgets/mouse.js, widgets/tabs.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (factory) {
    if (true) {

        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(7)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {

        // Browser globals
        factory(jQuery);
    }
})(function ($) {

    $.ui = $.ui || {};

    var version = $.ui.version = "1.12.1";

    /*!
     * jQuery UI Widget 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Widget
    //>>group: Core
    //>>description: Provides a factory for creating stateful widgets with a common API.
    //>>docs: http://api.jqueryui.com/jQuery.widget/
    //>>demos: http://jqueryui.com/widget/


    var widgetUuid = 0;
    var widgetSlice = Array.prototype.slice;

    $.cleanData = function (orig) {
        return function (elems) {
            var events, elem, i;
            for (i = 0; (elem = elems[i]) != null; i++) {
                try {

                    // Only trigger remove when necessary to save time
                    events = $._data(elem, "events");
                    if (events && events.remove) {
                        $(elem).triggerHandler("remove");
                    }

                    // Http://bugs.jquery.com/ticket/8235
                } catch (e) {}
            }
            orig(elems);
        };
    }($.cleanData);

    $.widget = function (name, base, prototype) {
        var existingConstructor, constructor, basePrototype;

        // ProxiedPrototype allows the provided prototype to remain unmodified
        // so that it can be used as a mixin for multiple widgets (#8876)
        var proxiedPrototype = {};

        var namespace = name.split(".")[0];
        name = name.split(".")[1];
        var fullName = namespace + "-" + name;

        if (!prototype) {
            prototype = base;
            base = $.Widget;
        }

        if ($.isArray(prototype)) {
            prototype = $.extend.apply(null, [{}].concat(prototype));
        }

        // Create selector for plugin
        $.expr[":"][fullName.toLowerCase()] = function (elem) {
            return !!$.data(elem, fullName);
        };

        $[namespace] = $[namespace] || {};
        existingConstructor = $[namespace][name];
        constructor = $[namespace][name] = function (options, element) {

            // Allow instantiation without "new" keyword
            if (!this._createWidget) {
                return new constructor(options, element);
            }

            // Allow instantiation without initializing for simple inheritance
            // must use "new" keyword (the code above always passes args)
            if (arguments.length) {
                this._createWidget(options, element);
            }
        };

        // Extend with the existing constructor to carry over any static properties
        $.extend(constructor, existingConstructor, {
            version: prototype.version,

            // Copy the object used to create the prototype in case we need to
            // redefine the widget later
            _proto: $.extend({}, prototype),

            // Track widgets that inherit from this widget in case this widget is
            // redefined after a widget inherits from it
            _childConstructors: []
        });

        basePrototype = new base();

        // We need to make the options hash a property directly on the new instance
        // otherwise we'll modify the options hash on the prototype that we're
        // inheriting from
        basePrototype.options = $.widget.extend({}, basePrototype.options);
        $.each(prototype, function (prop, value) {
            if (!$.isFunction(value)) {
                proxiedPrototype[prop] = value;
                return;
            }
            proxiedPrototype[prop] = function () {
                function _super() {
                    return base.prototype[prop].apply(this, arguments);
                }

                function _superApply(args) {
                    return base.prototype[prop].apply(this, args);
                }

                return function () {
                    var __super = this._super;
                    var __superApply = this._superApply;
                    var returnValue;

                    this._super = _super;
                    this._superApply = _superApply;

                    returnValue = value.apply(this, arguments);

                    this._super = __super;
                    this._superApply = __superApply;

                    return returnValue;
                };
            }();
        });
        constructor.prototype = $.widget.extend(basePrototype, {

            // TODO: remove support for widgetEventPrefix
            // always use the name + a colon as the prefix, e.g., draggable:start
            // don't prefix for widgets that aren't DOM-based
            widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix || name : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });

        // If this widget is being redefined then we need to find all widgets that
        // are inheriting from it and redefine all of them so that they inherit from
        // the new version of this widget. We're essentially trying to replace one
        // level in the prototype chain.
        if (existingConstructor) {
            $.each(existingConstructor._childConstructors, function (i, child) {
                var childPrototype = child.prototype;

                // Redefine the child widget using the same prototype that was
                // originally used, but inherit from the new version of the base
                $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
            });

            // Remove the list of existing child constructors from the old constructor
            // so the old child constructors can be garbage collected
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push(constructor);
        }

        $.widget.bridge(name, constructor);

        return constructor;
    };

    $.widget.extend = function (target) {
        var input = widgetSlice.call(arguments, 1);
        var inputIndex = 0;
        var inputLength = input.length;
        var key;
        var value;

        for (; inputIndex < inputLength; inputIndex++) {
            for (key in input[inputIndex]) {
                value = input[inputIndex][key];
                if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {

                    // Clone objects
                    if ($.isPlainObject(value)) {
                        target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) :

                        // Don't extend strings, arrays, etc. with objects
                        $.widget.extend({}, value);

                        // Copy everything else by reference
                    } else {
                        target[key] = value;
                    }
                }
            }
        }
        return target;
    };

    $.widget.bridge = function (name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function (options) {
            var isMethodCall = typeof options === "string";
            var args = widgetSlice.call(arguments, 1);
            var returnValue = this;

            if (isMethodCall) {

                // If this is an empty collection, we need to have the instance method
                // return undefined instead of the jQuery instance
                if (!this.length && options === "instance") {
                    returnValue = undefined;
                } else {
                    this.each(function () {
                        var methodValue;
                        var instance = $.data(this, fullName);

                        if (options === "instance") {
                            returnValue = instance;
                            return false;
                        }

                        if (!instance) {
                            return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'");
                        }

                        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                            return $.error("no such method '" + options + "' for " + name + " widget instance");
                        }

                        methodValue = instance[options].apply(instance, args);

                        if (methodValue !== instance && methodValue !== undefined) {
                            returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
                            return false;
                        }
                    });
                }
            } else {

                // Allow multiple hashes to be passed on init
                if (args.length) {
                    options = $.widget.extend.apply(null, [options].concat(args));
                }

                this.each(function () {
                    var instance = $.data(this, fullName);
                    if (instance) {
                        instance.option(options || {});
                        if (instance._init) {
                            instance._init();
                        }
                    } else {
                        $.data(this, fullName, new object(options, this));
                    }
                });
            }

            return returnValue;
        };
    };

    $.Widget = function () /* options, element */{};
    $.Widget._childConstructors = [];

    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",

        options: {
            classes: {},
            disabled: false,

            // Callbacks
            create: null
        },

        _createWidget: function _createWidget(options, element) {
            element = $(element || this.defaultElement || this)[0];
            this.element = $(element);
            this.uuid = widgetUuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;

            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();
            this.classesElementLookup = {};

            if (element !== this) {
                $.data(element, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function remove(event) {
                        if (event.target === element) {
                            this.destroy();
                        }
                    }
                });
                this.document = $(element.style ?

                // Element within the document
                element.ownerDocument :

                // Element is window or document
                element.document || element);
                this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
            }

            this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);

            this._create();

            if (this.options.disabled) {
                this._setOptionDisabled(this.options.disabled);
            }

            this._trigger("create", null, this._getCreateEventData());
            this._init();
        },

        _getCreateOptions: function _getCreateOptions() {
            return {};
        },

        _getCreateEventData: $.noop,

        _create: $.noop,

        _init: $.noop,

        destroy: function destroy() {
            var that = this;

            this._destroy();
            $.each(this.classesElementLookup, function (key, value) {
                that._removeClass(value, key);
            });

            // We can probably remove the unbind calls in 2.0
            // all event bindings should go through this._on()
            this.element.off(this.eventNamespace).removeData(this.widgetFullName);
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled");

            // Clean up events and states
            this.bindings.off(this.eventNamespace);
        },

        _destroy: $.noop,

        widget: function widget() {
            return this.element;
        },

        option: function option(key, value) {
            var options = key;
            var parts;
            var curOption;
            var i;

            if (arguments.length === 0) {

                // Don't return a reference to the internal hash
                return $.widget.extend({}, this.options);
            }

            if (typeof key === "string") {

                // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split(".");
                key = parts.shift();
                if (parts.length) {
                    curOption = options[key] = $.widget.extend({}, this.options[key]);
                    for (i = 0; i < parts.length - 1; i++) {
                        curOption[parts[i]] = curOption[parts[i]] || {};
                        curOption = curOption[parts[i]];
                    }
                    key = parts.pop();
                    if (arguments.length === 1) {
                        return curOption[key] === undefined ? null : curOption[key];
                    }
                    curOption[key] = value;
                } else {
                    if (arguments.length === 1) {
                        return this.options[key] === undefined ? null : this.options[key];
                    }
                    options[key] = value;
                }
            }

            this._setOptions(options);

            return this;
        },

        _setOptions: function _setOptions(options) {
            var key;

            for (key in options) {
                this._setOption(key, options[key]);
            }

            return this;
        },

        _setOption: function _setOption(key, value) {
            if (key === "classes") {
                this._setOptionClasses(value);
            }

            this.options[key] = value;

            if (key === "disabled") {
                this._setOptionDisabled(value);
            }

            return this;
        },

        _setOptionClasses: function _setOptionClasses(value) {
            var classKey, elements, currentElements;

            for (classKey in value) {
                currentElements = this.classesElementLookup[classKey];
                if (value[classKey] === this.options.classes[classKey] || !currentElements || !currentElements.length) {
                    continue;
                }

                // We are doing this to create a new jQuery object because the _removeClass() call
                // on the next line is going to destroy the reference to the current elements being
                // tracked. We need to save a copy of this collection so that we can add the new classes
                // below.
                elements = $(currentElements.get());
                this._removeClass(currentElements, classKey);

                // We don't use _addClass() here, because that uses this.options.classes
                // for generating the string of classes. We want to use the value passed in from
                // _setOption(), this is the new value of the classes option which was passed to
                // _setOption(). We pass this value directly to _classes().
                elements.addClass(this._classes({
                    element: elements,
                    keys: classKey,
                    classes: value,
                    add: true
                }));
            }
        },

        _setOptionDisabled: function _setOptionDisabled(value) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!value);

            // If the widget is becoming disabled, then nothing is interactive
            if (value) {
                this._removeClass(this.hoverable, null, "ui-state-hover");
                this._removeClass(this.focusable, null, "ui-state-focus");
            }
        },

        enable: function enable() {
            return this._setOptions({ disabled: false });
        },

        disable: function disable() {
            return this._setOptions({ disabled: true });
        },

        _classes: function _classes(options) {
            var full = [];
            var that = this;

            options = $.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, options);

            function processClassString(classes, checkOption) {
                var current, i;
                for (i = 0; i < classes.length; i++) {
                    current = that.classesElementLookup[classes[i]] || $();
                    if (options.add) {
                        current = $($.unique(current.get().concat(options.element.get())));
                    } else {
                        current = $(current.not(options.element).get());
                    }
                    that.classesElementLookup[classes[i]] = current;
                    full.push(classes[i]);
                    if (checkOption && options.classes[classes[i]]) {
                        full.push(options.classes[classes[i]]);
                    }
                }
            }

            this._on(options.element, {
                "remove": "_untrackClassesElement"
            });

            if (options.keys) {
                processClassString(options.keys.match(/\S+/g) || [], true);
            }
            if (options.extra) {
                processClassString(options.extra.match(/\S+/g) || []);
            }

            return full.join(" ");
        },

        _untrackClassesElement: function _untrackClassesElement(event) {
            var that = this;
            $.each(that.classesElementLookup, function (key, value) {
                if ($.inArray(event.target, value) !== -1) {
                    that.classesElementLookup[key] = $(value.not(event.target).get());
                }
            });
        },

        _removeClass: function _removeClass(element, keys, extra) {
            return this._toggleClass(element, keys, extra, false);
        },

        _addClass: function _addClass(element, keys, extra) {
            return this._toggleClass(element, keys, extra, true);
        },

        _toggleClass: function _toggleClass(element, keys, extra, add) {
            add = typeof add === "boolean" ? add : extra;
            var shift = typeof element === "string" || element === null,
                options = {
                extra: shift ? keys : extra,
                keys: shift ? element : keys,
                element: shift ? this.element : element,
                add: add
            };
            options.element.toggleClass(this._classes(options), add);
            return this;
        },

        _on: function _on(suppressDisabledCheck, element, handlers) {
            var delegateElement;
            var instance = this;

            // No suppressDisabledCheck flag, shuffle arguments
            if (typeof suppressDisabledCheck !== "boolean") {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }

            // No element argument, shuffle and use this.element
            if (!handlers) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $(element);
                this.bindings = this.bindings.add(element);
            }

            $.each(handlers, function (event, handler) {
                function handlerProxy() {

                    // Allow widgets to customize the disabled handling
                    // - disabled as an array instead of boolean
                    // - disabled class as method for disabling individual parts
                    if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
                        return;
                    }
                    return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
                }

                // Copy the guid so direct unbinding works
                if (typeof handler !== "string") {
                    handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
                }

                var match = event.match(/^([\w:-]*)\s*(.*)$/);
                var eventName = match[1] + instance.eventNamespace;
                var selector = match[2];

                if (selector) {
                    delegateElement.on(eventName, selector, handlerProxy);
                } else {
                    element.on(eventName, handlerProxy);
                }
            });
        },

        _off: function _off(element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            element.off(eventName).off(eventName);

            // Clear the stack to avoid memory leaks (#10056)
            this.bindings = $(this.bindings.not(element).get());
            this.focusable = $(this.focusable.not(element).get());
            this.hoverable = $(this.hoverable.not(element).get());
        },

        _delay: function _delay(handler, delay) {
            function handlerProxy() {
                return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
            }
            var instance = this;
            return setTimeout(handlerProxy, delay || 0);
        },

        _hoverable: function _hoverable(element) {
            this.hoverable = this.hoverable.add(element);
            this._on(element, {
                mouseenter: function mouseenter(event) {
                    this._addClass($(event.currentTarget), null, "ui-state-hover");
                },
                mouseleave: function mouseleave(event) {
                    this._removeClass($(event.currentTarget), null, "ui-state-hover");
                }
            });
        },

        _focusable: function _focusable(element) {
            this.focusable = this.focusable.add(element);
            this._on(element, {
                focusin: function focusin(event) {
                    this._addClass($(event.currentTarget), null, "ui-state-focus");
                },
                focusout: function focusout(event) {
                    this._removeClass($(event.currentTarget), null, "ui-state-focus");
                }
            });
        },

        _trigger: function _trigger(type, event, data) {
            var prop, orig;
            var callback = this.options[type];

            data = data || {};
            event = $.Event(event);
            event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();

            // The original event may come from any element
            // so we need to reset the target on the new event
            event.target = this.element[0];

            // Copy original event properties over to the new event
            orig = event.originalEvent;
            if (orig) {
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[prop] = orig[prop];
                    }
                }
            }

            this.element.trigger(event, data);
            return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
        }
    };

    $.each({ show: "fadeIn", hide: "fadeOut" }, function (method, defaultEffect) {
        $.Widget.prototype["_" + method] = function (element, options, callback) {
            if (typeof options === "string") {
                options = { effect: options };
            }

            var hasOptions;
            var effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;

            options = options || {};
            if (typeof options === "number") {
                options = { duration: options };
            }

            hasOptions = !$.isEmptyObject(options);
            options.complete = callback;

            if (options.delay) {
                element.delay(options.delay);
            }

            if (hasOptions && $.effects && $.effects.effect[effectName]) {
                element[method](options);
            } else if (effectName !== method && element[effectName]) {
                element[effectName](options.duration, options.easing, callback);
            } else {
                element.queue(function (next) {
                    $(this)[method]();
                    if (callback) {
                        callback.call(element[0]);
                    }
                    next();
                });
            }
        };
    });

    var widget = $.widget;

    /*!
     * jQuery UI :data 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: :data Selector
    //>>group: Core
    //>>description: Selects elements which have data stored under the specified key.
    //>>docs: http://api.jqueryui.com/data-selector/


    var data = $.extend($.expr[":"], {
        data: $.expr.createPseudo ? $.expr.createPseudo(function (dataName) {
            return function (elem) {
                return !!$.data(elem, dataName);
            };
        }) :

        // Support: jQuery <1.8
        function (elem, i, match) {
            return !!$.data(elem, match[3]);
        }
    });

    /*!
     * jQuery UI Keycode 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Keycode
    //>>group: Core
    //>>description: Provide keycodes as keynames
    //>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/


    var keycode = $.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };

    /*!
     * jQuery UI Scroll Parent 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: scrollParent
    //>>group: Core
    //>>description: Get the closest ancestor element that is scrollable.
    //>>docs: http://api.jqueryui.com/scrollParent/


    var scrollParent = $.fn.scrollParent = function (includeHidden) {
        var position = this.css("position"),
            excludeStaticParent = position === "absolute",
            overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            scrollParent = this.parents().filter(function () {
            var parent = $(this);
            if (excludeStaticParent && parent.css("position") === "static") {
                return false;
            }
            return overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
        }).eq(0);

        return position === "fixed" || !scrollParent.length ? $(this[0].ownerDocument || document) : scrollParent;
    };

    /*!
     * jQuery UI Unique ID 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: uniqueId
    //>>group: Core
    //>>description: Functions to generate and remove uniqueId's
    //>>docs: http://api.jqueryui.com/uniqueId/


    var uniqueId = $.fn.extend({
        uniqueId: function () {
            var uuid = 0;

            return function () {
                return this.each(function () {
                    if (!this.id) {
                        this.id = "ui-id-" + ++uuid;
                    }
                });
            };
        }(),

        removeUniqueId: function removeUniqueId() {
            return this.each(function () {
                if (/^ui-id-\d+$/.test(this.id)) {
                    $(this).removeAttr("id");
                }
            });
        }
    });

    // This file is deprecated
    var ie = $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());

    /*!
     * jQuery UI Mouse 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Mouse
    //>>group: Widgets
    //>>description: Abstracts mouse-based interactions to assist in creating certain widgets.
    //>>docs: http://api.jqueryui.com/mouse/


    var mouseHandled = false;
    $(document).on("mouseup", function () {
        mouseHandled = false;
    });

    var widgetsMouse = $.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function _mouseInit() {
            var that = this;

            this.element.on("mousedown." + this.widgetName, function (event) {
                return that._mouseDown(event);
            }).on("click." + this.widgetName, function (event) {
                if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
                    $.removeData(event.target, that.widgetName + ".preventClickEvent");
                    event.stopImmediatePropagation();
                    return false;
                }
            });

            this.started = false;
        },

        // TODO: make sure destroying one instance of mouse doesn't mess with
        // other instances of mouse
        _mouseDestroy: function _mouseDestroy() {
            this.element.off("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
            }
        },

        _mouseDown: function _mouseDown(event) {

            // don't let more than one widget handle mouseStart
            if (mouseHandled) {
                return;
            }

            this._mouseMoved = false;

            // We may have missed mouseup (out of window)
            this._mouseStarted && this._mouseUp(event);

            this._mouseDownEvent = event;

            var that = this,
                btnIsLeft = event.which === 1,


            // event.target.nodeName works around a bug in IE 8 with
            // disabled inputs (#7620)
            elIsCancel = typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false;
            if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
                return true;
            }

            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function () {
                    that.mouseDelayMet = true;
                }, this.options.delay);
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = this._mouseStart(event) !== false;
                if (!this._mouseStarted) {
                    event.preventDefault();
                    return true;
                }
            }

            // Click event may never have fired (Gecko & Opera)
            if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
                $.removeData(event.target, this.widgetName + ".preventClickEvent");
            }

            // These delegates are required to keep context
            this._mouseMoveDelegate = function (event) {
                return that._mouseMove(event);
            };
            this._mouseUpDelegate = function (event) {
                return that._mouseUp(event);
            };

            this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate);

            event.preventDefault();

            mouseHandled = true;
            return true;
        },

        _mouseMove: function _mouseMove(event) {

            // Only check for mouseups outside the document if you've moved inside the document
            // at least once. This prevents the firing of mouseup in the case of IE<9, which will
            // fire a mousemove event if content is placed under the cursor. See #7778
            // Support: IE <9
            if (this._mouseMoved) {

                // IE mouseup check - mouseup happened when mouse was out of window
                if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !event.button) {
                    return this._mouseUp(event);

                    // Iframe mouseup check - mouseup occurred in another document
                } else if (!event.which) {

                    // Support: Safari <=8 - 9
                    // Safari sets which to 0 if you press any of the following keys
                    // during a drag (#14461)
                    if (event.originalEvent.altKey || event.originalEvent.ctrlKey || event.originalEvent.metaKey || event.originalEvent.shiftKey) {
                        this.ignoreMissingWhich = true;
                    } else if (!this.ignoreMissingWhich) {
                        return this._mouseUp(event);
                    }
                }
            }

            if (event.which || event.button) {
                this._mouseMoved = true;
            }

            if (this._mouseStarted) {
                this._mouseDrag(event);
                return event.preventDefault();
            }

            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = this._mouseStart(this._mouseDownEvent, event) !== false;
                this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event);
            }

            return !this._mouseStarted;
        },

        _mouseUp: function _mouseUp(event) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);

            if (this._mouseStarted) {
                this._mouseStarted = false;

                if (event.target === this._mouseDownEvent.target) {
                    $.data(event.target, this.widgetName + ".preventClickEvent", true);
                }

                this._mouseStop(event);
            }

            if (this._mouseDelayTimer) {
                clearTimeout(this._mouseDelayTimer);
                delete this._mouseDelayTimer;
            }

            this.ignoreMissingWhich = false;
            mouseHandled = false;
            event.preventDefault();
        },

        _mouseDistanceMet: function _mouseDistanceMet(event) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX), Math.abs(this._mouseDownEvent.pageY - event.pageY)) >= this.options.distance;
        },

        _mouseDelayMet: function _mouseDelayMet() /* event */{
            return this.mouseDelayMet;
        },

        // These are placeholder methods, to be overriden by extending plugin
        _mouseStart: function _mouseStart() /* event */{},
        _mouseDrag: function _mouseDrag() /* event */{},
        _mouseStop: function _mouseStop() /* event */{},
        _mouseCapture: function _mouseCapture() /* event */{
            return true;
        }
    });

    // $.ui.plugin is deprecated. Use $.widget() extensions instead.
    var plugin = $.ui.plugin = {
        add: function add(module, option, set) {
            var i,
                proto = $.ui[module].prototype;
            for (i in set) {
                proto.plugins[i] = proto.plugins[i] || [];
                proto.plugins[i].push([option, set[i]]);
            }
        },
        call: function call(instance, name, args, allowDisconnected) {
            var i,
                set = instance.plugins[name];

            if (!set) {
                return;
            }

            if (!allowDisconnected && (!instance.element[0].parentNode || instance.element[0].parentNode.nodeType === 11)) {
                return;
            }

            for (i = 0; i < set.length; i++) {
                if (instance.options[set[i][0]]) {
                    set[i][1].apply(instance.element, args);
                }
            }
        }
    };

    var safeActiveElement = $.ui.safeActiveElement = function (document) {
        var activeElement;

        // Support: IE 9 only
        // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
        try {
            activeElement = document.activeElement;
        } catch (error) {
            activeElement = document.body;
        }

        // Support: IE 9 - 11 only
        // IE may return null instead of an element
        // Interestingly, this only seems to occur when NOT in an iframe
        if (!activeElement) {
            activeElement = document.body;
        }

        // Support: IE 11 only
        // IE11 returns a seemingly empty object in some cases when accessing
        // document.activeElement from an <iframe>
        if (!activeElement.nodeName) {
            activeElement = document.body;
        }

        return activeElement;
    };

    var safeBlur = $.ui.safeBlur = function (element) {

        // Support: IE9 - 10 only
        // If the <body> is blurred, IE will switch windows, see #9420
        if (element && element.nodeName.toLowerCase() !== "body") {
            $(element).trigger("blur");
        }
    };

    /*!
     * jQuery UI Draggable 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Draggable
    //>>group: Interactions
    //>>description: Enables dragging functionality for any element.
    //>>docs: http://api.jqueryui.com/draggable/
    //>>demos: http://jqueryui.com/draggable/
    //>>css.structure: ../../themes/base/draggable.css


    $.widget("ui.draggable", $.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,

            // Callbacks
            drag: null,
            start: null,
            stop: null
        },
        _create: function _create() {

            if (this.options.helper === "original") {
                this._setPositionRelative();
            }
            if (this.options.addClasses) {
                this._addClass("ui-draggable");
            }
            this._setHandleClassName();

            this._mouseInit();
        },

        _setOption: function _setOption(key, value) {
            this._super(key, value);
            if (key === "handle") {
                this._removeHandleClassName();
                this._setHandleClassName();
            }
        },

        _destroy: function _destroy() {
            if ((this.helper || this.element).is(".ui-draggable-dragging")) {
                this.destroyOnClear = true;
                return;
            }
            this._removeHandleClassName();
            this._mouseDestroy();
        },

        _mouseCapture: function _mouseCapture(event) {
            var o = this.options;

            // Among others, prevent a drag on a resizable-handle
            if (this.helper || o.disabled || $(event.target).closest(".ui-resizable-handle").length > 0) {
                return false;
            }

            //Quit if we're not on a valid handle
            this.handle = this._getHandle(event);
            if (!this.handle) {
                return false;
            }

            this._blurActiveElement(event);

            this._blockFrames(o.iframeFix === true ? "iframe" : o.iframeFix);

            return true;
        },

        _blockFrames: function _blockFrames(selector) {
            this.iframeBlocks = this.document.find(selector).map(function () {
                var iframe = $(this);

                return $("<div>").css("position", "absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0];
            });
        },

        _unblockFrames: function _unblockFrames() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },

        _blurActiveElement: function _blurActiveElement(event) {
            var activeElement = $.ui.safeActiveElement(this.document[0]),
                target = $(event.target);

            // Don't blur if the event occurred on an element that is within
            // the currently focused element
            // See #10527, #12472
            if (target.closest(activeElement).length) {
                return;
            }

            // Blur any element that currently has focus, see #4261
            $.ui.safeBlur(activeElement);
        },

        _mouseStart: function _mouseStart(event) {

            var o = this.options;

            //Create and append the visible helper
            this.helper = this._createHelper(event);

            this._addClass(this.helper, "ui-draggable-dragging");

            //Cache the helper size
            this._cacheHelperProportions();

            //If ddmanager is used for droppables, set the global draggable
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }

            /*
             * - Position generation -
             * This block generates everything position related - it's the core of draggables.
             */

            //Cache the margins of the original element
            this._cacheMargins();

            //Store the helper's css position
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent(true);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = this.helper.parents().filter(function () {
                return $(this).css("position") === "fixed";
            }).length > 0;

            //The element's absolute position on the page minus margins
            this.positionAbs = this.element.offset();
            this._refreshOffsets(event);

            //Generate the original position
            this.originalPosition = this.position = this._generatePosition(event, false);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;

            //Adjust the mouse offset relative to the helper if "cursorAt" is supplied
            o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt);

            //Set a containment if given in the options
            this._setContainment();

            //Trigger event + callbacks
            if (this._trigger("start", event) === false) {
                this._clear();
                return false;
            }

            //Recache the helper size
            this._cacheHelperProportions();

            //Prepare the droppable offsets
            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }

            // Execute the drag once - this causes the helper not to be visible before getting its
            // correct position
            this._mouseDrag(event, true);

            // If the ddmanager is used for droppables, inform the manager that dragging has started
            // (see #5003)
            if ($.ui.ddmanager) {
                $.ui.ddmanager.dragStart(this, event);
            }

            return true;
        },

        _refreshOffsets: function _refreshOffsets(event) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: false,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };

            this.offset.click = {
                left: event.pageX - this.offset.left,
                top: event.pageY - this.offset.top
            };
        },

        _mouseDrag: function _mouseDrag(event, noPropagation) {

            // reset any necessary cached properties (see #5009)
            if (this.hasFixedAncestor) {
                this.offset.parent = this._getParentOffset();
            }

            //Compute the helpers position
            this.position = this._generatePosition(event, true);
            this.positionAbs = this._convertPositionTo("absolute");

            //Call plugins and callbacks and use the resulting position if something is returned
            if (!noPropagation) {
                var ui = this._uiHash();
                if (this._trigger("drag", event, ui) === false) {
                    this._mouseUp(new $.Event("mouseup", event));
                    return false;
                }
                this.position = ui.position;
            }

            this.helper[0].style.left = this.position.left + "px";
            this.helper[0].style.top = this.position.top + "px";

            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }

            return false;
        },

        _mouseStop: function _mouseStop(event) {

            //If we are using droppables, inform the manager about the drop
            var that = this,
                dropped = false;
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                dropped = $.ui.ddmanager.drop(this, event);
            }

            //if a drop comes from outside (a sortable)
            if (this.dropped) {
                dropped = this.dropped;
                this.dropped = false;
            }

            if (this.options.revert === "invalid" && !dropped || this.options.revert === "valid" && dropped || this.options.revert === true || $.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped)) {
                $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    if (that._trigger("stop", event) !== false) {
                        that._clear();
                    }
                });
            } else {
                if (this._trigger("stop", event) !== false) {
                    this._clear();
                }
            }

            return false;
        },

        _mouseUp: function _mouseUp(event) {
            this._unblockFrames();

            // If the ddmanager is used for droppables, inform the manager that dragging has stopped
            // (see #5003)
            if ($.ui.ddmanager) {
                $.ui.ddmanager.dragStop(this, event);
            }

            // Only need to focus if the event occurred on the draggable itself, see #10527
            if (this.handleElement.is(event.target)) {

                // The interaction is over; whether or not the click resulted in a drag,
                // focus the element
                this.element.trigger("focus");
            }

            return $.ui.mouse.prototype._mouseUp.call(this, event);
        },

        cancel: function cancel() {

            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp(new $.Event("mouseup", { target: this.element[0] }));
            } else {
                this._clear();
            }

            return this;
        },

        _getHandle: function _getHandle(event) {
            return this.options.handle ? !!$(event.target).closest(this.element.find(this.options.handle)).length : true;
        },

        _setHandleClassName: function _setHandleClassName() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this._addClass(this.handleElement, "ui-draggable-handle");
        },

        _removeHandleClassName: function _removeHandleClassName() {
            this._removeClass(this.handleElement, "ui-draggable-handle");
        },

        _createHelper: function _createHelper(event) {

            var o = this.options,
                helperIsFunction = $.isFunction(o.helper),
                helper = helperIsFunction ? $(o.helper.apply(this.element[0], [event])) : o.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;

            if (!helper.parents("body").length) {
                helper.appendTo(o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo);
            }

            // Http://bugs.jqueryui.com/ticket/9446
            // a helper function can return the original element
            // which wouldn't have been set to relative in _create
            if (helperIsFunction && helper[0] === this.element[0]) {
                this._setPositionRelative();
            }

            if (helper[0] !== this.element[0] && !/(fixed|absolute)/.test(helper.css("position"))) {
                helper.css("position", "absolute");
            }

            return helper;
        },

        _setPositionRelative: function _setPositionRelative() {
            if (!/^(?:r|a|f)/.test(this.element.css("position"))) {
                this.element[0].style.position = "relative";
            }
        },

        _adjustOffsetFromHelper: function _adjustOffsetFromHelper(obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = { left: +obj[0], top: +obj[1] || 0 };
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },

        _isRootNode: function _isRootNode(element) {
            return (/(html|body)/i.test(element.tagName) || element === this.document[0]
            );
        },

        _getParentOffset: function _getParentOffset() {

            //Get the offsetParent and cache its position
            var po = this.offsetParent.offset(),
                document = this.document[0];

            // This is a special case where we need to modify a offset calculated on start, since the
            // following happened:
            // 1. The position of the helper is absolute, so it's position is calculated based on the
            // next positioned parent
            // 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't
            // the document, which means that the scroll is included in the initial calculation of the
            // offset of the parent, and never recalculated upon drag
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }

            if (this._isRootNode(this.offsetParent[0])) {
                po = { top: 0, left: 0 };
            }

            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },

        _getRelativeOffset: function _getRelativeOffset() {
            if (this.cssPosition !== "relative") {
                return { top: 0, left: 0 };
            }

            var p = this.element.position(),
                scrollIsRootNode = this._isRootNode(this.scrollParent[0]);

            return {
                top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollTop() : 0),
                left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollLeft() : 0)
            };
        },

        _cacheMargins: function _cacheMargins() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },

        _cacheHelperProportions: function _cacheHelperProportions() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },

        _setContainment: function _setContainment() {

            var isUserScrollable,
                c,
                ce,
                o = this.options,
                document = this.document[0];

            this.relativeContainer = null;

            if (!o.containment) {
                this.containment = null;
                return;
            }

            if (o.containment === "window") {
                this.containment = [$(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left, $(window).scrollTop() + ($(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return;
            }

            if (o.containment === "document") {
                this.containment = [0, 0, $(document).width() - this.helperProportions.width - this.margins.left, ($(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                return;
            }

            if (o.containment.constructor === Array) {
                this.containment = o.containment;
                return;
            }

            if (o.containment === "parent") {
                o.containment = this.helper[0].parentNode;
            }

            c = $(o.containment);
            ce = c[0];

            if (!ce) {
                return;
            }

            isUserScrollable = /(scroll|auto)/.test(c.css("overflow"));

            this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (isUserScrollable ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (isUserScrollable ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
            this.relativeContainer = c;
        },

        _convertPositionTo: function _convertPositionTo(d, pos) {

            if (!pos) {
                pos = this.position;
            }

            var mod = d === "absolute" ? 1 : -1,
                scrollIsRootNode = this._isRootNode(this.scrollParent[0]);

            return {
                top:

                // The absolute mouse position
                pos.top +

                // Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.relative.top * mod +

                // The offsetParent's offset without borders (offset + border)
                this.offset.parent.top * mod - (this.cssPosition === "fixed" ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top) * mod,
                left:

                // The absolute mouse position
                pos.left +

                // Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.relative.left * mod +

                // The offsetParent's offset without borders (offset + border)
                this.offset.parent.left * mod - (this.cssPosition === "fixed" ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left) * mod
            };
        },

        _generatePosition: function _generatePosition(event, constrainPosition) {

            var containment,
                co,
                top,
                left,
                o = this.options,
                scrollIsRootNode = this._isRootNode(this.scrollParent[0]),
                pageX = event.pageX,
                pageY = event.pageY;

            // Cache the scroll
            if (!scrollIsRootNode || !this.offset.scroll) {
                this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                };
            }

            /*
             * - Position constraining -
             * Constrain the position to a mix of grid, containment.
             */

            // If we are not dragging yet, we won't check for options
            if (constrainPosition) {
                if (this.containment) {
                    if (this.relativeContainer) {
                        co = this.relativeContainer.offset();
                        containment = [this.containment[0] + co.left, this.containment[1] + co.top, this.containment[2] + co.left, this.containment[3] + co.top];
                    } else {
                        containment = this.containment;
                    }

                    if (event.pageX - this.offset.click.left < containment[0]) {
                        pageX = containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < containment[1]) {
                        pageY = containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > containment[2]) {
                        pageX = containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > containment[3]) {
                        pageY = containment[3] + this.offset.click.top;
                    }
                }

                if (o.grid) {

                    //Check for grid elements set to 0 to prevent divide by 0 error causing invalid
                    // argument errors in IE (see ticket #6950)
                    top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
                    pageY = containment ? top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3] ? top : top - this.offset.click.top >= containment[1] ? top - o.grid[1] : top + o.grid[1] : top;

                    left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
                    pageX = containment ? left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2] ? left : left - this.offset.click.left >= containment[0] ? left - o.grid[0] : left + o.grid[0] : left;
                }

                if (o.axis === "y") {
                    pageX = this.originalPageX;
                }

                if (o.axis === "x") {
                    pageY = this.originalPageY;
                }
            }

            return {
                top:

                // The absolute mouse position
                pageY -

                // Click offset (relative to the element)
                this.offset.click.top -

                // Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.relative.top -

                // The offsetParent's offset without borders (offset + border)
                this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top),
                left:

                // The absolute mouse position
                pageX -

                // Click offset (relative to the element)
                this.offset.click.left -

                // Only for relative positioned nodes: Relative offset from element to offset parent
                this.offset.relative.left -

                // The offsetParent's offset without borders (offset + border)
                this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left)
            };
        },

        _clear: function _clear() {
            this._removeClass(this.helper, "ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove();
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
            if (this.destroyOnClear) {
                this.destroy();
            }
        },

        // From now on bulk stuff - mainly helpers

        _trigger: function _trigger(type, event, ui) {
            ui = ui || this._uiHash();
            $.ui.plugin.call(this, type, [event, ui, this], true);

            // Absolute position and offset (see #6884 ) have to be recalculated after plugins
            if (/^(drag|start|stop)/.test(type)) {
                this.positionAbs = this._convertPositionTo("absolute");
                ui.offset = this.positionAbs;
            }
            return $.Widget.prototype._trigger.call(this, type, event, ui);
        },

        plugins: {},

        _uiHash: function _uiHash() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }

    });

    $.ui.plugin.add("draggable", "connectToSortable", {
        start: function start(event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });

            draggable.sortables = [];
            $(draggable.options.connectToSortable).each(function () {
                var sortable = $(this).sortable("instance");

                if (sortable && !sortable.options.disabled) {
                    draggable.sortables.push(sortable);

                    // RefreshPositions is called at drag start to refresh the containerCache
                    // which is used in drag. This ensures it's initialized and synchronized
                    // with any changes that might have happened on the page since initialization.
                    sortable.refreshPositions();
                    sortable._trigger("activate", event, uiSortable);
                }
            });
        },
        stop: function stop(event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });

            draggable.cancelHelperRemoval = false;

            $.each(draggable.sortables, function () {
                var sortable = this;

                if (sortable.isOver) {
                    sortable.isOver = 0;

                    // Allow this sortable to handle removing the helper
                    draggable.cancelHelperRemoval = true;
                    sortable.cancelHelperRemoval = false;

                    // Use _storedCSS To restore properties in the sortable,
                    // as this also handles revert (#9675) since the draggable
                    // may have modified them in unexpected ways (#8809)
                    sortable._storedCSS = {
                        position: sortable.placeholder.css("position"),
                        top: sortable.placeholder.css("top"),
                        left: sortable.placeholder.css("left")
                    };

                    sortable._mouseStop(event);

                    // Once drag has ended, the sortable should return to using
                    // its original helper, not the shared helper from draggable
                    sortable.options.helper = sortable.options._helper;
                } else {

                    // Prevent this Sortable from removing the helper.
                    // However, don't set the draggable to remove the helper
                    // either as another connected Sortable may yet handle the removal.
                    sortable.cancelHelperRemoval = true;

                    sortable._trigger("deactivate", event, uiSortable);
                }
            });
        },
        drag: function drag(event, ui, draggable) {
            $.each(draggable.sortables, function () {
                var innermostIntersecting = false,
                    sortable = this;

                // Copy over variables that sortable's _intersectsWith uses
                sortable.positionAbs = draggable.positionAbs;
                sortable.helperProportions = draggable.helperProportions;
                sortable.offset.click = draggable.offset.click;

                if (sortable._intersectsWith(sortable.containerCache)) {
                    innermostIntersecting = true;

                    $.each(draggable.sortables, function () {

                        // Copy over variables that sortable's _intersectsWith uses
                        this.positionAbs = draggable.positionAbs;
                        this.helperProportions = draggable.helperProportions;
                        this.offset.click = draggable.offset.click;

                        if (this !== sortable && this._intersectsWith(this.containerCache) && $.contains(sortable.element[0], this.element[0])) {
                            innermostIntersecting = false;
                        }

                        return innermostIntersecting;
                    });
                }

                if (innermostIntersecting) {

                    // If it intersects, we use a little isOver variable and set it once,
                    // so that the move-in stuff gets fired only once.
                    if (!sortable.isOver) {
                        sortable.isOver = 1;

                        // Store draggable's parent in case we need to reappend to it later.
                        draggable._parent = ui.helper.parent();

                        sortable.currentItem = ui.helper.appendTo(sortable.element).data("ui-sortable-item", true);

                        // Store helper option to later restore it
                        sortable.options._helper = sortable.options.helper;

                        sortable.options.helper = function () {
                            return ui.helper[0];
                        };

                        // Fire the start events of the sortable with our passed browser event,
                        // and our own helper (so it doesn't create a new one)
                        event.target = sortable.currentItem[0];
                        sortable._mouseCapture(event, true);
                        sortable._mouseStart(event, true, true);

                        // Because the browser event is way off the new appended portlet,
                        // modify necessary variables to reflect the changes
                        sortable.offset.click.top = draggable.offset.click.top;
                        sortable.offset.click.left = draggable.offset.click.left;
                        sortable.offset.parent.left -= draggable.offset.parent.left - sortable.offset.parent.left;
                        sortable.offset.parent.top -= draggable.offset.parent.top - sortable.offset.parent.top;

                        draggable._trigger("toSortable", event);

                        // Inform draggable that the helper is in a valid drop zone,
                        // used solely in the revert option to handle "valid/invalid".
                        draggable.dropped = sortable.element;

                        // Need to refreshPositions of all sortables in the case that
                        // adding to one sortable changes the location of the other sortables (#9675)
                        $.each(draggable.sortables, function () {
                            this.refreshPositions();
                        });

                        // Hack so receive/update callbacks work (mostly)
                        draggable.currentItem = draggable.element;
                        sortable.fromOutside = draggable;
                    }

                    if (sortable.currentItem) {
                        sortable._mouseDrag(event);

                        // Copy the sortable's position because the draggable's can potentially reflect
                        // a relative position, while sortable is always absolute, which the dragged
                        // element has now become. (#8809)
                        ui.position = sortable.position;
                    }
                } else {

                    // If it doesn't intersect with the sortable, and it intersected before,
                    // we fake the drag stop of the sortable, but make sure it doesn't remove
                    // the helper by using cancelHelperRemoval.
                    if (sortable.isOver) {

                        sortable.isOver = 0;
                        sortable.cancelHelperRemoval = true;

                        // Calling sortable's mouseStop would trigger a revert,
                        // so revert must be temporarily false until after mouseStop is called.
                        sortable.options._revert = sortable.options.revert;
                        sortable.options.revert = false;

                        sortable._trigger("out", event, sortable._uiHash(sortable));
                        sortable._mouseStop(event, true);

                        // Restore sortable behaviors that were modfied
                        // when the draggable entered the sortable area (#9481)
                        sortable.options.revert = sortable.options._revert;
                        sortable.options.helper = sortable.options._helper;

                        if (sortable.placeholder) {
                            sortable.placeholder.remove();
                        }

                        // Restore and recalculate the draggable's offset considering the sortable
                        // may have modified them in unexpected ways. (#8809, #10669)
                        ui.helper.appendTo(draggable._parent);
                        draggable._refreshOffsets(event);
                        ui.position = draggable._generatePosition(event, true);

                        draggable._trigger("fromSortable", event);

                        // Inform draggable that the helper is no longer in a valid drop zone
                        draggable.dropped = false;

                        // Need to refreshPositions of all sortables just in case removing
                        // from one sortable changes the location of other sortables (#9675)
                        $.each(draggable.sortables, function () {
                            this.refreshPositions();
                        });
                    }
                }
            });
        }
    });

    $.ui.plugin.add("draggable", "cursor", {
        start: function start(event, ui, instance) {
            var t = $("body"),
                o = instance.options;

            if (t.css("cursor")) {
                o._cursor = t.css("cursor");
            }
            t.css("cursor", o.cursor);
        },
        stop: function stop(event, ui, instance) {
            var o = instance.options;
            if (o._cursor) {
                $("body").css("cursor", o._cursor);
            }
        }
    });

    $.ui.plugin.add("draggable", "opacity", {
        start: function start(event, ui, instance) {
            var t = $(ui.helper),
                o = instance.options;
            if (t.css("opacity")) {
                o._opacity = t.css("opacity");
            }
            t.css("opacity", o.opacity);
        },
        stop: function stop(event, ui, instance) {
            var o = instance.options;
            if (o._opacity) {
                $(ui.helper).css("opacity", o._opacity);
            }
        }
    });

    $.ui.plugin.add("draggable", "scroll", {
        start: function start(event, ui, i) {
            if (!i.scrollParentNotHidden) {
                i.scrollParentNotHidden = i.helper.scrollParent(false);
            }

            if (i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML") {
                i.overflowOffset = i.scrollParentNotHidden.offset();
            }
        },
        drag: function drag(event, ui, i) {

            var o = i.options,
                scrolled = false,
                scrollParent = i.scrollParentNotHidden[0],
                document = i.document[0];

            if (scrollParent !== document && scrollParent.tagName !== "HTML") {
                if (!o.axis || o.axis !== "x") {
                    if (i.overflowOffset.top + scrollParent.offsetHeight - event.pageY < o.scrollSensitivity) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
                    } else if (event.pageY - i.overflowOffset.top < o.scrollSensitivity) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
                    }
                }

                if (!o.axis || o.axis !== "y") {
                    if (i.overflowOffset.left + scrollParent.offsetWidth - event.pageX < o.scrollSensitivity) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
                    } else if (event.pageX - i.overflowOffset.left < o.scrollSensitivity) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
                    }
                }
            } else {

                if (!o.axis || o.axis !== "x") {
                    if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
                    } else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
                    }
                }

                if (!o.axis || o.axis !== "y") {
                    if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
                    } else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
                    }
                }
            }

            if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(i, event);
            }
        }
    });

    $.ui.plugin.add("draggable", "snap", {
        start: function start(event, ui, i) {

            var o = i.options;

            i.snapElements = [];

            $(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each(function () {
                var $t = $(this),
                    $o = $t.offset();
                if (this !== i.element[0]) {
                    i.snapElements.push({
                        item: this,
                        width: $t.outerWidth(), height: $t.outerHeight(),
                        top: $o.top, left: $o.left
                    });
                }
            });
        },
        drag: function drag(event, ui, inst) {

            var ts,
                bs,
                ls,
                rs,
                l,
                r,
                t,
                b,
                i,
                first,
                o = inst.options,
                d = o.snapTolerance,
                x1 = ui.offset.left,
                x2 = x1 + inst.helperProportions.width,
                y1 = ui.offset.top,
                y2 = y1 + inst.helperProportions.height;

            for (i = inst.snapElements.length - 1; i >= 0; i--) {

                l = inst.snapElements[i].left - inst.margins.left;
                r = l + inst.snapElements[i].width;
                t = inst.snapElements[i].top - inst.margins.top;
                b = t + inst.snapElements[i].height;

                if (x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains(inst.snapElements[i].item.ownerDocument, inst.snapElements[i].item)) {
                    if (inst.snapElements[i].snapping) {
                        inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item }));
                    }
                    inst.snapElements[i].snapping = false;
                    continue;
                }

                if (o.snapMode !== "inner") {
                    ts = Math.abs(t - y2) <= d;
                    bs = Math.abs(b - y1) <= d;
                    ls = Math.abs(l - x2) <= d;
                    rs = Math.abs(r - x1) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: t - inst.helperProportions.height,
                            left: 0
                        }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: b,
                            left: 0
                        }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: l - inst.helperProportions.width
                        }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: r
                        }).left;
                    }
                }

                first = ts || bs || ls || rs;

                if (o.snapMode !== "outer") {
                    ts = Math.abs(t - y1) <= d;
                    bs = Math.abs(b - y2) <= d;
                    ls = Math.abs(l - x1) <= d;
                    rs = Math.abs(r - x2) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: t,
                            left: 0
                        }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: b - inst.helperProportions.height,
                            left: 0
                        }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: l
                        }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: r - inst.helperProportions.width
                        }).left;
                    }
                }

                if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
                    inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), {
                        snapItem: inst.snapElements[i].item
                    }));
                }
                inst.snapElements[i].snapping = ts || bs || ls || rs || first;
            }
        }
    });

    $.ui.plugin.add("draggable", "stack", {
        start: function start(event, ui, instance) {
            var min,
                o = instance.options,
                group = $.makeArray($(o.stack)).sort(function (a, b) {
                return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0);
            });

            if (!group.length) {
                return;
            }

            min = parseInt($(group[0]).css("zIndex"), 10) || 0;
            $(group).each(function (i) {
                $(this).css("zIndex", min + i);
            });
            this.css("zIndex", min + group.length);
        }
    });

    $.ui.plugin.add("draggable", "zIndex", {
        start: function start(event, ui, instance) {
            var t = $(ui.helper),
                o = instance.options;

            if (t.css("zIndex")) {
                o._zIndex = t.css("zIndex");
            }
            t.css("zIndex", o.zIndex);
        },
        stop: function stop(event, ui, instance) {
            var o = instance.options;

            if (o._zIndex) {
                $(ui.helper).css("zIndex", o._zIndex);
            }
        }
    });

    var widgetsDraggable = $.ui.draggable;

    /*!
     * jQuery UI Accordion 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Accordion
    //>>group: Widgets
    // jscs:disable maximumLineLength
    //>>description: Displays collapsible content panels for presenting information in a limited amount of space.
    // jscs:enable maximumLineLength
    //>>docs: http://api.jqueryui.com/accordion/
    //>>demos: http://jqueryui.com/accordion/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/accordion.css
    //>>css.theme: ../../themes/base/theme.css


    var widgetsAccordion = $.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: false,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },

            // Callbacks
            activate: null,
            beforeActivate: null
        },

        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },

        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },

        _create: function _create() {
            var options = this.options;

            this.prevShow = this.prevHide = $();
            this._addClass("ui-accordion", "ui-widget ui-helper-reset");
            this.element.attr("role", "tablist");

            // Don't allow collapsible: false and active: false / null
            if (!options.collapsible && (options.active === false || options.active == null)) {
                options.active = 0;
            }

            this._processPanels();

            // handle negative values
            if (options.active < 0) {
                options.active += this.headers.length;
            }
            this._refresh();
        },

        _getCreateEventData: function _getCreateEventData() {
            return {
                header: this.active,
                panel: !this.active.length ? $() : this.active.next()
            };
        },

        _createIcons: function _createIcons() {
            var icon,
                children,
                icons = this.options.icons;

            if (icons) {
                icon = $("<span>");
                this._addClass(icon, "ui-accordion-header-icon", "ui-icon " + icons.header);
                icon.prependTo(this.headers);
                children = this.active.children(".ui-accordion-header-icon");
                this._removeClass(children, icons.header)._addClass(children, null, icons.activeHeader)._addClass(this.headers, "ui-accordion-icons");
            }
        },

        _destroyIcons: function _destroyIcons() {
            this._removeClass(this.headers, "ui-accordion-icons");
            this.headers.children(".ui-accordion-header-icon").remove();
        },

        _destroy: function _destroy() {
            var contents;

            // Clean up main element
            this.element.removeAttr("role");

            // Clean up headers
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();

            this._destroyIcons();

            // Clean up content panels
            contents = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();

            if (this.options.heightStyle !== "content") {
                contents.css("height", "");
            }
        },

        _setOption: function _setOption(key, value) {
            if (key === "active") {

                // _activate() will handle invalid values and update this.options
                this._activate(value);
                return;
            }

            if (key === "event") {
                if (this.options.event) {
                    this._off(this.headers, this.options.event);
                }
                this._setupEvents(value);
            }

            this._super(key, value);

            // Setting collapsible: false while collapsed; open first panel
            if (key === "collapsible" && !value && this.options.active === false) {
                this._activate(0);
            }

            if (key === "icons") {
                this._destroyIcons();
                if (value) {
                    this._createIcons();
                }
            }
        },

        _setOptionDisabled: function _setOptionDisabled(value) {
            this._super(value);

            this.element.attr("aria-disabled", value);

            // Support: IE8 Only
            // #5332 / #6059 - opacity doesn't cascade to positioned elements in IE
            // so we need to add the disabled class to the headers and panels
            this._toggleClass(null, "ui-state-disabled", !!value);
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!value);
        },

        _keydown: function _keydown(event) {
            if (event.altKey || event.ctrlKey) {
                return;
            }

            var keyCode = $.ui.keyCode,
                length = this.headers.length,
                currentIndex = this.headers.index(event.target),
                toFocus = false;

            switch (event.keyCode) {
                case keyCode.RIGHT:
                case keyCode.DOWN:
                    toFocus = this.headers[(currentIndex + 1) % length];
                    break;
                case keyCode.LEFT:
                case keyCode.UP:
                    toFocus = this.headers[(currentIndex - 1 + length) % length];
                    break;
                case keyCode.SPACE:
                case keyCode.ENTER:
                    this._eventHandler(event);
                    break;
                case keyCode.HOME:
                    toFocus = this.headers[0];
                    break;
                case keyCode.END:
                    toFocus = this.headers[length - 1];
                    break;
            }

            if (toFocus) {
                $(event.target).attr("tabIndex", -1);
                $(toFocus).attr("tabIndex", 0);
                $(toFocus).trigger("focus");
                event.preventDefault();
            }
        },

        _panelKeyDown: function _panelKeyDown(event) {
            if (event.keyCode === $.ui.keyCode.UP && event.ctrlKey) {
                $(event.currentTarget).prev().trigger("focus");
            }
        },

        refresh: function refresh() {
            var options = this.options;
            this._processPanels();

            // Was collapsed or no panel
            if (options.active === false && options.collapsible === true || !this.headers.length) {
                options.active = false;
                this.active = $();

                // active false only when collapsible is true
            } else if (options.active === false) {
                this._activate(0);

                // was active, but active panel is gone
            } else if (this.active.length && !$.contains(this.element[0], this.active[0])) {

                // all remaining panel are disabled
                if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
                    options.active = false;
                    this.active = $();

                    // activate previous panel
                } else {
                    this._activate(Math.max(0, options.active - 1));
                }

                // was active, active panel still exists
            } else {

                // make sure active index is correct
                options.active = this.headers.index(this.active);
            }

            this._destroyIcons();

            this._refresh();
        },

        _processPanels: function _processPanels() {
            var prevHeaders = this.headers,
                prevPanels = this.panels;

            this.headers = this.element.find(this.options.header);
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default");

            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content");

            // Avoid memory leaks (#10056)
            if (prevPanels) {
                this._off(prevHeaders.not(this.headers));
                this._off(prevPanels.not(this.panels));
            }
        },

        _refresh: function _refresh() {
            var maxHeight,
                options = this.options,
                heightStyle = options.heightStyle,
                parent = this.element.parent();

            this.active = this._findActive(options.active);
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed");
            this._addClass(this.active.next(), "ui-accordion-content-active");
            this.active.next().show();

            this.headers.attr("role", "tab").each(function () {
                var header = $(this),
                    headerId = header.uniqueId().attr("id"),
                    panel = header.next(),
                    panelId = panel.uniqueId().attr("id");
                header.attr("aria-controls", panelId);
                panel.attr("aria-labelledby", headerId);
            }).next().attr("role", "tabpanel");

            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide();

            // Make sure at least one header is in the tab order
            if (!this.active.length) {
                this.headers.eq(0).attr("tabIndex", 0);
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                });
            }

            this._createIcons();

            this._setupEvents(options.event);

            if (heightStyle === "fill") {
                maxHeight = parent.height();
                this.element.siblings(":visible").each(function () {
                    var elem = $(this),
                        position = elem.css("position");

                    if (position === "absolute" || position === "fixed") {
                        return;
                    }
                    maxHeight -= elem.outerHeight(true);
                });

                this.headers.each(function () {
                    maxHeight -= $(this).outerHeight(true);
                });

                this.headers.next().each(function () {
                    $(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()));
                }).css("overflow", "auto");
            } else if (heightStyle === "auto") {
                maxHeight = 0;
                this.headers.next().each(function () {
                    var isVisible = $(this).is(":visible");
                    if (!isVisible) {
                        $(this).show();
                    }
                    maxHeight = Math.max(maxHeight, $(this).css("height", "").height());
                    if (!isVisible) {
                        $(this).hide();
                    }
                }).height(maxHeight);
            }
        },

        _activate: function _activate(index) {
            var active = this._findActive(index)[0];

            // Trying to activate the already active panel
            if (active === this.active[0]) {
                return;
            }

            // Trying to collapse, simulate a click on the currently active header
            active = active || this.active[0];

            this._eventHandler({
                target: active,
                currentTarget: active,
                preventDefault: $.noop
            });
        },

        _findActive: function _findActive(selector) {
            return typeof selector === "number" ? this.headers.eq(selector) : $();
        },

        _setupEvents: function _setupEvents(event) {
            var events = {
                keydown: "_keydown"
            };
            if (event) {
                $.each(event.split(" "), function (index, eventName) {
                    events[eventName] = "_eventHandler";
                });
            }

            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, events);
            this._on(this.headers.next(), { keydown: "_panelKeyDown" });
            this._hoverable(this.headers);
            this._focusable(this.headers);
        },

        _eventHandler: function _eventHandler(event) {
            var activeChildren,
                clickedChildren,
                options = this.options,
                active = this.active,
                clicked = $(event.currentTarget),
                clickedIsActive = clicked[0] === active[0],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : clicked.next(),
                toHide = active.next(),
                eventData = {
                oldHeader: active,
                oldPanel: toHide,
                newHeader: collapsing ? $() : clicked,
                newPanel: toShow
            };

            event.preventDefault();

            if (

            // click on active header, but not collapsible
            clickedIsActive && !options.collapsible ||

            // allow canceling activation
            this._trigger("beforeActivate", event, eventData) === false) {
                return;
            }

            options.active = collapsing ? false : this.headers.index(clicked);

            // When the call to ._toggle() comes after the class changes
            // it causes a very odd bug in IE 8 (see #6720)
            this.active = clickedIsActive ? $() : clicked;
            this._toggle(eventData);

            // Switch classes
            // corner classes on the previously active header stay after the animation
            this._removeClass(active, "ui-accordion-header-active", "ui-state-active");
            if (options.icons) {
                activeChildren = active.children(".ui-accordion-header-icon");
                this._removeClass(activeChildren, null, options.icons.activeHeader)._addClass(activeChildren, null, options.icons.header);
            }

            if (!clickedIsActive) {
                this._removeClass(clicked, "ui-accordion-header-collapsed")._addClass(clicked, "ui-accordion-header-active", "ui-state-active");
                if (options.icons) {
                    clickedChildren = clicked.children(".ui-accordion-header-icon");
                    this._removeClass(clickedChildren, null, options.icons.header)._addClass(clickedChildren, null, options.icons.activeHeader);
                }

                this._addClass(clicked.next(), "ui-accordion-content-active");
            }
        },

        _toggle: function _toggle(data) {
            var toShow = data.newPanel,
                toHide = this.prevShow.length ? this.prevShow : data.oldPanel;

            // Handle activating a panel during the animation for another activation
            this.prevShow.add(this.prevHide).stop(true, true);
            this.prevShow = toShow;
            this.prevHide = toHide;

            if (this.options.animate) {
                this._animate(toShow, toHide, data);
            } else {
                toHide.hide();
                toShow.show();
                this._toggleComplete(data);
            }

            toHide.attr({
                "aria-hidden": "true"
            });
            toHide.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });

            // if we're switching panels, remove the old header from the tab order
            // if we're opening from collapsed state, remove the previous header from the tab order
            // if we're collapsing, then keep the collapsing header in the tab order
            if (toShow.length && toHide.length) {
                toHide.prev().attr({
                    "tabIndex": -1,
                    "aria-expanded": "false"
                });
            } else if (toShow.length) {
                this.headers.filter(function () {
                    return parseInt($(this).attr("tabIndex"), 10) === 0;
                }).attr("tabIndex", -1);
            }

            toShow.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },

        _animate: function _animate(toShow, toHide, data) {
            var total,
                easing,
                duration,
                that = this,
                adjust = 0,
                boxSizing = toShow.css("box-sizing"),
                down = toShow.length && (!toHide.length || toShow.index() < toHide.index()),
                animate = this.options.animate || {},
                options = down && animate.down || animate,
                complete = function complete() {
                that._toggleComplete(data);
            };

            if (typeof options === "number") {
                duration = options;
            }
            if (typeof options === "string") {
                easing = options;
            }

            // fall back from options to animation in case of partial down settings
            easing = easing || options.easing || animate.easing;
            duration = duration || options.duration || animate.duration;

            if (!toHide.length) {
                return toShow.animate(this.showProps, duration, easing, complete);
            }
            if (!toShow.length) {
                return toHide.animate(this.hideProps, duration, easing, complete);
            }

            total = toShow.show().outerHeight();
            toHide.animate(this.hideProps, {
                duration: duration,
                easing: easing,
                step: function step(now, fx) {
                    fx.now = Math.round(now);
                }
            });
            toShow.hide().animate(this.showProps, {
                duration: duration,
                easing: easing,
                complete: complete,
                step: function step(now, fx) {
                    fx.now = Math.round(now);
                    if (fx.prop !== "height") {
                        if (boxSizing === "content-box") {
                            adjust += fx.now;
                        }
                    } else if (that.options.heightStyle !== "content") {
                        fx.now = Math.round(total - toHide.outerHeight() - adjust);
                        adjust = 0;
                    }
                }
            });
        },

        _toggleComplete: function _toggleComplete(data) {
            var toHide = data.oldPanel,
                prev = toHide.prev();

            this._removeClass(toHide, "ui-accordion-content-active");
            this._removeClass(prev, "ui-accordion-header-active")._addClass(prev, "ui-accordion-header-collapsed");

            // Work around for rendering bug in IE (#5421)
            if (toHide.length) {
                toHide.parent()[0].className = toHide.parent()[0].className;
            }
            this._trigger("activate", null, data);
        }
    });

    // jscs:disable maximumLineLength
    /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
    /*!
     * jQuery UI Datepicker 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Datepicker
    //>>group: Widgets
    //>>description: Displays a calendar from an input or inline for selecting dates.
    //>>docs: http://api.jqueryui.com/datepicker/
    //>>demos: http://jqueryui.com/datepicker/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/datepicker.css
    //>>css.theme: ../../themes/base/theme.css


    $.extend($.ui, { datepicker: { version: "1.12.1" } });

    var datepicker_instActive;

    function datepicker_getZindex(elem) {
        var position, value;
        while (elem.length && elem[0] !== document) {

            // Ignore z-index if position is set to a value where z-index is ignored by the browser
            // This makes behavior of this function consistent across browsers
            // WebKit always returns auto if the element is positioned
            position = elem.css("position");
            if (position === "absolute" || position === "relative" || position === "fixed") {

                // IE returns 0 when zIndex is not specified
                // other browsers return a string
                // we ignore the case of nested elements with an explicit value of 0
                // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
                value = parseInt(elem.css("zIndex"), 10);
                if (!isNaN(value) && value !== 0) {
                    return value;
                }
            }
            elem = elem.parent();
        }

        return 0;
    }
    /* Date picker manager.
     Use the singleton instance of this class, $.datepicker, to interact with the date picker.
     Settings for (groups of) date pickers are maintained in an instance object,
     allowing multiple different settings on the same page. */

    function Datepicker() {
        this._curInst = null; // The current instance in use
        this._keyEvent = false; // If the last event was a key event
        this._disabledInputs = []; // List of date picker inputs that have been disabled
        this._datepickerShowing = false; // True if the popup picker is showing , false if not
        this._inDialog = false; // True if showing within a "dialog", false if not
        this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
        this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
        this._appendClass = "ui-datepicker-append"; // The name of the append marker class
        this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
        this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
        this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
        this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
        this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
        this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
        this.regional = []; // Available regional settings, indexed by language code
        this.regional[""] = { // Default regional settings
            closeText: "Done", // Display text for close link
            prevText: "Prev", // Display text for previous month link
            nextText: "Next", // Display text for next month link
            currentText: "Today", // Display text for current month link
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], // Names of months for drop-down and formatting
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // For formatting
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], // For formatting
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], // For formatting
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], // Column headings for days starting at Sunday
            weekHeader: "Wk", // Column header for week of the year
            dateFormat: "mm/dd/yy", // See format options on parseDate
            firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
            isRTL: false, // True if right-to-left language, false if left-to-right
            showMonthAfterYear: false, // True if the year select precedes month, false for month then year
            yearSuffix: "" // Additional text to append to the year in the month headers
        };
        this._defaults = { // Global defaults for all the date picker instances
            showOn: "focus", // "focus" for popup on focus,
            // "button" for trigger button, or "both" for either
            showAnim: "fadeIn", // Name of jQuery animation for popup
            showOptions: {}, // Options for enhanced animations
            defaultDate: null, // Used when field is blank: actual date,
            // +/-number for offset from today, null for today
            appendText: "", // Display text following the input box, e.g. showing the format
            buttonText: "...", // Text for trigger button
            buttonImage: "", // URL for trigger button image
            buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
            hideIfNoPrevNext: false, // True to hide next/previous month links
            // if not applicable, false to just disable them
            navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
            gotoCurrent: false, // True if today link goes back to current selection instead
            changeMonth: false, // True if month can be selected directly, false if only prev/next
            changeYear: false, // True if year can be selected directly, false if only prev/next
            yearRange: "c-10:c+10", // Range of years to display in drop-down,
            // either relative to today's year (-nn:+nn), relative to currently displayed year
            // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
            showOtherMonths: false, // True to show dates in other months, false to leave blank
            selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
            showWeek: false, // True to show week of the year, false to not show it
            calculateWeek: this.iso8601Week, // How to calculate the week of the year,
            // takes a Date and returns the number of the week for it
            shortYearCutoff: "+10", // Short year values < this are in the current century,
            // > this are in the previous century,
            // string value starting with "+" for current year + value
            minDate: null, // The earliest selectable date, or null for no limit
            maxDate: null, // The latest selectable date, or null for no limit
            duration: "fast", // Duration of display/closure
            beforeShowDay: null, // Function that takes a date and returns an array with
            // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
            // [2] = cell title (optional), e.g. $.datepicker.noWeekends
            beforeShow: null, // Function that takes an input field and
            // returns a set of custom settings for the date picker
            onSelect: null, // Define a callback function when a date is selected
            onChangeMonthYear: null, // Define a callback function when the month or year is changed
            onClose: null, // Define a callback function when the datepicker is closed
            numberOfMonths: 1, // Number of months to show at a time
            showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
            stepMonths: 1, // Number of months to step back/forward
            stepBigMonths: 12, // Number of months to step back/forward for the big links
            altField: "", // Selector for an alternate field to store selected dates into
            altFormat: "", // The date format to use for the alternate field
            constrainInput: true, // The input is constrained by the current date format
            showButtonPanel: false, // True to show button panel, false to not show it
            autoSize: false, // True to size the input for the date format, false to leave as is
            disabled: false // The initial disabled state
        };
        $.extend(this._defaults, this.regional[""]);
        this.regional.en = $.extend(true, {}, this.regional[""]);
        this.regional["en-US"] = $.extend(true, {}, this.regional.en);
        this.dpDiv = datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }

    $.extend(Datepicker.prototype, {
        /* Class name added to elements to indicate already configured with a date picker. */
        markerClassName: "hasDatepicker",

        //Keep track of the maximum number of rows displayed (see #7043)
        maxRows: 4,

        // TODO rename to "widget" when switching to widget factory
        _widgetDatepicker: function _widgetDatepicker() {
            return this.dpDiv;
        },

        /* Override the default settings for all instances of the date picker.
         * @param  settings  object - the new settings to use as defaults (anonymous object)
         * @return the manager object
         */
        setDefaults: function setDefaults(settings) {
            datepicker_extendRemove(this._defaults, settings || {});
            return this;
        },

        /* Attach the date picker to a jQuery selection.
         * @param  target	element - the target input field or division or span
         * @param  settings  object - the new settings to use for this date picker instance (anonymous)
         */
        _attachDatepicker: function _attachDatepicker(target, settings) {
            var nodeName, inline, inst;
            nodeName = target.nodeName.toLowerCase();
            inline = nodeName === "div" || nodeName === "span";
            if (!target.id) {
                this.uuid += 1;
                target.id = "dp" + this.uuid;
            }
            inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {});
            if (nodeName === "input") {
                this._connectDatepicker(target, inst);
            } else if (inline) {
                this._inlineDatepicker(target, inst);
            }
        },

        /* Create a new instance object. */
        _newInst: function _newInst(target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); // escape jQuery meta chars
            return { id: id, input: target, // associated target
                selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
                drawMonth: 0, drawYear: 0, // month being drawn
                inline: inline, // is datepicker inline or not
                dpDiv: !inline ? this.dpDiv : // presentation div
                datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) };
        },

        /* Attach the date picker to an input field. */
        _connectDatepicker: function _connectDatepicker(target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName)) {
                return;
            }
            this._attachments(input, inst);
            input.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp);
            this._autoSize(inst);
            $.data(target, "datepicker", inst);

            //If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
            if (inst.settings.disabled) {
                this._disableDatepicker(target);
            }
        },

        /* Make attachments based on settings. */
        _attachments: function _attachments(input, inst) {
            var showOn,
                buttonText,
                buttonImage,
                appendText = this._get(inst, "appendText"),
                isRTL = this._get(inst, "isRTL");

            if (inst.append) {
                inst.append.remove();
            }
            if (appendText) {
                inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
                input[isRTL ? "before" : "after"](inst.append);
            }

            input.off("focus", this._showDatepicker);

            if (inst.trigger) {
                inst.trigger.remove();
            }

            showOn = this._get(inst, "showOn");
            if (showOn === "focus" || showOn === "both") {
                // pop-up date picker when in the marked field
                input.on("focus", this._showDatepicker);
            }
            if (showOn === "button" || showOn === "both") {
                // pop-up date picker when button clicked
                buttonText = this._get(inst, "buttonText");
                buttonImage = this._get(inst, "buttonImage");
                inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({ src: buttonImage, alt: buttonText, title: buttonText }) : $("<button type='button'></button>").addClass(this._triggerClass).html(!buttonImage ? buttonText : $("<img/>").attr({ src: buttonImage, alt: buttonText, title: buttonText })));
                input[isRTL ? "before" : "after"](inst.trigger);
                inst.trigger.on("click", function () {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
                        $.datepicker._hideDatepicker();
                    } else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
                        $.datepicker._hideDatepicker();
                        $.datepicker._showDatepicker(input[0]);
                    } else {
                        $.datepicker._showDatepicker(input[0]);
                    }
                    return false;
                });
            }
        },

        /* Apply the maximum length for the date format. */
        _autoSize: function _autoSize(inst) {
            if (this._get(inst, "autoSize") && !inst.inline) {
                var findMax,
                    max,
                    maxI,
                    i,
                    date = new Date(2009, 12 - 1, 20),
                    // Ensure double digits
                dateFormat = this._get(inst, "dateFormat");

                if (dateFormat.match(/[DM]/)) {
                    findMax = function findMax(names) {
                        max = 0;
                        maxI = 0;
                        for (i = 0; i < names.length; i++) {
                            if (names[i].length > max) {
                                max = names[i].length;
                                maxI = i;
                            }
                        }
                        return maxI;
                    };
                    date.setMonth(findMax(this._get(inst, dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort")));
                    date.setDate(findMax(this._get(inst, dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - date.getDay());
                }
                inst.input.attr("size", this._formatDate(inst, date).length);
            }
        },

        /* Attach an inline date picker to a div. */
        _inlineDatepicker: function _inlineDatepicker(target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName)) {
                return;
            }
            divSpan.addClass(this.markerClassName).append(inst.dpDiv);
            $.data(target, "datepicker", inst);
            this._setDate(inst, this._getDefaultDate(inst), true);
            this._updateDatepicker(inst);
            this._updateAlternate(inst);

            //If disabled option is true, disable the datepicker before showing it (see ticket #5665)
            if (inst.settings.disabled) {
                this._disableDatepicker(target);
            }

            // Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
            // http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
            inst.dpDiv.css("display", "block");
        },

        /* Pop-up the date picker in a "dialog" box.
         * @param  input element - ignored
         * @param  date	string or Date - the initial date to display
         * @param  onSelect  function - the function to call when a date is selected
         * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
         * @param  pos int[2] - coordinates for the dialog's position within the screen or
         *					event - with x/y coordinates or
         *					leave empty for default (screen centre)
         * @return the manager object
         */
        _dialogDatepicker: function _dialogDatepicker(input, date, onSelect, settings, pos) {
            var id,
                browserWidth,
                browserHeight,
                scrollX,
                scrollY,
                inst = this._dialogInst; // internal instance

            if (!inst) {
                this.uuid += 1;
                id = "dp" + this.uuid;
                this._dialogInput = $("<input type='text' id='" + id + "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.on("keydown", this._doKeyDown);
                $("body").append(this._dialogInput);
                inst = this._dialogInst = this._newInst(this._dialogInput, false);
                inst.settings = {};
                $.data(this._dialogInput[0], "datepicker", inst);
            }
            datepicker_extendRemove(inst.settings, settings || {});
            date = date && date.constructor === Date ? this._formatDate(inst, date) : date;
            this._dialogInput.val(date);

            this._pos = pos ? pos.length ? pos : [pos.pageX, pos.pageY] : null;
            if (!this._pos) {
                browserWidth = document.documentElement.clientWidth;
                browserHeight = document.documentElement.clientHeight;
                scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = // should use actual width/height below
                [browserWidth / 2 - 100 + scrollX, browserHeight / 2 - 150 + scrollY];
            }

            // Move input on screen for focus, but hidden behind dialog
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
            inst.settings.onSelect = onSelect;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI) {
                $.blockUI(this.dpDiv);
            }
            $.data(this._dialogInput[0], "datepicker", inst);
            return this;
        },

        /* Detach a datepicker from its control.
         * @param  target	element - the target input field or division or span
         */
        _destroyDatepicker: function _destroyDatepicker(target) {
            var nodeName,
                $target = $(target),
                inst = $.data(target, "datepicker");

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            $.removeData(target, "datepicker");
            if (nodeName === "input") {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp);
            } else if (nodeName === "div" || nodeName === "span") {
                $target.removeClass(this.markerClassName).empty();
            }

            if (datepicker_instActive === inst) {
                datepicker_instActive = null;
            }
        },

        /* Enable the date picker to a jQuery selection.
         * @param  target	element - the target input field or division or span
         */
        _enableDatepicker: function _enableDatepicker(target) {
            var nodeName,
                inline,
                $target = $(target),
                inst = $.data(target, "datepicker");

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            if (nodeName === "input") {
                target.disabled = false;
                inst.trigger.filter("button").each(function () {
                    this.disabled = false;
                }).end().filter("img").css({ opacity: "1.0", cursor: "" });
            } else if (nodeName === "div" || nodeName === "span") {
                inline = $target.children("." + this._inlineClass);
                inline.children().removeClass("ui-state-disabled");
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false);
            }
            this._disabledInputs = $.map(this._disabledInputs, function (value) {
                return value === target ? null : value;
            }); // delete entry
        },

        /* Disable the date picker to a jQuery selection.
         * @param  target	element - the target input field or division or span
         */
        _disableDatepicker: function _disableDatepicker(target) {
            var nodeName,
                inline,
                $target = $(target),
                inst = $.data(target, "datepicker");

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }

            nodeName = target.nodeName.toLowerCase();
            if (nodeName === "input") {
                target.disabled = true;
                inst.trigger.filter("button").each(function () {
                    this.disabled = true;
                }).end().filter("img").css({ opacity: "0.5", cursor: "default" });
            } else if (nodeName === "div" || nodeName === "span") {
                inline = $target.children("." + this._inlineClass);
                inline.children().addClass("ui-state-disabled");
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true);
            }
            this._disabledInputs = $.map(this._disabledInputs, function (value) {
                return value === target ? null : value;
            }); // delete entry
            this._disabledInputs[this._disabledInputs.length] = target;
        },

        /* Is the first field in a jQuery collection disabled as a datepicker?
         * @param  target	element - the target input field or division or span
         * @return boolean - true if disabled, false if enabled
         */
        _isDisabledDatepicker: function _isDisabledDatepicker(target) {
            if (!target) {
                return false;
            }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] === target) {
                    return true;
                }
            }
            return false;
        },

        /* Retrieve the instance data for the target control.
         * @param  target  element - the target input field or division or span
         * @return  object - the associated instance data
         * @throws  error if a jQuery problem getting data
         */
        _getInst: function _getInst(target) {
            try {
                return $.data(target, "datepicker");
            } catch (err) {
                throw "Missing instance data for this datepicker";
            }
        },

        /* Update or retrieve the settings for a date picker attached to an input field or division.
         * @param  target  element - the target input field or division or span
         * @param  name	object - the new settings to update or
         *				string - the name of the setting to change or retrieve,
         *				when retrieving also "all" for all instance settings or
         *				"defaults" for all global defaults
         * @param  value   any - the new value for the setting
         *				(omit if above is an object or to retrieve a value)
         */
        _optionDatepicker: function _optionDatepicker(target, name, value) {
            var settings,
                date,
                minDate,
                maxDate,
                inst = this._getInst(target);

            if (arguments.length === 2 && typeof name === "string") {
                return name === "defaults" ? $.extend({}, $.datepicker._defaults) : inst ? name === "all" ? $.extend({}, inst.settings) : this._get(inst, name) : null;
            }

            settings = name || {};
            if (typeof name === "string") {
                settings = {};
                settings[name] = value;
            }

            if (inst) {
                if (this._curInst === inst) {
                    this._hideDatepicker();
                }

                date = this._getDateDatepicker(target, true);
                minDate = this._getMinMaxDate(inst, "min");
                maxDate = this._getMinMaxDate(inst, "max");
                datepicker_extendRemove(inst.settings, settings);

                // reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
                if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
                    inst.settings.minDate = this._formatDate(inst, minDate);
                }
                if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
                    inst.settings.maxDate = this._formatDate(inst, maxDate);
                }
                if ("disabled" in settings) {
                    if (settings.disabled) {
                        this._disableDatepicker(target);
                    } else {
                        this._enableDatepicker(target);
                    }
                }
                this._attachments($(target), inst);
                this._autoSize(inst);
                this._setDate(inst, date);
                this._updateAlternate(inst);
                this._updateDatepicker(inst);
            }
        },

        // Change method deprecated
        _changeDatepicker: function _changeDatepicker(target, name, value) {
            this._optionDatepicker(target, name, value);
        },

        /* Redraw the date picker attached to an input field or division.
         * @param  target  element - the target input field or division or span
         */
        _refreshDatepicker: function _refreshDatepicker(target) {
            var inst = this._getInst(target);
            if (inst) {
                this._updateDatepicker(inst);
            }
        },

        /* Set the dates for a jQuery selection.
         * @param  target element - the target input field or division or span
         * @param  date	Date - the new date
         */
        _setDateDatepicker: function _setDateDatepicker(target, date) {
            var inst = this._getInst(target);
            if (inst) {
                this._setDate(inst, date);
                this._updateDatepicker(inst);
                this._updateAlternate(inst);
            }
        },

        /* Get the date(s) for the first entry in a jQuery selection.
         * @param  target element - the target input field or division or span
         * @param  noDefault boolean - true if no default date is to be used
         * @return Date - the current date
         */
        _getDateDatepicker: function _getDateDatepicker(target, noDefault) {
            var inst = this._getInst(target);
            if (inst && !inst.inline) {
                this._setDateFromField(inst, noDefault);
            }
            return inst ? this._getDate(inst) : null;
        },

        /* Handle keystrokes. */
        _doKeyDown: function _doKeyDown(event) {
            var onSelect,
                dateStr,
                sel,
                inst = $.datepicker._getInst(event.target),
                handled = true,
                isRTL = inst.dpDiv.is(".ui-datepicker-rtl");

            inst._keyEvent = true;
            if ($.datepicker._datepickerShowing) {
                switch (event.keyCode) {
                    case 9:
                        $.datepicker._hideDatepicker();
                        handled = false;
                        break; // hide on tab out
                    case 13:
                        sel = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", inst.dpDiv);
                        if (sel[0]) {
                            $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
                        }

                        onSelect = $.datepicker._get(inst, "onSelect");
                        if (onSelect) {
                            dateStr = $.datepicker._formatDate(inst);

                            // Trigger custom callback
                            onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]);
                        } else {
                            $.datepicker._hideDatepicker();
                        }

                        return false; // don't submit the form
                    case 27:
                        $.datepicker._hideDatepicker();
                        break; // hide on escape
                    case 33:
                        $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths"), "M");
                        break; // previous month/year on page up/+ ctrl
                    case 34:
                        $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths"), "M");
                        break; // next month/year on page down/+ ctrl
                    case 35:
                        if (event.ctrlKey || event.metaKey) {
                            $.datepicker._clearDate(event.target);
                        }
                        handled = event.ctrlKey || event.metaKey;
                        break; // clear on ctrl or command +end
                    case 36:
                        if (event.ctrlKey || event.metaKey) {
                            $.datepicker._gotoToday(event.target);
                        }
                        handled = event.ctrlKey || event.metaKey;
                        break; // current on ctrl or command +home
                    case 37:
                        if (event.ctrlKey || event.metaKey) {
                            $.datepicker._adjustDate(event.target, isRTL ? +1 : -1, "D");
                        }
                        handled = event.ctrlKey || event.metaKey;

                        // -1 day on ctrl or command +left
                        if (event.originalEvent.altKey) {
                            $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths"), "M");
                        }

                        // next month/year on alt +left on Mac
                        break;
                    case 38:
                        if (event.ctrlKey || event.metaKey) {
                            $.datepicker._adjustDate(event.target, -7, "D");
                        }
                        handled = event.ctrlKey || event.metaKey;
                        break; // -1 week on ctrl or command +up
                    case 39:
                        if (event.ctrlKey || event.metaKey) {
                            $.datepicker._adjustDate(event.target, isRTL ? -1 : +1, "D");
                        }
                        handled = event.ctrlKey || event.metaKey;

                        // +1 day on ctrl or command +right
                        if (event.originalEvent.altKey) {
                            $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths"), "M");
                        }

                        // next month/year on alt +right
                        break;
                    case 40:
                        if (event.ctrlKey || event.metaKey) {
                            $.datepicker._adjustDate(event.target, +7, "D");
                        }
                        handled = event.ctrlKey || event.metaKey;
                        break; // +1 week on ctrl or command +down
                    default:
                        handled = false;
                }
            } else if (event.keyCode === 36 && event.ctrlKey) {
                // display the date picker on ctrl+home
                $.datepicker._showDatepicker(this);
            } else {
                handled = false;
            }

            if (handled) {
                event.preventDefault();
                event.stopPropagation();
            }
        },

        /* Filter entered characters - based on date format. */
        _doKeyPress: function _doKeyPress(event) {
            var chars,
                chr,
                inst = $.datepicker._getInst(event.target);

            if ($.datepicker._get(inst, "constrainInput")) {
                chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
                chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
                return event.ctrlKey || event.metaKey || chr < " " || !chars || chars.indexOf(chr) > -1;
            }
        },

        /* Synchronise manual entry and field/alternate field. */
        _doKeyUp: function _doKeyUp(event) {
            var date,
                inst = $.datepicker._getInst(event.target);

            if (inst.input.val() !== inst.lastVal) {
                try {
                    date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), inst.input ? inst.input.val() : null, $.datepicker._getFormatConfig(inst));

                    if (date) {
                        // only if valid
                        $.datepicker._setDateFromField(inst);
                        $.datepicker._updateAlternate(inst);
                        $.datepicker._updateDatepicker(inst);
                    }
                } catch (err) {}
            }
            return true;
        },

        /* Pop-up the date picker for a given input field.
         * If false returned from beforeShow event handler do not show.
         * @param  input  element - the input field attached to the date picker or
         *					event - if triggered by focus
         */
        _showDatepicker: function _showDatepicker(input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() !== "input") {
                // find from button/image trigger
                input = $("input", input.parentNode)[0];
            }

            if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) {
                // already here
                return;
            }

            var inst, beforeShow, beforeShowSettings, isFixed, offset, showAnim, duration;

            inst = $.datepicker._getInst(input);
            if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
                $.datepicker._curInst.dpDiv.stop(true, true);
                if (inst && $.datepicker._datepickerShowing) {
                    $.datepicker._hideDatepicker($.datepicker._curInst.input[0]);
                }
            }

            beforeShow = $.datepicker._get(inst, "beforeShow");
            beforeShowSettings = beforeShow ? beforeShow.apply(input, [input, inst]) : {};
            if (beforeShowSettings === false) {
                return;
            }
            datepicker_extendRemove(inst.settings, beforeShowSettings);

            inst.lastVal = null;
            $.datepicker._lastInput = input;
            $.datepicker._setDateFromField(inst);

            if ($.datepicker._inDialog) {
                // hide cursor
                input.value = "";
            }
            if (!$.datepicker._pos) {
                // position below input
                $.datepicker._pos = $.datepicker._findPos(input);
                $.datepicker._pos[1] += input.offsetHeight; // add the height
            }

            isFixed = false;
            $(input).parents().each(function () {
                isFixed |= $(this).css("position") === "fixed";
                return !isFixed;
            });

            offset = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] };
            $.datepicker._pos = null;

            //to avoid flashes on Firefox
            inst.dpDiv.empty();

            // determine sizing offscreen
            inst.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" });
            $.datepicker._updateDatepicker(inst);

            // fix width for dynamic number of date pickers
            // and adjust position before showing
            offset = $.datepicker._checkOffset(inst, offset, isFixed);
            inst.dpDiv.css({ position: $.datepicker._inDialog && $.blockUI ? "static" : isFixed ? "fixed" : "absolute", display: "none",
                left: offset.left + "px", top: offset.top + "px" });

            if (!inst.inline) {
                showAnim = $.datepicker._get(inst, "showAnim");
                duration = $.datepicker._get(inst, "duration");
                inst.dpDiv.css("z-index", datepicker_getZindex($(input)) + 1);
                $.datepicker._datepickerShowing = true;

                if ($.effects && $.effects.effect[showAnim]) {
                    inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
                } else {
                    inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
                }

                if ($.datepicker._shouldFocusInput(inst)) {
                    inst.input.trigger("focus");
                }

                $.datepicker._curInst = inst;
            }
        },

        /* Generate the date picker content. */
        _updateDatepicker: function _updateDatepicker(inst) {
            this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
            datepicker_instActive = inst; // for delegate hover events
            inst.dpDiv.empty().append(this._generateHTML(inst));
            this._attachHandlers(inst);

            var origyearshtml,
                numMonths = this._getNumberOfMonths(inst),
                cols = numMonths[1],
                width = 17,
                activeCell = inst.dpDiv.find("." + this._dayOverClass + " a");

            if (activeCell.length > 0) {
                datepicker_handleMouseover.apply(activeCell.get(0));
            }

            inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (cols > 1) {
                inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", width * cols + "em");
            }
            inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");

            if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(inst)) {
                inst.input.trigger("focus");
            }

            // Deffered render of the years select (to avoid flashes on Firefox)
            if (inst.yearshtml) {
                origyearshtml = inst.yearshtml;
                setTimeout(function () {

                    //assure that inst.yearshtml didn't change.
                    if (origyearshtml === inst.yearshtml && inst.yearshtml) {
                        inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
                    }
                    origyearshtml = inst.yearshtml = null;
                }, 0);
            }
        },

        // #6694 - don't focus the input if it's already focused
        // this breaks the change event in IE
        // Support: IE and jQuery <1.9
        _shouldFocusInput: function _shouldFocusInput(inst) {
            return inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && !inst.input.is(":focus");
        },

        /* Check positioning to remain on screen. */
        _checkOffset: function _checkOffset(inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth(),
                dpHeight = inst.dpDiv.outerHeight(),
                inputWidth = inst.input ? inst.input.outerWidth() : 0,
                inputHeight = inst.input ? inst.input.outerHeight() : 0,
                viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()),
                viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());

            offset.left -= this._get(inst, "isRTL") ? dpWidth - inputWidth : 0;
            offset.left -= isFixed && offset.left === inst.input.offset().left ? $(document).scrollLeft() : 0;
            offset.top -= isFixed && offset.top === inst.input.offset().top + inputHeight ? $(document).scrollTop() : 0;

            // Now check if datepicker is showing outside window viewport - move to a better place if so.
            offset.left -= Math.min(offset.left, offset.left + dpWidth > viewWidth && viewWidth > dpWidth ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, offset.top + dpHeight > viewHeight && viewHeight > dpHeight ? Math.abs(dpHeight + inputHeight) : 0);

            return offset;
        },

        /* Find an object's position on the screen. */
        _findPos: function _findPos(obj) {
            var position,
                inst = this._getInst(obj),
                isRTL = this._get(inst, "isRTL");

            while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
                obj = obj[isRTL ? "previousSibling" : "nextSibling"];
            }

            position = $(obj).offset();
            return [position.left, position.top];
        },

        /* Hide the date picker from view.
         * @param  input  element - the input field attached to the date picker
         */
        _hideDatepicker: function _hideDatepicker(input) {
            var showAnim,
                duration,
                postProcess,
                onClose,
                inst = this._curInst;

            if (!inst || input && inst !== $.data(input, "datepicker")) {
                return;
            }

            if (this._datepickerShowing) {
                showAnim = this._get(inst, "showAnim");
                duration = this._get(inst, "duration");
                postProcess = function postProcess() {
                    $.datepicker._tidyDialog(inst);
                };

                // DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
                if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) {
                    inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
                } else {
                    inst.dpDiv[showAnim === "slideDown" ? "slideUp" : showAnim === "fadeIn" ? "fadeOut" : "hide"](showAnim ? duration : null, postProcess);
                }

                if (!showAnim) {
                    postProcess();
                }
                this._datepickerShowing = false;

                onClose = this._get(inst, "onClose");
                if (onClose) {
                    onClose.apply(inst.input ? inst.input[0] : null, [inst.input ? inst.input.val() : "", inst]);
                }

                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" });
                    if ($.blockUI) {
                        $.unblockUI();
                        $("body").append(this.dpDiv);
                    }
                }
                this._inDialog = false;
            }
        },

        /* Tidy up after a dialog display. */
        _tidyDialog: function _tidyDialog(inst) {
            inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },

        /* Close date picker if clicked elsewhere. */
        _checkExternalClick: function _checkExternalClick(event) {
            if (!$.datepicker._curInst) {
                return;
            }

            var $target = $(event.target),
                inst = $.datepicker._getInst($target[0]);

            if ($target[0].id !== $.datepicker._mainDivId && $target.parents("#" + $.datepicker._mainDivId).length === 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) || $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst) {
                $.datepicker._hideDatepicker();
            }
        },

        /* Adjust one of the date sub-fields. */
        _adjustDate: function _adjustDate(id, offset, period) {
            var target = $(id),
                inst = this._getInst(target[0]);

            if (this._isDisabledDatepicker(target[0])) {
                return;
            }
            this._adjustInstDate(inst, offset + (period === "M" ? this._get(inst, "showCurrentAtPos") : 0), // undo positioning
            period);
            this._updateDatepicker(inst);
        },

        /* Action for current link. */
        _gotoToday: function _gotoToday(id) {
            var date,
                target = $(id),
                inst = this._getInst(target[0]);

            if (this._get(inst, "gotoCurrent") && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear;
            } else {
                date = new Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear();
            }
            this._notifyChange(inst);
            this._adjustDate(target);
        },

        /* Action for selecting a new month/year. */
        _selectMonthYear: function _selectMonthYear(id, select, period) {
            var target = $(id),
                inst = this._getInst(target[0]);

            inst["selected" + (period === "M" ? "Month" : "Year")] = inst["draw" + (period === "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);

            this._notifyChange(inst);
            this._adjustDate(target);
        },

        /* Action for selecting a day. */
        _selectDay: function _selectDay(id, month, year, td) {
            var inst,
                target = $(id);

            if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
                return;
            }

            inst = this._getInst(target[0]);
            inst.selectedDay = inst.currentDay = $("a", td).html();
            inst.selectedMonth = inst.currentMonth = month;
            inst.selectedYear = inst.currentYear = year;
            this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear));
        },

        /* Erase the input field and hide the date picker. */
        _clearDate: function _clearDate(id) {
            var target = $(id);
            this._selectDate(target, "");
        },

        /* Update the input field with the selected date. */
        _selectDate: function _selectDate(id, dateStr) {
            var onSelect,
                target = $(id),
                inst = this._getInst(target[0]);

            dateStr = dateStr != null ? dateStr : this._formatDate(inst);
            if (inst.input) {
                inst.input.val(dateStr);
            }
            this._updateAlternate(inst);

            onSelect = this._get(inst, "onSelect");
            if (onSelect) {
                onSelect.apply(inst.input ? inst.input[0] : null, [dateStr, inst]); // trigger custom callback
            } else if (inst.input) {
                inst.input.trigger("change"); // fire the change event
            }

            if (inst.inline) {
                this._updateDatepicker(inst);
            } else {
                this._hideDatepicker();
                this._lastInput = inst.input[0];
                if (_typeof(inst.input[0]) !== "object") {
                    inst.input.trigger("focus"); // restore focus
                }
                this._lastInput = null;
            }
        },

        /* Update any alternate field to synchronise with the main field. */
        _updateAlternate: function _updateAlternate(inst) {
            var altFormat,
                date,
                dateStr,
                altField = this._get(inst, "altField");

            if (altField) {
                // update alternate field too
                altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
                date = this._getDate(inst);
                dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
                $(altField).val(dateStr);
            }
        },

        /* Set as beforeShowDay function to prevent selection of weekends.
         * @param  date  Date - the date to customise
         * @return [boolean, string] - is this date selectable?, what is its CSS class?
         */
        noWeekends: function noWeekends(date) {
            var day = date.getDay();
            return [day > 0 && day < 6, ""];
        },

        /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
         * @param  date  Date - the date to get the week for
         * @return  number - the number of the week within the year that contains this date
         */
        iso8601Week: function iso8601Week(date) {
            var time,
                checkDate = new Date(date.getTime());

            // Find Thursday of this week starting on Monday
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));

            time = checkDate.getTime();
            checkDate.setMonth(0); // Compare with Jan 1
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
        },

        /* Parse a string value into a date object.
         * See formatDate below for the possible formats.
         *
         * @param  format string - the expected format of the date
         * @param  value string - the date in the above format
         * @param  settings Object - attributes include:
         *					shortYearCutoff  number - the cutoff year for determining the century (optional)
         *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
         *					dayNames		string[7] - names of the days from Sunday (optional)
         *					monthNamesShort string[12] - abbreviated names of the months (optional)
         *					monthNames		string[12] - names of the months (optional)
         * @return  Date - the extracted date value or null if value is blank
         */
        parseDate: function parseDate(format, value, settings) {
            if (format == null || value == null) {
                throw "Invalid arguments";
            }

            value = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" ? value.toString() : value + "";
            if (value === "") {
                return null;
            }

            var iFormat,
                dim,
                extra,
                iValue = 0,
                shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                shortYearCutoff = typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp : new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10),
                dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
                dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
                monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
                monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,
                year = -1,
                month = -1,
                day = -1,
                doy = -1,
                literal = false,
                date,


            // Check whether a format character is doubled
            lookAhead = function lookAhead(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                if (matches) {
                    iFormat++;
                }
                return matches;
            },


            // Extract a number from the string value
            getNumber = function getNumber(match) {
                var isDoubled = lookAhead(match),
                    size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2,
                    minSize = match === "y" ? size : 1,
                    digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
                    num = value.substring(iValue).match(digits);
                if (!num) {
                    throw "Missing number at position " + iValue;
                }
                iValue += num[0].length;
                return parseInt(num[0], 10);
            },


            // Extract a name from the string value and convert to an index
            getName = function getName(match, shortNames, longNames) {
                var index = -1,
                    names = $.map(lookAhead(match) ? longNames : shortNames, function (v, k) {
                    return [[k, v]];
                }).sort(function (a, b) {
                    return -(a[1].length - b[1].length);
                });

                $.each(names, function (i, pair) {
                    var name = pair[1];
                    if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                        index = pair[0];
                        iValue += name.length;
                        return false;
                    }
                });
                if (index !== -1) {
                    return index + 1;
                } else {
                    throw "Unknown name at position " + iValue;
                }
            },


            // Confirm that a literal character matches the string value
            checkLiteral = function checkLiteral() {
                if (value.charAt(iValue) !== format.charAt(iFormat)) {
                    throw "Unexpected literal at position " + iValue;
                }
                iValue++;
            };

            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        checkLiteral();
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                        case "d":
                            day = getNumber("d");
                            break;
                        case "D":
                            getName("D", dayNamesShort, dayNames);
                            break;
                        case "o":
                            doy = getNumber("o");
                            break;
                        case "m":
                            month = getNumber("m");
                            break;
                        case "M":
                            month = getName("M", monthNamesShort, monthNames);
                            break;
                        case "y":
                            year = getNumber("y");
                            break;
                        case "@":
                            date = new Date(getNumber("@"));
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "!":
                            date = new Date((getNumber("!") - this._ticksTo1970) / 10000);
                            year = date.getFullYear();
                            month = date.getMonth() + 1;
                            day = date.getDate();
                            break;
                        case "'":
                            if (lookAhead("'")) {
                                checkLiteral();
                            } else {
                                literal = true;
                            }
                            break;
                        default:
                            checkLiteral();
                    }
                }
            }

            if (iValue < value.length) {
                extra = value.substr(iValue);
                if (!/^\s+/.test(extra)) {
                    throw "Extra/unparsed characters found in date: " + extra;
                }
            }

            if (year === -1) {
                year = new Date().getFullYear();
            } else if (year < 100) {
                year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
            }

            if (doy > -1) {
                month = 1;
                day = doy;
                do {
                    dim = this._getDaysInMonth(year, month - 1);
                    if (day <= dim) {
                        break;
                    }
                    month++;
                    day -= dim;
                } while (true);
            }

            date = this._daylightSavingAdjust(new Date(year, month - 1, day));
            if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
                throw "Invalid date"; // E.g. 31/02/00
            }
            return date;
        },

        /* Standard date formats. */
        ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y", // RFC 822
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd", // ISO 8601

        _ticksTo1970: ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000,

        /* Format a date object into a string value.
         * The format can be combinations of the following:
         * d  - day of month (no leading zero)
         * dd - day of month (two digit)
         * o  - day of year (no leading zeros)
         * oo - day of year (three digit)
         * D  - day name short
         * DD - day name long
         * m  - month of year (no leading zero)
         * mm - month of year (two digit)
         * M  - month name short
         * MM - month name long
         * y  - year (two digit)
         * yy - year (four digit)
         * @ - Unix timestamp (ms since 01/01/1970)
         * ! - Windows ticks (100ns since 01/01/0001)
         * "..." - literal text
         * '' - single quote
         *
         * @param  format string - the desired format of the date
         * @param  date Date - the date value to format
         * @param  settings Object - attributes include:
         *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
         *					dayNames		string[7] - names of the days from Sunday (optional)
         *					monthNamesShort string[12] - abbreviated names of the months (optional)
         *					monthNames		string[12] - names of the months (optional)
         * @return  string - the date in the above format
         */
        formatDate: function formatDate(format, date, settings) {
            if (!date) {
                return "";
            }

            var iFormat,
                dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort,
                dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames,
                monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort,
                monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames,


            // Check whether a format character is doubled
            lookAhead = function lookAhead(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                if (matches) {
                    iFormat++;
                }
                return matches;
            },


            // Format a number, with leading zero if necessary
            formatNumber = function formatNumber(match, value, len) {
                var num = "" + value;
                if (lookAhead(match)) {
                    while (num.length < len) {
                        num = "0" + num;
                    }
                }
                return num;
            },


            // Format a name, short or long as requested
            formatName = function formatName(match, value, shortNames, longNames) {
                return lookAhead(match) ? longNames[value] : shortNames[value];
            },
                output = "",
                literal = false;

            if (date) {
                for (iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                            literal = false;
                        } else {
                            output += format.charAt(iFormat);
                        }
                    } else {
                        switch (format.charAt(iFormat)) {
                            case "d":
                                output += formatNumber("d", date.getDate(), 2);
                                break;
                            case "D":
                                output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                                break;
                            case "o":
                                output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case "m":
                                output += formatNumber("m", date.getMonth() + 1, 2);
                                break;
                            case "M":
                                output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                                break;
                            case "y":
                                output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
                                break;
                            case "@":
                                output += date.getTime();
                                break;
                            case "!":
                                output += date.getTime() * 10000 + this._ticksTo1970;
                                break;
                            case "'":
                                if (lookAhead("'")) {
                                    output += "'";
                                } else {
                                    literal = true;
                                }
                                break;
                            default:
                                output += format.charAt(iFormat);
                        }
                    }
                }
            }
            return output;
        },

        /* Extract all possible characters from the date format. */
        _possibleChars: function _possibleChars(format) {
            var iFormat,
                chars = "",
                literal = false,


            // Check whether a format character is doubled
            lookAhead = function lookAhead(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                if (matches) {
                    iFormat++;
                }
                return matches;
            };

            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        chars += format.charAt(iFormat);
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                        case "d":case "m":case "y":case "@":
                            chars += "0123456789";
                            break;
                        case "D":case "M":
                            return null; // Accept anything
                        case "'":
                            if (lookAhead("'")) {
                                chars += "'";
                            } else {
                                literal = true;
                            }
                            break;
                        default:
                            chars += format.charAt(iFormat);
                    }
                }
            }
            return chars;
        },

        /* Get a setting value, defaulting if necessary. */
        _get: function _get(inst, name) {
            return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
        },

        /* Parse existing date and initialise date picker. */
        _setDateFromField: function _setDateFromField(inst, noDefault) {
            if (inst.input.val() === inst.lastVal) {
                return;
            }

            var dateFormat = this._get(inst, "dateFormat"),
                dates = inst.lastVal = inst.input ? inst.input.val() : null,
                defaultDate = this._getDefaultDate(inst),
                date = defaultDate,
                settings = this._getFormatConfig(inst);

            try {
                date = this.parseDate(dateFormat, dates, settings) || defaultDate;
            } catch (event) {
                dates = noDefault ? "" : dates;
            }
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            inst.currentDay = dates ? date.getDate() : 0;
            inst.currentMonth = dates ? date.getMonth() : 0;
            inst.currentYear = dates ? date.getFullYear() : 0;
            this._adjustInstDate(inst);
        },

        /* Retrieve the default date shown on opening. */
        _getDefaultDate: function _getDefaultDate(inst) {
            return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
        },

        /* A date may be specified as an exact value or a relative one. */
        _determineDate: function _determineDate(inst, date, defaultDate) {
            var offsetNumeric = function offsetNumeric(offset) {
                var date = new Date();
                date.setDate(date.getDate() + offset);
                return date;
            },
                offsetString = function offsetString(offset) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst));
                } catch (e) {

                    // Ignore
                }

                var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date(),
                    year = date.getFullYear(),
                    month = date.getMonth(),
                    day = date.getDate(),
                    pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                    matches = pattern.exec(offset);

                while (matches) {
                    switch (matches[2] || "d") {
                        case "d":case "D":
                            day += parseInt(matches[1], 10);break;
                        case "w":case "W":
                            day += parseInt(matches[1], 10) * 7;break;
                        case "m":case "M":
                            month += parseInt(matches[1], 10);
                            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                            break;
                        case "y":case "Y":
                            year += parseInt(matches[1], 10);
                            day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                            break;
                    }
                    matches = pattern.exec(offset);
                }
                return new Date(year, month, day);
            },
                newDate = date == null || date === "" ? defaultDate : typeof date === "string" ? offsetString(date) : typeof date === "number" ? isNaN(date) ? defaultDate : offsetNumeric(date) : new Date(date.getTime());

            newDate = newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate;
            if (newDate) {
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                newDate.setMilliseconds(0);
            }
            return this._daylightSavingAdjust(newDate);
        },

        /* Handle switch to/from daylight saving.
         * Hours may be non-zero on daylight saving cut-over:
         * > 12 when midnight changeover, but then cannot generate
         * midnight datetime, so jump to 1AM, otherwise reset.
         * @param  date  (Date) the date to check
         * @return  (Date) the corrected date
         */
        _daylightSavingAdjust: function _daylightSavingAdjust(date) {
            if (!date) {
                return null;
            }
            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            return date;
        },

        /* Set the date(s) directly. */
        _setDate: function _setDate(inst, date, noChange) {
            var clear = !date,
                origMonth = inst.selectedMonth,
                origYear = inst.selectedYear,
                newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));

            inst.selectedDay = inst.currentDay = newDate.getDate();
            inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
            if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
                this._notifyChange(inst);
            }
            this._adjustInstDate(inst);
            if (inst.input) {
                inst.input.val(clear ? "" : this._formatDate(inst));
            }
        },

        /* Retrieve the date(s) directly. */
        _getDate: function _getDate(inst) {
            var startDate = !inst.currentYear || inst.input && inst.input.val() === "" ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
            return startDate;
        },

        /* Attach the onxxx handlers.  These are declared statically so
         * they work with static code transformers like Caja.
         */
        _attachHandlers: function _attachHandlers(inst) {
            var stepMonths = this._get(inst, "stepMonths"),
                id = "#" + inst.id.replace(/\\\\/g, "\\");
            inst.dpDiv.find("[data-handler]").map(function () {
                var handler = {
                    prev: function prev() {
                        $.datepicker._adjustDate(id, -stepMonths, "M");
                    },
                    next: function next() {
                        $.datepicker._adjustDate(id, +stepMonths, "M");
                    },
                    hide: function hide() {
                        $.datepicker._hideDatepicker();
                    },
                    today: function today() {
                        $.datepicker._gotoToday(id);
                    },
                    selectDay: function selectDay() {
                        $.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false;
                    },
                    selectMonth: function selectMonth() {
                        $.datepicker._selectMonthYear(id, this, "M");
                        return false;
                    },
                    selectYear: function selectYear() {
                        $.datepicker._selectMonthYear(id, this, "Y");
                        return false;
                    }
                };
                $(this).on(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
            });
        },

        /* Generate the HTML for the current state of the date picker. */
        _generateHTML: function _generateHTML(inst) {
            var maxDraw,
                prevText,
                prev,
                nextText,
                next,
                currentText,
                gotoDate,
                controls,
                buttonPanel,
                firstDay,
                showWeek,
                dayNames,
                dayNamesMin,
                monthNames,
                monthNamesShort,
                beforeShowDay,
                showOtherMonths,
                selectOtherMonths,
                defaultDate,
                html,
                dow,
                row,
                group,
                col,
                selectedDate,
                cornerClass,
                calender,
                thead,
                day,
                daysInMonth,
                leadDays,
                curRows,
                numRows,
                printDate,
                dRow,
                tbody,
                daySettings,
                otherMonth,
                unselectable,
                tempDate = new Date(),
                today = this._daylightSavingAdjust(new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())),
                // clear time
            isRTL = this._get(inst, "isRTL"),
                showButtonPanel = this._get(inst, "showButtonPanel"),
                hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"),
                navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"),
                numMonths = this._getNumberOfMonths(inst),
                showCurrentAtPos = this._get(inst, "showCurrentAtPos"),
                stepMonths = this._get(inst, "stepMonths"),
                isMultiMonth = numMonths[0] !== 1 || numMonths[1] !== 1,
                currentDate = this._daylightSavingAdjust(!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay)),
                minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                drawMonth = inst.drawMonth - showCurrentAtPos,
                drawYear = inst.drawYear;

            if (drawMonth < 0) {
                drawMonth += 12;
                drawYear--;
            }
            if (maxDate) {
                maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - numMonths[0] * numMonths[1] + 1, maxDate.getDate()));
                maxDraw = minDate && maxDraw < minDate ? minDate : maxDraw;
                while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
                    drawMonth--;
                    if (drawMonth < 0) {
                        drawMonth = 11;
                        drawYear--;
                    }
                }
            }
            inst.drawMonth = drawMonth;
            inst.drawYear = drawYear;

            prevText = this._get(inst, "prevText");
            prevText = !navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst));

            prev = this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" + " title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" : hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>";

            nextText = this._get(inst, "nextText");
            nextText = !navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst));

            next = this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" + " title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" : hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>";

            currentText = this._get(inst, "currentText");
            gotoDate = this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today;
            currentText = !navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst));

            controls = !inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(inst, "closeText") + "</button>" : "";

            buttonPanel = showButtonPanel ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" + ">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";

            firstDay = parseInt(this._get(inst, "firstDay"), 10);
            firstDay = isNaN(firstDay) ? 0 : firstDay;

            showWeek = this._get(inst, "showWeek");
            dayNames = this._get(inst, "dayNames");
            dayNamesMin = this._get(inst, "dayNamesMin");
            monthNames = this._get(inst, "monthNames");
            monthNamesShort = this._get(inst, "monthNamesShort");
            beforeShowDay = this._get(inst, "beforeShowDay");
            showOtherMonths = this._get(inst, "showOtherMonths");
            selectOtherMonths = this._get(inst, "selectOtherMonths");
            defaultDate = this._getDefaultDate(inst);
            html = "";

            for (row = 0; row < numMonths[0]; row++) {
                group = "";
                this.maxRows = 4;
                for (col = 0; col < numMonths[1]; col++) {
                    selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
                    cornerClass = " ui-corner-all";
                    calender = "";
                    if (isMultiMonth) {
                        calender += "<div class='ui-datepicker-group";
                        if (numMonths[1] > 1) {
                            switch (col) {
                                case 0:
                                    calender += " ui-datepicker-group-first";
                                    cornerClass = " ui-corner-" + (isRTL ? "right" : "left");break;
                                case numMonths[1] - 1:
                                    calender += " ui-datepicker-group-last";
                                    cornerClass = " ui-corner-" + (isRTL ? "left" : "right");break;
                                default:
                                    calender += " ui-datepicker-group-middle";cornerClass = "";break;
                            }
                        }
                        calender += "'>";
                    }
                    calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" + (/all|left/.test(cornerClass) && row === 0 ? isRTL ? next : prev : "") + (/all|right/.test(cornerClass) && row === 0 ? isRTL ? prev : next : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + // draw month headers
                    "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>";
                    thead = showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "";
                    for (dow = 0; dow < 7; dow++) {
                        // days of the week
                        day = (dow + firstDay) % 7;
                        thead += "<th scope='col'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
                    }
                    calender += thead + "</tr></thead><tbody>";
                    daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
                    if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
                        inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
                    }
                    leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
                    curRows = Math.ceil((leadDays + daysInMonth) / 7); // calculate the number of rows to generate
                    numRows = isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows; //If multiple months, use the higher number of rows (see #7043)
                    this.maxRows = numRows;
                    printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
                    for (dRow = 0; dRow < numRows; dRow++) {
                        // create date picker rows
                        calender += "<tr>";
                        tbody = !showWeek ? "" : "<td class='ui-datepicker-week-col'>" + this._get(inst, "calculateWeek")(printDate) + "</td>";
                        for (dow = 0; dow < 7; dow++) {
                            // create date picker days
                            daySettings = beforeShowDay ? beforeShowDay.apply(inst.input ? inst.input[0] : null, [printDate]) : [true, ""];
                            otherMonth = printDate.getMonth() !== drawMonth;
                            unselectable = otherMonth && !selectOtherMonths || !daySettings[0] || minDate && printDate < minDate || maxDate && printDate > maxDate;
                            tbody += "<td class='" + ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + ( // highlight weekends
                            otherMonth ? " ui-datepicker-other-month" : "") + ( // highlight days from other months
                            printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent || // user pressed key
                            defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ?

                            // or defaultDate is current printedDate and defaultDate is selectedDate
                            " " + this._dayOverClass : "") + ( // highlight selected day
                            unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + ( // highlight unselectable days
                            otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + ( // highlight custom dates
                            printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + ( // highlight selected day
                            printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + ( // highlight today (if different)
                            (!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + ( // cell title
                            unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + ( // actions
                            otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
                            unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" + (printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + ( // highlight selected day
                            otherMonth ? " ui-priority-secondary" : "") + // distinguish dates from other months
                            "' href='#'>" + printDate.getDate() + "</a>") + "</td>"; // display selectable date
                            printDate.setDate(printDate.getDate() + 1);
                            printDate = this._daylightSavingAdjust(printDate);
                        }
                        calender += tbody + "</tr>";
                    }
                    drawMonth++;
                    if (drawMonth > 11) {
                        drawMonth = 0;
                        drawYear++;
                    }
                    calender += "</tbody></table>" + (isMultiMonth ? "</div>" + (numMonths[0] > 0 && col === numMonths[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    group += calender;
                }
                html += group;
            }
            html += buttonPanel;
            inst._keyEvent = false;
            return html;
        },

        /* Generate the month and year header. */
        _generateMonthYearHeader: function _generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {

            var inMinYear,
                inMaxYear,
                month,
                years,
                thisYear,
                determineYear,
                year,
                endYear,
                changeMonth = this._get(inst, "changeMonth"),
                changeYear = this._get(inst, "changeYear"),
                showMonthAfterYear = this._get(inst, "showMonthAfterYear"),
                html = "<div class='ui-datepicker-title'>",
                monthHtml = "";

            // Month selection
            if (secondary || !changeMonth) {
                monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
            } else {
                inMinYear = minDate && minDate.getFullYear() === drawYear;
                inMaxYear = maxDate && maxDate.getFullYear() === drawYear;
                monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (month = 0; month < 12; month++) {
                    if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
                        monthHtml += "<option value='" + month + "'" + (month === drawMonth ? " selected='selected'" : "") + ">" + monthNamesShort[month] + "</option>";
                    }
                }
                monthHtml += "</select>";
            }

            if (!showMonthAfterYear) {
                html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
            }

            // Year selection
            if (!inst.yearshtml) {
                inst.yearshtml = "";
                if (secondary || !changeYear) {
                    html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
                } else {

                    // determine range of years to display
                    years = this._get(inst, "yearRange").split(":");
                    thisYear = new Date().getFullYear();
                    determineYear = function determineYear(value) {
                        var year = value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) : value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10);
                        return isNaN(year) ? thisYear : year;
                    };
                    year = determineYear(years[0]);
                    endYear = Math.max(year, determineYear(years[1] || ""));
                    year = minDate ? Math.max(year, minDate.getFullYear()) : year;
                    endYear = maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear;
                    inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (; year <= endYear; year++) {
                        inst.yearshtml += "<option value='" + year + "'" + (year === drawYear ? " selected='selected'" : "") + ">" + year + "</option>";
                    }
                    inst.yearshtml += "</select>";

                    html += inst.yearshtml;
                    inst.yearshtml = null;
                }
            }

            html += this._get(inst, "yearSuffix");
            if (showMonthAfterYear) {
                html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
            }
            html += "</div>"; // Close datepicker_header
            return html;
        },

        /* Adjust one of the date sub-fields. */
        _adjustInstDate: function _adjustInstDate(inst, offset, period) {
            var year = inst.selectedYear + (period === "Y" ? offset : 0),
                month = inst.selectedMonth + (period === "M" ? offset : 0),
                day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0),
                date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));

            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            if (period === "M" || period === "Y") {
                this._notifyChange(inst);
            }
        },

        /* Ensure a date is within any min/max bounds. */
        _restrictMinMax: function _restrictMinMax(inst, date) {
            var minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                newDate = minDate && date < minDate ? minDate : date;
            return maxDate && newDate > maxDate ? maxDate : newDate;
        },

        /* Notify change of month/year. */
        _notifyChange: function _notifyChange(inst) {
            var onChange = this._get(inst, "onChangeMonthYear");
            if (onChange) {
                onChange.apply(inst.input ? inst.input[0] : null, [inst.selectedYear, inst.selectedMonth + 1, inst]);
            }
        },

        /* Determine the number of months to show. */
        _getNumberOfMonths: function _getNumberOfMonths(inst) {
            var numMonths = this._get(inst, "numberOfMonths");
            return numMonths == null ? [1, 1] : typeof numMonths === "number" ? [1, numMonths] : numMonths;
        },

        /* Determine the current maximum date - ensure no time components are set. */
        _getMinMaxDate: function _getMinMaxDate(inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
        },

        /* Find the number of days in a given month. */
        _getDaysInMonth: function _getDaysInMonth(year, month) {
            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
        },

        /* Find the day of the week of the first of a month. */
        _getFirstDayOfMonth: function _getFirstDayOfMonth(year, month) {
            return new Date(year, month, 1).getDay();
        },

        /* Determines if we should allow a "next/prev" month display change. */
        _canAdjustMonth: function _canAdjustMonth(inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst),
                date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));

            if (offset < 0) {
                date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
            }
            return this._isInRange(inst, date);
        },

        /* Is the given date in the accepted range? */
        _isInRange: function _isInRange(inst, date) {
            var yearSplit,
                currentYear,
                minDate = this._getMinMaxDate(inst, "min"),
                maxDate = this._getMinMaxDate(inst, "max"),
                minYear = null,
                maxYear = null,
                years = this._get(inst, "yearRange");
            if (years) {
                yearSplit = years.split(":");
                currentYear = new Date().getFullYear();
                minYear = parseInt(yearSplit[0], 10);
                maxYear = parseInt(yearSplit[1], 10);
                if (yearSplit[0].match(/[+\-].*/)) {
                    minYear += currentYear;
                }
                if (yearSplit[1].match(/[+\-].*/)) {
                    maxYear += currentYear;
                }
            }

            return (!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()) && (!minYear || date.getFullYear() >= minYear) && (!maxYear || date.getFullYear() <= maxYear);
        },

        /* Provide the configuration settings for formatting/parsing. */
        _getFormatConfig: function _getFormatConfig(inst) {
            var shortYearCutoff = this._get(inst, "shortYearCutoff");
            shortYearCutoff = typeof shortYearCutoff !== "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10);
            return { shortYearCutoff: shortYearCutoff,
                dayNamesShort: this._get(inst, "dayNamesShort"), dayNames: this._get(inst, "dayNames"),
                monthNamesShort: this._get(inst, "monthNamesShort"), monthNames: this._get(inst, "monthNames") };
        },

        /* Format the given date for display. */
        _formatDate: function _formatDate(inst, day, month, year) {
            if (!day) {
                inst.currentDay = inst.selectedDay;
                inst.currentMonth = inst.selectedMonth;
                inst.currentYear = inst.selectedYear;
            }
            var date = day ? (typeof day === 'undefined' ? 'undefined' : _typeof(day)) === "object" ? day : this._daylightSavingAdjust(new Date(year, month, day)) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
            return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
        }
    });

    /*
     * Bind hover events for datepicker elements.
     * Done via delegate so the binding only occurs once in the lifetime of the parent div.
     * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
     */
    function datepicker_bindHover(dpDiv) {
        var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return dpDiv.on("mouseout", selector, function () {
            $(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).removeClass("ui-datepicker-prev-hover");
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).removeClass("ui-datepicker-next-hover");
            }
        }).on("mouseover", selector, datepicker_handleMouseover);
    }

    function datepicker_handleMouseover() {
        if (!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[0] : datepicker_instActive.input[0])) {
            $(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
            $(this).addClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).addClass("ui-datepicker-prev-hover");
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).addClass("ui-datepicker-next-hover");
            }
        }
    }

    /* jQuery extend now ignores nulls! */
    function datepicker_extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] == null) {
                target[name] = props[name];
            }
        }
        return target;
    }

    /* Invoke the datepicker functionality.
     @param  options  string - a command, optionally followed by additional parameters or
     Object - settings for attaching new datepicker functionality
     @return  jQuery object */
    $.fn.datepicker = function (options) {

        /* Verify an empty collection wasn't passed - Fixes #6976 */
        if (!this.length) {
            return this;
        }

        /* Initialise the date picker. */
        if (!$.datepicker.initialized) {
            $(document).on("mousedown", $.datepicker._checkExternalClick);
            $.datepicker.initialized = true;
        }

        /* Append datepicker main container to body if not exist. */
        if ($("#" + $.datepicker._mainDivId).length === 0) {
            $("body").append($.datepicker.dpDiv);
        }

        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
            return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs));
        }
        if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this[0]].concat(otherArgs));
        }
        return this.each(function () {
            typeof options === "string" ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [this].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options);
        });
    };

    $.datepicker = new Datepicker(); // singleton instance
    $.datepicker.initialized = false;
    $.datepicker.uuid = new Date().getTime();
    $.datepicker.version = "1.12.1";

    var widgetsDatepicker = $.datepicker;

    // Internal use only
    var escapeSelector = $.ui.escapeSelector = function () {
        var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function (selector) {
            return selector.replace(selectorEscape, "\\$1");
        };
    }();

    /*!
     * jQuery UI Tabs 1.12.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    //>>label: Tabs
    //>>group: Widgets
    //>>description: Transforms a set of container elements into a tab structure.
    //>>docs: http://api.jqueryui.com/tabs/
    //>>demos: http://jqueryui.com/tabs/
    //>>css.structure: ../../themes/base/core.css
    //>>css.structure: ../../themes/base/tabs.css
    //>>css.theme: ../../themes/base/theme.css


    $.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: false,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,

            // Callbacks
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },

        _isLocal: function () {
            var rhash = /#.*$/;

            return function (anchor) {
                var anchorUrl, locationUrl;

                anchorUrl = anchor.href.replace(rhash, "");
                locationUrl = location.href.replace(rhash, "");

                // Decoding may throw an error if the URL isn't UTF-8 (#9518)
                try {
                    anchorUrl = decodeURIComponent(anchorUrl);
                } catch (error) {}
                try {
                    locationUrl = decodeURIComponent(locationUrl);
                } catch (error) {}

                return anchor.hash.length > 1 && anchorUrl === locationUrl;
            };
        }(),

        _create: function _create() {
            var that = this,
                options = this.options;

            this.running = false;

            this._addClass("ui-tabs", "ui-widget ui-widget-content");
            this._toggleClass("ui-tabs-collapsible", null, options.collapsible);

            this._processTabs();
            options.active = this._initialActive();

            // Take disabling tabs via class attribute from HTML
            // into account and update option properly.
            if ($.isArray(options.disabled)) {
                options.disabled = $.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"), function (li) {
                    return that.tabs.index(li);
                }))).sort();
            }

            // Check for length avoids error when initializing empty list
            if (this.options.active !== false && this.anchors.length) {
                this.active = this._findActive(options.active);
            } else {
                this.active = $();
            }

            this._refresh();

            if (this.active.length) {
                this.load(options.active);
            }
        },

        _initialActive: function _initialActive() {
            var active = this.options.active,
                collapsible = this.options.collapsible,
                locationHash = location.hash.substring(1);

            if (active === null) {

                // check the fragment identifier in the URL
                if (locationHash) {
                    this.tabs.each(function (i, tab) {
                        if ($(tab).attr("aria-controls") === locationHash) {
                            active = i;
                            return false;
                        }
                    });
                }

                // Check for a tab marked active via a class
                if (active === null) {
                    active = this.tabs.index(this.tabs.filter(".ui-tabs-active"));
                }

                // No active tab, set to false
                if (active === null || active === -1) {
                    active = this.tabs.length ? 0 : false;
                }
            }

            // Handle numbers: negative, out of range
            if (active !== false) {
                active = this.tabs.index(this.tabs.eq(active));
                if (active === -1) {
                    active = collapsible ? false : 0;
                }
            }

            // Don't allow collapsible: false and active: false
            if (!collapsible && active === false && this.anchors.length) {
                active = 0;
            }

            return active;
        },

        _getCreateEventData: function _getCreateEventData() {
            return {
                tab: this.active,
                panel: !this.active.length ? $() : this._getPanelForTab(this.active)
            };
        },

        _tabKeydown: function _tabKeydown(event) {
            var focusedTab = $($.ui.safeActiveElement(this.document[0])).closest("li"),
                selectedIndex = this.tabs.index(focusedTab),
                goingForward = true;

            if (this._handlePageNav(event)) {
                return;
            }

            switch (event.keyCode) {
                case $.ui.keyCode.RIGHT:
                case $.ui.keyCode.DOWN:
                    selectedIndex++;
                    break;
                case $.ui.keyCode.UP:
                case $.ui.keyCode.LEFT:
                    goingForward = false;
                    selectedIndex--;
                    break;
                case $.ui.keyCode.END:
                    selectedIndex = this.anchors.length - 1;
                    break;
                case $.ui.keyCode.HOME:
                    selectedIndex = 0;
                    break;
                case $.ui.keyCode.SPACE:

                    // Activate only, no collapsing
                    event.preventDefault();
                    clearTimeout(this.activating);
                    this._activate(selectedIndex);
                    return;
                case $.ui.keyCode.ENTER:

                    // Toggle (cancel delayed activation, allow collapsing)
                    event.preventDefault();
                    clearTimeout(this.activating);

                    // Determine if we should collapse or activate
                    this._activate(selectedIndex === this.options.active ? false : selectedIndex);
                    return;
                default:
                    return;
            }

            // Focus the appropriate tab, based on which key was pressed
            event.preventDefault();
            clearTimeout(this.activating);
            selectedIndex = this._focusNextTab(selectedIndex, goingForward);

            // Navigating with control/command key will prevent automatic activation
            if (!event.ctrlKey && !event.metaKey) {

                // Update aria-selected immediately so that AT think the tab is already selected.
                // Otherwise AT may confuse the user by stating that they need to activate the tab,
                // but the tab will already be activated by the time the announcement finishes.
                focusedTab.attr("aria-selected", "false");
                this.tabs.eq(selectedIndex).attr("aria-selected", "true");

                this.activating = this._delay(function () {
                    this.option("active", selectedIndex);
                }, this.delay);
            }
        },

        _panelKeydown: function _panelKeydown(event) {
            if (this._handlePageNav(event)) {
                return;
            }

            // Ctrl+up moves focus to the current tab
            if (event.ctrlKey && event.keyCode === $.ui.keyCode.UP) {
                event.preventDefault();
                this.active.trigger("focus");
            }
        },

        // Alt+page up/down moves focus to the previous/next tab (and activates)
        _handlePageNav: function _handlePageNav(event) {
            if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP) {
                this._activate(this._focusNextTab(this.options.active - 1, false));
                return true;
            }
            if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN) {
                this._activate(this._focusNextTab(this.options.active + 1, true));
                return true;
            }
        },

        _findNextTab: function _findNextTab(index, goingForward) {
            var lastTabIndex = this.tabs.length - 1;

            function constrain() {
                if (index > lastTabIndex) {
                    index = 0;
                }
                if (index < 0) {
                    index = lastTabIndex;
                }
                return index;
            }

            while ($.inArray(constrain(), this.options.disabled) !== -1) {
                index = goingForward ? index + 1 : index - 1;
            }

            return index;
        },

        _focusNextTab: function _focusNextTab(index, goingForward) {
            index = this._findNextTab(index, goingForward);
            this.tabs.eq(index).trigger("focus");
            return index;
        },

        _setOption: function _setOption(key, value) {
            if (key === "active") {

                // _activate() will handle invalid values and update this.options
                this._activate(value);
                return;
            }

            this._super(key, value);

            if (key === "collapsible") {
                this._toggleClass("ui-tabs-collapsible", null, value);

                // Setting collapsible: false while collapsed; open first panel
                if (!value && this.options.active === false) {
                    this._activate(0);
                }
            }

            if (key === "event") {
                this._setupEvents(value);
            }

            if (key === "heightStyle") {
                this._setupHeightStyle(value);
            }
        },

        _sanitizeSelector: function _sanitizeSelector(hash) {
            return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },

        refresh: function refresh() {
            var options = this.options,
                lis = this.tablist.children(":has(a[href])");

            // Get disabled tabs from class attribute from HTML
            // this will get converted to a boolean if needed in _refresh()
            options.disabled = $.map(lis.filter(".ui-state-disabled"), function (tab) {
                return lis.index(tab);
            });

            this._processTabs();

            // Was collapsed or no tabs
            if (options.active === false || !this.anchors.length) {
                options.active = false;
                this.active = $();

                // was active, but active tab is gone
            } else if (this.active.length && !$.contains(this.tablist[0], this.active[0])) {

                // all remaining tabs are disabled
                if (this.tabs.length === options.disabled.length) {
                    options.active = false;
                    this.active = $();

                    // activate previous tab
                } else {
                    this._activate(this._findNextTab(Math.max(0, options.active - 1), false));
                }

                // was active, active tab still exists
            } else {

                // make sure active index is correct
                options.active = this.tabs.index(this.active);
            }

            this._refresh();
        },

        _refresh: function _refresh() {
            this._setOptionDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);

            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            });

            // Make sure one tab is in the tab order
            if (!this.active.length) {
                this.tabs.eq(0).attr("tabIndex", 0);
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                });
                this._addClass(this.active, "ui-tabs-active", "ui-state-active");
                this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                });
            }
        },

        _processTabs: function _processTabs() {
            var that = this,
                prevTabs = this.tabs,
                prevAnchors = this.anchors,
                prevPanels = this.panels;

            this.tablist = this._getList().attr("role", "tablist");
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header");

            // Prevent users from focusing disabled tabs via click
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function (event) {
                if ($(this).is(".ui-state-disabled")) {
                    event.preventDefault();
                }
            })

            // Support: IE <9
            // Preventing the default action in mousedown doesn't prevent IE
            // from focusing the element, so if the anchor gets focused, blur.
            // We don't have to worry about focusing the previously focused
            // element since clicking on a non-focusable element should focus
            // the body anyway.
            .on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                if ($(this).closest("li").is(".ui-state-disabled")) {
                    this.blur();
                }
            });

            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            });
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");

            this.anchors = this.tabs.map(function () {
                return $("a", this)[0];
            }).attr({
                role: "presentation",
                tabIndex: -1
            });
            this._addClass(this.anchors, "ui-tabs-anchor");

            this.panels = $();

            this.anchors.each(function (i, anchor) {
                var selector,
                    panel,
                    panelId,
                    anchorId = $(anchor).uniqueId().attr("id"),
                    tab = $(anchor).closest("li"),
                    originalAriaControls = tab.attr("aria-controls");

                // Inline tab
                if (that._isLocal(anchor)) {
                    selector = anchor.hash;
                    panelId = selector.substring(1);
                    panel = that.element.find(that._sanitizeSelector(selector));

                    // remote tab
                } else {

                    // If the tab doesn't already have aria-controls,
                    // generate an id by using a throw-away element
                    panelId = tab.attr("aria-controls") || $({}).uniqueId()[0].id;
                    selector = "#" + panelId;
                    panel = that.element.find(selector);
                    if (!panel.length) {
                        panel = that._createPanel(panelId);
                        panel.insertAfter(that.panels[i - 1] || that.tablist);
                    }
                    panel.attr("aria-live", "polite");
                }

                if (panel.length) {
                    that.panels = that.panels.add(panel);
                }
                if (originalAriaControls) {
                    tab.data("ui-tabs-aria-controls", originalAriaControls);
                }
                tab.attr({
                    "aria-controls": panelId,
                    "aria-labelledby": anchorId
                });
                panel.attr("aria-labelledby", anchorId);
            });

            this.panels.attr("role", "tabpanel");
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content");

            // Avoid memory leaks (#10056)
            if (prevTabs) {
                this._off(prevTabs.not(this.tabs));
                this._off(prevAnchors.not(this.anchors));
                this._off(prevPanels.not(this.panels));
            }
        },

        // Allow overriding how to find the list for rare usage scenarios (#7715)
        _getList: function _getList() {
            return this.tablist || this.element.find("ol, ul").eq(0);
        },

        _createPanel: function _createPanel(id) {
            return $("<div>").attr("id", id).data("ui-tabs-destroy", true);
        },

        _setOptionDisabled: function _setOptionDisabled(disabled) {
            var currentItem, li, i;

            if ($.isArray(disabled)) {
                if (!disabled.length) {
                    disabled = false;
                } else if (disabled.length === this.anchors.length) {
                    disabled = true;
                }
            }

            // Disable tabs
            for (i = 0; li = this.tabs[i]; i++) {
                currentItem = $(li);
                if (disabled === true || $.inArray(i, disabled) !== -1) {
                    currentItem.attr("aria-disabled", "true");
                    this._addClass(currentItem, null, "ui-state-disabled");
                } else {
                    currentItem.removeAttr("aria-disabled");
                    this._removeClass(currentItem, null, "ui-state-disabled");
                }
            }

            this.options.disabled = disabled;

            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, disabled === true);
        },

        _setupEvents: function _setupEvents(event) {
            var events = {};
            if (event) {
                $.each(event.split(" "), function (index, eventName) {
                    events[eventName] = "_eventHandler";
                });
            }

            this._off(this.anchors.add(this.tabs).add(this.panels));

            // Always prevent the default action, even when disabled
            this._on(true, this.anchors, {
                click: function click(event) {
                    event.preventDefault();
                }
            });
            this._on(this.anchors, events);
            this._on(this.tabs, { keydown: "_tabKeydown" });
            this._on(this.panels, { keydown: "_panelKeydown" });

            this._focusable(this.tabs);
            this._hoverable(this.tabs);
        },

        _setupHeightStyle: function _setupHeightStyle(heightStyle) {
            var maxHeight,
                parent = this.element.parent();

            if (heightStyle === "fill") {
                maxHeight = parent.height();
                maxHeight -= this.element.outerHeight() - this.element.height();

                this.element.siblings(":visible").each(function () {
                    var elem = $(this),
                        position = elem.css("position");

                    if (position === "absolute" || position === "fixed") {
                        return;
                    }
                    maxHeight -= elem.outerHeight(true);
                });

                this.element.children().not(this.panels).each(function () {
                    maxHeight -= $(this).outerHeight(true);
                });

                this.panels.each(function () {
                    $(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()));
                }).css("overflow", "auto");
            } else if (heightStyle === "auto") {
                maxHeight = 0;
                this.panels.each(function () {
                    maxHeight = Math.max(maxHeight, $(this).height("").height());
                }).height(maxHeight);
            }
        },

        _eventHandler: function _eventHandler(event) {
            var options = this.options,
                active = this.active,
                anchor = $(event.currentTarget),
                tab = anchor.closest("li"),
                clickedIsActive = tab[0] === active[0],
                collapsing = clickedIsActive && options.collapsible,
                toShow = collapsing ? $() : this._getPanelForTab(tab),
                toHide = !active.length ? $() : this._getPanelForTab(active),
                eventData = {
                oldTab: active,
                oldPanel: toHide,
                newTab: collapsing ? $() : tab,
                newPanel: toShow
            };

            event.preventDefault();

            if (tab.hasClass("ui-state-disabled") ||

            // tab is already loading
            tab.hasClass("ui-tabs-loading") ||

            // can't switch durning an animation
            this.running ||

            // click on active header, but not collapsible
            clickedIsActive && !options.collapsible ||

            // allow canceling activation
            this._trigger("beforeActivate", event, eventData) === false) {
                return;
            }

            options.active = collapsing ? false : this.tabs.index(tab);

            this.active = clickedIsActive ? $() : tab;
            if (this.xhr) {
                this.xhr.abort();
            }

            if (!toHide.length && !toShow.length) {
                $.error("jQuery UI Tabs: Mismatching fragment identifier.");
            }

            if (toShow.length) {
                this.load(this.tabs.index(tab), event);
            }
            this._toggle(event, eventData);
        },

        // Handles show/hide for selecting tabs
        _toggle: function _toggle(event, eventData) {
            var that = this,
                toShow = eventData.newPanel,
                toHide = eventData.oldPanel;

            this.running = true;

            function complete() {
                that.running = false;
                that._trigger("activate", event, eventData);
            }

            function show() {
                that._addClass(eventData.newTab.closest("li"), "ui-tabs-active", "ui-state-active");

                if (toShow.length && that.options.show) {
                    that._show(toShow, that.options.show, complete);
                } else {
                    toShow.show();
                    complete();
                }
            }

            // Start out by hiding, then showing, then completing
            if (toHide.length && this.options.hide) {
                this._hide(toHide, this.options.hide, function () {
                    that._removeClass(eventData.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                    show();
                });
            } else {
                this._removeClass(eventData.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                toHide.hide();
                show();
            }

            toHide.attr("aria-hidden", "true");
            eventData.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });

            // If we're switching tabs, remove the old tab from the tab order.
            // If we're opening from collapsed state, remove the previous tab from the tab order.
            // If we're collapsing, then keep the collapsing tab in the tab order.
            if (toShow.length && toHide.length) {
                eventData.oldTab.attr("tabIndex", -1);
            } else if (toShow.length) {
                this.tabs.filter(function () {
                    return $(this).attr("tabIndex") === 0;
                }).attr("tabIndex", -1);
            }

            toShow.attr("aria-hidden", "false");
            eventData.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },

        _activate: function _activate(index) {
            var anchor,
                active = this._findActive(index);

            // Trying to activate the already active panel
            if (active[0] === this.active[0]) {
                return;
            }

            // Trying to collapse, simulate a click on the current active header
            if (!active.length) {
                active = this.active;
            }

            anchor = active.find(".ui-tabs-anchor")[0];
            this._eventHandler({
                target: anchor,
                currentTarget: anchor,
                preventDefault: $.noop
            });
        },

        _findActive: function _findActive(index) {
            return index === false ? $() : this.tabs.eq(index);
        },

        _getIndex: function _getIndex(index) {

            // meta-function to give users option to provide a href string instead of a numerical index.
            if (typeof index === "string") {
                index = this.anchors.index(this.anchors.filter("[href$='" + $.ui.escapeSelector(index) + "']"));
            }

            return index;
        },

        _destroy: function _destroy() {
            if (this.xhr) {
                this.xhr.abort();
            }

            this.tablist.removeAttr("role").off(this.eventNamespace);

            this.anchors.removeAttr("role tabIndex").removeUniqueId();

            this.tabs.add(this.panels).each(function () {
                if ($.data(this, "ui-tabs-destroy")) {
                    $(this).remove();
                } else {
                    $(this).removeAttr("role tabIndex " + "aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
                }
            });

            this.tabs.each(function () {
                var li = $(this),
                    prev = li.data("ui-tabs-aria-controls");
                if (prev) {
                    li.attr("aria-controls", prev).removeData("ui-tabs-aria-controls");
                } else {
                    li.removeAttr("aria-controls");
                }
            });

            this.panels.show();

            if (this.options.heightStyle !== "content") {
                this.panels.css("height", "");
            }
        },

        enable: function enable(index) {
            var disabled = this.options.disabled;
            if (disabled === false) {
                return;
            }

            if (index === undefined) {
                disabled = false;
            } else {
                index = this._getIndex(index);
                if ($.isArray(disabled)) {
                    disabled = $.map(disabled, function (num) {
                        return num !== index ? num : null;
                    });
                } else {
                    disabled = $.map(this.tabs, function (li, num) {
                        return num !== index ? num : null;
                    });
                }
            }
            this._setOptionDisabled(disabled);
        },

        disable: function disable(index) {
            var disabled = this.options.disabled;
            if (disabled === true) {
                return;
            }

            if (index === undefined) {
                disabled = true;
            } else {
                index = this._getIndex(index);
                if ($.inArray(index, disabled) !== -1) {
                    return;
                }
                if ($.isArray(disabled)) {
                    disabled = $.merge([index], disabled).sort();
                } else {
                    disabled = [index];
                }
            }
            this._setOptionDisabled(disabled);
        },

        load: function load(index, event) {
            index = this._getIndex(index);
            var that = this,
                tab = this.tabs.eq(index),
                anchor = tab.find(".ui-tabs-anchor"),
                panel = this._getPanelForTab(tab),
                eventData = {
                tab: tab,
                panel: panel
            },
                complete = function complete(jqXHR, status) {
                if (status === "abort") {
                    that.panels.stop(false, true);
                }

                that._removeClass(tab, "ui-tabs-loading");
                panel.removeAttr("aria-busy");

                if (jqXHR === that.xhr) {
                    delete that.xhr;
                }
            };

            // Not remote
            if (this._isLocal(anchor[0])) {
                return;
            }

            this.xhr = $.ajax(this._ajaxSettings(anchor, event, eventData));

            // Support: jQuery <1.8
            // jQuery <1.8 returns false if the request is canceled in beforeSend,
            // but as of 1.8, $.ajax() always returns a jqXHR object.
            if (this.xhr && this.xhr.statusText !== "canceled") {
                this._addClass(tab, "ui-tabs-loading");
                panel.attr("aria-busy", "true");

                this.xhr.done(function (response, status, jqXHR) {

                    // support: jQuery <1.8
                    // http://bugs.jquery.com/ticket/11778
                    setTimeout(function () {
                        panel.html(response);
                        that._trigger("load", event, eventData);

                        complete(jqXHR, status);
                    }, 1);
                }).fail(function (jqXHR, status) {

                    // support: jQuery <1.8
                    // http://bugs.jquery.com/ticket/11778
                    setTimeout(function () {
                        complete(jqXHR, status);
                    }, 1);
                });
            }
        },

        _ajaxSettings: function _ajaxSettings(anchor, event, eventData) {
            var that = this;
            return {

                // Support: IE <11 only
                // Strip any hash that exists to prevent errors with the Ajax request
                url: anchor.attr("href").replace(/#.*$/, ""),
                beforeSend: function beforeSend(jqXHR, settings) {
                    return that._trigger("beforeLoad", event, $.extend({ jqXHR: jqXHR, ajaxSettings: settings }, eventData));
                }
            };
        },

        _getPanelForTab: function _getPanelForTab(tab) {
            var id = $(tab).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + id));
        }
    });

    // DEPRECATED
    // TODO: Switch return back to widget declaration at top of file when this is removed
    if ($.uiBackCompat !== false) {

        // Backcompat for ui-tab class (now ui-tabs-tab)
        $.widget("ui.tabs", $.ui.tabs, {
            _processTabs: function _processTabs() {
                this._superApply(arguments);
                this._addClass(this.tabs, "ui-tab");
            }
        });
    }

    var widgetsTabs = $.ui.tabs;
});

/*
 * jQuery UI Timepicker
 *
 * Copyright 2010-2013, Francois Gelinas
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://fgelinas.com/code/timepicker
 *
 * Depends:
 *	jquery.ui.core.js
 *  jquery.ui.position.js (only if position settings are used)
 *
 * Change version 0.1.0 - moved the t-rex up here
 *
 ____
 ___                                      .-~. /_"-._
 `-._~-.                                  / /_ "~o\  :Y
 \  \                                / : \~x.  ` ')
 ]  Y                              /  |  Y< ~-.__j
 /   !                        _.--~T : l  l<  /.-~
 /   /                 ____.--~ .   ` l /~\ \<|Y
 /   /             .-~~"        /| .    ',-~\ \L|
 /   /             /     .^   \ Y~Y \.^>/l_   "--'
 /   Y           .-"(  .  l__  j_j l_/ /~_.-~    .
 Y    l          /    \  )    ~~~." / `/"~ / \.__/l_
 |     \     _.-"      ~-{__     l  :  l._Z~-.___.--~
 |      ~---~           /   ~~"---\_  ' __[>
 l  .                _.^   ___     _>-y~
 \  \     .      .-~   .-~   ~>--"  /
 \  ~---"            /     ./  _.-'
 "-.,_____.,_  _.--~\     _.-~
 ~~     (   _}       -Row
 `. ~(
 )  \
 /,`--'~\--'~\
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ->T-Rex<-
 */

(function ($) {

    $.extend($.ui, { timepicker: { version: "0.3.3" } });

    var PROP_NAME = 'timepicker',
        tpuuid = new Date().getTime();

    /* Time picker manager.
     Use the singleton instance of this class, $.timepicker, to interact with the time picker.
     Settings for (groups of) time pickers are maintained in an instance object,
     allowing multiple different settings on the same page. */

    function Timepicker() {
        this.debug = true; // Change this to true to start debugging
        this._curInst = null; // The current instance in use
        this._disabledInputs = []; // List of time picker inputs that have been disabled
        this._timepickerShowing = false; // True if the popup picker is showing , false if not
        this._inDialog = false; // True if showing within a "dialog", false if not
        this._dialogClass = 'ui-timepicker-dialog'; // The name of the dialog marker class
        this._mainDivId = 'ui-timepicker-div'; // The ID of the main timepicker division
        this._inlineClass = 'ui-timepicker-inline'; // The name of the inline marker class
        this._currentClass = 'ui-timepicker-current'; // The name of the current hour / minutes marker class
        this._dayOverClass = 'ui-timepicker-days-cell-over'; // The name of the day hover marker class

        this.regional = []; // Available regional settings, indexed by language code
        this.regional[''] = { // Default regional settings
            hourText: 'Hour', // Display text for hours section
            minuteText: 'Minute', // Display text for minutes link
            amPmText: ['AM', 'PM'], // Display text for AM PM
            closeButtonText: 'Done', // Text for the confirmation button (ok button)
            nowButtonText: 'Now', // Text for the now button
            deselectButtonText: 'Deselect' // Text for the deselect button
        };
        this._defaults = { // Global defaults for all the time picker instances
            showOn: 'focus', // 'focus' for popup on focus,
            // 'button' for trigger button, or 'both' for either (not yet implemented)
            button: null, // 'button' element that will trigger the timepicker
            showAnim: 'fadeIn', // Name of jQuery animation for popup
            showOptions: {}, // Options for enhanced animations
            appendText: '', // Display text following the input box, e.g. showing the format

            beforeShow: null, // Define a callback function executed before the timepicker is shown
            onSelect: null, // Define a callback function when a hour / minutes is selected
            onClose: null, // Define a callback function when the timepicker is closed

            timeSeparator: ':', // The character to use to separate hours and minutes.
            periodSeparator: ' ', // The character to use to separate the time from the time period.
            showPeriod: false, // Define whether or not to show AM/PM with selected time
            showPeriodLabels: true, // Show the AM/PM labels on the left of the time picker
            showLeadingZero: true, // Define whether or not to show a leading zero for hours < 10. [true/false]
            showMinutesLeadingZero: true, // Define whether or not to show a leading zero for minutes < 10.
            altField: '', // Selector for an alternate field to store selected time into
            defaultTime: 'now', // Used as default time when input field is empty or for inline timePicker
            // (set to 'now' for the current time, '' for no highlighted time)
            myPosition: 'left top', // Position of the dialog relative to the input.
            // see the position utility for more info : http://jqueryui.com/demos/position/
            atPosition: 'left bottom', // Position of the input element to match
            // Note : if the position utility is not loaded, the timepicker will attach left top to left bottom
            //NEW: 2011-02-03
            onHourShow: null, // callback for enabling / disabling on selectable hours  ex : function(hour) { return true; }
            onMinuteShow: null, // callback for enabling / disabling on time selection  ex : function(hour,minute) { return true; }

            hours: {
                starts: 0, // first displayed hour
                ends: 23 // last displayed hour
            },
            minutes: {
                starts: 0, // first displayed minute
                ends: 55, // last displayed minute
                interval: 5, // interval of displayed minutes
                manual: [] // optional extra manual entries for minutes
            },
            rows: 4, // number of rows for the input tables, minimum 2, makes more sense if you use multiple of 2
            // 2011-08-05 0.2.4
            showHours: true, // display the hours section of the dialog
            showMinutes: true, // display the minute section of the dialog
            optionalMinutes: false, // optionally parse inputs of whole hours with minutes omitted

            // buttons
            showCloseButton: false, // shows an OK button to confirm the edit
            showNowButton: false, // Shows the 'now' button
            showDeselectButton: false, // Shows the deselect time button

            maxTime: {
                hour: null,
                minute: null
            },
            minTime: {
                hour: null,
                minute: null
            }

        };
        $.extend(this._defaults, this.regional['']);

        this.tpDiv = $('<div id="' + this._mainDivId + '" class="ui-timepicker ui-widget ui-helper-clearfix ui-corner-all " style="display: none"></div>');
    }

    $.extend(Timepicker.prototype, {
        /* Class name added to elements to indicate already configured with a time picker. */
        markerClassName: 'hasTimepicker',

        /* Debug logging (if enabled). */
        log: function log() {
            if (this.debug) console.log.apply('', arguments);
        },

        _widgetTimepicker: function _widgetTimepicker() {
            return this.tpDiv;
        },

        /* Override the default settings for all instances of the time picker.
         @param  settings  object - the new settings to use as defaults (anonymous object)
         @return the manager object */
        setDefaults: function setDefaults(settings) {
            extendRemove(this._defaults, settings || {});
            return this;
        },

        /* Attach the time picker to a jQuery selection.
         @param  target    element - the target input field or division or span
         @param  settings  object - the new settings to use for this time picker instance (anonymous) */
        _attachTimepicker: function _attachTimepicker(target, settings) {
            // check for settings on the control itself - in namespace 'time:'
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute('time:' + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue);
                    } catch (err) {
                        inlineSettings[attrName] = attrValue;
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase();
            var inline = nodeName == 'div' || nodeName == 'span';

            if (!target.id) {
                this.uuid += 1;
                target.id = 'tp' + this.uuid;
            }
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {});
            if (nodeName == 'input') {
                this._connectTimepicker(target, inst);
                // init inst.hours and inst.minutes from the input value
                this._setTimeFromField(inst);
            } else if (inline) {
                this._inlineTimepicker(target, inst);
            }
        },

        /* Create a new instance object. */
        _newInst: function _newInst(target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1'); // escape jQuery meta chars
            return {
                id: id, input: target, // associated target
                inline: inline, // is timepicker inline or not :
                tpDiv: !inline ? this.tpDiv : // presentation div
                $('<div class="' + this._inlineClass + ' ui-timepicker ui-widget  ui-helper-clearfix"></div>')
            };
        },

        /* Attach the time picker to an input field. */
        _connectTimepicker: function _connectTimepicker(target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName)) {
                return;
            }
            this._attachments(input, inst);
            input.addClass(this.markerClassName).keydown(this._doKeyDown).keyup(this._doKeyUp).bind("setData.timepicker", function (event, key, value) {
                inst.settings[key] = value;
            }).bind("getData.timepicker", function (event, key) {
                return this._get(inst, key);
            });
            $.data(target, PROP_NAME, inst);
        },

        /* Handle keystrokes. */
        _doKeyDown: function _doKeyDown(event) {
            var inst = $.timepicker._getInst(event.target);
            var handled = true;
            inst._keyEvent = true;
            if ($.timepicker._timepickerShowing) {
                switch (event.keyCode) {
                    case 9:
                        $.timepicker._hideTimepicker();
                        handled = false;
                        break; // hide on tab out
                    case 13:
                        $.timepicker._updateSelectedValue(inst);
                        $.timepicker._hideTimepicker();

                        return false; // don't submit the form
                        break; // select the value on enter
                    case 27:
                        $.timepicker._hideTimepicker();
                        break; // hide on escape
                    default:
                        handled = false;
                }
            } else if (event.keyCode == 36 && event.ctrlKey) {
                // display the time picker on ctrl+home
                $.timepicker._showTimepicker(this);
            } else {
                handled = false;
            }
            if (handled) {
                event.preventDefault();
                event.stopPropagation();
            }
        },

        /* Update selected time on keyUp */
        /* Added verion 0.0.5 */
        _doKeyUp: function _doKeyUp(event) {
            var inst = $.timepicker._getInst(event.target);
            $.timepicker._setTimeFromField(inst);
            $.timepicker._updateTimepicker(inst);
        },

        /* Make attachments based on settings. */
        _attachments: function _attachments(input, inst) {
            var appendText = this._get(inst, 'appendText');
            var isRTL = this._get(inst, 'isRTL');
            if (inst.append) {
                inst.append.remove();
            }
            if (appendText) {
                inst.append = $('<span class="' + this._appendClass + '">' + appendText + '</span>');
                input[isRTL ? 'before' : 'after'](inst.append);
            }
            input.unbind('focus.timepicker', this._showTimepicker);
            input.unbind('click.timepicker', this._adjustZIndex);

            if (inst.trigger) {
                inst.trigger.remove();
            }

            var showOn = this._get(inst, 'showOn');
            if (showOn == 'focus' || showOn == 'both') {
                // pop-up time picker when in the marked field
                input.bind("focus.timepicker", this._showTimepicker);
                input.bind("click.timepicker", this._adjustZIndex);
            }
            if (showOn == 'button' || showOn == 'both') {
                // pop-up time picker when 'button' element is clicked
                var button = this._get(inst, 'button');

                // Add button if button element is not set
                if (button == null) {
                    button = $('<button class="ui-timepicker-trigger" type="button">...</button>');
                    input.after(button);
                }

                $(button).bind("click.timepicker", function () {
                    if ($.timepicker._timepickerShowing && $.timepicker._lastInput == input[0]) {
                        $.timepicker._hideTimepicker();
                    } else if (!inst.input.is(':disabled')) {
                        $.timepicker._showTimepicker(input[0]);
                    }
                    return false;
                });
            }
        },

        /* Attach an inline time picker to a div. */
        _inlineTimepicker: function _inlineTimepicker(target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName)) return;
            divSpan.addClass(this.markerClassName).append(inst.tpDiv).bind("setData.timepicker", function (event, key, value) {
                inst.settings[key] = value;
            }).bind("getData.timepicker", function (event, key) {
                return this._get(inst, key);
            });
            $.data(target, PROP_NAME, inst);

            this._setTimeFromField(inst);
            this._updateTimepicker(inst);
            inst.tpDiv.show();
        },

        _adjustZIndex: function _adjustZIndex(input) {
            input = input.target || input;
            var inst = $.timepicker._getInst(input);
            inst.tpDiv.css('zIndex', $.timepicker._getZIndex(input) + 1);
        },

        /* Pop-up the time picker for a given input field.
         @param  input  element - the input field attached to the time picker or
         event - if triggered by focus */
        _showTimepicker: function _showTimepicker(input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() != 'input') {
                input = $('input', input.parentNode)[0];
            } // find from button/image trigger

            if ($.timepicker._isDisabledTimepicker(input) || $.timepicker._lastInput == input) {
                return;
            } // already here

            // fix v 0.0.8 - close current timepicker before showing another one
            $.timepicker._hideTimepicker();

            var inst = $.timepicker._getInst(input);
            if ($.timepicker._curInst && $.timepicker._curInst != inst) {
                $.timepicker._curInst.tpDiv.stop(true, true);
            }
            var beforeShow = $.timepicker._get(inst, 'beforeShow');
            extendRemove(inst.settings, beforeShow ? beforeShow.apply(input, [input, inst]) : {});
            inst.lastVal = null;
            $.timepicker._lastInput = input;

            $.timepicker._setTimeFromField(inst);

            // calculate default position
            if ($.timepicker._inDialog) {
                input.value = '';
            } // hide cursor
            if (!$.timepicker._pos) {
                // position below input
                $.timepicker._pos = $.timepicker._findPos(input);
                $.timepicker._pos[1] += input.offsetHeight; // add the height
            }
            var isFixed = false;
            $(input).parents().each(function () {
                isFixed |= $(this).css('position') == 'fixed';
                return !isFixed;
            });

            var offset = { left: $.timepicker._pos[0], top: $.timepicker._pos[1] };

            $.timepicker._pos = null;
            // determine sizing offscreen
            inst.tpDiv.css({ position: 'absolute', display: 'block', top: '-1000px' });
            $.timepicker._updateTimepicker(inst);

            // position with the ui position utility, if loaded
            if (!inst.inline && _typeof($.ui.position) == 'object') {
                inst.tpDiv.position({
                    of: inst.input,
                    my: $.timepicker._get(inst, 'myPosition'),
                    at: $.timepicker._get(inst, 'atPosition'),
                    // offset: $( "#offset" ).val(),
                    // using: using,
                    collision: 'flip'
                });
                var offset = inst.tpDiv.offset();
                $.timepicker._pos = [offset.top, offset.left];
            }

            // reset clicked state
            inst._hoursClicked = false;
            inst._minutesClicked = false;

            // fix width for dynamic number of time pickers
            // and adjust position before showing
            offset = $.timepicker._checkOffset(inst, offset, isFixed);
            inst.tpDiv.css({ position: $.timepicker._inDialog && $.blockUI ? 'static' : isFixed ? 'fixed' : 'absolute', display: 'none',
                left: offset.left + 'px', top: offset.top + 'px'
            });
            if (!inst.inline) {
                var showAnim = $.timepicker._get(inst, 'showAnim');
                var duration = $.timepicker._get(inst, 'duration');

                var postProcess = function postProcess() {
                    $.timepicker._timepickerShowing = true;
                    var borders = $.timepicker._getBorders(inst.tpDiv);
                    inst.tpDiv.find('iframe.ui-timepicker-cover'). // IE6- only
                    css({ left: -borders[0], top: -borders[1],
                        width: inst.tpDiv.outerWidth(), height: inst.tpDiv.outerHeight()
                    });
                };

                // Fixed the zIndex problem for real (I hope) - FG - v 0.2.9
                $.timepicker._adjustZIndex(input);
                //inst.tpDiv.css('zIndex', $.timepicker._getZIndex(input) +1);

                if ($.effects && $.effects[showAnim]) {
                    inst.tpDiv.show(showAnim, $.timepicker._get(inst, 'showOptions'), duration, postProcess);
                } else {
                    inst.tpDiv.show(showAnim ? duration : null, postProcess);
                }
                if (!showAnim || !duration) {
                    postProcess();
                }
                if (inst.input.is(':visible') && !inst.input.is(':disabled')) {
                    inst.input.focus();
                }
                $.timepicker._curInst = inst;
            }
        },

        // This is an enhanced copy of the zIndex function of UI core 1.8.?? For backward compatibility.
        // Enhancement returns maximum zindex value discovered while traversing parent elements,
        // rather than the first zindex value found. Ensures the timepicker popup will be in front,
        // even in funky scenarios like non-jq dialog containers with large fixed zindex values and
        // nested zindex-influenced elements of their own.
        _getZIndex: function _getZIndex(target) {
            var elem = $(target);
            var maxValue = 0;
            var position, value;
            while (elem.length && elem[0] !== document) {
                position = elem.css("position");
                if (position === "absolute" || position === "relative" || position === "fixed") {
                    value = parseInt(elem.css("zIndex"), 10);
                    if (!isNaN(value) && value !== 0) {
                        if (value > maxValue) {
                            maxValue = value;
                        }
                    }
                }
                elem = elem.parent();
            }

            return maxValue;
        },

        /* Refresh the time picker
         @param   target  element - The target input field or inline container element. */
        _refreshTimepicker: function _refreshTimepicker(target) {
            var inst = this._getInst(target);
            if (inst) {
                this._updateTimepicker(inst);
            }
        },

        /* Generate the time picker content. */
        _updateTimepicker: function _updateTimepicker(inst) {
            inst.tpDiv.empty().append(this._generateHTML(inst));
            this._rebindDialogEvents(inst);
        },

        _rebindDialogEvents: function _rebindDialogEvents(inst) {
            var borders = $.timepicker._getBorders(inst.tpDiv),
                self = this;
            inst.tpDiv.find('iframe.ui-timepicker-cover') // IE6- only
            .css({ left: -borders[0], top: -borders[1],
                width: inst.tpDiv.outerWidth(), height: inst.tpDiv.outerHeight()
            }).end()
            // after the picker html is appended bind the click & double click events (faster in IE this way
            // then letting the browser interpret the inline events)
            // the binding for the minute cells also exists in _updateMinuteDisplay
            .find('.ui-timepicker-minute-cell').unbind().bind("click", { fromDoubleClick: false }, $.proxy($.timepicker.selectMinutes, this)).bind("dblclick", { fromDoubleClick: true }, $.proxy($.timepicker.selectMinutes, this)).end().find('.ui-timepicker-hour-cell').unbind().bind("click", { fromDoubleClick: false }, $.proxy($.timepicker.selectHours, this)).bind("dblclick", { fromDoubleClick: true }, $.proxy($.timepicker.selectHours, this)).end().find('.ui-timepicker td a').unbind().bind('mouseout', function () {
                $(this).removeClass('ui-state-hover');
                if (this.className.indexOf('ui-timepicker-prev') != -1) $(this).removeClass('ui-timepicker-prev-hover');
                if (this.className.indexOf('ui-timepicker-next') != -1) $(this).removeClass('ui-timepicker-next-hover');
            }).bind('mouseover', function () {
                if (!self._isDisabledTimepicker(inst.inline ? inst.tpDiv.parent()[0] : inst.input[0])) {
                    $(this).parents('.ui-timepicker-calendar').find('a').removeClass('ui-state-hover');
                    $(this).addClass('ui-state-hover');
                    if (this.className.indexOf('ui-timepicker-prev') != -1) $(this).addClass('ui-timepicker-prev-hover');
                    if (this.className.indexOf('ui-timepicker-next') != -1) $(this).addClass('ui-timepicker-next-hover');
                }
            }).end().find('.' + this._dayOverClass + ' a').trigger('mouseover').end().find('.ui-timepicker-now').bind("click", function (e) {
                $.timepicker.selectNow(e);
            }).end().find('.ui-timepicker-deselect').bind("click", function (e) {
                $.timepicker.deselectTime(e);
            }).end().find('.ui-timepicker-close').bind("click", function (e) {
                $.timepicker._hideTimepicker();
            }).end();
        },

        /* Generate the HTML for the current state of the time picker. */
        _generateHTML: function _generateHTML(inst) {

            var h,
                m,
                row,
                col,
                html,
                hoursHtml,
                minutesHtml = '',
                showPeriod = this._get(inst, 'showPeriod') == true,
                showPeriodLabels = this._get(inst, 'showPeriodLabels') == true,
                showLeadingZero = this._get(inst, 'showLeadingZero') == true,
                showHours = this._get(inst, 'showHours') == true,
                showMinutes = this._get(inst, 'showMinutes') == true,
                amPmText = this._get(inst, 'amPmText'),
                rows = this._get(inst, 'rows'),
                amRows = 0,
                pmRows = 0,
                amItems = 0,
                pmItems = 0,
                amFirstRow = 0,
                pmFirstRow = 0,
                hours = Array(),
                hours_options = this._get(inst, 'hours'),
                hoursPerRow = null,
                hourCounter = 0,
                hourLabel = this._get(inst, 'hourText'),
                showCloseButton = this._get(inst, 'showCloseButton'),
                closeButtonText = this._get(inst, 'closeButtonText'),
                showNowButton = this._get(inst, 'showNowButton'),
                nowButtonText = this._get(inst, 'nowButtonText'),
                showDeselectButton = this._get(inst, 'showDeselectButton'),
                deselectButtonText = this._get(inst, 'deselectButtonText'),
                showButtonPanel = showCloseButton || showNowButton || showDeselectButton;

            // prepare all hours and minutes, makes it easier to distribute by rows
            for (h = hours_options.starts; h <= hours_options.ends; h++) {
                hours.push(h);
            }
            hoursPerRow = Math.ceil(hours.length / rows); // always round up

            if (showPeriodLabels) {
                for (hourCounter = 0; hourCounter < hours.length; hourCounter++) {
                    if (hours[hourCounter] < 12) {
                        amItems++;
                    } else {
                        pmItems++;
                    }
                }
                hourCounter = 0;

                amRows = Math.floor(amItems / hours.length * rows);
                pmRows = Math.floor(pmItems / hours.length * rows);

                // assign the extra row to the period that is more densely populated
                if (rows != amRows + pmRows) {
                    // Make sure: AM Has Items and either PM Does Not, AM has no rows yet, or AM is more dense
                    if (amItems && (!pmItems || !amRows || pmRows && amItems / amRows >= pmItems / pmRows)) {
                        amRows++;
                    } else {
                        pmRows++;
                    }
                }
                amFirstRow = Math.min(amRows, 1);
                pmFirstRow = amRows + 1;

                if (amRows == 0) {
                    hoursPerRow = Math.ceil(pmItems / pmRows);
                } else if (pmRows == 0) {
                    hoursPerRow = Math.ceil(amItems / amRows);
                } else {
                    hoursPerRow = Math.ceil(Math.max(amItems / amRows, pmItems / pmRows));
                }
            }

            html = '<table class="ui-timepicker-table ui-widget-content ui-corner-all"><tr>';

            if (showHours) {

                html += '<td class="ui-timepicker-hours">' + '<div class="ui-timepicker-title ui-widget-header ui-helper-clearfix ui-corner-all">' + hourLabel + '</div>' + '<table class="ui-timepicker">';

                for (row = 1; row <= rows; row++) {
                    html += '<tr>';
                    // AM
                    if (row == amFirstRow && showPeriodLabels) {
                        html += '<th rowspan="' + amRows.toString() + '" class="periods" scope="row">' + amPmText[0] + '</th>';
                    }
                    // PM
                    if (row == pmFirstRow && showPeriodLabels) {
                        html += '<th rowspan="' + pmRows.toString() + '" class="periods" scope="row">' + amPmText[1] + '</th>';
                    }
                    for (col = 1; col <= hoursPerRow; col++) {
                        if (showPeriodLabels && row < pmFirstRow && hours[hourCounter] >= 12) {
                            html += this._generateHTMLHourCell(inst, undefined, showPeriod, showLeadingZero);
                        } else {
                            html += this._generateHTMLHourCell(inst, hours[hourCounter], showPeriod, showLeadingZero);
                            hourCounter++;
                        }
                    }
                    html += '</tr>';
                }
                html += '</table>' + // Close the hours cells table
                '</td>'; // Close the Hour td
            }

            if (showMinutes) {
                html += '<td class="ui-timepicker-minutes">';
                html += this._generateHTMLMinutes(inst);
                html += '</td>';
            }

            html += '</tr>';

            if (showButtonPanel) {
                var buttonPanel = '<tr><td colspan="3"><div class="ui-timepicker-buttonpane ui-widget-content">';
                if (showNowButton) {
                    buttonPanel += '<button type="button" class="ui-timepicker-now ui-state-default ui-corner-all" ' + ' data-timepicker-instance-id="#' + inst.id.replace(/\\\\/g, "\\") + '" >' + nowButtonText + '</button>';
                }
                if (showDeselectButton) {
                    buttonPanel += '<button type="button" class="ui-timepicker-deselect ui-state-default ui-corner-all" ' + ' data-timepicker-instance-id="#' + inst.id.replace(/\\\\/g, "\\") + '" >' + deselectButtonText + '</button>';
                }
                if (showCloseButton) {
                    buttonPanel += '<button type="button" class="ui-timepicker-close ui-state-default ui-corner-all" ' + ' data-timepicker-instance-id="#' + inst.id.replace(/\\\\/g, "\\") + '" >' + closeButtonText + '</button>';
                }

                html += buttonPanel + '</div></td></tr>';
            }
            html += '</table>';

            return html;
        },

        /* Special function that update the minutes selection in currently visible timepicker
         * called on hour selection when onMinuteShow is defined  */
        _updateMinuteDisplay: function _updateMinuteDisplay(inst) {
            var newHtml = this._generateHTMLMinutes(inst);
            inst.tpDiv.find('td.ui-timepicker-minutes').html(newHtml);
            this._rebindDialogEvents(inst);
            // after the picker html is appended bind the click & double click events (faster in IE this way
            // then letting the browser interpret the inline events)
            // yes I know, duplicate code, sorry
            /*                .find('.ui-timepicker-minute-cell')
             .bind("click", { fromDoubleClick:false }, $.proxy($.timepicker.selectMinutes, this))
             .bind("dblclick", { fromDoubleClick:true }, $.proxy($.timepicker.selectMinutes, this));
             */
        },

        /*
         * Generate the minutes table
         * This is separated from the _generateHTML function because is can be called separately (when hours changes)
         */
        _generateHTMLMinutes: function _generateHTMLMinutes(inst) {

            var m,
                row,
                html = '',
                rows = this._get(inst, 'rows'),
                minutes = Array(),
                minutes_options = this._get(inst, 'minutes'),
                minutesPerRow = null,
                minuteCounter = 0,
                showMinutesLeadingZero = this._get(inst, 'showMinutesLeadingZero') == true,
                onMinuteShow = this._get(inst, 'onMinuteShow'),
                minuteLabel = this._get(inst, 'minuteText');

            if (!minutes_options.starts) {
                minutes_options.starts = 0;
            }
            if (!minutes_options.ends) {
                minutes_options.ends = 59;
            }
            if (!minutes_options.manual) {
                minutes_options.manual = [];
            }
            for (m = minutes_options.starts; m <= minutes_options.ends; m += minutes_options.interval) {
                minutes.push(m);
            }
            for (var i = 0; i < minutes_options.manual.length; i++) {
                var currMin = minutes_options.manual[i];

                // Validate & filter duplicates of manual minute input
                if (typeof currMin != 'number' || currMin < 0 || currMin > 59 || $.inArray(currMin, minutes) >= 0) {
                    continue;
                }
                minutes.push(currMin);
            }

            // Sort to get correct order after adding manual minutes
            // Use compare function to sort by number, instead of string (default)
            minutes.sort(function (a, b) {
                return a - b;
            });

            minutesPerRow = Math.round(minutes.length / rows + 0.49); // always round up

            /*
             * The minutes table
             */
            // if currently selected minute is not enabled, we have a problem and need to select a new minute.
            if (onMinuteShow && onMinuteShow.apply(inst.input ? inst.input[0] : null, [inst.hours, inst.minutes]) == false) {
                // loop minutes and select first available
                for (minuteCounter = 0; minuteCounter < minutes.length; minuteCounter += 1) {
                    m = minutes[minuteCounter];
                    if (onMinuteShow.apply(inst.input ? inst.input[0] : null, [inst.hours, m])) {
                        inst.minutes = m;
                        break;
                    }
                }
            }

            html += '<div class="ui-timepicker-title ui-widget-header ui-helper-clearfix ui-corner-all">' + minuteLabel + '</div>' + '<table class="ui-timepicker">';

            minuteCounter = 0;
            for (row = 1; row <= rows; row++) {
                html += '<tr>';
                while (minuteCounter < row * minutesPerRow) {
                    var m = minutes[minuteCounter];
                    var displayText = '';
                    if (m !== undefined) {
                        displayText = m < 10 && showMinutesLeadingZero ? "0" + m.toString() : m.toString();
                    }
                    html += this._generateHTMLMinuteCell(inst, m, displayText);
                    minuteCounter++;
                }
                html += '</tr>';
            }

            html += '</table>';

            return html;
        },

        /* Generate the content of a "Hour" cell */
        _generateHTMLHourCell: function _generateHTMLHourCell(inst, hour, showPeriod, showLeadingZero) {

            var displayHour = hour;
            if (hour > 12 && showPeriod) {
                displayHour = hour - 12;
            }
            if (displayHour == 0 && showPeriod) {
                displayHour = 12;
            }
            if (displayHour < 10 && showLeadingZero) {
                displayHour = '0' + displayHour;
            }

            var html = "";
            var enabled = true;
            var onHourShow = this._get(inst, 'onHourShow'); //custom callback
            var maxTime = this._get(inst, 'maxTime');
            var minTime = this._get(inst, 'minTime');

            if (hour == undefined) {
                html = '<td><span class="ui-state-default ui-state-disabled">&nbsp;</span></td>';
                return html;
            }

            if (onHourShow) {
                enabled = onHourShow.apply(inst.input ? inst.input[0] : null, [hour]);
            }

            if (enabled) {
                if (!isNaN(parseInt(maxTime.hour)) && hour > maxTime.hour) enabled = false;
                if (!isNaN(parseInt(minTime.hour)) && hour < minTime.hour) enabled = false;
            }

            if (enabled) {
                html = '<td class="ui-timepicker-hour-cell" data-timepicker-instance-id="#' + inst.id.replace(/\\\\/g, "\\") + '" data-hour="' + hour.toString() + '">' + '<a class="ui-state-default ' + (hour == inst.hours ? 'ui-state-active' : '') + '">' + displayHour.toString() + '</a></td>';
            } else {
                html = '<td>' + '<span class="ui-state-default ui-state-disabled ' + (hour == inst.hours ? ' ui-state-active ' : ' ') + '">' + displayHour.toString() + '</span>' + '</td>';
            }
            return html;
        },

        /* Generate the content of a "Hour" cell */
        _generateHTMLMinuteCell: function _generateHTMLMinuteCell(inst, minute, displayText) {
            var html = "";
            var enabled = true;
            var hour = inst.hours;
            var onMinuteShow = this._get(inst, 'onMinuteShow'); //custom callback
            var maxTime = this._get(inst, 'maxTime');
            var minTime = this._get(inst, 'minTime');

            if (onMinuteShow) {
                //NEW: 2011-02-03  we should give the hour as a parameter as well!
                enabled = onMinuteShow.apply(inst.input ? inst.input[0] : null, [inst.hours, minute]); //trigger callback
            }

            if (minute == undefined) {
                html = '<td><span class="ui-state-default ui-state-disabled">&nbsp;</span></td>';
                return html;
            }

            if (enabled && hour !== null) {
                if (!isNaN(parseInt(maxTime.hour)) && !isNaN(parseInt(maxTime.minute)) && hour >= maxTime.hour && minute > maxTime.minute) enabled = false;
                if (!isNaN(parseInt(minTime.hour)) && !isNaN(parseInt(minTime.minute)) && hour <= minTime.hour && minute < minTime.minute) enabled = false;
            }

            if (enabled) {
                html = '<td class="ui-timepicker-minute-cell" data-timepicker-instance-id="#' + inst.id.replace(/\\\\/g, "\\") + '" data-minute="' + minute.toString() + '" >' + '<a class="ui-state-default ' + (minute == inst.minutes ? 'ui-state-active' : '') + '" >' + displayText + '</a></td>';
            } else {

                html = '<td>' + '<span class="ui-state-default ui-state-disabled" >' + displayText + '</span>' + '</td>';
            }
            return html;
        },

        /* Detach a timepicker from its control.
         @param  target    element - the target input field or division or span */
        _destroyTimepicker: function _destroyTimepicker(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            var nodeName = target.nodeName.toLowerCase();
            $.removeData(target, PROP_NAME);
            if (nodeName == 'input') {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName).unbind('focus.timepicker', this._showTimepicker).unbind('click.timepicker', this._adjustZIndex);
            } else if (nodeName == 'div' || nodeName == 'span') $target.removeClass(this.markerClassName).empty();
        },

        /* Enable the date picker to a jQuery selection.
         @param  target    element - the target input field or division or span */
        _enableTimepicker: function _enableTimepicker(target) {
            var $target = $(target),
                target_id = $target.attr('id'),
                inst = $.data(target, PROP_NAME);

            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == 'input') {
                target.disabled = false;
                var button = this._get(inst, 'button');
                $(button).removeClass('ui-state-disabled').disabled = false;
                inst.trigger.filter('button').each(function () {
                    this.disabled = false;
                }).end();
            } else if (nodeName == 'div' || nodeName == 'span') {
                var inline = $target.children('.' + this._inlineClass);
                inline.children().removeClass('ui-state-disabled');
                inline.find('button').each(function () {
                    this.disabled = false;
                });
            }
            this._disabledInputs = $.map(this._disabledInputs, function (value) {
                return value == target_id ? null : value;
            }); // delete entry
        },

        /* Disable the time picker to a jQuery selection.
         @param  target    element - the target input field or division or span */
        _disableTimepicker: function _disableTimepicker(target) {
            var $target = $(target);
            var inst = $.data(target, PROP_NAME);
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            var nodeName = target.nodeName.toLowerCase();
            if (nodeName == 'input') {
                var button = this._get(inst, 'button');

                $(button).addClass('ui-state-disabled').disabled = true;
                target.disabled = true;

                inst.trigger.filter('button').each(function () {
                    this.disabled = true;
                }).end();
            } else if (nodeName == 'div' || nodeName == 'span') {
                var inline = $target.children('.' + this._inlineClass);
                inline.children().addClass('ui-state-disabled');
                inline.find('button').each(function () {
                    this.disabled = true;
                });
            }
            this._disabledInputs = $.map(this._disabledInputs, function (value) {
                return value == target ? null : value;
            }); // delete entry
            this._disabledInputs[this._disabledInputs.length] = $target.attr('id');
        },

        /* Is the first field in a jQuery collection disabled as a timepicker?
         @param  target_id element - the target input field or division or span
         @return boolean - true if disabled, false if enabled */
        _isDisabledTimepicker: function _isDisabledTimepicker(target_id) {
            if (!target_id) {
                return false;
            }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] == target_id) {
                    return true;
                }
            }
            return false;
        },

        /* Check positioning to remain on screen. */
        _checkOffset: function _checkOffset(inst, offset, isFixed) {
            var tpWidth = inst.tpDiv.outerWidth();
            var tpHeight = inst.tpDiv.outerHeight();
            var inputWidth = inst.input ? inst.input.outerWidth() : 0;
            var inputHeight = inst.input ? inst.input.outerHeight() : 0;
            var viewWidth = document.documentElement.clientWidth + $(document).scrollLeft();
            var viewHeight = document.documentElement.clientHeight + $(document).scrollTop();

            offset.left -= this._get(inst, 'isRTL') ? tpWidth - inputWidth : 0;
            offset.left -= isFixed && offset.left == inst.input.offset().left ? $(document).scrollLeft() : 0;
            offset.top -= isFixed && offset.top == inst.input.offset().top + inputHeight ? $(document).scrollTop() : 0;

            // now check if timepicker is showing outside window viewport - move to a better place if so.
            offset.left -= Math.min(offset.left, offset.left + tpWidth > viewWidth && viewWidth > tpWidth ? Math.abs(offset.left + tpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, offset.top + tpHeight > viewHeight && viewHeight > tpHeight ? Math.abs(tpHeight + inputHeight) : 0);

            return offset;
        },

        /* Find an object's position on the screen. */
        _findPos: function _findPos(obj) {
            var inst = this._getInst(obj);
            var isRTL = this._get(inst, 'isRTL');
            while (obj && (obj.type == 'hidden' || obj.nodeType != 1)) {
                obj = obj[isRTL ? 'previousSibling' : 'nextSibling'];
            }
            var position = $(obj).offset();
            return [position.left, position.top];
        },

        /* Retrieve the size of left and top borders for an element.
         @param  elem  (jQuery object) the element of interest
         @return  (number[2]) the left and top borders */
        _getBorders: function _getBorders(elem) {
            var convert = function convert(value) {
                return { thin: 1, medium: 2, thick: 3 }[value] || value;
            };
            return [parseFloat(convert(elem.css('border-left-width'))), parseFloat(convert(elem.css('border-top-width')))];
        },

        /* Close time picker if clicked elsewhere. */
        _checkExternalClick: function _checkExternalClick(event) {
            if (!$.timepicker._curInst) {
                return;
            }
            var $target = $(event.target);
            if ($target[0].id != $.timepicker._mainDivId && $target.parents('#' + $.timepicker._mainDivId).length == 0 && !$target.hasClass($.timepicker.markerClassName) && !$target.hasClass($.timepicker._triggerClass) && $.timepicker._timepickerShowing && !($.timepicker._inDialog && $.blockUI)) $.timepicker._hideTimepicker();
        },

        /* Hide the time picker from view.
         @param  input  element - the input field attached to the time picker */
        _hideTimepicker: function _hideTimepicker(input) {
            var inst = this._curInst;
            if (!inst || input && inst != $.data(input, PROP_NAME)) {
                return;
            }
            if (this._timepickerShowing) {
                var showAnim = this._get(inst, 'showAnim');
                var duration = this._get(inst, 'duration');
                var postProcess = function postProcess() {
                    $.timepicker._tidyDialog(inst);
                    this._curInst = null;
                };
                if ($.effects && $.effects[showAnim]) {
                    inst.tpDiv.hide(showAnim, $.timepicker._get(inst, 'showOptions'), duration, postProcess);
                } else {
                    inst.tpDiv[showAnim == 'slideDown' ? 'slideUp' : showAnim == 'fadeIn' ? 'fadeOut' : 'hide'](showAnim ? duration : null, postProcess);
                }
                if (!showAnim) {
                    postProcess();
                }

                this._timepickerShowing = false;

                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
                    if ($.blockUI) {
                        $.unblockUI();
                        $('body').append(this.tpDiv);
                    }
                }
                this._inDialog = false;

                var onClose = this._get(inst, 'onClose');
                if (onClose) {
                    onClose.apply(inst.input ? inst.input[0] : null, [inst.input ? inst.input.val() : '', inst]); // trigger custom callback
                }
            }
        },

        /* Tidy up after a dialog display. */
        _tidyDialog: function _tidyDialog(inst) {
            inst.tpDiv.removeClass(this._dialogClass).unbind('.ui-timepicker');
        },

        /* Retrieve the instance data for the target control.
         @param  target  element - the target input field or division or span
         @return  object - the associated instance data
         @throws  error if a jQuery problem getting data */
        _getInst: function _getInst(target) {
            try {
                return $.data(target, PROP_NAME);
            } catch (err) {
                throw 'Missing instance data for this timepicker';
            }
        },

        /* Get a setting value, defaulting if necessary. */
        _get: function _get(inst, name) {
            return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
        },

        /* Parse existing time and initialise time picker. */
        _setTimeFromField: function _setTimeFromField(inst) {
            if (inst.input.val() == inst.lastVal) {
                return;
            }
            var defaultTime = this._get(inst, 'defaultTime');

            var timeToParse = defaultTime == 'now' ? this._getCurrentTimeRounded(inst) : defaultTime;
            if (inst.inline == false && inst.input.val() != '') {
                timeToParse = inst.input.val();
            }

            if (timeToParse instanceof Date) {
                inst.hours = timeToParse.getHours();
                inst.minutes = timeToParse.getMinutes();
            } else {
                var timeVal = inst.lastVal = timeToParse;
                if (timeToParse == '') {
                    inst.hours = -1;
                    inst.minutes = -1;
                } else {
                    var time = this.parseTime(inst, timeVal);
                    inst.hours = time.hours;
                    inst.minutes = time.minutes;
                }
            }

            $.timepicker._updateTimepicker(inst);
        },

        /* Update or retrieve the settings for an existing time picker.
         @param  target  element - the target input field or division or span
         @param  name    object - the new settings to update or
         string - the name of the setting to change or retrieve,
         when retrieving also 'all' for all instance settings or
         'defaults' for all global defaults
         @param  value   any - the new value for the setting
         (omit if above is an object or to retrieve a value) */
        _optionTimepicker: function _optionTimepicker(target, name, value) {
            var inst = this._getInst(target);
            if (arguments.length == 2 && typeof name == 'string') {
                return name == 'defaults' ? $.extend({}, $.timepicker._defaults) : inst ? name == 'all' ? $.extend({}, inst.settings) : this._get(inst, name) : null;
            }
            var settings = name || {};
            if (typeof name == 'string') {
                settings = {};
                settings[name] = value;
            }
            if (inst) {
                extendRemove(inst.settings, settings);
                if (this._curInst == inst) {
                    this._hideTimepicker();
                    this._updateTimepicker(inst);
                }
                if (inst.inline) {
                    this._updateTimepicker(inst);
                }
            }
        },

        /* Set the time for a jQuery selection.
         @param  target  element - the target input field or division or span
         @param  time    String - the new time */
        _setTimeTimepicker: function _setTimeTimepicker(target, time, noChange) {
            var inst = this._getInst(target);
            if (inst) {
                this._setTime(inst, time, noChange);
                this._updateTimepicker(inst);
                this._updateAlternate(inst, time);
            }
        },

        /* Set the time directly. */
        _setTime: function _setTime(inst, time, noChange) {
            var origHours = inst.hours;
            var origMinutes = inst.minutes;
            if (time instanceof Date) {
                inst.hours = time.getHours();
                inst.minutes = time.getMinutes();
            } else {
                var time = this.parseTime(inst, time);
                inst.hours = time.hours;
                inst.minutes = time.minutes;
            }

            if ((origHours != inst.hours || origMinutes != inst.minutes) && !noChange) {
                inst.input.trigger('change');
            }
            this._updateTimepicker(inst);
            this._updateSelectedValue(inst);
        },

        /* Return the current time, ready to be parsed, rounded to the closest minute by interval */
        _getCurrentTimeRounded: function _getCurrentTimeRounded(inst) {
            var currentTime = new Date(),
                currentMinutes = currentTime.getMinutes(),
                minutes_options = this._get(inst, 'minutes'),

            // round to closest interval
            adjustedMinutes = Math.round(currentMinutes / minutes_options.interval) * minutes_options.interval;
            currentTime.setMinutes(adjustedMinutes);
            return currentTime;
        },

        /*
         * Parse a time string into hours and minutes
         */
        parseTime: function parseTime(inst, timeVal) {
            var retVal = new Object();
            retVal.hours = -1;
            retVal.minutes = -1;

            if (!timeVal) return '';

            var timeSeparator = this._get(inst, 'timeSeparator'),
                amPmText = this._get(inst, 'amPmText'),
                showHours = this._get(inst, 'showHours'),
                showMinutes = this._get(inst, 'showMinutes'),
                optionalMinutes = this._get(inst, 'optionalMinutes'),
                showPeriod = this._get(inst, 'showPeriod') == true,
                p = timeVal.indexOf(timeSeparator);

            // check if time separator found
            if (p != -1) {
                retVal.hours = parseInt(timeVal.substr(0, p), 10);
                retVal.minutes = parseInt(timeVal.substr(p + 1), 10);
            }
            // check for hours only
            else if (showHours && (!showMinutes || optionalMinutes)) {
                    retVal.hours = parseInt(timeVal, 10);
                }
                // check for minutes only
                else if (!showHours && showMinutes) {
                        retVal.minutes = parseInt(timeVal, 10);
                    }

            if (showHours) {
                var timeValUpper = timeVal.toUpperCase();
                if (retVal.hours < 12 && showPeriod && timeValUpper.indexOf(amPmText[1].toUpperCase()) != -1) {
                    retVal.hours += 12;
                }
                // fix for 12 AM
                if (retVal.hours == 12 && showPeriod && timeValUpper.indexOf(amPmText[0].toUpperCase()) != -1) {
                    retVal.hours = 0;
                }
            }

            return retVal;
        },

        selectNow: function selectNow(event) {
            var id = $(event.target).attr("data-timepicker-instance-id"),
                $target = $(id),
                inst = this._getInst($target[0]);
            //if (!inst || (input && inst != $.data(input, PROP_NAME))) { return; }
            var currentTime = new Date();
            inst.hours = currentTime.getHours();
            inst.minutes = currentTime.getMinutes();
            this._updateSelectedValue(inst);
            this._updateTimepicker(inst);
            this._hideTimepicker();
        },

        deselectTime: function deselectTime(event) {
            var id = $(event.target).attr("data-timepicker-instance-id"),
                $target = $(id),
                inst = this._getInst($target[0]);
            inst.hours = -1;
            inst.minutes = -1;
            this._updateSelectedValue(inst);
            this._hideTimepicker();
        },

        selectHours: function selectHours(event) {
            var $td = $(event.currentTarget),
                id = $td.attr("data-timepicker-instance-id"),
                newHours = parseInt($td.attr("data-hour")),
                fromDoubleClick = event.data.fromDoubleClick,
                $target = $(id),
                inst = this._getInst($target[0]),
                showMinutes = this._get(inst, 'showMinutes') == true;

            // don't select if disabled
            if ($.timepicker._isDisabledTimepicker($target.attr('id'))) {
                return false;
            }

            $td.parents('.ui-timepicker-hours:first').find('a').removeClass('ui-state-active');
            $td.children('a').addClass('ui-state-active');
            inst.hours = newHours;

            // added for onMinuteShow callback
            var onMinuteShow = this._get(inst, 'onMinuteShow'),
                maxTime = this._get(inst, 'maxTime'),
                minTime = this._get(inst, 'minTime');
            if (onMinuteShow || maxTime.minute || minTime.minute) {
                // this will trigger a callback on selected hour to make sure selected minute is allowed.
                this._updateMinuteDisplay(inst);
            }

            this._updateSelectedValue(inst);

            inst._hoursClicked = true;
            if (inst._minutesClicked || fromDoubleClick || showMinutes == false) {
                $.timepicker._hideTimepicker();
            }
            // return false because if used inline, prevent the url to change to a hashtag
            return false;
        },

        selectMinutes: function selectMinutes(event) {
            var $td = $(event.currentTarget),
                id = $td.attr("data-timepicker-instance-id"),
                newMinutes = parseInt($td.attr("data-minute")),
                fromDoubleClick = event.data.fromDoubleClick,
                $target = $(id),
                inst = this._getInst($target[0]),
                showHours = this._get(inst, 'showHours') == true;

            // don't select if disabled
            if ($.timepicker._isDisabledTimepicker($target.attr('id'))) {
                return false;
            }

            $td.parents('.ui-timepicker-minutes:first').find('a').removeClass('ui-state-active');
            $td.children('a').addClass('ui-state-active');

            inst.minutes = newMinutes;
            this._updateSelectedValue(inst);

            inst._minutesClicked = true;
            if (inst._hoursClicked || fromDoubleClick || showHours == false) {
                $.timepicker._hideTimepicker();
                // return false because if used inline, prevent the url to change to a hashtag
                return false;
            }

            // return false because if used inline, prevent the url to change to a hashtag
            return false;
        },

        _updateSelectedValue: function _updateSelectedValue(inst) {
            var newTime = this._getParsedTime(inst);
            if (inst.input) {
                inst.input.val(newTime);
                inst.input.trigger('change');
            }
            var onSelect = this._get(inst, 'onSelect');
            if (onSelect) {
                onSelect.apply(inst.input ? inst.input[0] : null, [newTime, inst]);
            } // trigger custom callback
            this._updateAlternate(inst, newTime);
            return newTime;
        },

        /* this function process selected time and return it parsed according to instance options */
        _getParsedTime: function _getParsedTime(inst) {

            if (inst.hours == -1 && inst.minutes == -1) {
                return '';
            }

            // default to 0 AM if hours is not valid
            if (inst.hours < inst.hours.starts || inst.hours > inst.hours.ends) {
                inst.hours = 0;
            }
            // default to 0 minutes if minute is not valid
            if (inst.minutes < inst.minutes.starts || inst.minutes > inst.minutes.ends) {
                inst.minutes = 0;
            }

            var period = "",
                showPeriod = this._get(inst, 'showPeriod') == true,
                showLeadingZero = this._get(inst, 'showLeadingZero') == true,
                showHours = this._get(inst, 'showHours') == true,
                showMinutes = this._get(inst, 'showMinutes') == true,
                optionalMinutes = this._get(inst, 'optionalMinutes') == true,
                amPmText = this._get(inst, 'amPmText'),
                selectedHours = inst.hours ? inst.hours : 0,
                selectedMinutes = inst.minutes ? inst.minutes : 0,
                displayHours = selectedHours ? selectedHours : 0,
                parsedTime = '';

            // fix some display problem when hours or minutes are not selected yet
            if (displayHours == -1) {
                displayHours = 0;
            }
            if (selectedMinutes == -1) {
                selectedMinutes = 0;
            }

            if (showPeriod) {
                if (inst.hours == 0) {
                    displayHours = 12;
                }
                if (inst.hours < 12) {
                    period = amPmText[0];
                } else {
                    period = amPmText[1];
                    if (displayHours > 12) {
                        displayHours -= 12;
                    }
                }
            }

            var h = displayHours.toString();
            if (showLeadingZero && displayHours < 10) {
                h = '0' + h;
            }

            var m = selectedMinutes.toString();
            if (selectedMinutes < 10) {
                m = '0' + m;
            }

            if (showHours) {
                parsedTime += h;
            }
            if (showHours && showMinutes && (!optionalMinutes || m != 0)) {
                parsedTime += this._get(inst, 'timeSeparator');
            }
            if (showMinutes && (!optionalMinutes || m != 0)) {
                parsedTime += m;
            }
            if (showHours) {
                if (period.length > 0) {
                    parsedTime += this._get(inst, 'periodSeparator') + period;
                }
            }

            return parsedTime;
        },

        /* Update any alternate field to synchronise with the main field. */
        _updateAlternate: function _updateAlternate(inst, newTime) {
            var altField = this._get(inst, 'altField');
            if (altField) {
                // update alternate field too
                $(altField).each(function (i, e) {
                    $(e).val(newTime);
                });
            }
        },

        _getTimeAsDateTimepicker: function _getTimeAsDateTimepicker(input) {
            var inst = this._getInst(input);
            if (inst.hours == -1 && inst.minutes == -1) {
                return '';
            }

            // default to 0 AM if hours is not valid
            if (inst.hours < inst.hours.starts || inst.hours > inst.hours.ends) {
                inst.hours = 0;
            }
            // default to 0 minutes if minute is not valid
            if (inst.minutes < inst.minutes.starts || inst.minutes > inst.minutes.ends) {
                inst.minutes = 0;
            }

            return new Date(0, 0, 0, inst.hours, inst.minutes, 0);
        },
        /* This might look unused but it's called by the $.fn.timepicker function with param getTime */
        /* added v 0.2.3 - gitHub issue #5 - Thanks edanuff */
        _getTimeTimepicker: function _getTimeTimepicker(input) {
            var inst = this._getInst(input);
            return this._getParsedTime(inst);
        },
        _getHourTimepicker: function _getHourTimepicker(input) {
            var inst = this._getInst(input);
            if (inst == undefined) {
                return -1;
            }
            return inst.hours;
        },
        _getMinuteTimepicker: function _getMinuteTimepicker(input) {
            var inst = this._getInst(input);
            if (inst == undefined) {
                return -1;
            }
            return inst.minutes;
        }

    });

    /* Invoke the timepicker functionality.
     @param  options  string - a command, optionally followed by additional parameters or
     Object - settings for attaching new timepicker functionality
     @return  jQuery object */
    $.fn.timepicker = function (options) {
        /* Initialise the time picker. */
        if (!$.timepicker.initialized) {
            $(document).mousedown($.timepicker._checkExternalClick);
            $.timepicker.initialized = true;
        }

        /* Append timepicker main container to body if not exist. */
        if ($("#" + $.timepicker._mainDivId).length === 0) {
            $('body').append($.timepicker.tpDiv);
        }

        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options == 'string' && (options == 'getTime' || options == 'getTimeAsDate' || options == 'getHour' || options == 'getMinute')) return $.timepicker['_' + options + 'Timepicker'].apply($.timepicker, [this[0]].concat(otherArgs));
        if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string') return $.timepicker['_' + options + 'Timepicker'].apply($.timepicker, [this[0]].concat(otherArgs));
        return this.each(function () {
            typeof options == 'string' ? $.timepicker['_' + options + 'Timepicker'].apply($.timepicker, [this].concat(otherArgs)) : $.timepicker._attachTimepicker(this, options);
        });
    };

    /* jQuery extend now ignores nulls! */
    function extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] == null || props[name] == undefined) target[name] = props[name];
        }return target;
    };

    $.timepicker = new Timepicker(); // singleton instance
    $.timepicker.initialized = false;
    $.timepicker.uuid = new Date().getTime();
    $.timepicker.version = "0.3.3";

    // Workaround for #4055
    // Add another global to avoid noConflict issues with inline event handlers
    window['TP_jQuery_' + tpuuid] = $;
})(jQuery);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./all.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./all.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,700&subset=latin,vietnamese,cyrillic-ext,latin-ext,cyrillic);", ""]);

// module
exports.push([module.i, "@charset \"UTF-8\";\n/*\n * To replace characters in a string\n */\n/*\n * To create an optimized svg url\n */\n/*\n * return svg url using specified color\n */\nbody {\n  font-family: roboto, sans-serif;\n  font-size: 18px;\n  position: relative;\n  min-height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #000;\n  background: #FFF;\n  background-repeat: repeat-x;\n  background-position: bottom; }\n\ni {\n  font-style: italic; }\n\n.primary-color {\n  color: #2A3052; }\n\n.primary-bg-color {\n  background-color: #2A3052; }\n\n.secondary-color {\n  color: #E98024; }\n\n.secondary-bg-color {\n  background-color: #E98024; }\n\n.primary-color-dark {\n  color: #15212D; }\n\n.primary-bg-color-dark {\n  background-color: #15212D; }\n\n.content-inverse-color, .content-inverse-color:visited {\n  color: #FFF; }\n\n.fill-bg-color {\n  background-color: #F2F2F2; }\n\n.border-color {\n  border-color: #DEDEDE; }\n\nol, ul {\n  list-style: none; }\n\nul.bullet {\n  margin: 1.25em 0 1.25em 1.25em; }\n\nol {\n  margin: 1.25em 0 1.25em 1.25em; }\n\nul.bullet > li {\n  list-style-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='18px' height='18px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath fill='%23e98024' d='M12,17.5A5.5,5.5,0,1,1,17.5,12,5.507,5.507,0,0,1,12,17.5Zm0-9A3.5,3.5,0,1,0,15.5,12,3.5,3.5,0,0,0,12,8.5Z'/%3E%3C/svg%3E\"); }\n\nol li, ul li {\n  line-height: 1.4em;\n  margin: .5em 0 0; }\n  ol li ol, ol li ul, ul li ol, ul li ul {\n    margin: .8em 0 0 1em; }\n\nol li {\n  list-style-type: decimal;\n  list-style-image: none; }\n\nimg {\n  vertical-align: middle;\n  border: 0; }\n\nul.checked > li {\n  min-height: 24px;\n  padding-left: 35px;\n  background: url(\"data:image/svg+xml;charset=utf8,%3Csvg width='24px' height='24px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpolygon fill='%23e98024' points='8.308 22.298 0.399 14.39 3.934 10.854 8.308 15.228 20.066 3.47 23.601 7.005 8.308 22.298'/%3E%3C/svg%3E\") no-repeat; }\n\n.reset_ol {\n  counter-reset: item; }\n  .reset_ol li {\n    display: block; }\n  .reset_ol li:before {\n    content: counters(item, \".\") \". \";\n    counter-increment: item; }\n\n.border-bottom {\n  border-bottom: 1px solid #DEDEDE; }\n\n.contract_error {\n  background-color: #FEF1CF !important; }\n\nheader,\n#header,\n.header {\n  border-top: 2px solid #2A3052;\n  border-bottom: 4px solid #E98024;\n  background: #2A3052; }\n\n#header a, .header a {\n  color: #FFF;\n  text-decoration: none; }\n\n#header #menu-top li.active a, .header #menu-top li.active a {\n  color: #E98024; }\n\n#footer #footer-regulatory a {\n  font-size: 10px; }\n\n#footer a {\n  font-size: 13px;\n  font-weight: 400;\n  color: #FFF; }\n\n.invisible {\n  display: none !important; }\n\n.center-text {\n  text-align: center; }\n\n.separator-line {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.align-self-center {\n  align-self: center; }\n\nbutton {\n  text-decoration: none;\n  text-align: center;\n  line-height: 100%;\n  text-transform: capitalize;\n  padding: 10px 25px;\n  display: inline-block;\n  font-weight: 400;\n  font-family: inherit;\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 18px;\n  border: 0;\n  background: #2E8836;\n  color: #FFF; }\n  button:active, button:hover {\n    text-decoration: none; }\n  button:visited {\n    color: #FFF; }\n  button:active, button:hover {\n    background-color: #14602B; }\n  button.button-secondary {\n    background: #F2F2F2;\n    color: #000; }\n    button.button-secondary:active, button.button-secondary:hover, button.button-secondary:visited {\n      background-color: #DEDEDE; }\n\n.button {\n  cursor: pointer;\n  margin-bottom: 0.5em; }\n  .button span {\n    text-decoration: none;\n    text-align: center;\n    line-height: 100%;\n    text-transform: capitalize;\n    padding: 10px 25px;\n    display: inline-block;\n    font-weight: 400;\n    font-family: inherit;\n    border-radius: 3px;\n    overflow: visible;\n    border: 0;\n    color: #FFF;\n    background: #2E8836; }\n    .button span:active, .button span:hover {\n      text-decoration: none; }\n    .button span:hover {\n      background-color: #14602B; }\n    .button spanvisited {\n      color: #FFF; }\n\n.button-secondary {\n  cursor: pointer;\n  margin-bottom: 0.5em; }\n  .button-secondary span {\n    text-decoration: none;\n    text-align: center;\n    line-height: 100%;\n    text-transform: capitalize;\n    padding: 10px 25px;\n    display: inline-block;\n    font-weight: 400;\n    font-family: inherit;\n    border-radius: 3px;\n    overflow: visible;\n    border: 0;\n    color: #000;\n    background: #F2F2F2; }\n    .button-secondary span:active, .button-secondary span:hover {\n      text-decoration: none; }\n    .button-secondary span:hover {\n      text-decoration: none;\n      background: #DEDEDE; }\n\n.button-disabled {\n  cursor: pointer;\n  margin-bottom: 0.5em; }\n  .button-disabled span {\n    text-decoration: none;\n    text-align: center;\n    line-height: 100%;\n    text-transform: capitalize;\n    padding: 10px 25px;\n    display: inline-block;\n    font-weight: 400;\n    font-family: inherit;\n    border-radius: 3px;\n    overflow: visible;\n    white-space: nowrap;\n    border: 0;\n    color: #DEDEDE;\n    background: #F2F2F2;\n    cursor: default; }\n    .button-disabled span:active, .button-disabled span:hover {\n      text-decoration: none; }\n    .button-disabled span:active, .button-disabled span:hover {\n      color: #DEDEDE;\n      background: #F2F2F2; }\n\nh1, h2, h3, h4, li, p, a, span {\n  text-rendering: optimizelegibility; }\n\na, a:visited {\n  color: #2A3052;\n  text-decoration: none;\n  font-weight: bold; }\n  a:hover, a:active, a:visited:hover, a:visited:active {\n    text-decoration: underline; }\n\np {\n  margin: 1em 0;\n  line-height: 1.4em; }\n\n.font-n {\n  font-size: 18px; }\n\n.font-s {\n  font-size: 13px; }\n\n.font-xs {\n  font-size: 10px; }\n\nh1 {\n  font-size: 36px;\n  font-weight: 300;\n  color: #E98024; }\n  h1 a {\n    color: #E98024 !important; }\n\nh1.dark {\n  color: #2A3052; }\n  h1.dark a {\n    color: #2A3052 !important; }\n\nh2 {\n  font-size: 28px;\n  color: #E98024;\n  font-weight: 300; }\n  h2 a {\n    color: #2A3052 !important; }\n  h2 em {\n    text-decoration: underline; }\n  h2.center {\n    text-align: center;\n    margin: 1.25em auto; }\n\nh3 {\n  color: #2A3052;\n  font-size: 22px;\n  font-weight: 300; }\n  h3 a {\n    color: #2A3052 !important; }\n\nh4 {\n  color: #000;\n  font-size: 18px; }\n  h4 a {\n    color: #000 !important; }\n\nselect, input, textarea {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  font-style: inherit;\n  padding: 2px 3px;\n  border: 1px solid #F2F2F2;\n  color: #000;\n  background: #FFF;\n  border-radius: 3px; }\n\nfieldset {\n  border: 1px solid #F2F2F2; }\n\n.hint {\n  font-size: 13px;\n  color: #000;\n  margin-top: 3px; }\n\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #C2C2C2; }\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #C2C2C2; }\n\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: #C2C2C2; }\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #C2C2C2; }\n\n.ui-widget-content .ui-state-default.ui-selectmenu-button {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  font-style: inherit;\n  border: 1px solid #F2F2F2;\n  color: #000;\n  background: #FFF;\n  border-radius: 3px; }\n\n.error-msg {\n  font-style: italic;\n  font-size: 13px;\n  color: #C03; }\n\n.notice-msg {\n  color: #000;\n  background-color: #FEF1CF;\n  padding: 10px;\n  overflow: hidden; }\n\n#topbar, .topbar {\n  width: 100%;\n  line-height: 1;\n  font-size: 70%;\n  text-align: right;\n  padding: 3px 0;\n  z-index: 2;\n  min-height: 20px; }\n  #topbar .languages, .topbar .languages {\n    position: relative; }\n  #topbar #select_language, .topbar #select_language {\n    opacity: 0;\n    visibility: hidden;\n    background-color: #F2F2F2;\n    border: 1px solid #DEDEDE;\n    color: #000;\n    position: absolute;\n    right: 0; }\n    #topbar #select_language .nav-caret, .topbar #select_language .nav-caret {\n      color: #000; }\n    #topbar #select_language li:nth-child(2), .topbar #select_language li:nth-child(2) {\n      margin-top: 2px;\n      padding: 3px; }\n    #topbar #select_language li:first-child, .topbar #select_language li:first-child {\n      padding-top: 3px; }\n  #topbar #display_language, .topbar #display_language {\n    border: 1px solid transparent;\n    color: #fff;\n    height: 18px; }\n    #topbar #display_language .nav-caret, .topbar #display_language .nav-caret {\n      color: #fff; }\n    #topbar #display_language li:first-child, .topbar #display_language li:first-child {\n      margin: 0;\n      padding: 0; }\n  #topbar #select_language, #topbar #display_language, .topbar #select_language, .topbar #display_language {\n    float: right;\n    text-align: center;\n    padding: 0;\n    margin: 0;\n    width: 116px;\n    font-size: 13px; }\n    #topbar #select_language li, #topbar #display_language li, .topbar #select_language li, .topbar #display_language li {\n      cursor: pointer;\n      margin: 2px;\n      padding: 3px; }\n      #topbar #select_language li:first-child, #topbar #display_language li:first-child, .topbar #select_language li:first-child, .topbar #display_language li:first-child {\n        display: inline-block;\n        margin: 0; }\n  #topbar .language-wrapper, .topbar .language-wrapper {\n    vertical-align: middle;\n    padding: 0 5px;\n    display: inline-flex;\n    min-width: 58px;\n    margin: 0 auto; }\n  #topbar .language, .topbar .language {\n    margin: 0 auto; }\n  #topbar .nav-caret, .topbar .nav-caret {\n    vertical-align: middle;\n    margin-right: 9px; }\n  #topbar .world, .topbar .world {\n    width: 16px;\n    height: 16px;\n    display: inline-block;\n    vertical-align: middle; }\n  #topbar .world-white, .topbar .world-white {\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='white' fill-rule='evenodd' d='M7.992,0 C3.576,0 0,3.584 0,8 C0,12.416 3.576,16 7.992,16 C12.416,16 16,12.416 16,8 C16,3.584 12.416,0 7.992,0 L7.992,0 Z M13.536,4.8 L11.176,4.8 C10.92,3.8 10.552,2.84 10.072,1.952 C11.544,2.456 12.768,3.48 13.536,4.8 L13.536,4.8 Z M8,1.632 C8.664,2.592 9.184,3.656 9.528,4.8 L6.472,4.8 C6.816,3.656 7.336,2.592 8,1.632 L8,1.632 Z M1.808,9.6 C1.68,9.088 1.6,8.552 1.6,8 C1.6,7.448 1.68,6.912 1.808,6.4 L4.512,6.4 C4.448,6.928 4.4,7.456 4.4,8 C4.4,8.544 4.448,9.072 4.512,9.6 L1.808,9.6 L1.808,9.6 Z M2.464,11.2 L4.824,11.2 C5.08,12.2 5.448,13.16 5.928,14.048 C4.456,13.544 3.232,12.528 2.464,11.2 L2.464,11.2 Z M4.824,4.8 L2.464,4.8 C3.232,3.472 4.456,2.456 5.928,1.952 C5.448,2.84 5.08,3.8 4.824,4.8 L4.824,4.8 Z M8,14.368 C7.336,13.408 6.816,12.344 6.472,11.2 L9.528,11.2 C9.184,12.344 8.664,13.408 8,14.368 L8,14.368 Z M9.872,9.6 L6.128,9.6 C6.056,9.072 6,8.544 6,8 C6,7.456 6.056,6.92 6.128,6.4 L9.872,6.4 C9.944,6.92 10,7.456 10,8 C10,8.544 9.944,9.072 9.872,9.6 L9.872,9.6 Z M10.072,14.048 C10.552,13.16 10.92,12.2 11.176,11.2 L13.536,11.2 C12.768,12.52 11.544,13.544 10.072,14.048 L10.072,14.048 Z M11.488,9.6 C11.552,9.072 11.6,8.544 11.6,8 C11.6,7.456 11.552,6.928 11.488,6.4 L14.192,6.4 C14.32,6.912 14.4,7.448 14.4,8 C14.4,8.552 14.32,9.088 14.192,9.6 L11.488,9.6 L11.488,9.6 Z'/%3E%3C/svg%3E\"); }\n  #topbar .world-black, .topbar .world-black {\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='black' fill-rule='evenodd' d='M7.992,0 C3.576,0 0,3.584 0,8 C0,12.416 3.576,16 7.992,16 C12.416,16 16,12.416 16,8 C16,3.584 12.416,0 7.992,0 L7.992,0 Z M13.536,4.8 L11.176,4.8 C10.92,3.8 10.552,2.84 10.072,1.952 C11.544,2.456 12.768,3.48 13.536,4.8 L13.536,4.8 Z M8,1.632 C8.664,2.592 9.184,3.656 9.528,4.8 L6.472,4.8 C6.816,3.656 7.336,2.592 8,1.632 L8,1.632 Z M1.808,9.6 C1.68,9.088 1.6,8.552 1.6,8 C1.6,7.448 1.68,6.912 1.808,6.4 L4.512,6.4 C4.448,6.928 4.4,7.456 4.4,8 C4.4,8.544 4.448,9.072 4.512,9.6 L1.808,9.6 L1.808,9.6 Z M2.464,11.2 L4.824,11.2 C5.08,12.2 5.448,13.16 5.928,14.048 C4.456,13.544 3.232,12.528 2.464,11.2 L2.464,11.2 Z M4.824,4.8 L2.464,4.8 C3.232,3.472 4.456,2.456 5.928,1.952 C5.448,2.84 5.08,3.8 4.824,4.8 L4.824,4.8 Z M8,14.368 C7.336,13.408 6.816,12.344 6.472,11.2 L9.528,11.2 C9.184,12.344 8.664,13.408 8,14.368 L8,14.368 Z M9.872,9.6 L6.128,9.6 C6.056,9.072 6,8.544 6,8 C6,7.456 6.056,6.92 6.128,6.4 L9.872,6.4 C9.944,6.92 10,7.456 10,8 C10,8.544 9.944,9.072 9.872,9.6 L9.872,9.6 Z M10.072,14.048 C10.552,13.16 10.92,12.2 11.176,11.2 L13.536,11.2 C12.768,12.52 11.544,13.544 10.072,14.048 L10.072,14.048 Z M11.488,9.6 C11.552,9.072 11.6,8.544 11.6,8 C11.6,7.456 11.552,6.928 11.488,6.4 L14.192,6.4 C14.32,6.912 14.4,7.448 14.4,8 C14.4,8.552 14.32,9.088 14.192,9.6 L11.488,9.6 L11.488,9.6 Z'/%3E%3C/svg%3E\"); }\n\nbody .topbar {\n  padding: 0 11px; }\n\n#topbar, #topbar a, .topbar, .topbar a {\n  color: #FFF; }\n  #topbar:hover, #topbar a:hover, .topbar:hover, .topbar a:hover {\n    text-decoration: none; }\n\n.logo-wrapper {\n  display: inline-flex;\n  vertical-align: middle; }\n  .logo-wrapper .binary-logo-text > div {\n    width: 135px; }\n  .logo-wrapper .binary-logo-text img.responsive {\n    width: 80%;\n    margin-top: 10px; }\n  .logo-wrapper .logo-parent {\n    display: inline-flex; }\n    .logo-wrapper .logo-parent .logo {\n      width: 55px;\n      height: 55px; }\n\n.logo-parent {\n  padding: 10px 0; }\n\n.logo {\n  display: inline-block;\n  width: 24%; }\n  .logo > div {\n    width: 100%;\n    height: 55px;\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='46' height='46' viewBox='0 0 46 46'%3E%3Cpath fill='%23fff' d='M39.057 6.937C30.2-1.926 15.792-1.926 6.934 6.934c-8.856 8.857-8.856 23.273 0 32.132 8.858 8.86 23.27 8.86 32.123-.002 8.87-8.857 8.87-23.273 0-32.127z'/%3E%3Cg fill='%23293152'%3E%3Cpath d='M16.666 28.957s.26 1.95 1.9 2.852l-.436-.815s.835-2.192-1.464-2.038zM37.908 8.085c-8.225-8.23-21.6-8.23-29.823-.002-8.223 8.226-8.223 21.608 0 29.834s21.603 8.224 29.823 0c8.233-8.226 8.233-21.608 0-29.832zm-2.18 27.648c-.23.228-.454.446-.688.656-5.066 4.13-8.97 2.074-9.014 2.074-2.645-.528-3.958-.537-4.7-1.033-.186-.124-.785-.445-.92-.368-.54.322-1.283.486-2.048-.12-.07-.058-.13-.117-.192-.174-.84-.84-.554-1.706-.275-2.006.194-.197-.147-.75-.147-.75s-.993-1.477-1.672-2.364c-.746-.975-.847-2.908-.856-2.933l-.01-.028c-.755-.897-.834-1.173-1.095-1.61-.153-.258-.387-.5-.585-.708-.136-.14-.263-.268-.35-.388-.022-.026-.026-.064-.018-.124.067-.42.97-1.342 1.163-1.47.238-.155 1.264-.778 1.264-.778s.578-.906 1.56-.906c.885.003 1.426-.05 2.953.447l.636.202c1.065.342 2.003.744 2.75 1.066.633.273 1.14.493 1.527.594 1.316.348 3.64-.718 4.13-1.17.806-.73 1.15-1.22 1.155-1.623.008-.227-.092-.423-.32-.66-.117-.11-.27-.313-.463-.507-.03-.03-.063-.066-.102-.094-2.23-2.37-1.844-3.855-1.84-3.88.094-1.065-.516-1.748-1.172-2.457l-.11-.133c-.034-.032-.075-.086-.075-.086.95.156 1.596.538 3.45.744 1.056.113.722.104 1.564.082 1.16-.037 2.08-.14 2.143-.402-.113-.096-.627.03-3.09-.912-1.14-.438-1.318-.502-2.045-.743-.932-.314-1.94-.75-1.94-.75 4.017 1.054 5.33 1.466 7.17 1.492.708.013 1.132-.073 1.38-.124.262-.046 1.072-.23 1.166-.51.028-.05-.778.13-2.27-.36-4.687-1.55-5.087-2.325-7.687-3.336-.904-.352-1.2-.546-3.94-1.252-1.254-.32-3.15-.138-3.407.024-3.556-.835-4.363-.743-5.406-.52 6.955-4.46 16.347-3.656 22.43 2.43.825.825 1.556 1.714 2.196 2.655l.084.13c1.953 2.923 2.994 6.353 2.994 9.945-.002 4.816-1.875 9.334-5.275 12.738zM23.922 15.405c1.765.63 2.332 2.51 2.332 2.51-2.242.51-1.77-1.78-1.77-1.78l-.56-.73z'/%3E%3C/g%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain; }\n\n.binary-logo-text {\n  display: inline-block;\n  padding: 0 10px; }\n  .binary-logo-text > div {\n    width: 90%;\n    height: 55px;\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='46' viewBox='0 0 192.48 51.03'%3E%3Cpath fill='%23fff' d='M44.46,7.15a7.15,7.15,0,0,0-2.12.29,7.06,7.06,0,0,0-1.72.79,7.18,7.18,0,0,0-1.37,1.14l-.3.33V7.55H33.71V27.42h5.23V16.29A4.46,4.46,0,0,1,40,13.1,3.61,3.61,0,0,1,42.78,12a3.31,3.31,0,0,1,2.67,1.06,4.69,4.69,0,0,1,1,3.16V27.42h5.24V14.89a8.16,8.16,0,0,0-1.87-5.61A6.74,6.74,0,0,0,44.46,7.15Z'/%3E%3Cpath fill='%23fff' d='M63.75,7.3a16.55,16.55,0,0,0-4.11.44,20.87,20.87,0,0,0-3.31,1.18L56,9.08l1.45,4.28.41-.17a19.25,19.25,0,0,1,2.5-.85A11.25,11.25,0,0,1,63.14,12a4.78,4.78,0,0,1,3.2.95,3.25,3.25,0,0,1,1.06,2.51,18.61,18.61,0,0,0-1.84-.43,17.45,17.45,0,0,0-3-.22,12.37,12.37,0,0,0-3.18.39,7.41,7.41,0,0,0-2.6,1.23A5.81,5.81,0,0,0,55,18.54a6.63,6.63,0,0,0-.62,2.94v.07a6,6,0,0,0,.6,2.73,5.84,5.84,0,0,0,1.59,2,6.83,6.83,0,0,0,2.28,1.19,9.26,9.26,0,0,0,2.72.4A8.29,8.29,0,0,0,65.49,27a9.17,9.17,0,0,0,1.88-1.29v1.73h5.16V15.76a8.56,8.56,0,0,0-2.18-6.22C68.91,8,66.69,7.3,63.75,7.3Zm-.9,16.44a4.18,4.18,0,0,1-2.39-.65,2,2,0,0,1-.87-1.74v-.07a2.08,2.08,0,0,1,1-1.82,5.25,5.25,0,0,1,3-.72,12.61,12.61,0,0,1,2.32.2,12,12,0,0,1,1.63.42v.79a3.18,3.18,0,0,1-.33,1.45,3.42,3.42,0,0,1-.95,1.12,5,5,0,0,1-1.48.75A6.35,6.35,0,0,1,62.85,23.74Z'/%3E%3Cpath fill='%23fff' d='M99.49,20.89,94.38,7.55H88.82L96.93,27a3.7,3.7,0,0,1-1,1.4,2.06,2.06,0,0,1-1.3.39,4.06,4.06,0,0,1-1.19-.18,7,7,0,0,1-1.17-.49l-.39-.21-1.82,4,.34.18a10.82,10.82,0,0,0,2.15.88,9.42,9.42,0,0,0,2.55.32A7.27,7.27,0,0,0,97.32,33a5.48,5.48,0,0,0,1.8-1,7,7,0,0,0,1.46-1.74,16.78,16.78,0,0,0,1.22-2.55l7.79-20.15h-5.45Z'/%3E%3Cpath fill='%23e78024' d='M133.64,21a10,10,0,0,1-2.13,1.65,5.38,5.38,0,0,1-4.65.17,5.3,5.3,0,0,1-1.67-1.22,5.48,5.48,0,0,1-1.09-1.81,6.47,6.47,0,0,1-.38-2.23v-.07a6.31,6.31,0,0,1,.38-2.2,5.61,5.61,0,0,1,1.06-1.8,5.14,5.14,0,0,1,1.6-1.2,4.62,4.62,0,0,1,2-.44,5.06,5.06,0,0,1,2.58.61,9.86,9.86,0,0,1,2.06,1.64l.31.32L137,10.86l-.26-.28a11.06,11.06,0,0,0-3.24-2.47,10.67,10.67,0,0,0-12.07,2.12,10.27,10.27,0,0,0-2.16,3.31,10.56,10.56,0,0,0-.78,4v.07a10.47,10.47,0,0,0,.78,4,10.09,10.09,0,0,0,2.16,3.27,10.29,10.29,0,0,0,7.36,3,9.92,9.92,0,0,0,4.78-1,12.46,12.46,0,0,0,3.32-2.67l.27-.29-3.22-3.16Z'/%3E%3Cpath fill='%23e78024' d='M156.88,10.18A10.2,10.2,0,0,0,153.54,8a10.84,10.84,0,0,0-4.22-.81A10.7,10.7,0,0,0,145.1,8a10.37,10.37,0,0,0-5.56,5.52,10.12,10.12,0,0,0-.81,4v.07a10.32,10.32,0,0,0,.79,4,10,10,0,0,0,2.21,3.27,10.49,10.49,0,0,0,3.34,2.2,11.24,11.24,0,0,0,8.41,0,10.28,10.28,0,0,0,5.57-5.52,10,10,0,0,0,.81-4v-.07a10.12,10.12,0,0,0-3-7.27Zm-7.56,13.05a5.06,5.06,0,0,1-2.14-.45,5.39,5.39,0,0,1-1.7-1.24,6,6,0,0,1-1.12-1.82,6.08,6.08,0,0,1-.4-2.21v-.07a6.63,6.63,0,0,1,.37-2.2,5.14,5.14,0,0,1,1.06-1.78,5.26,5.26,0,0,1,1.68-1.2,5.5,5.5,0,0,1,4.35,0,5.31,5.31,0,0,1,1.7,1.22,5.57,5.57,0,0,1,1.11,1.81,6.23,6.23,0,0,1,.4,2.23v.07a6.44,6.44,0,0,1-.37,2.18,5.49,5.49,0,0,1-1.06,1.79,5.32,5.32,0,0,1-1.67,1.22A5.26,5.26,0,0,1,149.32,23.24Z'/%3E%3Cpath fill='%23e78024' d='M190.59,9.18a6.83,6.83,0,0,0-5.22-2,7.68,7.68,0,0,0-3.95,1A9.81,9.81,0,0,0,179,10.21a6.43,6.43,0,0,0-2-2.06,6.6,6.6,0,0,0-3.69-1,7,7,0,0,0-2.08.29,6.26,6.26,0,0,0-1.69.8,7.54,7.54,0,0,0-1.31,1.11l-.28.32V7.55h-5.23V27.42h5.23V16.32a4.7,4.7,0,0,1,1-3.21A3.32,3.32,0,0,1,171.53,12,3.09,3.09,0,0,1,174,13a4.75,4.75,0,0,1,.91,3.15V27.42h5.23V16.29a4.56,4.56,0,0,1,1-3.22A3.39,3.39,0,0,1,183.83,12a3.09,3.09,0,0,1,2.51,1,4.86,4.86,0,0,1,.91,3.19V27.42h5.23V14.85A8,8,0,0,0,190.59,9.18Z'/%3E%3Crect fill='%23fff' x='25.69' y='7.55' width='5.24' height='19.87'/%3E%3Cpath fill='%23fff' d='M31.21,2.9a2.9,2.9,0,1,0-2.9,2.9A2.9,2.9,0,0,0,31.21,2.9Z'/%3E%3Cpath fill='%23e78024' d='M116,25a2.9,2.9,0,1,0-2.89,2.9A2.9,2.9,0,0,0,116,25Z'/%3E%3Cpath fill='%23fff' d='M21.35,15.29a7.49,7.49,0,0,0-1.74-1.38,13.76,13.76,0,0,0-1.35-.66L18,13.12l.27-.17c.23-.14.45-.31.67-.48a6.26,6.26,0,0,0,1.28-1.31,6.51,6.51,0,0,0,.88-1.72,6.92,6.92,0,0,0,.34-2.26V7.11a6.33,6.33,0,0,0-1.89-4.65C17.88.83,15.46,0,12.31,0H0V27.42H12.69a16.26,16.26,0,0,0,4.13-.49,9.88,9.88,0,0,0,3.23-1.44,6.73,6.73,0,0,0,2.1-2.4,7.27,7.27,0,0,0,.74-3.32V19.7a7.15,7.15,0,0,0-.4-2.51A5.58,5.58,0,0,0,21.35,15.29ZM5.24,11.16V4.74h6.5a5.52,5.52,0,0,1,3.33.84,2.67,2.67,0,0,1,1.09,2.29V8a2.76,2.76,0,0,1-1.25,2.51,6.33,6.33,0,0,1-3.52.86H5.24Zm12.42,8.12a2.82,2.82,0,0,1-1.26,2.53,6.52,6.52,0,0,1-3.63.87H5.24V15.87h7.19a7.14,7.14,0,0,1,4,.9,2.77,2.77,0,0,1,1.25,2.44Z'/%3E%3Cpath fill='%23fff' d='M86.9,7.19a6.53,6.53,0,0,0-4.46,1.28,8.18,8.18,0,0,0-1.88,2.08v-3H75.33V27.42h5.24V19.76A10.11,10.11,0,0,1,81,16.59a6.05,6.05,0,0,1,1.24-2.21,5.16,5.16,0,0,1,1.91-1.3,6.72,6.72,0,0,1,2.48-.44h.64V7.21Z'/%3E%3Cpath fill='%23fff' d='M1.51,47.93,3.46,38.6H0l.25-1.2H8.54l-.25,1.2H4.87L2.92,47.93Z'/%3E%3Cpath fill='%23fff' d='M6.55,47.93l1.6-7.63H9.3L9,41.86a5.31,5.31,0,0,1,1.15-1.31,1.9,1.9,0,0,1,1.15-.42,2.26,2.26,0,0,1,1,.28l-.53,1.21a1.24,1.24,0,0,0-.74-.24,2,2,0,0,0-1.4.76,5.79,5.79,0,0,0-1.13,2.74l-.65,3.06Z'/%3E%3Cpath fill='%23fff' d='M16.67,46.55a3.84,3.84,0,0,1-2.81,1.55,2,2,0,0,1-1.43-.51,1.63,1.63,0,0,1-.54-1.24,9.47,9.47,0,0,1,.24-1.65l.92-4.41h1.3l-1,4.88a4.92,4.92,0,0,0-.13.95.87.87,0,0,0,.26.67,1.11,1.11,0,0,0,.77.24,2.32,2.32,0,0,0,1.07-.27,2.84,2.84,0,0,0,.9-.72A3.76,3.76,0,0,0,16.82,45a9.51,9.51,0,0,0,.37-1.39l.69-3.3h1.3l-1.6,7.63h-1.2Z'/%3E%3Cpath fill='%23fff' d='M19.76,45.32l1.3-.08a2.38,2.38,0,0,0,.17,1,1.37,1.37,0,0,0,.64.65A2.23,2.23,0,0,0,23,47.1a2,2,0,0,0,1.29-.34,1,1,0,0,0,.43-.81,1,1,0,0,0-.26-.64,4.09,4.09,0,0,0-1.3-.74,12.35,12.35,0,0,1-1.32-.62,2.13,2.13,0,0,1-.73-.69,1.72,1.72,0,0,1-.24-.92,2,2,0,0,1,.72-1.55,2.9,2.9,0,0,1,2-.65,3.2,3.2,0,0,1,2.19.66,2.31,2.31,0,0,1,.78,1.75l-1.27.09a1.46,1.46,0,0,0-.49-1.09,1.91,1.91,0,0,0-1.3-.4,1.6,1.6,0,0,0-1,.31.87.87,0,0,0-.37.67.81.81,0,0,0,.32.63,5.41,5.41,0,0,0,1.11.57,7.49,7.49,0,0,1,1.88,1A1.94,1.94,0,0,1,26,45.79a2,2,0,0,1-.35,1.11,2.4,2.4,0,0,1-1.06.87,4,4,0,0,1-1.69.33,3.8,3.8,0,0,1-2.25-.65A2.32,2.32,0,0,1,19.76,45.32Z'/%3E%3Cpath fill='%23fff' d='M30,46.87l-.22,1.06a3.57,3.57,0,0,1-.91.12,1.88,1.88,0,0,1-1.24-.38,1,1,0,0,1-.34-.78,7.86,7.86,0,0,1,.19-1.16l.93-4.43h-1l.21-1h1l.4-1.88,1.49-.9L30,40.3h1.28l-.22,1H29.75l-.88,4.22a7.9,7.9,0,0,0-.17,1,.45.45,0,0,0,.13.35.63.63,0,0,0,.43.12A3.12,3.12,0,0,0,30,46.87Z'/%3E%3Cpath fill='%23fff' d='M36.69,45.34l1.26.13a3.83,3.83,0,0,1-1.25,1.79,3.46,3.46,0,0,1-2.34.85,3.16,3.16,0,0,1-1.56-.39,2.57,2.57,0,0,1-1.08-1.14,3.79,3.79,0,0,1-.37-1.7,5.43,5.43,0,0,1,.58-2.43,4.13,4.13,0,0,1,1.5-1.75,3.7,3.7,0,0,1,2-.57,2.89,2.89,0,0,1,2.18.85,3.2,3.2,0,0,1,.82,2.31,6.83,6.83,0,0,1-.1,1.15H32.71a3.17,3.17,0,0,0,0,.4,2.42,2.42,0,0,0,.49,1.63,1.54,1.54,0,0,0,1.2.56,2.32,2.32,0,0,0,1.32-.44A2.85,2.85,0,0,0,36.69,45.34Zm-3.78-1.89H37.2q0-.2,0-.29a2.11,2.11,0,0,0-.49-1.5,1.65,1.65,0,0,0-1.26-.52,2.31,2.31,0,0,0-1.52.57A3.45,3.45,0,0,0,32.91,43.45Z'/%3E%3Cpath fill='%23fff' d='M44.42,46.82a3.14,3.14,0,0,1-2.33,1.28,2.33,2.33,0,0,1-1.81-.8A3.36,3.36,0,0,1,39.56,45a5.66,5.66,0,0,1,.57-2.55,4.32,4.32,0,0,1,1.43-1.73,3.07,3.07,0,0,1,1.72-.57,2.31,2.31,0,0,1,2.15,1.37l.86-4.1h1.29l-2.2,10.54h-1.2Zm-3.56-2.09A4,4,0,0,0,41,46a1.65,1.65,0,0,0,.54.77,1.41,1.41,0,0,0,.91.31,2,2,0,0,0,1.6-.92,4.72,4.72,0,0,0,1-3,2,2,0,0,0-.47-1.42,1.56,1.56,0,0,0-1.19-.51,1.76,1.76,0,0,0-.85.21,2.49,2.49,0,0,0-.76.71,4.45,4.45,0,0,0-.64,1.27A4.32,4.32,0,0,0,40.85,44.73Z'/%3E%3Cpath fill='%23fff' d='M51.55,47.93l2.2-10.54H55l-.78,3.77a4.61,4.61,0,0,1,1.12-.8,2.46,2.46,0,0,1,1-.23,2.3,2.3,0,0,1,1.79.8,3.37,3.37,0,0,1,.72,2.32,5.7,5.7,0,0,1-.29,1.85,5.15,5.15,0,0,1-.71,1.41,4.46,4.46,0,0,1-.88.91,3.48,3.48,0,0,1-.93.51,2.72,2.72,0,0,1-.91.17,2.27,2.27,0,0,1-1.33-.4,2.58,2.58,0,0,1-.9-1.22l-.3,1.44Zm1.93-3.13V45a2.13,2.13,0,0,0,.47,1.49A1.51,1.51,0,0,0,55.1,47a1.91,1.91,0,0,0,1.25-.48,3.41,3.41,0,0,0,.94-1.49,5.53,5.53,0,0,0,.37-1.87,2.2,2.2,0,0,0-.46-1.49A1.46,1.46,0,0,0,56,41.18a1.87,1.87,0,0,0-1.29.54,4.06,4.06,0,0,0-1,1.67A4.43,4.43,0,0,0,53.47,44.8Z'/%3E%3Cpath fill='%23fff' d='M59.25,50.88l.08-1.22a2.85,2.85,0,0,0,.78.11,1.05,1.05,0,0,0,.64-.18,3,3,0,0,0,.69-.89l.42-.75L60.58,40.3h1.28l.57,3.86q.17,1.14.29,2.29l3.41-6.14H67.5l-4.87,8.65a5.53,5.53,0,0,1-1.25,1.67,2,2,0,0,1-1.26.41A2.66,2.66,0,0,1,59.25,50.88Z'/%3E%3Cpath fill='%23fff' d='M74.22,46.87,74,47.94a3.57,3.57,0,0,1-.91.12,1.88,1.88,0,0,1-1.24-.38,1,1,0,0,1-.34-.78,7.86,7.86,0,0,1,.19-1.16l.93-4.43h-1l.21-1h1l.4-1.88,1.49-.9-.58,2.77h1.28l-.22,1H73.93l-.88,4.22a7.9,7.9,0,0,0-.17,1,.45.45,0,0,0,.13.35.63.63,0,0,0,.43.12A3.12,3.12,0,0,0,74.22,46.87Z'/%3E%3Cpath fill='%23fff' d='M75.27,47.93l1.6-7.63H78l-.32,1.56a5.31,5.31,0,0,1,1.15-1.31A1.9,1.9,0,0,1,80,40.13a2.26,2.26,0,0,1,1,.28l-.53,1.21a1.24,1.24,0,0,0-.74-.24,2,2,0,0,0-1.4.76,5.79,5.79,0,0,0-1.13,2.74l-.65,3.06Z'/%3E%3Cpath fill='%23fff' d='M85.32,47a5.17,5.17,0,0,1-1.3.85,3.34,3.34,0,0,1-1.34.27,2.35,2.35,0,0,1-1.7-.62,2.11,2.11,0,0,1-.65-1.59,2.18,2.18,0,0,1,.29-1.13,2.28,2.28,0,0,1,.77-.79,3.4,3.4,0,0,1,1.18-.43,13.16,13.16,0,0,1,1.66-.14A6,6,0,0,0,86,43.14a3.36,3.36,0,0,0,.15-.88.85.85,0,0,0-.33-.71,2.09,2.09,0,0,0-1.32-.36,2.29,2.29,0,0,0-1.34.36,2,2,0,0,0-.76,1l-1.32-.11a3.43,3.43,0,0,1,1.28-1.74,3.79,3.79,0,0,1,2.2-.6,3.44,3.44,0,0,1,2.24.68,1.59,1.59,0,0,1,.63,1.31,6.6,6.6,0,0,1-.18,1.42l-.42,1.9a7.11,7.11,0,0,0-.2,1.47,4.93,4.93,0,0,0,.16,1H85.47A4.8,4.8,0,0,1,85.32,47Zm.48-2.92a3.14,3.14,0,0,1-.59.17q-.31.06-1,.12a8,8,0,0,0-1.6.26,1.34,1.34,0,0,0-.7.49,1.27,1.27,0,0,0-.24.75,1.17,1.17,0,0,0,.38.9,1.52,1.52,0,0,0,1.07.35,2.54,2.54,0,0,0,2.18-1.29A5.53,5.53,0,0,0,85.8,44.06Z'/%3E%3Cpath fill='%23fff' d='M93.5,46.82a3.14,3.14,0,0,1-2.33,1.28,2.33,2.33,0,0,1-1.81-.8A3.36,3.36,0,0,1,88.64,45a5.66,5.66,0,0,1,.57-2.55,4.32,4.32,0,0,1,1.43-1.73,3.07,3.07,0,0,1,1.72-.57,2.31,2.31,0,0,1,2.15,1.37l.86-4.1h1.29l-2.2,10.54h-1.2Zm-3.56-2.09A4,4,0,0,0,90.1,46a1.65,1.65,0,0,0,.54.77,1.41,1.41,0,0,0,.91.31,2,2,0,0,0,1.6-.92,4.72,4.72,0,0,0,1-3,2,2,0,0,0-.47-1.42,1.56,1.56,0,0,0-1.19-.51,1.76,1.76,0,0,0-.85.21,2.49,2.49,0,0,0-.76.71,4.45,4.45,0,0,0-.64,1.27A4.32,4.32,0,0,0,89.94,44.73Z'/%3E%3Cpath fill='%23fff' d='M102.15,45.34l1.26.13a3.83,3.83,0,0,1-1.25,1.79,3.46,3.46,0,0,1-2.34.85,3.16,3.16,0,0,1-1.56-.39,2.57,2.57,0,0,1-1.08-1.14,3.79,3.79,0,0,1-.37-1.7,5.43,5.43,0,0,1,.58-2.43,4.13,4.13,0,0,1,1.5-1.75,3.7,3.7,0,0,1,2-.57,2.89,2.89,0,0,1,2.18.85,3.2,3.2,0,0,1,.82,2.31,6.83,6.83,0,0,1-.1,1.15H98.16a3.17,3.17,0,0,0,0,.4,2.42,2.42,0,0,0,.49,1.63,1.54,1.54,0,0,0,1.2.56,2.32,2.32,0,0,0,1.32-.44A2.85,2.85,0,0,0,102.15,45.34Zm-3.78-1.89h4.28q0-.2,0-.29a2.11,2.11,0,0,0-.49-1.5,1.65,1.65,0,0,0-1.26-.52,2.31,2.31,0,0,0-1.52.57A3.45,3.45,0,0,0,98.37,43.45Z'/%3E%3Cpath fill='%23fff' d='M104.73,47.93l1.6-7.63h1.15l-.32,1.56a5.31,5.31,0,0,1,1.15-1.31,1.9,1.9,0,0,1,1.15-.42,2.26,2.26,0,0,1,1,.28l-.53,1.21a1.24,1.24,0,0,0-.74-.24,2,2,0,0,0-1.4.76,5.79,5.79,0,0,0-1.13,2.74L106,47.93Z'/%3E%3Cpath fill='%23fff' d='M109.75,45.32l1.3-.08a2.38,2.38,0,0,0,.17,1,1.37,1.37,0,0,0,.64.65,2.23,2.23,0,0,0,1.08.25,2,2,0,0,0,1.29-.34,1,1,0,0,0,.43-.81,1,1,0,0,0-.26-.64,4.09,4.09,0,0,0-1.3-.74,12.35,12.35,0,0,1-1.32-.62,2.13,2.13,0,0,1-.73-.69,1.72,1.72,0,0,1-.24-.92,2,2,0,0,1,.72-1.55,2.9,2.9,0,0,1,2-.65,3.2,3.2,0,0,1,2.19.66,2.31,2.31,0,0,1,.78,1.75l-1.27.09a1.46,1.46,0,0,0-.49-1.09,1.91,1.91,0,0,0-1.3-.4,1.6,1.6,0,0,0-1,.31.87.87,0,0,0-.37.67.81.81,0,0,0,.32.63,5.41,5.41,0,0,0,1.11.57,7.49,7.49,0,0,1,1.88,1,1.94,1.94,0,0,1,.62,1.45,2,2,0,0,1-.35,1.11,2.4,2.4,0,0,1-1.06.87,4,4,0,0,1-1.69.33,3.8,3.8,0,0,1-2.25-.65A2.32,2.32,0,0,1,109.75,45.32Z'/%3E%3Cpath fill='%23fff' d='M121.2,45.32l1.3-.08a2.38,2.38,0,0,0,.17,1,1.37,1.37,0,0,0,.64.65,2.23,2.23,0,0,0,1.08.25,2,2,0,0,0,1.29-.34,1,1,0,0,0,.43-.81,1,1,0,0,0-.26-.64,4.09,4.09,0,0,0-1.3-.74,12.35,12.35,0,0,1-1.32-.62,2.13,2.13,0,0,1-.73-.69,1.72,1.72,0,0,1-.24-.92,2,2,0,0,1,.72-1.55,2.9,2.9,0,0,1,2-.65,3.2,3.2,0,0,1,2.19.66,2.31,2.31,0,0,1,.78,1.75l-1.27.09a1.46,1.46,0,0,0-.49-1.09,1.91,1.91,0,0,0-1.3-.4,1.6,1.6,0,0,0-1,.31.87.87,0,0,0-.37.67.81.81,0,0,0,.32.63,5.41,5.41,0,0,0,1.11.57,7.49,7.49,0,0,1,1.88,1,1.94,1.94,0,0,1,.62,1.45,2,2,0,0,1-.35,1.11,2.4,2.4,0,0,1-1.06.87,4,4,0,0,1-1.69.33,3.8,3.8,0,0,1-2.25-.65A2.32,2.32,0,0,1,121.2,45.32Z'/%3E%3Cpath fill='%23fff' d='M128.39,47.93,130,40.3h1.3l-1.6,7.63Zm1.9-9.06.31-1.47h1.29l-.31,1.47Z'/%3E%3Cpath fill='%23fff' d='M131.71,47.93l1.6-7.63h1.18l-.28,1.33a6.24,6.24,0,0,1,1.44-1.14,2.85,2.85,0,0,1,1.37-.36,2,2,0,0,1,1.46.5A1.77,1.77,0,0,1,139,42a7.5,7.5,0,0,1-.19,1.34l-1,4.62h-1.3l1-4.84a5.55,5.55,0,0,0,.15-1,.79.79,0,0,0-.26-.62,1.09,1.09,0,0,0-.76-.24,2.55,2.55,0,0,0-1.78.72,4.59,4.59,0,0,0-1.15,2.46L133,47.93Z'/%3E%3Cpath fill='%23fff' d='M145.16,45.15l1.3.14a4.37,4.37,0,0,1-1.39,2.12,3.28,3.28,0,0,1-2.05.69,2.67,2.67,0,0,1-2-.8,3.12,3.12,0,0,1-.77-2.25,6.42,6.42,0,0,1,.5-2.46,4,4,0,0,1,1.42-1.84,3.66,3.66,0,0,1,2.11-.63,2.69,2.69,0,0,1,1.95.69,2.43,2.43,0,0,1,.72,1.84l-1.28.09a1.55,1.55,0,0,0-.42-1.14,1.48,1.48,0,0,0-1.09-.41,2,2,0,0,0-1.36.5,3.27,3.27,0,0,0-.9,1.51,6.3,6.3,0,0,0-.33,1.94,2.16,2.16,0,0,0,.43,1.47,1.36,1.36,0,0,0,1.06.49,1.87,1.87,0,0,0,1.21-.48A3.16,3.16,0,0,0,145.16,45.15Z'/%3E%3Cpath fill='%23fff' d='M152.86,45.34l1.26.13a3.83,3.83,0,0,1-1.25,1.79,3.46,3.46,0,0,1-2.34.85,3.16,3.16,0,0,1-1.56-.39,2.57,2.57,0,0,1-1.08-1.14,3.79,3.79,0,0,1-.37-1.7,5.43,5.43,0,0,1,.58-2.43,4.13,4.13,0,0,1,1.5-1.75,3.7,3.7,0,0,1,2-.57,2.89,2.89,0,0,1,2.18.85,3.2,3.2,0,0,1,.82,2.31,6.83,6.83,0,0,1-.1,1.15h-5.62a3.17,3.17,0,0,0,0,.4,2.42,2.42,0,0,0,.49,1.63,1.54,1.54,0,0,0,1.2.56,2.32,2.32,0,0,0,1.32-.44A2.85,2.85,0,0,0,152.86,45.34Zm-3.78-1.89h4.28q0-.2,0-.29a2.11,2.11,0,0,0-.49-1.5,1.65,1.65,0,0,0-1.26-.52,2.31,2.31,0,0,0-1.52.57A3.45,3.45,0,0,0,149.08,43.45Z'/%3E%3Cpath fill='%23fff' d='M159.9,47.93a5.66,5.66,0,0,1,.56-1.58,5.28,5.28,0,0,1,.95-1.21q.59-.57,2.27-1.92a16.1,16.1,0,0,0,1.39-1.2,4,4,0,0,0,.78-1.1,1.92,1.92,0,0,0,.17-.8,1.67,1.67,0,0,0-.51-1.23,1.73,1.73,0,0,0-1.26-.51,1.84,1.84,0,0,0-1.29.51,3.05,3.05,0,0,0-.79,1.65l-1.27-.19A3.47,3.47,0,0,1,162,38.16a3.24,3.24,0,0,1,2.25-.81,3.52,3.52,0,0,1,1.63.37,2.51,2.51,0,0,1,1.1,1,2.89,2.89,0,0,1,.37,1.39,3.27,3.27,0,0,1-.75,2,19.89,19.89,0,0,1-2.7,2.38,15.06,15.06,0,0,0-1.43,1.25,4.48,4.48,0,0,0-.71.92h4.71l-.25,1.19Z'/%3E%3Cpath fill='%23fff' d='M168.26,44.47a10.85,10.85,0,0,1,1.29-4.92,5.4,5.4,0,0,1,1-1.29,3.92,3.92,0,0,1,1-.69,2.8,2.8,0,0,1,1.12-.22,2.6,2.6,0,0,1,2,.9,3.75,3.75,0,0,1,.81,2.59A11,11,0,0,1,175,44.3a6.6,6.6,0,0,1-1.84,3,3.1,3.1,0,0,1-2.06.77,2.56,2.56,0,0,1-2-.93A4,4,0,0,1,168.26,44.47Zm1.26.33a3,3,0,0,0,.32,1.52,1.41,1.41,0,0,0,1.3.75,1.83,1.83,0,0,0,1.37-.68,6.27,6.27,0,0,0,1.34-2.82,13.5,13.5,0,0,0,.45-3,2.49,2.49,0,0,0-.43-1.64,1.44,1.44,0,0,0-1.15-.5,1.86,1.86,0,0,0-1,.27,2.72,2.72,0,0,0-.86.91,9.18,9.18,0,0,0-1,2.73A11.45,11.45,0,0,0,169.52,44.8Z'/%3E%3Cpath fill='%23fff' d='M176.45,44.47a10.85,10.85,0,0,1,1.29-4.92,5.4,5.4,0,0,1,1-1.29,3.92,3.92,0,0,1,1-.69,2.8,2.8,0,0,1,1.12-.22,2.6,2.6,0,0,1,2,.9,3.75,3.75,0,0,1,.81,2.59,11,11,0,0,1-.56,3.46,6.6,6.6,0,0,1-1.84,3,3.1,3.1,0,0,1-2.06.77,2.56,2.56,0,0,1-2-.93A4,4,0,0,1,176.45,44.47Zm1.26.33a3,3,0,0,0,.32,1.52,1.41,1.41,0,0,0,1.3.75,1.83,1.83,0,0,0,1.37-.68A6.27,6.27,0,0,0,182,43.57a13.5,13.5,0,0,0,.45-3,2.49,2.49,0,0,0-.43-1.64,1.44,1.44,0,0,0-1.15-.5,1.86,1.86,0,0,0-1,.27,2.72,2.72,0,0,0-.86.91,9.18,9.18,0,0,0-1,2.73A11.45,11.45,0,0,0,177.71,44.8Z'/%3E%3Cpath fill='%23fff' d='M184.63,44.47a10.85,10.85,0,0,1,1.29-4.92,5.4,5.4,0,0,1,1-1.29,3.92,3.92,0,0,1,1-.69,2.8,2.8,0,0,1,1.12-.22,2.6,2.6,0,0,1,2,.9,3.75,3.75,0,0,1,.81,2.59,11,11,0,0,1-.56,3.46,6.6,6.6,0,0,1-1.84,3,3.1,3.1,0,0,1-2.06.77,2.56,2.56,0,0,1-2-.93A4,4,0,0,1,184.63,44.47Zm1.26.33a3,3,0,0,0,.32,1.52,1.41,1.41,0,0,0,1.3.75,1.83,1.83,0,0,0,1.37-.68,6.27,6.27,0,0,0,1.34-2.82,13.5,13.5,0,0,0,.45-3,2.49,2.49,0,0,0-.43-1.64,1.44,1.44,0,0,0-1.15-.5,1.86,1.86,0,0,0-1,.27,2.72,2.72,0,0,0-.86.91,9.18,9.18,0,0,0-1,2.73A11.45,11.45,0,0,0,185.89,44.8Z'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain; }\n  .binary-logo-text img.responsive {\n    width: 90%; }\n\nimg.responsive {\n  width: 100%;\n  height: auto; }\n\n@media screen and (max-width: 769px) {\n  #header .binary-logo-text {\n    display: none; } }\n\n.section-divider {\n  display: flex; }\n  .section-divider > div:not(.faded) {\n    flex: 1; }\n  .section-divider > div.border-bottom-light-gray {\n    border-bottom: 1px solid #F2F2F2; }\n  .section-divider > div.faded {\n    color: #C2C2C2;\n    padding: 0 20px; }\n\ntable {\n  border-collapse: collapse;\n  font-size: 0.9em;\n  line-height: 1.5em;\n  width: 100%; }\n  table .even {\n    background-color: #FFF; }\n  table * {\n    font-size: 1em; }\n  table thead, table th {\n    line-height: 1.1em;\n    font-weight: bold;\n    padding: 3px 8px;\n    background: #F2F2F2;\n    border-bottom: 1px solid #F2F2F2;\n    vertical-align: middle; }\n    table thead#pf-bet-details, table th#pf-bet-details {\n      text-align: left; }\n    table thead.total, table th.total {\n      background: none; }\n    table thead.num, table th.num {\n      font-weight: bold; }\n  table td {\n    vertical-align: top;\n    border-width: 0 1px;\n    padding: 4px 4px;\n    border-bottom: 3px solid #F2F2F2; }\n    table td.num {\n      text-align: center; }\n    table td.text {\n      text-align: center;\n      vertical-align: middle; }\n    table td.tip {\n      text-align: left; }\n\n.sidebar-left ul {\n  font-size: 18px; }\n  .sidebar-left ul li {\n    list-style-image: none;\n    margin: 0;\n    background: #F2F2F2;\n    line-height: 150%;\n    border-bottom: 1px solid #FFF; }\n    .sidebar-left ul li:hover {\n      background: #DEDEDE; }\n    .sidebar-left ul li a {\n      font-size: 18px;\n      font-weight: normal;\n      text-decoration: none;\n      display: block;\n      padding: 5px 5px 5px 10px;\n      color: #2A3052; }\n  .sidebar-left ul li.selected {\n    background: #2A3052; }\n    .sidebar-left ul li.selected a {\n      color: #FFF;\n      text-decoration: none; }\n\n[data-balloon] {\n  position: relative;\n  border-bottom: 1px dotted #000;\n  cursor: help; }\n\n.no-underline[data-balloon] {\n  border-bottom: none;\n  text-decoration: none; }\n\n[data-balloon]:after, [data-balloon]:before {\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';\n  filter: alpha(opacity=0);\n  -khtml-opacity: 0;\n  -moz-opacity: 0;\n  opacity: 0;\n  pointer-events: none;\n  -webkit-transition: all 0.18s ease-out 0.18s;\n  transition: all 0.18s ease-out 0.18s;\n  bottom: 100%;\n  left: 50%;\n  position: absolute;\n  z-index: 10;\n  -webkit-transform: translate(-50%, 10px);\n  -ms-transform: translate(-50%, 10px);\n  transform: translate(-50%, 10px);\n  -webkit-transform-origin: top;\n  -ms-transform-origin: top;\n  transform-origin: top; }\n\n[data-balloon]:before {\n  font-family: 'proxima-nova', 'arial', sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.5;\n  text-align: initial;\n  text-transform: none;\n  text-decoration: none;\n  letter-spacing: normal;\n  border: 1px solid #DEDEDE;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);\n  background: #FEF1CF;\n  border-radius: 4px;\n  color: #000;\n  content: attr(data-balloon);\n  padding: 1em;\n  white-space: nowrap;\n  margin-bottom: 11px; }\n\n[data-balloon]:after {\n  background: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36px' height='12px'%3E%3Cpath fill='%23fef1cf' transform='rotate(0)' d='M2.658,0.000 C-13.615,0.000 50.938,0.000 34.662,0.000 C28.662,0.000 23.035,12.002 18.660,12.002 C14.285,12.002 8.594,0.000 2.658,0.000 Z'/%3E%3C/svg%3E\") no-repeat;\n  background-size: 100% auto;\n  height: 6px;\n  width: 18px;\n  content: '';\n  margin-bottom: 6px; }\n\n[data-balloon]:hover:after, [data-balloon]:hover:before {\n  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';\n  filter: alpha(opacity=100);\n  -khtml-opacity: 1;\n  -moz-opacity: 1;\n  opacity: 1;\n  pointer-events: auto;\n  -webkit-transform: translate(-50%, 0);\n  -ms-transform: translate(-50%, 0);\n  transform: translate(-50%, 0); }\n\n[data-balloon][data-balloon-break]:before {\n  white-space: normal; }\n\n[data-balloon-pos='down']:after, [data-balloon-pos='down']:before {\n  bottom: auto;\n  left: 50%;\n  top: 100%;\n  -webkit-transform: translate(-50%, -10px);\n  -ms-transform: translate(-50%, -10px);\n  transform: translate(-50%, -10px); }\n\n[data-balloon-pos='down']:before {\n  margin-top: 11px; }\n\n[data-balloon-pos='down']:after {\n  background: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36px' height='12px'%3E%3Cpath fill='%23fef1cf' transform='rotate(180 18 6)' d='M2.658,0.000 C-13.615,0.000 50.938,0.000 34.662,0.000 C28.662,0.000 23.035,12.002 18.660,12.002 C14.285,12.002 8.594,0.000 2.658,0.000 Z'/%3E%3C/svg%3E\") no-repeat;\n  background-size: 100% auto;\n  height: 6px;\n  width: 18px;\n  margin-top: 6px;\n  margin-bottom: 0; }\n\n[data-balloon-pos='down']:hover:after, [data-balloon-pos='down']:hover:before {\n  -webkit-transform: translate(-50%, 0);\n  -ms-transform: translate(-50%, 0);\n  transform: translate(-50%, 0); }\n\n[data-balloon-pos='left']:after, [data-balloon-pos='left']:before {\n  bottom: auto;\n  left: auto;\n  right: 100%;\n  top: 50%;\n  -webkit-transform: translate(10px, -50%);\n  -ms-transform: translate(10px, -50%);\n  transform: translate(10px, -50%); }\n\n[data-balloon-pos='left']:before {\n  margin-right: 11px; }\n\n[data-balloon-pos='left']:after {\n  background: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12px' height='36px'%3E%3Cpath fill='%23fef1cf' transform='rotate(-90 18 18)' d='M2.658,0.000 C-13.615,0.000 50.938,0.000 34.662,0.000 C28.662,0.000 23.035,12.002 18.660,12.002 C14.285,12.002 8.594,0.000 2.658,0.000 Z'/%3E%3C/svg%3E\") no-repeat;\n  background-size: 100% auto;\n  height: 18px;\n  width: 6px;\n  margin-right: 6px;\n  margin-bottom: 0; }\n\n[data-balloon-pos='left']:hover:after, [data-balloon-pos='left']:hover:before {\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%); }\n\n[data-balloon-pos='right']:after, [data-balloon-pos='right']:before {\n  bottom: auto;\n  left: 100%;\n  top: 50%;\n  -webkit-transform: translate(-10px, -50%);\n  -ms-transform: translate(-10px, -50%);\n  transform: translate(-10px, -50%); }\n\n[data-balloon-pos='right']:before {\n  margin-left: 11px; }\n\n[data-balloon-pos='right']:after {\n  background: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12px' height='36px'%3E%3Cpath fill='%23fef1cf' transform='rotate(90 6 6)' d='M2.658,0.000 C-13.615,0.000 50.938,0.000 34.662,0.000 C28.662,0.000 23.035,12.002 18.660,12.002 C14.285,12.002 8.594,0.000 2.658,0.000 Z'/%3E%3C/svg%3E\") no-repeat;\n  background-size: 100% auto;\n  height: 18px;\n  width: 6px;\n  margin-bottom: 0;\n  margin-left: 6px; }\n\n[data-balloon-pos='right']:hover:after, [data-balloon-pos='right']:hover:before {\n  -webkit-transform: translate(0, -50%);\n  -ms-transform: translate(0, -50%);\n  transform: translate(0, -50%); }\n\n[data-balloon-length]:before {\n  white-space: normal; }\n\n[data-balloon-length='small']:before {\n  width: 80px; }\n\n[data-balloon-length='medium']:before {\n  width: 150px; }\n\n[data-balloon-length='large']:before {\n  width: 260px; }\n\n[data-balloon-length='xlarge']:before {\n  width: 90vw; }\n\n@media screen and (min-width: 768px) {\n  [data-balloon-length='xlarge']:before {\n    width: 380px; } }\n\n[data-balloon-length='fit']:before {\n  width: 100%; }\n\n@media screen and (max-width: 768px) {\n  [data-balloon] {\n    cursor: initial; }\n  [data-balloon]:after, [data-balloon]:before {\n    display: none !important; } }\n\n/* main menu styling */\n.nav-menu {\n  font-size: 1rem; }\n  .nav-menu a {\n    color: #FFF; }\n  .nav-menu > li {\n    position: relative;\n    text-align: center; }\n    .nav-menu > li > ul {\n      width: 100%;\n      background-color: #F2F2F2; }\n\n.main-nav {\n  width: 165px;\n  border: 1px solid #2A3052;\n  position: absolute;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  background-color: #2A3052;\n  transition: none !important; }\n  .main-nav > li {\n    margin: 0;\n    height: 77px; }\n    .main-nav > li a {\n      font-weight: normal;\n      display: block;\n      max-height: 70px;\n      margin-top: 3px; }\n      .main-nav > li a:hover {\n        text-decoration: none; }\n    .main-nav > li > ul {\n      margin: 0;\n      margin-left: -1px;\n      padding: 0;\n      border: 1px solid #DEDEDE; }\n      .main-nav > li > ul a {\n        color: initial; }\n        .main-nav > li > ul a li {\n          margin-top: 0;\n          padding: 7px 0; }\n          .main-nav > li > ul a li:hover {\n            background-color: #DEDEDE; }\n  .main-nav .nav-caret {\n    position: relative;\n    top: -45px;\n    right: -68px; }\n  .main-nav * {\n    outline: none; }\n\n.nav-caret {\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n  display: inline-block; }\n\n#all-accounts, #all-accounts-top {\n  background-color: #F2F2F2;\n  border: 1px solid #DEDEDE;\n  z-index: 99999;\n  opacity: 0;\n  visibility: hidden; }\n  #all-accounts > li a, #all-accounts-top > li a {\n    color: #000;\n    margin: 0; }\n\n#main-logout, #logout-top {\n  position: relative;\n  height: 75px;\n  display: flex;\n  width: 165px;\n  float: right; }\n\n.separator-line-thin-gray {\n  border-top: 1px solid #DEDEDE; }\n\n#main-account {\n  height: 70px; }\n\n/*! jQuery UI - v1.11.4 - 2016-08-10\n* http://jqueryui.com\n* Includes: core.css, accordion.css, tabs.css\n* Copyright jQuery Foundation and other contributors; Licensed MIT */\n/* Layout helpers\n----------------------------------*/\n.ui-helper-hidden {\n  display: none; }\n\n.ui-helper-hidden-accessible {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n.ui-helper-reset {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  line-height: 1.3;\n  text-decoration: none;\n  font-size: 100%;\n  list-style: none; }\n\n.ui-helper-clearfix:after,\n.ui-helper-clearfix:before {\n  content: \"\";\n  display: table;\n  border-collapse: collapse; }\n\n.ui-helper-clearfix:after {\n  clear: both; }\n\n.ui-helper-clearfix {\n  min-height: 0;\n  /* support: IE7 */ }\n\n.ui-helper-zfix {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  opacity: 0;\n  filter: Alpha(Opacity=0);\n  /* support: IE8 */ }\n\n.ui-front {\n  z-index: 100; }\n\n/* Interaction Cues\n----------------------------------*/\n.ui-state-disabled {\n  cursor: default !important; }\n\n/* Icons\n----------------------------------*/\n/* states and images */\n.ui-icon {\n  display: block;\n  text-indent: -99999px;\n  overflow: hidden;\n  background-repeat: no-repeat; }\n\n/* Misc visuals\n----------------------------------*/\n/* Overlays */\n.ui-widget-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.ui-accordion .ui-accordion-header {\n  display: block;\n  cursor: pointer;\n  position: relative;\n  margin: 2px 0 0;\n  padding: 0.5em 0.5em 0.5em 0.7em;\n  min-height: 0;\n  /* support: IE7 */\n  font-size: 100%; }\n\n.ui-accordion .ui-accordion-icons {\n  padding-left: 2.2em; }\n\n.ui-accordion .ui-accordion-icons .ui-accordion-icons {\n  padding-left: 2.2em; }\n\n.ui-accordion .ui-accordion-header .ui-accordion-header-icon {\n  position: absolute;\n  left: 0.5em;\n  top: 50%;\n  margin-top: -8px; }\n\n.ui-accordion .ui-accordion-content {\n  padding: 1em 2.2em;\n  border-top: 0;\n  overflow: auto; }\n\n.ui-tabs {\n  position: relative;\n  /* position: relative prevents IE scroll bug (element with position: relative inside container with overflow: auto appear as \"fixed\") */\n  padding: 0.2em; }\n\n.ui-tabs .ui-tabs-nav {\n  margin: 0;\n  padding: 0.2em 0.2em 0; }\n\n.ui-tabs .ui-tabs-nav li {\n  list-style: none;\n  float: left;\n  position: relative;\n  top: 0;\n  margin: 1px 0.2em 0 0;\n  border-bottom-width: 0;\n  padding: 0;\n  white-space: nowrap; }\n\n.ui-tabs .ui-tabs-nav .ui-tabs-anchor {\n  float: left;\n  padding: 0.5em 1em;\n  text-decoration: none; }\n\n.ui-tabs .ui-tabs-nav li.ui-tabs-active {\n  margin-bottom: -1px;\n  padding-bottom: 1px; }\n\n.ui-tabs .ui-tabs-nav li.ui-state-disabled .ui-tabs-anchor,\n.ui-tabs .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor,\n.ui-tabs .ui-tabs-nav li.ui-tabs-loading .ui-tabs-anchor {\n  cursor: text; }\n\n.ui-tabs-collapsible .ui-tabs-nav li.ui-tabs-active .ui-tabs-anchor {\n  cursor: pointer; }\n\n.ui-tabs .ui-tabs-panel {\n  display: block;\n  border-width: 0;\n  padding: 1em 1.4em;\n  background: none; }\n\n.ui-datepicker {\n  width: 17em;\n  display: none; }\n\n.ui-datepicker .ui-datepicker-header {\n  position: relative;\n  padding: 0.2em 0; }\n\n#ui-datepicker-div.ui-widget-content .ui-datepicker-header .ui-state-disabled {\n  opacity: 0.35;\n  background-color: inherit; }\n\n.ui-datepicker .ui-datepicker-next,\n.ui-datepicker .ui-datepicker-prev {\n  position: absolute;\n  top: 2px;\n  width: 1.8em;\n  height: 1.8em; }\n\n.ui-datepicker .ui-datepicker-prev {\n  left: 2px; }\n\n.ui-datepicker .ui-datepicker-next {\n  right: 2px; }\n\n.ui-datepicker .ui-datepicker-next span,\n.ui-datepicker .ui-datepicker-prev span {\n  display: block;\n  position: absolute;\n  left: 50%;\n  margin-left: -8px;\n  top: 50%;\n  margin-top: -8px; }\n\n.ui-datepicker .ui-datepicker-title {\n  margin: 0 2.3em;\n  line-height: 1.8em;\n  text-align: center; }\n\n.ui-datepicker .ui-datepicker-title select {\n  font-size: 1rem;\n  margin: 1px 0;\n  outline: none; }\n\n.ui-datepicker select.ui-datepicker-month-year {\n  width: 100%; }\n\n.ui-datepicker select.ui-datepicker-month,\n.ui-datepicker select.ui-datepicker-year {\n  width: 45%; }\n\n.ui-datepicker table {\n  width: 100%;\n  font-size: 0.9rem;\n  border-collapse: collapse;\n  border: 2px solid #F2F2F2;\n  border-top: 0; }\n  .ui-datepicker table thead {\n    border: 0;\n    display: table;\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%; }\n  .ui-datepicker table tbody {\n    display: table;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 5px; }\n\n.ui-datepicker th {\n  padding: 0.7em 0;\n  width: 14.28%;\n  text-align: center;\n  font-weight: 500;\n  border: 0;\n  background: #fff; }\n\n.ui-datepicker td {\n  border: 0;\n  padding: 1px;\n  width: 2.4em; }\n\n.ui-datepicker td a,\n.ui-datepicker td span {\n  display: block;\n  padding: 0.2em;\n  text-align: center;\n  text-decoration: none; }\n\n.ui-datepicker .ui-datepicker-buttonpane {\n  background-image: none;\n  margin: -8px 0;\n  padding: 0.25em;\n  border: 2px solid #F2F2F2;\n  border-radius: 3px;\n  height: 32px; }\n\n#ui-datepicker-div.ui-datepicker .ui-datepicker-buttonpane button, #ui-timepicker-div.ui-timepicker .ui-timepicker-table .ui-timepicker-buttonpane button {\n  border: none;\n  padding: 5px 15px;\n  cursor: pointer;\n  margin-bottom: 5px; }\n\n.ui-datepicker .ui-datepicker-buttonpane button {\n  float: right;\n  margin: 0.5em 0.2em 0.4em;\n  cursor: pointer;\n  padding: 0.2em 0.6em 0.3em;\n  width: auto;\n  overflow: visible; }\n\n.ui-datepicker .ui-datepicker-buttonpane button.ui-datepicker-current {\n  float: left; }\n\n/* with multiple calendars */\n.ui-datepicker.ui-datepicker-multi {\n  width: auto; }\n\n.ui-datepicker-multi .ui-datepicker-group {\n  float: left; }\n\n.ui-datepicker-multi .ui-datepicker-group table {\n  width: 95%;\n  margin: 0 auto 0.4em; }\n\n.ui-datepicker-multi-2 .ui-datepicker-group {\n  width: 50%; }\n\n.ui-datepicker-multi-3 .ui-datepicker-group {\n  width: 33.3%; }\n\n.ui-datepicker-multi-4 .ui-datepicker-group {\n  width: 25%; }\n\n.ui-datepicker-multi .ui-datepicker-group-last .ui-datepicker-header,\n.ui-datepicker-multi .ui-datepicker-group-middle .ui-datepicker-header {\n  border-left-width: 0; }\n\n.ui-datepicker-multi .ui-datepicker-buttonpane {\n  clear: left; }\n\n.ui-datepicker-row-break {\n  clear: both;\n  width: 100%;\n  font-size: 0; }\n\n/* RTL support */\n.ui-datepicker-rtl {\n  direction: rtl; }\n\n.ui-datepicker-rtl .ui-datepicker-prev {\n  right: 2px;\n  left: auto; }\n\n.ui-datepicker-rtl .ui-datepicker-next {\n  left: 2px;\n  right: auto; }\n\n.ui-datepicker-rtl .ui-datepicker-buttonpane {\n  clear: right; }\n\n.ui-datepicker-rtl .ui-datepicker-buttonpane button {\n  float: left; }\n\n.ui-datepicker-rtl .ui-datepicker-buttonpane button.ui-datepicker-current,\n.ui-datepicker-rtl .ui-datepicker-group {\n  float: right; }\n\n.ui-datepicker-rtl .ui-datepicker-group-last .ui-datepicker-header,\n.ui-datepicker-rtl .ui-datepicker-group-middle .ui-datepicker-header {\n  border-right-width: 0;\n  border-left-width: 1px; }\n\n/*\n * Timepicker stylesheet\n * Highly inspired from datepicker\n * FG - Nov 2010 - Web3R\n *\n * version 0.0.3 : Fixed some settings, more dynamic\n * version 0.0.4 : Removed width:100% on tables\n * version 0.1.1 : set width 0 on tables to fix an ie6 bug\n */\n.ui-timepicker-inline {\n  display: inline; }\n\n#ui-timepicker-div {\n  padding: 0.2em; }\n\n.ui-timepicker-table {\n  display: inline-table;\n  width: 0; }\n  .ui-timepicker-table table {\n    margin: 0.15em 0 0;\n    border-collapse: collapse;\n    border-left: 2px solid #F2F2F2;\n    border-bottom: 2px solid #F2F2F2; }\n  .ui-timepicker-table .ui-timepicker-minutes table {\n    border-right: 2px solid #F2F2F2; }\n\n.ui-timepicker-hours,\n.ui-timepicker-minutes {\n  padding: 0.2em; }\n  .ui-timepicker-hours tbody,\n  .ui-timepicker-minutes tbody {\n    border: 5px solid white;\n    display: block; }\n\n.ui-timepicker-table .ui-timepicker-title {\n  line-height: 1.8em;\n  text-align: center; }\n\n.ui-timepicker-table td {\n  padding: 0;\n  border: none; }\n\n.ui-timepicker-table th.periods {\n  padding: 0.1em;\n  width: 2.2em;\n  background: #fff;\n  font-weight: 500;\n  border: 0; }\n\n/* span for disabled cells */\n.ui-timepicker-table td span {\n  display: block;\n  padding: 0.2em 0.3em;\n  width: 1.2em;\n  text-align: right;\n  text-decoration: none; }\n\n/* anchors for clickable cells */\n.ui-timepicker-table td a {\n  display: block;\n  padding: 0.2em 0.3em;\n  width: 1.2em;\n  cursor: pointer;\n  text-align: right;\n  text-decoration: none; }\n\n/* buttons and button pane styling */\n.ui-timepicker .ui-timepicker-buttonpane {\n  background-image: none;\n  margin: -2px 0;\n  padding: 0.25em;\n  border: 2px solid #F2F2F2;\n  border-radius: 3px;\n  height: 32px; }\n\n.ui-timepicker .ui-timepicker-buttonpane button {\n  margin: 0.5em 0.2em 0.4em;\n  cursor: pointer;\n  padding: 0.2em 0.6em 0.3em;\n  width: auto;\n  overflow: visible; }\n\n/* The close button */\n.ui-timepicker .ui-timepicker-close {\n  float: right; }\n\n/* the now button */\n.ui-timepicker .ui-timepicker-now {\n  float: left; }\n\n/* the deselect button */\n.ui-timepicker .ui-timepicker-deselect {\n  float: left; }\n\n/* Component containers\n----------------------------------*/\nbody .ui-widget {\n  font-family: Roboto,Verdana,Arial,sans-serif;\n  font-size: 1rem; }\n  body .ui-widget .ui-widget {\n    font-size: 1rem; }\n\n.ui-widget .ui-widget input,\n.ui-widget button,\n.ui-widget select,\n.ui-widget textarea {\n  font-family: Roboto,Verdana,Arial,sans-serif;\n  font-size: 1rem; }\n\n#ui-datepicker-div.ui-widget-content .ui-state-default,\n#ui-datepicker-div .ui-state-default,\n#ui-datepicker-div .ui-widget-header .ui-state-default {\n  margin: 0.1em; }\n\n#ui-timepicker-div .ui-state-default,\n#ui-timepicker-div .ui-widget-content .ui-state-default,\n#ui-timepicker-div .ui-widget-header .ui-state-default {\n  margin: 0.15em; }\n\n#ui-datepicker-div.ui-widget-content,\n#ui-datepicker-div .ui-widget-content,\n#ui-timepicker-div.ui-widget-content,\n#ui-timepicker-div .ui-widget-content {\n  background: #fff;\n  color: #000; }\n\n#ui-datepicker-div.ui-widget-content a,\n#ui-datepicker-div .ui-widget-content a,\n#ui-datepicker-div .ui-widget-header a,\n#ui-timepicker-div.ui-widget-content a,\n#ui-timepicker-div .ui-widget-content a,\n#ui-timepicker-div .ui-widget-header a {\n  color: #000; }\n\n#ui-datepicker-div .ui-widget-header,\n#ui-timepicker-div .ui-widget-header {\n  background: #2A3052;\n  color: #fff; }\n\n#ui-datepicker-div.ui-widget-content .ui-state-default,\n#ui-datepicker-div .ui-state-default,\n#ui-datepicker-div .ui-widget-content .ui-state-default,\n#ui-datepicker-div .ui-widget-header .ui-state-default,\n#ui-timepicker-div.ui-widget-content .ui-state-default,\n#ui-timepicker-div .ui-state-default,\n#ui-timepicker-div .ui-widget-content .ui-state-default,\n#ui-timepicker-div .ui-widget-header .ui-state-default {\n  border: 2px solid #F2F2F2;\n  background: #F2F2F2;\n  font-weight: normal;\n  color: #2A3052;\n  border-radius: 2px; }\n  #ui-datepicker-div.ui-widget-content .ui-state-default.ui-state-active,\n  #ui-datepicker-div .ui-state-default.ui-state-active,\n  #ui-datepicker-div .ui-widget-content .ui-state-default.ui-state-active,\n  #ui-datepicker-div .ui-widget-header .ui-state-default.ui-state-active,\n  #ui-timepicker-div.ui-widget-content .ui-state-default.ui-state-active,\n  #ui-timepicker-div .ui-state-default.ui-state-active,\n  #ui-timepicker-div .ui-widget-content .ui-state-default.ui-state-active,\n  #ui-timepicker-div .ui-widget-header .ui-state-default.ui-state-active {\n    border: 2px solid #2A3052;\n    background: #2A3052 !important;\n    color: #fff; }\n\n#ui-datepicker-div.ui-widget-content .ui-state-default.ui-state-hover,\n#ui-datepicker-div .ui-widget-content .ui-state-default.ui-state-hover,\n#ui-timepicker-div.ui-widget-content .ui-state-default.ui-state-hover,\n#ui-timepicker-div .ui-widget-content .ui-state-default.ui-state-hover {\n  background: #DEDEDE; }\n\n#ui-datepicker-div .ui-state-default a,\n#ui-datepicker-div .ui-state-default a:link,\n#ui-datepicker-div .ui-state-default a:visited,\n#ui-timepicker-div .ui-state-default a,\n#ui-timepicker-div .ui-state-default a:link,\n#ui-timepicker-div .ui-state-default a:visited {\n  color: #000;\n  text-decoration: none; }\n\n#ui-datepicker-div.ui-widget-content .ui-state-disabled,\n#ui-datepicker-div.ui-widget-content .ui-state-disabled .ui-state-default,\n#ui-datepicker-div .ui-widget-content .ui-state-disabled,\n#ui-timepicker-div.ui-widget-content .ui-state-disabled,\n#ui-timepicker-div.ui-widget-content .ui-state-disabled .ui-state-default,\n#ui-timepicker-div .ui-widget-content .ui-state-disabled {\n  color: #DEDEDE;\n  opacity: 1; }\n\n#ui-datepicker-div .ui-icon-circle-triangle-w,\n#ui-timepicker-div .ui-icon-circle-triangle-w {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-23398.295 -21118.941 14.82 24'%3E%3Cpath fill='white' d='M8.59,27.18,17.75,18,8.59,8.82,11.41,6l12,12-12,12Z' transform='translate(-23374.885 -21088.941) rotate(180)'/%3E%3C/svg%3E\");\n  background-position: initial; }\n\n#ui-datepicker-div .ui-icon-circle-triangle-e,\n#ui-timepicker-div .ui-icon-circle-triangle-e {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-22965 -21118.941 14.82 24'%3E%3Cpath fill='white' d='M8.59,27.18,17.75,18,8.59,8.82,11.41,6l12,12-12,12Z' transform='translate(-22973.59 -21124.941)'/%3E%3C/svg%3E\");\n  background-position: initial; }\n\n.ui-icon {\n  width: 16px;\n  height: 16px; }\n\n.ui-accordion .ui-accordion-header, .accordion .ui-accordion-header, #accordion .ui-accordion-header {\n  border-radius: 0;\n  margin-bottom: -3px;\n  font-size: 18px;\n  font-weight: normal; }\n\n.ui-accordion .ui-icon, .accordion .ui-icon, #accordion .ui-icon {\n  display: none;\n  visibility: hidden; }\n\n.ui-accordion .ui-accordion-icons, .ui-accordion .ui-accordion-icons .ui-accordion-icons, .accordion .ui-accordion-icons, .accordion .ui-accordion-icons .ui-accordion-icons, #accordion .ui-accordion-icons, #accordion .ui-accordion-icons .ui-accordion-icons {\n  padding-left: 1.5em; }\n\n.ui-accordion .ui-state-active, .ui-accordion .ui-state-default, .ui-accordion .ui-state-hover, .accordion .ui-state-active, .accordion .ui-state-default, .accordion .ui-state-hover, #accordion .ui-state-active, #accordion .ui-state-default, #accordion .ui-state-hover {\n  border: none;\n  outline: none;\n  background-repeat: no-repeat;\n  background-position: right; }\n\n.ui-accordion .ui-state-active.ui-state-default, .ui-accordion .ui-state-active.ui-state-default.ui-state-hover, .accordion .ui-state-active.ui-state-default, .accordion .ui-state-active.ui-state-default.ui-state-hover, #accordion .ui-state-active.ui-state-default, #accordion .ui-state-active.ui-state-default.ui-state-hover {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='white' d='M7.41,7.84,12,12.42l4.59-4.58L18,9.25l-6,6-6-6Z'/%3E%3C/svg%3E\");\n  background-color: #2A3052;\n  border-color: #2A3052;\n  color: #FFF; }\n\n.ui-accordion .ui-state-default, .ui-accordion .ui-state-hover, .accordion .ui-state-default, .accordion .ui-state-hover, #accordion .ui-state-default, #accordion .ui-state-hover {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='%232a3052' d='M8.59,16.59,13.17,12,8.59,7.41,10,6l6,6-6,6Z'/%3E%3C/svg%3E\");\n  background-color: #F2F2F2;\n  border: 1px solid #DEDEDE;\n  color: #000; }\n\n.ui-accordion .ui-state-hover, .accordion .ui-state-hover, #accordion .ui-state-hover {\n  background-color: #DEDEDE; }\n\n.ui-accordion .ui-accordion-content, .accordion .ui-accordion-content, #accordion .ui-accordion-content {\n  border-radius: 0; }\n\n.ui-accordion .ui-widget-content, .accordion .ui-widget-content, #accordion .ui-widget-content {\n  border: 1px solid #DEDEDE; }\n\n.tabs-container, .has-tabs {\n  padding: 0; }\n  .tabs-container ul.ui-tabs-nav, .has-tabs ul.ui-tabs-nav {\n    border: none;\n    border-radius: 0;\n    padding: 0;\n    margin-left: 0;\n    background: none; }\n    .tabs-container ul.ui-tabs-nav li, .has-tabs ul.ui-tabs-nav li {\n      border: none;\n      list-style-image: none;\n      background: #F2F2F2;\n      border-radius: 3px 3px 0 0;\n      margin: 0 2px 0 0;\n      padding: 0 10px; }\n      .tabs-container ul.ui-tabs-nav li a, .tabs-container ul.ui-tabs-nav li a:visited, .has-tabs ul.ui-tabs-nav li a, .has-tabs ul.ui-tabs-nav li a:visited {\n        padding: 3px 0 0 !important;\n        font-weight: normal;\n        text-decoration: none;\n        color: #000;\n        font-size: 90%;\n        background: transparent; }\n    .tabs-container ul.ui-tabs-nav li.active,\n    .tabs-container ul.ui-tabs-nav li.ui-tabs-active, .has-tabs ul.ui-tabs-nav li.active,\n    .has-tabs ul.ui-tabs-nav li.ui-tabs-active {\n      background: #2A3052;\n      color: #FFF; }\n      .tabs-container ul.ui-tabs-nav li.active a,\n      .tabs-container ul.ui-tabs-nav li.ui-tabs-active a, .has-tabs ul.ui-tabs-nav li.active a,\n      .has-tabs ul.ui-tabs-nav li.ui-tabs-active a {\n        background: none;\n        color: #FFF;\n        font-weight: normal;\n        text-decoration: none;\n        padding: 0;\n        outline: none; }\n\n.tabs-container .ui-tabs-panel, .container .has-tabs .ui-tabs-panel {\n  border: none;\n  padding: 0 !important; }\n\n.tabs-container ul.ui-tabs-nav, .container .has-tabs ul.ui-tabs-nav {\n  margin-bottom: 2px;\n  border-bottom: 1px solid #000; }\n\n.has-tabs .ui-tabs-panel {\n  border: 1px solid #DEDEDE;\n  padding: 10px; }\n\n.ui-dialog-titlebar-buttonpane .ui-corner-all.ui-state-default {\n  border: 0px solid #2A3052;\n  background: #2A3052; }\n\n.ui-widget-header {\n  border: 1px solid #2A3052;\n  background: #2A3052;\n  color: #FFF;\n  font-family: roboto, sans-serif;\n  font-weight: normal; }\n\n.barspinner {\n  margin: 50px auto;\n  width: 60px;\n  height: 20px;\n  text-align: center;\n  font-size: 13px;\n  white-space: nowrap; }\n  .barspinner > div {\n    margin: 2px;\n    border-radius: 20px;\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n    animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n  .barspinner.dark > div {\n    background-color: #2A3052; }\n  .barspinner.white > div {\n    background-color: #fff; }\n  .barspinner .rect1 {\n    -webkit-animation-delay: -1.2s;\n    animation-delay: -1.2s; }\n  .barspinner .rect2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s; }\n  .barspinner .rect3 {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s; }\n  .barspinner .rect4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s; }\n  .barspinner .rect5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s; }\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1); }\n  20% {\n    -webkit-transform: scaleY(2);\n    transform: scaleY(2); } }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1); }\n  20% {\n    -webkit-transform: scaleY(2);\n    transform: scaleY(2); } }\n\n.chartOptions_button {\n  background: #F2F2F2;\n  margin-left: 5px;\n  color: #2A3052;\n  border-radius: 2px; }\n  .chartOptions_button:hover {\n    cursor: pointer; }\n  .chartOptions_button.button_selected {\n    color: #FFF;\n    background: #2A3052; }\n    .chartOptions_button.button_selected:hover {\n      color: #FFF;\n      background: #2A3052; }\n    .chartOptions_button.button_selected [data-balloon]:before, .chartOptions_button.button_selected [data-balloon]:after {\n      opacity: 0; }\n    .chartOptions_button.button_selected[data-balloon]:before, .chartOptions_button.button_selected[data-balloon]:after {\n      opacity: 0; }\n  .chartOptions_button span {\n    border-bottom: 0px;\n    cursor: pointer;\n    display: inline-block; }\n    .chartOptions_button span[data-balloon]:before {\n      padding: 0.5em;\n      font-size: 13px;\n      border: none;\n      box-shadow: none;\n      border-radius: 0px; }\n  .chartOptions_button .img {\n    display: inline; }\n    .chartOptions_button .img div {\n      width: 25px;\n      height: 25px;\n      margin: 5px;\n      background-repeat: no-repeat;\n      background-position: center; }\n    .chartOptions_button .img img {\n      width: 20px;\n      height: 20px;\n      margin: 5px; }\n\n.candlestick-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='25' y1='8.5' x2='25' y2='41.5'/%3E\n     %3Crect fill='white' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x='20.842' y='17.146' width='8.316' height='15.708'/%3E\n     %3C/svg%3E\"); }\n\n.candlestick-w-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Cline fill='none' stroke='white' stroke-miterlimit='10' stroke-width='2' x1='25' y1='8.5' x2='25' y2='41.5'/%3E\n     %3Crect fill='%232a3052' stroke='white' stroke-miterlimit='10' stroke-width='2' x='20.842' y='17.146' width='8.316' height='15.708'/%3E\n     %3C/svg%3E\"); }\n\n.chart_template-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E\n   %3Cg fill='none' fill-rule='evenodd'%3E\n     %3Crect width='20' height='20' fill='none'/%3E\n     %3Cg fill='%232a3052' transform='translate(3 3)'%3E\n       %3Cpath d='M4.05864772,10.5881597 L3.96565789,10.5881597 C1.90358816,10.5916328 0.184234309,8.96390779 0.0137311841,6.84684145 C-0.156771941,4.7297751 1.27867882,2.83239362 3.31310798,2.48571907 C4.29476577,0.740866197 6.20012412,-0.222868908 8.14053573,0.0439938228 C10.0809473,0.310856554 11.6741844,1.75574974 12.1771711,3.70478418 C13.9107218,3.99533956 15.1352245,5.6113735 14.9880145,7.4143868 C14.8408044,9.2174001 13.3714727,10.6000077 11.6151664,10.5881597 L11.5525941,10.5881597 L11.5525941,9.68122738 L11.5964329,9.68109808 C12.4888104,9.71384902 13.3303615,9.25365832 13.8040821,8.47387535 C14.2778026,7.69409239 14.3117231,6.71318475 13.8930661,5.90065085 C13.4744092,5.08811695 12.6667786,4.56740002 11.7744011,4.53464908 L11.4621762,4.51213337 L11.3997313,4.1904803 C11.0706846,2.4807448 9.72928238,1.17160096 8.05430581,0.925506607 C6.37932925,0.679412256 4.7361642,1.55005136 3.95629115,3.09685989 L3.8501347,3.30593438 L3.62221057,3.33166663 C1.99609499,3.53101612 0.800142372,4.99766193 0.890110859,6.68215272 C0.980079347,8.3666435 2.32500627,9.68926151 3.96253565,9.7036138 L4.05864772,9.70333032 L4.05864772,10.5881597 Z'/%3E\n       %3Cpath d='M6.8034056 12.0588235L6.8034056 7.94117647 5.54953561 7.94117647 5.54953561 12.0588235 4.85294118 12.0588235 6.17647059 14.7058824 7.5 12.0588235 6.8034056 12.0588235zM8.63777091 8.82352941L9.89164089 8.82352941 9.89164089 13.2352941 8.63777091 13.2352941 8.63777091 8.82352941zM9.26470588 6.17647059L10.5882353 8.82352941 7.94117647 8.82352941 9.26470588 6.17647059z'/%3E\n     %3C/g%3E\n   %3C/g%3E\n%3C/svg%3E\"); }\n\n.chart_template-w-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E\n   %3Cg fill='none' fill-rule='evenodd'%3E\n     %3Crect width='20' height='20' fill='none'/%3E\n     %3Cg fill='white' transform='translate(3 3)'%3E\n       %3Cpath d='M4.05864772,10.5881597 L3.96565789,10.5881597 C1.90358816,10.5916328 0.184234309,8.96390779 0.0137311841,6.84684145 C-0.156771941,4.7297751 1.27867882,2.83239362 3.31310798,2.48571907 C4.29476577,0.740866197 6.20012412,-0.222868908 8.14053573,0.0439938228 C10.0809473,0.310856554 11.6741844,1.75574974 12.1771711,3.70478418 C13.9107218,3.99533956 15.1352245,5.6113735 14.9880145,7.4143868 C14.8408044,9.2174001 13.3714727,10.6000077 11.6151664,10.5881597 L11.5525941,10.5881597 L11.5525941,9.68122738 L11.5964329,9.68109808 C12.4888104,9.71384902 13.3303615,9.25365832 13.8040821,8.47387535 C14.2778026,7.69409239 14.3117231,6.71318475 13.8930661,5.90065085 C13.4744092,5.08811695 12.6667786,4.56740002 11.7744011,4.53464908 L11.4621762,4.51213337 L11.3997313,4.1904803 C11.0706846,2.4807448 9.72928238,1.17160096 8.05430581,0.925506607 C6.37932925,0.679412256 4.7361642,1.55005136 3.95629115,3.09685989 L3.8501347,3.30593438 L3.62221057,3.33166663 C1.99609499,3.53101612 0.800142372,4.99766193 0.890110859,6.68215272 C0.980079347,8.3666435 2.32500627,9.68926151 3.96253565,9.7036138 L4.05864772,9.70333032 L4.05864772,10.5881597 Z'/%3E\n       %3Cpath d='M6.8034056 12.0588235L6.8034056 7.94117647 5.54953561 7.94117647 5.54953561 12.0588235 4.85294118 12.0588235 6.17647059 14.7058824 7.5 12.0588235 6.8034056 12.0588235zM8.63777091 8.82352941L9.89164089 8.82352941 9.89164089 13.2352941 8.63777091 13.2352941 8.63777091 8.82352941zM9.26470588 6.17647059L10.5882353 8.82352941 7.94117647 8.82352941 9.26470588 6.17647059z'/%3E\n     %3C/g%3E\n   %3C/g%3E\n%3C/svg%3E\"); }\n\n.comparison-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='8.5' y1='12.65' x2='41.5' y2='12.65'/%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='16.69' y1='39.35' x2='33.31' y2='39.35'/%3E\n     %3Ccircle fill='%23f2f2f2' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' cx='25' cy='12.65' r='2'/%3E\n     %3Cpath fill='%232a3052' d='M14,17.78l3.43,8.15a3.47,3.47,0,0,1-6.9,0L14,17.78m0-5.13L8.52,25.57A5.47,5.47,0,0,0,14,31h0a5.47,5.47,0,0,0,5.47-5.47L14,12.65Z'/%3E\n     %3Cpath fill='%232a3052' d='M19.46,25.57A5.47,5.47,0,0,1,14,31h0a5.47,5.47,0,0,1-5.47-5.47Z'/%3E\n     %3Cpath fill='%232a3052' d='M36,17.78l3.43,8.15a3.47,3.47,0,0,1-6.9,0L36,17.78m0-5.13-5.5,12.92A5.47,5.47,0,0,0,36,31h0a5.47,5.47,0,0,0,5.47-5.47L36,12.65Z'/%3E\n     %3Cpath fill='%232a3052' d='M41.48,25.57A5.47,5.47,0,0,1,36,31h0a5.47,5.47,0,0,1-5.47-5.47Z'/%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='25' y1='14.65' x2='25' y2='39.35'/%3E\n     %3C/svg%3E\"); }\n\n.crosshair-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='8.5' y1='25' x2='20.095' y2='25'/%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='29.905' y1='25' x2='41.5' y2='25'/%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='25' y1='8.5' x2='25' y2='20.095'/%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='25' y1='29.905' x2='25' y2='41.5'/%3E%3C/svg%3E\"); }\n\n.dot-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Ccircle fill='%232a3052' cx='25' cy='25' r='3.234'/%3E\n     %3Ccircle fill='%232a3052' cx='38.266' cy='25' r='3.234'/%3E\n     %3Ccircle fill='%232a3052' cx='11.734' cy='25' r='3.234'/%3E%3C/svg%3E\"); }\n\n.dot-w-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Ccircle fill='white' cx='25' cy='25' r='3.234'/%3E\n     %3Ccircle fill='white' cx='38.266' cy='25' r='3.234'/%3E\n     %3Ccircle fill='white' cx='11.734' cy='25' r='3.234'/%3E%3C/svg%3E\"); }\n\n.drawing-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E\n   %3Cg fill='none' fill-rule='evenodd'%3E\n     %3Crect width='20' height='20' fill='none'/%3E\n     %3Cpath fill='%232a3052' d='M4,13.4995206 L4,15.9995133 L6.49999276,15.9995133 L13.8724714,8.62703469 L11.3724786,6.12704193 L4,13.4995206 Z M15.8049658,6.69454028 C16.0643625,6.43489417 16.0643625,6.01418912 15.8049658,5.75454301 L14.2499703,4.19454753 C13.9903242,3.93515082 13.5696191,3.93515082 13.309973,4.19454753 L12.0849766,5.41454399 L14.5849693,7.91453675 L15.8049658,6.69454028 Z'/%3E\n   %3C/g%3E\n%3C/svg%3E\"); }\n\n.drawing-w-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E\n   %3Cg fill='none' fill-rule='evenodd'%3E\n     %3Crect width='20' height='20' fill='none'/%3E\n     %3Cpath fill='white' d='M4,13.4995206 L4,15.9995133 L6.49999276,15.9995133 L13.8724714,8.62703469 L11.3724786,6.12704193 L4,13.4995206 Z M15.8049658,6.69454028 C16.0643625,6.43489417 16.0643625,6.01418912 15.8049658,5.75454301 L14.2499703,4.19454753 C13.9903242,3.93515082 13.5696191,3.93515082 13.309973,4.19454753 L12.0849766,5.41454399 L14.5849693,7.91453675 L15.8049658,6.69454028 Z'/%3E\n   %3C/g%3E\n%3C/svg%3E\"); }\n\n.indicator-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Cpolyline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' points='7.14 16.68 18.02 7.5 31.84 19.3 42.86 10.75'/%3E\n     %3Crect fill='%232a3052' x='7.14' y='23.37' width='3.88' height='19.13'/%3E\n     %3Crect fill='%232a3052' x='15.1' y='15.67' width='3.88' height='26.83'/%3E\n     %3Crect fill='%232a3052' x='23.06' y='22.3' width='3.88' height='20.2'/%3E\n     %3Crect fill='%232a3052' x='31.02' y='26.8' width='3.88' height='15.7'/%3E\n     %3Crect fill='%232a3052' x='38.98' y='18.83' width='3.88' height='23.67'/%3E%3C/svg%3E\"); }\n\n.line-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='7.14' y1='25' x2='42.86' y2='25'/%3E%3C/svg%3E\"); }\n\n.line-w-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Cline fill='none' stroke='white' stroke-miterlimit='10' stroke-width='2' x1='7.14' y1='25' x2='42.86' y2='25'/%3E%3C/svg%3E\"); }\n\n.linedot-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Ccircle fill='%232a3052' cx='25' cy='25' r='3.234'/%3E\n     %3Ccircle fill='%232a3052' cx='38.266' cy='25' r='3.234'/%3E\n     %3Ccircle fill='%232a3052' cx='11.734' cy='25' r='3.234'/%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='11.734' y1='25' x2='38.266' y2='25'/%3E%3C/svg%3E\"); }\n\n.linedot-w-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Ccircle fill='white' cx='25' cy='25' r='3.234'/%3E\n     %3Ccircle fill='white' cx='38.266' cy='25' r='3.234'/%3E\n     %3Ccircle fill='white' cx='11.734' cy='25' r='3.234'/%3E\n     %3Cline fill='none' stroke='white' stroke-miterlimit='10' stroke-width='2' x1='11.734' y1='25' x2='38.266' y2='25'/%3E%3C/svg%3E\"); }\n\n.ohlc-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='25' y1='8.5' x2='25' y2='41.5'/%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='13.912' y1='14.403' x2='25' y2='14.403'/%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='25' y1='35.597' x2='36.088' y2='35.597'/%3E%3C/svg%3E\"); }\n\n.ohlc-w-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Cline fill='none' stroke='white' stroke-miterlimit='10' stroke-width='2' x1='25' y1='8.5' x2='25' y2='41.5'/%3E\n     %3Cline fill='none' stroke='white' stroke-miterlimit='10' stroke-width='2' x1='13.912' y1='14.403' x2='25' y2='14.403'/%3E\n     %3Cline fill='none' stroke='white' stroke-miterlimit='10' stroke-width='2' x1='25' y1='35.597' x2='36.088' y2='35.597'/%3E%3C/svg%3E\"); }\n\n.share-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Cpolyline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' points='34.17 35.82 15.83 25 34.17 14.18'/%3E\n     %3Ccircle fill='%232a3052' cx='15.83' cy='25' r='3.5'/%3E\n     %3Ccircle fill='%232a3052' cx='34.17' cy='14.18' r='3.5'/%3E\n     %3Ccircle fill='%232a3052' cx='34.17' cy='35.82' r='3.5'/%3E%3C/svg%3E\"); }\n\n.share-w-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Cpolyline fill='none' stroke='white' stroke-miterlimit='10' stroke-width='2' points='34.17 35.82 15.83 25 34.17 14.18'/%3E\n     %3Ccircle fill='white' cx='15.83' cy='25' r='3.5'/%3E\n     %3Ccircle fill='white' cx='34.17' cy='14.18' r='3.5'/%3E\n     %3Ccircle fill='white' cx='34.17' cy='35.82' r='3.5'/%3E%3C/svg%3E\"); }\n\n.spline-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Cpath fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' d='M8.5,23.733l3-3.559a6.468,6.468,0,0,1,10.52.9l4.619,7.862a6.468,6.468,0,0,0,10.858.458l4-5.656'/%3E%3C/svg%3E\"); }\n\n.spline-w-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n    %3Cpath fill='none' stroke='white' stroke-miterlimit='10' stroke-width='2' d='M8.5,23.733l3-3.559a6.468,6.468,0,0,1,10.52.9l4.619,7.862a6.468,6.468,0,0,0,10.858.458l4-5.656'/%3E%3C/svg%3E\"); }\n\n.table-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 50 50'%3E\n     %3Crect fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x='8.5' y='8.5' width='33' height='33'/%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='8.5' y1='19.5' x2='41.5' y2='19.5'/%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='8.5' y1='30.5' x2='41.5' y2='30.5'/%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='19.5' y1='41.5' x2='19.5' y2='8.5'/%3E\n     %3Cline fill='none' stroke='%232a3052' stroke-miterlimit='10' stroke-width='2' x1='30.5' y1='41.5' x2='30.5' y2='8.5'/%3E\n     %3C/svg%3E\"); }\n\n/*\n * contract type icons with specified color\n */\n.contract-type.CALLE {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3E%3Cpolygon fill='%2329abe2' points='13.53 26.93 5.34 18.75 0 18.75 0 36 36 36 36 18.75 21.71 18.75 13.53 26.93'/%3E%3Cpolygon fill='%2329abe2' points='17.79 18.75 9.27 18.75 13.53 23.01 17.79 18.75'/%3E%3Cpolygon fill='%2329abe2' points='0 0 0 17.25 4.47 17.25 6.12 15.6 7.77 17.25 19.29 17.25 27.06 9.48 22.67 9.48 25.45 6.7 31.77 6.7 31.77 13.08 28.99 15.86 28.99 11.47 23.21 17.25 36 17.25 36 0 0 0'/%3E%3C/svg%3E\"); }\n\n.contract-type.CALLE.negative-color {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3E%3Cpolygon fill='%23cc0033' points='13.53 26.93 5.34 18.75 0 18.75 0 36 36 36 36 18.75 21.71 18.75 13.53 26.93'/%3E%3Cpolygon fill='%23cc0033' points='17.79 18.75 9.27 18.75 13.53 23.01 17.79 18.75'/%3E%3Cpolygon fill='%23cc0033' points='0 0 0 17.25 4.47 17.25 6.12 15.6 7.77 17.25 19.29 17.25 27.06 9.48 22.67 9.48 25.45 6.7 31.77 6.7 31.77 13.08 28.99 15.86 28.99 11.47 23.21 17.25 36 17.25 36 0 0 0'/%3E%3C/svg%3E\"); }\n\n.contract-type.PUT {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3E%3Cpolygon fill='%2329abe2' points='13.53 9.06 5.34 17.25 0 17.25 0 0 36 0 36 17.25 21.71 17.25 13.53 9.06'/%3E%3Cpolygon fill='%2329abe2' points='17.79 17.25 9.27 17.25 13.53 12.99 17.79 17.25'/%3E%3Cpolygon fill='%2329abe2' points='0 36 0 18.75 4.47 18.75 6.12 20.4 7.77 18.75 19.29 18.75 27.06 26.52 22.67 26.52 25.45 29.3 31.77 29.3 31.77 22.92 28.99 20.14 28.99 24.53 23.21 18.75 36 18.75 36 36 0 36'/%3E%3C/svg%3E\"); }\n\n.contract-type.PUT.negative-color {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3E%3Cpolygon fill='%23cc0033' points='13.53 9.06 5.34 17.25 0 17.25 0 0 36 0 36 17.25 21.71 17.25 13.53 9.06'/%3E%3Cpolygon fill='%23cc0033' points='17.79 17.25 9.27 17.25 13.53 12.99 17.79 17.25'/%3E%3Cpolygon fill='%23cc0033' points='0 36 0 18.75 4.47 18.75 6.12 20.4 7.77 18.75 19.29 18.75 27.06 26.52 22.67 26.52 25.45 29.3 31.77 29.3 31.77 22.92 28.99 20.14 28.99 24.53 23.21 18.75 36 18.75 36 36 0 36'/%3E%3C/svg%3E\"); }\n\n.contract-type.ONETOUCH {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3E%3Cpolygon fill='%2329abe2' points='12.63 29.18 8.45 25.01 14.71 18.75 16.21 17.25 23.82 9.64 18.79 9.64 21.41 7.02 0 7.02 0 17.25 0 18.75 0 36 9.54 36 7.68 34.13 12.63 29.18'/%3E%3Cpolygon fill='%2329abe2' points='28.32 14.05 25.68 16.69 25.68 11.51 19.94 17.25 18.44 18.75 12.18 25.01 16.36 29.18 9.54 36 36 36 36 18.75 36 17.25 36 7.02 28.32 7.02 28.32 14.05'/%3E%3Crect fill='%2329abe2' width='36' height='5.52'/%3E%3C/svg%3E\"); }\n\n.contract-type.NOTOUCH {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3E%3Crect fill='%2329abe2' y='31.75' width='36' height='4.25'/%3E%3Cpath fill='%2329abe2' d='M0,0V30.25H36V0ZM34.17,24.27l-2.45,2.45v-4.5l-6,6L10.76,13.32,8.13,15.95,2.42,10.23,4.15,8.5l4,4,2.63-2.63L25.69,24.79l4.47-4.47h-5l2.45-2.45h6.55Z'/%3E%3C/svg%3E\"); }\n\n.contract-type.NOTOUCH.negative-color {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3E%3Crect fill='%23cc0033' y='31.75' width='36' height='4.25'/%3E%3Cpath fill='%23cc0033' d='M0,0V30.25H36V0ZM34.17,24.27l-2.45,2.45v-4.5l-6,6L10.76,13.32,8.13,15.95,2.42,10.23,4.15,8.5l4,4,2.63-2.63L25.69,24.79l4.47-4.47h-5l2.45-2.45h6.55Z'/%3E%3C/svg%3E\"); }\n\n.contract-type.EXPIRYRANGEE {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3E%3Crect fill='%2329abe2' y='26.46' width='36' height='9.54'/%3E%3Crect fill='%2329abe2' width='36' height='10.21'/%3E%3Cpolygon fill='%2329abe2' points='31.61 22.95 28.22 22.95 31.44 19.73 27.49 19.73 27.46 17.75 27.49 17.33 31.67 17.33 28.32 13.97 31.72 13.97 36 18.26 36 11.81 0 11.81 0 24.86 36 24.86 36 18.56 31.61 22.95'/%3E%3C/svg%3E\"); }\n\n.contract-type.EXPIRYMISS {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3E%3Crect fill='%2329abe2' y='11.81' width='36' height='13.05'/%3E%3Crect fill='%2329abe2' y='26.46' width='36' height='9.54'/%3E%3Cpolygon fill='%2329abe2' points='31.61 9.7 28.22 9.7 31.44 6.47 27.49 6.47 27.46 4.5 27.49 4.08 31.67 4.08 28.32 0.72 31.72 0.72 36 5.01 36 0 0 0 0 10.21 36 10.21 36 5.31 31.61 9.7'/%3E%3C/svg%3E\"); }\n\n.contract-type.EXPIRYMISS.negative-color {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3E%3Crect fill='%23cc0033' y='11.81' width='36' height='13.05'/%3E%3Crect fill='%23cc0033' y='26.46' width='36' height='9.54'/%3E%3Cpolygon fill='%23cc0033' points='31.61 9.7 28.22 9.7 31.44 6.47 27.49 6.47 27.46 4.5 27.49 4.08 31.67 4.08 28.32 0.72 31.72 0.72 36 5.01 36 0 0 0 0 10.21 36 10.21 36 5.31 31.61 9.7'/%3E%3C/svg%3E\"); }\n\n.contract-type.RANGE {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3E%3Cpath fill='%2329abe2' d='M0,24.86H36v-13H0Zm1.72-6H5.58L10,12.12l5.25,7.76L20.64,13l4.72,5.33h4.19L26.2,15h3.39L34,19.41l-4.54,4.54H26.1l3.22-3.22h-5l-3.52-4L15.16,24l-5.1-7.54L6.87,21.25H1.72Z'/%3E%3Crect fill='%2329abe2' y='26.46' width='36' height='9.54'/%3E%3Crect fill='%2329abe2' width='36' height='10.21'/%3E%3C/svg%3E\"); }\n\n.contract-type.UPORDOWN {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3E%3Cpolygon fill='%2329abe2' points='23.62 11.81 12.62 11.81 17.98 21.96 23.62 11.81'/%3E%3Cpolygon fill='%2329abe2' points='29.57 6.07 27.3 10.14 30.87 10.14 29.57 6.07'/%3E%3Cpolygon fill='%2329abe2' points='10.85 8.45 11.74 10.14 24.56 10.14 27.32 5.17 23.13 6.51 24.69 3.49 30.66 1.59 32.61 7.7 31.35 10.14 36 10.14 36 0 0 0 0 10.14 9.92 10.14 10.85 8.45'/%3E%3Cpolygon fill='%2329abe2' points='17.92 26.99 17.12 25.48 0 25.48 0 36 36 36 36 25.48 18.77 25.48 17.92 26.99'/%3E%3Cpolygon fill='%2329abe2' points='36 11.81 26.37 11.81 19.69 23.81 36 23.81 36 11.81'/%3E%3Cpolygon fill='%2329abe2' points='10.8 13.5 6.81 20.73 1.6 20.73 1.6 18.32 5.39 18.32 8.99 11.81 0 11.81 0 23.81 16.25 23.81 10.8 13.5'/%3E%3C/svg%3E\"); }\n\n.contract-type.UPORDOWN.negative-color {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36' width='36' height='36'%3E%3Cpolygon fill='%23cc0033' points='23.62 11.81 12.62 11.81 17.98 21.96 23.62 11.81'/%3E%3Cpolygon fill='%23cc0033' points='29.57 6.07 27.3 10.14 30.87 10.14 29.57 6.07'/%3E%3Cpolygon fill='%23cc0033' points='10.85 8.45 11.74 10.14 24.56 10.14 27.32 5.17 23.13 6.51 24.69 3.49 30.66 1.59 32.61 7.7 31.35 10.14 36 10.14 36 0 0 0 0 10.14 9.92 10.14 10.85 8.45'/%3E%3Cpolygon fill='%23cc0033' points='17.92 26.99 17.12 25.48 0 25.48 0 36 36 36 36 25.48 18.77 25.48 17.92 26.99'/%3E%3Cpolygon fill='%23cc0033' points='36 11.81 26.37 11.81 19.69 23.81 36 23.81 36 11.81'/%3E%3Cpolygon fill='%23cc0033' points='10.8 13.5 6.81 20.73 1.6 20.73 1.6 18.32 5.39 18.32 8.99 11.81 0 11.81 0 23.81 16.25 23.81 10.8 13.5'/%3E%3C/svg%3E\"); }\n\n.mb-trading-wrapper .contract-type.CALLE {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='36' height='36'%3E%3Cpolygon fill='%2329abe2' points='6.28 27.11 4.64 25.47 13.45 16.67 0 16.67 0 32 32 32 32 16.67 16.72 16.67 6.28 27.11'/%3E%3Cpolygon fill='%2329abe2' points='0 0 0 15.33 14.78 15.33 22.91 7.21 18.55 7.21 20.86 4.89 26.92 4.89 26.92 11.08 24.61 13.4 24.61 8.78 18.05 15.33 32 15.33 32 0 0 0'/%3E%3C/svg%3E\"); }\n\n.mb-trading-wrapper .contract-type.CALLE.negative-color {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='36' height='36'%3E%3Cpolygon fill='%23cc0033' points='6.28 27.11 4.64 25.47 13.45 16.67 0 16.67 0 32 32 32 32 16.67 16.72 16.67 6.28 27.11'/%3E%3Cpolygon fill='%23cc0033' points='0 0 0 15.33 14.78 15.33 22.91 7.21 18.55 7.21 20.86 4.89 26.92 4.89 26.92 11.08 24.61 13.4 24.61 8.78 18.05 15.33 32 15.33 32 0 0 0'/%3E%3C/svg%3E\"); }\n\n.mb-trading-wrapper .contract-type.PUT {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='36' height='36'%3E%3Cpolygon fill='%2329abe2' points='6.28 4.89 4.64 6.53 13.45 15.33 0 15.33 0 0 32 0 32 15.33 16.72 15.33 6.28 4.89'/%3E%3Cpolygon fill='%2329abe2' points='0 32 0 16.67 14.78 16.67 22.91 24.79 18.55 24.79 20.86 27.11 26.92 27.11 26.92 20.92 24.6 18.6 24.6 23.22 18.05 16.67 32 16.67 32 32 0 32'/%3E%3C/svg%3E\"); }\n\n.mb-trading-wrapper .contract-type.PUT.negative-color {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='36' height='36'%3E%3Cpolygon fill='%23cc0033' points='6.28 4.89 4.64 6.53 13.45 15.33 0 15.33 0 0 32 0 32 15.33 16.72 15.33 6.28 4.89'/%3E%3Cpolygon fill='%23cc0033' points='0 32 0 16.67 14.78 16.67 22.91 24.79 18.55 24.79 20.86 27.11 26.92 27.11 26.92 20.92 24.6 18.6 24.6 23.22 18.05 16.67 32 16.67 32 32 0 32'/%3E%3C/svg%3E\"); }\n\n.ui-datepicker .ui-datepicker-month, .ui-datepicker .ui-datepicker-year {\n  margin-right: 5px !important; }\n\n.ui-datepicker .ui-datepicker-next:hover, .ui-datepicker .ui-datepicker-prev:hover {\n  opacity: .75;\n  background: 0 0;\n  border: none; }\n\n.ui-datepicker .ui-datepicker-next.ui-state-disabled:hover, .ui-datepicker .ui-datepicker-prev.ui-state-disabled:hover {\n  opacity: .35; }\n\n.tab-menu-wrap ul, #content .tab-menu-wrap ul {\n  margin: 0;\n  font-size: 85%;\n  position: relative;\n  display: block; }\n  .tab-menu-wrap ul li, #content .tab-menu-wrap ul li {\n    margin: 0 2em 0 0;\n    display: inline-block; }\n    .tab-menu-wrap ul li#topMenuStartBetting, #content .tab-menu-wrap ul li#topMenuStartBetting {\n      float: right;\n      margin: 0 0 0 2em; }\n      .tab-menu-wrap ul li#topMenuStartBetting ul, #content .tab-menu-wrap ul li#topMenuStartBetting ul {\n        text-align: right; }\n        .tab-menu-wrap ul li#topMenuStartBetting ul li, #content .tab-menu-wrap ul li#topMenuStartBetting ul li {\n          margin: 0 0 0 2em; }\n    .tab-menu-wrap ul li a, #content .tab-menu-wrap ul li a {\n      font-weight: normal;\n      color: #000;\n      line-height: 2;\n      top: 1px;\n      text-decoration: none;\n      display: inline-block;\n      position: relative;\n      text-transform: capitalize; }\n      .tab-menu-wrap ul li a a.a-active, .tab-menu-wrap ul li a span.a-active, #content .tab-menu-wrap ul li a a.a-active, #content .tab-menu-wrap ul li a span.a-active {\n        color: #fff; }\n    .tab-menu-wrap ul li ul.sub_items, #content .tab-menu-wrap ul li ul.sub_items {\n      margin-top: 1px;\n      display: none; }\n      .tab-menu-wrap ul li ul.sub_items li.sub_item, #content .tab-menu-wrap ul li ul.sub_items li.sub_item {\n        font-size: 100%; }\n    .tab-menu-wrap ul li ul.tm-ul-2, #content .tab-menu-wrap ul li ul.tm-ul-2 {\n      margin-top: 1px;\n      display: none;\n      padding: 0;\n      line-height: 2; }\n      .tab-menu-wrap ul li ul.tm-ul-2 li.tm-li-2, #content .tab-menu-wrap ul li ul.tm-ul-2 li.tm-li-2 {\n        font-size: 100%;\n        margin-right: 20px; }\n  .tab-menu-wrap ul li.hover ul, .tab-menu-wrap ul li.active ul, #content .tab-menu-wrap ul li.active ul, #content .tab-menu-wrap ul li.hover ul, #content .tab-menu-wrap ul li.active ul {\n    display: block;\n    position: absolute;\n    left: 1px;\n    width: 99%;\n    z-index: 10;\n    background: #fff; }\n    .tab-menu-wrap ul li.hover ul li a, .tab-menu-wrap ul li.active ul li a, #content .tab-menu-wrap ul li.active ul li a, .tab-menu-wrap ul li.hover ul li span, .tab-menu-wrap ul li.active ul li span, #content .tab-menu-wrap ul li.active ul li span, #content .tab-menu-wrap ul li.hover ul li a, #content .tab-menu-wrap ul li.active ul li a, #content .tab-menu-wrap ul li.hover ul li span, #content .tab-menu-wrap ul li.active ul li span {\n      top: auto;\n      border: 0;\n      color: #000;\n      display: inline-block; }\n    .tab-menu-wrap ul li.hover ul li a.a-active, .tab-menu-wrap ul li.active ul li a.a-active, #content .tab-menu-wrap ul li.active ul li a.a-active, .tab-menu-wrap ul li.hover ul li span.a-active, .tab-menu-wrap ul li.active ul li span.a-active, #content .tab-menu-wrap ul li.active ul li span.a-active, #content .tab-menu-wrap ul li.hover ul li a.a-active, #content .tab-menu-wrap ul li.active ul li a.a-active, #content .tab-menu-wrap ul li.hover ul li span.a-active, #content .tab-menu-wrap ul li.active ul li span.a-active {\n      color: #E98024; }\n  .tab-menu-wrap ul li.active a, #content .tab-menu-wrap ul li.active a {\n    color: #E98024; }\n  .tab-menu-wrap ul li.active ul, #content .tab-menu-wrap ul li.active ul {\n    z-index: 1; }\n    .tab-menu-wrap ul li.active ul a, #content .tab-menu-wrap ul li.active ul a {\n      background: none; }\n\n#content ul.tm-ul {\n  border: none;\n  border-radius: 0;\n  padding: 0;\n  margin-left: 0;\n  background: none;\n  border-bottom: 1px solid #000;\n  margin-bottom: 2em;\n  white-space: nowrap; }\n  #content ul.tm-ul li {\n    cursor: pointer;\n    border: none;\n    list-style-image: none;\n    background: #F2F2F2;\n    border-radius: 4px 4px 0 0;\n    margin: 0 6px 0 0;\n    padding: 0 10px; }\n    #content ul.tm-ul li a, #content ul.tm-ul li a:visited {\n      padding: 0;\n      font-weight: normal;\n      text-decoration: none;\n      color: #000;\n      font-size: 90%;\n      background: transparent; }\n  #content ul.tm-ul li.active, #content ul.tm-ul li.ui-tabs-active {\n    background: #2A3052;\n    color: #fff; }\n    #content ul.tm-ul li.active a, #content ul.tm-ul li.ui-tabs-active a {\n      background: none;\n      color: #fff;\n      font-weight: normal;\n      text-decoration: none;\n      padding: 0;\n      outline: none; }\n    #content ul.tm-ul li.active span.a-active, #content ul.tm-ul li.ui-tabs-active span.a-active {\n      line-height: 2; }\n  #content ul.tm-ul ul.tm-ul-2 {\n    list-style-type: none;\n    margin: 0; }\n    #content ul.tm-ul ul.tm-ul-2 li {\n      background: none; }\n      #content ul.tm-ul ul.tm-ul-2 li a {\n        color: #000;\n        padding-top: 0;\n        font-weight: normal;\n        text-decoration: none;\n        width: auto; }\n      #content ul.tm-ul ul.tm-ul-2 li a.a-active {\n        color: #E98024; }\n      #content ul.tm-ul ul.tm-ul-2 li a:hover {\n        text-decoration: underline; }\n\n#content .tab-with-subsection .tm-ul, #content .content-tab-container .tm-ul {\n  border-bottom: 1px solid #000; }\n\n.has-tabs {\n  border: none;\n  border-radius: 0;\n  margin: 0;\n  padding: 0;\n  /* fix jquery UI tabs to look more like our tabs */ }\n  .has-tabs ul.ui-tabs-nav {\n    border: none;\n    border-radius: 0;\n    padding: 0;\n    margin-left: 0;\n    background: none;\n    border-bottom: 1px solid #000;\n    font: inherit !important; }\n    .has-tabs ul.ui-tabs-nav li {\n      cursor: pointer;\n      border: none;\n      list-style-image: none;\n      background: #F2F2F2;\n      border-radius: 4px 4px 0 0;\n      margin: 0 6px 0 0;\n      padding: 0 10px; }\n      .has-tabs ul.ui-tabs-nav li a, .has-tabs ul.ui-tabs-nav li a:visited {\n        padding: 0;\n        font-weight: normal;\n        text-decoration: none;\n        color: #000;\n        font-size: 90%;\n        background: transparent; }\n    .has-tabs ul.ui-tabs-nav li.active, .has-tabs ul.ui-tabs-nav li.ui-tabs-active {\n      background: #2A3052;\n      color: #fff; }\n      .has-tabs ul.ui-tabs-nav li.active a, .has-tabs ul.ui-tabs-nav li.ui-tabs-active a {\n        background: none;\n        color: #fff;\n        font-weight: normal;\n        text-decoration: none;\n        padding: 0;\n        outline: none; }\n      .has-tabs ul.ui-tabs-nav li.active span.a-active, .has-tabs ul.ui-tabs-nav li.ui-tabs-active span.a-active {\n        line-height: 2; }\n    .has-tabs ul.ui-tabs-nav ul.tm-ul-2 {\n      list-style-type: none;\n      margin: 0; }\n      .has-tabs ul.ui-tabs-nav ul.tm-ul-2 li {\n        background: none; }\n        .has-tabs ul.ui-tabs-nav ul.tm-ul-2 li a {\n          color: #000;\n          padding-top: 0;\n          font-weight: normal;\n          text-decoration: none;\n          width: auto; }\n        .has-tabs ul.ui-tabs-nav ul.tm-ul-2 li a.a-active {\n          color: #E98024; }\n        .has-tabs ul.ui-tabs-nav ul.tm-ul-2 li a:hover {\n          text-decoration: underline; }\n    .has-tabs ul.ui-tabs-nav li {\n      float: left; }\n\n#content .page-section {\n  width: 100%; }\n  #content .page-section > .tab-menu {\n    width: 100%;\n    height: 32px;\n    background-color: #F2F2F2;\n    border-bottom: 1px solid #DEDEDE; }\n    #content .page-section > .tab-menu ul.tm-ul {\n      margin: 0;\n      background-color: #F2F2F2;\n      border-bottom: 1px solid #DEDEDE;\n      font-size: 100%; }\n      #content .page-section > .tab-menu ul.tm-ul li {\n        margin-right: 2em;\n        color: #E98024; }\n        #content .page-section > .tab-menu ul.tm-ul li a:hover {\n          text-decoration: none; }\n        #content .page-section > .tab-menu ul.tm-ul li.active {\n          background: none; }\n          #content .page-section > .tab-menu ul.tm-ul li.active a {\n            color: #E98024; }\n    #content .page-section > .tab-menu ul.tm-ul-2 li.active a.tm-a-2 {\n      color: #000;\n      background: none; }\n    #content .page-section > .tab-menu ul.tm-ul-2 li.active a.a-active {\n      color: #E98024;\n      background: none; }\n  #content .page-section > .tab-content-wrapper {\n    width: 100%;\n    margin: 0 auto;\n    margin-top: 2em; }\n    #content .page-section > .tab-content-wrapper .full-width-content {\n      width: 100%; }\n\n@media screen and (max-width: 768px) {\n  #content .tab-with-subsection .tm-ul .tm-li {\n    margin: 0;\n    padding: 0;\n    display: block;\n    text-align: center; }\n    #content .tab-with-subsection .tm-ul .tm-li .tm-ul-2 {\n      width: 100% !important;\n      margin: 0 !important;\n      left: 0; }\n      #content .tab-with-subsection .tm-ul .tm-li .tm-ul-2 .tm-li-2 {\n        display: none;\n        padding-top: 5px;\n        margin: 0; }\n        #content .tab-with-subsection .tm-ul .tm-li .tm-ul-2 .tm-li-2:last-child {\n          padding-bottom: 5px; }\n    #content .tab-with-subsection .tm-ul .tm-li.active .tm-ul-2 .tm-li-2 {\n      display: block; }\n  ul.tm-ul-2 {\n    display: block !important;\n    top: 0 !important;\n    position: relative !important; }\n  ul.tm-li-2 {\n    display: block !important; }\n  li.tm-li.hover ul, .tab-menu-wrap ul li.tm-li.active ul, #content .tab-menu-wrap ul li.tm-li.active ul {\n    display: block;\n    position: relative !important;\n    left: 0 !important;\n    width: 99% !important;\n    z-index: 1 !important;\n    margin-top: 0 !important;\n    background: #fff;\n    margin-left: 1px; }\n  #page-wrapper #content .page-section > .tab-menu ul.tm-ul li.active a {\n    background: none; } }\n\n.top-nav-menu {\n  list-style: none outside none;\n  display: inline-table;\n  padding: 0;\n  margin: 0;\n  vertical-align: middle; }\n  .top-nav-menu > li > a {\n    height: 30px; }\n  .top-nav-menu > li > ul {\n    position: absolute;\n    list-style: none outside none;\n    min-width: 100%; }\n  .top-nav-menu li {\n    float: left;\n    position: relative;\n    list-style: none outside none;\n    padding: 0;\n    margin: 0; }\n    .top-nav-menu li a {\n      display: block;\n      padding: 20px 30px;\n      transition: padding .5s;\n      white-space: nowrap;\n      text-align: left;\n      outline: none;\n      font-size: 1rem;\n      font-weight: 400; }\n      .top-nav-menu li a.disabled, .top-nav-menu li a.disabled:hover {\n        opacity: 0.5; }\n      .top-nav-menu li a:hover {\n        opacity: 0.75;\n        text-decoration: none; }\n    .top-nav-menu li ul {\n      visibility: hidden;\n      opacity: 0;\n      margin: 0;\n      padding: 0; }\n      .top-nav-menu li ul li ul {\n        position: absolute;\n        left: 100%;\n        top: 0; }\n    .top-nav-menu li > ul li {\n      float: none;\n      background-color: #2A3052; }\n      .top-nav-menu li > ul li a {\n        padding: 10px 30px; }\n        .top-nav-menu li > ul li a:hover {\n          background: #E98024;\n          opacity: 1;\n          text-decoration: none; }\n  .top-nav-menu ul li:hover > ul {\n    visibility: visible !important;\n    display: inline-block !important;\n    opacity: 1 !important; }\n  .top-nav-menu .nav-caret {\n    margin-left: 2px; }\n  .top-nav-menu .nav-submenu-caret {\n    position: absolute;\n    right: 15px;\n    top: 10px;\n    display: inline-block;\n    color: #fff; }\n    .top-nav-menu .nav-submenu-caret:after {\n      content: '\\BB'; }\n\n.steps {\n  display: flex; }\n  .steps .step {\n    flex: 1; }\n    .steps .step .circle {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      background-color: #E98024;\n      margin: auto;\n      margin-top: -20px;\n      text-align: center;\n      line-height: 40px;\n      color: #fff; }\n\n@font-face {\n  font-family: 'BinarySymbols';\n  font-style: normal;\n  font-weight: normal;\n  src: url(" + __webpack_require__(4) + ") format(\"woff\"); }\n\n.symbols:before {\n  font-family: BinarySymbols;\n  margin-right: 2px; }\n\n.symbols, .symbols:before {\n  transition: none;\n  animation: none; }\n\n.symbols.aud:before {\n  content: 'A$'; }\n\n.symbols.eur:before {\n  content: '\\20AC'; }\n\n.symbols.gbp:before {\n  content: '\\A3'; }\n\n.symbols.jpy:before {\n  content: '\\A5'; }\n\n.symbols.usd:before {\n  content: '$'; }\n\n.symbols.btc:before {\n  content: 'B'; }\n\n.symbols.bch:before {\n  content: '\\E901'; }\n\n.symbols.eth:before {\n  content: 'E'; }\n\n.symbols.etc:before {\n  content: '\\E900'; }\n\n.symbols.ltc:before {\n  content: 'L'; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "data:application/font-woff;base64,d09GRgABAAAAAAw0AAsAAAAAC+gAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgD24EEmNtYXAAAAFoAAAAjAAAAIzqmiLFZ2FzcAAAAfQAAAAIAAAACAAAABBnbHlmAAAB/AAABlAAAAZQywVLAGhlYWQAAAhMAAAANgAAADYOnpFVaGhlYQAACIQAAAAkAAAAJAdkA7ZobXR4AAAIqAAAADgAAAA4IJ0Dk2xvY2EAAAjgAAAAHgAAAB4JCAcwbWF4cAAACQAAAAAgAAAAIAATAKluYW1lAAAJIAAAAvQAAAL04PCRznBvc3QAAAwUAAAAIAAAACAAAwAAAAMCmgGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAAxAAAAIAAAAAAAAAAAAAAAAAQAAA6QEDZv9nAJkDZgCZAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAHAAAAAYABAAAwAIAAEAIAAkAEIARQBMAKMApSCs6QH//f//AAAAAAAgACQAQQBFAEwAowClIKzpAP/9//8AAf/j/+D/xP/C/7z/Zv9l318XDAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABACD/oAHjAyAAUwAAJTQmJy4BJy4BJy4BNTQ2Nz4BNzUzFR4BFx4BFSM0JicuASMiBgcOARUUFhceARceARceARceARUUBgcOAQcVIzUuAScuATUzFBYXHgEzMjY3PgE1AYkPEBA0JTRLGBcYFxgXPylIKEAWFxZZEBAQLBwcLBAPDxAQEDUlJTkVFR4KCgoZGBlFLEgtRhoZGloREhIyICAyEhISuBYlDw8cDA8pGRlAJydAGhkeBVlaBSIdHE0yIjYUFBQPDw8pGhknDg8aDAwaDg4iExItGSlBGRkdBFxcBCAbHEswIjMSEhIPDw8qGgAAAgDe//ADYgLQAAgADAAAJSEXMwEjATM3NxsBIQGCATxHXf7nUv7nXkYcgoP++7LCAuD9IMJKAWj+mAAAAwAq/6ACfAMgAC0AOgBKAAAXIzUzESM1MzUzFTM1MxUeARceARUUBgcOAQceARceARUUBgcOAQcVIzUjFSM1ExUzMjY3PgE1NCYrATUzMjY3PgE1NCYnLgErARWbcXFxcV1SXixDGB0dDg4OJhkdLREREB4fHEswXlJdXZsgNBITE0VGnI0fMRITEhERETQiiwJOAilNXl5eXwMYExhHLhksExMeCggfFhc1IC9LGxkbAl9eXl4BTP4RERAvHUBASRAPDyoaHSsNDQ7iAAAAAAMAVf/oAiQC2AAEAAkADgAAEyEVITURIRUhNREhFSE1VQHP/jEBif53Ac/+MQLYV1f+nlhY/slXVwAAAAEAZ//oAo4C2AAOAAA3ByE3IT8CBxMjAw8BN/ArAbsO/qYq9hj6N2JEhxWJ4PhR8ql2rAE6/nldcl4AAAEAZf/xAmUC0AA1AAA/AT4BNSczNSM1JzQ2Nz4BMzIWFx4BFzMuAScuASMiBgcOARUXIxUzFRcVFAYHDgEHIxUhNSHsBw8PBJ+hBRESES4cHS8REBEBVAEbGxtKLzFPHx4eBVFTBAcHBxIMIgH+/oc0ChY8JnZDBoQhNRQVFRERDyoaKUIZGhodHh1OMYpDBnAFGCoSEhUCQ0MAAAEAYv/rAm8C2AAWAAABCwEjEyMVMxUjFTMVMzUzNSM1MzUjEwIbsrZRwI6mpqZYqqqqjcAC2P6cAWT+hzRkNKioNGQ0AXkAAAEAVv/sAi8C1wA4AAAFDgEjIiYnLgEnNSM1MzUjNTM3PgE3PgEzMhYXBy4BIyIGBw4BBxUzFSMVMxUjFR4BFx4BMzI2NxcCLx05HT5gJCMlAVtbW1oBAiYjJF89GTogCBs1GitDFxgZAcPExMQBGRgYQyscNRkIBgcHJCQlZ0MGMlMyB0FlIyQjBwdFCAgbGxtLMQcyUzIHMk4cHBwICEQAAAAAAwBO/+ICHgLgAAQACQANAAATNxcLAR8BNwsBNwcXN1bi2tvhAeHm5OPi6+vkAYlfYgFa/qlqg4P+wwE9mmOCfwAAAAAEAET/oAP8AyAAWwCJAJYApgAAAT4BNz4BNzUzFR4BFx4BFSM0JicuASMiBgcOARUUFhceARceARceARceARUUBgcOAQcVIzUuASc+ATc+ATcUFjMeATMyNjc+ATU0JicuAScuAScuASc+ATU0JicBIzUzESM1MzUzFTM1MxUeARceARUUBgcOAQceARceARUUBgcOAQcVIzUjFSM1ExUzMjY3PgE1NCYrATUzMjY3PgE1NCYnLgErARUCfQEDAhdAKEgpPxcWF1kQEBErHB0sDw8QEBEQNSUkOhUUHwoKCRgZGEUsSCdAGAULBQwSBwEBETIhHzISExIQDxA1JTNLGAMGAhYWFBT+N3BwcHBeUl4rRBgdHQ4ODicYHS0REBEfHxtML15SXl6aITMTExNGRZyNHzESEhMRERE0I4oCgwIEAhkeBVlaBSIdHE0yIjYUFBQPDw8pGhknDg8aDAwaDg4iExMsGSlBGRkdBFxcAxkWAwgECxcOAQESEg8PDyoaFiUPDxwMDykZAwcEFjokJzwU/XtOAilNXl5eXwMYExhHLhksExMeCggfFhc1IC9LGxkbAl9eXl4BTP4RERAvHUBASRAPDyoaHSsNDQ7iAAEAAAABAAByvqKDXw889QALBAAAAAAA1cGmzAAAAADVwabMAAD/oAP8AyAAAAAIAAIAAAAAAAAAAQAAA2b/ZwAABEAAAAAAA/wAAQAAAAAAAAAAAAAAAAAAAA4EAAAAAAAAAAAAAAAAMwAAAgMAIAODAN4CpwAqAn0AVQL0AGcCzABlAs8AYgKGAFYCawBOBEAARAAAAAAACgAUAB4AmAC2AR4BPAFaAagBzAIeAkADKAAAAAEAAAAOAKcABAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAUAPYAAQAAAAAAAAAKAQsAAQAAAAAAAQAOAAAAAQAAAAAAAgAHAb8AAQAAAAAAAwAOAWsAAQAAAAAABAAOAdQAAQAAAAAABQALAUoAAQAAAAAABgAOAZUAAQAAAAAACgAyAHUAAQAAAAAACwAZACoAAQAAAAAADQALASkAAwABBAkAAAAUARUAAwABBAkAAQAcAA4AAwABBAkAAgAOAcYAAwABBAkAAwAcAXkAAwABBAkABAAcAeIAAwABBAkABQAWAVUAAwABBAkABgAcAaMAAwABBAkACgBkAKcAAwABBAkACwAyAEMAAwABBAkADQAWATRiaW5hcnlfc3ltYm9scwBiAGkAbgBhAHIAeQBfAHMAeQBtAGIAbwBsAHNodHRwczovL3N0eWxlLmJpbmFyeS5jb20vAGgAdAB0AHAAcwA6AC8ALwBzAHQAeQBsAGUALgBiAGkAbgBhAHIAeQAuAGMAbwBtAC9CaW5hcnkuY29tIHN5bWJvbHMgZm9udApGb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBCAGkAbgBhAHIAeQAuAGMAbwBtACAAcwB5AG0AYgBvAGwAcwAgAGYAbwBuAHQACgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC5CaW5hcnkuY29tAEIAaQBuAGEAcgB5AC4AYwBvAG1NSVQgTGljZW5zZQBNAEkAVAAgAEwAaQBjAGUAbgBzAGVWZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBiaW5hcnlfc3ltYm9scwBiAGkAbgBhAHIAeQBfAHMAeQBtAGIAbwBsAHNiaW5hcnlfc3ltYm9scwBiAGkAbgBhAHIAeQBfAHMAeQBtAGIAbwBsAHNSZWd1bGFyAFIAZQBnAHUAbABhAHJiaW5hcnlfc3ltYm9scwBiAGkAbgBhAHIAeQBfAHMAeQBtAGIAbwBsAHMAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ })
/******/ ]);
//# sourceMappingURL=binary.js.map