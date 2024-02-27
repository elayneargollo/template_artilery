const fs = require('fs');
const path = require('path');

let fileCounter = 0;

module.exports = {
  setFile: (requestParams, context, ee, next) => {
    try
    {
        console.log(`Module.exports is setFile`);

        const file = fs.readFileSync(path.join(__dirname, 'diploma.pdf'));
        context.vars.fileContent = file.toString('base64');
        
        context.vars.fileName = `diploma${fileCounter++}.pdf`;
        console.log(`Reading file: diploma${fileCounter}.pdf`);
        fileCounter++;

        console.log(typeof next);
        //return next();
    }
    catch (error)
    {
        console.log(`Error in setFile module: ${error}`);
    }
  }
};