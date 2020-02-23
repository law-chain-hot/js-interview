/**
 * 大整数加法，不考虑小数和负数
 */
function add(a, b)
{
	a = a.split('');
	b = b.split('');
	var jinwei = 0, result = '';
	// 这里一定不要忘了加上“ || jinwei”，否则最后面一个进位会被漏掉
	while(a.length || b.length || jinwei)
	{
		var temp = parseInt(a.pop() || 0) + parseInt(b.pop() || 0) + jinwei;
		result = temp % 10 + result;
		jinwei = Math.floor(temp / 10);
	}
	return result;
}

console.log(add('2222222222222222', '33333333333333333'))