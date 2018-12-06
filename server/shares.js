const db = require('../db') //this is required
const Share = require('../db/models/share');
const User = require('../db/models/user');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    Share.findAll({
            include: [User]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    Share.findOne({
            where:{id:req.params.id},
            include: [User]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router;
