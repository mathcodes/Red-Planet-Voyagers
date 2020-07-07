$(document).ready(() => {
  const queryURL =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=Lw59dX1hoc67rrcErxzay8oTsrx0Cw2qZBdKTusr";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(queryURL);
    for (let i = 0; i < 5; i++) {
      console.log("#" + i);
      const id = "#" + i;
      console.log(id);
      $(id).attr("src", response.photos[i].img_src);
      console.log("Image Source:", response.photos[i].img_src);
    }
  });
});
