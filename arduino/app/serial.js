const sensors = require('./sensors')
const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;

class ArduinoRead {

    constructor() {
        this.dadosTemperatura = [];
    }

    get List() {
        return this.dadosTemperatura;
    }


    geradorDados() {
        setInterval(() => {
            let dadosGerados = sensors.lm35();

            if (this.dadosTemperatura.length === 59) {
                let sum = this.dadosTemperatura.reduce((a, b) => a + b, 0);
                while (this.dadosTemperatura.length > 0) {
                    this.dadosTemperatura.pop();
                } 
            }

            console.log('Temperatura gerada: ', parseFloat(dadosGerados.toFixed(2)));
            this.dadosTemperatura.push(dadosGerados);
        }, 2000);
    }


    SetConnection() {

        SerialPort.list().then(listSerialDevices => {

            let listArduinoSerial = listSerialDevices.filter(serialDevice => {
                return serialDevice.vendorId == 2341 && serialDevice.productId == 43;
            });

            if (listArduinoSerial.length != 1) {
                this.geradorDados();
                throw new Error("Arduino não encontrado - Gerando dados");
            } else {
                console.log("Arduino encontrado na porta COM %s", listArduinoSerial[0].comName);
                return listArduinoSerial[0].comName;
            }
        }).then(comName => {
           // try {
                let arduino = new SerialPort(comName, { baudRate: 9600 });

                const parser = new Readline();
                arduino.pipe(parser);
             /*   
                arduino.on('close',() => {
                    console.log('Conexão perdida');
                    this.geradorDados();
                });
            */
                parser.on('data', (data) => {
                    console.log('Temperatura capturada: ', data);
                    this.dadosTemperatura.push(parseFloat(data));
                });
           // } catch (e) {
           //    this.geradorDados();
           // }

        }).catch(error => console.log(error));
    }
}

const serial = new ArduinoRead();
serial.SetConnection();

module.exports.ArduinoData = { List: serial.List}