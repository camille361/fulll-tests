/* PART 1 OF THE EXERCISE*/
/*
const Vehicle = require('../../Domain/Entities/Vehicle');

class Fleet {
    constructor(nb_vehicles) {
        let list = [];
        for (let i = 0; i < nb_vehicles; i++) {
            const vehicle = new Vehicle(i);
            list.push(vehicle.id);
        }
      this.id_list = list; // List of vehicles's ids in this fleet
    }
  
    registerVehicle(vehicle) {
      this.id_list.push(vehicle.id);
    }
}

module.exports = Fleet;
*/

/* PART 2 OF THE EXERCISE*/
const { DataTypes } = require('sequelize');
const sequelize = require('../../Infra/Database/DatabaseConfig');

// Definition of the structure of the Fleet table in the database
const FleetModel = sequelize.define('Fleet', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  plateNumberList: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
});

class Fleet {
  constructor(userId) {
    this.userId = userId;
    this.plateNumberList = [];
  }

  async save() {
    const fleetInstance = await FleetModel.create({ userId: this.userId, plateNumberList: this.plateNumberList });
    return fleetInstance;
  }

}

module.exports = { Fleet, FleetModel };