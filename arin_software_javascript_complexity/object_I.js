// OBJECT

// Property(isimlere) -- Method(Bir nesne ile ilişkili functionlar)

/*const person = {

    name: "John",
    surname: "Doe",
    age: 40,
    languages: ["Turkish", "English", "Spanish"],
    fullName: function(){
        return this.name +" "+this.surname
    },
    adress:{
        city: "Balıkesir",
        districti:"Akçay"
    }
}*/

// object Literal  En çok kullanılan liste oluşturma-- Değerlerin en baştan belirlenmesi

/*
const person ={
    name: "john",
    surname: "Doe",
    age: 40,
    fullName: function (){
        return this.name + " " + this.surname
    }
}

console.log(person);

// dot Notation

console.log(person.name);
console.log(person.age);
console.log(person.fullName());

person.job = "Student"
console.log(person)
console.log(person.job);


//Bracket Notation

console.log(person["name"]);
console.log(person["age"]);
console.log(person["fullName"]());
console.log(person['na' + 'me'])


const person ={
    name: "john",
    surname: "Doe",
    age: 40,
    fullName: function (){
        return this.name + " " + this.surname
    }
}

person.adress = {};
console.log(person);
person.adress.city  = "Balıkesir";
console.log(person);


// CONSTRUCTOR ----> YAPICI

function Person(name, surname, age){
    const obj = {};
    obj.name = name;
    obj.surname = surname;
    obj.age = age;
    obj.fullName = function (){
        return this.name + " " + this.surname}
    
    return obj;

} 

function Person(name, surname, age){

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function (){
        return this.name + " " + this.surname}

}
const person1 = new Person("John", "Doe", 40);
const person2 = new Person("Ricardo", "Quaresma", 25);


// Object Constructer

const person1 = new Object();
person1.name = 'John';
person1.surname = 'Doe';
person1.age = 40;
person1.fullName = function (){
    console.log(this);
    return this.name + " " + this.surname
}
console.log(person1);
console.log(person1.age);
console.log(person1.fullName());*/

// Object.create() ile nesne oluşturmak

const person ={
    name: "john",
    surname: "Doe",
    age: 40,
    fullName: function (){
        return this.name + " " + this.surname
    }
}

console.log(person)
const arin = Object.create(person)
arin.name = 'Arin'
arin.surname = 'Software'
arin.age = 5;


console.log(arin);
console.log(arin.fullName());


