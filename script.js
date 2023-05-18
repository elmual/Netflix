const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Neche filme baxmisiniz?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Neche filme baxmisiniz?');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Siz film heveskarisiniz');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Siz klassik film heveskarisiniz');
        } else if (personalMovieDB.count >= 30) {
            console.log('Siz kinomensiniz');
        } else {
            console.log('Sehv bas verdi');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Sizin xosunuza gelen ${i}-ci janr?`);

            if (genre == '' || genre == null) {
                console.log('Sehv bas verdi');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Xosunuza gelen janr ${i+1}: ${item}`);
        });
    }
}


