import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats({ end, duration, label }) {
    const { ref, inView } = useInView({
        triggerOnce: true,  // only run once
        threshold: 0.3,     // fire when 30% of component is visible
    });

    return (
        <div ref={ref} className="m-6 flex items-center gap-3">

            <h2 className="text-4xl font-bold">
                {inView ? <CountUp end={end} duration={Number(duration) || 2} /> : "0"}
                <span className="ml-1">+</span>
            </h2>
            <p className="text-2xl">{label}</p>
        </div>
    );
}

// import React from "react";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// export default function Stats({ end, duration, label }) {
//     const { ref, inView } = useInView({
//         triggerOnce: true,  // run once
//         threshold: 0.3,     // when 30% is visible
//     });

//     return (
//         <div ref={ref} className="m-6 flex flex-col items-center text-center">
//             <h2 className="text-4xl font-bold text-blue-600 flex items-center">
//                 {inView ? (
//                     <CountUp end={end} duration={Number(duration) || 2} />
//                 ) : (
//                     "0"
//                 )}
//                 <span className="ml-1">+</span>
//             </h2>
//             <p className="text-lg text-gray-600">{label}</p>
//         </div>
//     );
// }
