// Document Ready //
$(document).ready(function() {

    var address = "";
    var city = "";
    var state = "";
    var zipCode = 0;
    var location = "";
    $(".submit-order").click(function(event){
        event.preventDefault();
        console.log("hello jen");
        yelpQuery();
        callApi();
      });

function callApi() {
// queryURL //
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=1&term=store&location=" + location + "";

    // api key //
    var apiKey = "3X8xKVE39_n-9lZYPfTjEZBbxQAWRqAWj_jhyXfvsXkFMbqc-C1C3wor3d5JUWJqOqGWxb3c4vhgrWpHtjiW_AR8d8z2vpf0Df91ijaUcTuWb4C6gyrbNfNDbwBWXHYx";

    // "https://api.yelp.com/v3/businesses/search?q=&api_key=3X8xKVE39_n-9lZYPfTjEZBbxQAWRqAWj_jhyXfvsXkFMbqc-C1C3wor3d5JUWJqOqGWxb3c4vhgrWpHtjiW_AR8d8z2vpf0Df91ijaUcTuWb4C6gyrbNfNDbwBWXHYx";

    // AJAX GET request to the queryURL //
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": queryURL,
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
}

// Variable that stores users input for name, email, adddress, city, state, zip code //

function yelpQuery() {
    console.log("I am in the yelp query");
    // queryURL is the url we'll use to query the API //
    var queryURL = "https://api.yelp.com/v3/businesses/search?term=store&location" + location + "&categories=liquor";
  
    // Begin building an object to contain our API call's query parameters //
    // Set the API key //
    var api = { "api-key": "3X8xKVE39_n-9lZYPfTjEZBbxQAWRqAWj_jhyXfvsXkFMbqc-C1C3wor3d5JUWJqOqGWxb3c4vhgrWpHtjiW_AR8d8z2vpf0Df91ijaUcTuWb4C6gyrbNfNDbwBWXHYx" };
  
    // Grab the text the user typed into the ADDRESS input //   
    address = $("#inputAddress")      
    .val()
    .trim();
    console.log(address);

    // Grab the text the user typed into the CITY input //   
    city = $("#inputCity")      
    .val()
    .trim();
    console.log(city);

    // Grab the text the user typed into the STATE input //   
    state = $("#inputState")      
    .val()
    .trim();
    console.log(state);

    // Grab the text the user typed into the ZIP CODE input //   
    zipCode = $("#inputZip")      
    .val()
    .trim();
    console.log(zipCode);

    location = address.concat(" ", city, " ", state, " ", zipCode);
    console.log(location);
}

// Firebase code - takes data from 'inputItem' form, sends it to Firebase, then pulls from Firebase to populate the table

var item1 = "";
var item2 = ""; 
var item3 = "";
var item4 = "";
var item5 = "";


$(".submit-order").on("click", function(event) {
  event.preventDefault();

  $("#total-table > tbody").empty();
  $("#item-table > tbody").empty();

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
      "<tr><td>" + "1" + "</td><td>" + item1.name + "</td><td>" + item1.price + "</td></tr>",
      "<tr><td>" + "2" + "</td><td>" + item2.name + "</td><td>" + item2.price + "</td></tr>",
      "<tr><td>" + "3" + "</td><td>" + item3.name + "</td><td>" + item3.price + "</td></tr>",
      "<tr><td>" + "4" + "</td><td>" + item4.name + "</td><td>" + item4.price + "</td></tr>",
      "<tr><td>" + "5" + "</td><td>" + item5.name + "</td><td>" + item5.price + "</td></tr>"
  );

  $("#total-table > tbody").empty();

  $("#total-table").empty();

  $("#total-table > tbody").append(
    "<tr><td>" + "$37.95" + "</td><td>" + "$3.51" + "</td><td>" + "$41.46" + "</td></tr>"
  );

});

});

