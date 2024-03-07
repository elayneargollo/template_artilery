module.exports = {
    writeFile: writeFile,
    setupMultipartFormData: setupMultipartFormData,
    deleteFiles: deleteFiles,
};

const formData = require('form-data');
const fs = require('fs');
const filesFolder = "./files/";

function deleteFiles(requestParams, context, ee, next) {
    if (fs.existsSync(filesFolder)){
        fs.rmSync(filesFolder, { recursive: true, force: true });
        fs.mkdirSync(filesFolder);
        return next();
    }
}

function writeFile(requestParams, context, ee, next) {
    const fileName = filesFolder + Date.now() + "_" + (Math.random() + 1).toString(36).substring(7) + ".txt"
    let text = (Math.random() + 1).toString(36).substring(7);
    for (var i = 0; i < 200000; i++) {
        text += (Math.random() + 1).toString(36).substring(7);
    }
    fs.writeFileSync(fileName, text);
    return fileName;
}

function setupMultipartFormData(requestParams, context, ee, next) {
    const fileName = writeFile(requestParams, context, ee, next);
    const form = new formData();
    form.append('file', fs.createReadStream(fileName));
    requestParams.body = form;
    return next();
}
  