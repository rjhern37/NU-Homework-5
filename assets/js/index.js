

var saveBtn = $('.saveBtn');
var deleteBtn = $('.deleteBtn');

var currentDayEl = $("#currentDay");

var timeBlocks = $(".timeBlock")

currentDayEl.text(moment().format("MMMM Do YYYY, hh:mm:ss a"));


//Function to display current day/Time on Jumbotron
var updateTime = function (){
    currentDayEl.text(moment().format("MMMM Do YYYY, hh:mm:ss a"));

    var currentHour = moment().hour();

    timeBlocks.each(function (i, element){
        element = $(element);
        if(currentHour > element.attr("data-hour")){
            element.addClass("past").removeClass("future present");
        } else if (currentHour == element.attr("data-hour")){
            element.addClass("present").removeClass("future past");
        }
    });
}
setInterval(updateTime, 1000)


// Function to add event info to local storage && to show a 'Event successfully saved' alert
function save(){
    saveBtn.on('click', function(){
        var btnData = $(this).attr("saveTime");
        console.log(btnData)

        var descriptionTarget = $("#eventInfo" + btnData);
        console.log(descriptionTarget);
        console.log(descriptionTarget.val());

        localStorage.setItem(descriptionTarget.attr("id"), descriptionTarget.val())
        alert("Saved to your calender!") 
    });
};
save();


//Function to delete (reset) events that were previously saved to local storage && to show a 'Event successfully deleted' alert
function reset(){
    deleteBtn.on('click', function(){
        var btnData = $(this).attr("delTime");
        console.log(btnData)

        var descriptionTarget = $("#eventInfo" + btnData);
        localStorage.clear(descriptionTarget.attr("id"), descriptionTarget.val());
        
        alert('You deleted an event.')
        });
};
reset();


//Displays Events that are shaved to local storage (Given that there are events saved)
$("#eventInfo7").text(localStorage.getItem("eventInfo7"));
$("#eventInfo8").text(localStorage.getItem("eventInfo8"));
$("#eventInfo9").text(localStorage.getItem("eventInfo9"));
$("#eventInfo10").text(localStorage.getItem("eventInfo10"));
$("#eventInfo11").text(localStorage.getItem("eventInfo11"));
$("#eventInfo12").text(localStorage.getItem("eventInfo12"));
$("#eventInfo13").text(localStorage.getItem("eventInfo13"));
$("#eventInfo14").text(localStorage.getItem("eventInfo14"));
$("#eventInfo15").text(localStorage.getItem("eventInfo15"));
$("#eventInfo16").text(localStorage.getItem("eventInfo16"));
$("#eventInfo17").text(localStorage.getItem("eventInfo17"));
$("#eventInfo18").text(localStorage.getItem("eventInfo18"));

