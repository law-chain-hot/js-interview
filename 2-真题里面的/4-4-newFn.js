function newFn(that, ...args) {
    var obj = new Object();
    console.log(arguments);
    
    var Par = [].shift.apply(arguments);
    // console.log("++++++" + Par);

    
    

    obj.__proto__ = Par.prototype;
      
    var type = Par.apply(obj, arguments);
    res = typeof type === 'object' ? res : obj;

    return res;
}

// ##################
// ali new

function new_Ali(parent, ...args) {
    let obj = new Object()
    obj.__proto__ = parent.prototype
    let type = parent.apply(obj, args)

    // if type is object
    if (typeof type === 'object') return type
    else return objs
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




