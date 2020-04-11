// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("after 2 seconds")
//         // producing album
//         // album is ready
//         resolve("here is my album")
//         // reject("sorry could not produce the album")
//     }, 2000)
// });

// myPromise
//     .then((album) => {
//         // listening to album
//         console.log(album)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


// myPromise
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


function asyncAdd(a, b, cb) {
    setTimeout(() => {
        cb(a + b)
    }, 2000)
}

function promisifiedAsyncAdd(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// const promisifiedSum = promisifiedAsyncAdd(3, 4)

// promisifiedSum.then(res => console.log(res))



promisifiedAsyncAdd(3, 4)
    .then(res => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const sum = res * 2
                resolve(sum)
            }, 2000)
        })
    })
    .then(res => {
        return res * 2
    })
    .then(res => {
        console.log(res)
    })
    .catch(err => {

    })

// function asyncMultiply(a, b) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a * b)
//         }, 2000)
//     })
// }


// function applySomeMathOps(a, b) {
//     const promiseMultiply = asyncMultiply(a, b)
//     promiseMultiply.then(res => {
//         console.log(res)
//     })
// }


function asyncSquare(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a * a)
        }, 2000)
    })
}

async function addAfterSquare(a, b) {
    const newA = await asyncSquare(a)
    const newB = await asyncSquare(b)
    return newA + newB
}

function pourWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}

function bringToBoil() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 4000)
    })
}

function lowerHeat() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}

function addRice() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, 1000)
    })
}


async function cook() {
    await pourWater()
    await bringToBoil()
    await lowerHeat()
    await addRice()
}



const arr = [1, 2, 3, 4, 5]  // [1, 4, 9, 16, 25]

const promises = arr.map((el) => {
    const squaredElPromise = asyncSquare(el)
    return squaredElPromise;
})

Promise.all(promises)
    .then(res => {
        console.log(res)
    })

// const newArr = []
// asyncSquare(1)
// .then(() => {
//     return asyncSquare(2)
// })
// .then(() => asyncSquare(3))


