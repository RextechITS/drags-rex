import { useState } from "react";
import Ichie from "../assets/ichie.png";
import Eso from "../assets/esoinstitute.png";
import Dgloeke from "../assets/dgloekeimg.png";
import SSC from "../assets/ssc.png";
import ANIYOLINS from "../assets/aniyolinsimg.png";
import ANAK from "../assets/anakimg.png";
import KSE from "../assets/kseimg.png";
import WNL from "../assets/wnlimg.png";
import YOGIC from "../assets/yogic.png";
import RexTechImg from "../assets/RexTechImg.png";
import CharityImg from "../assets/CharityImg.png";

export default function Portfolio() {
    const [active, setActive] = useState("allPortfolio");

    return (
        <>

            <div className="flex justify-center items-center gap-10 mb-14 text-white">
                <button onClick={() => setActive("allPortfolio")} className={`${active === "allPortfolio" ? "text-[#00c0ff] font-bold" : "hover:text-[#00c0ff]"}`}>All Portfolio</button>
                <button onClick={() => setActive("WordPress")} className={`${active === "WordPress" ? "text-[#00c0ff] font-bold" : "hover:text-[#00c0ff]"}`} >WordPress</button>
                <button onClick={() => setActive("others")} className={`${active === "others" ? "text-[#00c0ff] font-bold" : "hover:text-[#00c0ff]"}`} >Custom Codes</button>
            </div>

            <div style={{ marginTop: "56px" }} >

                {/* All */}
                {

                    active === "allPortfolio" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14 animate-fadeIn">

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={Ichie} alt="" className="rounded-tl-[30px] rounded-tr-[30px] w-full bg-cover h-60" />
                                <div className=" p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Ichie Group</h4>
                                    <p>One of the best Tech Companies in Nigeria, speacializing in web development, software development, App development etc...</p>
                                    <a href="https://ichie.io" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={RexTechImg} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" > Rex Technologies and IT Solutions</h4>
                                    <p>Personal Developer Portfolio Website detailing all about the developer and their experiences</p>
                                    <a href="https://rex-henry.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={CharityImg} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" > Charity | NGO </h4>
                                    <p>Volunteering offers opportunities to develop new skills and gain valuable experience. This can include leadership, communication, project management, and teamwork skills.</p>
                                    <a href="https://rex-charity.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={Eso} alt="" className="rounded-tl-[30px] rounded-tr-[30px] w-full bg-cover  h-60 " />
                                <div className=" p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Eso InStitute</h4>
                                    <p>An Academic Research institute website, where students of all levels can get project and seminar topics and materials</p>
                                    <a href="https://esoinstitute.com" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={KSE} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Kenya Society of Engineers</h4>
                                    <p>The Kenya Society of Engineers (KSE) is the professional organization that regulates the activities of all Engineers in Kenya.  </p>
                                    <a href="https://kse.co.ke/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={YOGIC} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Yogicescape - Yoga & Wellness Studio Berlin </h4>
                                    <p>More than just a yoga studio – we’re a community dedicated to transformation, healing, and inner peace in the heart of Berlin. </p>
                                    <a href="https://yogiescape.com/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={Dgloeke} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover  h-60 " />
                                <div className=" p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Dgloeke Supplies</h4>
                                    <p>D’GLOEKE SUPPLIES specializes in modern homes and built-in kitchen appliances We sell different quality built-in kitchen appliances brands such as BEKO, PHIIMA, ARISTON, POLYSTAR, PANASONIC ETC. This brands are selected to suit both the high class, middle class and the low class.</p>
                                    <a href="https://dgloeke.com" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={SSC} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className=" p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Smooth Sail Construction</h4>
                                    <p>At S.S.C.N.L, we bring together seasoned professionals and integrated services to deliver construction and fabrication solutions that meet the highest standards—on every project, for every client.</p>
                                    <a href="https://smoothsailconstruction.com/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={ANAK} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Association of National Accountants of Kenya</h4>
                                    <p>The Association of National Accountants of Kenya (ANAK) is the professional organization that regulates the activities of all Certified Public Accountants (the CPA (K)s) in Kenya. It was established in 1978 by the laws of Kenya under CAP 531. </p>
                                    <a href="https://anak.co.ke/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>


                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={ANIYOLINS} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className=" p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >ANI YOLINS</h4>
                                    <p>We’re more than just a clothing store. We’re a global community of designers, artisans, and style lovers—redefining fashion with unique, meaningful pieces. Every purchase supports independent creators and helps build a more vibrant, sustainable future.</p>
                                    <a href="https://aniyolins.com/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={WNL} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >WNL Power Solutions Limited </h4>
                                    <p>WNL Power Solutions Limited is an integrated, indigenouspower solutions provider with specialties in comprehensive
                                        power services to the general energy, private/home, and small and medium scale commercial sectors of the Nigerian economy. </p>
                                    <a href="https://wnlpowersolutions.com/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>



                        </div>
                    )
                }

                {/* Wordpress */}
                {
                    active === ("WordPress") && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={Ichie} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className=" p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Ichie Group</h4>
                                    <p>One of the best Tech Companies in Nigeria, speacializing in web development, software development, App development etc...</p>
                                    <a href="https://ichie.io" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={ANAK} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Association of National Accountants of Kenya</h4>
                                    <p>The Association of National Accountants of Kenya (ANAK) is the professional organization that regulates the activities of all Certified Public Accountants (the CPA (K)s) in Kenya. It was established in 1978 by the laws of Kenya under CAP 531. </p>
                                    <a href="https://anak.co.ke/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={Eso} alt="" className="rounded-tl-[30px] rounded-tr-[30px] w-full bg-cover h-60" />
                                <div className=" p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Eso InStitute</h4>
                                    <p>An Academic Research institute website, where students of all levels can get project and seminar topics and materials for all departments</p>
                                    <a href="https://esoinstitute.com" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={KSE} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Kenya Society of Engineers</h4>
                                    <p>The Kenya Society of Engineers (KSE) is the professional organization that regulates the activities of all Engineers in Kenya.  </p>
                                    <a href="https://kse.co.ke/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={YOGIC} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Yogicescape - Yoga & Wellness Studio Berlin </h4>
                                    <p>More than just a yoga studio – we’re a community dedicated to transformation, healing, and inner peace in the heart of Berlin. </p>
                                    <a href="https://yogiescape.com/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={Dgloeke} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Dgloeke Supplies</h4>
                                    <p>D’GLOEKE SUPPLIES specializes in modern homes and built-in kitchen appliances We sell different quality built-in kitchen appliances brands such as BEKO, PHIIMA, ARISTON, POLYSTAR, PANASONIC ETC. This brands are selected to suit both the high class, middle class and the low class.</p>
                                    <a href="https://dgloeke.com" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={SSC} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className=" p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >Smooth Sail Construction</h4>
                                    <p>At S.S.C.N.L, we bring together seasoned professionals and integrated services to deliver construction and fabrication solutions that meet the highest standards—on every project, for every client.</p>
                                    <a href="https://smoothsailconstruction.com/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={ANIYOLINS} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >ANI YOLINS</h4>
                                    <p>We’re more than just a clothing store. We’re a global community of designers, artisans, and style lovers—redefining fashion with unique, meaningful pieces. Every purchase supports independent creators and helps build a more vibrant, sustainable future.</p>
                                    <a href="https://aniyolins.com/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={WNL} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" >WNL Power Solutions Limited </h4>
                                    <p>WNL Power Solutions Limited is an integrated, indigenouspower solutions provider with specialties in comprehensive
                                        power services to the general energy, private/home, and small and medium scale commercial sectors of the Nigerian economy. </p>
                                    <a href="https://wnlpowersolutions.com/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>

                        </div>


                    )
                }

                {/* Others */}
                {
                    active === ("others") && (

                        <>

                            <div className="text-white text-center text-xl mb-20">All custom code projects ive recenly developed are all NDA projects... <span className="block">More Public Custom code projects coming soon... </span></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
                                <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                    <img src={RexTechImg} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                    <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                        <h4 className="font-semibold text-xl" > Rex Technologies and IT Solutions</h4>
                                        <p>Personal Developer Portfolio Website detailing all about the developer and their experiences</p>
                                        <a href="https://rex-henry.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                    </div>
                                </div>

                            </div>

                            <div data-aos="fade-up" className="bg-[#3a2b71] rounded-tl-[30px] rounded-tr-[30px] ">
                                <img src={CharityImg} alt="" className="rounded-tl-[30px] rounded-tr-[30px]  w-full bg-cover h-60" />
                                <div className="bg-[#3a2b71] p-5 flex flex-col gap-3 text-white" >
                                    <h4 className="font-semibold text-xl" > Charity | NGO </h4>
                                    <p>Volunteering offers opportunities to develop new skills and gain valuable experience. This can include leadership, communication, project management, and teamwork skills.</p>
                                    <a href="https://rex-charity.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#00c0ff] font-medium"> Visit Website </a>

                                </div>
                            </div>
                        </>


                    )
                }

            </div >

        </>
    );
}

