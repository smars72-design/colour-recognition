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
huskylens.initMode(protocolAlgorithm.ALGORITHM_COLOR_RECOGNITION)
basic.showIcon(IconNames.Yes)
pressCount = 1
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeOSD("RED", 150, 30)
    } else if (huskylens.isAppear(2, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeOSD("GREEN", 150, 30)
    } else if (huskylens.isAppear(3, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        huskylens.writeOSD("BLUE", 150, 30)
    } else {
        huskylens.clearOSD()
    }
})
