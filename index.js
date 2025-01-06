  // You may use the following exampleBikeNetworks array to test your functions inside of this file. This is the same array of bikeNetworks that is used in the tests. To test your code manually, call the function you'd like to test, give it the exampleBikeNetworks array for input, and run this file with `node index.js` in your terminal. You will need to be in the directory where the `index.js` file is kept for the above command to work. Finally, remember that in order for you to see output on the command line, you must log something out.

  // KEEP IN MIND that your functions must still have and use a parameter for accepting all bike networks.

const exampleBikeNetworks = require('./bike-networks');

/**
 * getAllBikeNetworkNames()
 * -----------------------------
 * Returns all of names from an array of networks. If the inputted `networks` array is empty, return `[]`.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are network names.
 *
 * EXAMPLE:
 *  getAllBikeNetworkNames(networks);
 *  //> [
      "UBike",
      "Bay Wheels",
      "Relay Bike Share",
      "BikeRecife",
      "BikeSampa",
      "BikeRio",
      "BikeSalvador",
      "BikePOA",
      "MIBICI",
      "Just Eat Cycles",
      // ...
    ];
 */
function getAllBikeNetworkNames(networks) {
  const names = [];
  for (let i = 0; i < networks.length; i++) {
    names.push(networks[i].name)
  }

  return names;
}

function getAllBikeNetworkNamesUsingMap(networks) {
  return networks.map((network) => network.name)
}

/**
 * getAllBikeNetworksInTheUS()
 * -----------------------------
 * Returns an array of all networks located in the United States (i.e. "US"). If there are no networks in the "US" or the input is empty, return an empty array.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @returns {Object[]} An array of objects, where each network object has a location in the "US".
 * 
 * EXAMPLE:
 *  getAllBikeNetworksInTheUS(networks);
 *  //> [
      {  
        company: ["Clean Energy Coalition", "BCycle, LLC"],
        gbfs_href: "https://gbfs.bcycle.com/bcycle_arborbike/gbfs.json",
        href: "/v2/networks/arborbike",
        id: "arborbike",
        location: {
          city: "Ann Arbor, MI",
          country: "US",
          latitude: 42.27853,
          longitude: -83.74536,
        },
        name: "ArborBike",
      },
      // ...
    ]
 */
function getAllBikeNetworksInTheUS(networks) {
  const usNetworks = [];
  for (let i = 0; i < networks.length; i++) {
    if (networks[i].location.country === 'US') {
      usNetworks.push(networks[i])
    }
  }

  return usNetworks
}

function getAllBikeNetworksInTheUSUsingFilter(networks) {
  return networks.filter((network) => network.location.country === 'US')
}

/**
 * getAllCoordinates()
 * -----------------------------
 * Returns an array of all coordinates from an array of networks. If the inputted `networks` array is empty, return an empty array.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are network coordinates.
 * 
 * EXAMPLE:
 * getAllCoordinates(networks);
 * //> [
 * "48.856614, 2.3522219"
 * "42.85, 13.583333",
 * "45.695, 9.67"
 * // ...
 */
function getAllCoordinates(networks) {
  const coordinates = [];
  for (let i = 0; i < networks.length; i++) {
    coordinates.push(networks[i].location.latitude + ', ' + networks[i].location.longitude)
  }

  return coordinates
}

function getAllCoordinatesUsingMap(networks) {
  return networks.map((network) => network.location.latitude + ', ' + network.location.longitude)
}

/** 
 * bikeNetworkExists()
 * -----------------------------
 * Returns a boolean indicating whether a network with the inputted name exists in the array of networks. If the inputted `networks` array is empty, return `false`.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @param {string} name - A network name.
 * @returns {boolean} A boolean indicating whether a network with the inputted name exists.
 */

function bikeNetworkExists(networks, name) {
  for (let i = 0; i < networks.length; i++) {
    if (networks[i].name.toLowerCase().includes(name.toLowerCase())) {
      return true
    }
  }

  return false
}

function bikeNetworkExistsUsingSome(networks, name) {
  return networks.some((network) => network.name.toLowerCase().includes(name.toLowerCase()))
}

/**
 * getBikeNetworkWithLowestLongitude()
 * -----------------------------
 * Returns the bike network which has the smallest value for `longitude`. If there are no networks in the input, returns `null`.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @returns {Object} The bike network with the smallest value for `longitude`.
 * 
 * EXAMPLE:
 *  getBikeNetworkWithLowestLongitude(networks);
 *  //> {
      company: [
        "Portland Bureau of Transportation (PBOT)",
        "Motivate International, Inc",
        "Social Bicycles Inc.",
      ],
      gbfs_href: "http://biketownpdx.socialbicycles.com/opendata/gbfs.json",
      href: "/v2/networks/biketown",
      id: "biketown",
      location: {
        city: "Portland, OR",
        country: "US",
        latitude: 45.52175423291714,
        longitude: -122.68107935786247,
      },
      name: "BIKETOWN",
    }
 */
function getBikeNetworkWithLowestLongitude(networks) {
  let answer = null;
  let lowest = 0;
  for (let i = 0; i < networks.length; i++) {
    if (networks[i].location.longitude < lowest) {
      lowest = networks[i].location.longitude;
      answer = networks[i]
    }
  }

  return answer
}

function getBikeNetworkWithLowestLongitudeUsingReduce(networks) {
  return networks.reduce((lowestLongitudeNetwork, network) => {
    if (lowestLongitudeNetwork === null || network.location.longitude < lowestLongitudeNetwork.location.longitude) {
      return network
    }

    return lowestLongitudeNetwork
  }, null)
}

