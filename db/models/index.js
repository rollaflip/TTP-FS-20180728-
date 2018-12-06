const User = require('./user')
const Share = require('./share');

User.hasMany(Share);
Share.belongsTo(User);

module.exports = {User, Share};
