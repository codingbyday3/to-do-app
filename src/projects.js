function handleDialog(){
  const openButton = document.querySelector(".delete-project-task")
  const dialog = document.querySelector(".project-dialog")

  openButton.addEventListener("click",()=>{
    dialog.showModal()
  })
}