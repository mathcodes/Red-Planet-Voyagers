// API call for Launch Information:
$(document).ready(function(){
  const queryURL = "https://api.spacexdata.com/v3/launches/next";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    console.log(response);
    $(".mission").text("Mission:" + response.mission_name);
    $(".rocket").text("Rocket Name:" + response.rocket.rocket_name);
    $(".launch").text("Launch Information:" + response.launch_date_utc);
    $(".details").text("Details:" + response.details);
    $(".image").html(
      "<img src=" + response.links.mission_patch_small + ">" + "</img>"
    );
  });
});
