"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../../Domain/Entities/Fleet'),
    Fleet = _require.Fleet,
    FleetModel = _require.FleetModel;

var _require2 = require('../../Domain/Entities/Vehicle'),
    VehicleModel = _require2.VehicleModel,
    Vehicle = _require2.Vehicle;

var FleetHandler =
/*#__PURE__*/
function () {
  function FleetHandler() {
    _classCallCheck(this, FleetHandler);
  }

  _createClass(FleetHandler, null, [{
    key: "createFleet",
    // Create a fleet
    value: function createFleet(userId) {
      var newFleet, fleet;
      return regeneratorRuntime.async(function createFleet$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              newFleet = new Fleet(userId);
              _context.next = 3;
              return regeneratorRuntime.awrap(newFleet.save());

            case 3:
              fleet = _context.sent;
              return _context.abrupt("return", fleet.id);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    } // Register a vehicle

  }, {
    key: "registerVehicle",
    value: function registerVehicle(fleetId, vehiclePlateNumber) {
      var fleet, plateNumberExists, vehicle;
      return regeneratorRuntime.async(function registerVehicle$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(FleetModel.findOne({
                where: {
                  id: fleetId
                }
              }));

            case 2:
              fleet = _context2.sent;

              if (fleet) {
                _context2.next = 5;
                break;
              }

              throw new Error("Fleet with id ".concat(fleetId, " not found"));

            case 5:
              plateNumberExists = fleet.plateNumberList.includes(vehiclePlateNumber);

              if (!plateNumberExists) {
                _context2.next = 8;
                break;
              }

              throw new Error("Vehicle with plate number ".concat(vehiclePlateNumber, " is already registered in the fleet"));

            case 8:
              vehicle = new Vehicle(vehiclePlateNumber);
              _context2.next = 11;
              return regeneratorRuntime.awrap(vehicle.save());

            case 11:
              _context2.next = 13;
              return regeneratorRuntime.awrap(FleetModel.update({
                plateNumberList: [].concat(_toConsumableArray(fleet.plateNumberList), [vehiclePlateNumber])
              }, {
                where: {
                  id: fleetId
                }
              }));

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      });
    } // Update the location of a vehicle

  }, {
    key: "localizeVehicle",
    value: function localizeVehicle(vehiclePlateNumber, lat, lng, alt) {
      var vehicle, newLocation;
      return regeneratorRuntime.async(function localizeVehicle$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(VehicleModel.findOne({
                where: {
                  plateNumber: vehiclePlateNumber
                }
              }));

            case 2:
              vehicle = _context3.sent;

              if (vehicle) {
                _context3.next = 5;
                break;
              }

              throw new Error("Vehicle with plate number ".concat(vehiclePlateNumber, " not found"));

            case 5:
              newLocation = [lat, lng, alt];
              _context3.next = 8;
              return regeneratorRuntime.awrap(VehicleModel.update({
                location: newLocation
              }, {
                where: {
                  plateNumber: vehiclePlateNumber
                }
              }));

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return FleetHandler;
}();

module.exports = FleetHandler;