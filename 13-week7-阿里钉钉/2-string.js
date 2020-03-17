console.log(Math.random().toString(36).slice(2, 10))



let raw = Math.random().toString(36)
// console.log(raw)
let result = null;
for (let i = 2; i < raw.length; i++) {
    if ("a" <= raw[i] && raw[i] <= "z") {
        result = raw.slice(i, i + 8)
        break
    }
}
let len = raw.length
if (len < 8) {
    let diff = 8 - length
}
console.log(result)



randomStr = (lastNum) => {
    let raw = Math.random().toString(36)
    // console.log(raw)
    let result = null;
    for (let i = 2; i < raw.length; i++) {
        if ("a" <= raw[i] && raw[i] <= "z") {
            result = raw.slice(i, i + 8)
            break
        }
    }
    let len = raw.length
    if (len < 8) {
        let diff = 8 - length
        result.concat(randomStr(diff))
    }
    if (!diff) {
        return result
    } else {
        return result(-lastNum)
    }

}




compare = (version1, version2) => {
    let arr1 = version1.split('.')
    let arr2 = version2.split('.')
    let len1 = arr1.length
    let len2 = arr2.length

    for (let i = 0; i < len1 && i < len2; i++) {
        if (arr1[i] > arr2[i]) {
            return 1
        } else if (arr1[i] < arr2[i]) {
            return -1
        }
    }

    if (len1 < len2) {
        if (arr2[-1] != 0) return -1
        else return 0
    } else if (len1 > len2){
        if (arr1[-1] != 0) return 1
        else return 0
    }
    else {
        return 0
    }
}

console.log(compare('1.1', '1.1.2'))