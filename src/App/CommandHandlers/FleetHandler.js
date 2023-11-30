const { Fleet, FleetModel } = require('../../Domain/Entities/Fleet');
const { VehicleModel, Vehicle } = require('../../Domain/Entities/Vehicle');

class FleetHandler {

  // Create a fleet
  static async createFleet(userId) {
    const newFleet = new Fleet(userId);
    const fleet = await newFleet.save(); // Saving the new fleet in the database
    return fleet.id;
  }

  // Register a vehicle
  static async registerVehicle(fleetId, vehiclePlateNumber) {
    let fleet = await FleetModel.findOne({ where: { id: fleetId } });

    if (!fleet) {
      throw new Error(`Fleet with id ${fleetId} not found`);
    }

    const plateNumberExists = fleet.plateNumberList.includes(vehiclePlateNumber);
    if (plateNumberExists) {
        throw new Error(`Vehicle with plate number ${vehiclePlateNumber} is already registered in the fleet`);
    }

    const vehicle = new Vehicle(vehiclePlateNumber);
    await vehicle.save();  // Saving the new vehicle in the database

   await FleetModel.update(
    { plateNumberList: [...fleet.plateNumberList, vehiclePlateNumber] },
    { where: { id: fleetId } } ); // Adding the new PlateNumber to list of this fleet in the database 
  }

  // Update the location of a vehicle
  static async localizeVehicle(vehiclePlateNumber, lat, lng, alt) {
    const vehicle = await VehicleModel.findOne({ where: { plateNumber: vehiclePlateNumber } });
    if (!vehicle) {
      throw new Error(`Vehicle with plate number ${vehiclePlateNumber} not found`);
    }

    const newLocation = [lat, lng, alt];

    await VehicleModel.update(
      { location: newLocation }, 
      { where: { plateNumber: vehiclePlateNumber } }); // Updating the location of the vehicle in the database
  }
}

module.exports = FleetHandler;
