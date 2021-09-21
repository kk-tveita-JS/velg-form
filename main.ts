input.onButtonPressed(Button.A, function () {
    Figur += 1
    if (Figur % 4 == 0) {
        Figur = 0
    }
    basic.showNumber(Figur)
})
input.onButtonPressed(Button.B, function () {
    if (Figur == 0) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    } else if (Figur == 1) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (Figur == 2) {
        basic.showLeds(`
            # # # # .
            # . . # .
            # . . # .
            # . # # #
            # . . # .
            `)
    } else {
        basic.showNumber(Figur)
    }
})
let Figur = 0
Figur = 0
basic.showNumber(Figur)
