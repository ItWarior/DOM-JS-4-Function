// - створити функцію яка виводить масив
// let arr = [1,2,5,"dfdf",false];
// let add = () => console.log(arr);
// add(arr);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function random(max, min) {
   return Math.round(Math.random() * (max - min) + min)
}

// let randomMas = [];

// function masPush(a) {
//    randomMas.push(a);
// };
// for (let i = 0; i < 10; i++) {
//    masPush(random(0, 10))
// }
// console.log(randomMas);

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

// let fun = function sort(a, b, c) {
//    console.log(a,b,c);
//    if (a <= b && a <= c) {
//       console.log(a);
//       return a
//    }
//     else if(b<=a&&b<=c) {
//       console.log(b);
//       return b
//    }
//    else {
//       console.log(c);
//       return c
//    }
// }
// let bigNum = fun(random(0,10), random(0,10), random(0,10));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

// let fun = function sort(a, b, c) {
//    console.log(a,b,c);
//    if (a >= b && a >= c) {
//       console.log(a);
//       return a
//    }
//     else if(b>=a&&b>=c) {
//       console.log(b);
//       return b
//    }
//    else {
//       console.log(c);
//       return c
//    }
// }
// let bigNum = fun(random(0,10), random(0,10), random(0,10));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

// function sort() {
//    let b = [];
//    for (let i = 0; i < arguments.length; i++) {
//       b.push(arguments[i])
//    }
//    console.log(b);
//    console.log(Math.max(...b));
//    return Math.min(...b)

// }
// sort(10, 2, 03, 55, 62, 12, 44, 66, 45)

// - створити функцію яка виводить масив
//  Таке завдання було самим пешим, вирішив трохи ускладнити

// function creeytMas() {
//    let mas = [];
//    for (let i = 0; i < arguments.length; i++) {
//       mas.push(arguments[i])
//    }
//    return mas

// }
// let mas2 = creeytMas(10, 20, 3, 4, 5, 8, 4, 6, 8);
// console.log(mas2);

// - створити функцію яка повертає найбільше число з масиву

// let mas = [];
// (function () {
//    for (let i = 0; i < 20; i++) {
//      mas.push(random(0,20))
//    }
// }())
// console.log(mas);

// function max(a) {
//    return Math.max(...a);
// }
// max(mas);
// - створити функцію яка повертає найменьше число з масиву

// let mas = [];
// (function () {
//    for (let i = 0; i < 20; i++) {
//      mas.push(random(0,20))
//    }
// }())
// console.log(mas);

// function max(a) {
//    return Math.min(...a);
// }
// max(mas);
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// let mas = [];
// (function () {
//    for (let i = 0; i < 20; i++) {
//      mas.push(random(0,20))
//    }
// }())

// function sum(mas) {
//    let x = 0;
//    for (let i = 1; i < mas.length; i++) {
//    x+= mas[0]+mas[i]
//    }
//    return x;
// }
// console.log(sum(mas));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let mas = [];
// (function () {
//    for (let i = 0; i < 20; i++) {
//      mas.push(random(0,20))
//    }
// }())

// function sum(mas) {
//    let x = 0;
//    for (let i = 1; i < mas.length; i++) {
//    x+= mas[0]+mas[i]
//    }
//    return x/2;
// }
// console.log(sum(mas));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// let masObj = [
//    {
//       name: "Taras",
//       age: 29,
//       status: true
//    },
//    {
//       computer: "dell",
//       prise: 25000,
//       color: "black"
//    },
//    {
//       movie: "Warcraft",
//       hero: "ork",
//       statusGame: true
//    },
//    {
//       house: 120,
//       position: "center",
//       status: false
//    },
//    {
//       kurs: "Okten",
//       prise: 25000,
//       status: true
//    },
// ]
// function obj(mas) {
//    let a = 0;
//    for (const iterator of mas) {
//       a++;
//    }
//    return a
// }

// console.log(obj(masObj) + " елементів в обєкті");
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальну кількість полів в них

// let masObj = [
//    {
//       name: "Taras",
//       age: 29,
//       status: true
//    },
//    {
//       computer: "dell",
//       prise: 25000,
//       color: "black"
//    },
//    {
//       movie: "Warcraft",
//       hero: "ork",
//       statusGame: true
//    },
//    {
//       house: 120,
//       position: "center",
//       status: false
//    },
//    {
//       kurs: "Okten",
//       prise: 25000,
//       status: true
//    },
// ]
// let num = masObj.length;

// function obj() {
//    let lenghtObj = 0;
//    for (let i = 0; i <  masObj.length; i++) {
//    for (const key in masObj[i]) {
//       lenghtObj++;
//       }
//    }
//    return lenghtObj
// }

