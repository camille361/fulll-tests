"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FleetHandler = require('../CommandHandlers/FleetHandler');

var FleetService =
/*#__PURE__*/
function () {
  function FleetService() {
    _classCallCheck(this, FleetService);
  }

  _createClass(FleetService, null, [{
    key: "createFleet",
    value: function createFleet(userId) {
      var fleetId;
      return regeneratorRuntime.async(function createFleet$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(FleetHandler.createFleet(userId));

            case 2:
              fleetId = _context.sent;
              return _context.abrupt("return", fleetId);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "registerVehicle",
    value: function registerVehicle(fleetId, vehiclePlateNumber) {
      return regeneratorRuntime.async(function registerVehicle$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(FleetHandler.registerVehicle(fleetId, vehiclePlateNumber));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "localizeVehicle",
    value: function localizeVehicle(vehiclePlateNumber, lat, lng, alt) {
      return regeneratorRuntime.async(function localizeVehicle$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(FleetHandler.localizeVehicle(vehiclePlateNumber, lat, lng, alt));

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return FleetService;
}();

module.exports = FleetService;