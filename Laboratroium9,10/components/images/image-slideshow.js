"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

const images = [
  { src: "/img/fish1.jpg", alt: "A fish" },
  { src: "/img/fish2.jpg", alt: "A fish" },
  { src: "/img/fish3.jpg", alt: "A fish" },
  { src: "/img/fish4.jpg", alt: "A fish" },
  { src: "/img/fish5.jpg", alt: "A fish" },
  { src: "/img/fish6.jpg", alt: "A fish" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.src}
          alt={img.alt}
          className={`${classes.image} ${index === currentImageIndex ? classes.active : ""}`}
          fill
          sizes="(max-width: 768px) 100vw, 40rem"
        />
      ))}
    </div>
  );
}
