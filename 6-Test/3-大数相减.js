function minus(a, b)
{
	a = a.split('');
	b = b.split('');
	var aMaxb = a.length > b.length; // 标记A是否大于B
	if(a.length == b.length)
	{
		for(var i=0, len=a.length; i<len; i++)
		{
			if(a[i] == b[i]) continue;
			aMaxb = a[i] > b[i];
			break;
		}
	}
    if(!aMaxb) a = [b, b = a][0]; // 只要A不比B大都交换
    console.log(b=a)
	var result = '';
	while(a.length)
	{
		var temp = parseInt(a.pop()) - parseInt(b.pop() || 0);
		if(temp >= 0) result = temp + result;
		else
		{
			result = temp + 10 + result;
			a[a.length-1]--; // 由于已经保证了a一定大于等于b，所以不存在a[i-1]为undefined的情况
		}
	}
	return (aMaxb?'':'-') + result.replace(/^0*/g, ''); // 去掉前面可能的无效0
}

console.log(minus('2222222222222222', '33333333333333333'))
console.log('====================================');
console.log(minus('1672', '6329'))// "-4657");
console.log('====================================');
