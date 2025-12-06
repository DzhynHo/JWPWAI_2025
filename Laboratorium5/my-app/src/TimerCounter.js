import React, { useState, useEffect } from 'react';

function TimerCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Zatrzymaj licznik po osiągnięciu 10
    if (count >= 10) return;

    // Ustaw interwał, który zwiększa licznik co sekundę
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    // Sprzątanie po interwale – zatrzymanie starego przy każdej zmianie count
    return () => clearInterval(interval);

  }, [count]); // <- Lista zależności — efekt wywołuje się, gdy zmienia się count

  return (
    <div>
      <h2>Licznik z efektami ubocznymi</h2>
      <p>Licznik: {count}</p>
    </div>
  );
}

export default TimerCounter;
