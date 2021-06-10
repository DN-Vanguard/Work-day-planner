// global variables
var currentDayEl = $("#currentDay");  
var tableEl = $("#table");
var currentHour = moment().format("HH"); 

currentDayEl.text(moment().format("dddd, MMMM Do"));
// display date

function spreadsheet() {
// builds html elements that appear in index.html once launched
    for (var i=0; i<=8; i++) {
        var hour = i + 9; // called on line 32
        var hours24 = i + 9;
        var amORpm = "AM";
        // 24 hour format for a basic 9-5 work schedule
        
        if (hour === 12) {
            amORpm = "PM";
        } else if (hour > 12) {
            hour -= 12;
            amORpm = "PM";
        }; // switches to am or pm depending on time of day
        
        tableEl.append(
        // this generates data attribites to pull from based on the hour
        // pulls the variables above and places them into the spreadsheet in the column that I set it to
        // save icon is implemented in line 40
            `
        <div class = "row">
        
            <div class = "col-1 hour">
                ${hour}${amORpm} 
            </div>
            
            <div class = "col-10" data-hours24 = "${hours24}" id = "clock${hours24}">
                <textarea id = "userInput${hours24}"></textarea>
            </div>
            
            <div class = "col-1 saveBtn" data-saveBtn = "${hours24}">
                <i class = "bi-save-fill" data-saveBtn = "${hours24}"></i>
            </div>
        
        </div>
            `
        );
        
        var clockEl = $("#clock" + hours24);
        var hourValue = clockEl.data("hours24");
        var userInputEl = document.getElementById("userInput" + hours24);
        var userInputString = localStorage.getItem("userInput" + hours24);
        //  These variables are used to store the user inputs
        
        if (userInputString !== null) {
            userInputEl.innerHTML = userInputString; // show saved user input if there is any
        };

        colorRows(hourValue, clockEl);
        // call colorRows function after "spreadsheet" function is finished
    };
};

spreadsheet();

function colorRows(calendarHour, element) {
// css styles implemented to show background color depending on time of day.
    if (currentHour == calendarHour) {
        element.addClass("present");
    } else if (currentHour < calendarHour) {
        element.addClass("future");
    } else {
        element.addClass("past");
    };
};


