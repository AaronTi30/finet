import React from "react";
import styles from "./homepage.module.css"
import SectionDivider from "@/components/section-divider/section-divider";
import Intro from "@/components/intro/intro";
import Testimonial from "@/components/testimonial-slider/Testimonials";
import Info from "@/components/info/info";

export default function Home() {
  return (
    <div className={styles.container}>
      <Intro />
      <SectionDivider />
      <Testimonial />
      <Info />
    </div>
  )
}