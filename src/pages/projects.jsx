import { useEffect } from "react";

export default function Projects() {

    useEffect(() => {
        document.title = "Projects | My Portfolio";
    }, []);


    return (
        <div className="p-8 w-[90vw] mx-auto">
            <section id="projects" className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-white">💼 Projects</h2>
            </section>
        </div>
    )
}