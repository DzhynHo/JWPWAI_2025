import logo from './logo.svg';
import "./style.css";
import ClickCounter from './ClickCounter';
import PrimeCalculator from './PrimeCalculator';
import FormReducer from './FormReducer';
import { useTheme, ThemeProvider } from "./ThemeContext";
import LayoutEffectExample from './LayoutEffectExample';


function App() {
  return (
    <div className="App">
      <h1>Ćwiczenie 1 – useRef</h1>
      <ClickCounter />
      <h1>Ćwiczenie 2 -  useMemo</h1>
      <PrimeCalculator />
      <h1>Ćwiczenie 3 - useReducer</h1>
      <FormReducer />
      <h1>Ćwiczenie 4 - useContext</h1>
      <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
    <h1>Ćwiczenie 5 - useLayoutEffect</h1>
    <LayoutEffectExample />
    </div>
  );
}

function ThemeSwitcher() {
  const { dark, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000",
        padding: "20px",
        minHeight: "100vh"
      }}
    >
      <button onClick={toggleTheme}>Przełącz motyw</button>
    </div>
  );
}


export default App;
