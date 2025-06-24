function renderHomePage(){
  
  return `
      <div class="homepage-container">
        <h2>Welcome to Your To-Do App!</h2>
        <form class="homepage-tasks-container">
          <a href="#">Today's list</a>
          <ul>
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
        <form class="homepage-tasks-container">
          <a href="#">Last project</a>
          <ul></ul>
        </form>

      </div>
  `
}

export {renderHomePage}