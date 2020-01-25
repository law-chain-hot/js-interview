// Try to build a eventEmitter
class EventEmitter {
    constructor() {
        this._eventLoop = {};
    }

    on(event, callback) {
        this._eventLoop[event] ? this._eventLoop[event].push(callback) : this._eventLoop[event] = [callback];
    }

    emit(event, ...params) {
        this._eventLoop[event] ? 
    }


}