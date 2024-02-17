import React, { createContext, useState, useContext, useEffect } from "react";
import { v4 } from "uuid";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export default function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTodos = localStorage.getItem("todosList");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState("All");
  const removeTask = (id) => {
    setTasks(tasks.filter((i) => i.id != id));
  };
  const addTask = (task) =>
    setTasks([
      ...tasks,
      {
        id: v4(),
        title: task,
        status: false,
      },
    ]);
  function filterChange(f) {
    setFilter(f);
  }

  const setStatusTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: !t.status } : t)));
  };

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        setStatusTask,
        removeTask,
        filterChange,
        filter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
