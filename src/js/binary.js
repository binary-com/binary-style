/*
 * js code for Drop-Down Menu
 */

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

export function selectDropdown(el_selector, has_label) {
    if (el_selector) {
        const init = () => {
            // check if optgroup
            if ($(el_selector).children('optgroup').length) {
                console.log('is optgroup');
                const group_items = $(el_selector).children('optgroup');
                const selected_item = group_items.find(':selected').text();

                $(el_selector).addClass('select-hidden');
                $(el_selector).wrap('<div class="select"></div>');
                $(el_selector).after('<div class="select-dropdown"></div>');

                const $selectDropdown = $(el_selector).next('div.select-dropdown');
                $selectDropdown.text(selected_item);

                const $list = $('<ul />', {
                    'class': 'select-options',
                }).insertAfter($selectDropdown);

                // break down group into labels with its list items
                group_items.each((idx, el) => {
                    const group_item = $(el).children();
                    if (has_label) {

                        // add label
                        $('<li />', {
                            text    : $(el).attr('label'),
                            addClass: 'select-items label',
                        }).appendTo($list);
                    }

                    // insert list elements
                    $.map(group_item, (i) => {
                        const isDisabled = $(i).is(':disabled');
                        const isSelected = $(i).is(':selected');
                        let className = 'select-items';
                        className += isSelected ? ' selected' : '';
                        className += isDisabled ? ' disabled' : '';
                        $('<li />', {
                            text    : $(i).text(),
                            value   : $(i).val(),
                            addClass: className,
                        }).appendTo($list);
                    });
                });

                const $listItems = $list.children('li');

                $selectDropdown.click((e) => {
                    e.stopPropagation();
                    const dropdown = e.target;

                    // expand dropdown expand/collapse
                    $(dropdown).toggleClass('show');
                });

                $listItems.not('.disabled').not('.label').click((e) => {
                    const item = e.target;
                    e.stopPropagation();
                    $selectDropdown.text($(item).text()).removeClass('show');

                    const selected_value = $(el_selector).val();
                    const dropdown_value = $(item).attr('value');

                    // sync original select with selected dropdown value
                    if (selected_value !== dropdown_value) {
                        const event = new Event('change');
                        // dispatch event to trigger onChange value
                        $(el_selector).val(dropdown_value).get(0).dispatchEvent(event);
                        $listItems.not(this).each((idx, el) => {
                            $(el).removeClass('selected');
                        });
                        $(item).addClass('selected');
                    }
                });

                // collapse dropdown when clicking outside
                $(document).click((e) => {
                    if (!$listItems.is(e.target) && $listItems.has(e.target).length === 0) {
                        if ($selectDropdown.hasClass('show')) $selectDropdown.removeClass('show');
                    }
                });
            }
            else {
                const items = $(el_selector).children('option');

                $(el_selector).addClass('select-hidden');
                $(el_selector).wrap('<div class="select"></div>');
                $(el_selector).after('<div class="select-dropdown"></div>');

                const $selectDropdown = $(el_selector).next('div.select-dropdown');

                // check if selected option exists if not revert back to first option
                const first_option = $(el_selector).children('option').eq(0).text();
                const selected_text = $(el_selector).children('option').filter(':selected').text() || first_option;

                $selectDropdown.text(selected_text);
                const $list = $('<ul />', {
                    'class': 'select-options',
                }).insertAfter($selectDropdown);

                // add option values to new dropdown list
                $.map(items, (i) => {
                    const isDisabled = $(i).is(':disabled');
                    const isSelected = $(i).is(':selected');
                    let className = 'select-items';
                    className += isSelected ? ' selected' : '';
                    className += isDisabled ? ' disabled' : '';
                    $('<li />', {
                        text    : $(i).text(),
                        value   : $(i).val(),
                        addClass: className,
                    }).appendTo($list);
                });

                const $listItems = $list.children('li');

                $selectDropdown.click(function(e) {
                    e.stopPropagation();
                    // expand dropdown expand/collapse
                    $(this).toggleClass('show');
                });

                $listItems.not('.disabled').click(function(e) {
                    e.stopPropagation();
                    $selectDropdown.text($(this).text()).removeClass('show');

                    const selected_value = $(el_selector).val();
                    const dropdown_value = $(this).attr('value');

                    // sync original select with selected dropdown value
                    if (selected_value !== dropdown_value) {
                        const event = new Event('change');
                        // dispatch event to trigger onChange value
                        $(el_selector).val(dropdown_value).get(0).dispatchEvent(event);
                        $listItems.not(this).each((idx, el) => {
                            $(el).removeClass('selected');
                        });
                        $(this).addClass('selected');
                    }
                });
                // collapse dropdown when clicking outside
                $(document).click((e) => {
                    if (!$listItems.is(e.target) && $listItems.has(e.target).length === 0)
                    {
                        if ($selectDropdown.hasClass('show')) $selectDropdown.removeClass('show');
                    }
                });
            }
        };

        const refreshList = () => {
            if ($(el_selector).children('optgroup').length) {
                // TO-DO: Refresh option items that are nested in optgroup
                console.log('refresh option group');
            }
            else {
                const items = $(el_selector).children('option');
                const $selectDropdown = $(el_selector).next('div.select-dropdown');

                // check if selected option exists if not revert back to first option
                const first_option = $(el_selector).children('option').eq(0).text();
                const selected_text = $(el_selector).children('option').filter(':selected').text() || first_option;

                $selectDropdown.text(selected_text);

                const $list = $(el_selector).siblings('.select-options');
                $list.empty();

                // add option values to new dropdown list
                $.map(items, (i) => {
                    const isDisabled = $(i).is(':disabled');
                    const isSelected = $(i).is(':selected');
                    let className = 'select-items';
                    className += isSelected ? ' selected' : '';
                    className += isDisabled ? ' disabled' : '';
                    $('<li />', {
                        text    : $(i).text(),
                        value   : $(i).val(),
                        addClass: className,
                    }).appendTo($list);
                });

                const $listItems = $list.children('li');
                $listItems.click(function(e) {
                    e.stopPropagation();
                    $selectDropdown.text($(this).text()).removeClass('show');

                    const selected_value = $(el_selector).val();
                    const dropdown_value = $(this).attr('value');

                    // sync original select with selected dropdown value
                    if (selected_value !== dropdown_value) {
                        const event = new Event('change');
                        // dispatch event to trigger onChange value
                        $(el_selector).val(dropdown_value).get(0).dispatchEvent(event);
                        $listItems.not(this).each((idx, el) => {
                            $(el).removeClass('selected');
                        });
                        $(this).addClass('selected');
                    }
                });
            }
        };

        if (!$(el_selector).next('.select-dropdown').length) {
            init();
        }
        else {
            refreshList();
        }
    }
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
    $(document).on('click', () => {
        hide_menu($('#all-accounts, #all-accounts-top'));
        hide_menu($('.top-nav-menu li ul'));
        hide_menu($('#language_select, #select_language'));
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

export function sidebarCollapsible() {
    const sidebar = '.sidebar-collapsible';

    function getChildrenHeight($el) {
        let totalHeight = 0;
        $el.children().each(function() {
            totalHeight += $(this).outerHeight(true);
        });
        return totalHeight;
    }

    function toggleSubmenu($el) {
        const $parent  = $el.parent();
        const $submenu = $el.siblings('ul');
        if ($parent.is('.active')) {
            const totalHeight = getChildrenHeight($submenu);
            $submenu.animate({ height: `${totalHeight}px` }, 300);
            if (!$submenu.find('.active').length) {
                $submenu.find('li:first-child > a').addClass('selected'); // set first child active
            }
        } else {
            $submenu.animate({ height: '0px' }, 300);
        }
        $parent.siblings().find('ul').animate({ height: '0px' }, 300);
    }

    function getTargetHref(current_target) {
        const submenu = current_target.nextElementSibling;
        const target  = submenu ? $(submenu).find($(submenu).find('.selected')[0] ? '.selected' : 'a:first')[0] : current_target;
        return target.getAttribute('href');
    }

    function showSelectedContent(current_target) {
        const $content = $('.sidebar-collapsible-content');
        if (!$content) return;
        const target   = getTargetHref(current_target);
        $content
            .find('> div')
            .addClass('invisible')
            .end()
            .find(`${target}-content`)
            .removeClass('invisible');
    }

    function initSidebar() {
        if ($(sidebar).find('.active').length) {
            $(sidebar).find('.active').removeClass('active');
        }
        $(sidebar).find('a').off('click').on('click', function(e) {
            e.preventDefault();
            const $this     = $(this);
            const $parent   = $this.parent('li');
            const $siblings = $parent.siblings('li');
            if ($parent.hasClass('has-submenu')) {
                $this.toggleClass('selected').parent('li').toggleClass('active');
            } else {
                $this.addClass('selected').parent('li').addClass('active');
            }
            $siblings.removeClass('active').find('> a').removeClass('selected');
            toggleSubmenu($this);
            showSelectedContent(e.target);
        });
    }
    initSidebar();
}

$(document).ready(() => {
    navMenuListener();
    topNavMenuListener();
    documentListener();
    langListener();
    tabListener();
    sidebarCollapsible();
});
