"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../../Domain/Entities/Vehicle'),
    VehicleModel = _require.VehicleModel,
    Vehicle = _require.Vehicle;

var RegisterVehicleCommand = require('../Commands/RegisterVehicleCommand');

var RegisterVehicleHandler =
/*#__PURE__*/
function () {
  function RegisterVehicleHandler() {
    _classCallCheck(this, RegisterVehicleHandler);
  }

  _createClass(RegisterVehicleHandler, [{
    key: "execute",
    value: function execute(fleet, vehicle) {
      var registerVehicleCommand = new RegisterVehicleCommand(vehicle);
      var vehicle_attribute = registerVehicleCommand.vehicle_attribute; // Checking if the vehicule is already into the fleet

      if (fleet.id_list.includes(vehicle_attribute.id)) {
        throw new Error("This vehicule has already been registered into this fleet.");
      } else {
        fleet.registerVehicle(vehicle_attribute);
      }
    }
  }]);

  return RegisterVehicleHandler;
}();

module.exports = RegisterVehicleHandler;