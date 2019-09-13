let csvToJson = require('convert-csv-to-json'); //Läser modulen

let fileInputName = 'myInputFile.csv'; //fileInputName blir variabel som då är = min csv kod.
let fileOutputName = 'myOutputFile.json'; //fileOutputName blir variabel till min blivande json kod.

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName); //Denna konverterar csv filen till json.
