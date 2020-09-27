

/*
To test out your new hashmap, you have a list of queries in the form of two arrays: queryTypes contains the names of the methods to be called (eg: insert, get, etc), and queries contains the arguments for those methods (the x and y values).

Your task is to implement this hashmap, apply the given queries, and to find the sum of all the results for get operations.

Example

For queryType = ["insert", "insert", "addToValue", "addToKey", "get"] and query = [[1, 2], [2, 3], [2], [1], [3]], the output should be hashMap(queryType, query) = 5.

The hashmap looks like this after each query:

1 query: {1: 2}
2 query: {1: 2, 2: 3}
3 query: {1: 4, 2: 5}
4 query: {2: 4, 3: 5}
5 query: answer is 5
The result of the last get query for 3 is 5 in the resulting hashmap.



For queryType = ["insert", "addToValue", "get", "insert", "addToKey", "addToValue", "get"] and query = [[1, 2], [2], [1], [2, 3], [1], [-1], [3]], the output should be hashMap(queryType, query) = 6.

The hashmap looks like this after each query:

1 query: {1: 2}
2 query: {1: 4}
3 query: answer is 4
4 query: {1: 4, 2: 3}
5 query: {2: 4, 3: 3}
6 query: {2: 3, 3: 2}
7 query: answer is 2
The sum of the results for all the get queries is equal to 4 + 2 = 6.
*/



function hashMap(queryType, query) {
    let hash = {}
    let addKeyCount = 0
    let output = 0
    
    for(let i = 0; i < query.length; i++){
        let type = queryType[i]
        if(type === 'insert'){
            insert(i)
        } else if(type === 'addToValue'){
            addToValue(i)
        } else if(type === 'addToKey'){
            addToKey(i)
        } else if(type === 'get'){
            output += get(i)
        }
        // console.log(hash)
    }
    return output
    
    function insert(i){
        let key = query[i][0]
        let value = query[i][1]
        
        hash[key] = value
        
    }
    
    function addToValue(i){
        let value = query[i][0]
        const keys = Object.keys(hash)
        for(let key of keys){
            hash[key] += value
        }
    }
    
    function addToKey(i){
        let valueNew = query[i][0]
        addKeyCount += valueNew
        // const entries = Object.entries(hash)
        // hash = {}
        // for(let [key, value] of entries){
        //     let newKey = parseInt(key) + parseInt(valueNew)
        //     hash[newKey] = value
        // }
    }
    
    function get(i){
        return hash[query[i][0] - addKeyCount]
    }
}

