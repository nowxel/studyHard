// 1. Напишіть функцію testThrow(), яка прийматиме параметр помилка exception
//  і перевірятиме роботу оператора throw, зокрема той факт, 
//  що як об’єкт помилки можна передати значення будь-якого типу.
// 	Приклад результату:
// > testThrow(5);
// Caught: 5
// > testThrow('Test');
// Caught: Test
// > testThrow(new Error('An error happened'));
// Caught: Error: An error happened

// function testThrow(exception){
//     try{
//         throw exception;
//     } catch (error){
//         console.log('Caught:' + error)
//     }
// }
// testThrow(5);
// testThrow('Test');
// testThrow(new Error('An error happened'));

// 2. Реалізуйте функцію calcRectangleArea(), 
// яка приймає 2 параметри ширина прямокутника width 
// і висота прямокутника height і обраховує його площу. 
// Передбачити припинення виконання програми і генерацію 
// винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

// function calcRectangleArea() {
//     let width = prompt("width")
//     let height = prompt("height")
//     let x = parseInt(width);
//     let y = parseInt(height);
//     let res = x * y;
//     console.log(res);
// }
// calcRectangleArea();

// 3. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і 
// генерувати в модальному вікні помилки у випадку, коли: 
// 	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
// 	- нечислове значення
// 	- вік юзера менше 14 років. 
// В іншому разі юзер отримує доступ до перегляду фільму.
// В блокові catch передбачити виведення назви і опису помилки.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.

// function checkAge() {
//     let age = prompt("Який ваш вік?")
//     if (age == "") {
//         throw "The field is empty! Please enter your age"
//     } else if (age != parseInt(age)) {
//         throw "You have to enter a number for age"
//     } else if (age < 14) {
//         throw "User's age under 14"
//     } else if (age >= 14) {
//         throw "Now you have access to the movie"
//     }
// }

// try {
//     checkAge()
// } catch (exception) {
//     alert(exception)
// }


// 4. Створіть клас MonthException, конструктор якого приймає параметр message 
// і ініціалізує поле name значенням 'MonthException'.
// Реалізуйте функцію showMonthName(month), в якій параметр month – 
// це порядковий номер місяця в році. Функція повертає назву місяця відповідно 
// до введеного номера місяця. У випадку некоректного вводу кидається ексепшн 
// у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// 	Приклад роботи програми:
// > console.log(showMonthName(5)); 
// May
// > console.log(showMonthName(14)); 
// MonthException Incorrect month number

// class MonthException {    
//     constructor(message) {
//         this.name = message;
//     }
// }

// function showMonthName(month) {
//     switch (month) {
//         case 1: return "January";
//         case 2: return "February";
//         case 3: return "March";
//         case 4: return "April";
//         case 5: return "May";
//         case 6: return "June";
//         case 7: return "July";
//         case 8: return "August";
//         case 9: return "September";
//         case 10: return "October";
//         case 11: return "November";
//         case 12: return "December";
//         default: throw new MonthException("Incorrect month number");
//     }
// }

// try {
//     console.log(showMonthName(5)); // May
//     console.log(showMonthName(14)); // MonthException Incorrect month number
// } catch (exception) {
//     console.log(exception);
// }

// 5. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і 
// повертає об’єкт, який містить значення переданої id. 
// Також функція викидає помилку у разі якщо введено від’ємне id.
//     Реалізуйте функцію showUsers(ids), яка приймає параметром масив 
//     користувацьких айді ids, перевіряє з використанням функції showUser() 
//     кожен елемент масиву ids на коректність, в разі виключної ситуації 
//     виводить повідомлення про помилку. Функція showUsers(ids) повертає масив 
//     об’єктів де значеннями ключів є коректні елементи ids.

// 	Приклад роботи програми:
// showUsers([7, -12, 44, 22])
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

function showUser(id) {
    return {"id": id};
}

console.log(showUser(7));
