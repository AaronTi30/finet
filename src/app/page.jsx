import React from "react";
import styles from "./homepage.module.css"
import * as classes from "./homepage.module.css"
import YoutubeEmbed from "@/components/javascript-files/youtubeembed";
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
      {/* <div className={classes.home}>
        <YoutubeEmbed embedId=""/>
      </div> */}

      {/* HOME PAGE TESTIMONIALS */}
      <div className={classes.home}>
        <div className={classes["test-title"]}>
          <div className={classes.testline}/>
            <div className={classes["test-text-wrapper"]}>TESTIMONIALS</div>
        </div>
      </div>
      {/* Sowmya Desaraju */}
      <div className={classes.testcard}>
        <div className={classes["card-1"]}>
          <div className={classes["overlap-group"]}> 
            <div className={classes["speaker"]}>-FINET Speaker</div>
            <div className={classes["name"]}>-Sowmya Desaraju</div>
            <img className={classes["image"]} alt="SDP" src="../components/images/Sowmya Desaraju (BNP Paribas).jpeg"/>
            <p className={classes.description}>
              {/* description goes here */}
            </p>
          </div>
        </div>
        {/* William Meyer */}
        <div className={classes["card-2"]}>
          <div className={classes["overlap-group"]}> 
            <div className={classes["speaker"]}>-FINET Speaker</div>
            <div className={classes["name"]}>-William Meyer</div>
            <img className={classes["image"]} alt="SDP" src="../components/images/William Meyer (Blue Origin).png"/>
            <p className={classes.description}>
              {/* description goes here */}
            </p>
          </div>
        </div>
        {/* Helen Geris */}
        <div className={classes["card-3"]}>
          <div className={classes["overlap-group"]}> 
            <div className={classes["speaker"]}>-FINET Speaker</div>
            <div className={classes["name"]}>-Helen Geris</div>
            <img className={classes["image"]} alt="SDP" src="../components/images/Helen Geris (LimeStone Therapies).jpg"/>
            <p className={classes.description}>
              {/* description goes here */}
            </p>
          </div>
        </div>
        {/* Charlotte Grandy */}
        <div className={classes["card-4"]}>
          <div className={classes["overlap-group"]}> 
            <div className={classes["speaker"]}>-FINET Speaker</div>
            <div className={classes["name"]}>-Charlotte Grandy</div>
            <img className={classes["image"]} alt="SDP" src="../components/images/Charlotte Grandy (Hudson Bay).jpg"/>
            <p className={classes.description}>
              {/* description goes here */}
            </p>
          </div>
        </div>
        {/* Umar Makhdoom */}
        <div className={classes["card-5"]}>
          <div className={classes["overlap-group"]}> 
            <div className={classes["speaker"]}>-FINET Speaker</div>
            <div className={classes["name"]}>-Umar Makhdoom</div>
            <img className={classes["image"]} alt="SDP" src="../components/images/Umar Makhdoom (Xero).jpg"/>
            <p className={classes.description}>
              {/* description goes here */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};