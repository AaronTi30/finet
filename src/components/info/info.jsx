import React from 'react'
import styles from './info.module.css'

const Info = () => {
  return (
    <div>
      <section class="w-full px-4 relative z-10 flex flex-col items-start md:items-center pt-20 pb-28 md:pb-0 bg-sky md:bg-how-it-works md:bg-top md:bg-cover">
        <h2 class={styles.work}>How it Works</h2>
        <hr class="w-48 my-8 hidden md:block"/>
        <div class="max-w-5x1 flex flex-col mt-10 md:mt-16 space-y-16 md:space-y-0 md:flex-row md:divide-x md:divide-blue">
            <div class="flex flex-col items-start md:text-center md:items-center md:pr-8 lg:pr-8 lg:pr-16 md:w-1/2">
                <h3 class="text-2xl mb-3 md:mb-0">Student Volunteers</h3>
                <hr class="w-20 mt-3 mb-6 text-white hidden md:block"/>
                <h6 class="uppercase mb-2 text-base">Help us help you</h6>
                <p class="mb-4 md:text-center">
                We are always looking for student volunteers to help us with our projects. If you are interested in volunteering, please contact us. 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti. 
                </p>
                <a class="flex space-x-2 text-base font-extrabold group bg-gray-100 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                    active:scale-105 transition cursor-pointer borderBlack" href="/join">
                <span>Join our team! {">"}</span>
                </a>
            </div>
            <div class="flex flex-col items-start md:text-center md:items-center md:pl-8 lg:pl-16 md:w-1/2">
                <h3 class="text-2xl mb-3 md:mb-0">Representatives</h3>
                <hr class="w-20 mt-3 mb-6 hidden md:block"/>
                <h6 class="uppercase mb-2">Teach the Future</h6>
                <p class="mb-4 md:text-center">
                Join our team of representatives across the globe to help us teach the future generation and help us make a difference. Whether you are just curious or are eager to
                share your knowledge. FINET wants to be there to help you.
                </p>
                <a class="flex space-x-2 text-base font-extrabold group bg-gray-100 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                    active:scale-105 transition cursor-pointer borderBlack" href="/contact">
                <span>Contact Us {">"}</span>
                </a>
            </div>
        </div>
      </section> 
      <div class="py-24 px-4 w-full relative flex justify-center items-center">
        <div class="max-h-full w-full absolute flex overflow-hidden">
        </div>
        <div class="w-full h-full">
            <div class="relative w-full" style={{paddingTop: '5%'}}>
            <iframe width="1444" height="720" src="https://www.youtube.com/embed/8wysIxzqgPI" title="My Brain after 569 Leetcode Problems" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen>

            </iframe>
            </div>
        </div>
      </div>
      </div>
  )
}

export default Info