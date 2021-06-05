
// const numbers = [3, 5, 6, 8, 90, 45, 67, 33, 24, 65, 10, 27];
// console.table(numbers);

// let total = 0;
  
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   console.log(number);

//   if (numbers[i] % 2 === 0) {
//     console.log('Парні: ', number);

//     total += number;
//   }
// }
// console.log('Всього: ', total);

// const logins = [2, 4, 6, 7];
// console.table(logins);
// const loginToFind = 4;
// // let message = ' ';

// const message = logins.includes(loginToFind)?'${loginToFind} is found!' : '${loginToFind} is NOT found!';

// console.log(message)

// for (const login of logins) {
//   console.log('${login} === ${loginToFind} - ', login === loginToFind);

//  message = login === loginToFind? '${loginToFind} is found!' : '${loginToFind} is NOT found!';
// }



// console.log(message);

// const numbers = [33, 56, 7, 89, 23, 44];
// let biggestNumber = numbers[0];

// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }
// console.log(biggestNumber);

// const string = 'VICtoRy';
// const letters = string.split('');
// console.log(letters);

// let invertedString = '';

// for (const letter of letters) {
//   console.log(letter);

//   invertedString += letter === letter.toLowerCase() ?  letter.toUpperCase() : letter.toLowerCase();

// }
// console.log(invertedString);

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total); // 45



// function splitMessage(message, delimeter) {
  
//   let words;
//   // Пиши код ниже этой строки
//   let letters;
//   letters = words.split(' ');
//   words = message.split('letters');
  
//   // Пиши код выше этой строки
//   return words;
// }
// const message = 'Манго спешит на поезд';


// console.log(message.split(' '));

// // Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// console.log(typeof redFruits);
// const word = redFruits[0].length;
// console.log(word);

// const isItArray = function()
// redFruits.isArray(['apple', 'strawberry', 'cherry', 'cranberries']);
//   const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];



// if (redFruits === 'array') {
//   console.log('Вірно');
// } else {
//   console.log('Не вірно');
// }


// const fruit = 'cherry';
// console.log(typeof fruit);

// if (redFruits.includes(fruit)) {
//   console.log('It is a red fruit!: ', fruit);
// }

// redFruits.push('lemon');
// console.log(redFruits);

// redFruits.pop('lemon');
// console.log(redFruits);

// const clients = ['Mango', 'Ajax', 'Poly'];
// console.log(clients);

// console.log(clients.shift()); // Mango
// // console.log(clients); // ["Ajax", "Poly"]

// clients.unshift('Kiwi');
// console.log(clients); // ["Kiwi", "Ajax", "Poly"]

// const pushClients = clients.push('Nike');
// console.log(typeof pushClients);
// // console.log(clients.push('Nike'));
// console.log(clients);

// // clients.pop();
// const popClients = clients.pop();
// console.log(popClients);
// console.log(clients);

// const sliceClients = clients.slice(-2);
// console.log(sliceClients);
// console.log(clients);

// const spliceClients = clients.splice(2);
// console.log(spliceClients);
// console.log(clients);

// const spliceAddClients = clients.splice(1, 0, 'puma', 'addd');
// // clients.splice(1, 0, 'puma', 'addd');
// console.log(spliceAddClients);
// console.log(clients);


// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки
//   message = ' ';
//   words = message.split(' ');
//   // Пиши код выше этой строки
//   return words;
// }
// console.log('Манго');

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
//   message = 'we are the champions';
//   console.log(message);
//   pricePerWord = 5;
//   const newMessage = message.split(' ');
//   console.log(message.split(' '));

// const total = newMessage.length * pricePerWord;
// // return total;
//   // Пиши код выше этой строки
// }


// console.log(total);

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const newString = string.split(' ');
//   // console.log(newString);
//   let longestWord = newString[0];
//   // console.log(longestWord);
//   	for (const word of newString) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//   }
// 	return longestWord;
//   // Пиши код выше этой строки
// }

// console.log(findLongestWord('we are the champions'));

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
// const newArray = [];
//   for (const el_1 of array1) {
//     for (const el_2 of array2) {
//     }

