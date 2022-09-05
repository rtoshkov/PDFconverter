const fs = require('fs').promises;
const {docToPdf} = require('./docToPdf');


const ext = {
    doc: 'doc',
    docx: 'docx',
}


async function folderToPdf(folder) {
    const files = await fs.readdir(folder);
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.endsWith(ext.docx) || file.endsWith(ext.doc)) {
            await docToPdf(folder, file).catch(function (err) {
                console.log(`ERR: ${err}`);
            });
        }
    }
}

module.exports = {
    folderToPdf,
}
