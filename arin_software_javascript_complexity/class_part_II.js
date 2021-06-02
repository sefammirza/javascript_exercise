// CLASS DECLARATİON

/*class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
      
    }
    fullName (){
        return this.name + " " + this.surname
    }

    static showName = "Person"

    static staMethod() {
        console.log("Static method çalışıyor");
    }
}

//console.log(typeof Person)

const arin = new Person("Arin", "Çekiç", 5);
const elis = new Person("Elis", "Çeliç", 3)*/


//console.log(arin);

//console.log(arin.fullName());
//console.log(elis.fullName());
//console.log(Person.fullName());

//console.log(Person.showName);
//console.log(Person.staMethod());

/*class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
      
    }
    fullName (){
        return this.name + " " + this.surname
    }
}
const arin = new Person("Arin", "Çekiç", 5);

class Engineer extends Person{}; // Engineer --> Subclass(child)   Person --> Süperclass(parents)

const gurcan = new Engineer("Gürcan", "Çekiç", 40)
console.log(arin);
console.log(gurcan);*/

//OBJE + (name, surname...) => Person
//Person => Egineer

/*console.log(arin instanceof Person);
console.log(gurcan instanceof Engineer);
console.log(gurcan instanceof Person);
console.log(arin instanceof Engineer);*/

/*class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
      
    }
    fullName (){
        return this.name + " " + this.surname
    }}

    class Engineer extends Person {
        constructor(name, surname, age, job){
            super(name, surname, age);
            this.job = job;
        }
        getMoney(){
            console.log("para kazan");
        }
    }

    const arin = new Person("Arin", "Çekiç", 5);
    const gurcan = new Engineer("Gürcan", "Çekiç", 40, "engineer")

    console.log(arin);
    console.log(gurcan);

//OBJE + (name, surname, age) => Person
//Person + job, getMoney()=> Egineer

console.log(gurcan.getMoney());*/


/*class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
      
    }
    fullName (){
        return this.name + " " + this.surname
    }}

    class Engineer extends Person {
        constructor(name, surname, age, job){
            super(name, surname, age);
            //this.name = name;
            //this.surname = surname;
            //this.age = age;
            this.job = job;
        }
        getMoney(){
            console.log("para kazan");
        }
    }
    const gurcan = new Engineer("Gürcan", "Çekiç", 40, "engineer")*/

    class ExtendedArray extends Array{
        shuffle(){
            this.sort(() => Math.random() -0.5);
        }
    }

    let myArr = new ExtendedArray(1,2,3,4,5);
    console.log(myArr);
    myArr.shuffle();
    console.log(myArr);