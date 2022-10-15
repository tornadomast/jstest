const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
const personalMovies = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Який останній фільм передивлялись?', ''),
      b = prompt('На скільки балів оцінюєте?', '');

personalMovies.movies[a] = b;
console.log(personalMovies);