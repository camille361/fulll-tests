const { VehicleModel, Vehicle } = require('../../Domain/Entities/Vehicle');
const RegisterVehicleCommand = require('../Commands/RegisterVehicleCommand'); 

class RegisterVehicleHandler {

    execute(fleet, vehicle) {
        const registerVehicleCommand = new RegisterVehicleCommand(vehicle);
        const { vehicle_attribute } = registerVehicleCommand;

        // Checking if the vehicule is already into the fleet
        if (fleet.id_list.includes(vehicle_attribute.id)) {
            throw new Error("This vehicule has already been registered into this fleet.")
        } else {
            fleet.registerVehicle(vehicle_attribute);
        }
    }
}

module.exports = RegisterVehicleHandler;