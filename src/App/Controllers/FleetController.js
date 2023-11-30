const FleetService = require('../Services/FleetService');
const { Fleet, FleetModel } = require('../../Domain/Entities/Fleet');

class FleetController {
  static async createFleet(userId) {
    try {
      const fleetId = await FleetService.createFleet(userId);
      console.log(`Controller : Fleet created successfully with ID: ${fleetId}`);
      return fleetId;
      
    } catch (error) {
      console.error(`Controller : Error creating fleet: ${error.message}`);
    }
  }

  static async registerVehicle(fleetId, vehiclePlateNumber) {
    try {
      await FleetService.registerVehicle(fleetId, vehiclePlateNumber);
      console.log(`Controller : Vehicle ${vehiclePlateNumber} registered to fleet ${fleetId}`);
    } catch (error) {
      console.error(`Controller : Error registering vehicle: ${error.message}`);
    }
  }

  static async localizeVehicle(vehiclePlateNumber, lat, lng, alt) {
    try {
      await FleetService.localizeVehicle(vehiclePlateNumber, lat, lng, alt);
      console.log(`Controller : Vehicle ${vehiclePlateNumber} localized.`);
    } catch (error) {
      console.error(`Controller : Error localizing vehicle: ${error.message}`);
    }
  }
}

module.exports = FleetController;
