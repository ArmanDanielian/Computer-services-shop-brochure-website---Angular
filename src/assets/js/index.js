// hover sidebar
if (window.matchMedia('(min-width: 768px)').matches) {
    $(".dropdown").hover(
        function() {
            $('.dropdown-menu', this).stop(true, true).fadeIn("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        },
        function() {
            $('.dropdown-menu', this).stop(true, true).fadeOut("fast");
            $(this).toggleClass('open');
            $('b', this).toggleClass("caret caret-up");
        });
}

// sortBy price
var ascending = false;
$('.table-hover').on('click', '.sortByPrice', function() {

    var sorted = $('.results-row').sort(function(a, b) {
        return (ascending ==
            (convertToNumber($(a).find('.price').html()) <
                convertToNumber($(b).find('.price').html()))) ? 1 : -1;
    });
    ascending = ascending ? false : true;

    $('.results').html(sorted);
});

var convertToNumber = function(value) {
    return parseFloat(value.replace('$', ''));
}

//  placeholder 
var ph = "Enter a product name or brand",
    searchBar = $('#search'),
    phCount = 0;
function randDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function printLetter(string, el) {
    var arr = string.split(''),
        input = el,
        origString = string,
        curPlace = $(input).attr("placeholder"),
        placeholder = curPlace + arr[phCount];

    setTimeout(function() {
        $(input).attr("placeholder", placeholder);
        phCount++;
        if (phCount < arr.length) {
            printLetter(origString, input);
        }
    }, randDelay(50, 90));
}
function placeholder() {
    $(searchBar).attr("placeholder", "");
    printLetter(ph, searchBar);
}

placeholder();
$('.submit').click(function(e) {
    phCount = 0;
    e.preventDefault();
    placeholder();
});

// scroll body to 0px on click
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').click(function() {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

});


// img-zoom
$("img.zoom").click(function() {
    if ($(this).hasClass("zoom-in")) {
        $(this).removeClass("zoom-in");
    } else {
        $("img.zoom-in").removeClass("zoom-in");
        $(this).addClass("zoom-in")
    }
});


// quantity
$(document).ready(function() {
    var quantitiy = 0;
    $('.quantity-right-plus').click(function(e) {
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        $('#quantity').val(quantity + 1);
    });
    $('.quantity-left-minus').click(function(e) {
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }

    });
});


// product modal
$(document).on('show.bs.modal', '.modal', function() {
    $(this).appendTo('body');
});

