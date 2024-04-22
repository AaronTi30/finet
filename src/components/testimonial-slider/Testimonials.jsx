"use client"

import React from 'react';
import { IonIcon } from '@ionic/react';
import { arrowBackCircleOutline, arrowForwardCircleOutline } from 'ionicons/icons';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './testimonial.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Testimonial = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.head}> Testimonials </h1>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        pagination={{ el: `.${styles.pagination}`, clickable: true }}
        navigation={{
          nextEl: `.${styles.next}`,
          prevEl: `.${styles.prev}`,
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        
      >
        <SwiperSlide>"I wish I had a club like FINET when I was in high school. 
            It would have been a great opportunity to learn about different careers and get advice from professionals. 
            As a speaker at FINET, I was able to share my skills and experiences with other students and hopefully inspire them. 
            It was a fulfilling experience to be able to contribute to such a valuable purpose. The entire experience, from the planning to the presentation, 
            was truly rewarding.""
            </SwiperSlide>
        <SwiperSlide>"I had the pleasure of giving a presentation for the Clarington Central Secondary school FINET club organized by Yashvanth Alamuri. 
            Yashvanth reached out to me and I was very impressed with the club and the value it would provide for the members of the club to help students choose their career 
            when it can be overwhelming. I myself had a stressful Grade 11 and 12 and a club like this would have made it a lot easier. 
            The organization of the meeting and the club was done very well and I hope I was able to give some good insights into Industrial Engineering. 
            I wish Yashvanth and his classmate's good luck in their university/career search and future club activities!"
            </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>

        <div className={styles.controller}>
          <div className={styles.navigation}></div>
            <div className={styles.prev}>
                <IonIcon icon={arrowBackCircleOutline}></IonIcon>
            </div>
            <div className={styles.next}>
                <ion-icon icon={arrowForwardCircleOutline}></ion-icon>
            </div>
            <div className={styles.pagination}></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Testimonial
