import Image from "next/image";
import Link from "next/link";
import classes from "./meals-grid.module.css";

export default function MealGrid({ meals }) {
  return (
    <ul className={classes.grid}>
      {meals.map((meal, index) => {
        const slug = meal.title.toLowerCase().replace(/\s+/g, "-");

        return (
          <li key={index} className={classes.card}>
            <div className={classes.imageWrapper}>
              <Image
                src={meal.image}
                alt={meal.title}
                fill
                style={{ objectFit: "cover", borderRadius: "0.5rem" }}
              />
            </div>

            <h3 className={classes.cardTitle}>{meal.title}</h3>

            <Link href={`/meals/${slug}`} className={classes.detailsLink}>
              View Details
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
