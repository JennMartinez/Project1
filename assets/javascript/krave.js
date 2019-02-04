// / Document Ready //
$(document).ready(function() {

// api code //
var queryURL = "https://api.yelp.com/v3/businesses/search?term=store&location" + location + "&categories=liquor";

// api key //
var apiKey = "3X8xKVE39_n-9lZYPfTjEZBbxQAWRqAWj_jhyXfvsXkFMbqc-C1C3wor3d5JUWJqOqGWxb3c4vhgrWpHtjiW_AR8d8z2vpf0Df91ijaUcTuWb4C6gyrbNfNDbwBWXHYx";

// "https://api.yelp.com/v3/businesses/search?q=&api_key=3X8xKVE39_n-9lZYPfTjEZBbxQAWRqAWj_jhyXfvsXkFMbqc-C1C3wor3d5JUWJqOqGWxb3c4vhgrWpHtjiW_AR8d8z2vpf0Df91ijaUcTuWb4C6gyrbNfNDbwBWXHYx";

// AJAX GET request to the queryURL //
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

// Variable that stores users input for location //
var location = 0;

});