// console.log(`масив скалдається з ${num} обєктів, які загалом мають ${obj(masObj)} елементів`);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let a = [1, 2, 3, 4];
// let b = [2, 3, 4, 5];
// let ab = [];

// function sum(a, b) {
//    for (let i = 0; i < a.length; i++) {
//       ab.push(a[i]+b[i])   
//    }
//    return ab
// }
// console.log(sum(a, b));

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// let arr = [1, 2, 3, 4,5,6,7,8,9];
// i = 7;

// function red(a, i) {
//   if (i<=7) {
//      let p = arr.splice(i+1, 1, arr[i]);
//      arr.splice(i, 1, p[0]);
//      return arr 
//    }
//   else if(i===arr.length-1){
//      return `${arr} "елементу за ${arr[8]} індексом не існує"`
//    }
//   else {
//      return `${arr} "індексу ${i} не існує"`
//    }
// }
// console.log(red(arr, i));
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// mas = [0,0,1,0];
// function sort(mas) {
//    let bob = [];
//    let mask = [];
//    for (let i = 0; i < mas.length; i++) {
//       if (mas[i] === 0) {
//          bob.push(mas[i]);
//       }
//       else {
//          mask.push(mas[i]);
//       }
//    }

//    mas = mask.concat(bob);
//    return mas
// }
// mas = (sort(mas));
// console.log(mas);

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// let cars = [
//    {
//       model: "honda",
//       year: 2010,
//       power: 200,
//       color: "red"
//    },
//    {
//       model: "bugatti",
//       year: 2020,
//       power: 250,
//       color: "greeen"
//    },
//    {
//       model: "subaru",
//       year: 2000,
//       power: 150,
//       color: "blue"
//    },
//    {
//       model: "lada",
//       year: 1992,
//       power: 50,
//       color: "Дитячий понос"
//    },
//    {
//       model: "mercedes",
//       year: 2021,
//       power: 300,
//       color: "tomato"
//    },
//    {
//       model: "volvo",
//       year: 1995,
//       power: 100,
//       color: "black"
//    },
//    {
//       model: "wolcwagen",
//       year: 2000,
//       power: 170,
//       color: "white"
//    },
//    {
//       model: "toyota",
//       year: 2016,
//       power: 180,
//       color: "yellow"
//    },
//    {
//       model: "tesla",
//       year: 2019,
//       power: 190,
//       color: "red"
//    },
//    {
//       model: "velo",
//       year: 1700,
//       power: 1,
//       color: "green"
//    }
// ]
// function body(tagTxt, txt,tagObgCars,masCars) {

//    let h1 = document.createElement("h1");
//    h1.innerText = "Hello owu"
//    document.body.appendChild(h1);

//    let p = document.createElement(tagTxt);
//    p.innerText = txt;
//    document.body.appendChild(p);

//    let tag = document.createElement("div");
//    document.body.appendChild(tag);

//    for (const iterator of masCars) {
//       //    model: "honda",
//       //    year: 2010,
//       //    power: 200,
//       //    color: "red"

//       let tagCars = document.createElement("div");
//       tag.appendChild(tagCars);

//       let model = document.createElement("h3");
//       model.id = "model";
//       model.innerText = "model " + iterator.model;
//       tagCars.appendChild(model);

//       let year = document.createElement("p");
//       year.id = "year";
//       year.innerText = "year " + iterator.year;
//       tagCars.appendChild(year);

//       let power = document.createElement("p");
//       power.id = "power";
//       power.innerText = "power " + iterator.power;
//       tagCars.appendChild(power);

//       let color = document.createElement("p");
//       color.id = "color";
//       color.innerText = "color " + iterator.color;
//       tagCars.appendChild(color);
//    }

// }
// body("span","якийсь текст для вводу","div",cars);



// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
// let usersWithId = [
//    { id: 1, name: 'vasya', age: 31, status: false },
//    { id: 2, name: 'petya', age: 30, status: true },
//    { id: 3, name: 'kolya', age: 29, status: true },
//    { id: 4, name: 'olya', age: 28, status: false },];
// let citiesWithId = [
//    { user_id: 3, country: 'USA', city: 'Portland' },
//    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
//    { user_id: 2, country: 'Poland', city: 'Krakow' },
//    { user_id: 4, country: 'USA', city: 'Miami' },];
// // Частковий приклад реультату:

// function sumObj(mas1, mas2) {
//    let newMas = [];
//    for (let i = 0; i < mas1.length; i++) {
//       for (let z = 0; z < mas2.length; z++) {
//          if (mas1[i].id === mas2[z].user_id) {
//             newMas.push(Object.assign(mas1[i],mas2[z]))
//          }
//       }
//    }
// return newMas
// }   

