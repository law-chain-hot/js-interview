



/**
 * 
 * @param {Array} arr 
 * @return {Array} result
 */


// set
let ArrUnique_1 = (arr) => {
    return [... new Set(arr)]
}


// indexOf
let ArrUnique_2 = (arr) => {
    let unique = []
    arr.forEach((cur, index) => {
        if (unique.indexOf(cur) === -1) {
            unique.push(cur)
        }
    })
    return unique
}


// map
let ArrUnique_3 = (arr) => {
    const exist = new Map()
    const result = arr.filter((cur, index, arr) => {
        return !exist.has(cur) && exist.set(cur, null)
    }, this)
    return result

}












let arr = [1, 2, 3, 3, 3, 3, 4, 5, 5, 6]
console.log(ArrUnique_3(arr));
