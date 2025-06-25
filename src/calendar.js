import { getWeek } from "./calendar-content"

function generateSidebar(){

  const contentContaier = document.querySelector("#content-container")
  contentContaier.innerHTML = `   
    <div class="calendar-container">
        <div class="sidebar">
          <button class="btn-sidebar btn-previous-week">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>arrow-up</title>
              <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
            </svg>
          </button>
          <div class=btn-container>
          </div>
          
          <button class="btn-sidebar btn-next-week">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>arrow-down</title>
              <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
            </svg>
          </button>
        </div>
      </div
    `
      const btnContainer = document.querySelector(".btn-container")
      getWeek().forEach((date)=>{
        const button = document.createElement("button")
        button.classList = "day-container"
        button.innerHTML = `
          <p>${date.dayName}</p>
          <p>${date.day}</p>
        `
        btnContainer.appendChild(button)
      })
}


function generateCalendar(){
  return generateSidebar()
}

export {generateCalendar}