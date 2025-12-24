import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meal-grid";
import classes from "./page.module.css";



export default function MealsPage() {
  const meals = getMeals();

  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
      </header>
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
