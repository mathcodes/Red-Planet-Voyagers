$(document).ready(() => {
  const queryURL =
    "https://api.nasa.gov/planetary/apod?api_key=Lw59dX1hoc67rrcErxzay8oTsrx0Cw2qZBdKTusr";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response);
    $(".url").html("<img src=" + response.url + ">" + "</img>");
    $(".title").text(response.title);
    console.log(response.title);
    $(".explanation").text(response.explanation);
    console.log(response.explanation);
  });

  $(".navbar-toggler").click(function() {
    $(".collapse.navbar-collapse").toggleClass("show");
    $(".navbar-toggler").toggleClass("collapsed");
    $(".navbar-expand-lg").toggleClass("expanded");
  });
  $(window).resize(function() {
    if ($(".collapse.navbar-collapse").hasClass("show")) {
      $(".navbar-toggler").click();
    }
  });
});

//-----Functions for scroll to top button - does not need to be inside of document.ready, will not work if so-----//
// var mybutton = document.getElementById("topBtn");
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// };
// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// };
