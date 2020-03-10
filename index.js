//var localStorage = 
//var  = 'this is some new text'

var saveBtn = $('.saveBtn');
var deleteBtn = $('.deleteBtn');


// Function to add event info to local storage && to show a 'Event successfully saved' alert
function save(){
    var eventText = ""
    
    saveBtn.on('click', function(){
        var events = $('#eventInfo').val();
        console.log(localStorage)
        localStorage.setItem('eventInfo', events)
        console.log(localStorage) 
        alert(localStorage.getItem('name')) 
    });



};

save();


//Function to delete (reset) events that were previously saved to local storage && to show a 'Event successfully deleted' alert
function reset(){
    var events = $('#eventInfo').val();

        localStorage.setItem('eventInfo', events);
        deleteBtn.on('click', function(){
            alert('you clicked a delete button')
        });
    
    
    



};
reset();

//Function to change color of hours that have passed 

function timePassed(){
    
    var colors;
    var hours;


};


//Function to display current day/Time on Jumbotron
var currentDay;

function currentTime() {


};



