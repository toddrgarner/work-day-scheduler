$(document).ready(function () {
  //Engine loads "html & css first"

  //** current time & date - Moment.js **//
  let NowMoment = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = NowMoment;

  //** This buttion will clear local storage and activity **//
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  function currentColor() {
    var timeDiv = $(".time-div");
    let currentHour = moment().hours();
    timeDiv.each(function () {
      var hour = parseInt($(this).attr("id"));
      if (currentHour === hour) {
        $(this)
          .children("col-md-10").attr("class", "present col-md-10 time-block description");
      } else if (currentHour > hour) {
        $(this).children("col-md-10").attr("class", "past col-md-10 time-block description");
      } else {
        $(this).children("col-md-10").attr("class", "present col-md-10 time-block description");
      }
    });
  }
  currentColor();

  //** The Time and Values are saved to local storage **//
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  //** Retrieves the Time and Values and send to local staorage **/
  $("#hour-9 .time-block").val(localStorage.getItem("9"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
});
