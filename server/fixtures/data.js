Meteor.startup(function () {
  console.log('Starting...');
  if(Data.find().count() === 0) {
    var fs = Npm.require('fs');
    fs.readFile(process.cwd() + '/../web.browser/app/data/data.csv', 'utf8',
      Meteor.bindEnvironment(function (err, out) {
        if (err) {
            console.log('Error: ' + err);
            return;
        }
        processData(out);
      })
    );
  }
});

function processData(text) {
  console.log('Received data as text...');

  var secondIteration = false;
  Papa.parse(text, {
    header: true,
    complete: function (results) {
      if (secondIteration) return;
      else {
        secondIteration = true;
        console.log('Data parsed successfully...');
        insertData(results);
      }
    }
  });
}

function insertData(results) {
  console.log('Inserting into MongoDB...');

  for (var i = 0; i < results.data.length; i++) {
    var stat = results.data[i];
    var toInsert = {
      dID : parseInt(stat.DOEID),
      region : parseInt(stat.REGIONC),
      division : parseInt(stat.DIVISION),
      domain : parseInt(stat.REPORTABLE_DOMAIN),
      type : parseInt(stat.TYPEHUQ),
      climate : parseInt(stat.Climate_Region_Pub),
      AIA : parseInt(stat.AIA_Zone),
      isUrban :  (stat.UR === 'U') ? true : false,
      isOwned : (stat.KOWNRENT === '1') ? true : false,
      built :  parseInt(stat.YEARMADERANGE),
      totalBTU : parseInt(stat.TOTALBTU),
      heatBTU : parseInt(stat.TOTALBTUSPH),
      coolBTU : parseInt(stat.TOTALBTUCOL),
      waterBTU : parseInt(stat.TOTALBTUWTH),
      refBTU : parseInt(stat.TOTALBTURFG),
      otherBTU : parseInt(stat.TOTALBTUOTH),
      totalDol : parseInt(stat.TOTALDOL),
      heatDol : parseInt(stat.TOTALDOLSPH),
      coolDol : parseInt(stat.TOTALDOLCOL),
      waterDol : parseInt(stat.TOTALDOLWTH),
      refDol : parseInt(stat.TOTALDOLRFG),
      otherDol : parseInt(stat.TOTALDOLOTH),
      sqft : parseInt(stat.TOTSQFT),
      isProg : (stat.PROTHERM === '1') ? true : false,
      income : parseInt(stat.MONEYPY),
      occupants : parseInt(stat.NHSLDMEM)
    };

    try { Data.insert(toInsert); }
    catch (exception) { console.log("Invalid Entry"); }
  }
  console.log("Inserted survey results into MongoDB");
}
