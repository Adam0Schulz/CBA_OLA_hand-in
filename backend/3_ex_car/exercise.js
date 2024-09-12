// Exercise no. 1 - car exercise

class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    getCarInfo() {
        return make + " " + model + " " + year
    }

    start() {
        this.isRunning = true
        return 'The car has started'
    }

    stop() {
        this.isRunning = false
        return 'The car has stopped'
    }

}


const carOne = new Car("hyundai", "i20", "2002")
const carTwo = new Car("Ferrari", "La Ferrari", "2020")

// add the console logs and it is done
carOne.getCarInfo()
carOne.start()
carOne.stop()
carTwo.getCarInfo()
carTwo.start()
carTwo.stop()