import "./styles.css"
import { generateCalendar } from "./calendar"

function renderContent(){

  const homeBtn = document.querySelector(".btn-home")

  generateCalendar()
}

renderContent()