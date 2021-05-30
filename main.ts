bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    RX_Data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (RX_Data.compare("U") == 0) {
        basic.showString("U")
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 10)
    } else if (RX_Data.compare("D") == 0) {
        basic.showString("D")
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, -10)
    } else if (RX_Data.compare("R") == 0) {
        basic.showString("R")
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
    } else if (RX_Data.compare("L") == 0) {
        basic.showString("L")
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 10)
    } else {
        if (RX_Data.compare("S") == 0) {
            basic.showString("Durdu")
        }
    }
})
let RX_Data = ""
basic.showString("BLE")
bluetooth.startTemperatureService()
bluetooth.startUartService()
RX_Data = ""
