const db = require('../db') //this is required
const User = require('../db/models/user');
const Product = require('../db/models/share');

const router = require('express').Router()

router.get('/', function(req, res, next) {
    User.findAll({
            include: [Product]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

router.get('/:id', function(req, res, next) {
    User.findOne({
            where:{id:req.params.id},
            include: [Product]
        })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(next);
});

module.exports = router
