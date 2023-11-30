const { program } = require('commander');
const FleetController = require('../App/Controllers/FleetController');

program.version('1.0.0');

// Command to create a fleet
program
  .command('create <userId>')
  .description('Create a new fleet')
  .action(async (userId) => {
    try {
      const fleetId = await FleetController.createFleet(userId);
      console.log(`FleetCLI : Fleet created with ID: ${fleetId}`);
    } catch (error) {
      console.error(`FleetCLI : Error creating fleet: ${error.message}`);
    }
  });

// Command to register a vehicle
program
  .command('register-vehicle <fleetId> <vehiclePlateNumber>')
  .description('Register a vehicle in a fleet')
  .action(async (fleetId, vehiclePlateNumber) => {
    try {
      await FleetController.registerVehicle(fleetId, vehiclePlateNumber);
      console.log(`FleetCLI : Vehicle registered in fleet ${fleetId}`);
    } catch (error) {
      console.error(`FleetCLI : Error registering vehicle: ${error.message}`);
    }
  });

// Command to park a vehicle
program
  .command('localize-vehicle <fleetId> <vehiclePlateNumber> <lat> <lng> [alt]')
  .description('Locate a vehicle in a fleet')
  .action(async (fleetId, vehiclePlateNumber, lat, lng, alt) => {
    try {
      await FleetController.localizeVehicle(vehiclePlateNumber, lat, lng, alt);
      console.log(`FleetCLI : Vehicle location updated.`);
    } catch (error) {
      console.error(`FleetCLI : Error updating vehicle location: ${error.message}`);
    }
  });

program.parse(process.argv);
