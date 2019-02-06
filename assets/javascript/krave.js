var config = {
  apiKey: "AIzaSyAcH8o1HyoSno3hY7eR6DqX1CuR8OWj_TE",
  authDomain: "krave-7a2d2.firebaseapp.com",
  databaseURL: "https://krave-7a2d2.firebaseio.com",
  projectId: "krave-7a2d2",
  storageBucket: "krave-7a2d2.appspot.com",
  messagingSenderId: "8765155413"
};
firebase.initializeApp(config);

var database = firebase.database();

// / Document Ready //
$(document).ready(function() {


// queryURL //

var queryURL = "https://api.yelp.com/v3/businesses/search?term=store&location" + location + "&categories=liquor";

 // api key //
var apiKey = "3X8xKVE39_n-9lZYPfTjEZBbxQAWRqAWj_jhyXfvsXkFMbqc-C1C3wor3d5JUWJqOqGWxb3c4vhgrWpHtjiW_AR8d8z2vpf0Df91ijaUcTuWb4C6gyrbNfNDbwBWXHYx";

// "https://api.yelp.com/v3/businesses/search?q=&api_key=3X8xKVE39_n-9lZYPfTjEZBbxQAWRqAWj_jhyXfvsXkFMbqc-C1C3wor3d5JUWJqOqGWxb3c4vhgrWpHtjiW_AR8d8z2vpf0Df91ijaUcTuWb4C6gyrbNfNDbwBWXHYx";

//AJAX GET request to the queryURL //
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.yelp.com/v3/businesses/search?location=94521&=liquorstores&term=store&categories=liquor",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer 3X8xKVE39_n-9lZYPfTjEZBbxQAWRqAWj_jhyXfvsXkFMbqc-C1C3wor3d5JUWJqOqGWxb3c4vhgrWpHtjiW_AR8d8z2vpf0Df91ijaUcTuWb4C6gyrbNfNDbwBWXHYx",
      "cache-control": "no-cache",
      "Postman-Token": "bd522af8-a7a0-4f76-a52d-f27db838a8c7"
    }
  }
  
$.ajax(settings).done(function (response) {
    console.log(response);
});

// Variable that stores users input for name, email, adddress, city, state, zip code //
var name = "";
var email = "";
var phoneNumber = "";
var address = "";
var address2 = "";
var city = "";
var state = "";
var zipCode = 0;

function yelpQuery() {
// queryURL is the url we'll use to query the API //
    var queryURL = "https://api.yelp.com/v3/businesses/search?term=store&location" + location + "&categories=liquor";
  
// Begin building an object to contain our API call's query parameters //
// Set the API key //
    var api = { "api-key": "3X8xKVE39_n-9lZYPfTjEZBbxQAWRqAWj_jhyXfvsXkFMbqc-C1C3wor3d5JUWJqOqGWxb3c4vhgrWpHtjiW_AR8d8z2vpf0Df91ijaUcTuWb4C6gyrbNfNDbwBWXHYx" };
  
// Grab the text the user typed into the NAME input //
    name = $("#inputName")
    .val()
    .trim();
  
// Grab the text the user typed into the EMAIL input //   
    email = $("#inputEmail")      
    .val()
    .trim();

// Grab the text the user typed into the EMAIL input //   
    phoneNumber = $("#inputPhone")      
    .val()
    .trim();

// Grab the text the user typed into the ADDRESS input //   
    address = $("#inputAddress")      
    .val()
    .trim();

// Grab the text the user typed into the ADDRESS 2 input //   
    address2 = $("#inputAddress2")      
    .val()
    .trim();

// Grab the text the user typed into the CITY input //   
    city = $("#inputCity")      
    .val()
    .trim();

// Grab the text the user typed into the STATE input //   
    state = $("#inputState")      
    .val()
    .trim();

// Grab the text the user typed into the ZIP CODE input //   
    zipCode = $("#inputZip")      
    .val()
    .trim();
  }

// Function to list stores from Yelp //
function refreshPage(yelp) {
  // Display store locations within customers vicinity //
    var storeList = $(".item-info").val();
    
  // Loop for list of stores by location //
    for (var i = 0; i < storeList; i++) {

  // Get specific store list //
      var store = storeList[i];
  
  // Adds number of stores by location //
      var addStore = i + 1;
  
  // Displays the stores in a list/table format //
      var listOfStores = $("<ul>");
      listOfStores.addClass("list-group");
  
  // Adds the list of stores to the site //
      $("#article-section").append(listOfStores);
  
  // The name of the store will append to the list //
      var storeName = store.storeName;
      var listOfStoresLocation = $("<li class='list-group-item articleHeadline'>");
  
      if (storeName && storeName.main) {
        console.log(storeName.main);
        listOfStoresLocation.append(
          "<span class='label label-primary'>" +
            addStore +
            "</span>" +
            "<strong> " +
            storeName.main +
            "</strong>"
        );
      }
  
  // Add/append the store to the present list //
    listOfStores.append(listOfStoresLocation);
}
}

// Function for customers store of choice //
function storeChoice () {

}

// Function for chosen store location to present onscreen //
function locationOnScreen () {
  
}

// Function to clear user input //
function clear() {
    $("#article-section").empty();
}
    
// Sumbit button //
$("#run-search").on("click", function(event) {
    event.preventDefault();
    clear();
  
// QueryURL for the AJAX GET request //
    var queryURL = yelpQuery();
  
// AJAX request //
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(updatePage);
});
  
// Creates the clearing of the user input fields //
$("#clear-all").on("click", clear);

});

