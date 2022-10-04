// naming variables //
var currentDayEl = $("currentDay");
// arrays below
var inputEls = $("input");
var iconEls = $(".savebtn")

var today = moment();
var todayHour = moment().format("h");

var eventsArray;

// functions //

// initialize page / Loads and Refresh //
// Retrieves local storage and blocks with whatever is in there //
function init() {
    setInterval(function(){
        currentDayEl.text(moment("dddd, MMMM D, YYYY hh:mm: A"));
    }, 1000);

    eventStorage();
    createTimeblocks();
    updateTimeblocks();
}

//  get evemts from localStorage. If there's no events just initialize the arrat //
function eventStorage(){ 
      eventsArray = JSON.parse(localStorage.getItem(events));
      if (eventsArray === null){
        eventsArray = [];
        localStorage.setItem("events", JSON.stringify(eventsArray));
    }
}

// created timeblocks with timestamps //
function createTimeblocks(){
  var time = 9;
  var APM = "AM";

  
  // 9am - 5pm is 9 blocks in total
  for (var i = 0; i < 9; i++){
      //each time block is a row
      var hourRow = $("<div>");
      hourRow.attr("class", "row time-block");

      // hour block includes the time and spans a column of size 1
      var hourBlock = $("<div>");
      var hourBlockTime = time + APM;
      hourBlock.attr("class", "hour col-1");
      hourBlock.text(hourBlockTime);

      // event block is a textarea and spans 10 columns
      var eventBlock = $("<textarea>");
      eventBlock.attr("class", "col-10");
      // the blocks will be different colors based on current time
      if(currentHour+currentAPM === time+APM){
          eventBlock.addClass("present");
      } 
      else if (
          ((currentAPM === "PM" && APM === "AM")) ||
          (currentAPM === APM && parseInt(currentHour) > time && parseInt(currentHour) !== 12) ||
          (time === 12 && currentAPM === "PM") 
      ){
          eventBlock.addClass("past");
      } 
      else if (
          parseInt(time) > parseInt(currentHour) && time !== 12 || 
          (currentHour === 12 && currentAPM == "PM" && APM === "PM") ||
          (APM === "PM" && currentAPM == "AM") ||
          (parseInt(currentHour) === 12 && currentAPM === "AM")
      ){
          eventBlock.addClass("future");
      }

      // block includes a save icon and spans a column of size //
      var saveBlock = $("<div>");
      saveBlock.attr("class", "col-1 saveBtn");
      saveBlock.append('<i class="fa fa-save" ></i>'); // added icon to the div


