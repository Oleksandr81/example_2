'use strict';

let numberOfFilms; 

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        numberOfFilms.count = prompt('Сколько фильмов вы уже посмотрели?', '');
        while (numberOfFilms.count == '' || numberOfFilms.count == null || isNaN(numberOfFilms.count)) {
            numberOfFilms.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilm: function() {
        first:  for (let i = 0; i < 2; i++) {
            const movieName = prompt('Один из последних просмотренных фильмов?', '');
            
            if (movieName != null && movieName != '' && movieName.length < 50) {
                const movieRating = prompt('На сколько оцените его?', '');
                if (movieRating != null && movieRating != '') { 
                    personalMovieDB.movies[movieName] = movieRating;
                } else {
                    i--;
                    continue first;
                }
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено достаточно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('Вы классический зритель');
        }  else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        }   else {
            console.log('Возникла ошибка');
        }
    },
    shoeMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            let genre = prompt(`Ваш улюблений жанр під номером ${i + 1}`);
            
            while (genre == '' || genre == null || !isNaN(genre)) {
                genre = prompt(`Ваш улюблений жанр під номером ${i + 1}`);
            }
            personalMovieDB.genres[i] = genre;
        }
        personalMovieDB.genres.forEach((genre, i) => {
            console.log(`Улюблений жанр №${i + 1} - це ${genre}`);
        });
    },
    toggleVisibleMyDB: function() {
        (personalMovieDB.privat) ? personalMovieDB.privat = false : personalMovieDB.privat = true;
    }
};

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.shoeMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres(tretytrurtry);