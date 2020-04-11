const helpers = require('./helpers')

function greet(name) {
    const msg = `hello ${name}`
    helpers.log(msg)
    return msg
}

helpers.sayHello()
greet("mohamed");

