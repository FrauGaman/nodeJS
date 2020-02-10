const fs = require('fs');

//get binary data from file
const dataFromJSON = fs.readFileSync('1-json.json');
const dataJSON = dataFromJSON.toString();
const dataObject = JSON.parse(dataJSON);
dataObject.name = 'Margarita';
dataObject.age = 26;
const newJSONData = JSON.stringify(dataObject);
fs.writeFileSync('1-json.json', newJSONData);
