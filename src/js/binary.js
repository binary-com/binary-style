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
        const $submenu = $el.siblings('ul');
        if ($el.is('.selected')) {
            const totalHeight = getChildrenHeight($submenu);
            $submenu.height(totalHeight);
        }
        else {
            $submenu.height(0);
        }
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
        $(sidebar).off('click').on('click', function(e) {
            const $target = $(e.target);

            if (!$target.is('a')) return;

            const was_active = $target.is('.selected');
            const $sidebar   = $(sidebar);

            if ($target.siblings('ul').length) {
                // parent link
                e.preventDefault();
                $sidebar.find('.active').removeClass('active');
                $sidebar.find('.selected').removeClass('selected');
                $sidebar.find('.no-transition').removeClass('no-transition');
                if (!was_active) {
                    $target.addClass('selected').parent('li').addClass('active');
                    const $first_link = $target.siblings('ul').find('li:first-child > a');
                    if ($first_link.length) {
                        $first_link[0].click();
                    }
                }
                toggleSubmenu($target);
            }
            else if ($target.closest('.has-submenu').length) {
                // child link
                const $parent_link = $target.closest('.has-submenu').addClass('active').children('a').addClass('selected');
                $target.addClass('selected').parent('li').addClass('active');
                $parent_link.addClass('no-transition');
                toggleSubmenu($parent_link);
            }
            else {
                // childless link
                $target.addClass('selected').parent('li').addClass('active');
            }
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

