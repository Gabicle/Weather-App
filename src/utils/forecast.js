const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/6db4433e7c1329e903baeac218da975b/${latitude},${longitude}`;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Unable to Connect to weather services", undefined);
    } else if (body.error) {
      callback("Location not found", undefined);
    } else {
      const result = ` ${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain`;

      callback(undefined, result);
    }
  });
};

module.exports = forecast;
