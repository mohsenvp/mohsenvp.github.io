/////////////////* NAVIGATION */////////////////////////
$(window).load(function () {
    "use strict";
    if ((screen.width >= 1024) && (screen.height >= 768)) {
        $('#navigation a').stop().animate({ 'marginLeft': '130px' }, 1000);

        $('#navigation > li').hover(
                    function () {
                        $('a', $(this)).stop().animate({ 'marginLeft': '2px' }, 200);
                    },
                    function () {
                        $('a', $(this)).stop().animate({ 'marginLeft': '130px' }, 200);
                    });
    }
    else {
        $('#navigation a').stop().animate({ 'marginLeft': '130px' }, 1000);
    }
});

/////////////////* NIVOSLIDER */////////////////////////

                $(window).load(function () {
                    $('#slider').nivoSlider({
                        effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
                        animSpeed: 500, // Slide transition speed
                        pauseTime: 3000, // How long each slide will show
                        startSlide: 0, // Set starting Slide (0 index)
                        directionNav: true, // Next & Prev navigation
                        controlNav: false, // 1,2,3... navigation
                        controlNavThumbs: false // Use thumbnails for Control Nav
                    });
                });

/////////////////* HINT */////////////////////////

                if ("ontouchstart" in document.documentElement) {
                    document.querySelector(".hint").innerHTML = "<span>Tap on the left or right to navigate</span>";
                }

/////////////////* LIGHTBOX HTML5 VALIDATION */////////////////////////

                $('a[data-rel]').each(function () {
                    "use strict";
                    $(this).attr('rel', $(this).data('rel'));
                });

/////////////////* AJAX CONTACT FORM */////////////////////////

var messageDelay = 2000;  
$(init);

function init() {

    $('#contactForm').hide().submit(submitForm).addClass('positioned');

    $('a[href="#contactForm"]').click(function () {
        $('#content').fadeTo('slow', .2);
        $('#contactForm').fadeIn('slow', function () {
            $('#senderName').focus();
        })

        return false;
    });

    $('#cancel').click(function () {
        $('#contactForm').fadeOut();
        $('#content').fadeTo('slow', 1);
    });
    $('#contactForm').keydown(function (event) {
        if (event.which == 27) {
            $('#contactForm').fadeOut();
            $('#content').fadeTo('slow', 1);
        }
    });

}

function submitForm() {
    var contactForm = $(this);

    if (!$('#senderName').val() || !$('#senderEmail').val() || !$('#message').val()) {

        $('#incompleteMessage').fadeIn().delay(messageDelay).fadeOut();
        contactForm.fadeOut().delay(messageDelay).fadeIn();

    } else {

        $('#sendingMessage').fadeIn();
        contactForm.fadeOut();

        $.ajax({
            url: contactForm.attr('action') + "?ajax=true",
            type: contactForm.attr('method'),
            data: contactForm.serialize(),
            success: submitFinished
        });
    }
    return false;
}

function submitFinished(response) {
    response = $.trim(response);
    $('#sendingMessage').fadeOut();

    if (response == "success") {

        $('#successMessage').fadeIn().delay(messageDelay).fadeOut();
        $('#senderName').val("");
        $('#senderEmail').val("");
        $('#message').val("");

        $('#content').delay(messageDelay + 500).fadeTo('slow', 1);

    } else {

        $('#failureMessage').fadeIn().delay(messageDelay).fadeOut();
        $('#contactForm').delay(messageDelay + 500).fadeIn();
    }
}

/////////////////* GOOGLE MAPS SETTINGS */////////////////////////

