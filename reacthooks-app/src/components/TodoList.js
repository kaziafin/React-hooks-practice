// TodoList.jsx
import React from 'react';

const TodoList = ({ newTask, setNewTask, addTask, remainingTasks, completedTasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 w-full"
        />
        
        <button
          onClick={addTask}
          className="bg-blue-500 text-white py-2 px-4 ml-2 rounded"
        >
          Add Task
        </button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Tasks</h2>
        <ul>
          {remainingTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between mb-2"
            >
              <span className={`${task.completed ? 'line-through' : ''}`}>
                {task.text}
              </span>
              <div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => toggleTaskCompletion(task.id)}
                  className="text-blue-500"
                >
                  {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">Completed Tasks</h2>
        <ul>
          {completedTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between mb-2"
            >
              <span className="line-through">{task.text}</span>
              <div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => toggleTaskCompletion(task.id)}
                  className="text-blue-500"
                >
                  Mark Incomplete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
