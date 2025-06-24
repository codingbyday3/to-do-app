import "./styles.css"
import { renderHomePage } from "./home"
import { renderCalendar } from "./calendar"

function renderContent(){
  const contentContaier = document.querySelector("#content-container")
  const homeBtn = document.querySelector(".btn-home")
  const calendarBtn = document.querySelector(".btn-calendar")
  const projectsBtn = document.querySelector(".btn-projects")

  contentContaier.innerHTML = renderHomePage()
  homeBtn.addEventListener("click", ()=>{
    contentContaier.innerHTML = renderHomePage()
  })

  calendarBtn.addEventListener("click",()=>{
    contentContaier.innerHTML = renderCalendar()
  })
}

renderContent()