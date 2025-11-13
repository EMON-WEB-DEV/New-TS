class Animal {
      name : string ;
      age : number ;
     sound : string ;

constructor (  name : string ,
          age : number ,
            sound : string,) {
        this.name = name ;
        this.age = age ;
        this.sound = sound ;

          }

makeUse (){
        
console.log (`The dog name is ${this.name} Age is ${this.age} And Sound ${this.sound}`);
}



}

const dog = new Animal ('Buddy', 3, 'GAWW GAW');
const cat = new Animal ('Kitty', 2, 'Meow Meow');

dog.makeUse();
cat.makeUse();