$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.





    var markup =  "The current temperature is " + data.currently.apparentTemperature + ". " + "It is " +
    data.currently.summary + ". " + "Tomorrow is a low of " + data.daily.data[0].apparentTemperatureMin + " and a high of " + data.daily.data[0].apparentTemperatureMax + " with " +data.daily.data[0].summary
    + " The next day is a low of " + data.daily.data[1].apparentTemperatureMin + " and a high of " + data.daily.data[1].apparentTemperatureMax + " with " + data.daily.data[1].summary + " The day after is a low of "
    + data.daily.data[2].apparentTemperatureMin + " and a high of " + data.daily.data[2].apparentTemperatureMax + " with " + data.daily.data[2].summary



    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
