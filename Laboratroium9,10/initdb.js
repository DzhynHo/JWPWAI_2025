const sql = require("better-sqlite3");
const db = sql("meals.db");

// helper do slug
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}

const meals = [
  {
    category: "seafood",
    title: "Grilled Salmon",
    image: "/images/salmon.jpg",
    summary: "Delicately smoked Sockeye salmon with a rich, smoky flavor."
  },
  {
    category: "seafood",
    title: "Garlic Shrimp",
    image: "/images/shrimp.jpg",
    summary: "Juicy shrimp sautéed in garlic and olive oil."
  },
  {
    category: "seafood",
    title: "Fried Calamari",
    image: "/images/calamari.jpg",
    summary: "Crispy golden fried calamari served with lemon wedges."
  },
  {
    category: "exotic",
    title: "Coconut Sea Curry",
    image: "/images/coconut.jpg",
    summary: "Tropical curry with tender seafood and coconut milk."
  },
  {
    category: "exotic",
    title: "Tropical Tuna Bowl",
    image: "/images/bowl.jpg",
    summary: "Fresh tuna, mango, and avocado in a colorful bowl."
  },
  {
    category: "exotic",
    title: "Pineapple Fish Skewers",
    image: "/images/pineapple.jpg",
    summary: "Grilled fish and pineapple on skewers, lightly glazed."
  },
  {
    category: "fast",
    title: "Ocean Fish Taco",
    image: "/images/taco.jpg",
    summary: "Quick and tasty fish tacos perfect for lunch."
  },
  {
    category: "fast",
    title: "Crispy Fish Burger",
    image: "/images/burger.jpg",
    summary: "Golden fried fish fillet served in a soft bun with sauce."
  },
  {
    category: "fast",
    title: "Sea Fries Box",
    image: "/images/fries.jpg",
    summary: "Crispy fries with calamari bites and tartar sauce."
  }
];

// TABELA – WSZYSTKIE KOLUMNY Z LAB12
db.prepare(`
  CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL,
    category TEXT
  )
`).run();

// INSERT
const insert = db.prepare(`
  INSERT INTO meals (
    slug,
    title,
    image,
    summary,
    instructions,
    creator,
    creator_email,
    category
  ) VALUES (
    @slug,
    @title,
    @image,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @category
  )
`);

for (const meal of meals) {
  insert.run({
    slug: slugify(meal.title),
    title: meal.title,
    image: meal.image,
    summary: meal.summary,
    instructions: `
      This dish is part of our ${meal.category} collection.
      Prepared fresh with high-quality ingredients.
    `,
    creator: "Admin",
    creator_email: "admin@seafood-app.com",
    category: meal.category
  });
}

console.log("Database initialized (LAB12 compatible) ✔");
