'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'courses', // table name
        'course_sub_category_id', // new field name
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue:0
        },
      )
    ]);
  },

  down(queryInterface, Sequelize) {
    // logic for reverting the changes
    return Promise.all([
      queryInterface.removeColumn('courses', 'course_sub_category_id'),
    ]);
  },
};
