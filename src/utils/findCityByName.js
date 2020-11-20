const cityDB = require('all-the-cities')
const findCityByName = function(cityName) {
  const result = cityDB. find(function(item){
    return item.name === cityName 
  })
  return result
}


module.exports = findCityByName