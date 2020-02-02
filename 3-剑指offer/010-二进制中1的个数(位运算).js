function NumberOf1(n)
{
    if(typeof n != 'number'){
    	return
    }
    if(n < 0){
    	// 强制转成有符号整数的二进制补码表示
        n = n >>> 0
        console.log(n)
    }
    // 转为二进制
    var temp = n.toString(2)
    var n = 0
   	for(var i = 0;i<temp.length;i++){
   		if (temp[i] == 1){
   			n++
   		}
   	}
    return n 
}


console.log(NumberOf1(2));