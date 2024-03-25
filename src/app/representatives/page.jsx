import styles from "./representatives.module.css"

const RepresentativePage = () => {
    return (
        <div>RepresentativePage
        <div className={styles.pastSpeakers1Child} />
      <div className={styles.pastSpeakers}>PAST SPEAKERS</div>
      <div className={styles.rolodexCard1}>
        <div className={styles.rolodexCard1Child} />
        <div className={styles.toWhomThisContainer}>
          <p className={styles.toWhomThis}>“To whom this may concern,</p>
          <p className={styles.toWhomThis}>
            Last week, I had the opportunity to be a virtual guest speaker for
            the Clarington Central Secondary school. I was invited by a very
            impressive young scholar by the name of Yashvanth Alamuri who
            created the FINET club at his school, providing his classmates the
            opportunity to have a better sense of what to expect once they would
            choose a route that suits them after graduating high school. Many
            scholars in grades 11 and 12 would often remain undecided when
            choosing their professional career path before entering university
            as it can become a cumbersome process.
          </p>
          <p className={styles.toWhomThis}>
            I was able to share my experience and knowledge as an industrial
            engineer to all the students in attendance and hopefully inspire the
            next generation of students to be more interested in STEM. I was
            able to provide tips and advice that I wish I had known throughout
            my post-secondary education. Yashvanth did a great job organizing
            this event through his FINET club as I believe every student should
            be given the chance to learn more about their industry of interest.
            Thank you Yashvanth and keep up the great work!”
          </p>
        </div>
        <div className={styles.cedricSanango}>Cedric Sanango</div>
        <img
          className={styles.cedricSanogoGeneralMotors}
          alt=""
          src="/cedric-sanogo-general-motors-1@2x.png"
        />
        <div className={styles.rolodexCard1Item} />
      </div>
    </div>
    )
}

export default RepresentativePage