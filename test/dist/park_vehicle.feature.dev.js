"use strict";

var assert = require('assert');

var RegisterVehicleHandler = require('../src/App/CommandHandlers/RegisterVehicleHandler');

var ParkVehicleHandler = require('../src/App/CommandHandlers/ParkVehicleHandler');

var Fleet = require('../src/Domain/Entities/Fleet');

var Vehicle = require('../src/Domain/Entities/Vehicle');
/* Ces tests ne fonctionnent qu'avec la partie 1 de l'exercice */


describe('Park a vehicle', function () {
  var fleet = new Fleet(20);
  var vehicle = new Vehicle(21); // Background

  var registerHandler = new RegisterVehicleHandler();
  registerHandler.execute(fleet, vehicle); // Register the vehicle into the fleet

  it('should park the vehicle', function () {
    // Given
    var location = [1, -1, 0];
    var handler = new ParkVehicleHandler(); // When

    handler.execute(vehicle, location); // Then

    assert.strictEqual(vehicle.location, location);
  });
  it("shouldn't park the vehicle to the same location", function () {
    // Given
    var location = [1, -1, 0]; // The vehicule is already parked at this location

    var handler = new ParkVehicleHandler(); // When & Then

    assert["throws"](function () {
      handler.execute(vehicle, location);
    }, /already parked at this location/);
  });
});