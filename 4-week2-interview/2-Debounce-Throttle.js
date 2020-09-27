// 1. Debounce 
// clearTimeout
function debounce(callback, wait) {
    let timeout = null;

    return function (...args) {
        let self = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback.apply(self, args);
        }, wait)
    }
}



// 2. Throttle
// canRun -> signal
function throttle(callback, wait) {
    let canRun = true;
    
    return function(...args) {
        let self = this;
        if (!canRun) {
            return;
        }
        else{
            canRun = false;
            setTimeout(() => {
                callback.apply(self, args);
                canRun = true;
            }, wait);
        }
    }
}


// 2020.09.16
// real throttle
function throttle(fn, wait){
    let canRun = true
    let self = this
    return function(...args){
        if (canRun){
            canRun = false
            fn.apply(self, args)
            setTimeout(()=>{
                canRun = true
            }, wait)
        }
    }
}