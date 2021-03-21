input.onButtonPressed(Button.A, function () {
    steg = 0
    basic.showNumber(steg)
})
input.onGesture(Gesture.Shake, function () {
    steg += 1
    basic.showNumber(steg)
})
let steg = 0
steg = 0
basic.showNumber(steg)
