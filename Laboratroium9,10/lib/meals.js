import sql from "better-sqlite3";

const db = sql("meals.db");

export function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export function saveMeal(meal) {
  db.prepare(`
    INSERT INTO meals (title, summary, instructions, category, image, slug, creator, creator_email)
    VALUES (@title, @summary, @instructions, @category, @image, @slug, @creator, @creator_email)
  `).run(meal);
}
