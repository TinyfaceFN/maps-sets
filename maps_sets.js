// What does the following code return?
// new Set([1,1,2,2,3,4])

// (1,2,3,4)


// What does the following code return?
// [...new Set("referee")].join("")

// ('refr')

// What does the Map m look like after running the following code?
// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

// Key: [1, 2, 3] Value: true
// Key: [1, 2, 3] Value: false


function hasDuplicate(arr){
    const array = arr
    const arrayset = new Set(arr)
    return array.length !== arrayset.size
}

function vowelCount(str){
    const  vow = ['a','e','i','o','u']
    const vowelMap = new Map()
    vow.forEach(vowel => vowelMap.set(vowel,0))
    for (let x of str.toLowerCase()){
        if (vowelMap.has(x)){
            vowelMap.set(x,vowelMap.get(x) + 1)
        }
    } 
    return vowelMap
}