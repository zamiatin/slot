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
var width = window.innerWidth;
var height = window.innerHeight;
var renderer = autoDetectRenderer(width, height),
    container = new Container();
document.body.appendChild(renderer.view);
renderer.render(container);

renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(width, height);

var baseTexture = new PIXI.BaseTexture.from(spriteJson.meta.image);
var spritesheet = new PIXI.Spritesheet(baseTexture, spriteJson);

spritesheet.parse(function (textures) {

  var bg = new Sprite(
    textures['BG.png']
  );

  bg.width = width;
  bg.height = height;

  container.addChild(bg);
  renderer.render(container);
});



// function setup() {



// }


