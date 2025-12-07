"use client";

import { useState } from "react";
import MealGrid from "@/components/meals/meal-grid";
import classes from "./page.module.css";

const ALL_MEALS = {
  seafood: [
    { title: "Grilled Salmon", image: "/images/salmon.jpg" },
    { title: "Garlic Shrimp", image: "/images/shrimp.jpg" },
    { title: "Fried Calamari", image: "/images/calamari.jpg" },
  ],
  exotic: [
    { title: "Coconut Sea Curry", image: "/images/coconut.jpg" },
    { title: "Tropical Tuna Bowl", image: "/images/bowl.jpg" },
    { title: "Pineapple Fish Skewers", image: "/images/pineapple.jpg" },
  ],
  fast: [
    { title: "Ocean Fish Taco", image: "/images/taco.jpg" },
    { title: "Crispy Fish Burger", image: "/images/burger.jpg" },
    { title: "Sea Fries Box", image: "/images/fries.jpg" },
  ],
};

export default function MealsPage() {
  const [filter, setFilter] = useState("seafood");

  return (
    <>
      <header className={classes.header}>
        <h1>🌊 Ocean Meals</h1>

        <div className={classes.addWrapper}>
          <a href="/meals/share" className={classes.addMeal}>
            ➕ Add New Meal
          </a>
        </div>

        <div className={classes.filters}>
          <button
            onClick={() => setFilter("seafood")}
            className={filter === "seafood" ? classes.active : ""}
          >
            🐟 Seafood
          </button>

          <button
            onClick={() => setFilter("exotic")}
            className={filter === "exotic" ? classes.active : ""}
          >
            🦜 Exotic
          </button>

          <button
            onClick={() => setFilter("fast")}
            className={filter === "fast" ? classes.active : ""}
          >
            ⚡ Fast Ocean
          </button>
        </div>
      </header>

      <main className={classes.main}>
        {/* Przekazujemy slug i obraz do MealGrid */}
        <MealGrid meals={ALL_MEALS[filter]} />
      </main>
    </>
  );
}
