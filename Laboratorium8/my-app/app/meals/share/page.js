"use client";

import { useState } from "react";
import classes from "./share-form.module.css";

export default function ShareMealPage() {
  const [imagePreview, setImagePreview] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Meal submitted! (Backend coming soon 😎🌊)");
  }

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>➕ Add New Meal</h1>
      <p className={classes.subtitle}>
        Share your ocean-inspired dish with the world 🌊🐟
      </p>

      <form onSubmit={handleSubmit} className={classes.form}>
        
        <div className={classes.control}>
          <label>Meal Name</label>
          <input type="text" required placeholder="e.g. Tropical Salmon Bowl" />
        </div>

        <div className={classes.control}>
          <label>Short Description</label>
          <textarea
            rows="3"
            required
            placeholder="Describe your ocean dish..."
          ></textarea>
        </div>

        <div className={classes.control}>
          <label>Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />

          {imagePreview && (
            <div className={classes.preview}>
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
        </div>

        <button className={classes.submit}>Submit Meal</button>
      </form>
    </main>
  );
}
