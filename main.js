'use strict'

let game = new LGame;

function handleResize() {
    const gc = document.getElementById('gc')
    const ctx = gc.getContext('2d')

    let size = Math.min( window.innerWidth , window.innerHeight )
    gc.width = Math.floor( (size * 0.8 ) / 4) * 4;
    gc.height = Math.floor( ( size * 0.8 ) / 4) * 4;
    game.draw(gc);
}

window.onload = function() {
    this.handleResize()
    window.onresize = handleResize;

}
