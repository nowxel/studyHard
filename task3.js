// Заданий масив з елементами [2, 3, 4, 5]. 
// За допомогою циклу for знайдіть добуток елементів цього масиву. 
// Також реалізуйте завдання через while.

// let arr = [2, 3, 4, 5];
// let res = 1;
// for (let i = 0; i < arr.length; i++) {
//     res *= arr[i];
// }
// console.log(res); // 120

// let i = 0;
// res = 1;
// while (i < arr.length) {
//     res *= arr[i];
//     i++;
// }
// console.log(res); // 120

// 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. 
// Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним 
// і відображатиме повідомлення на екрані.
// Sample Output: 
// "0 is even" 
// "1 is odd" 
// "2 is even" 

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//     }
//     else {
//         console.log(`${i} is odd`);
//     };
// }

// 3. Напишіть функцію randArray(k), 
// яка заповнюватиме масив k випадковими цілими числами. 
// Випадкові числа генеруються із діапазону 1-500.
// Sample Output:
// randArray(5);  // 399,310,232,379,40

// function randArray(k) {
//     let arr = [];
//     for (i = 0; i < k; i++){
//         arr.push(Math.floor(Math.random() * 501) + 0);
//     }
//     console.log(arr);
// }
// randArray(5); // 399,310,232,379,40

// 4. Напишіть функцію raiseToDegree(a,b), 
// яка повертає результат піднесення числа a до степеня b. 
// Функція працює тільки з цілими числами. 
// Реалізувати інтерфейс введення чисел a, b з клавіатури.

// Sample Output:
// raiseToDegree(3, 4);  // 81
// function raiseToDegree(a, b){
// let res = a ** b;
// console.log(res);
// }
// raiseToDegree(3 , 4); // 81


// Реалізуйте функцію – findMin(), 
// яка повинна приймати довільну кількість цілих аргументів 
// і повертати той, який має найменше значення. 
// Порада: для розв’язку можете скористатися спеціальним масивом arguments.
// Sample Output:
// findMin(12, 14, 4, -4, 0.2); // => -4
// function findMin(...arguments) {
//     if (arguments.length == 0) throw "Can't find min without arguments";
//     let min = arguments[0];
//     for (let i = 1; i < arguments.length; i++) {
//         if (arguments[i] < min) min = arguments[i];
//     }
//     console.log(min);
// }
// findMin(12, 14, 4, -4, 0.2);



// 


// 

// 

// 



// 


// 


// 6. Напишіть функцію findUnique(arr), 
// яка приймає масив arr і перевіряє на унікальність його елементи. 
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// Sample Output:
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

// function findUnique(arr) {
//     let unique = [...new Set(arr)];
//     return arr.length == unique.length;
// }
// console.log(findUnique([1, 2, 3, 5, 3])); // => false
// console.log(findUnique([1, 2, 3, 5, 11])); // => true

// 7. Напишіть функцію, яка повертає останній елемент масиву. 
// Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, 
// що відповідає кількості 'х' останніх елементів масиву, які треба вивести.

// Sample Output:
// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5],8));   // [3, 4, 10, -5]

// let lastElem = function (array, x) {
//     if (array == null) return void 0;
//     if (x == null) return array[array.length - 1];
//     return array.slice(Math.max(array.length - x, 0));
// };

// console.log(lastElem([3, 4, 10, -5]));      // -5
// console.log(lastElem([3, 4, 10, -5], 2));   // [10, -5]
// console.log(lastElem([3, 4, 10, -5], 8));  //[3, 4, 10, -5]

// 8. Напишіть функцію, яка приймає рядок як параметр 
// і перетворює першу букву кожного слова рядка в верхній регістр.
// Input string: 'i love java script' 
// Output string: 'I Love Java Script'

// function titleCase(str) {
//     var splitStr = str.toLowerCase().split(' ');
//     for (var i = 0; i < splitStr.length; i++) {  // You do not need to check if i is larger than splitStr length, as your for does that for you
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);// Assign it back to the array
//     }
//     return splitStr.join(' '); // Directly return the joined string
// }
// console.log(titleCase("i love java script"));