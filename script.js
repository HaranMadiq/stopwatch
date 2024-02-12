// Variables to store time values for the stopwatch
var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

// Variables to store previous time values and differences
var prev_hr = 0;
var prev_min = 0;
var prev_sec = 0;
var prev_count = 0;
var diff_hr = 0;
var diff_min = 0;
var diff_sec = 0;
var diff_count = 0;

// Variable to control the stopwatch state
var timer = false;


// Audio for stopwatch sounds
const audio = new Audio();
audio.src = "audio/sound_trim.mp3";

// Function to get HTML element by ID
function $id(id) {
    return document.getElementById(id);
}

// Function to start or pause the stopwatch
function start() {
    // Play audio
    audio.play();

    // Toggle timer state
    if (!timer){
        timer = true;
        // Change button text to pause
        $id("start").innerHTML = '<i class="far fa-pause-circle"></i> Stop';
        // Start stopwatch
        stopwatch();
    }
    else {
        timer = false;
        // Change button text to start
        $id("start").innerHTML = '<i class="far fa-play-circle"></i> Start';
    }
}

// Function to reset the stopwatch
function reset() {
    // Play audio
    audio.play();

    // Reset timer state
    timer = false;
    // Change button text to start
    $id("start").innerHTML = '<i class="far fa-play-circle"></i> Start';

    // Reset stopwatch values
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    // Update display with reset values
    $id("hr").innerHTML = "00";
    $id("min").innerHTML = "00";
    $id("sec").innerHTML = "00";
    $id("count").innerHTML = "00";
    lapCounter = 1;
}

// Variable to store timeout ID for the stopwatch
let timeoutId;

// Function to run the stopwatch
function stopwatch() {
    // Clear previous timeout
    clearTimeout(timeoutId);

    // Increment count
    if (timer == true)
        count = count + 1;

    // Update seconds, minutes, hours accordingly
    if (count == 99) {
        sec = sec + 1;
        count = 0;
    }
    if (sec == 59) {
        min = min + 1;
        sec = 0;
    }
    if (min == 59) {
        hr = hr + 1;
        min = 0;
        sec = 0;
    }

    // Convert time values to strings
    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;

    // Add leading zeros if necessary
    if (hr < 10) {
        hrString = "0" + hrString;
    }
    if (min < 10) {
        minString = "0" + minString;
    }
    if (sec < 10) {
        secString = "0" + secString;
    }
    if (count < 10) {
        countString = "0" + countString;
    }

    // Update display with new values
    $id("hr").innerHTML = hrString;
    $id("min").innerHTML = minString;
    $id("sec").innerHTML = secString;
    $id("count").innerHTML = countString;

    // Call stopwatch function recursively every 10 milliseconds
    timeoutId = setTimeout("stopwatch()", 10);
}

// Function to update the date and time continuously
let date;
let day;
let dayn;
let month;
setInterval(() => {
    // Get current date
    date = new Date();
    // Get month and year
    let month = date.getMonth();
    let year = date.getFullYear();

    // Switch statement to get the name of the day
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }

    // Switch statement to get the name of the month
    switch (new Date().getMonth()) {
        case 0:
            month = "Jan";
            break;
        case 1:
            month = "Feb";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "Aug";
            break;
        case 8:
            month = "Sept";
            break;
        case 9:
            month = "Oct";
            break;
        case 10:
            month = "Nov";
            break;
        case 11:
            month = "Dec";
            break;
    }

    // Get day number
    dayn = date.getDate();

    // Format date string
    date = dayn + " " + month + "  , " + year;

    // Update HTML element with date string
    $id('d1').innerHTML = date;
}, 1000); // Update every second
