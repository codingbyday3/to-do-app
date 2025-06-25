import { addDays, subDays, startOfWeek, endOfWeek, eachDayOfInterval, format } from 'date-fns'



function getWeek(){
  const previousWeekBtn = document.querySelector(".btn-previous-week")
  const nextWeekBtn = document.querySelector(".btn-next-week")
  let date = new Date()

  if(previousWeekBtn){
    previousWeekBtn.addEventListener("click", ()=>{
      date = subDays(date, 7)
      console.log("fdsfd")
      generateSidebar()
    })
  }

  if(nextWeekBtn){
    nextWeekBtn.addEventListener("click", ()=>{
      date = addDays(date, 7)
      generateSidebar()
    })
  }


  function renderWeek(){
    const weekStart = startOfWeek(date, { weekStartsOn: 1 }) // Monday as first day
    const weekEnd = endOfWeek(date, { weekStartsOn: 1 })     // Sunday as last day

    const weekDates = eachDayOfInterval({ start: weekStart, end: weekEnd })


    return formatWantedWeek(weekDates)
  }

  function formatWantedWeek(weekDates){
    const week = []

    weekDates.forEach((date) => {
      week.push({
        dayName:format(date, "EEE"),
        day:format(date, "d.MM")
      })
    })
    return week
  
  }

  return renderWeek()

}

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

  function printWeekDays(){
    const btnContainer = document.querySelector(".btn-container")
    const previousWeekBtn = document.querySelector(".btn-previous-week")
    const nextWeekBtn = document.querySelector(".btn-next-week")

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

  printWeekDays()

}


function generateCalendar(){
  return generateSidebar()
}

export {generateCalendar}