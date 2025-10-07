import { useEffect } from "react";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonial";

export default function Projects() {

    useEffect(() => {
        document.title = "Projects | My Portfolio";
    }, []);


    return (
        <div className="p-8 w-[90vw] mx-auto">
            <section id="projects" className="mb-10 space-y-10 pt-40">
                <h2 className="text-xl font-medium mb-8 text-center text-[#00c0ff]">Projects</h2>
                <p className="text-3xl lg:text-5xl font-medium text-center text-white !leading-[1.3] font-poppins">Developed lots of websites for Some Big Establishments <span className="block">And also participated in lots of NDA Projects</span></p>

                <p className="text-lg text-white w-full lg:w-[60%] mx-auto text-center">Explore a curated list of web development projects ranging from dynamic content platforms to full-scale business applications. Each project showcases a blend of creativity, usability, and functionality.</p>

                <Portfolio />

                <Testimonials />

            </section>
        </div>
    )
}