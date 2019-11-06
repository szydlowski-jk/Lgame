'use strict'


class LGame {
    constructor () {
        this.redl = [1, 2, 6, 10]
        this.bluel = [5, 9, 13, 14]
        this.neutral = [0, 15]
    }

    draw(gc) {
        const ctx = gc.getContext('2d')
        const size = gc.width;

        const cellSize = gc.width / 4

        for(let i = 0; i < 16; i++) {
            if (this.bluel.includes(i)) {
                ctx.fillStyle = "#0000ff"
            } else if (this.redl.includes(i)) {
                ctx.fillStyle = "#ff0000"
            } else if (this.neutral.includes(i)) {
                ctx.fillStyle = "#880088"
            } else {
                ctx.fillStyle = "#000000"
            }

            ctx.strokeStyle = "#ffffff"
            let ix = i % 4
            let iy = Math.floor(i / 4)
            ctx.fillRect(
                ix * cellSize,
                iy * cellSize,
                cellSize,
                cellSize
            )
            ctx.strokeRect(
                ix * cellSize,
                iy * cellSize,
                cellSize,
                cellSize
            )
        }
    }

    print() {
        let str = ""
        for(let i = 0; i < 16; i++) {
            if (this.bluel.includes(i)) {
                str += '+'
            } else if (this.redl.includes(i)) {
                str += '-'
            } else if (this.neutral.includes(i)) {
                str += 'X'
            } else {
                str += '.'
            }

            if ((i % 4) == 0) {
                console.log(str)
                str = ""
            }
        }
    }
}