//     if (array2.includes(el_1)) {
//     newArray.push(el_1);
//     }
//   }
  
//   // for (const el_2 of array2) {
//   //   if (array1.includes(el_2)) {
//   //   newArray.push(el_2);
//   //   }
//   // }
//   return newArray;
//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([23, 3, 5, 6, 8], [2, 0, 6, 1, 23]))

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// // Пиши код выше этой строки

// console.table(apartment);


// ЗАДАЧА 12/41/модуль 3/ /як порахуваті кільктсь властивостнй у обєкті
// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки

// for (const key in object) {
//   if (object.hasOwnProperty(key))
//     propCount = Object.keys(object).length;
//   // варіант 2
//   //    propCount = propCount + 1;
// }
//   // Пиши код выше этой строки
//   return propCount;
// }

// console.log(countProps({ name: 'Mango', age: 2 }));

// ЗАДАЧА 19/41/модуль 3/
// Напиши функцию getAllPropValues(propName) 
// которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Тесты
// Объявлена функция getAllPropValues(propName).
// Вызов getAllPropValues('name') возвращает ['Радар', 'Сканер', 'Дроид', 'Захват'].
// Вызов getAllPropValues('quantity') возвращает [4, 3, 7, 9].
// Вызов getAllPropValues('price') возвращает [1300, 2700, 400, 1200].
// Вызов getAllPropValues('category') возвращает [].
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const values = [];
//   for (const product of products) {

//     if (product[propName]) {
//       values.push(product[propName]);
//     }
//   }
//   return values;
//   // Пиши код выше этой строки
// }
// console.log(getAllPropValues('price'));


// ЗАДАЧА 20
// Напиши функцию calculateTotalPrice(productName)
// которая принимает один параметр productName - название товара.
// Функция должна вернуть общую стоимость(цена * количество) товара с таким именем из массива products.


// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
  
//   for (const product of products) {
//     if (product.name === productName)
//     {
//       totalPrice = product.price * product.quantity;
//     }
//   };
//   return totalPrice;
//   // Пиши код выше этой строки
// };
// console.log(calculateTotalPrice('Радар'));
// console.log(product.productName);

// const salaries = {
//   John: 200,
//   Kate: 500,
//   Viktor: 120,
// }
// let totalSalary = 0;
// function getTotalSalary(salaries) {

//   for (const value of Object.values(salaries)) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// console.log(getTotalSalary(salaries));

// ЗАДАЧА 41
// Заказчица хочет чтобы каждое зелье было представлено не только именем,
//   но и ценой, а в будущем может быть и другими характеристиками.
// Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: 'Дыхание дракона',
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк,
//   а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

// Тесты
// Объявлена переменная atTheOldToad.
// Значение переменной atTheOldToad это объект.

// Значение свойства atTheOldToad.getPotions это метод объекта.
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает
// [{ name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 }].

// Значение свойства atTheOldToad.addPotion это метод объекта.
// Для исходного объекта после вызова метода
// atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }), в массиве potions последним элементом будет этот объект.
// Для исходного объекта после вызова метода
// atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }), в массиве potions последним элементом будет этот объект.
// Значение свойства atTheOldToad.removePotion это метод объекта.
// Для исходного объекта после вызова метода
// atTheOldToad.removePotion('Дыхание дракона'),
//   в свойстве potions будет массив[{ name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 }].
// Для исходного объекта после вызова метода
// atTheOldToad.removePotion('Зелье скорости'),
//   в свойстве potions будет массив[{ name: 'Дыхание дракона', price: 780 }, { name: 'Каменная кожа', price: 520 }].
// Значение свойства atTheOldToad.updatePotionName это метод объекта.
// Для исходного объекта после вызова метода
// atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'), в свойстве potions будет массив[{ name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 }].
// Для исходного объекта после вызова метода
// atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'), в свойстве potions будет массив[{ name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 }].

// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   //   // Пиши код ниже этой строки
  //   getPotions() {
  //     for (const potion of this.potions) {
  //       // console.log(this.potion);
  //     }
  //     return this.potions;
  //   },

  //   addPotion(potionName) {
  //       for (const potion of this.potions) {
      
  //         if (this.potions.includes(potionName)) {
  //           return `Зелье ${potionName} уже есть в инвентаре!`;
  //         }
  //       }

  //       this.potions.push(potionName);
  //   },

  //   removePotion(potionName) {
    
  //     for (const potion of this.potions) {

  //           const potionIndex = this.potions.indexOf(potion);
  //           // console.table(potionIndex);
  //         for (const key in potion) {
  //           if (potion[key] === potionName) {
  //             this.potions.splice(potionIndex, 1);
  //             return this.potions;
  //           }
  //         }
  //       }
  //       return `Зелья ${potionName} нет в инвентаре!`;
  //     }
  

//   updatePotionName(oldName, newName) {
    
//     for (const potion of this.potions) {
//       console.table(potion);
      

//       if (potion.name === oldName) {
//         console.log(potion.name);
//         potion.name = newName;
//         return this.potions;
//       }
//     }
//     // Пиши код выше этой строки
//   }

// console.log (atTheOldToad.updatePotionName('Каменная кожа', 'fire'));

// console.log(atTheOldToad.getPotions());

// // console.log(atTheOldToad.addPotion());

// console.log(atTheOldToad.removePotion('Дыхание дракона'));

  
// Ashot)) task 3
  
// const calculator = {
//   read(a, b) {
//     this.el1 = a;
//     this.el2 = b;
//   },
//   sum() {
    
//   },
//   mult() { },
// };

// console.log(calculator);
// console.log(calculator.read(2,5))

// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result = makePizza('Ваша пицца готовится, ожидайте.');
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);
////////////////////////
// function makePizza(pizzaName, function () {console.log(`Едим пиццу ${pizzaName}`)}) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр');
////////////////////////////
// MODULE 4 task 4

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  
//   order(pizzaName, onSuccess, onError) {
    
