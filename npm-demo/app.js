const helpers = require('./helpers');

const PATH = process.env.filePath || './todos.json'
function main(cmdArgs) {
    console.log(cmdArgs)
    // const command = cmdArgs[2]
    // const filePath = cmdArgs[1]
    // const nodePath = cmdArgs[0]
    helpers.createFileIfNotExists(PATH)
    const [, , command, ...options] = cmdArgs
    // options = ['title=study', 'body=study nodejs', 'id=1']
    const parsedOptions = helpers.parseCmdArgs(options)
    switch (command) {
        case 'add':
            helpers.add(parsedOptions)
            break;
        case 'edit':
            helpers.edit(parsedOptions)
            break;
        case 'remove':
            // remove()
            break;
        case 'list':
            // list()
            break;
        default:
            break;

    }
}

main(process.argv)