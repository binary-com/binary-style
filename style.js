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

    $('#date-picker').datepicker({
                        dateFormat: 'dd M, yy',
                        changeMonth: true,
                        changeYear: true,
                        minDate: new Date(),
                      });
    attachTimePicker();
    $("#time-picker").on('click', function() {
        $(this).timepicker('destroy');
        attachTimePicker();
    });

    function attachTimePicker() {
        var date = new Date();
        $("#time-picker").timepicker({
            minTime: {
                hour: date.getHours(),
                minute: date.getMinutes()
            }
        });
    }
});
