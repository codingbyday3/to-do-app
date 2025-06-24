function renderHomePage(){
  const contentContaier = document.querySelector("#content-container")
  contentContaier.innerHTML = `
      <div class="homepage-container">
        <h2>Welcome to Your To-Do App!</h2>
        <p>
          Stay organized and boost your productivity with our simple and efficient task manager. Create, manage, and complete your tasks with ease. Whether it's daily chores, work goals, or long-term projects — we’ve got you covered.
          Let’s get things done, one task at a time!
        </p>
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
        <div class="homepage-tasks-container">
          <a href="#"></a>
        </div>

      </div>
  `
}

export {renderHomePage}