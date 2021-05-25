// Fonksiyonlar

//*********** */ Function Declerion // Statement

/*function  square(num){ // parametre
    return (num * num);
}

square(5);  // Argüman
console.log(square(5));

console.log(square(4)); // () ----> invoke(çağırmak) */

// Function declaration --> Hoisted olarak çalışır.


//*********** */ Function Expression // 

/*const square = function  square(num){ // parametre
    return (num * num);
}

// Func name is optional(isteğe bağlı)

console.log(square);
console.log(square(5));

//FIRST - CLASS FUNCTIONS (fonksiyonun bir değişkene atanması)

const myArr = [6, "Arin", function(){console.log("Array Elements");}]

myArr[2]();

const myObj = {
    age: 5,
    name: "Arin",
    func:function(){console.log("Object Elements");}
}
myObj.func();


console.log(20 + (function(){return 10;})())// IIFE örneği*/

/*square(5);

const square = function (num){
    return (num * num);
}*/ 
 // Function experession is not hoisted
   // Function experession can be anonymous(isim vermek zorunda değiliz)
   // Biz bir fonksiyonu başka bir fonksiyona argüman olarak alabiliriz


   //FIRST - CLASS FUNCTIONS DEVAM

   //const addFive = function(num, func){
    //   console.log(num + func());
   //}

   //addFive(10, function(){return 5;}) // bir fonksiyonu başka bir funksiyona argüman olarak alabiliriz.


/*const myFunc = function (num){
    return function toDouble(){
        console.log(num * 2);
    }
}

//myFunc(8)();

const result = myFunc(7);
result(); // Bir fonksiyonu farklı bir fonksiyonun içinde return olarak kullanabiliriz.*/

//IMEDITATELY INVOCABLE FUNCTİON EXPRESSİON 

//const sum = function(){
//    console.log(5+12);
//}();

//console.log(sum);
//sum();
//console.log(sum);


function square(num)
{
    return(num * num);
}
console.log(square.name);
console.log(square.length);


// JACASCRIP TE HERŞEY NESNEDIR