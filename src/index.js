import "./styles.css"
import { renderHomePage } from "./home"

function renderContent(){
  const homeBtn = document.querySelector(".btn-home")
  const calendarBtn = document.querySelector(".btn-calendar")
  const projectsBtn = document.querySelector(".btn-projects")
  renderHomePage()
  homeBtn.addEventListener("click", ()=>{
    renderHomePage()
  })
}

renderContent()