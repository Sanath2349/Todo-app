import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div>
      <h1>To-Do App</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