//     for (const pizza of this.pizzas) {
//      if (pizzaName === pizza) {
//      return onSuccess(pizzaName);
//      }
//     }
//    return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`)
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`; 
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }


// // Вызовы метода с колбэками
// pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

// // console.table(pizzaPalace.pizzas);

// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));

// console.log(onOrderError('Аль Копчино'));

// MODULE 4 task 7

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];
// // console.log(orders);

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// };

// const messages = [];
// for (let i = 0; i < orders.length; i += 1) {
//   const message = composeMessage.call(orders[i], i + 1);
//   messages.push(message);
//   console.log(messages);
// };

// MODULE 4 task 10

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']


// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 1;
// console.log(a);
// a[c] = 2;
// console.log(a[c]);
// console.log(a[b]);

// function Car (brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };
// console.log(this);

// const newCar = new Car('Audi', 'Q3', 36000);
// console.log(newCar);


// // module 5 task 7

// StringBuilder (baseValue) {
//    this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function (value) {
// return this.value;
// }

// StringBuilder.prototype.padStart = function (str) {
//   const newValue1 = Object.values(this.value);
//   newValue1.unshift(str);
//   // console.dir(newValue1);
//   this.value = newValue1.join('');
//   // return newValue1;
// }

// StringBuilder.prototype.padEnd = function (str) {
//   const newValue2 = Object.values(this.value);
//   newValue2.push(str);
//   this.value = newValue2.join('');
//   // console.dir(newValue2);
// //  return newValue2;
// }

// StringBuilder.prototype.padBoth = function (str) {
//   const newValue3 = Object.values(this.value);
//   newValue3.unshift(str);
//   newValue3.push(str);
//   this.value = newValue3.join('');
// }


// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);

//   this.weapon = weapon;
//   console.log(this);
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const poly = new Warrior('Poly', 200, 'sword');

// // Hero.prototype.gainXp(30);
// // Warrior.prototype.attack('knife');
// const sad = new Warrior('sad', 500, 'knife');

// // __proto__ / .prototype
// // class Samurai {
// //   constructor(name) {
// //     this.name = name;
// //   }
// //   hello() {
// //     allert (this.name)
// //   }
// // }

// // let shcho = new Samurai('Sam')
// // // debugger

// // console.log('shcho.__proto__ => ', shcho.__proto__)
// // console.log('shcho.__proto__.__proto__ => ', shcho.__proto__.__proto__)
// // console.log('shcho.__proto__.__proto__ = Object__proto=> ', shcho.__proto__.__proto__ = Object.__proto__)

// // console.log('shcho.__proto__.__proto__.__proto__ => ', shcho.__proto__.__proto__.__proto__)

// // console.log('shcho.__proto__.constuctor.__proto__ => ', shcho.__proto__.constructor.__proto__)


// // console.log('shcho.__proto__ === Samurai.prototype => ', shcho.__proto__ === Samurai.prototype)
// // console.log('shcho.__proto__ === Object.prototype => ', shcho.__proto__ === Object.prototype)
// console.log('Samurai.prorotype === Object.prototype => ', Samurai.prorotype === Object.prototype)
// console.log('Samurai.__proto__ =>', Samurai.__proto__)

// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];

// // const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;
// const sortByActiveDays = [...users].sort((a, b) => a.daysActive - b.daysActive);


// console.log(sortByActiveDays);

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

// orderedItems.forEach(item => {item += total.Price})

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// function changeEven(numbers, value) {
//   console.log(numbers);
//   console.log(value);
//     // Пиши код ниже этой строки
//   const newArray = [];
//   numbers.forEach((number) => {
//       if (number % 2 === 0) {
//         newArray.push(number + value);
//         console.log(newArray);
//       } else {
//         newArray.push(number);
//       }
//     })
//   return newArray;
//     // Пиши код выше этой строки
// }

// changeEven([1, 2, 3, 4, 5], 10);
// changeEven([1, 2, 3, 4, 5], 10);

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// const uniqueGenres = allGenres.filter((genre, index) => allGenres.indexOf(genre) === index);
// console.log(uniqueGenres);

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book, MIN_RATING) => book.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter((author, AUTHOR) => author === AUTHOR);
// console.log(booksByAuthor);

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]
// console.log(users);

// chain//
// const getNamesSortedByFriendCount = users => {
//   const sortedFriend = [...users]  
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(user => user.name);
  
//   return sortedFriend;
// };

// const getSortedFriends = users => {
//   const uniqueFriends = users
//     .flatMap(user => user.friends)
//     .filter((friend, index, uniqueFriends) => uniqueFriends.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b));
//   return uniqueFriends;
// };

// console.log(getSortedFriends(users));


// const getTotalBalanceByGender = (users, gender) => {
//   const totalBalance = users 
//     .filter(user => user.gender === gender)
//   .reduce((total, user) => total += user.balance, 0) 
//   return totalBalance;
// };

// console.log(getTotalBalanceByGender(users, 'male'));


// module 6; task 20

// const getUsersWithFriend = (users, friendName) => 
//   users.filter((user) => {
//     if (user.friends.includes(friendName)) { 
//       return user;
//     }
//   });
  
// console.log(getUsersWithFriend(users, 'Briana Decker'));

// module 6; task 21
// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);
//   console.log(allFriends);
//   const uniqueFriends = allFriends.filter((friend, index) => allFriends.indexOf(friend) === index);
//   // console.log(uniqueFriends);
//   return uniqueFriends;
// };

// console.log(getFriends(users));

// const getActiveUsers = (users) => {
//   const activeUsers = users.filter(user =>  
//     user.isActive === true);
//   return activeUsers;
// };
// console.log(getActiveUsers(users));


// const isEveryUserActive = users => 
//   users.every(user => user.isActive === true);
// console.log(isEveryUserActive(users));

// const sortByDescendingFriendCount = users => {
//   const sortedByAmountOfFriends = [...users].sort((a, b) => b.friends.length - a.friends.length);
//   return sortedByAmountOfFriends;
// };

// console.log(sortByDescendingFriendCount(users));

// module 6; task 30
// Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((totalTime, playtime) => totalTime += playtime, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

//  module 6; task 31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((timePerGame, player) => timePerGame += player.playtime / player.gamesPlayed, 0);

// module 6; task 37
// Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
  
// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// Пиши код ниже этой строки


// SORT()
// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);


const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));
  
  console.log(names);