//var localStorage = 
//var  = 'this is some new text'

var saveBtn = $('.saveBtn');
var deleteBtn = $('.deleteBtn');

var currentDayEl = $("#currentDay");

var timeBlocks = $(".timeBlock")

currentDayEl.text(moment().format("MMMM Do YYYY, hh:mm:ss a"));


//Function to change color of hours that have passed   
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
    var eventText = ""
    
    saveBtn.on('click', function(){
        var events = $('#eventInfo').val();
        console.log(localStorage)
        localStorage.setItem('eventInfo', events)
        console.log(events) 
        alert("Saved to your calender!") 
    });



};

save();


//Function to delete (reset) events that were previously saved to local storage && to show a 'Event successfully deleted' alert
function reset(){
    // var events = $('#eventInfo').val();


    deleteBtn.on('click', function(){
            localStorage.removeItem('eventInfo', events)
            alert('you clicked a delete button')
        });
    

};
reset();


//Function to display current day/Time on Jumbotron
var currentDay;

function currentTime() {


};



