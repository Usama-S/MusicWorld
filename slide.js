
var a = window.screen.width;
var b;

if (a < 500) {
    b = 1;
}
else if (a < 1000 &&
    a > 500
) {
    b = 2
}
else {
    b = 4;
}


/*slide01*/


$(document).ready(function () {

    //you can set this, as long as it's not greater than the slides length
    var show = b;
    var w = $('#card_slider01').width() / show;
    var l = $('.slide01').length;

    $('.slide01').width(w);
    $('#slide-container01').width(w * l)

    function slider() {
        $('.slide01:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({ marginLeft: 0 });
        });
    }
    var timer = setInterval(slider, 2000);

    $('#card_slider01').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(slider, 2000);
        });
    $('#button01').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(slider, 2000);
    });
});

function Prev01() {
    var show = b;
    var w = $('#card_slider01').width() / show;

    var obj = $('.slide01:last-child');
    $(obj).prependTo($(obj).parent()).css({ marginLeft: -w });

    $('.slide01:first-child').animate({
        marginLeft: 0
    }, 'slow');
    
}

function Next01() {
    var show = b;
    var w = $('#card_slider01').width() / show;

    $('.slide01:first-child').animate({
        marginLeft: -w
    }, 'slow', function () {
        $(this).appendTo($(this).parent()).css({ marginLeft: 0 });
    });
}


/*slide02*/

$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = b;
    var w = $('#card_slider02').width() / show;
    var l = $('.slide02').length;

    $('.slide02').width(w);
    $('#slide-container02').width(w * l)

    function slider() {
        $('.slide02:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({ marginLeft: 0 });
        });
    }
    var timer = setInterval(slider, 2000);

    $('#card_slider02').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(slider, 2000);
        });
    $('#button02').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(slider, 2000);
    });
});

function Prev02() {
    var show = b;
    var w = $('#card_slider02').width() / show;

    var obj = $('.slide02:last-child');
    $(obj).prependTo($(obj).parent()).css({ marginLeft: -w });

    $('.slide02:first-child').animate({
        marginLeft: 0
    }, 'slow');
}

function Next02() {
    var show = b;
    var w = $('#card_slider02').width() / show;

    $('.slide02:first-child').animate({
        marginLeft: -w
    }, 'slow', function () {
        $(this).appendTo($(this).parent()).css({ marginLeft: 0 });
    });
}


/*slide03*/

$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = b;
    var w = $('#card_slider03').width() / show;
    var l = $('.slide03').length;

    $('.slide03').width(w);
    $('#slide-container03').width(w * l)

    function slider() {
        $('.slide03:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({ marginLeft: 0 });
        });
    }
    var timer = setInterval(slider, 2000);

    $('#card_slider03').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(slider, 2000);
        });
    $('#button03').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(slider, 2000);
    });
});

function Prev03() {
    var show = b;
    var w = $('#card_slider03').width() / show;

    var obj = $('.slide03:last-child');
    $(obj).prependTo($(obj).parent()).css({ marginLeft: -w });

    $('.slide03:first-child').animate({
        marginLeft: 0
    }, 'slow');
}

function Next03() {
    var show = b;
    var w = $('#card_slider03').width() / show;

    $('.slide03:first-child').animate({
        marginLeft: -w
    }, 'slow', function () {
        $(this).appendTo($(this).parent()).css({ marginLeft: 0 });
    });
}


/*slide04*/

$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = b;
    var w = $('#card_slider04').width() / show;
    var l = $('.slide04').length;

    $('.slide04').width(w);
    $('#slide-container04').width(w * l)

    function slider() {
        $('.slide04:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({ marginLeft: 0 });
        });
    }
    var timer = setInterval(slider, 2000);

    $('#card_slider04').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(slider, 2000);
        });
    $('#button04').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(slider, 2000);
    });
});

function Prev04() {
    var show = b;
    var w = $('#card_slider04').width() / show;

    var obj = $('.slide04:last-child');
    $(obj).prependTo($(obj).parent()).css({ marginLeft: -w });

    $('.slide04:first-child').animate({
        marginLeft: 0
    }, 'slow');
}

function Next04() {
    var show = b;
    var w = $('#card_slider04').width() / show;

    $('.slide04:first-child').animate({
        marginLeft: -w
    }, 'slow', function () {
        $(this).appendTo($(this).parent()).css({ marginLeft: 0 });
    });
}


/*slide05*/

$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = b;
    var w = $('#card_slider05').width() / show;
    var l = $('.slide05').length;

    $('.slide05').width(w);
    $('#slide-container05').width(w * l)

    function slider() {
        $('.slide05:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({ marginLeft: 0 });
        });
    }
    var timer = setInterval(slider, 2000);

    $('#card_slider05').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(slider, 2000);
        });
    $('#button05').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(slider, 2000);
    });
});

function Prev05() {
    var show = b;
    var w = $('#card_slider05').width() / show;

    var obj = $('.slide05:last-child');
    $(obj).prependTo($(obj).parent()).css({ marginLeft: -w });

    $('.slide05:first-child').animate({
        marginLeft: 0
    }, 'slow');
}

function Next05() {
    var show = b;
    var w = $('#card_slider05').width() / show;

    $('.slide05:first-child').animate({
        marginLeft: -w
    }, 'slow', function () {
        $(this).appendTo($(this).parent()).css({ marginLeft: 0 });
    });
}

