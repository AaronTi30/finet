import React from "react";
import styles from "./homepage.module.css"
import SectionDivider from "@/components/section-divider/section-divider";
import Intro from "@/components/intro/intro";

export default function Home() {
  return (
    <div className={styles.container}>
      <Intro />
      <SectionDivider />
    </div>
  )
}