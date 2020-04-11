function add(a, b) {
    return a + b
}

// const x = 5

const addFn = function add(a, b) {
    return a + b
}

addFn(3, 5)


function mathAddTwo(a, b) {
    a = a + 2
    b = b + 2
    return function (c) {
        return a + b + c
    }
}


const y = mathAddTwo(3, 4)

const z = y(6)


function applyLogicAfterAddTwo(a, b, doLogic) {
    // apply my logic "adding two to each param"
    a = a + 2
    b = b + 2
    // call function that you need to be called with the result of applying my logic
    doLogic(a, b)
    // return {
    //     a: a,
    //     b: b
    // }
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}
applyLogicAfterAddTwo(4, 5, add)
applyLogicAfterAddTwo(4, 5, subtract)

// addFn(newValues.a, newValues.b)
// subtract(newValues.a, newValues.b)
// multiply(newValues.a, newValues.b)


function asyncApplyLogicAfterAddTwo(a, b, cb) {
    setTimeout(() => {
        a = a + 2
        b = b + 2
        cb(a, b)
        // cb(a, b)
    }, 2000)
    // return {
    //     a: a,
    //     b: b,
    // }
}


asyncApplyLogicAfterAddTwo(3, 4, (a, b) => a / b)

