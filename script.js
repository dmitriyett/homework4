//1

// let max = (a, b) => a > b ? a : b ; 
// console.log( max(0, -1) );

//2

// function min (){
//     let maxResult = arguments[0];
//     for(let i = 1 ; i <= arguments.length; i++){
//         if (maxResult > arguments[i]){
//             maxResult = arguments[i];
//         }
//     }
//     return maxResult; 
// }
// console.log( min(0, -1, 100, 500, 100500) );

//3

// let users = [
//     {
//         firstName : "Igor", 
//         lastName : "Isa",
//         age : 29
//     },
//     {
//         firstName : "Igoreyn", 
//         lastName : "Isaart",
//         age : 28
//     },
//     {
//         firstName : "Getry", 
//         lastName : "Isrpm",
//         age : 23
//     },
//     {
//         firstName : "Demn", 
//         lastName : "Isar",
//         age : 17
//     },
//     {
//         firstName : "Pety", 
//         lastName : "Sdfqwe",
//         age : 15
//     },
//     {
//         firstName : "Beslam", 
//         lastName : "Newseler",
//         age : 22
//     },
//     {
//         firstName : "Baslen", 
//         lastName : "Islamimn",
//         age : 24
//     },
//     {
//         firstName : "Vesty", 
//         lastName : "Urga",
//         age : 26
//     },
//     {
//         firstName : "Jhon", 
//         lastName : "Largen",
//         age : 25
//     }
// ];
// console.log(users.filter((obj) => obj.age < 18 ));
// users.forEach((obj) => {
//     obj["fullName"] = `${obj.firstName} ${obj.lastName}`;
// });
// console.log(users);
// let newUsers = users.map((obj) => {
//   return  obj.fullName;
// });
// console.log(newUsers);

//4
// let someArray = [1, 2, 3, 4, 5, 6, 7];
// function someShift(arr) {
//     let someArray1 = arr[0];
//     for (i = 0; i <= arr.length; i++) {
//         if (i < arr.length) {
//              arr[i] = arr[i + 1];  
//         }
//     }
//     arr.length = arr.length - 1;
//     return someArray1;
// };
// let result = someShift(someArray);
// console.log(result);

//5

// let someArray = [1, 2, 3, 4, 5];
// function anotherPushFunc() {
//     let arrayArguments = arguments[0]; 
//     for(let i = 1; i < arguments.length; i ++){
//        if( i < arguments.length){
//         arrayArguments[arrayArguments.length] = arguments[i];
//        }
//    }
//    return arrayArguments.length;
// }
// let result = anotherPushFunc(someArray, "asd", 123, 45, 44);
// console.log(result);


//6
// let source = { firstname: "Tom", age: 10 };
// function extend() {
//     for (let i = 1; i < arguments.length; i++) {
//         for (let prop in arguments[i]) {
//             arguments[0][prop] = arguments[i][prop];
//         }
//     }
//     return arguments[0];
// }
// let a = extend(source,{ firstname: 'John' }, { lastname: 'Doe' });
// console.log(a);

//7 начал 30.12.2020 в 00:20 - Закончил 00:40

// function setComment (date, message, author = "Anonymous"){
//     if (date == undefined || message == undefined){
//         alert("Required Arguments are missing");
//         return;
//     }
//     console.log(`${author}, ${date}\n${message}`);
// }

// setComment('2016-11-02','Everything is ok', 'John');
// setComment('2016-11-02', 'You could do it better!');

//8 начал 30.12.2020 в 00:50 - Закончил 01:19

// function createTimer(){
//     let timer = performance.now();
//     return function takeTimer(){
//         return performance.now() - timer;
//     }
// }

// let timer = createTimer();
// alert('!')
// alert( timer() );

console.log("Helklo");
