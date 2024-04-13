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
            <img className={classes["finet-logo-white-txt"]} src="../components/images/finet_logo_white_txt.png" alt="LOGO"/>
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
        <div className={classes["test-title"]}>TESTIMONIALS</div>
      </div>
      {/* Sowmya Desaraju */}
      <div className={classes.testcard}>
        <div className={classes["card-1"]}>
          <div className={classes["overlap-group"]}> 
            <div className={classes["speaker"]}>-FINET Speaker</div>
            <div className={classes["name-s"]}>-Sowmya Desaraju</div>
            <img className={classes["image"]} alt="SDP" src="../components/images/Sowmya Desaraju (BNP Paribas).jpeg"/>
            <p className={classes.description}>
            "I wish I had a club like FINET when I was in high school. It would have been a great opportunity to learn about different careers and get advice from professionals. 
            As a speaker at FINET, I was able to share my skills and experiences with other students and hopefully inspire them. It was a fulfilling experience to be able to 
            contribute to such a valuable purpose. The entire experience, from the planning to the presentation, was truly rewarding.""
            </p>
          </div>
        </div>
        {/* William Meyer 1*/}
        <div className={classes["card-2"]}>
          <div className={classes["overlap-group"]}> 
            <div className={classes["speaker"]}>-FINET Speaker</div>
            <div className={classes["name-w"]}>-William Meyer</div>
            <img className={classes["image"]} alt="SDP" src="../components/images/William Meyer (Blue Origin).png"/>
            <p className={classes.description}>
            "I had the pleasure of giving a presentation for the Clarington Central Secondary school FINET club organized by Yashvanth Alamuri. Yashvanth reached out to me and 
            I was very impressed with the club and the value it would provide for the members of the club to help students choose their career when it can be overwhelming. 
            I myself had a stressful Grade 11 and 12 and a club like this would have made it a lot easier. The organization of the meeting and the club was done very well 
            and I hope I was able to give some good insights into Industrial Engineering. I wish Yashvanth and his classmate's good luck in their university/career search and 
            future club activities!""
            </p>
          </div>
        </div>
        {/* Helen Geris 2*/}
        <div className={classes["card-3"]}>
          <div className={classes["overlap-group"]}> 
            <div className={classes["speaker"]}>-FINET Speaker</div>
            <div className={classes["name-h"]}>-Helen Geris</div>
            <img className={classes["image"]} alt="SDP" src="../components/images/Helen Geris (LimeStone Therapies).jpg"/>
            <p className={classes.description}>
            "I'm so grateful to have had the opportunity to be a speaker for FINET and share my experience and career path as a psychotherapist. 
            I’m sure it can be overwhelming to consider the many different career opportunities available these days, much less learning details 
            about what those opportunities would really entail or how to pursue them. I think FINET does a wonderful job of filling that role by 
            providing a concise way to learn about various career paths with a personable and accessible approach. Thanks for having me on FINET 
            and keep up the good work!"
            </p>
          </div>
        </div>
        {/* Charlotte Grandy */}
        <div className={classes["card-4"]}>
          <div className={classes["overlap-group"]}> 
            <div className={classes["speaker"]}>-FINET Speaker</div>
            <div className={classes["name-c"]}>-Charlotte Grandy</div>
            <img className={classes["image"]} alt="SDP" src="../components/images/Charlotte Grandy (Hudson Bay).jpg"/>
            <p className={classes.description}>
            "FINET was a pleasure to work with. Yashvanth was professional and allowed me the opportunity to showcase my career in a comfortable and 
            conversational manner. I hope that the next generation of professionals will be inspired to explore the wide range of potential careers 
            that the world has to offer."
            </p>
          </div>
        </div>
        {/* Umar Makhdoom */}
        <div className={classes["card-5"]}>
          <div className={classes["overlap-group"]}> 
            <div className={classes["speaker"]}>-FINET Speaker</div>
            <div className={classes["name-u"]}>-Umar Makhdoom</div>
            <img className={classes["image"]} alt="SDP" src="../components/images/Umar Makhdoom (Xero).jpg"/>
            <p className={classes.description}>
            "FINET is such a great initiative and it does wonders in informing it’s participants about all the different industries 
            and careers that are available to them that they otherwise wouldn’t have known about! My experience with being a speaker 
            during one of their sessions was an amazing one. This club provides a learning opportunity for students to discover what 
            options they have and how to get to the places they want to go both in university and beyond!"
            </p>
          </div>
        </div>
        <div className={classes["leftarrow"]}/>
        <div className={classes["rightarrow"]}/>
      </div>
    </div>
  );
};