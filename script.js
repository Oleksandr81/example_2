'use strict';

let numberOfFilms; 

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilm() {
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
}

// rememberMyFilm();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено достаточно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    }  else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    }   else {
        console.log('Возникла ошибка');
    }
}

// detectPersonalLevel();

function shoeMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGengers() {
    for (let i = 0; i < 3; i++) {
        let question = prompt(`Ваш улюблений жанр під номером ${i + 1}`);
        
        while (question == '' || question == null || !isNaN(question)) {
           question = prompt(`Ваш улюблений жанр під номером ${i + 1}`);
        }

        personalMovieDB.genres[i] = question;
    }
}

writeYourGengers();
shoeMyDB(personalMovieDB.privat);