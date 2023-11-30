"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../../Domain/Entities/Vehicle'),
    VehicleModel = _require.VehicleModel,
    Vehicle = _require.Vehicle;

var ParkVehicleCommand = require('../Commands/ParkVehicleCommand');

var ParkVehicleHandler =
/*#__PURE__*/
function () {
  function ParkVehicleHandler() {
    _classCallCheck(this, ParkVehicleHandler);
  }

  _createClass(ParkVehicleHandler, [{
    key: "execute",
    value: function execute(vehicle, location) {
      var parkVehicleCommand = new ParkVehicleCommand(vehicle, location);
      var vehicle_attribute = parkVehicleCommand.vehicle_attribute,
          location_attribute = parkVehicleCommand.location_attribute; // Checking if the current location is the same

      if (arraysAreEqual(vehicle_attribute.location, location_attribute)) {
        throw new Error("Vehicle is already parked at this location");
      } else {
        vehicle.parkVehicle(location);
      }
    }
  }]);

  return ParkVehicleHandler;
}();

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

module.exports = ParkVehicleHandler;