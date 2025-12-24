import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function HomePage() {
  return (
    <main className={classes.main}>
  <div className={classes['ImageSlideshow']}>
    <ImageSlideshow />
  </div>

  <div className={classes['hero-text']}>
    <h2>Ocean Bites 🌊</h2>
    <p>Discover delicious meals inspired by the sea 🐟</p>
    <p>
      Welcome to Ocean Bites! Explore colorful seafood dishes, refreshing salads,
      and tasty snacks that will make you feel like you're by the sea. 🌊
    </p>
  </div>
</main>

  );
}
