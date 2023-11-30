"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FleetService = require('../Services/FleetService');

var _require = require('../../Domain/Entities/Fleet'),
    Fleet = _require.Fleet,
    FleetModel = _require.FleetModel;

var FleetController =
/*#__PURE__*/
function () {
  function FleetController() {
    _classCallCheck(this, FleetController);
  }

  _createClass(FleetController, null, [{
    key: "createFleet",
    value: function createFleet(userId) {
      var fleetId;
      return regeneratorRuntime.async(function createFleet$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(FleetService.createFleet(userId));

            case 3:
              fleetId = _context.sent;
              console.log("Controller : Fleet created successfully with ID: ".concat(fleetId));
              return _context.abrupt("return", fleetId);

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error("Controller : Error creating fleet: ".concat(_context.t0.message));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 8]]);
    }
  }, {
    key: "registerVehicle",
    value: function registerVehicle(fleetId, vehiclePlateNumber) {
      return regeneratorRuntime.async(function registerVehicle$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return regeneratorRuntime.awrap(FleetService.registerVehicle(fleetId, vehiclePlateNumber));

            case 3:
              console.log("Controller : Vehicle ".concat(vehiclePlateNumber, " registered to fleet ").concat(fleetId));
              _context2.next = 9;
              break;

            case 6:
              _context2.prev = 6;
              _context2.t0 = _context2["catch"](0);
              console.error("Controller : Error registering vehicle: ".concat(_context2.t0.message));

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[0, 6]]);
    }
  }, {
    key: "localizeVehicle",
    value: function localizeVehicle(vehiclePlateNumber, lat, lng, alt) {
      return regeneratorRuntime.async(function localizeVehicle$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return regeneratorRuntime.awrap(FleetService.localizeVehicle(vehiclePlateNumber, lat, lng, alt));

            case 3:
              console.log("Controller : Vehicle ".concat(vehiclePlateNumber, " localized."));
              _context3.next = 9;
              break;

            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](0);
              console.error("Controller : Error localizing vehicle: ".concat(_context3.t0.message));

            case 9:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, [[0, 6]]);
    }
  }]);

  return FleetController;
}();

module.exports = FleetController;