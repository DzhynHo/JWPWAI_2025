import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import logo from "@/assets/logo.png";
import NavLink from "./nav-link";


export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Image src={logo} alt="Foodies" priority />
      </Link>

      <nav className={classes.nav}>
        <ul>
          <NavLink href="/meals">Meals</NavLink>
          <li><Link href="/meals/share">Share Meal</Link></li>
          <li><Link href="/community">Community</Link></li>
        </ul>
      </nav>
    </header>
  );
}
