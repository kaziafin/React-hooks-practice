// TodoListLogic.js
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import TodoList from './TodoList';

const TodoListLogic = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchedTasks = [
      { id: 1, text: 'Learn React Hooks', completed: false },
      { id: 2, text: 'Build a Todo App', completed: true },
    ];

    setTasks(fetchedTasks);
  }, []);

  const addTask = useCallback(() => {
    if (newTask.trim() === '') return;
    const newTaskObject = { id: Date.now(), text: newTask, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTaskObject]);
    setNewTask('');
  }, [newTask]);

  const deleteTask = useCallback((taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }, []);

  const toggleTaskCompletion = useCallback((taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const completedTasks = useMemo(
    () => tasks.filter((task) => task.completed),
    [tasks]
  );
  const remainingTasks = useMemo(
    () => tasks.filter((task) => !task.completed),
    [tasks]
  );

  return (
    <TodoList
      newTask={newTask}
      setNewTask={setNewTask}
      addTask={addTask}
      remainingTasks={remainingTasks}
      completedTasks={completedTasks}
      deleteTask={deleteTask}
      toggleTaskCompletion={toggleTaskCompletion}
    />
  );
};

export default TodoListLogic;
