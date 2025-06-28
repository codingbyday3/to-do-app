import { addDays, subDays, startOfWeek, endOfWeek, eachDayOfInterval, format } from 'date-fns'
const sidebarContainer = document.createElement("div")
const mainContainer = document.createElement("div")
const days = []
let clickedDate = ""


function createDay(date){
  const tasks = []

  return{
    date,
    addTask(title, time){
      const task = createTasks(title, time)
      tasks.push(task)
    },
    tasks
  }

}

function createTasks(title, time){
  return{
    title,
    time
  }
}

function sidebar(date){

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
          clickedDate = day.day
          const exists = days.some(element => element.date === day.day);
          if (exists) {
            tasksContainer()
            return;
          }  
          const selectedDay = createDay(day.day)
          days.push(selectedDay)
          tasksContainer()
        })
        btnContainer.appendChild(button)
      })
    }

    printWeekDays()

  }
  generateSidebar(date)
}




function tasksContainer(){
  function renderTasksHtml(){
    const tasksContainer = document.querySelector(".task")

    mainContainer.innerHTML = `
 
        <div class="task-container">
          <div class="task">
            <div class="new-task"></div>
            <div class="add-new-task">
              <button class="task-btn">+</button>
              <p>Add task</p>
            </div>
            <dialog class="calendar-dialog">
              <div class="dialog-header">
                <h2>Task creation</h2>
                <button class="close-dialog">
                X
                </button>
              </div>
              <form method="dialog" action="">
                <div>
                  <label for="task">Task:</label>
                  <input autocomplete="off" id="task" type="text" placeholder="e.g. Make breakfast" required>
                </div>

                <div>
                  <label for="time">Time: </label>
                  <input autocomplete="off" id="time" type="time" placeholder="e.g. 19:00">
                </div>
                <button class="submit-task" type="submit">Submit</button>
              </form>
            </dialog>

          </div>
        </div>

    `
    const newTask = document.querySelector(".new-task")


    for(let day of days){
      if(day.date === clickedDate){
        if(day.tasks.length === 0){
          newTask.style.display = "none"
          return;
        }else{
                newTask.style.display = "flex"
        }
        for(let task of day.tasks){

            const timePara = document.createElement("p")
            const taskPara = document.createElement("p")
            taskPara.className = "task-name"
            console.log(task.title)
            taskPara.textContent = task.title
            timePara.textContent = task.time

            newTask.appendChild(taskPara)
            newTask.appendChild(timePara)
          
        }
      }

    }
  }

  function handleDialogClick(){
    const taskBtn = document.querySelector(".task-btn")
    const dialog = document.querySelector(".calendar-dialog")
    const closeDialog = document.querySelector(".close-dialog")
    const form = dialog.querySelector("form");

    taskBtn.addEventListener("click", ()=>{
      dialog.showModal()

    })

    closeDialog.addEventListener("click", ()=>{
      dialog.close()
    })

    dialog.addEventListener("close", () => {
      form.reset();
    });

  }

  function findSelectedDate(){
    for(let day of days){
      if(day.date === clickedDate){
        return day
      }
    }
  }

  function handleTaskForm(){
    const submitButton = document.querySelector(".submit-task")

    const findedDate = findSelectedDate()

    submitButton.addEventListener("click", ()=>{
      console.log(days)
      const task = document.querySelector("#task")
      const time = document.querySelector("#time")
      findedDate.addTask(task.value, time.value)
      renderTasksHtml()

    })

  }

  renderTasksHtml()


  handleDialogClick()
  handleTaskForm()



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
  sidebar(new Date())
  if(days.length > 0){
    tasksContainer()
  }


}

export {generateCalendar}