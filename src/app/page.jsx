import React from "react";
import styles from "./homepage.module.css"
import * as classes from "./homepage.module.css"
import SectionDivider from "@/components/section-divider/section-divider";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <SectionDivider /> */}
      <div className={classes.box}>
        <div className={classes["finet-logo-btn"]}>
          <div className="overlap-group">
            <img className="finet-logo-white-txt" alt="LOGO" src="../components/images/finet_logo_white_txt.png"/>
            <div className="rectangle" />
            <div className="div" />
            <div className="text-wrapper">Join The Team</div>
            <div className="text-wrapper-2">View Our Work</div>
          </div>
        </div>
      </div>
    </div>
  );
};