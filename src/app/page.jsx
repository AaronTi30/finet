import React from "react";
import styles from "./homepage.module.css"
import * as classes from "./homepage.module.css"
import SectionDivider from "@/components/section-divider/section-divider";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* HOME PAGE */}
      <div className={classes.home}>
        <div className={classes["finet-logo-btn"]}>
          <div className={classes["overlap-group"]}>
            <img className={classes["finet-logo-white-txt"]} alt="LOGO" src="../components/images/finet_logo_white_txt.png"/>
            <div className={classes["rectangle"]} />
            <div className={classes["div"]} />
            <div className={classes["text-wrapper"]}>Join The Team</div>
            <div className={classes["text-wrapper-2"]}>View Our Work</div>
          </div>
        </div>
      </div>
      {/* <SectionDivider /> */}

      {/* HOME PAGE MESSAGE */}

      {/* HOME PAGE VIDEO */}

      {/* HOME PAGE TESTIMONIALS */}
      <div className={classes.home}>
        <div className={classes["test-title"]}>
          <div className={classes["test-line"]}>
            <div className={classes["overlap-group"]}>
            </div> 
          </div>
        </div>
      </div>
      <div className={classes.testcard}>
        <div className={classes["card-1"]}>
          <div className={classes["overlap-group"]}>
            <div className={classes["rectangle"]}> 
            <div className={classes["speaker"]}>-FINET Speaker</div>
            <div className={classes[classes.name]}>-Sowmya Desaraju</div>
            <img className={classes["image"]} alt="SDP" src="../components/images/Sowmya Desaraju (BNP Paribas).jpeg"/>
            <p className={classes.description}>
              {/* description goes here */}
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};