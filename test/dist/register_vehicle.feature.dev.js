"use strict";

var assert = require('assert');

var RegisterVehicleHandler = require('../src/App/CommandHandlers/RegisterVehicleHandler');

var Fleet = require('../src/Domain/Entities/Fleet');

var Vehicle = require('../src/Domain/Entities/Vehicle');
/* Ces tests ne fonctionnent qu'avec la partie 1 de l'exercice */


describe('Register a vehicle', function () {
  var fleet = new Fleet(20);
  it('should register a vehicle into the fleet', function () {
    // Given
    var vehicle = new Vehicle(21);
    var handler = new RegisterVehicleHandler(); // When

    handler.execute(fleet, vehicle); // Then

    assert.ok(fleet.id_list.includes(vehicle.id));
  });
  it("shouldn't register the same vehicle twice", function () {
    // Given
    var vehicle = new Vehicle(21);
    var handler = new RegisterVehicleHandler(); // When & Then

    assert["throws"](function () {
      handler.execute(fleet, vehicle);
    }, /already been registered/);
  });
  it('should allow the same vehicle to belong to more than one fleet', function () {
    // Given
    var otherFleet = new Fleet(10);
    var vehicle = new Vehicle(22);
    var handler = new RegisterVehicleHandler(); // When

    handler.execute(otherFleet, vehicle);
    handler.execute(fleet, vehicle); // Then

    assert.ok(fleet.id_list.includes(vehicle.id));
  });
});