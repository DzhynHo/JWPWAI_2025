import React, { useState } from 'react';

const tasks = [
  { id: 1, title: 'Wypić energolę', completed: true },
  { id: 2, title: 'Kupić piwo', completed: false },
  { id: 3, title: 'Wypić piwo', completed: true },
  { id: 4, title: 'Zrobić zadanie domowe', completed: false },
  { id: 5, title: 'Pójść spać', completed: false },
];


function TaskList() {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return filter === 'completed' ? task.completed : !task.completed;
  });

  return (
    <div>
      <h2>Lista zadań</h2>

      <label htmlFor="filter">Filtruj: </label>
      <select id="filter" onChange={e => setFilter(e.target.value)}>
        <option value="all">Wszystkie</option>
        <option value="completed">Ukończone</option>
        <option value="incomplete">Nieukończone</option>
      </select>

      <ul>
        {filteredTasks.map(task => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
