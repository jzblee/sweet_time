var second = 0;
var t;
var timer_el = document.getElementById('timer');
function sixty() {
    clear_();
    timer_el.innerHTML = ':60';
    if (second !== 60) {
        document.getElementById('sixty').className += ' primed';
        second = 60;
    }
    else {
        document.getElementById('sixty').className += ' active';
        second -= 1;
        print_time();
        timer();
    }

}

function thirty() {
    clear_();
    timer_el.innerHTML = ':30';
    if (second !== 30) {
        document.getElementById('thirty').className += ' primed';
        second = 30;
    }
    else {
        document.getElementById('thirty').className += ' active';
        second -= 1;
        print_time();
        timer();
    }
}

function dec() {
    second--;
    print_time();
    if (second > 0) timer();
    else document.getElementById('container').className += ' red-bg';
}

function print_time() {
    var str = second.toString();
    if (second < 10) str = '0' + str;
    str = ':' + str;
    if (second < 10) str = '<span class="red">' + str + '</span>';
    timer_el.innerHTML = str;
}

function zero() {
    clear_();
    timer_el.innerHTML = ':00';
    second = 0;
}

function clear_() {
    document.getElementById('thirty').className = 'reset';
    document.getElementById('sixty').className = 'reset';
    clearTimeout(t);
    document.getElementById('container').className = '';
}

function timer() {
    t = setTimeout(dec, 1000);
}

function full() {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.getElementsByTagName('body')[0].webkitRequestFullscreen();
}
