import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats({ end, label }) {
    const { ref, inView } = useInView({
        triggerOnce: true,  // only run once
        threshold: 0.3,     // fire when 30% of component is visible
    });

    return (
        <div ref={ref} className="m-6 flex items-center gap-3">
            <h2 className="text-4xl font-bold">
                {inView ? <CountUp end={end} duration={2} /> : "0"}
            </h2>
            <p className="text-2xl">{label}</p>
        </div>
    );
}
