const debugDraw = () => {
  const debugGraphics = this.add.graphics().setAlpha(0.7);
        wallsLayer.renderDebug(debugGraphics,{
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243,234,48),
            faceColor: new Phaser.Display.Color(40,39,37,255)
        });
        groundLayer.renderDebug(debugGraphics,{
          tileColor: null,
          collidingTileColor: new Phaser.Display.Color(205,65,58),
          faceColor: new Phaser.Display.Color(40,39,37,255)
        });
}