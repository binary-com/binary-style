/*
 * js code for Drop-Down Menu
 */
require('select2');

export function select2Matcher(params, data) {
    const query = params.term || '';
    const text = data.text || '';
    if (text.toUpperCase().indexOf(query.toUpperCase()) === 0) {
        return data;
    }
    return false;
};

export function select2onFocus() {
    let select2_open;
    // Trigger Select2 on TAB button or focus
    $(document).on('focus', '.select2-selection--single', (e) => {
        select2_open = $(e.target).parent().parent().siblings('select');
        select2_open.select2('open');
    });
    // ie11 fix
    if (/rv:11.0/i.test(navigator.userAgent)) {
        $(document).on('blur', '.select2-search__field', () => {
            select2_open.select2('close');
        });
    }
};

export function hide_menu($element) {
    $element.animate({'opacity': 0}, 100, () => {
        $element.css('visibility', 'hidden')
            .css('display', 'none');
    });
}

export function show_menu($element) {
    $element.css('visibility', 'visible')
        .css('display', 'block')
        .animate({'opacity': 1}, 100);
}

export function navMenuListener() {
    $('.nav-menu').on('click', (event) => {
        event.stopPropagation();
        hide_menu($('.top-nav-menu li ul'));
        hide_menu($('#language_select, #select_language'));
        const $el = $('#all-accounts, #all-accounts-top');
        if (+$el.css('opacity') === 1 ) {
            hide_menu($el);
        } else {
            show_menu($el);
        }
    });
}

