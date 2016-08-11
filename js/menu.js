$(document).ready(function() {
    $('.nav-menu').unbind('click').on('click', function(){
        event.stopPropagation();
        if ($('#all-accounts, #all-accounts-top').css('opacity') == 1 ) {
            $('#all-accounts, #all-accounts-top').animate({'opacity': 0}, 100, function() {
                $('#all-accounts, #all-accounts-top').css('visibility', 'hidden');
            });
        } else {
            $('#all-accounts, #all-accounts-top').css('visibility', 'visible')
                                                 .animate({'opacity': 1}, 100);
        }
    });
    $(document).unbind('click'). on('click', function(){
        $('#all-accounts, #all-accounts-top').css('visibility', 'hidden')
                                             .animate({'opacity':0}, 100);
    });
});
