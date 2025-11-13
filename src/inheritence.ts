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

const dog = new Animal ('Buddy', 3, 'GAWW GAW');
//const cat = new Animal ('Kitty', 2, 'Meow Meow');


class Bird extends Animal {
        
}


const parrot = new Bird ('Parry', 1, 'Chirp Chirp');


class Fish extends Animal {

        swimSpeed : number ;

constructor (name : string , age : number , sound : string , swimSpeed : number,) {

                super (name ,age , sound);
                this.swimSpeed = swimSpeed ;}
}

const fish = new Fish ('Nemo' , 1 , 'Blub Blub' , 11);

console.log(fish.swimSpeed);

dog.makeUse();
parrot.makeUse();
fish.swimSpeed;
