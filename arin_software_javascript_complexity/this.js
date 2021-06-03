// obj. fun() --> this obj
// this --> global object --> window(global)

/* console.log(this);
console.log(this.location);
console.log(window.location.href);
console.log(this === window); */

/* const name = 'Arin';

console.log(name);
console.log(this.name);
console.log(this);

// Function Declaration

function func1(){
    this.name = "Gürcan";
   /*  console.log(this);
    console.log(this.location);
    console.log(this.location.href); */
/*     console.log(this.age);
}

// Function Expression

const func2 =  function(){
    this.age = 40;
    /* console.log(this);
    console.log(this.location);
    console.log(this.location.href); */
/*     console.log(this.name);
}

func2();
func1(); */ 


/* console.log(name);
console.log(age);
console.log(this.name);
console.log(this.age); */

/* function Person(name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function (){
        return this.name + " " + this.surname}


} */

/* class Person{
    constructor (name, surname, age){
    this.name = name;
    this.surname = surname;
    this.age = age;}

   fullName = function (){
        return this.name + " " + this.surname}


}

const arin = new Person("Arin", "Çekiç", 5);
const gurcan = new Person("Gürcan", "Çekiç", 5);
console.log(arin);
console.log(gurcan); */

/* const arin = {
    name: "Arin",
    age:5,
    surname:"Çekiç",
    fullName: function(){
        console.log(this)
        //return this.name + " " + this.surname
    },

    mother : {
        name:"Gameze",
        age:40,
        surname:"Çekiç",
        fullName: function(){
            console.log(this)
            //return this.name + " " + this.surname
        }

    }
}


console.log(arin);
console.log(arin.fullName());
console.log(arin.mother.fullName()); */

/* const elis = {
    name : "Elis",
    funcy: function(){
        console.log(this === elis);
        console.log(this === window);
    }
}

//console.log(elis.funcy());

const funcy2 = elis.funcy();
console.log(funcy2()); */

const elis = {
    name : "Elis",
    funcy: function(){
        console.log(this === elis);
        setTimeout(function(){
            console.log(this === elis);
            console.log(this === window);
        }, 2000);
    }
}
console.log(elis.funcy());