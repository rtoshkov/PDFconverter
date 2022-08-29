const express = require('express');
const pdfController = require('./controllers/pdfs.js');
// const cors = require('./middleware/cors.js');


const app = express();
app.use('/pdfConverter', pdfController);
app.use('/', (req, res)=> res.json({message:'The service is up'}))

app.listen(3030, () => console.log('REST SERVICE running on port 3030'));
