import InputManager, { Keys } from './InputManager'
import * as _ from 'lodash'

const width = document.documentElement.clientWidth;
const height = document.documentElement.clientHeight;
const renderer = new PIXI.WebGLRenderer(width, height);
document.body.appendChild(renderer.view);

// PIXI stage to be rendered
const stage = new PIXI.Container();

// load our resources
const bunnyAssetLength = 10
for (let i = 0; i < bunnyAssetLength; i++) {
  PIXI.loader.add(i.toString(), `/dist/assets/${i}.png`)
}
PIXI.loader.load(resourcesReady)

let bunny: PIXI.extras.MovieClip = null

// when the assets have been loaded this will get called.
function resourcesReady(loader: PIXI.loaders.Loader, resources: any) {
  const textures = _.values(resources).map((resource: any) => resource.texture)
  bunny = new PIXI.extras.MovieClip(textures)
  bunny.animationSpeed = 0.2
  bunny.play()
  bunny.position.x = 200
  bunny.position.y = 200
  stage.addChild(bunny)

  // we've finished setting up our sprites
  // start the game loop
  renderLoop()
}

// FPS
const ticker = new PIXI.ticker.Ticker() // .FPS for the current FPS

const devToolsText = new PIXI.Text('0', {font : '20px Arial', fill : 0x60fc4d, align : 'left'})
devToolsText.position.x = 2
devToolsText.position.y = 2
stage.addChild(devToolsText)

// the game's render loop1
const speed = 4
function renderLoop() {
  requestAnimationFrame(renderLoop)

  if (InputManager.isDown(Keys.w)) {
    bunny.position.y -= speed
  }
  if (InputManager.isDown(Keys.a)) {
    bunny.position.x -= speed
  }
  if (InputManager.isDown(Keys.s)) {
    bunny.position.y += speed
  }
  if (InputManager.isDown(Keys.d)) {
    bunny.position.x += speed
  }

  devToolsText.text = `fps: ${ticker.FPS.toPrecision(4)}`
  renderer.render(stage)
}
