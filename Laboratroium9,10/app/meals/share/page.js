import classes from "./share-form.module.css";
import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";
import fs from "fs";
import path from "path";

export default function ShareMealPage() {
  async function shareMeal(formData) {
    "use server";

    const title = formData.get("title");
    const summary = formData.get("summary");
    const instructions = formData.get("instructions");
    const category = formData.get("category") || "default"; // dodane
    const image = formData.get("image");

    // --- walidacja ---
    if (!title || !summary || !instructions || !category || !image || image.size === 0) {
      throw new Error("Invalid input");
    }

    // --- slug ---
    const slug = title.toLowerCase().replace(/\s+/g, "-");

    // --- zapis obrazu ---
    const extension = image.name.split(".").pop();
    const fileName = `${slug}.${extension}`;
    const imagePath = path.join(process.cwd(), "public", "images", fileName);
    const buffer = Buffer.from(await image.arrayBuffer());
    fs.writeFileSync(imagePath, buffer);

    // --- zapis do bazy ---
    saveMeal({
      title,
      summary,
      instructions,
      category,
      image: `/images/${fileName}`,
      slug,
      creator: "User",
      creator_email: "user@example.com"
    });

    // --- przekierowanie po zapisaniu ---
    redirect("/meals");
  }

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>➕ Add New Meal</h1>
      <p className={classes.subtitle}>
        Share your ocean-inspired dish with the world 🌊🐟
      </p>

      <form action={shareMeal} className={classes.form}>
        <div className={classes.control}>
          <label>Meal Name</label>
          <input
            type="text"
            name="title"
            required
            placeholder="e.g. Tropical Salmon Bowl"
          />
        </div>

        <div className={classes.control}>
          <label>Category</label>
          <input
            type="text"
            name="category"
            required
            placeholder="e.g. seafood, exotic, fast"
          />
        </div>

        <div className={classes.control}>
          <label>Short Description</label>
          <textarea
            name="summary"
            rows="3"
            required
            placeholder="Describe your ocean dish..."
          />
        </div>

        <div className={classes.control}>
          <label>Instructions</label>
          <textarea
            name="instructions"
            rows="6"
            required
            placeholder="How to prepare the meal..."
          />
        </div>

        <div className={classes.control}>
          <label>Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            required
          />
        </div>

        <button className={classes.submit}>Submit Meal</button>
      </form>
    </main>
  );
}
