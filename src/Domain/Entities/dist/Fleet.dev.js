"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

var sequelize = require('../../Infra/Database/DatabaseConfig'); // Definition of the structure of the Fleet table in the database


var FleetModel = sequelize.define('Fleet', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  plateNumberList: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  }
});

var Fleet =
/*#__PURE__*/
function () {
  function Fleet(userId) {
    _classCallCheck(this, Fleet);

    this.userId = userId;
    this.plateNumberList = [];
  }

  _createClass(Fleet, [{
    key: "save",
    value: function save() {
      var fleetInstance;
      return regeneratorRuntime.async(function save$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(FleetModel.create({
                userId: this.userId,
                plateNumberList: this.plateNumberList
              }));

            case 2:
              fleetInstance = _context.sent;
              return _context.abrupt("return", fleetInstance);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }]);

  return Fleet;
}();

module.exports = {
  Fleet: Fleet,
  FleetModel: FleetModel
};