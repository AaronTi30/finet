import React from 'react'

const AboutPage = () => {
    return (
        <div>
            <section class="content flex flex-col md:items-center mb-8 pt-16 md:pt-10 pb-4 md:pb-0 md:h-80 bg-no-repeat bg-top md:bg-about-us-mission">
                <h2 class="mb-4 md:mb-0 text-4xl">Our Mission</h2>
                <hr class="hidden md:block w-20 mt-8 mb-8"></hr>
                <p class="max-w-lg text-lg md:text-center font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, maiores nesciunt. Eum error facere, possimus odit enim quia saepe, 
                    esse eaque, sed totam ea! Placeat distinctio a consequuntur aliquid asperiores.
                </p>
            </section>
            <section class="content flex md:space-x-12 lg:space-x-8 mt-16 mb-20">
                <div class="flex-1 flex flex-col space-y-12">
                    <div class="flex flex-col">
                        <h2 class="md:text-4xl mb-3 md:mb-1.5">Who we are</h2>
                        <hr class="hidden md:block w-20 mt-3 mb-6 lg:mb-8"/>
                        <p class="mb-2 text-lg font-semibold w-11/12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur corporis sed asperiores perspiciatis.
                        </p>
                        <p class="mb-6">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero tempora voluptatibus autem ratione. 
                            Veniam ab in molestias accusamus aperiam nemo illo iusto blanditiis. Unde rem quia nulla voluptatibus enim blanditiis!
                        </p>
                        <a class="flex space-x-1.5 items-center font-extrabold" href="/students">
                            <p class="font-semibold">Meet the team</p>
                        </a>
                    </div>
                    <div class="flex flex-col">
                        <h2 class="md:text-4xl mb-3 md:mb-1.5">What we do</h2>
                        <hr class="hidden md:block w-20 mt-3 mb-6 lg:mb-8"/>
                        <p class="mb-2 text-lg font-semibold w-11/12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur corporis sed asperiores perspiciatis.
                        </p>
                        <p class="mb-6">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero tempora voluptatibus autem ratione. 
                            Veniam ab in molestias accusamus aperiam nemo illo iusto blanditiis. Unde rem quia nulla voluptatibus enim blanditiis!
                        </p>
                        <a class="flex space-x-1.5 items-center font-extrabold" href="/students">
                            <p class="font-semibold">See our past representatives</p>
                        </a>
                    </div>
                    <div class="flex flex-col">
                        <h2 class="md:text-4xl mb-3 md:mb-1.5">Our story</h2>
                        <hr class="hidden md:block w-20 mt-3 mb-6 lg:mb-8"/>
                        <p class="mb-2 text-lg font-semibold w-11/12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur corporis sed asperiores perspiciatis.
                        </p>
                        <p class="mb-6">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero tempora voluptatibus autem ratione. 
                            Veniam ab in molestias accusamus aperiam nemo illo iusto blanditiis. Unde rem quia nulla voluptatibus enim blanditiis!
                        </p>
                        <a class="flex space-x-1.5 items-center font-extrabold" href="/students">
                            <p class="font-semibold">Our story</p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage