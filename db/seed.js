const db = require('../db')




 db.didSync
   .then(() => db.sync({force: true}))
  //  .then(user => console.log(`Seeded ${user.length} user OK`))
  //  .then(shares => console.log(`Seeded ${shares.length} shares OK`))
  //  .catch(error => console.error(error))
   .finally(() => db.close())
