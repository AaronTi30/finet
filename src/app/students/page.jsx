const StudentPage = () => {
    return (
        <div class="flex flex-col w-full space-y-24 relative pb-24">
            <section class="relative flex w-full pt-36 pb-8 md:py-48">
                <div class="content relative flex flex-col md:flex-row items-center justify-between md:space-x-12 lg:space-x-16 space-y-8 md:space-y-0">
                    <section class="">
                        <div class="flex flex-col justify-center">
                            <h1 class="mb-2 text-4xl"> Students </h1>
                            <h4 class="md:w-full font-normal text-2xl">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, porro culpa perspiciatis unde ipsa deleniti voluptas dolor minima, corporis iusto!
                            </h4>
                        </div>
                    </section>
                </div>
                </section>
            <section class="content-container">
                <div class="flex flex-col space-y-2">
                    <div class="mb-8">
                        <h2 class="mb-1.5 text-4xl"> Meet the Team</h2>
                        <p class="text-lg">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, quod. 
                        </p>
                    </div>
                    <div class="flex flex-col space-y-24">
                        <div class="flex flex-col space-y-6">
                            <h4 class="text-2xl"> Executive team </h4>
                            <div class="flex flex-wrap gap-x-8 md:gap-x-10 gap-y-10 md:gap-y-12">
                                <figure class="flex flex-col items-center space-y-1">
                                    <img class="rounded-full object-cover h-32 w-32" src="\finet_logo_white.png"></img>
                                    <p class="font-bold text-center">Yashvanth Alamuri</p>
                                    <p class="text-charcoal-500 text-center capatalize"> Co-Founder </p>
                                </figure>
                                <figure class="flex flex-col items-center space-y-1">
                                    <img class="rounded-full object-cover h-32 w-32" src="\finet_logo_white.png"></img>
                                    <p class="font-bold text-center">Arya Patel</p>
                                    <p class="text-charcoal-500 text-center capatalize"> Co-Founder </p>
                                </figure>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-6">
                            <h4 class="text-2xl">Technical</h4>
                            <div class="flex flex-wrap gap-x-8 md:gap-x-10 gap-y-10 md:gap-y-12">
                                <figure class="flex flex-col items-center space-y-1">
                                    <img class="rounded-full object-cover h-32 w-32" src="\finet_logo_white.png"></img>
                                    <p class="font-bold text-center">Aaron Thakoordeen</p>
                                    <p class="text-charcoal-500 text-center capatalize"> Developer </p>
                                </figure>
                                <figure class="flex flex-col items-center space-y-1">
                                    <img class="rounded-full object-cover h-32 w-32" src="\finet_logo_white.png"></img>
                                    <p class="font-bold text-center">Jose Teodoro</p>
                                    <p class="text-charcoal-500 text-center capatalize"> Developer </p>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>    
                </section> 
        </div>
    )
}

export default StudentPage