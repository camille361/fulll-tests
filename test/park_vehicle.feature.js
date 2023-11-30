const assert = require('assert');
const RegisterVehicleHandler = require('../src/App/CommandHandlers/RegisterVehicleHandler');
const ParkVehicleHandler = require('../src/App/CommandHandlers/ParkVehicleHandler');
const Fleet = require('../src/Domain/Entities/Fleet');
const Vehicle = require('../src/Domain/Entities/Vehicle');

/* Ces tests ne fonctionnent qu'avec la partie 1 de l'exercice */
describe('Park a vehicle', () => {
    let fleet = new Fleet(20);
    let vehicle = new Vehicle(21); 

    // Background
    const registerHandler = new RegisterVehicleHandler(); 
    registerHandler.execute(fleet, vehicle); // Register the vehicle into the fleet
      
    it('should park the vehicle', () => {
      // Given
      const location = [1,-1,0];
      const handler = new ParkVehicleHandler();
      // When
      handler.execute(vehicle, location);

      // Then
      assert.strictEqual(vehicle.location, location);
    });
  
    it("shouldn't park the vehicle to the same location", () => {
      // Given
      const location = [1,-1,0]; // The vehicule is already parked at this location
      const handler = new ParkVehicleHandler();
  
      // When & Then
      assert.throws(() => {
        handler.execute(vehicle, location);
      }, /already parked at this location/); 
    });
    
});