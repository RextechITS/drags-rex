import { useState } from "react";

export default function Portfolio() {
    const [active, setActive] = useState("allPortfolio");

    return (
        <>

            <div className="flex justify-center items-center gap-10 mb-10 text-white">
                <button onClick={() => setActive("allPortfolio")} className={`${active === "allPortfolio" ? "text-[#00c0ff] font-bold" : "hover:text-[#00c0ff]"}`}>All Portfolio</button>
                <button onClick={() => setActive("eCommerce")} className={`${active === "eCommerce" ? "text-[#00c0ff] font-bold" : "hover:text-[#00c0ff]"}`} >WordPress</button>
                <button onClick={() => setActive("others")} className={`${active === "others" ? "text-[#00c0ff] font-bold" : "hover:text-[#00c0ff]"}`} >Custom Codes</button>
            </div>

            <div>
                {

                    active === "allPortfolio" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
                            <div className="bg-white rounded-xl h-40"></div>
                            <div className="bg-red-500 rounded-xl h-40"></div>
                            <div className="bg-amber-500 rounded-xl h-40"></div>

                        </div>
                    )
                }

                {
                    active === ("eCommerce") && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
                            <div className="bg-white rounded-xl h-40"></div>
                            <div className="bg-slate-500 rounded-xl h-40"></div>
                            <div className="bg-blue-500 rounded-xl h-40"></div>

                        </div>
                    )
                }

                {
                    active === ("others") && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
                            <div className="bg-amber-800 rounded-xl h-40"></div>
                            <div className="bg-purple-500 rounded-xl h-40"></div>
                            <div className="bg-black rounded-xl h-40"></div>

                        </div>
                    )
                }

            </div>

        </>
    );
}

