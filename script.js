'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

first: for (let i = 0; i < 2; i++) {
        const movieName = prompt('Один из последних просмотренных фильмов?', '');
        
        if (movieName != null && movieName != '' && movieName.length < 50) {
            const movieRating = prompt('На сколько оцените его?', '');
            if (movieRating != null && movieRating != '') { 
                personalMovieDB.movies[movieName] = movieRating;
            } else {
                i--;
            }
        } else {
            i--;
        }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено достаточно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
}  else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
}   else {
    console.log('Возникла ошибка');
}

console.log(personalMovieDB);
