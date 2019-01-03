//You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.

// ===============================================================================
// DATA
// Below data will hold all of the survery results from potential friends.
// Initially set dummy friend as Slimer.
// This variable could have been set to an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Slimer",
    photo: "https://cdn.shopify.com/s/files/1/1452/7530/products/slimer.jpg?v=1505206859",
    scores: [
      5,
      3,
      1,
      3,
      5,
      5,
      5,
      5,
      1,
      3
    ]
  },
  {
    name: "Barack Obama",
    photo: "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg",
    scores: [
      5,
      5,
      5,
      5,
      4,
      5,
      5,
      5,
      1,
      1
    ]
  }
]

// Export the "dummy" array of Slimer to be default. The line below makes the friendsArray accessible to other files using require and list friends.js as the required file.
module.exports = friendsArray;