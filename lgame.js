'use strict'

const COLOR_RED_ACTIVE = "#FF0000"
const COLOR_RED_DRAW = "#600000"

const COLOR_BLUE_ACTIVE = "#0000FF"
const COLOR_BLUE_DRAW = "#000060"

const COLOR_NEUTRAL_ACTIVE = "#880088"
const COLOR_NEUTRAL_DRAW = "#330033"


class LGame {
    constructor (gc) {
        this.gc = gc
        this.ctx = gc.getContext('2d')
        this.redl = [1, 2, 6, 10]
        this.bluel = [5, 9, 13, 14]
        this.neutral = [0, 15]

        this.cellSize = this.gc.width / 4

        this.player = 0
        this.redColor = COLOR_RED_ACTIVE
        this.blueColor = COLOR_BLUE_ACTIVE
        this.neutralColor = COLOR_NEUTRAL_ACTIVE

        gc.onmousemove = (e) => {
            this.omt = this.mt

            this.mx = e.layerX
            this.my = e.layerY
            this.mt = Math.floor(this.my / this.cellSize) * 4 + Math.floor(this.mx / this.cellSize)
            console.log(this.mx, this.my, this.mt)

            if (this.omt != this.mt) {
                this.draw()
            }
        }

    }

    draw() {
        console.log('draw')
        const gc = this.gc
        const ctx = this.ctx
        const size = gc.width;

        this.cellSize = gc.width / 4

        if ( this.player == 0 ) {
            this.redColor = COLOR_RED_DRAW
            this.blueColor = COLOR_BLUE_ACTIVE
            this.neutralColor = COLOR_NEUTRAL_ACTIVE
        } else if ( this.player == 1 ) {
            this.redColor = COLOR_RED_DRAW
            this.blueColor = COLOR_BLUE_ACTIVE
            this.neutralColor = COLOR_NEUTRAL_ACTIVE
        }


        for(let i = 0; i < 16; i++) {
            if (this.bluel.includes(i)) {
                ctx.fillStyle = this.redColor
            } else if (this.redl.includes(i)) {
                ctx.fillStyle = this.blueColor
            } else if (this.neutral.includes(i)) {
                ctx.fillStyle = this.neutralColor
            } else {
                ctx.fillStyle = "#000000"
            }

            if (this.mt == i) {
                if (this.player == 0) {
                    ctx.fillStyle = COLOR_RED_ACTIVE
                } else if ( this.player == 1 ) {
                    ctx.fillStyle = COLOR_BLUE_ACTIVE
                }
            }

            ctx.strokeStyle = "#ffffff"
            let ix = i % 4
            let iy = Math.floor(i / 4)

            ctx.fillRect(
                ix * this.cellSize,
                iy * this.cellSize,
                this.cellSize,
                this.cellSize
            )
            ctx.strokeRect(
                ix * this.cellSize,
                iy * this.cellSize,
                this.cellSize,
                this.cellSize
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