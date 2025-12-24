import Image from "next/image";

import mealIcon from "@/assets/icons/logo.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Ocean Food</span>
        </h1>
        <p>Join our ocean-loving community and share your favorite seafood recipes! 🌊🐟</p>
      </header>

      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          <li className={classes.perkCard}>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Share & discover ocean-inspired recipes</p>
          </li>
          <li className={classes.perkCard}>
            <Image src={communityIcon} alt="Community of cooks" />
            <p>Connect with fellow ocean food lovers</p>
          </li>
          <li className={classes.perkCard}>
            <Image src={eventsIcon} alt="Cooking events" />
            <p>Join exclusive ocean-themed cooking events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
