import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
import classes from "./meal-detail.module.css";

export default async function MealDetailPage({ params }) {
  // --- rozpakowanie params ---
  const resolvedParams = await params;  

  // --- getMeal jest synchroniczne, używamy slug z params ---
  const meal = getMeal(resolvedParams.someName);

  if (!meal) {
    notFound();
  }

  return (
    <main className={classes.main}>
      <h1 className={classes.title}>{meal.title}</h1>

      <div className={classes.imageWrapper}>
        <Image
          src={meal.image}
          alt={meal.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <p className={classes.description}>{meal.summary}</p>

      <h2 className={classes.subtitle}>Recipe:</h2>
      <pre className={classes.instructions}>{meal.instructions}</pre>
    </main>
  );
}
