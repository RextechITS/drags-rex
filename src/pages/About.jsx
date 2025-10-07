import { useEffect } from "react";
import AboutMe from "../components/AboutMe";

export default function About() {

    useEffect(() => {
        document.title = "About | My Portfolio";
    }, []);


    return (
        <div className="p-8 w-[90vw] mx-auto pt-40">
            <AboutMe />
        </div>
    );
}