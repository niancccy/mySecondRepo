
const findCityByName = require('./findCityByName')
const distanceFrom = require('distance-from')


const distanceBetweenCities = function(cityA,cityB){
  const cityAData = findCityByName(cityA)
  const cityBData = findCityByName(cityB)

  console.log(cityAData)
  console.log(cityBData)

  const cityALoc = cityAData.loc.coordinates
  const cityBLoc = cityBData.loc.coordinates

  console.log(cityALoc)
  console.log(cityBLoc)

  const result= distanceFrom(cityALoc).to(cityBLoc).in('km')
  return result

}

// console.log(distanceBetweenCities('Chengdu','Chongqing'))
module.exports =distanceBetweenCities