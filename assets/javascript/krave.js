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

var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=store&location" + location + "&categories=liquor";

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

// Firebase code - takes data from 'inputItem' form, sends it to Firebase, then pulls from Firebase to populate the table

var item1 = "";
var item2 = ""; 
var item3 = "";
var item4 = "";
var item5 = "";


$(".submit-order").on("click", function(event) {
  event.preventDefault();

  // $(".form-box").css("display", "none");
  // $(".results-box").css("display", "block");

  // Get values from form inputs
  var item1 = $("#inputItem1")
    .val()
    .trim();
  var item2 = $("#inputItem2")
    .val()
    .trim();
  var item3 = $("#inputItem3")
    .val()
    .trim();
  var item4 = $("#inputItem4")
    .val()
    .trim();
  var item5 = $("#inputItem5")
    .val()
    .trim();

  // Creates local "temporary" object for holding order data
  var orderItems = {
    item1: {
      name: item1,
      price: "$2.99"
    },
    item2: {
      name: item2,
      price: "$4.99"
    },
    item3: {
      name: item3,
      price: "$9.99"
    },
    item4: {
      name: item4,
      price: "$14.99"
    },
    item5: {
      name: item5,
      price: "$4.99"
    }
  };

  // Uploads train data to the database
  database.ref().push(orderItems);

  // Alert
  swal("Success!", "Your order has been received!", "success");

  $("#inputItem1").val("");
  $("#inputItem2").val("");
  $("#inputItem3").val("");
  $("#inputItem4").val("");
  $("#inputItem5").val("");
});

database.ref().on("child_added", function(childSnapshot, prevChildkey) {

  // Stores everything into a variable.
  var item1 = childSnapshot.val().item1;
  var item2 = childSnapshot.val().item2;
  var item3 = childSnapshot.val().item3;
  var item4 = childSnapshot.val().item4;
  var item5 = childSnapshot.val().item5;

  console.log(item1);
  console.log(item2);
  console.log(item3);
  console.log(item4);
  console.log(item5);

  // Appends order info to table
  $("#item-table > tbody").append(
      "<tr><td>" + item1.name + "</td><td>" + item1.price + "</td></tr>",
      "<tr><td>" + item2.name + "</td><td>" + item2.price + "</td></tr>",
      "<tr><td>" + item3.name + "</td><td>" + item3.price + "</td></tr>",
      "<tr><td>" + item4.name + "</td><td>" + item4.price + "</td></tr>",
      "<tr><td>" + item5.name + "</td><td>" + item5.price + "</td></tr>"
  );
});

});

