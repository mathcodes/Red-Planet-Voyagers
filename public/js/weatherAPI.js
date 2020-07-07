//Same as script in marsTestData.html.
//File communicates with members.html!!!
$(document).ready(() => {

    $(".navbar-toggler").click(function () {
        $(".collapse.navbar-collapse").toggleClass("show");
        $(".navbar-toggler").toggleClass("collapsed");
        $(".navbar-expand-lg").toggleClass("expanded");
    });
    $(window).resize(function () {
        if ($(".collapse.navbar-collapse").hasClass("show")) {
            $(".navbar-toggler").click();
        }
    });

    // This file just does a GET request to figure out which user is logged in
    // and updates the HTML on the page
    $.get("/api/user_data").then(data => {
        $(".member-name").text(data.email);
    });


    //NASA API key:
    // var APIKey = "HWIQtryDmQ136bRdLzdriQL1mIeaKvEuJfckD6Sb";
    var queryURL = "https://api.nasa.gov/insight_weather/?api_key=HWIQtryDmQ136bRdLzdriQL1mIeaKvEuJfckD6Sb&feedtype=json&ver=1.0+";

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var data = {
            labels: [],
            min: [],
            max: []
        }
        for (var i = 0; i < 5; i++) {
            //grabbing data from API, 31-33 pushes data into data object on line 21
            var solNum = response.sol_keys[i];
            var min = response[response.sol_keys[i]].AT.mn;
            var max = response[response.sol_keys[i]].AT.mx;
            data.labels.push(solNum);
            data.min.push(min);
            data.max.push(max);

            var day = $("<h3>");
            day.html("Day " + response.sol_keys[i] + " of 687");
            $(".test" + i).append(day);
            var date = $("<p>");
            date.html("Date & Time: " + response[response.sol_keys[i]].First_UTC);
            $(".test" + i).append(date);
            var high = $("<p>");
            high.html("High: " + response[response.sol_keys[i]].AT.mx + "°F");
            $(".test" + i).append(high);
            var low = $("<p>");
            low.html("Low: " + response[response.sol_keys[i]].AT.mn + "°F");
            $(".test" + i).append(low);
        }
        //call the function, data is pushed into this function that will create the chart. We knew what we needed to pucsh by looking at the chart.js 
        createBarChart(data);
        // console.log(queryURL);
        // console.log(response);
        var solNum = response.sol_keys[0];
        var solObject = response[solNum];

        var season = $("<h2>");
        season.html("Current Mars Season: " + solObject.Season);
        $("#season").append(season);
        console.log("Season: ", solObject.Season);

        /*
                //DAY ONE//
                var day = $("<h3>");
                day.html("Mars Day Number: " + response.sol_keys[0]);
                $(".test0").append(day);
                var date = $("<p>");
                date.html("Date, Time: " + response[response.sol_keys[0]].First_UTC);
                $(".test0").append(date);
                var high = $("<p>");
                high.html("High: " + response[response.sol_keys[0]].AT.mx + "°F");
                $(".test0").append(high);
                var low = $("<p>");
                low.html("Low: " + response[response.sol_keys[0]].AT.mn + "°F");
                $(".test0").append(low);

                //DAY TWO//
                var day = $("<h3>");
                day.html("Mars Day Number: " + response.sol_keys[1]);
                $(".test1").append(day);
                var date = $("<p>");
                date.html("Date, Time: " + response[response.sol_keys[1]].First_UTC);
                $(".test1").append(date);
                var high = $("<p>");
                high.html("High: " + response[response.sol_keys[1]].AT.mx + "°F");
                $(".test1").append(high);
                var low = $("<p>");
                low.html("Low: " + response[response.sol_keys[1]].AT.mn + "°F");
                $(".test1").append(low);

                //DAY THREE//
                var day = $("<h3>");
                day.html("Mars Day Number: " + response.sol_keys[2]);
                $(".test2").append(day);
                var date = $("<p>");
                date.html("Date, Time: " + response[response.sol_keys[2]].First_UTC);
                $(".test2").append(date);
                var high = $("<p>");
                high.html("High: " + response[response.sol_keys[2]].AT.mx + "°F");
                $(".test2").append(high);
                var low = $("<p>");
                low.html("Low: " + response[response.sol_keys[2]].AT.mn + "°F");
                $(".test2").append(low);

                //DAY FOUR//
                var day = $("<h3>");
                day.html("Mars Day Number: " + response.sol_keys[3]);
                $(".test3").append(day);
                var date = $("<p>");
                date.html("Date, Time: " + response[response.sol_keys[3]].First_UTC);
                $(".test3").append(date);
                var high = $("<p>");
                high.html("High: " + response[response.sol_keys[3]].AT.mx + "°F");
                $(".test3").append(high);
                var low = $("<p>");
                low.html("Low: " + response[response.sol_keys[3]].AT.mn + "°F");
                $(".test3").append(low);

                //DAY FIVE//
                var day = $("<h3>");
                day.html("Mars Day Number: " + response.sol_keys[4]);
                $(".test4").append(day);
                var date = $("<p>");
                date.html("Date, Time: " + response[response.sol_keys[4]].First_UTC);
                $(".test4").append(date);
                var high = $("<p>");
                high.html("High: " + response[response.sol_keys[4]].AT.mx + "°F");
                $(".test4").append(high);
                var low = $("<p>");
                low.html("Low: " + response[response.sol_keys[4]].AT.mn + "°F");
                $(".test4").append(low);

                //DAY SIX//
                var day = $("<h3>");
                day.html("Mars Day Number: " + response.sol_keys[5]);
                $(".test5").append(day);
                var date = $("<p>");
                date.html("Date, Time: " + response[response.sol_keys[5]].First_UTC);
                $(".test5").append(date);
                var high = $("<p>");
                high.html("High: " + response[response.sol_keys[5]].AT.mx + "°F");
                $(".test5").append(high);
                var low = $("<p>");
                low.html("Low: " + response[response.sol_keys[5]].AT.mn + "°F");
                $(".test5").append(low);

                //DAY SEVEN//
                var day = $("<h3>");
                day.html("Mars Day Number: " + response.sol_keys[6]);
                $(".test6").append(day);
                var date = $("<p>");
                date.html("Date, Time: " + response[response.sol_keys[6]].First_UTC);
                $(".test6").append(date);
                var high = $("<p>");
                high.html("High: " + response[response.sol_keys[6]].AT.mx + "°F");
                $(".test6").append(high);
                var low = $("<p>");
                low.html("Low: " + response[response.sol_keys[6]].AT.mn + "°F");
                $(".test6").append(low);
        */
    });
});



// $(".card-body:nth-child(1) .test").append(day);

//POTENTIALLY USED FOR LATER//
// for (var i = 2; i < 3; i++) {

// var solNum = response.sol_keys[i];
// var solObject = response[solNum];
// console.log(solObject);
// }