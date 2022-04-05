const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const hours = document.getElementsByClassName('hours');
const previousHours = document.getElementsByClassName('previous-hours');

// Fetching the json making the data/lists available for use.
const data = await fetch("./data.json")
    .then(res => res.json())
    .then(data => data)

// The eventlistener is listening for click and starting a function that is adding new data in the specified areas, class hours and previousHours.
// removeColor() is removing font color of all other than the selected part.
// The for-loop is going through all the nested objects in the json file.
// Picking out timeframes.daily.current/ previous and putting this as a new value of the classes.

daily.addEventListener('click', function(){
    removeColor();
    daily.classList.add("current-click");
    for(let i = 0; i < hours.length; i++){
        hours[i].textContent = data[i].timeframes.daily.current + "hrs";
        previousHours[i].textContent = "Yesterday - " + data[i].timeframes.daily.previous + "hrs";
    }
})

weekly.addEventListener('click', function(){
    removeColor();
    weekly.classList.add("current-click");
    for(let i = 0; i < hours.length; i++){
        hours[i].textContent = data[i].timeframes.weekly.current + "hrs";
        previousHours[i].textContent = "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
    }
})

monthly.addEventListener('click', function(){
    removeColor();
    monthly.classList.add("current-click");
    for(let i = 0; i < hours.length; i++){
        hours[i].textContent = data[i].timeframes.monthly.current + "hrs";
        previousHours[i].textContent = "Last Month - " + data[i].timeframes.monthly.previous + "hrs";
    }
})

// Function removeColor, removes the color from the previous selected item.
function removeColor() {
    daily.classList.remove("current-click");
    weekly.classList.remove("current-click");
    monthly.classList.remove("current-click");
} 
