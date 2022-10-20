let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
  }
} 
start();

const personalMovies = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
  for( let i=0; i < 2; i++) {
    const a = prompt('Який останній фільм передивлялись?', ''),
          b = prompt('На скільки балів оцінюєте?', '');
      if (a !=null && b !=null && a != '' && b != '' && a.length < 50) {
        personalMovies.movies[a] = b;
        console.log('done');
      }
         else {
          console.log('error');
          i--;
         }
  }
}
rememberMyFilms();

  function detectPersonalLevel() {
    if (personalMovies.count < 10) {
      console.log('Переглянуто мало фільмів');
    }
        else if (personalMovies.count >=10 && personalMovies.count <=30) 
        {
          console.log('Ви класичний глядач');
        }
        else if (personalMovies > 30) {
          console.log ('ви кіноман, Вітаю!');
        }
        else {console.log ('error');
      }
  }
  detectPersonalLevel();

  function showMyDB (hidden) {
    if (!hidden) {
      console.log('personalMovies');
    }
  }

  showMyDB(personalMovies.privat);

  function writeYouGenres () {
    for (let i = 1; i <= 3; i++) {
      personalMovies.genres[i-1] = prompt(`Ваш улюбленний жанр під номером ${i}`);
    }
  }
  writeYouGenres();

console.log(personalMovies);


// let i = 0;
// while (i < 5) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
// }
// let result = '';
// const long = 5;

// for (let i=1; i <= long; i++) {
  
//     for (let j=0; j < i; j++) {
//       result += '*';
//     }
//     result += '\n';
// }

// console.log(result);
//const stop = 13;
// for (let i=20; i>=10; i--) {
//   if (i===13) {
//     break;
//   }
//   console.log(i);
// }

// for (let i=2; i<=10; i++) {
  
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// let i = 3;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   } else {console.log(i);
//   }
//   i++;
// }
// for (let i = 2; i <= 16; i++) {
//   if (i % 2 === 0) {
//       continue;
//   } else {
//       console.log(i);
//   }
// }
// let i = 2;
// while (i <= 16) {
//   if (i % 2 === 0) {
//     i++;
//     continue;
//   } else {console.log(i);
//   }
//   i++;
// }

// const arrayOfNumbers = [];

//     for (let i = 0; i < 11; i++) {
//         arrayOfNumbers[i-0] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;

// const arr = [2, 3, 4, 5, 6, 7, 8];
// const result = [];

// for (let i=0; i < arr.length; i++) {
//   result[i] = arr[i];

// }
// console.log(result);
// return result;
// const lines = 6;
// let result = '';


// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

//
// function sayHello(name) {
//   return `Привет, ${name}!`;
// }
// sayHello('Alex');
// console.log(sayHello('Alex'));
// //
// function returnNeighboringNumbers(num) {
//   return [num - 1, num, num + 1];
// }
// returnNeighboringNumbers(5);
// console.log (returnNeighboringNumbers(5));
// //
// function getMathResult(num, times) {
//   if (typeof(times) !== 'number' || times <= 0) {
//       return num;
//   }

//   let str = '';

//   for (let i = 1; i <= times; i++) {
//       if (i === times) {
//           str += `${num * i}`;
//           // Тут без черточек в конце
//       } else {
//           str += `${num * i}---`;
//           // Это тоже самое, что и
//           // str = str + num * i + "---"
//       }
//   }

//   return str;
// }

// console.log(getMathResult(2, 9));