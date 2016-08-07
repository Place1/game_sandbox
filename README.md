# Game

## System Dependencies
* NodeJS v6+

## Setup
1. `npm install`
2. `npm run build:pixi

## Run/Develop
1. `npm run serve` or `npm run serve:hot`
2. `open http://localhost:8000`

_note: this uses webpack-dev-server which serves the built project from memory. If you have run one of the build commands (i.e. the dist/ folder has been created) then webpack-dev-server will use those files instead of the in-memory ones it creates. Remember to delete the dist/ folder when using these commands._

## Build to the 'dist' folder
1. `npm run build` or `npm run build:production`
