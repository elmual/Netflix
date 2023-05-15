const numberOfFilms = +prompt('Neche filme baxmisiniz?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

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

if (personalMovieDB.count < 10) {
    console.log('Siz film heveskarisiniz');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Siz klassik film heveskarisiniz');
} else if (personalMovieDB.count >= 30) {
    console.log('Siz kinomensiniz');
} else {
    console.log('Sehv bas verdi');
}

console.log(personalMovieDB);