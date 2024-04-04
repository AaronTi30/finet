"use client";

import React, { useEffect } from "react"
import { render } from "react-dom";
import styles from "./representatives.module.css"
import { rolodexHandler } from "./rolodexhandler"

// function MyComponent() {
//   const domNode = document.getElementById('root');
//   const root = createRoot(domNode);
  
//   root.render(<rolodexHandler/>)

//   {
//     useEffect(() => {
//       rolodexHandler();
//     }, [])
//   } 
// }

const RepresentativePage = () => {
    
  // useEffect(() => {
  //     MyComponent();
  //   })
    
    return (
<ul class="MyComponent">  
  <li class="item1">
    <div className={styles.box}>
      <div className={styles.rectangle} />
      <div className={styles.labeltitle}>
      {/* <div className={styles.textwrapper}>Cedric Sanango</div> */}
      {/* <div className={styles.label}>
      <p className={styles}>
        “To whom this may concern,
        <br />
        Last week, I had the opportunity to be a virtual guest speaker for the Clarington Central Secondary school. I
        was invited by a very impressive young scholar by the name of Yashvanth Alamuri who created the FINET club at
        his school, providing his classmates the opportunity to have a better sense of what to expect once they would
        choose a route that suits them after graduating high school. Many scholars in grades 11 and 12 would often
        remain undecided when choosing their professional career path before entering university as it can become a
        cumbersome process.
        <br />I was able to share my experience and knowledge as an industrial engineer to all the students in
        attendance and hopefully inspire the next generation of students to be more interested in STEM. I was able to
        provide tips and advice that I wish I had known throughout my post-secondary education. Yashvanth did a great
        job organizing this event through his FINET club as I believe every student should be given the chance to learn
        more about their industry of interest. Thank you Yashvanth and keep up the great work!”
      </p>
    </div> */}
    </div>
    </div>
  </li>
</ul>
    )
}

export default RepresentativePage