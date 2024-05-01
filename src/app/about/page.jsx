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
                            <p class="font-semibold group bg-gray-100 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                            active:scale-105 transition cursor-pointer borderBlack">Meet the team {" >"}</p>
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
                            <p class="font-semibold group bg-gray-100 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                            active:scale-105 transition cursor-pointer borderBlack">See our past representatives {" >"}</p>
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
                            <p class="font-semibold group bg-gray-100 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                    active:scale-105 transition cursor-pointer borderBlack">Our story {" > "}</p>
                        </a>
                    </div>
                </div>
            </section>
            <section class="content flex flex-col mb-4">
                <h2 class="mb-4 md:mb-0 text-4xl"> Our Values </h2>
                <hr class="hidden md:block w-20 mt-3 md:mb-10"/>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-14 lg:gap-16">
                    <div class="flex flex-col space-y-2.5">
                        <h6 class="mb-1 text-lg font-bold">Amplifying Impact</h6>
                        <p class="text-charcoal-500 font-light">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laboriosam quas obcaecati qui quaerat quo eaque unde, ullam eveniet exercitationem odit, 
                            nisi nemo. Hic cumque eligendi deleniti at qui minus?
                        </p>
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <h6 class="mb-1 text-lg font-bold">Help students Network</h6>
                        <p class="text-charcoal-500 font-light">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laboriosam quas obcaecati qui quaerat quo eaque unde, ullam eveniet exercitationem odit, 
                            nisi nemo. Hic cumque eligendi deleniti at qui minus?
                        </p>
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <h6 class="mb-1 text-lg font-bold">Learning is collaboration</h6>
                        <p class="text-charcoal-500 font-light">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laboriosam quas obcaecati qui quaerat quo eaque unde, ullam eveniet exercitationem odit, 
                            nisi nemo. Hic cumque eligendi deleniti at qui minus?
                        </p>
                    </div>
                    <div class="flex flex-col space-y-2.5">
                        <h6 class="mb-1 text-lg font-bold">Supportive and Welcoming</h6>
                        <p class="text-charcoal-500 font-light">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laboriosam quas obcaecati qui quaerat quo eaque unde, ullam eveniet exercitationem odit, 
                            nisi nemo. Hic cumque eligendi deleniti at qui minus?
                        </p>
                    </div>
                </div>
            </section>
            <section class="content flex flex-col items-center space-y-8 py-8">
                <h2 class="mb-4 md:mb-0 text-4xl">Our Sponsors</h2>
                <hr class="hidden md:block w-20"/>
                <p class="max-w-lg text-lg mb-5 md:text-center font-light">
                    Thank you to our sponsors for their generous support of our team and mission!
                </p>
                <a class="hover:opacity-100">
                    <button class="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
                        Become a sponsor
                    </button>
                </a>
            </section>
        </div>
    )
}

export default AboutPage