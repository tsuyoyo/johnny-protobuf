# API document

The latest API document is available from [this link](http://htmlpreview.github.io/?https://github.com/tsuyoyo/johnny-protobuf/blob/main/apidoc_out/apidoc.html)

# How to start

## Launch file watcher

- `$ node start_watcher.js`
- When files in apidoc or workdir/proto are updated, building script automatically runs

## How to generate typescript file from protobuf definition

`$ zsh ./generateProto.sh`

## How to generate the html file

`$ zsh ./buildApiDoc.sh`

# How to import protobuf files to TS projects

Add `"johnny-proto": "tsuyoyo/johnny-protobuf.git"` to dependencies in package.json
