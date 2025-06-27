import { addDays, subDays, startOfWeek, endOfWeek, eachDayOfInterval, format } from 'date-fns'
const sidebarContainer = document.createElement("div")
const mainContainer = document.createElement("div")

function createDay(date){
  const tasks = []

  return{
    date,
    addTask(title, time){
      const task = createTasks(title, time)
      tasks.push(task)
    },
    getTasks() {
      return [...tasks];
    }
  }

}

function createTasks(title, time){
  return{
    title,
    time
  }
}



function getWeek(date){
  const previousWeekBtn = document.querySelector(".btn-previous-week")
  const nextWeekBtn = document.querySelector(".btn-next-week")

  if(previousWeekBtn){
    previousWeekBtn.addEventListener("click", ()=>{
      date = subDays(date, 7)

      generateSidebar(date)
    })
  }

  if(nextWeekBtn){
    nextWeekBtn.addEventListener("click", ()=>{
      date = addDays(date, 7)
      generateSidebar(date)
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

function generateSidebar(date){


  sidebarContainer.innerHTML = `   

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

  `

  function printWeekDays(){
    const btnContainer = document.querySelector(".btn-container")

    getWeek(date).forEach((day)=>{
      const button = document.createElement("button")
      button.classList = "day-container"
      button.innerHTML = `
        <p>${day.dayName}</p>
        <p>${day.day}</p>
      `
      button.addEventListener("click",()=>{
        renderTasksContainer()
      })
      btnContainer.appendChild(button)
    })
  }

  printWeekDays()

}


function renderTasksContainer(){

  function renderTasksHtml(){
    mainContainer.innerHTML = `
 
        <div class="task-container">
          <div class="task">
            <div class="new-task">
              <p class="task-name">Cleaning dishes</p>
              <div>
                <p>12:00</p>
              </div>

            </div>
            <div class="add-new-task">
              <button>+</button>
              <p>Add task</p>
            </div>

          </div>
        </div>

    `
  }
  renderTasksHtml()
}





function generateCalendar(){
  function createHtml(){

    const contentContainer = document.querySelector("#content-container")
    const calendarContainer = document.createElement("div")
    calendarContainer.className = "calendar-container"
    contentContainer.innerHTML = ""
    sidebarContainer.className = "sidebar"
    mainContainer.className = "calendar-main"
    calendarContainer.appendChild(sidebarContainer)
    calendarContainer.appendChild(mainContainer)
    contentContainer.appendChild(calendarContainer)

  }

  createHtml()
  generateSidebar(new Date())
  renderTasksContainer()

}

export {generateCalendar}