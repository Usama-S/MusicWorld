var users = [];
var naam;

window.onload = function () {
    if (window.localStorage.getItem('users') != null) {
        users = JSON.parse(window.localStorage.getItem('users'));
    }

    if (window.localStorage.getItem('status') != null) {
        status = window.localStorage.getItem('status');
    }

    if (window.localStorage.getItem('status') == 'loggedin') {
        abc123();
    }

    if (window.localStorage.getItem('naam') != null) {
        naam = window.localStorage.getItem('naam');
    }
    document.getElementById('username').innerText = naam;
};

var status;



function login() {
    var logmail = document.getElementById('logmail').value;
    var logpass = document.getElementById('logpass').value;
    var check = 0;

    if (logmail == '' ||
        logpass == ''
    ) {
        alert('INVALID Login...! Please Try Again.');
        return false;
    }

    for (var i = 0; i < users.length; i++) {

        if (users[i].mail.indexOf(logmail) > -1 &&
            users[i].password.indexOf(logpass) > -1
        ) {
            check++;

            var close = document.getElementById('close');
            close.click();

            abc123();

            status = 'loggedin';

            document.getElementById('logmail').value = '';
            document.getElementById('logpass').value = '';

            localStorage.setItem('status', status);

            document.getElementById('username').innerText = users[i].name;
            
            localStorage.setItem('naam', users[i].name);

        }

    }

    if (check === 0) {
        alert('INVALID Login...! Please Try Again.');
    }

}

function abc123() {
    var a = document.getElementById('log').style;
    var b = document.getElementById('sign1').style;
    var c = document.getElementById('sign2').style;
    var d, e, f;
    d = 'block';
    e = 'none';
    a.display = d;
    b.display = e;
    c.display = e;
}

function abc234() {

    if (confirm('Are you sure you want to Logout?') == true) {

        status = 'loggedout';

        var a = document.getElementById('log').style;
        var b = document.getElementById('sign1').style;
        var c = document.getElementById('sign2').style;
        a.display = 'none';
        b.display = 'block';
        c.display = 'block';

        localStorage.setItem('status', status);
    }
}