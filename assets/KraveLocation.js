var apiKey = "u07M1IBoNj9WYZywNDHGmimXJmGckYwF"
var queryUrl = "http://www.mapquestapi.com/geocoding/v1/address" + apiKey

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://www.mapquestapi.com/geocoding/v1/address?key=u07M1IBoNj9WYZywNDHGmimXJmGckYwF&location=Berkeley,%20CA",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "Postman-Token": "98e4829c-6d62-4d01-8051-1760b7aca501"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  var city = "";
  var street = "";
  var state = "";
  var country = "";
  var zip = "";

  function Query() {
    // queryURL is the url we'll use to query the API //
        var queryURL = "https://api.yelp.com/v3/businesses/search?term=store&location" + location + "&categories=liquor";
      
    // Begin building an object to contain our API call's query parameters //
    // Set the API key //
        var api = { "api-key": "3X8xKVE39_n-9lZYPfTjEZBbxQAWRqAWj_jhyXfvsXkFMbqc-C1C3wor3d5JUWJqOqGWxb3c4vhgrWpHtjiW_AR8d8z2vpf0Df91ijaUcTuWb4C6gyrbNfNDbwBWXHYx" };
      
    // Grab the text the user typed into the NAME input //
        city = $("#inputCity")
        .val()
        .trim();
      
    // Grab the text the user typed into the EMAIL input //   
        street = $("#inputStreet")      
        .val()
        .trim();
    // Grab the text the user typed into the EMAIL input //   
        state = $("#inputState")      
        .val()
        .trim();
    // Grab the text the user typed into the ADDRESS input //   
        country = $("#inputCountry")      
        .val()
        .trim();
    // Grab the text the user typed into the ADDRESS 2 input //   
        zip = $("#inputZip")      
        .val()
        .trim();
    
      }
    // Function to list stores from Yelp //
    function refreshPage(mapquestapi) {
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