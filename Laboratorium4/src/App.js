import "./App.css";
import Hello from "./Hello";
import HelloWithProps from "./HelloWithProps";
import Counter  from "./Counter";
import InputTracker from "./InputTracker";
import LoginStatus from "./LoginStatus";
import TodoList from "./TodoList";
import LoginForm from "./LoginForm";

function App() {
  const tasks = [
  "Nakarmić kota, zanim mnie zje",
  "Zrobić mema o React",
  "Uratować świat… po drzemce"
];


  return (
    <div>
      <Hello />
      <HelloWithProps name="Anna" />
      <HelloWithProps name="Bartek" />
      <HelloWithProps name="Celina" />
      <Counter/>
      <InputTracker/>
      <LoginStatus isLoggedIn={true} />
      <TodoList todos={tasks} />
      <LoginForm/>
    </div>
  );
}

export default App;
