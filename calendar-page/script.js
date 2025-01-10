// Script to fill the calendar with days for January 2025
// (January 2025 starts on a Wednesday, has 31 days)
document.addEventListener('DOMContentLoaded', () => {
  const calendarBody = document.getElementById('calendarBody');
  
  // January 2025 specifics
  // Day 1 is a Wednesday => Sunday=0, Monday=1, Tuesday=2, Wednesday=3 => offset=3
  const totalDays = 31;
  const startDayOffset = 3; 
  
  let dayNumber = 1;
  let done = false;
  
  for (let row = 0; row < 6; row++) {  // up to 6 rows for a month
    const tr = document.createElement('tr');
    
    for (let col = 0; col < 7; col++) {
      const td = document.createElement('td');
      
      // Put blank cells before day 1
      if ((row === 0 && col < startDayOffset) || done) {
        // blank cell
      } else {
        td.innerHTML = `<span class="dayNumber">${dayNumber}</span>`;
        dayNumber++;
        if (dayNumber > totalDays) {
          done = true;
        }
      }
      tr.appendChild(td);
    }
    calendarBody.appendChild(tr);
    if (done) break;
  }

  // Scroll Up and Scroll Down logic for the rightPane
  const scrollBox = document.getElementById('scrollBox');
  const scrollUpBtn = document.getElementById('scrollUp');
  const scrollDownBtn = document.getElementById('scrollDown');

  scrollUpBtn.addEventListener('click', () => {
    scrollBox.scrollBy({ top: -50, behavior: 'smooth' });
  });

  scrollDownBtn.addEventListener('click', () => {
    scrollBox.scrollBy({ top: 50, behavior: 'smooth' });
  });
});
