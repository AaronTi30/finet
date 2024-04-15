import React from "react";
import * as classes from "./representatives.module.css";

export const RepresentativesPage = () => {
  return (
    <div className={classes["past-speakers"]}>
      <div className={classes["overlap-wrapper"]}>
        <div className={classes["overlap"]}>
          <div className={classes["rolodex-card"]}>
            <div className={classes["overlap-group"]}>
              <p className={classes["to-whom-this-may"]}>
                “To whom this may concern,
                <br />
                Last week, I had the opportunity to be a virtual guest speaker for the Clarington Central Secondary
                school. I was invited by a very impressive young scholar by the name of Yashvanth Alamuri who created
                the FINET club at his school, providing his classmates the opportunity to have a better sense of what to
                expect once they would choose a route that suits them after graduating high school. Many scholars in
                grades 11 and 12 would often remain undecided when choosing their professional career path before
                entering university as it can become a cumbersome process.
                <br />I was able to share my experience and knowledge as an industrial engineer to all the students in
                attendance and hopefully inspire the next generation of students to be more interested in STEM. I was
                able to provide tips and advice that I wish I had known throughout my post-secondary education.
                Yashvanth did a great job organizing this event through his FINET club as I believe every student should
                be given the chance to learn more about their industry of interest. Thank you Yashvanth and keep up the
                great work!”
              </p>
              <div className={classes["text-wrapper"]}>Cedric Sanango</div>
              <img className={classes["cedric-sanogo"]} alt="Cedric sanogo" src="../../components/images/Cedric Sanogo (General Motors).jpg"/>
              <img className={classes["line"]} alt="Line" src="../../components/images/rolodex-line.png" />
            </div>
          </div>
          <div className={classes["overlap-group-wrapper"]}>
            <div className={classes["overlap-group"]}>
              <p className={classes["to-whom-this-may"]}>
                “To whom this may concern,
                <br />
                Last week, I had the opportunity to be a virtual guest speaker for the Clarington Central Secondary
                school. I was invited by a very impressive young scholar by the name of Yashvanth Alamuri who created
                the FINET club at his school, providing his classmates the opportunity to have a better sense of what to
                expect once they would choose a route that suits them after graduating high school. Many scholars in
                grades 11 and 12 would often remain undecided when choosing their professional career path before
                entering university as it can become a cumbersome process.
                <br />I was able to share my experience and knowledge as an industrial engineer to all the students in
                attendance and hopefully inspire the next generation of students to be more interested in STEM. I was
                able to provide tips and advice that I wish I had known throughout my post-secondary education.
                Yashvanth did a great job organizing this event through his FINET club as I believe every student should
                be given the chance to learn more about their industry of interest. Thank you Yashvanth and keep up the
                great work!”
              </p>
              <div className={classes["text-wrapper"]}>Cedric Sanango</div>
              <img className={classes["cedric-sanogo"]} alt="Cedric sanogo" src="../../components/images/Cedric Sanogo (General Motors).jpg" />
              <img className={classes["line"]} alt="Line" src="../../components/images/rolodex-line.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepresentativesPage
