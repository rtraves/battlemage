var config = {
    type: Phaser.CANVAS,
    width: 600,
    height: 800,
    pixelArt: true,
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };

  var game = new Phaser.Game(config);

  function preload () {
  }

  function create () {
    this.cameras.main.setBackgroundColor('#99ff66');
  }

  function update () {
      
  }