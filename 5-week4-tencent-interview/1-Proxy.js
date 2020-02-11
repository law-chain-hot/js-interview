let a = new Proxy({}, {
    set: (obj, prop, value) => {
        obj[prop] = value;

        if (prop=='zhihu'){
            console.log('Proxy: you set it as, ' + value)
        }
    }
})

a.zhihu = 1