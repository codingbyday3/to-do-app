import { addDays, subDays, startOfWeek, endOfWeek, eachDayOfInterval, format } from 'date-fns'

function getWeek(){
  const previousWeekBtn = document.querySelector(".btn-previous-week")
  const nextWeekBtn = document.querySelector(".btn-next-week")

  let date = new Date()

  function renderWeek(){
    const weekStart = startOfWeek(date, { weekStartsOn: 1 }) // Monday as first day
    const weekEnd = endOfWeek(date, { weekStartsOn: 1 })     // Sunday as last day

    const weekDates = eachDayOfInterval({ start: weekStart, end: weekEnd })
    console.log(weekDates)
    return weekDates
  }

  if(previousWeekBtn){
    previousWeekBtn.addEventListener("click", ()=>{
    date = subDays(date, 7)
    renderWeek()
  })
  }

  if(nextWeekBtn){
    nextWeekBtn.addEventListener("click", ()=>{
    date = addDays(date, 7)
    renderWeek()
  })
  }

  return renderWeek()

}
