// global variables

var currentDayEl = $('#currentDay');  
var tableEL = $('#table');
var currentHour = moment().format('HH');
// ^^ display current time

currentDayEl.text(moment().format('dddd, MMMM Do')); 
// ^^ display current date minus the year


function spreadsheet() {
// creation of the spreadsheet planner in js instead of HTML
    for (var i=0; i<=8; i++) {
        var clock = i + 9;
        // ^^ start the spreadsheet at 9:00
        var hours24 = i + 9;
        //  ^^ placeholder variable to keep the clock moving in an 24hour format
        var amORpm = 'AM';
        
            if (clock === 12) {
                amORpm = 'PM';
            } else if (clock > 12) {
                clock -= 12;
                amORpm = 'PM';
            };
            // ^^ This if else statement changes the time to AM or PM respectively
        

        
    }; // end of for loop   
};

spreadsheet(); // any references to HTML elements created by this function must be done after this call

