var songs = [
    { title:'Ye Watan', artist: 'Jawwad Ahmed', album:'Pyaara Watan', thumbnail:'img/pal.png', date:'Feb,2016' },
    { title: 'Hum Aik Hen', artist: 'Atif Aslam', album: 'Mulk', thumbnail: 'img/raabta.png', date: 'Dec,2006' },
    { title: 'Laga Reh', artist: 'Shehzad Roy', album: 'Mitti', thumbnail: 'img/paanion.png', date: 'Sep,2011' },
    { title: 'Mere Dhol Sipahya', artist: 'Jawwad Omer', album: 'Fauj', thumbnail: 'img/vaaste.jpg', date: 'Aug,2015' },
    { title: 'Kaash', artist: 'Jawwad', album: 'Piyaar', thumbnail: 'img/dosti.jpg', date: 'Jan,2005'},
    { title: 'Mukhra', artist: 'Jawwad Amanat', album: 'Mitti', thumbnail: 'img/bhula-diya.jpg', date: 'Oct,2014'},
    { title: 'Dosti', artist: 'Jawwad Ahmed', album: 'Pyaara Watan', thumbnail: 'img/yaariyan.jpg', date: 'Jul,2007'},
    { title: 'Qismat', artist: 'Rahat fateh Ali Khan', album: 'Mukhra', thumbnail: 'img/tere-bin.png', date: 'Jun,2018'}
];

/*****search-function******/

function search() {

    document.getElementById('search-div').innerHTML = null;

    var keyword = document.getElementById('keyword').value;
    var result = document.getElementById('search-div');
    var template1 = document.getElementById('template1').innerHTML;
    var check = 0;

    for (var i = 0; i < songs.length; i++) {
        if (songs[i].title.indexOf(keyword) > -1 ||
            songs[i].artist.indexOf(keyword) > -1 ||
            songs[i].album.indexOf(keyword) > -1 ||
            songs[i].date.indexOf(keyword) > -1
        ) {

            document.getElementById('main-div').style.display = 'none';
            document.getElementById('back').style.display = 'block';

            result.innerHTML += template1
                .replace('{{thumbnail}}', songs[i].thumbnail)
                .replace('{{title}}', songs[i].title)
                .replace('{{artist}}', songs[i].artist)
                .replace('{{album}}', songs[i].album);

            check++;
            
        }
    }

    if (check != 0) {
        var elmnt = document.getElementById("slgn");
        elmnt.scrollIntoView();
    }

    if (check === 0) {
        alert('Sorry! No results found for \"' + keyword + '\"');
    }
    
    document.getElementById('keyword').value = "";

}

/***back-function***/

function back() {
    document.getElementById('main-div').style.display = 'block';
    document.getElementById('back').style.display = 'none';
    document.getElementById('search-div').innerHTML = "";

    var elmnt2 = document.getElementById("head");
    elmnt2.scrollIntoView();

}