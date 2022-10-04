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