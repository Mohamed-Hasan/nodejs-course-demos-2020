const fs = require('fs');

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

function createFileIfNotExists(path) {
    if (!fs.existsSync(path)) {
        const todos = []
        const todosStringified = JSON.stringify(todos)
        fs.writeFileSync(path, todosStringified)
    }
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

