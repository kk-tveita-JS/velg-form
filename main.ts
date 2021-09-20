input.onButtonPressed(Button.A, function () {
    Figur = Figur + 1
    if (Figur % 4 == 0) {
        Figur = 0
    }
    basic.showNumber(Figur)
})
let Figur = 0
bitbot.select_model(BBModel.XL)
Figur = 0
basic.forever(function () {
	
})
