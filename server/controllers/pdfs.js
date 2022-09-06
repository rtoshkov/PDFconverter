const router = require('express').Router()
const {folderToPdf} = require("../services/folderToPdf");
const {FOLDER, LINK_TO_REDIRECT} = require('../../config.js');

router.get('/', async (req, res) => {
    folderToPdf(FOLDER);
    res.status(301).redirect(LINK_TO_REDIRECT)
});

module.exports = router;