export function selectDropdown(selector, has_label) {
    if (!selector) return;

    const $selector = $(selector);
    let $select_dropdown, $list, $list_items;

    function init() {
        const is_initialized = $selector.hasClass('select-hidden');
        if (!is_initialized) {
            $selector.addClass('select-hidden')
                .wrap('<div class="select"></div>')
                .after('<div class="select-dropdown" tabindex="0"></div>');
        }

        $select_dropdown = $selector.next('div.select-dropdown');
        $select_dropdown.text($selector.find(':selected').text()).wrapInner('<span></span>');

        if ($selector.attr('disabled') === 'disabled') {
            $select_dropdown.addClass('disabled');
        }

        $list = $select_dropdown.parent().find('.select-options');
        if ($list.length) {
            // empty list to repopulate
            $list.empty();
        } else {
            // create list
            $list = $('<ul />', { class: 'select-options' }).insertAfter($select_dropdown);
        }

        const optgroups = $selector.children('optgroup');
        if (optgroups.length) {
            // break down group into labels with its list items
            optgroups.each((idx, el) => {
                const options = $(el).children();
                const label   = $(el).attr('label');
                appendToList(options, label);
            });
        } else {
            const options = $selector.children('option');
            appendToList(options);
        }

        // Attach event listeners
        $select_dropdown.off('click').on('click', (e) => {
            e.stopPropagation();
            if ($select_dropdown.hasClass('disabled')) return;

            // expand dropdown expand/collapse
            const $siblings = $('.select-dropdown').not(e.target);
            if ($siblings.hasClass('show')) {
                $siblings.removeClass('show');
            }
            $select_dropdown.toggleClass('show');
        });

        $list_items = $list.children('li');
        $list_items.off('click').on('click', (e) => {
            e.stopPropagation();
            const $target = $(e.target);
            if ($target.hasClass('disabled') || $target.hasClass('label')) return;
            $select_dropdown.text($target.text()).removeClass('show').wrapInner('<span></span>');

            const selected_value = $selector.val();
            const dropdown_value = $target.data('value');

            // sync original select with selected dropdown value
            if (selected_value !== dropdown_value) {
                triggerEventChange(dropdown_value);
                $list_items.not(e.target).each((idx, el) => {
                    $(el).removeClass('selected');
                });
                $target.addClass('selected');
                removeActiveClasses();
            }
        });

        const removeActiveClasses = () => {
            const list = $select_dropdown.parent().find('.select-options');
            list.find('li.select-items').removeClass('active');

        };

        const triggerEventChange = (value) => {
            const event = new Event('change');
            // dispatch event to trigger onChange value
            $selector.val(value).get(0).dispatchEvent(event);
        };

        // attach focus event/class
        $select_dropdown.on('focusin', () => $select_dropdown.addClass('focused'));
        $select_dropdown.on('focusout', () => $select_dropdown.removeClass('focused'));

        // attach keypress events
        $select_dropdown.off('keydown').on('keydown', (e) => {

            const selected_value = $selector.val();
            const key            =  e.keyCode || e.which;
            const key_string     = String.fromCharCode(key);
            const $target        = $(e.target).next('ul.select-options');
            const $active        = $target.children().filter('.active');
            const active_target  = $target.find('li.select-items.active').first();
            let $current;

            const key_matching_item = $target.find('li.select-items').filter((idx, item) => {
                const found_item = $(item).not('.selected').not('.active').not('.disabled').text().charAt(0).toLowerCase() === key_string.toLowerCase();
                return found_item;
            });

            const isAlphaNumeric = /^[a-z0-9]+$/i.test(key_string);
            const isActiveFocus  = ($select_dropdown.hasClass('show') && $select_dropdown.hasClass('focused'));

            if (!key === 9 || isActiveFocus) {
                e.preventDefault();
            }

            switch (key) {
                case 9:
                    if ($select_dropdown.hasClass('show') && $select_dropdown.hasClass('focused')) {
                        removeActiveClasses();
                        $select_dropdown.removeClass('show');
                    }
                    break;
                case 13:
                    if (active_target && active_target.data('value') && (active_target.data('value') !== selected_value) || active_target.data('value') === '') {
                        $target.find('li.select-items').removeClass('selected');
                        triggerEventChange(active_target.data('value'));
                        active_target.addClass('selected');
                        $select_dropdown.text(active_target.text()).removeClass('show').wrapInner('<span></span>');
                    }
                    removeActiveClasses();
                    $select_dropdown.removeClass('show');
                    break;
                case 32:
                    if ($select_dropdown.hasClass('focused') && !$select_dropdown.hasClass('show')) {
                        e.preventDefault();
                        removeActiveClasses();
                        $select_dropdown.addClass('show');
                    }
                    else if ($select_dropdown.hasClass('show') && $select_dropdown.hasClass('focused')) {
                        if (active_target && active_target.data('value') && (active_target.data('value') !== selected_value) || active_target.data('value') === '') {
                            $target.find('li.select-items').removeClass('selected');
                            triggerEventChange(active_target.data('value'));
                            active_target.addClass('selected');
                            $select_dropdown.text(active_target.text()).removeClass('show').wrapInner('<span></span>');
                        }
                        removeActiveClasses();
                        $select_dropdown.removeClass('show');
                    }
                    break;
                case 38:
                    removeActiveClasses();
                    $current = $active.prevAll(':not(.disabled):not(.selected)').eq(0);
                    if (!$active.length || $active.is(':first-child')) {
                        $current = $target.children().not('.disabled').not('.selected').last();
                    }
                    $current.addClass('active');
                    break;
                case 40:
                    if ($select_dropdown.hasClass('focused')) {
                        e.preventDefault();
                    }
                    removeActiveClasses();
                    if (!$select_dropdown.hasClass('show')) {
                        $select_dropdown.addClass('show');
                    }
                    $current = $active.nextAll(':not(.disabled):not(.selected)').eq(0);
                    if (!$active.length || $active.is(':last-child')) {
                        $current = $target.children().not('.disabled').not('.selected').first();
                    }
                    $current.addClass('active');
                    break;
                default:
                    if (isAlphaNumeric && key_matching_item.length && $select_dropdown.hasClass('show') && $select_dropdown.hasClass('focused')) {
                        removeActiveClasses();
                        key_matching_item.first().addClass('active');
                    }
            }
        });
    };

    function appendToList(options, label) {
        if (has_label && label) {
            $('<li />', {
                text : label,
                class: 'select-items label',
            }).appendTo($list);
        }

        $.map(options, (el) => {
            const $el = $(el);
            const is_disabled = $el.is(':disabled');
            const is_selected = $el.is(':selected');
            const className   = `select-items${is_selected ? ' selected': ''}${is_disabled ? ' disabled': ''}`;
            $('<li />', {
                'text'      : $el.text(),
                'data-value': $el.val(),
                'class'     : className,
            }).appendTo($list);
        });
    }

    init();
}

