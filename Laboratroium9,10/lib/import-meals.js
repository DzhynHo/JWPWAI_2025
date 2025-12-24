import fs from "fs";
import path from "path";
import { saveMeal } from "./meals.js";

const mealsData = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "data/meals.json"), "utf-8")
);

function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

mealsData.forEach(meal => {
  saveMeal({
    title: meal.title,
    category: meal.category || "default",
    summary: meal.description,
    instructions: meal.recipe || "Brak przepisu",
    image: meal.image,
    slug: slugify(meal.title),
    creator: "Admin",
    creator_email: "admin@example.com"
  });
});



console.log("Dane zostały zapisane w bazie SQLite z slugami.");