// console.log(sumObj(usersWithId, citiesWithId));


// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// let rules = [
//    {
//       title: 'Первое правило Бойцовского клуба.',
//       body: 'Никому не рассказывать о Бойцовском клубе.'
//    },
//    {
//       title: 'Второе правило Бойцовского клуба.',
//       body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//    },
//    {
//       title: 'Третье правило Бойцовского клуба.',
//       body: 'В схватке участвуют только двое.'
//    },
//    {
//       title: 'Четвертое правило Бойцовского клуба.',
//       body: 'Не более одного поединка за один раз.'
//    },
//    {
//       title: 'Пятое правило Бойцовского клуба.',
//       body: 'Бойцы сражаются без обуви и голые по пояс.'
//    },
//    {
//       title: 'Шестое правило Бойцовского клуба.',
//       body: 'Поединок продолжается столько, сколько потребуется.'
//    },
//    {
//       title: 'Седьмое правило Бойцовского клуба.',
//       body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//    },
//    {
//       title: 'Восьмое и последнее правило Бойцовского клуба.',
//       body: 'Новичок обязан принять бой.'
//    },

// ];

/* <div id="wrap">
            <div class="rules rule1">
                <h2>Первое правило Бойцовского клуба.</h2>
                <p>Никому не рассказывать о Бойцовском клубе.</p>
            </div> */
// </div>   
// function block(title,body) {

//    let wrap = document.createElement("div");
//    wrap.id = "wrap";
//    document.body.appendChild(wrap);

//    let rules = document.createElement("div");
//    rules.className = `rules rule`;
//    wrap.appendChild(rules);

//    let h2 = document.createElement("h2");
//    h2.innerText = title;
//    rules.appendChild(h2);

//    let p = document.createElement("p");
//    p.innerText = body;
//    rules.appendChild(p);
// }
// for (const iterator of rules) {
//    block(iterator.title,iterator.body);
// }
   
// "

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// const pow = (number) => {
//    do {
//         if (number % 2 !== 0) {
//             return "NO";
//         }
//       number /= 2;
//     } while (number>=2)
//     return "Yes";
// }
// console.log(pow(16));
// вирішив повторити твій код, щоб збагнути як все працює, додав ще одну перевірку
// let pow = (number) => {
//    do {
//       if (number % 2 !== 0||number<=0 ) {
//          return "No";
//       }
// number /= 2;
// } while (number >= 2) 
//       return "Yes"
// }
// console.log(pow(4));

// 2) Deep Copy
// // реалізувати глибоке копіювання обєкту за допомогою рекурсій
// let obj1 = {
//    name: "Taras",
//    age: 29,
//    status: true,
//    id:1
// }

// let obj2 = {};
// let keyMas = Object.keys(obj1);
// let i = keyMas.length;

// console.log(keyMas);
// console.log(i);
// let iter = 0;
// function klon(obj1, obj2, i,iter) {
//    if (iter <= i) {
//       obj2[keyMas[iter]] = obj1[keyMas[iter]];
//       iter++
//    }
//    let lenghtObj2 = 0;
//    for (const key in obj2) {
//       lenghtObj2++
//    }
//    if (lenghtObj2<i) {
//       klon(obj1, obj2,i,iter)
//    } else {
//       return obj2
//    }

//    }

// klon(obj1, obj2, i, iter);
// console.log(obj1);
// console.log(obj2);
// obj2.name = "red";
// console.log(obj1);
// console.log(obj2);

// Обєкт в обєкті
// function klon(obj1, obj2, originalLength, positioniter) {
//    if (positioniter <= originalLength) {
//        obj2[keyMas[positioniter]] = obj1[keyMas[positioniter]];
//        positioniter++
//    }
//    let cloneLength = Object.keys(obj2).length;
//    if (cloneLength < originalLength) {
//        klon(obj1, obj2, originalLength, positioniter)
//    }
// }

// let obj1 = {
//    name: "Taras",
//    age: 29,
//    status: true,
//    id: 1,
//    brother: {
//        name: "Nazar",
//        age: 21,
//        status: true,
//        id: 2,
//    }
// }

// let obj2 = {};
// let keyMas = Object.keys(obj1);
// let length = keyMas.length;
// let iter = 0;

// klon(obj1, obj2, length, iter);
// console.log(obj1);
// console.log(obj2);

// obj1.name = 'Sras'
// obj1.brother.name = 'Tadas'
// console.log(obj1);
// console.log(obj2);

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// let mas = [1, 3, ['Hello', 'Wordd', [9,6,1]], ['oops'], 9];  
// let flatMas = mas.flat(2);
// console.log(mas);
// console.log(flatMas);
// [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========