
$(document).ready(function () {
$("#submit").on("click", function(event){

 event.preventDefault();

 var destination = $("#destination").val().trim();
 var origin = $("#origin").val().trim();
 // var time = $("#time").val().trim();
  var queryURL = 
 // "https://cors-anywhere.herokuapp.com/"+"https://maps.googleapis.com/maps/api/directions/json?origin=" + origin + "&destination=" + destination + "&mode=BICYCLING&key=AIzaSyA0oMhk60GOJSoK46J8f0dAwghkBwgThl0";

 "https://cors-anywhere.herokuapp.com/"+"https://maps.googleapis.com/maps/api/elevation/json?origin=" + origin +"&destination=" + destination + "&key=AIzaSyA0oMhk60GOJSoK46J8f0dAwghkBwgThl0";




 // "https://maps.googleapis.com/maps/api/directions/json?&mode=BICYCLING&origin=sunnyvale&destination=cupertino&departure_time=" + time +  "&key=AIzaSyA0oMhk60GOJSoK46J8f0dAwghkBwgThl0"

  console.log(queryURL);
  $.ajax({
    url : queryURL,
    method : "GET",
    dataType : 'json'
   

 }).done(function(response){
 	debugger;
   console.log("done : "+ response);
   $("#map").html(response);

})

});


//  var eleURL = "https://cors-anywhere.herokuapp.com/"+"https://maps.googleapis.com/maps/api/elevation/json?origin=" + origin +"&destination=" + destination + "&key=AIzaSyA0oMhk60GOJSoK46J8f0dAwghkBwgThl0";


//   $.ajax({
//     url : eleURL,
//     method : "GET",
//     dataType : 'jsonp'
   

//  }).done(function(data){
//  	debugger;
//    console.log("done : "+ data);
   
// })

});








