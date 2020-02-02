function FindGreatestSumOfSubArray(array) {
    if (array.length == 0) return 0;
    var temp = array[0],
        sum = array[0];
    for (var i = 1; i < array.length; i++) {
        temp = temp < 0 ? array[i] : temp + array[i];
        sum = sum > temp ? sum : temp;
    }
    return sum;
}
