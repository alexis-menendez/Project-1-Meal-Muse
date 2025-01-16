document.addEventListener('DOMContentLoaded', function() {
    // load recipes from local storage
    let storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
  
    storedRecipes.forEach(recipe => {
      const li = document.createElement('li');
      li.draggable = true;
      li.textContent = recipe.name;
      notesList.appendChild(li);
    });
  
    // make them draggable
    const recipeItems = document.querySelectorAll('#notesList li[draggable="true"]');
    recipeItems.forEach(item => {
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.innerText);
      });
    });
  
    // calendar data
    let calendarData = JSON.parse(localStorage.getItem('calendarData')) || {};
  
    function saveCalendarData() {
      localStorage.setItem('calendarData', JSON.stringify(calendarData));
    }
  
    // month/year
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    let currentMonth = 0; // 0=january
    let currentYear = 2025;
  
    // grab references to your html elements
    const calendarTitle = document.getElementById('calendarTitle');
    const prevMonthBtn = document.getElementById('prevMonthBtn');
    const nextMonthBtn = document.getElementById('nextMonthBtn');
    const calendarBody = document.getElementById('calendarBody');
  
    // rendering the calendar
    function renderCalendar() {
      calendarBody.innerHTML = '';
  
      calendarTitle.textContent = `${monthNames[currentMonth]} ${currentYear} Meal Calendar`;
  
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
      const numDays = lastDayOfMonth.getDate();
  
      const startDay = firstDayOfMonth.getDay();
  
      let dayCounter = 1;
      let done = false;
  
      while (!done) {
        const row = document.createElement('tr');
  
        for (let weekday = 0; weekday < 7; weekday++) {
          const cell = document.createElement('td');
  
          if ((dayCounter === 1 && weekday < startDay) || dayCounter > numDays) {
            cell.innerHTML = '<span class="calendar-dayNumber"></span>';
          } else {
            const dayNumber = dayCounter;
            cell.innerHTML = `<span class="calendar-dayNumber">${dayNumber}</span>`;
  
            const m = String(currentMonth + 1).padStart(2, '0');
            const d = String(dayNumber).padStart(2, '0');
            const dateKey = `${currentYear}-${m}-${d}`;
  
            if (calendarData[dateKey]) {
              calendarData[dateKey].forEach(recipeName => {
                const recipeDiv = createRecipeDiv(recipeName, dateKey);
                cell.appendChild(recipeDiv);
              });
            }
            enableDropOnCell(cell, dateKey);
  
            dayCounter++;
          }
          row.appendChild(cell);
  
          if (dayCounter > numDays) {
            done = true;
          }
        }
        calendarBody.appendChild(row);
      }
    }
  
    // drag & drop
    function enableDropOnCell(cell, dateKey) {
      cell.addEventListener('dragover', (e) => {
        e.preventDefault();
      });
  
      cell.addEventListener('drop', (e) => {
        e.preventDefault();
        const recipeName = e.dataTransfer.getData('text/plain');
  
        if (!calendarData[dateKey]) {
          calendarData[dateKey] = [];
        }
        calendarData[dateKey].push(recipeName);
        saveCalendarData();
  
        const recipeDiv = createRecipeDiv(recipeName, dateKey);
        cell.appendChild(recipeDiv);
      });
    }
  
    function createRecipeDiv(recipeName, dateKey) {
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('calendar-recipe');
      recipeDiv.textContent = recipeName;
  
      recipeDiv.addEventListener('click', () => {
        if (confirm(`Remove "${recipeName}"?`)) {
          // remove from dom
          recipeDiv.remove();
  
          // remove from calendardata
          calendarData[dateKey] = calendarData[dateKey].filter(r => r !== recipeName);
          saveCalendarData();
        }
      });
      return recipeDiv;
    }
  
    // next/prev buttons
    prevMonthBtn.addEventListener('click', () => {
      if (currentMonth > 0) {
        currentMonth--;
        renderCalendar();
      }
    });
  
    nextMonthBtn.addEventListener('click', () => {
      if (currentMonth < 11) {
        currentMonth++;
        renderCalendar();
      }
    });
  
    // scrolling buttons
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    const scrollDownBtn = document.getElementById('scrollDownBtn');
    const scrollBox = document.querySelector('.calendar-scrollBox');
  
    scrollUpBtn.addEventListener('click', () => {
      scrollBox.scrollTop -= 50;
    });
  
    scrollDownBtn.addEventListener('click', () => {
      scrollBox.scrollTop += 50;
    });
  
    // initial render
    renderCalendar();
  });
  