import React, { useState } from "react";

function ScoreDisplay() {
  const [score, setScore] = useState("");

  const getMessage = () => {
    const number = Number(score);

    if (score === "") return "";          // пусто → нет текста
    if (isNaN(number)) return <p>Nieprawidłowa wartość</p>;

    if (number < 50) return <p>Za mało punktów</p>;
    if (number < 80) return <p>W sam raz</p>;
    return <p>Super wynik!</p>;
  };

  return (
    <div>
      <h3>Sprawdź swój wynik</h3>

      <input
        type="number"
        placeholder="Wpisz liczbę..."
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <div>{getMessage()}</div>
    </div>
  );
}

export default ScoreDisplay;
