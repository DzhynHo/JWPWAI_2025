import { getMeals } from "@/lib/meals";
import MealsGrid from "../meals-grid";

export default async function MealsLoader() {
  const meals = getMeals();
  return <MealsGrid meals={meals} />;
}
