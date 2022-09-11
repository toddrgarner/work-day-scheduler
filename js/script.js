$(document).ready(function () {
  //Engine loads "html & css first"

  //** current time & date - Moment.js **//
  let NowMoment = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = NowMoment;
  let currentHour = moment().format("HH");

  //** This buttion will clear local storage and activity **//
  $("#clearFieldBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });

  $(".time-div").each(function () {
    var timeDiv = $(this).attr(id).split("-")[1];

    if (currentHour === timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("white-text");
    } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });

  //** The Time and Values are saved to local storage **//
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  //** Retrieves the Time and Values and send to local staorage **/
  $("#hour-09 .time-block").val(localStorage.getItem("09"));
  $("#hour-10 .time-block").val(localStorage.getItem("10"));
  $("#hour-11 .time-block").val(localStorage.getItem("11"));
  $("#hour-12 .time-block").val(localStorage.getItem("12"));
  $("#hour-13 .time-block").val(localStorage.getItem("13"));
  $("#hour-14 .time-block").val(localStorage.getItem("14"));
  $("#hour-15 .time-block").val(localStorage.getItem("15"));
  $("#hour-16 .time-block").val(localStorage.getItem("16"));
  $("#hour-17 .time-block").val(localStorage.getItem("17"));
});
