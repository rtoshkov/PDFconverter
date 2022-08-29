const router = require('express').Router()
const { exec } = require("child_process");

router.get('/', async (req, res) => {
    try {
        exec('python "D:\\JS Projects\\PDFconverter\\pythonConverter\\main.py"', (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    }catch(err){
        res.status(400).json({error: 'Please contact IT Admin'});
    }
    res.status(200).json({success: 'success'});
});

module.exports = router;

