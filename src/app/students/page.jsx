const StudentPage = () => {
    return (
        <div class="flex flex-col w-full space-y-24 relative pb-24">
            <section class="relative flex w-full bg-bottom bg-cover pt-36 pb-8 md:py-48 md:bg-students-hero">
                <div class="content relative flex flex-col md:flex-row items-center justify-between md:space-x-12 lg:space-x-16 space-y-8 md:space-y-0">
                    <section class="container z-20">
                        <div class="flex flex-col justify-center">
                            <h1 class="mb-2 text-4xl"> Students </h1>
                            <h4 class="md:w-full font-normal text-2xl">
                                Meet the students who are making a difference in their communities. With a drive to change the world
                            </h4>
                        </div>
                    </section>
                    <img class="md:w-5/12 translate-x-1 translate-y-2" src="/students-hero.png" alt="Students Hero" />
                </div>
            </section> 
        </div>
    )
}

export default StudentPage