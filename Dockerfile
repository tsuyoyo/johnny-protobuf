FROM node:14.15.3-buster-slim

WORKDIR /usr/src/app

RUN npm install -g semver
RUN npm install -g minimist
RUN npm install -g chalk
RUN npm install -g glob
RUN npm install -g protobufjs
RUN npm install -g uglify-js
RUN npm install -g espree
RUN npm install -g escodegen
RUN npm install -g estraverse

RUN apt-get update && apt-get install -y ca-certificates wget unzip
RUN wget https://github.com/protocolbuffers/protobuf/releases/download/v3.17.3/protoc-3.17.3-linux-x86_64.zip
RUN unzip protoc-3.17.3-linux-x86_64.zip -d protoc3
RUN mv protoc3/bin/* /usr/local/bin/
RUN mv protoc3/include/* /usr/local/include/
RUN protoc --version
RUN rm -rf protoc-3.17.3-linux-x86_64.zip protoc3

RUN apt-get install apt-transport-https && apt-get install -my wget gnupg
RUN wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN wget -qO- https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list > /etc/apt/sources.list.d/dart_stable.list
RUN apt-get update
RUN apt-get install dart
RUN dart pub global activate protoc_plugin
