// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Header() {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <header className="px-6 bg-[#00c0ff] text-white p-4 flex justify-between items-center">
//             <h1 className="text-2xl font-bold">My Portfolio</h1>

//             {/* Desktop Menu */}
//             <nav className="hidden md:flex">
//                 <ul className="flex space-x-6">
//                     <li><Link to="/" className="hover:text-black">Home</Link></li>
//                     <li><Link to="/about" className="hover:text-black">About</Link></li>
//                     <li><Link to="/projects" className="hover:text-black">Projects</Link></li>
//                     <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
//                 </ul>
//             </nav>

//             {/* Mobile Button */}
//             <button
//                 className="md:hidden text-2xl"
//                 onClick={() => setIsOpen(!isOpen)}
//             >
//                 ☰
//             </button>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <nav className="absolute top-16 left-0 w-full bg-blue-700 md:hidden">
//                     <ul className="flex flex-col  space-y-4 p-4">
//                         <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
//                         <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
//                         <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
//                         <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
//                     </ul>
//                 </nav>
//             )}
//         </header>
//     );
// }

import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full fixed px-6 lg:px-[200px] md:py-6 bg-[#00c0ff] text-white p-4 flex justify-between items-center z-50">
            <Link to="/"><img src="/logo.png" alt="My Portfolio" className="w-20 h-auto aspect-auto object-fit no-repeat center object-cover" /></Link>

            <nav className="hidden md:block">
                <ul className="flex space-x-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? " text-black font-bold" : "hover:text-black"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? " text-black font-bold" : "hover:text-black"
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                isActive ? " text-black font-bold" : "hover:text-black"
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? " text-black font-bold" : "hover:text-black"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <button className="block md:hidden text-3xl font-bold" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '✼' : '☲'}
            </button>

            {/* mobile menu */}
            <nav className={`md:hidden absolute w-full h-[100vh] top-16 left-0 bg-[#3a2b71] px-5 backdrop-blur-3xl transform transition-all duration-700 ease-in-out 
                    ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"}
                `} >
                <ul className="flex flex-col gap-4 mt-2" >
                    <li><NavLink to="/" className={({ isActive }) => isActive ? " text-[#00c0ff] font-bold" : ""} onClick={() => setIsOpen(false)}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#00c0ff] font-bold" : ""} onClick={() => setIsOpen(false)}>About</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => isActive ? "text-[#00c0ff] font-bold" : ""} onClick={() => setIsOpen(false)}>Projects</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#00c0ff] font-bold" : ""} onClick={() => setIsOpen(false)}>Contact</NavLink></li>
                </ul>
            </nav>

        </header>
    )
}