function newFn() {
    var obj = new Object();

    var Par = [].shift.apply(arguments);

    obj.__proto__ = Par.prototype;
      
    var type = Par.apply(obj, arguments);
    res = typeof type === 'object' ? res : obj;

    return res;
}













// test
function Otaku (name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
    console.log(this.habit);
    console.log(this.age);
    console.log('---over---');
    console.log('');
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

var person = newFn(Otaku, 'Kevin', '18')

console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin

console.log('');
var person2 = new Otaku('brain', '20')




