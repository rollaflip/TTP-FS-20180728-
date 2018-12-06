const Sequelize = require('sequelize');
const db = require('../index.js');

const User = db.define("user", {
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  balance: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 5000.0
  }
});

User.beforeCreate((user, options) => {
  if (user.balance === "") {
    user.balance = 5000.0;
  }
});

module.exports = User;
