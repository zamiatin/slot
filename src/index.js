var Pixi = require('pixi.js');
var styles = require('./styles.scss');

var renderer = Pixi.autoDetectRenderer(100, 100);
document.body.appendChild(renderer.view);
var stage = new PIXI.Container();
renderer.render(stage);

renderer.view.style.position = "absolute";
renderer.view.style.display = "block";
renderer.autoResize = true;
renderer.resize(window.innerWidth, window.innerHeight);