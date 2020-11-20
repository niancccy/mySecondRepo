const findCityByName = require("./findCityByName");
const airportDB = require("airport-data");
const distanceFrom = require("distance-from");

const findClosestAirport = function (cityName) {
  // get city location

  const cityData = findCityByName(cityName);
  // console.log(cityData);

  //get city coordinate
  const cityLoc = cityData.loc.coordinates.reverse();
  // console.log(cityLoc);

  // calculate the distance between my city and all the airport in the db
  for (var ii = 0; ii < airportDB.length; ii = ii + 1) {
    var airportData = airportDB[ii];
//get lat and long
    var airportLoc = [airportData.latitude, airportData.longitude];
//calculate the distance
    var distance = distanceFrom(cityLoc).to(airportLoc).in("km");
// get the min distance
    if (ii === 0) {
      var minDistance = distance;
      var minAirport = airportData;
    } else {
      if (distance < minDistance) {
        minDistance = distance;
        minAirport = airportData;
        
      }
    }
  }
  console.log(minDistance);
  console.log(minAirport)
};

// findClosestAirport("Chengdu");
// console.log(airportDB);















const findCloseAirport = function (cityName) {
  // get city location

  const cityData = findCityByName(cityName);
  // console.log(cityData);

  //get city coordinate
  const cityLoc = cityData.loc.coordinates.reverse();
  // console.log(cityLoc);
  const newAirportDb = airportDB.map(function(item){
    var airportLoc =[item.latitude, item.longitude]
    var distance = distanceFrom(cityLoc).to(airportLoc).in('km')

    const newAirportData = {
      id: item.id,
      name:item.name,
      city:item.city,
      country: item.country,
      iata:item.iata,
      icao:item.icao,
      distanceFromCity:distance


    }
    return newAirportData

  })


//sort the array according to the distances and return the first position(the one with smallest distance)
const result = newAirportDb.sort(function(itemA,itemB){
  return itemA.distanceFromCity - itemB.distanceFromCity
})
return result[0]

}
console.log(findCloseAirport('Chengdu'))
