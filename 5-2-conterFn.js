// return obj
function counter(v) {
    var num = v;
    var that = this;
    return  {
        add: function(){
            num++;
            return num;
        },
        sub: function() {
            num--;
            return num;
        }
    }
}

const c = counter(3);
console.log(c.add()) // 4
console.log(c.sub()) // 3
c.add()
console.log(c.add()) // 5
console.log(typeof c) // 5



// ---------------------------------------------
// return fn
function getNum() {
    let i = 0;
    return function() {
        ++i
        console.log(i);
    }
}

const n = getNum();
n();
n();