export function topNavMenuListener() {
    const $menu           = $('.top-nav-menu li ul');
    const $menus_to_hide  = $('#all-accounts, #all-accounts-top, #language_select, #select_language');
    const nav_caret_class = 'nav-caret';
    $('.top-nav-menu > li.nav-dropdown-toggle').on('click', function(event) {
        const $target = $(event.target);
        if ($target.find('span').hasClass(nav_caret_class) || $target.hasClass(nav_caret_class)) {
            event.stopPropagation();
            const $child_menu = $(this).find(' > ul');
            if (+$child_menu.css('opacity') === 1) {
                hide_menu($menu);
            } else if (+$child_menu.css('opacity') === 0) {
                hide_menu($menus_to_hide);
                $menu.animate({'opacity': 0}, 100, () => {
                    $menu.css('visibility', 'hidden');
                }).promise().then(() => { show_menu($child_menu); });
            }
        }
    });
}

export function documentListener() {
    const select_els = document.getElementsByClassName('select-dropdown');
    $(document).on('click', () => {
        hide_menu($('#all-accounts, #all-accounts-top'));
        hide_menu($('.top-nav-menu li ul'));
        hide_menu($('#language_select, #select_language'));
        if (select_els.length && select_els.length > 0) {
            // collapse dropdowns when clicking outside
            Array.from(select_els).forEach(el => {
                if ($(el).hasClass('show') || $(el).hasClass('focused')) {
                    $(el).removeClass('show focused');
                }
            });
        }
    });
}

export function langListener() {
    $('.languages').on('click', (event) => {
        event.stopPropagation();
        hide_menu($('.top-nav-menu li ul'));
        hide_menu($('#all-accounts, #all-accounts-top'));
        const $el = $('#language_select, #select_language');
        if (+$el.css('opacity') === 1 ) {
            hide_menu($el);
        } else {
            show_menu($el);
        }
    });
}

export function initMenuContent(_menu_containers) {
    const listeners_events = [];
    _menu_containers.filter(':not(.follow-default)').delegate('.tm-a,.tm-a-2', 'click', (event) => {
        event.preventDefault();

        const target = $(event.target);
        const tab_id = target.parents('li:first').attr('id');

        if (tab_id) {
            const tab_container = target.parents('.tm-ul');

            let selected_tab =
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
                    .siblings().removeClass('active').find('.tm-li-2').removeClass('active').end()
                    .end().end();

            // replace span to a, to make it clickable for real
            const span_tm_a = tab_container.find('span.tm-a');
            span_tm_a.replaceWith(`<a href="#" class="${span_tm_a.attr('class')}">${span_tm_a.html()}</a>`);

            const menu_li = selected_tab.parents('li');
            let sub_menu_selected = menu_li.find('.tm-ul-2 .a-active');
            let selected_tab_id = menu_li.attr('id');

            if (!sub_menu_selected.length) {
                sub_menu_selected = menu_li.find('.tm-a-2:first').addClass('a-active');

                if (sub_menu_selected.length) {
                    selected_tab = sub_menu_selected;
                    selected_tab_id = sub_menu_selected.parents('li').attr('id');
                } else {
                    selected_tab_id = menu_li.attr('id');
                }
            }

            const selected_content = $(`#${selected_tab_id}-content`)
            // show selected tab content
                .removeClass('invisible')
                // and hide the rest
                .siblings(':not(.sticky)').addClass('invisible').end();

            push_to_listeners({
                id     : selected_tab_id,
                target : selected_tab,
                content: selected_content,
                menu   : menu_li.parents('ul.tm-ul'),
                event,
            });
        }
        return false;
    });
    function push_to_listeners(info) {
        // push to listeners events
        for (let i = 0; i < listeners_events.length; i++) {
            listeners_events[i](info);
        }
    }
}

/*
 * js code for tabs with subsections
 */
export function tabListener() {
    $('.tm-ul > li').hover(
        function () {
            $(this).addClass('hover');
        },
        function () {
            $(this).removeClass('hover');
        }
    );
    initMenuContent($('.content-tab-container').find('.tm-ul'));
}

$(document).ready(() => {
    navMenuListener();
    topNavMenuListener();
    documentListener();
    langListener();
    tabListener();
});
