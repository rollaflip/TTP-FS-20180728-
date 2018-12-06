const Sequelize = require('sequelize')
const db = require('../index.js');
const User = require('../models')

const Shares = db.define("share", {
  ticker: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL
  },
  quantity: {
    type: Sequelize.INTEGER
  }
});

Shares.findByUser = async function(user) {
  const data = await Shares.findAll({
    include: [{ model: User, where: { name: user } }]
  });
  return data;
};

module.exports = Shares;
