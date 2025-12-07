"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import classes from "./meal-detail.module.css";

export default function MealDetailPage() {
  const params = useParams();
  const mealId = params.someName;
  const router = useRouter();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    async function fetchMeal() {
      const res = await fetch("/api/meals");
      const data = await res.json();
      const foundMeal = data.find(
        (m) => m.title.toLowerCase().replace(/\s+/g, "-") === mealId
      );
      setMeal(foundMeal || null);
    }
    fetchMeal();
  }, [mealId]);

  if (!meal) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading or meal not found...</p>;

  return (
    <main className={classes.main}>
      <button className={classes.back} onClick={() => router.push("/meals")}>
        ← Back to Meals
      </button>

      <h1 className={classes.title}>{meal.title}</h1>
      <p className={classes.category}>Category: {meal.category}</p>

      <div className={classes.imageWrapper}>
        <img src={meal.image} alt={meal.title} />
      </div>

      <p className={classes.description}>{meal.description}</p>
    </main>
  );
}
