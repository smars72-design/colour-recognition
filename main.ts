input.onButtonPressed(Button.A, function () {
    if (pressCount == 1) {
        huskylens.writeLearn1(1)
        pressCount += 1
    } else if (pressCount == 2) {
        huskylens.writeLearn1(2)
        pressCount += 1
    } else if (pressCount == 3) {
        huskylens.writeLearn1(3)
        pressCount = 0
    }
})
let pressCount = 0
huskylens.initI2c()
huskylens.forgetLearn()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_RECOGNITION)
basic.showIcon(IconNames.Yes)
pressCount = 1
basic.forever(function () {
    huskylens.request()
    basic.showString("" + (huskylens.readBox_ss(1, Content3.ID)))
})
