import { Link } from "react-router-dom";
import { useEffect } from "react";
import Onwellooo from "../assets/Onwellooo.png";

export default function Home() {

    useEffect(() => {
        document.title = "Home | My Portfolio";
    }, []);


    return (
        <div className="p-3 md:p-8 w-[95vw] lg:w-[79vw] mx-auto space-y-10">
            <section id="hero" className="w-full flex flex-col-reverse lg:flex-row gap-2 lg:gap-5 justify-between items-center max-sm:pt-10">
                <aside className="w-full lg:w-1/2 space-y-6 max-md:text-center">
                    <h1 className="text-4xl lg:text-8xl text-white font-bold leading-12">Henry <span className="block text-blue-600"> Nwobodo C.</span> <span className="block text-xl font-bold"> Co-Founder | CTO -  DragsDev</span></h1>
                    <h3 className="text-white text-2xl md:text-3xl font-bold">Frontend | WordPress Developer</h3>
                    <p className="text-white font-medium text-base md:text-xl">I specialize in developing robust platforms, including cab booking systems, e-commerce websites, and custom business applications. My focus is on writing clean code, optimizing performance, and delivering results-driven web development.</p>
                    <Link to="/contact" className="inline-block w-[200px] relative overflow-hidden p-5 rounded-3xl 
                        text-white hover:text-blue-600 hover:bg-white
                        before:absolute before:inset-0 before:bg-blue-600 
                        before:origin-bottom before:scale-y-100 before:transition-transform before:duration-700
                        hover:before:scale-y-0">
                        <span className="relative z-10 pl-6">Get Connected</span>
                    </Link>
                </aside>
                <aside>
                    <div className="rounded-full bg-blue-600 relative w-72 h-72 lg:w-96 lg:h-96 flex justify-center items-center transform -rotate-12">
                        <img src={Onwellooo} alt="Onwellooo" className="w-full h-full object-cover object-center absolute top-0 transform -rotate-12" />
                    </div>
                </aside>
            </section>
        </div >
    );
}
