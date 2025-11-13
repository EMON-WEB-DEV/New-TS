var Animal = /** @class */ (function () {
    function Animal(name, age, sound) {
        this.name = name;
        this.age = age;
        this.sound = sound;
    }
    Animal.prototype.makeUse = function () {
        console.log("The dog name is ".concat(this.name, " Age is ").concat(this.age, " And Sound ").concat(this.sound));
    };
    return Animal;
}());
var dog = new Animal('Buddy', 3, 'GAWW GAW');
var cat = new Animal('Kitty', 2, 'Meow Meow');
dog.makeUse();
cat.makeUse();
