// basic calendar functionalities. pulled from geeksforgeeks.com
// just to test it out.
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");
const currdate = document.querySelector(".calendar-current-date");
const calnav = document.querySelectorAll(".calendar-navigation span");

// Array of month names
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Function to generate the calendar
const theCalendar = () => {
    // Get the first day of the month
    let dayone = new Date(year, month, 1).getDay();

    // Get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();

    // Get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();

    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();

    // Variable to store the generated calendar HTML
    let lit = "";

    // Loop to add the last dates of the previous month
    for (let i = dayone; i > 0; i--) {
        lit += `<div class="inactive">${monthlastdate - i + 1}</div>`;
    }

    // Loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) {
        // Check if the current date is today
        let isToday = i === date.getDate()
            && month === new Date().getMonth()
            && year === new Date().getFullYear()
            ? "active"
            : "";
        lit += `<div class="date ${isToday}" data-date="${i}">${i}</div>`;
    }

    // Loop to add the first dates of the next month
    for (let i = dayend; i < 6; i++) {
        lit += `<div class="inactive">${i - dayend + 1}</div>`;
    }

    // Set the inner HTML of the calendar dates
    day.innerHTML = lit;

    // Set current date
    currdate.innerHTML = `${months[month]} ${year}`;

    // Add event listeners to each date
    document.querySelectorAll('.date').forEach(dateElement => {
        dateElement.addEventListener('click', (e) => {
            document.querySelectorAll('.date').forEach(el => el.classList.remove('selected'));
            e.target.classList.add('selected');
            console.log(`Selected date: ${e.target.dataset.date} ${months[month]} ${year}`);
        });
    });
};

// Call the function to generate the calendar
theCalendar();

// Attach a click event listener to each icon
calnav.forEach(icon => {
    icon.addEventListener("click", () => {
        month = icon.id === "calendar-prev" ? month - 1 : month + 1;

        if (month < 0 || month > 11) {
            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear();
            month = date.getMonth();
        } else {
            date = new Date();
        }

        theCalendar();
    });
});