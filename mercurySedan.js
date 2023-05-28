//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "silver", "250000");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maximumPassengers=5;
        this.passsengers=0;
        this.numberOfWheels=4;
        this.maximumSpeed=160;
        this.fuel=10;
        this.scheduleService= false;
    }

    loadPassenger(riders){
        if(this.passsengers<this.maximumPassengers){
            if(this.passsengers+riders<=this.maximumPassengers){
                this.passsengers=riders
                return this.passsengers
            } else {
                console.log(this.make + "" +this.model + " only seats " + this.maximumPassengers + ". There is insufficient space")
            }
         } else {
                console.log(this.make + "" +this.model + " is already full!")
        }
    }

    start(){
        if (this.fuel>0){
            console.log(this.make + "" +this.model + "engine has started.")
            return this.start = true
        } else {
            console.log(this.make + "" +this.model + "is out of fuel!")
            return this.start = false;
        }
    }

    scheduleService(){
        if (this.mileage>30000){
            console.log(this.make + "" +this.model + " is at " + this.mileage + " please service vehicle promptly.")
            return this.timeForMaintenance = true
        } else {
            console.log(this.make + "" +this.model + " is at " + this.mileage + " vehicle will need service in " + 30000 - this.mileage + " miles.")
            return this.timeForMaintenance = false;
        }
    }
}


//TO DO: Creating Instances and Testing Them


//You can use the same instance "v" of the Vehicle class above for the base class.

v.start()
v.scheduleService()
v.loadPassenger(3)

//Create at least two new instances of the Car class and test them here:
let fisker = new Car('Karma', 'Sedan', '2012', 'red', '25000')
let truck = new Car('Tacoma', 'Truck', '2008', 'orange', '100000')

fisker.start()
truck.scheduleService()
fisker.scheduleService()

console.log(v)
console.log(fisker)
console.log(truck)
