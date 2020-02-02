function multiply(array)
{
    if(array==null||array.length==0){
        return [];
    }
    var result = [];
    for(var i=0;i<array.length;i++){
        var tempArr = array.filter(function(val,idx){
            return idx!=i;
        });
        var temp = 1;
        tempArr.map(function(val){
            temp *= val;
        });
        result[i]=temp;
    }
    return result;
}
