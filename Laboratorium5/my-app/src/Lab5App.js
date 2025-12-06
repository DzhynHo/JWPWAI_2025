import React, { useState } from "react";
import bogowieData from "./gods.json";

function Lab5App() {
  const [bogowie] = useState(bogowieData);
  const [pokazObrazki, setPokazObrazki] = useState(false);
  const [stylNaglowka, setStylNaglowka] = useState({ color: "#FFD700", fontSize: "32px" }); // Желтый
  const [stylKarty, setStylKarty] = useState({
    border: "2px solid #FFD700",
    padding: "15px",
    borderRadius: "12px",
    backgroundColor: "#1a1a1a",
    color: "#FFD700" // цвет текста в карточках
  });
  const [nazwaPliku, setNazwaPliku] = useState("");

  // Показ/скрытие картинок
  const pokazObrazkiFunkcja = () => setPokazObrazki(!pokazObrazki);

  // Клик по кнопке
  const obslugaKlikniecia = () => alert("Kliknięto przycisk!");

  // Наведение мыши на заголовок
  const obslugaNajechania = () => {
    setStylNaglowka(prev => ({
      ...prev,
      color: prev.color === "#FFD700" ? "#FFFFFF" : "#FFD700"
    }));
  };

  // Изменение стиля карточек
  const zmienStylKarty = () => {
    setStylKarty(prev => ({
      ...prev,
      border: prev.border === "2px solid #FFD700" ? "2px solid #FF4500" : "2px solid #FFD700",
      backgroundColor: prev.backgroundColor === "#1a1a1a" ? "#FFD700" : "#1a1a1a",
      color: prev.color === "#FFD700" ? "#000000" : "#FFD700" // текст черный при светлом фоне
    }));
  };

  // Выбор файла
  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (file) setNazwaPliku(file.name);
  };

  // Динамический импорт изображений
  const pobierzObrazek = (nazwaPlikuObrazu) => require(`./images/${nazwaPlikuObrazu}`);

  return (
    <div style={{ padding: "20px" }}>
      <h1 
        style={stylNaglowka} 
        onMouseOver={obslugaNajechania}
      >
        Zadanie 3 - Bogowie w Hinduizmie
      </h1>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={pokazObrazkiFunkcja} style={{ marginRight: "10px" }}>
          {pokazObrazki ? "Ukryj obrazki" : "Pokaż obrazki"}
        </button>
        <button onClick={obslugaKlikniecia} style={{ marginRight: "10px" }}>
          Kliknij mnie
        </button>
        <button onClick={zmienStylKarty}>Zmień styl kart</button>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input type="file" onChange={uploadFile} />
        {nazwaPliku && <p>Wybrany plik: {nazwaPliku}</p>}
      </div>

      {pokazObrazki && bogowie.length > 0 && (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "20px" }}>
          {bogowie.map((bog) => (
            <div key={bog.id} style={{ ...stylKarty, textAlign: "center" }}>
              <img
                src={pobierzObrazek(bog.image)}
                alt={bog.name}
                style={{ width: "150px", borderRadius: "10px" }}
              />
              <h3>{bog.name}</h3>
              <p>{bog.role}</p>
              <p>{bog.symbol}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Lab5App;
