//3 strart at 23-07 end at 23-25
// let counter = {
//     start: 0,
//     inc: function () {
//         this.start++
//         return this;
//     },
//     dec: function () {
//         this.start--
//         return this;
//     },
//     getValue: function () {
//         return this.start
//     }
// }

// let current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current); // 1


//4 start at 23:26 end at 00:10

// let me = {
//     getSum : function (x, y){
//         calculator.x = x;
//         calculator.y = y;
//         return `${calculator.x} + ${calculator.y} = ${calculator.sum()}`; 
//     },
//     getDiff : function (x, y){
//         calculator.x = x;
//         calculator.y = y;
//         return `${calculator.x} - ${calculator.y} = ${calculator.diff()}`;
//     },
//     getMulti : function (x, y){
//         calculator.x = x;
//         calculator.y = y;
//         return `${calculator.x} x ${calculator.y} = ${calculator.multi()}`;
//     },
//     getDiv : function (x, y){
//         calculator.x = x;
//         calculator.y = y;
//         return `${calculator.x} / ${calculator.y} = ${calculator.div()}`;
//     },

// }

// alert(me.getSum(1, 1));
// alert(me.getDiv(1, 0));


//5 start at 00:14  end at 01:01 

// let country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };

// function format(start, end) {
//     console.log(start + this.name + end);
// }

// format.call(country, "", ""); // Ukraine
// format.apply(country, ["[", "]"]); // [Ukraine]
// format.call(country.capital, "", "" ); // Kyiv
// format.apply(country.capital, ["", ""]); // Kyiv
// format.apply(country.language,["",""]); // undefined

//6 start at 01:03 end at 01:10
// let user = {
//     name : "John"
// }

// function format(start, end) {
//     console.log(start + this.name + end);
// }

// let userFormat = format.bind(user);

// userFormat('<<<', '>>>'); // <<<John>>>

//7 start at 01:15 end at 01:50
// function concat (first, second, space = " "){
//     console.log(first + space + second);
// }
// let hello = concat.bind(null, "Hello");

// hello("World");

//8  start at 01:55
// function cube(number) {

//     let result = 1;
//     for (i = 0; i < 3; i++) {
//         result = result * number;
//     }
//     return console.log(result);

// }
// cube(5);

// function cube(number, n){
//     if (n == 1 ){
//         return number;
//     }else{
//         return number * cube(number, n - 1);
        
//     }
// }
// console.log(cube(5, 3));

//9

// function sum (){
//     if(arguments.length == 1){
//         return arguments[0];
//     }else{
//         let rest = Array.prototype.slice.call(arguments, 0 , arguments.length-1);
//         return arguments[arguments.length - 1] + sum.apply(null,rest);
//         }
// } 

// console.log(sum(1,2,3,4,5))

