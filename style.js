/*
 * js code for binary style
 */
$(document).ready(function() {
    initSections();

    var listItem, $listItem, $optionItem;

    function initVariables() {
        listItem    = '.page-wrapper > .sidebar-left li';
        $listItem   = $(listItem);
        $optionItem = $('#mobile-page-selector');
    }

    function initSections() {
        var currentPath = window.location.hash === '' ? '/' : window.location.hash;
        initVariables();
        populateOptionMenu();
        displaySection(null, currentPath);
        displaySection('mobile', currentPath);
        $listItem.on('click', function() { displaySection(); });
        $optionItem.on('change', function() { displaySection('mobile'); });
    }

    function populateOptionMenu() {
        $listItem.each(function() {
            $optionItem.append('<option value="' + $(this).find('a').attr('href') + '">' + $(this).text() + '</option>');
        });
    }

    function selectListItemMenu(id) {
        $listItem.removeClass('selected').find('a[href="' + id + '"]').parent().addClass('selected');
    }

    function selectOptionMenu(id) {
        $optionItem.find('option').removeAttr('selected').end().find('option[value="' + id + '"]').attr('selected', 'selected');
    }

    function displaySection(mobileView, currentPath) {
        var hashValue;
        if (mobileView) {
            hashValue = currentPath || $optionItem.val();
            selectListItemMenu(hashValue);
        } else {
            hashValue = currentPath || $(listItem + '.selected a').attr('href');
            selectOptionMenu(hashValue);
        }
        var classToShow = hashValue.split('#')[1];
        if (hashValue === '/') {
            history.replaceState("", document.title, window.location.pathname);
        } else {
            window.location.hash = hashValue;
        }
        if (!classToShow || $('.' + classToShow).length === 0) classToShow = 'introduction-section';
        $('.f-row').hide();
        $('.' + classToShow).css('display', 'flex');
    }

    $('#language_select li').unbind('click').on('click', function(event) {
        event.stopPropagation();
        var $newClass = $(this).attr('class'),
            $newText = $(this).text(),
            $languageSelect = $('#language_select'),
            selectClass = 'invisible';
        $('#language_select li:first-child, #display_language li').removeClass().addClass($newClass).find('span.language').text($newText);
        $languageSelect.find('li').removeClass(selectClass).end().find('li.' + $newClass + ':eq(1)').addClass(selectClass);
        $languageSelect.animate({'opacity': 0}, 100, function() {
            $languageSelect.css('visibility', 'hidden');
        });;
    });
});
