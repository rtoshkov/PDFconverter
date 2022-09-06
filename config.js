const dotenv = require('dotenv');

dotenv.config();

const KEY = require(process.env.CREDENTIALS);

module.exports = {
    FOLDER: process.env.FOLDER,
    SHEET_ADDRESS: process.env.SHEET_ADDRESS,
    CREDENTIALS: KEY,
    TITLE_PROGRESS: process.env.TITLE_PROGRESS,
}