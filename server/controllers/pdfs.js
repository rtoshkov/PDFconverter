const router = require('express').Router()
const {folderToPdf} = require("../services/folderToPdf");
const {FOLDER} = require('../../config.js');

router.get('/', async (req, res) => {
    folderToPdf(FOLDER);
    res.status(200).json({success: 'success'});
});

module.exports = router;

