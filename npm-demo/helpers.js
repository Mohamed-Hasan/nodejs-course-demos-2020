const fs = require('fs');
const util = require('util');


// const promisifeidRead = util.promisify(fs.readFile)

function readTodos(path) {
    // read file
    // parse data
    // return todos array
}


function add(options) {
    // read todos 
    // then parsing
    // get id
    // construct todo elemnet
    // push new todo in todos array
    // write in file todos array 
    console.log("adding a todo")
}

function edit() {
    console.log("editing a todo")
}

async function createFileIfNotExists(path) {
    const exists = await asyncExists(path)
    if (!exists) {
        const todos = []
        const todosStringified = JSON.stringify(todos)
        await asyncWrite(path, todosStringified)
        // fs.writeFileSync(path, todosStringified)
    }
}

function promisify(fn) {
    return function () {
        return new Promise((resolve, reject) => {
            fn(...arguments, (err, data) => {
                if (!err) return resolve(data)
                reject(err)
            })
        })
    }
}



// fs.readFile(path, options, callback)

const promisifiedReadFile = promisify(fs.readFile)

const promise = promisifiedReadFile('./app.js');

promise.then((data) => console.log(data))

function asyncExists(path) {
    return new Promise((resolve, reject) => {
        fs.exists(path, (exists) => {
            resolve(exists)
        })
    })
}

function asyncWrite(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) return reject(err)
            resolve()
        })
    })
}

function parseCmdArgs(options) {
    // options = ['title=study', 'body=study nodejs', 'id=1']
    const parsedOptions = options.reduce((cum, elm) => {
        const [optionName, optionValue] = elm.split("=")   // ['title', 'study']
        cum[optionName] = optionValue
        return cum;
    }, {})
    // options = {
    // id: 1,
    // title: 'study',
    // body: 'study nodejs'
    // }
    return parsedOptions;
}

module.exports = {
    add,
    edit,
    parseCmdArgs,
    createFileIfNotExists,
}

