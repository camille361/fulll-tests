"use strict";

var _require = require('commander'),
    program = _require.program;

var FleetController = require('../App/Controllers/FleetController');

program.version('1.0.0'); // Command to create a fleet

program.command('create <userId>').description('Create a new fleet').action(function _callee(userId) {
  var fleetId;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(FleetController.createFleet(userId));

        case 3:
          fleetId = _context.sent;
          console.log("FleetCLI : Fleet created with ID: ".concat(fleetId));
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.error("FleetCLI : Error creating fleet: ".concat(_context.t0.message));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Command to register a vehicle

program.command('register-vehicle <fleetId> <vehiclePlateNumber>').description('Register a vehicle in a fleet').action(function _callee2(fleetId, vehiclePlateNumber) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(FleetController.registerVehicle(fleetId, vehiclePlateNumber));

        case 3:
          console.log("FleetCLI : Vehicle registered in fleet ".concat(fleetId));
          _context2.next = 9;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          console.error("FleetCLI : Error registering vehicle: ".concat(_context2.t0.message));

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
}); // Command to park a vehicle

program.command('localize-vehicle <fleetId> <vehiclePlateNumber> <lat> <lng> [alt]').description('Locate a vehicle in a fleet').action(function _callee3(fleetId, vehiclePlateNumber, lat, lng, alt) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(FleetController.localizeVehicle(vehiclePlateNumber, lat, lng, alt));

        case 3:
          console.log("FleetCLI : Vehicle location updated.");
          _context3.next = 9;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          console.error("FleetCLI : Error updating vehicle location: ".concat(_context3.t0.message));

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
program.parse(process.argv);