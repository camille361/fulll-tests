const FleetHandler = require('../CommandHandlers/FleetHandler');

class FleetService {
  static async createFleet(userId) {

    const fleetId = await FleetHandler.createFleet(userId);
    return fleetId;
  }

  static async registerVehicle(fleetId, vehiclePlateNumber) {
    await FleetHandler.registerVehicle(fleetId, vehiclePlateNumber);
  }

  static async localizeVehicle(vehiclePlateNumber, lat, lng, alt) {
    await FleetHandler.localizeVehicle(vehiclePlateNumber, lat, lng, alt);
  }
}

module.exports = FleetService;
