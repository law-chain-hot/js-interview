

//1. 将 document.cookie 解析为 HashMap， 如: document.cookie="a=1;b=2;c=3" 解析为 {a: "1", b: "2", c:"3"}
function Jiexi(str) {
    //进行截取 将前面的document.cookie拿掉
    var sub_str = str.substring(17, str.length-1);
    //根据;进行截取
    var arr = sub_str.split(";");
    // console.log(arr);
    var dic = {};
    //进行截取
    //数组元素的添加
    for (var i = 0; i < arr.length; i++) {
        var dic_arr = arr[i].split("=");
        //分割
        dic[dic_arr[0]] = dic_arr[1];
    }
    return dic;
}
console.log(Jiexi('document.cookie="a=1;b=2;c=3"'))



//2. 寻找2个数组的交集：
// const arr1 = [1,2,3,4,5]
// const arr2 = [2,4,5,7]
// intersect(arr1, arr2) // => [2,4,5]
function intersect(arr1, arr2) {
    var res = [];
    //遍历第二个数组 当在第一个元素里面找到 ！=-1 的时候 结果数组push进去即可
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) != -1) {
            res.push(arr2[i]);
        }
    }
    return res;
}



// ======================
// 2020.02.27
// for tencent

/** 
 * @param {String} a 
 * @param {String} b
 * @return {String} 
 */

function add_test(a, b) {
	// init
	a = a.split('')
	b = b.split('')
	let carry = 0
	let result = ''
	let temp = 0

	// iterative part
	while (a.length || b.length || carry) {
		temp = parseInt(a.pop() || 0) + parseInt(b.pop() || 0) + carry
		result = temp % 10 + result
		carry = Math.floor(temp / 10)
	}

	// return 
	return result
}
