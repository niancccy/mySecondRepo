const cityDB = require('all-the-cities')
const findCityByName = require("./findCityByName");
const { getSunrise, getSunset }  = require('sunrise-sunset-js')

const findCityName = function(cityName) {
  const result = cityDB. find(function(item){
    return item.name === cityName 
  })
  return result
}

// const cityLoc = cityDB.loc.coordinates.reverse();

var cityGeo = cityDB.filter(city => city.name.match('Chengdu'))[0].loc.coordinates;
var longitude = cityGeo[0]
var latitude = cityGeo[1]
// reversed?
console.log(latitude, longitude)

const sunRise = getSunrise(latitude, longitude);
const sunSet = getSunset(latitude, longitude);
console.log(sunRise, sunSet)
