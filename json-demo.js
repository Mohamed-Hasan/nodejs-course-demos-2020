const obj = [{
    a: 1,
    b: '2',
    c: [1, 2, 3],
    d: {
        z: '10'
    },
}]


const jsonData = JSON.stringify(obj)
console.log("jsonData", jsonData)


const parsedObj = JSON.parse(jsonData)
console.log("parsedObj", parsedObj[0].a)

