let year = 3, pos = "前端";
let str = "我已经有 ${year} 年 ${pos} 开发经验了";
function replace(str){
    // 原理是通过正则匹配，替换原字符串中的变量
    // let word = new RegExp('${(\w+)}', 'g');
    return str.replace(/\$\{([a-z]+)\}/g,function(matched,key){
    // return str.replace(word,function(matched,key){
            // console.log(arguments)  // arguments见下面
            return eval(key)
    })
}
console.log(replace(str)) //=> "我已经有3年前端开发经验了"



