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
    $("#time-picker")
        .on('click', function() {
          $(this).timepicker('destroy');
          attachTimePicker();
        })
        .on('keypress', debounce(function(e) {
            if (!/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(e.target.value)) {
                if ($('#invalid-time').length === 0) {
                    $('#time-picker').parent().append($('<p>', {class: 'error-msg', id: 'invalid-time', text: 'Invalid time'}));
                }
            } else {
                $('#invalid-time').remove();
            }
        }));

    function attachTimePicker() {
        var date = new Date();
        $("#time-picker").timepicker({
            minTime: {
                hour: date.getHours(),
                minute: date.getMinutes()
            }
        });
    }

    function debounce(func, wait, immediate) {
        'use strict';
        var timeout;
        var delay = wait || 500;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, delay);
            if (callNow) func.apply(context, args);
        };
    }
});
