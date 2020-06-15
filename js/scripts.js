// business logic

function PlacesDb() {
  this.places = []
}

PlacesDb.prototype.addPlace = function(place) {
  this.places.push(place);
}

PlacesDb.prototype.deletePlace = function(city) {
  for (let i=0; i <= this.places.length; i++){
    if(this.places[i]) {
      if (this.places[i].city == city) {
        delete this.places[i];
      }
    }
  };
  return false;
}

      function Place( city, state, country, landmarks, food, pop, lang) {
  this.city = city;
  this.state = state;
  this.country = country;
  this.landmarks = landmarks;
  this.food = food;
  this.pop = pop;
  this.lang = lang;
}

Place.prototype.fullLocation = function () {
  return this.city + " " + this.state + " " + this.country;
}

let bos = new Place("Boston", "Massachusetts", "United States of America", ["Fort Warren", "Fenway Park", "Boston Harbor"], "Chowda!", 694583, ["English", "Portugese", "Spanish"])

let char = new Place("Charleston", "South Carolina", "United States of America", ["Fort Sumter", "The Citadel", "Charleston City Market"], "Boiled Peanuts", 130113, ["English", "French", "Gullah"])

let orl = new Place("Orlando", "Florida", "United States of America", ["Disney World", "Universal Studios", "Seaworld"], "Conch Fritters", 285713, ["English", "Creole", "Spanish"])

let car = new Place("Carlsbad", "New Mexico", "United States of America", ["Carlsbad cavern", "Sitting Bull Falls", "Living Desert Zoo"], "Burritos", 29331, ["English", "Polish", "Spanish"])

let pdx = new Place("Portland", "Oregon", "United States of America", ["Japanese Garden", "Pittock Mansion", "Multnomah Falls"], "Voodoo Doughnuts", 2151000, ["English", "German", "Russian"])

let nyc = new Place("New York City", "New York", "United States of America", ["Empire State Building", "Central Park", "Natural History Museum"], "Pizza", 8336817, ["English", "Spanish", "Chinese"])

let lax = new Place("Los Angeles", "California", "United States of America", ["Hollywood Sign", "Griffith Observatory", "La Brea Tar Pits"], "Tacos", 3990000, ["English", "Spanish", "Chinese"])

let nola = new Place("New Orleans", "Louisiana", "United States of America", ["French Quarter", "Bourbon Street", "St. Louis Cathedral"], "Jambalaya", 391006, ["English", "Creole", "French"])

let cdmx = new Place("Mexico City", "Mexico City", "Mexico", ["Bosque de Chapultepec", "Palacio de Bella Artes", "Xochimilco"], "Tlacoyos", 21782378, ["Spanish", "Engish", "Nahuatl"])

let paris = new Place("Paris", "‎Île-de-France", "France", ["Eiffel Tower", "Louvre Museum", "Notre Dame Cathedral"], "Baguettes", 2148271, ["French", "Arabic", "German"])


// user interface Logic
$(document).ready(function() {
event.preventDefault();
})