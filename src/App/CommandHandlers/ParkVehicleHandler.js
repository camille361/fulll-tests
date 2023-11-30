const { VehicleModel, Vehicle } = require('../../Domain/Entities/Vehicle');
const ParkVehicleCommand = require('../Commands/ParkVehicleCommand'); 

class ParkVehicleHandler {

    execute(vehicle, location) {
        const parkVehicleCommand = new ParkVehicleCommand(vehicle, location);
        const { vehicle_attribute, location_attribute } = parkVehicleCommand;
        
        // Checking if the current location is the same
        if (arraysAreEqual(vehicle_attribute.location, location_attribute)) {
            throw new Error("Vehicle is already parked at this location");
        } else {
            vehicle.parkVehicle(location);
        }
    }
}

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}


module.exports = ParkVehicleHandler;