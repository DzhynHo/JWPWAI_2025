import React from 'react';
import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';
import Lab5App from "./Lab5App";

function App() {
  return (
    <div>
      <h1>Ćwiczenie 1: Warunkowe renderowanie</h1>
      <ToggleDetails />

      <h1>Ćwiczenie 2: Warunkowe przypisanie komponentu</h1>
      <ScoreDisplay />


      <h1>Ćwiczenie 3: Lista z dynamicznym filtrowaniem</h1>
      <TaskList />

      <h1>Ćwiczenie 4: useEffect i zewnętrzne dane</h1>
      <UserList />

      <h1>Ćwiczenie 5: Licznik z efektami ubocznymi</h1>
      <TimerCounter />

      {/* Zadanie 3: Komponent funkcyjny Lab5App */}
      <h1>Ćwiczenie 6: Komponent funkcyjny – interakcje użytkownika</h1>
      <Lab5App />
    </div>
  );
}

export default App;
