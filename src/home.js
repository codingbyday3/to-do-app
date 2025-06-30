import { days } from "./calendar"
import {format} from 'date-fns'

function generateHomePage(){
  const contentContaier = document.querySelector("#content-container")
  contentContaier.innerHTML =  `
      <div class="homepage-container">
        <h2>Welcome to Your To-Do App!</h2>
        <form class="homepage-tasks-container">
          <h3>Today's list</h3>
          <ul class="front-page-tasks">
            <li>
              <input type="checkbox" id="task-1">
              <label for="task">Get grocceries</label>
            </li>
            <li>
              <input type="checkbox" id="task-2">
              <label for="task-2">Finish homework</label>
            </li>
            <li>
              <input type="checkbox" id="task-3">
              <label for="task-3">Go to sleep</label>
            </li>
          </ul>
        </form>

      </div>
  `

  findTodaysDate()
  
}


function generateTasks(){
  const ul = document.querySelector(".front-page-tasks")
  const li = document.createElement("li")
  const input = document.createElement("input")
  const label = document.createElement("label")

  
  
}

function findTodaysDate(){
  const today = format(new Date(), "d.MM")
  for(let day of days){
    console.log(day)
    if(day.date === today){
      return day.date
    }
  }
}


export {generateHomePage}