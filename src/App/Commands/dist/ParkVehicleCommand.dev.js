"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParkVehicleCommand = function ParkVehicleCommand(vehicle, location) {
  _classCallCheck(this, ParkVehicleCommand);

  this.vehicle_attribute = vehicle;
  this.location_attribute = location;
};

module.exports = ParkVehicleCommand;