"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var sequelize = require('../../Infra/Database/DatabaseConfig'); // Definition of the structure of the Vehicle table in the database


var VehicleModel = sequelize.define('Vehicle', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  plateNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  location: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
    allowNull: true
  }
});

var Vehicle =
/*#__PURE__*/
function () {
  function Vehicle(plateNumber) {
    _classCallCheck(this, Vehicle);

    this.plateNumber = plateNumber;
    this.location = [];
  }

  _createClass(Vehicle, [{
    key: "save",
    value: function save() {
      var vehicleInstance;
      return regeneratorRuntime.async(function save$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(VehicleModel.create({
                plateNumber: this.plateNumber,
                location: this.location
              }));

            case 2:
              vehicleInstance = _context.sent;
              return _context.abrupt("return", vehicleInstance);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }]);

  return Vehicle;
}();

module.exports = {
  VehicleModel: VehicleModel,
  Vehicle: Vehicle
};