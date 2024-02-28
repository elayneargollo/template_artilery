module.exports = {
  setFile: setFile
};

const formData = require('form-data');
const fs = require('fs');

function setFile(requestParams, context, ee, next) {
  console.log("setFile");

  const form = new formData();
  form.append('file', fs.createReadStream('./diploma.pdf'));
  requestParams.body = form;
  return next();
}  
