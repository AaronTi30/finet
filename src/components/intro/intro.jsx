"use client"

import Image from "next/image"
import Link from "next/link"



export default function Intro() {
    return (
        <section
        className="text-center sm:mb-0 scroll-mt-[100rem] space-y-4"
        >
            <div className="flex items-center justify-center mt-40">
                <div className="relative">
                    <div>
                        <Image
                            src="/finet_text.png" 
                            alt="Finet Logo"
                            width={192}
                            height={192}
                            quality={100}
                            priority={true}
                            className="flex justify-center items-center"
                            />
                    </div>
                </div>
            </div>

            <div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            >
                <Link
                href="/about"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                    hover:bg-gray-950 active:scale-105 transition"
                >
                    Join The Team {">"}
                </Link>
                <a
                    className="group bg-gray-100 text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
                    active:scale-105 transition cursor-pointer borderBlack"
                    href="/login"
                >
                    View our Work {">"}
                </a>
            </div>
        </section>
    )
}