function load() {
    var point = new google.maps.LatLng(29.630212,52.520227);

    var myMapOptions = {
        zoom: 15,
        disableDefaultUI: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_TOP
        },
        center: point,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), myMapOptions);

    var image = new google.maps.MarkerImage(
  'images/map-icon.png',
  new google.maps.Size(128, 128),
  new google.maps.Point(0, 0),
  new google.maps.Point(64, 128)
);

    var shadow = new google.maps.MarkerImage(
  'images/map-icon-shadow.png',
  new google.maps.Size(194, 128),
  new google.maps.Point(0, 0),
  new google.maps.Point(64, 128)
);

    var shape = {
        coord: [72, 0, 76, 1, 79, 2, 81, 3, 83, 4, 85, 5, 87, 6, 88, 7, 89, 8, 91, 9, 92, 10, 93, 11, 94, 12, 95, 13, 96, 14, 97, 15, 97, 16, 98, 17, 99, 18, 100, 19, 100, 20, 101, 21, 101, 22, 102, 23, 102, 24, 103, 25, 103, 26, 103, 27, 104, 28, 104, 29, 104, 30, 105, 31, 105, 32, 105, 33, 105, 34, 106, 35, 106, 36, 106, 37, 106, 38, 106, 39, 106, 40, 106, 41, 106, 42, 106, 43, 106, 44, 106, 45, 106, 46, 106, 47, 106, 48, 106, 49, 106, 50, 106, 51, 106, 52, 106, 53, 105, 54, 105, 55, 105, 56, 105, 57, 105, 58, 105, 59, 104, 60, 104, 61, 104, 62, 103, 63, 103, 64, 103, 65, 102, 66, 102, 67, 102, 68, 101, 69, 101, 70, 100, 71, 100, 72, 99, 73, 99, 74, 98, 75, 98, 76, 97, 77, 97, 78, 96, 79, 96, 80, 95, 81, 94, 82, 94, 83, 93, 84, 93, 85, 92, 86, 91, 87, 91, 88, 90, 89, 89, 90, 89, 91, 88, 92, 87, 93, 87, 94, 86, 95, 85, 96, 85, 97, 84, 98, 83, 99, 83, 100, 82, 101, 81, 102, 81, 103, 80, 104, 79, 105, 79, 106, 78, 107, 77, 108, 77, 109, 76, 110, 75, 111, 74, 112, 74, 113, 73, 114, 72, 115, 72, 116, 71, 117, 70, 118, 70, 119, 69, 120, 68, 121, 68, 122, 67, 123, 66, 124, 65, 125, 65, 126, 64, 127, 63, 127, 62, 126, 62, 125, 61, 124, 60, 123, 59, 122, 59, 121, 58, 120, 57, 119, 57, 118, 56, 117, 55, 116, 55, 115, 54, 114, 53, 113, 53, 112, 52, 111, 51, 110, 50, 109, 50, 108, 49, 107, 48, 106, 48, 105, 47, 104, 46, 103, 46, 102, 45, 101, 44, 100, 44, 99, 43, 98, 42, 97, 42, 96, 41, 95, 40, 94, 40, 93, 39, 92, 38, 91, 38, 90, 37, 89, 36, 88, 36, 87, 35, 86, 34, 85, 34, 84, 33, 83, 33, 82, 32, 81, 31, 80, 31, 79, 30, 78, 30, 77, 29, 76, 29, 75, 28, 74, 28, 73, 27, 72, 27, 71, 26, 70, 26, 69, 25, 68, 25, 67, 25, 66, 24, 65, 24, 64, 24, 63, 23, 62, 23, 61, 23, 60, 22, 59, 22, 58, 22, 57, 22, 56, 22, 55, 22, 54, 21, 53, 21, 52, 21, 51, 21, 50, 21, 49, 21, 48, 21, 47, 21, 46, 21, 45, 21, 44, 21, 43, 21, 42, 21, 41, 21, 40, 21, 39, 21, 38, 21, 37, 21, 36, 21, 35, 22, 34, 22, 33, 22, 32, 22, 31, 23, 30, 23, 29, 23, 28, 24, 27, 24, 26, 24, 25, 25, 24, 25, 23, 26, 22, 26, 21, 27, 20, 27, 19, 28, 18, 29, 17, 30, 16, 30, 15, 31, 14, 32, 13, 33, 12, 34, 11, 35, 10, 36, 9, 38, 8, 39, 7, 40, 6, 42, 5, 44, 4, 46, 3, 48, 2, 51, 1, 55, 0, 72, 0],
        type: 'poly'
    };

    var marker = new google.maps.Marker({
        draggable: false,
        animation: google.maps.Animation.DROP,
        icon: image,
        shadow: shadow,
        shape: shape,
        map: map,
        position: point
    });

}

