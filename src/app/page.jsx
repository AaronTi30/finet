import React from "react";
import styles from "./homepage.module.css"
import * as classes from "./homepage.module.css"
import SectionDivider from "@/components/section-divider/section-divider";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <SectionDivider /> */}
      <div className={classes.box}>
        {/* HOME PAGE */}
        <div className={classes["finet-logo-btn"]}>
          <div className={classes["overlap-group"]}>
            <img className={classes["finet-logo-white-txt"]} alt="LOGO" src="../components/images/finet_logo_white_txt.png"/>
            <div className={classes["rectangle"]}/>
            <div className={classes["div"]}/>
            <div className={classes["text-wrapper"]}>Join The Team</div>
            <div className={classes["text-wrapper-2"]}>View Our Work</div>
          </div>
        </div>
        {/* HOME PAGE MESSAGE */}

        {/* HOME PAGE VIDEO */}

        {/* HOME PAGE TESTIMONIALS */}
        <div className={classes["test-title"]}>
          <div className="text-wrapper">TESTIMONIALS</div>
          <div className="test-line"/>
        </div>
      </div>
    </div>
  );
};