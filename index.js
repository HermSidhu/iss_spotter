const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP(ip, (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Here are your coordinates:', coords);
// });

// fetchISSFlyOverTimes({ longitude, latitude }, (error, passTimes) => {
//   if (error) {
//     console.log("it didn't work!", error);
//     return;
//   }
//   console.log("It worked! Here are your ISS fly over times:", passTimes);
// });

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`)
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});