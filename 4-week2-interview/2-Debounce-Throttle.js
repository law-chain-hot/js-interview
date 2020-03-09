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

        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            callback.apply(self, args);
            canRun = true;
        }, wait);
    }
}