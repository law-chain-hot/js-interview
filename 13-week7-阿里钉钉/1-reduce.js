Array.prototype.reduce_ali = function (reducer,initVal) {
    for(let i=0;i<this.length;i++){
        initVal = reducer(initVal,this[i],i,this);
    }
    return initVal
};





let arr = [1,2,3,4,5]
let result = arr.reduce_ali((accum, cur, index, arr)=>{ return accum + cur }, 0)
console.log(result)




console.log(arr.reduce((accum, cur) => {return accum + cur}, 2))