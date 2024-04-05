import React from "react";
import styles from "./homepage.module.css"
import * as classes from ".homepage.module.css"
import SectionDivider from "@/components/section-divider/section-divider";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <SectionDivider /> */}
      <div className={classes.box}>
        <div className={classes["finet-logo-btn"]}>
          
        </div>
      </div>
    </div>
  )
}