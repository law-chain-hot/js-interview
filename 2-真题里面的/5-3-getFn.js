

const get = function (obj, cmd) {
    let items = cmd.split('.')
    console.log(items);
    let temp = obj;
    for (let i = 0; i < items.length; i++) {
        temp = eval(`temp.${items[i]}`);
    }
    return temp;
}


const o = {
    a: {
        b: {
            c: 1
        }
    }
}
console.log(get(o, 'a.b.c'));  //1