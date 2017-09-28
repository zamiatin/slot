var Pixi = require('pixi.js');
var styles = require('./styles.scss');
var bgImg = require('./img/BG.png');
var spriteJson = require('./img/sprite.json');

//Aliases
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

//Main render
var renderer = autoDetectRenderer(1, 1),
    container = new Container();
document.body.appendChild(renderer.view);
renderer.render(container);

renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);

//loader img
loader.add(bgImg).load(setup);

function setup() {
  var idSprite = resources[bgImg].texture;
  var bg = new Sprite(
    idSprite
  );

  container.addChild(bg);
  renderer.render(container);
}


