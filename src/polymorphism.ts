// Polymorphism Example 1
class Person {

       getTime() {
        console.log("I am codeing 10 hours a day");
       } 
}

class Student extends Person {

       getTime() {
              console.log("I am conding 5 hours a day");
       }
}

class Developer extends Person {
        
       getTime() {
              console.log("I am coding 12 hours a day");
       }
}

const polymorphismExample = (param :Person) => {
       param.getTime();

}


const person = new Person();
const student = new Student();
const developer = new Developer();

polymorphismExample(person);
polymorphismExample(student);
polymorphismExample(developer);

// Polymorphism Example 2


class Animal {
      name : string ;
      age : number ;
     sound : string ;

constructor (  name : string ,age : number ,sound : string,) {

        this.name = name ;
        this.age = age ;
        this.sound = sound ;
        
       }

makeUse (){
        
console.log (`The name is ${this.name} Age is ${this.age}  Sound ${this.sound} `);

}

}

class Bird extends Animal {

       makeUse()  {
              
console.log(`The name is ${this.name} Age is ${this.age}  Sound ${this.sound} - I can fly!`);
       
  }        
}

class Fish extends Animal {

        swimSpeed : number ;

constructor (name : string , age : number , sound : string , swimSpeed : number,) {

                super (name ,age , sound);
                this.swimSpeed = swimSpeed ;}

              makeUse()  {
                     console.log(`The name is ${this.name} Age is ${this.age}  Sound ${this.sound} - I can swim at ${this.swimSpeed} km/h!`);
              }
}

const polymorphismExample2 = (param :Animal) => {
       param.makeUse();
}

const dog = new Animal ('Buddy', 3, 'GAWW GAW');
const parrot = new Bird ('Parry', 1, 'Chirp Chirp');
const fish = new Fish ('Nemo' , 1 , 'Blub Blub' , 11);


polymorphismExample2(dog);
polymorphismExample2(parrot);
polymorphismExample2(fish);