/**
 * countByCountry()
 * -----------------------------
 * Returns an object where the keys are countries and the values are the number of networks in the array with that country. If the inputted `networks` array is empty, return `{}`.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @returns {Object} An object where keys are countries (e.g. "AU") and the values are how many networks in the array are in that country (e.g. 2).
 *
 * EXAMPLE:
 *  countByCountry(networks);
 *  //> {
      AU: 2,
      BE: 1,
      BR: 6,
      // ... 
    }
 */
function countByCountry(networks) {
  const countries = {};
  for (let i = 0; i < networks.length; i++) {
    const country = networks[i].location.country
    if (countries[country] === undefined) {
      countries[country] = 1;
    } else {
      countries[country]++;
    }
  }

  return countries
}

function countByCountryUsingReduce(networks) {
  return networks.reduce((countries, network) => {
    if (countries[network.location.country] === undefined) {
      countries[network.location.country] = 1;
    } else {
      countries[network.location.country]++;
    }

    return countries
  }, {})
}

/**
 * findById()
 * -----------------------------
 * Returns a network object from an array of objects based on the ID. If the inputted `networks` array is empty or the ID does not match any bike network, return `null`.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @param {string} id - A unique `id`.
 * @returns {Object|null} The network object with the matching `id`.
 *
 * EXAMPLE:
 *  findById(networks, "indego");
 *  //> {
      company: [
        "City of Philadelphia",
        "Bicycle Transit Systems",
        "BCycle, LLC",
      ],
      gbfs_href: "https://gbfs.bcycle.com/bcycle_indego/gbfs.json",
      href: "/v2/networks/indego",
      id: "indego",
      location: {
        city: "Philadelphia, PA",
        country: "US",
        latitude: 39.95378,
        longitude: -75.16374,
      },
      name: "Indego",
    }
 */
function findById(networks, id) {
  for (let i = 0; i < networks.length; i++) {
    if (networks[i].id === id) {
      return networks[i];
    }
  }

  return null
}

function findByIdUsingFind(networks, id) {
  return networks.find((network) => network.id === id) || null;
}

/**
 * filterByCountry()
 * -----------------------------
 * Returns an array of network objects where the network country matches the inputted `country`. If there are no matching objects, or the input is empty, return an empty array.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @param {String} country - A country name abbreviation
 * @returns {Object[]} An array of objects, where each network object has a location in the matching country.
 * 
 * EXAMPLE:
 *  filterByCountry(networks, "AU");
 *  //> [
      { name: "Curtin Bike Share", ... },
      { name: "Monash BikeShare", ... },
    ]
 */
function filterByCountry(networks, country) {
  const countryNetworks = []
  for (let i = 0; i < networks.length; i++) {
    if (networks[i].location.country === country) {
      countryNetworks.push(networks[i])
    }
  }

  return countryNetworks
}

function filterByCountryUsingFilter(networks, country) {
  return networks.filter((network) => network.location.country === country)
}

/**
 * filterByProximity()
 * -----------------------------
 * Returns an array of network objects where the network's coordinates are within the inputted "distance" of the inputted `latitude` and `longitude`. Distance is measured by the difference between latitudes or longitudes. If there are no matching objects, or the input is empty, return an empty array.
 */

function filterByProximity(networks, latitude, longitude, distance) {
  const closeNetworks = []
  for (let i = 0; i < networks.length; i++) {
    const network = networks[i];
    if (Math.abs(network.location.latitude - latitude) <= distance && Math.abs(network.location.longitude - longitude) <= distance) {
      closeNetworks.push(network)
    }
  }

  return closeNetworks
}

function filterByProximityUsingFilter(networks, latitude, longitude, distance) {
  return networks.filter((network) => {
    return Math.abs(network.location.latitude - latitude) <= distance && Math.abs(network.location.longitude - longitude) <= distance
  })
}

/**
 * transformNetworks()
 * -----------------------------
 * Returns an array of objects based off of the inputted networks. However, each network is transformed so that it has the following keys:
 *  - id: The ID of the network.
 *  - name: The name of the network.
 *  - location: The network's city and country, joined together.
 *  - companies: The network's company array joined together by commas.
 * @param {Object[]} networks - An array of networks. See the `bike-networks.js` file for an example of this array.
 * @returns {Object[]} An array of objects, where each network is transformed in the prescribed way.
 * 
 * EXAMPLE:
 *  transformNetworks(networks);
 *  //> [
      {
        id: "velib",
        name: "Velib' M\u00e9trop\u00f4le",
        location: "Paris, FR",
        companies: "Smovengo",
      },
      ...
    ]
 * 
 * EXAMPLE:
 *  transformNetworks(networks);
 *  //> [
      {
        id: "edinburgh-cycle-hire",
        name: "Just Eat Cycles",
        location: "Edinburgh, UK",
        companies: "Your Bike, Urban Sharing",
      },
      ...
    ]
 */
function transformNetworks(networks) {
  const answer = [];
  for (let i = 0; i < networks.length; i++) {
    const network = networks[i];
    const transformed = {
      id: network.id,
      name: network.name,
      location: network.location.city + ', ' + network.location.country,
      companies: network.company.join(', ')
    }

    answer.push(transformed)
  }

  return answer
}

function transformNetworksUsingMap(networks) {
  return networks.map((network) => {
    return {
      id: network.id,
      name: network.name,
      location: network.location.city + ', ' + network.location.country,
      companies: network.company.join(', ')
    }
  })
}

module.exports = {
  getAllBikeNetworkNames,
  getAllBikeNetworksInTheUS,
  getAllCoordinates,
  bikeNetworkExists,
  getBikeNetworkWithLowestLongitude,
  countByCountry,
  findById,
  filterByCountry,
  filterByProximity,
  transformNetworks,
};
