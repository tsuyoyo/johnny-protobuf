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