import mywebimage from "../assets/mywebimage.webp";

import Stats from "../components/Stats";

export default function AboutMe() {
    return (

        <section >
            <h2 className="text-xl font-medium mb-8 text-center text-[#00c0ff]">About Me</h2>
            <p className="text-2xl lg:text-5xl font-semibold text-center text-white !leading-[1.3] font-poppins">A Passionate Developer <span className="block">Who Loves to Code</span></p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                <div data-aos="fade-up" className="flex-col gap-2">
                    <img src={mywebimage} alt="codes" className="bg-cover center w-full aspect-auto" />

                </div>

                <div data-aos="fade-down" className="flex flex-col gap-6 justify-center text-white">
                    <h3 className="text-2xl lg:text-3xl font-bold">About Me</h3>
                    <p className="!leading-7 lg:!leading-10" >I am Henry Nwobodo <a className="text-[#00c0ff] font-bold" href="https://github.com/RextechITS" target="_blank">(github)</a>, a results-driven Front-End & WordPress Web Developer and ICT Specialist with a passion for building innovative digital solutions that solve real-world problems. As co-founder of Drags Development (DragsDev) and Web dev of BMG Entertainments, I specialize in designing and developing high-performance web applications, streamlining IT infrastructures, and driving digital transformation across various industries.

                        With hands-on experience in PHP, Laravel, JavaScript, MySQL, and system architecture, I’ve successfully delivered projects ranging from Crypto and Trading websites and E-commerce systems to organizational websites and custom business tools. My approach prioritizes clean code, responsive design, and seamless user experience — all aligned with business objectives.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className=" text-white h-[100px] flex items-center gap-5 border-l-[15px] border-l-[#00c0ff] pl-2">
                            {/* <p className="text-5xl font-bold"><CountUp end={12} duration={10} /> <span className="text-2xl">Successful Years</span></p> */}
                            <Stats end={12} duration={10} label="Successful Years" />
                        </div>

                        <div>
                            <a
                                href="/HenryNwobodo.pdf"
                                target="_blank"
                                rel="noopener noreferrer"

                                className="inline-block w-full md:w-[300px] text-center relative overflow-hidden p-5 rounded-3xl 
                                    text-white hover:text-[#00c0ff] hover:bg-white
                                    before:absolute before:inset-0 before:bg-[#00c0ff] 
                                    before:origin-bottom before:scale-y-100 before:transition-transform before:duration-700
                                    hover:before:scale-y-0"
                            >
                                <span className="relative z-10 ">Preview | Download CV</span>
                            </a>
                        </div>
                    </div>

                </div>



            </div>
        </section>
    )
}
