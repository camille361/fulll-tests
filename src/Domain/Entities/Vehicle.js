/* PART 1 OF THE EXERCISE*/
/*
class Vehicle {
    constructor(v_id) {
      this.id = v_id;
      this.location = [];
    }
  
    parkVehicle(location) {
      this.location = location;
    }
  
}
  
module.exports = Vehicle;
*/

/* PART 2 OF THE EXERCISE */
const { DataTypes } = require('sequelize');
const sequelize = require('../../Infra/Database/DatabaseConfig');

// Definition of the structure of the Vehicle table in the database
const VehicleModel = sequelize.define('Vehicle', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  plateNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  location: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true,
  },
});

class Vehicle {
  constructor(plateNumber) {
    this.plateNumber = plateNumber;
    this.location = [];
  }

  async save() {
    const vehicleInstance = await VehicleModel.create({ plateNumber: this.plateNumber, location: this.location });
    return vehicleInstance;
  }

}

module.exports = { VehicleModel, Vehicle };