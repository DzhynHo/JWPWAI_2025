import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";

import logoImg from "@/public/assets/logo.png";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />

      <header className={classes.header}>
        {/* Logo i link do strony głównej */}
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} width={60} height={60} alt="logo" />
          Blog o Bogach Hinduizmu
        </Link>

        <nav>
<ul className={classes.navList}>
  <li><Link className={classes.navLink} href="/gods">Bogi</Link></li>
  <li><Link className={classes.navLink} href="/history">Historia</Link></li>
  <li><Link className={classes.navLink} href="/culture">Kultura</Link></li>
  
</ul>

        </nav>
      </header>
    </>
  );
}
