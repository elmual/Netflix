let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Neche filme baxmisiniz?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Neche filme baxmisiniz?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Axirinci baxdiginiz kino? ');
        const b = +prompt('Bu kinonu neche bal ile qiymetlendirirsiniz? ');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Hazirdi');
        } else {
            console.log('Sehv bas verdi');
            i--;
        } 
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Siz film heveskarisiniz');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Siz klassik film heveskarisiniz');
    } else if (personalMovieDB.count >= 30) {
        console.log('Siz kinomensiniz');
    } else {
        console.log('Sehv bas verdi');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Sizin xosunuza gelen ${i}-ci janr?`);
        personalMovieDB.genres[i-1] = genre;
        
    }
}

writeYourGenres();

