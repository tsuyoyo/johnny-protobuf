const fs = require('fs')
const exec = require('child_process').exec
const commandBuildApiDoc = 'zsh ./buildApiDoc.sh'
const commandCompileProto = 'zsh ./generateProto.sh'

fs.watch('./apidoc', {}, (event, filename) => {
    console.log("Rebuilding apidoc.html...")
    exec(commandBuildApiDoc, onBuiltApiDoc)
})

function onBuiltApiDoc(err, stdout, stderr) {
    if (err) {
        console.log(`!! Fail to build HTML file : ${err} !!`)
    } else {
        console.log(` HTML is updated.`)
    }
}

fs.watch('./workdir/proto', {}, (event, filename) => {
    console.log("proto file is updated")
    exec(commandCompileProto, onProtofilesCompiled)
})

function onProtofilesCompiled(err, stdout, stderr) {
    console.log(stdout)
    if (err) {
        console.log(`!! Fail to compile proto files : ${err} !!`)
    } else {
        console.log(` protofiles are updated.`)
    }
}