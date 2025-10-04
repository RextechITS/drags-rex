import { useEffect } from "react";

export default function About() {

    useEffect(() => {
        document.title = "About | My Portfolio";
    }, []);


    return (
        <div className="p-8 w-[90vw] mx-auto">
            <section id="about" className="mb-8">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg">I am a passionate developer with experience in building web applications using React, Node.js, and other modern technologies.</p>
            </section>
        </div>
    );
}