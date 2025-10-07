import { useEffect } from "react";
import AboutMe from "../components/AboutMe";

export default function About() {

    useEffect(() => {
        document.title = "About | My Portfolio";
    }, []);


    return (
        <div className="p-3 md:p-8 w-[95vw] lg:w-[80vw] mx-auto space-y-20 ">
            <AboutMe />
        </div>
    );
}