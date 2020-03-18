// let x = "1";
// let y = "2";
// 
// let res1 = ( x + y );
// console.log(res1); // "12"
// console.log(typeof res1); // "string"

// let x = true;
// let y = "2";
// let res2 = ( x + y );
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// let x = true;
// let y = null;
// let res3 = !!( x + y );
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// let x = null;
// let y = null;
// let res4 = ( x + y );
// console.log(res4); // NaN
// console.log(typeof res4); // "number"

// let number = prompt("your number?");
// let res = number % 2 === 0 && number > 0;
// console.log(res);
// let res1 = number % 7 === 0;
// console.log(res1);

// let arr = [];
// arr[0] = 56;
// arr[1] = "string";
// arr[2] = true;
// arr[3] = null;
// console.log(arr.length);
// arr.push(prompt("your value?"));
// document.write(arr[4]);
// arr.shift();
// console.log(arr);

// let cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities.join('*')); // "Rome*Lviv*Warsaw"

// let isAdult = (prompt("How old are you?"));
// if ( isAdult >= 18 ){
//    console.log("Ви досягли повнолітнього віку");
// }
// else{
// console.log("Ви ще надто молоді");
// }

// let a = prompt("the smallest side of triangle?");
// let b = prompt("middle side?");
// let c = prompt("the biggest side?");
// let side1 = parseFloat(a);
// let side2 = parseFloat(b);
// let side3 = parseFloat(c);
// let s = (side1 + side2 + side3)/2;
// let area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(area);
// if ( side1**2 + side2**2 === side3**2 ){
    // console.log("90 degrees")
// } 
// else{
    // console.log("not 90 degrees");
// }

// let today = new Date()
// let curHr = today.getHours()
// 
// if (curHr < 11) {
//   console.log("Доброго ранку");
// } else if (curHr < 17) {
//   console.log("Доброго дня");
// } else if (curHr < 23) {
//   console.log("Доброго вечора");
// } else {
    // console.log("Доброї ночі");
// }
// 
// let today = new Date()
// let curHr = today.getHours();
// switch(true) {
    // case (curHr < 11 ):
        // console.log("Доброго ранку");
        // break;
    // case (curHr < 17):
        // console.log("Доброго дня");
        // break;
    // case (curHr < 23) :
        // console.log("Доброго вечoра");
        // break;    
    // default:
        // console.log("Доброго нoчi");
// } 