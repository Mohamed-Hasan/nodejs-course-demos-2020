const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// [2, 4, 6, 8, 10, 12, 14 ,16]

const newArr = arr.map((el, index, arr) => {
    // do your logic
    const newElm = el * 2
    // return the new value that will be pushed in the new arr
    return newElm
})

console.log(newArr)
// Array.prototype.map = function (cb) {
//     const array = this;
//     const newArr = [];
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         const newValue = cb(element, index, array)
//         newArr.push(newValue)
//     }
//     return newArr;
// }

const evenNumbers = arr.filter((el, index, arr) => {
    // do you logic
    if (el % 2 === 0) {
        return true
    } else {
        return false
    }
    // return either true or false
    // if true ==> this element will be pushed in the new array
    // if false ==> this element will not be pushed
})

console.log(evenNumbers)


const sum = arr.reduce((cum, elm, index, arr) => {
    cum = cum + elm
    return cum
}, 0)

const transformArr = arr.reduce((cum, elm, index, arr) => {
    cum[index] = elm
    return cum;
}, {})

console.log(transformArr)
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// {
//     0: 1,
//     1: 2,
//     2: 3,

// }
console.log(sum)