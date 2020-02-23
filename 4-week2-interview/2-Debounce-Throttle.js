// 1. Debounce 
// clearTimeout
function debounce(callback, wait) {
    let timeout = null;

    return function () {
        let self = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback.apply(self);
        }, wait)
    }
}



// 2. Throttle
// canRun -> signal
function throttle(callback, wait) {
    let canRun = true;
    
    return function() {
        let self = this;

        if (!canRun) return;
        canRun = false;
        setTimeout(() => {
            callback.apply(self);
            canRun = true;
        }, wait);
    }
}