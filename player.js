
function played(tag, gaana, dabba, patti, stops) {
    var unique = tag.id;

    /** */
    var others = document.getElementsByClassName('playlist');
    for (var i = 0; i < others.length; i++) {
        others[i].pause();
    }
    
    others = document.getElementsByClassName('start');
    for (var i = 0; i < others.length; i++) {
        others[i].src = 'img/play-icon.png';
    }

    others = document.getElementsByClassName('bar');
    for (var i = 0; i < others.length; i++) {
        others[i].style.display = 'none';
    }

    others = document.getElementsByClassName('stop');
    for (var i = 0; i < others.length; i++) {
        others[i].style.display = 'none';
    }
    /** */
    var change = document.getElementById(unique);
    change.src = "img/pause-icon-red.png";

    var go = document.getElementById(gaana);
    go.play();

    var a = go.duration;
    var b = a + 's';

    var container = document.getElementById(dabba);
    container.style.display = 'block';
    var contain = document.getElementById(stops);
    contain.style.display = 'block';

    var amount = document.getElementById(patti);
    amount.style.animationDuration = b;

    go.onended = function () {
        change.src = "img/play-icon.png";
        contain.style.display = 'none';
        container.style.display = 'none';

    }
}

function stoped(tag, gaana, dabba, patti, starts) {
    var unique = tag.id;
    var go = document.getElementById(gaana);
    go.pause();
    go.currentTime = 0;

    close();

    function close() {
        document.getElementById(unique).style.display = 'none';
        document.getElementById(starts).src = "img/play-icon.png";
        document.getElementById(dabba).style.display = 'none';
    }

}

function download(gaana) {
    var person = window.localStorage.getItem('status');

    if (person == 'loggedin') {
        var a = document.getElementById(gaana);
        a.click();
    }
    else {
        var b = document.getElementById('sign1');
        b.click();
    }
}