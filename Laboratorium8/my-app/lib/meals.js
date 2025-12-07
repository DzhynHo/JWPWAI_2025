import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "meals.json");

export async function getMeals() {
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function addMeal(meal) {
  const meals = await getMeals();
  meals.push({
    id: Date.now().toString(),
    ...meal,
  });

  await fs.writeFile(filePath, JSON.stringify(meals, null, 2));
}
