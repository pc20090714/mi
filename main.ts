input.onButtonPressed(Button.A, function () {
    count += 1
    basic.showNumber(count)
})
input.onButtonPressed(Button.AB, function () {
    number = count
    while (count > 0) {
        count += -1
        basic.showNumber(count)
    }
})
input.onButtonPressed(Button.B, function () {
    count += 10
    basic.showNumber(count)
})
let number = 0
let count = 0
count = 0
