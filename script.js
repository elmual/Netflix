const numberOfFilms = +prompt('Neche filme baxmisiniz?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

const a = prompt('Axirinci baxdiginiz kino? ');
const b = +prompt('Bu kinonu neche bal ile qiymetlendirirsiniz? ');

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);