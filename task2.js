// let arr = [2, 3, 4, 5];
// let res = 1;
// for ( let i = 0; i < arr.length; i++ ){
    // res *= arr[i];
// }
// console.log(res);
// let i = 0;
// while (i < arr.length){
    // res *= arr[i];
    // i++;
// 
// }
// console.log(res);

// for ( i = 0; i <= 15; i++ ) {
    // if (i % 2 === 0) {
        // console.log(`${i} is even`);
    // }
    // else{
        // console.log(`${i} is odd`);    
    // }; 
// }

// function randArray(k) {
    // let arr = [];
    // for (let i=0, k=500; i<=k; i++) {
        // arr.push(Math.round(Math.random() * k))
    // }
    // console.log(arr);
// 
// }
// randArray(5);

// function raiseToDegree(a, b){
    // let res = a ** b;
    // console.log(res);
// }
// raiseToDegree(3 , 4);

// function findMin(){
    // let arguments = [];
    // return Math.min.();    
// }
// findMin(12, 14, 4, -4, 0.2); // => -4

// function findUnique(arr) {
    // let unique = [...new Set(arr)];
    // return arr.length == unique.length;
//   }
//   
//   console.log(findUnique([1, 2, 3, 5, 3]));
//   console.log(findUnique([1, 2, 3, 5, 11]));

// let lastElem =  function(array, x) {
    // if (array == null) 
    //   return void 0;
    // if (x == null) 
    //    return array[array.length - 1];
    // return array.slice(Math.max(array.length - x, 0));  
    // };
// 
    // console.log(lastElem([3, 4, 10, -5]));      // -5
    // console.log(lastElem([3, 4, 10, -5],2));   // [10, -5]
    // console.log(lastElem([3, 4, 10, -5],8));  //[3, 4, 10, -5]
   
    // function titleCase(str) {
        // var splitStr = str.toLowerCase().split(' ');
        // for (var i = 0; i < splitStr.length; i++) {  // You do not need to check if i is larger than splitStr length, as your for does that for you
            // splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);// Assign it back to the array
        // }
        // return splitStr.join(' '); // Directly return the joined string
    // }
    // console.log(titleCase("i love java script"));