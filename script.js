const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movieName1 = prompt('Один из последних просмотренных фильмов?', '');
const movieRating1 = prompt('На сколько оцените его?', '');
const movieName2 = prompt('Один из последних просмотренных фильмов?', '');
const movieRating2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[movieName1] = movieRating1;
personalMovieDB.movies[movieName2] = movieRating2;

console.log(personalMovieDB);
