'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable('Fleets', {
              id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
              },
              userId: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              plateNumberList: {
                type: Sequelize.ARRAY(Sequelize.STRING),
                allowNull: true
              },
              createdAt: {
                type: Sequelize.DATE,
                allowNull: false
              },
              updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
              }
            }));

          case 2:
            _context.next = 4;
            return regeneratorRuntime.awrap(queryInterface.createTable('Vehicles', {
              id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
              },
              plateNumber: {
                type: Sequelize.STRING,
                allowNull: false
              },
              location: {
                type: Sequelize.ARRAY(Sequelize.INTEGER),
                allowNull: true
              },
              createdAt: {
                type: Sequelize.DATE,
                allowNull: false
              },
              updatedAt: {
                type: Sequelize.DATE,
                allowNull: false
              }
            }));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function down$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(queryInterface.dropTable('Fleets'));

          case 2:
            _context2.next = 4;
            return regeneratorRuntime.awrap(queryInterface.dropTable('Vehicles'));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};