// business logic for places database
function PlacesDb() {
  this.places = []
}

PlacesDb.prototype.addPlace = function(place) {
  this.places.push(place);
}

// business logic for contacts
  function Place(city, state, country, landmarks, food, pop, lang) {
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

// user interface Logic
let placesDb = new PlacesDb();

function displayLocation(placesDbToDisplay){
  let placesList = $("ul#places");
  let htmlForPlacesInfo = "";
  placesDbToDisplay.places.forEach(function(place) {
    htmlForPlacesInfo += "<li>" + place.city + " " + place.state + " " + place.country + "</li>";
  })
  placesList.html(htmlForPlacesInfo)
}

$(document).ready(function() {
  $("form#addPlace").submit(function(event) {
  event.preventDefault();
  let city = $("input#addCity").val();
  let state = $("input#addState").val();
  let country = $("input#addCountry").val();
  let landmarks = $("input#addLandmarks").val();
  let food = $("input#addFood").val();
  let pop = $("input#addPop").val();
  let lang = $("input#addLang").val();
  let newPlace = new Place(city, state, country, landmarks, food, pop, lang);
  placesDb.addPlace(newPlace);
  displayLocation(placesDb);
  console.log(placesDb.places)
  })
})