var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 5;
var car1, car2, car3,car4;
var boundary1, boundary2;
var player;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  player = createSprite(20,190,13,13);
  player.shapeColor = "green";
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//add the velocity to make the car move.
car1.velocityY = 8;
car2.velocityY = 8;
car3.velocityY = -8;
car4.velocityY = -8;

function draw() {
   background("white");
   textSize(20);
   fill("blue");
  text("lives:" + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
   car1.bounceOff(boundary1);
   car1.bounceOff(boundary2);
   
   car2.bounceOff(boundary1);
   car2.bounceOff(boundary2);
   
   car3.bounceOff(boundary1);
   car3.bounceOff(boundary2);
   
   car4.bounceOff(boundary1);
   car4.bounceOff(boundary2);
//Add the condition to make the sam move left and right
   if (keyDown("right")) {
     player.x = player.x + 2;
   }
   if (keyDown("left")) {
     player.x = player.x - 2;
   }
//Add the condition to reduce the life of sam if it touches the car.
   if (player.isTouching(car1) || (player.isTouching(car2) || (player.isTouching(car3) || player.isTouching(car4)))) {
     player.x = 20;
     player.y = 190;
     life = life - 1;
   }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
