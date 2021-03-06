var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0 }
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    } 
  };
   
  var game = new Phaser.Game(config);
   
  function preload() {}
   
  function create() {
    var circle = new Phaser.Geom.Circle(400, 300, 100);

    var graphics = this.add.graphics({ fillStyle: { color: 0xff0000 } });
    graphics.fillCircleShape(circle);
  }
   
  function update() {}