var second = 0;
var t;
var timer_el = document.getElementById('timer');
var minitimer_el = document.getElementById('minitimer');

zero();

function primeOrStart(amt) {
    clear_();
    if (second !== amt) {
        document.getElementById('timer_' + amt).className += ' primed';
        second = amt;
        print_time();
    }
    else {
        document.getElementById('timer_' + amt).className += ' active';
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
    var str = Math.floor(second / 60).toString() + ':';
    if (second % 60 < 10) str += '0' + second % 60;
    else str += second % 60;
    if (second < 10) str = '<span class="red">' + str + '</span>';
    timer_el.innerHTML = str;
    minitimer_el.innerHTML = str;
}

function zero() {
    clear_();
    timer_el.innerHTML = '0:00';
    minitimer_el.innerHTML = '0:00';
    second = 0;
}

function clear_() {
    var timers = document.getElementsByClassName('timer');
    for (var i = 0; i < timers.length; i++) {
        timers[i].className = 'reset timer';
    }
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
