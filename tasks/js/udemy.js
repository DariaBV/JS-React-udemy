/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }*/

// const numberOfFilms = prompt('Скільки фільмів ви уже подивились?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// // const a = prompt('Один з останніх переглянутих фільмів?', ''),
// //       b = prompt('На скільки оцінете його?', ''),
// //       c = prompt('Один з останніх переглянутих фільмів?', ''),
// //       d = prompt('На скільки оцінете його?', '');

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один з останніх переглянутих фільмів?', ''),
//           b = prompt('На скільки оцінете його?', '');

//           personalMovieDB.movies[a] = b;
// }

// console.log(personalMovieDB);

// ===========================////////////////////////======================////////////////////////////////==============================

// #1. При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

// function firstTask() {
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     }  
// }

// firstTask();

// #2. При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить 
// весь цикл

// function secondTask() {
//     for (let i = 20; i > 10; i--) {
//        if (i === 13) {
//         break;
//        }
//        console.log(i);
//     } 
// }
// secondTask();
// #3. При помощи цикла for выведите чётные числа от 2 до 10 включительно

// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }
// thirdTask();

// #4. Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может 
// зависнуть.

//  Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 10;
// while (i < 50) {
//     console.log(i);
//     i++
// }
// function fourthTask() {
//     let num = 2;
//     while (num < 16) {
//         num++;
//         if (num % 2 === 0) {
//             continue;
//         }
//         console.log(num);
//     }
// }
// fourthTask();

// #5. Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
// function fifthTask() {
//     const arrayOfNumbers = [];
//     for (let i = 5; i <= 10; i++) {
//         arrayOfNumbers.push(i); 
//     }
//     // Не трогаем
//     return arrayOfNumbers;
// }
// fifthTask();

// ===============================////////////////////////////////========================///////////////////////=================================

//*1. Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся 
// все так же: arr[0], arr[1] и тд. Должен получиться точно такой же массив

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }
    
//     // console.log(arr);
//     // console.log(result);
//     return result;
// }
// firstTask();

//*2. Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof(data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }
//     }
//     console.log(data);
//     return data;
// }
// secondTask();

//*3. Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = data.reverse();

//     // Пишем решение вот тут
    
//     console.log(result);
//     // Не трогаем
//     // return result;
// }
// thirdTask();

// function thirdTask() {
//     Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 0; i < data.length; i++) {
//         result[i] = data[(data.length - 1) - i];
//     }
    
//     console.log(result);
//     return result;
// }
// thirdTask();

// ===============////////////////////==============================/////////////////============================================

// FUNCTION
// #1
// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// console.log(sayHello('Аліса'));

// // #2
// // Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент,
// //  и число на 1 больше.
// // Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].
// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// console.log(returnNeighboringNumbers(5));

// // #3
// // Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет 
// // повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти 
// // числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// // Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
// function getMathResult(num, times) {

// }
// console.log(getMathResult(5, 3));


//#1 (5)
// let x = 5; 
// alert( x++ );


//#2 (NaN)
// let result = [ ] + false - null + true;
// console.log(result);

// // #3 (2)
// let y = 1;
// let x = y = 2;
// alert(x);

// #4 (12 - просто ставить цифри в рядок)
// let sum = [ ] + 1 + 2;
// console.log(sum);

// // #5 (1)
// alert( "1"[0] );
// // console.log("1"[0]);

// #6 (null)
// let result = 2 && 1 && null && 0 && undefined;
// console.log(result);

// #7 ()
// console.log(!!( a && b ));
// console.log(( a && b ));

// #8 (3)
// alert( null || 2 && 3 || 4 );
// alert( +"Infinity" );

function foo(a, b) {
    const [first] = a;
    const {eng} = b;
 
    console.log(`${first} ${eng}`);
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});

// Напишите функцию, которая вычисляет факториал.
function factorial(n) {
    if (typeof (n) !== 'number' || !Number.isInteger(n)) {
        return 'Enter number';
    }
    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
         return 1;
    }
}