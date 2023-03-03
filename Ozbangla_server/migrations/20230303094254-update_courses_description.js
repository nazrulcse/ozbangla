'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('courses', 'description', {
                type: Sequelize.TEXT,
                allowNull: true,
            })
        ])
    },

    down: (queryInterface, Sequelize) => {
        return Promise.all([
            queryInterface.changeColumn('courses', 'description', {
                type: Sequelize.STRING,
                allowNull: true,
            })
        ])
    }
};
