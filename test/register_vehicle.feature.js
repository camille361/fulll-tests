const assert = require('assert');
const RegisterVehicleHandler = require('../src/App/CommandHandlers/RegisterVehicleHandler');
const Fleet = require('../src/Domain/Entities/Fleet');
const Vehicle = require('../src/Domain/Entities/Vehicle');

/* Ces tests ne fonctionnent qu'avec la partie 1 de l'exercice */
describe('Register a vehicle', () => {
    let fleet = new Fleet(20);
  
    it('should register a vehicle into the fleet', () => {
      // Given
      const vehicle = new Vehicle(21);
      const handler = new RegisterVehicleHandler();
  
      // When
      handler.execute(fleet, vehicle);
  
      // Then
      assert.ok(fleet.id_list.includes(vehicle.id));    
    });
  
    it("shouldn't register the same vehicle twice", () => {
      // Given
      const vehicle = new Vehicle(21);
      const handler = new RegisterVehicleHandler();
  
      // When & Then
      assert.throws(() => {
        handler.execute(fleet, vehicle);
      }, /already been registered/);
    });
  
    it('should allow the same vehicle to belong to more than one fleet', () => {
      // Given
      const otherFleet = new Fleet(10);
      const vehicle = new Vehicle(22);
      const handler = new RegisterVehicleHandler();
  
      // When
      handler.execute(otherFleet, vehicle);
      handler.execute(fleet, vehicle);
  
      // Then
      assert.ok(fleet.id_list.includes(vehicle.id));    
    });
  });