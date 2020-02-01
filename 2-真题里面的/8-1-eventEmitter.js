// Try to build a eventEmitter
class EventEmitter {
    constructor() {
        this._eventLoop = {};
    }

    on(event, callback) {
        this._eventLoop[event] ? this._eventLoop[event].push(callback) : this._eventLoop[event] = [callback];
    }

    emit(event, ...params) {
        this._eventLoop[event] && this._eventLoop[event].forEach((callback) => { callback(...params) });
    }

    off(event) {
        this._eventLoop[event] && delete this._eventLoop[event];
    }

    once(event, callback) {
        let callbackOnce = (...params) => {
            callback(...params);
            delete this._eventLoop[event];
        };
        this.on(event, callbackOnce);
    }
}


var test = new EventEmitter();

var event1 = function (word) {
    console.log('event1: ', word);
}

var event2 = function (word) {
    console.log('event2: ', word);
}

test.on('1', event1);
test.on('1', event2);
test.once('2', event2);

test.emit('1', 'on test');
test.emit('1', 'on test again');

console.log('');
test.emit('2', 'once test');
test.emit('2', 'once test again');





// Facebook
// 1. implement clearAllTimeout
let oldTimeout = global.setTimeout;
let allTimeoutArr = [];
global.setTimeout = function (callback, wait) {
    var id = oldTimeout(callback, wait);
    allTimeoutArr.push(id);

}

function clearAllTimeout() {
    allTimeoutArr.forEach(el => clearTimeout(el))
}

setTimeout(() => {
    console.log('timeout, clear fail!')
}, 1000);

clearAllTimeout();




// 2. Implement an Event Emitter
//
// const emitter = new Emitter();
// const sub = emitter.subscribe(eventName, callback) // typeof eventName === String
// emitter.emit(eventName, a, b, c ,d , ...);
// sub.release()
class Emitter {
    constructor() {
        this._eventLoop = {};
    }

    subscribe(eventName, callback) {
        this._eventLoop[eventName] ? this._eventLoop[eventName].push(callback) : this._eventLoop[eventName] = [callback]
        return {
            release: () => this._eventLoop[eventName] && delete this._eventLoop[eventName]
        }
    }

    emit(eventName, ...params) {
        this._eventLoop[eventName] && this._eventLoop[eventName].forEach(callback => callback(...params));
        // console.log(this._eventLoop )
    }
}



// Test
let testEmitter = (el, er, ew) => console.log('Test of Emitter: ', el, er, ew);

const emitter = new Emitter();
const sub = emitter.subscribe('eventName', testEmitter) // typeof eventName === String
emitter.emit('eventName', 'par1', 'par2');
console.log(emitter._eventLoop)
sub.release()
console.log(emitter._eventLoop)




// strong
// hire
// weak
// no-hire


// 45min一面
