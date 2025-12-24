// components/meals/meal-grid.js
import Image from "next/image";
import Link from "next/link";
import classes from "./meals-grid.module.css";

export default function MealGrid({ meals }) {
  return (
    <ul className={classes.grid}>
      {meals.map((meal) => (
        <li key={meal.id} className={classes.card}>
          <Link href={`/meals/${meal.slug}`} className={classes.detailsLink}>
            <div className={classes.imageWrapper}>
              <Image
                src={meal.image}
                alt={meal.title}
                fill
                style={{ objectFit: "cover", borderRadius: "0.5rem" }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
            <h3 className={classes.cardTitle}>{meal.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
