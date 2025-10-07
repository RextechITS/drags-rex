import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { showAlert } from "../utils/Alert";

export default function ContactForm() {
    const form = useRef();
    const [loading, setLoading] = useState(false); // ✅ properly initialized

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true); // show loading state

        emailjs
            .sendForm(
                "service_qlg5qhh", // your EmailJS service ID
                "template_eec8btn", // your template ID
                form.current,
                "TiBuhVl8gjSTLkJab" // your public key
            )
            .then(
                () => {
                    showAlert("success", "Message Sent!", "Your message has been delivered successfully.");
                    form.current.reset();
                    setLoading(false);
                },
                () => {
                    showAlert("error", "Oops!", "Something went wrong while sending your message. Please try again.");
                    setLoading(false);
                }
            );
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 " >

                <div className=" py-5 grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div data-aos="fade-down" className="flex gap-4">
                        <div className="bg-[#00c0ff] p-3 h-[55px] rounded-full">
                            <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M12,2 C16.9705627,2 21,5.98572446 21,10.9023647 C21,14.1558559 18.2776716,17.5957933 12.9482526,21.3431516 L12,22 L11.4277959,21.6050955 C5.85042064,17.7558913 3,14.2315185 3,10.9023647 C3,5.98572446 7.02943725,2 12,2 Z M12,3.97830328 C8.13400675,3.97830328 5,7.07831119 5,10.9023647 C5,13.3048538 7.29671943,16.236445 12,19.5818284 C16.7032806,16.236445 19,13.3048538 19,10.9023647 C19,7.07831119 15.8659932,3.97830328 12,3.97830328 Z M12,6 C14.209139,6 16,7.790861 16,10 C16,12.209139 14.209139,14 12,14 C9.790861,14 8,12.209139 8,10 C8,7.790861 9.790861,6 12,6 Z M12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 Z" />
                            </svg>
                        </div>
                        <div className="w-full lg:w-[80%] flex flex-col md:flex-row justify-between ">
                            <div>
                                <p className="text-[#00c0ff]">Location</p>
                                <p className="text-white">Nigeria </p>
                            </div>

                            {/*<div>
                                 <p className="text-white">June - October 2025 </p>
                            </div> */}
                        </div>

                    </div>

                    <div data-aos="fade-up" className="flex gap-4">
                        <div className="bg-[#00c0ff] p-3 h-[55px] rounded-full ">
                            <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M20,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V9.41L8.88,15.3a3,3,0,0,0,2.11.87,3.08,3.08,0,0,0,2.16-.9l1.72-1.72a1,1,0,1,0-1.42-1.42L11.7,13.88a1,1,0,0,1-1.4,0L4.41,8H10a1,1,0,0,0,0-2H4A3,3,0,0,0,1,9V19a3,3,0,0,0,3,3H18a3,3,0,0,0,3-3V15A1,1,0,0,0,20,14Zm0-6a2,2,0,0,0-1.18.39l-1.75-.8L19,6.71A2,2,0,0,0,20,7a2,2,0,1,0-2-2l-1.9.87A2,2,0,0,0,15,5.5a2,2,0,0,0,0,4,1.88,1.88,0,0,0,.92-.24l2.1,1A2,2,0,1,0,20,8Z" /></svg>
                        </div>
                        <div className="w-full lg:w-[80%] flex flex-col md:flex-row justify-between ">
                            <div>
                                <p className="text-[#00c0ff]">E-mail Address</p>
                                <p className="text-white"> rextechitsolution@gmail.com </p>
                            </div>

                            {/* <div>
                                <p className="text-white">2022 - 2024</p>
                            </div> */}
                        </div>

                    </div>

                    <div data-aos="fade-down" className="flex gap-4">
                        <div className="bg-[#00c0ff] p-3 h-[55px] rounded-full ">
                            <svg fill="#ffffff" width="30px" height="30px" viewBox="0 0 24 24" id="phone" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><path id="primary" d="M21,15v3.93a2,2,0,0,1-2.29,2A18,18,0,0,1,3.14,5.29,2,2,0,0,1,5.13,3H9a1,1,0,0,1,1,.89,10.74,10.74,0,0,0,1,3.78,1,1,0,0,1-.42,1.26l-.86.49a1,1,0,0,0-.33,1.46,14.08,14.08,0,0,0,3.69,3.69,1,1,0,0,0,1.46-.33l.49-.86A1,1,0,0,1,16.33,13a10.74,10.74,0,0,0,3.78,1A1,1,0,0,1,21,15Z" ></path></svg>
                        </div>
                        <div className="w-full lg:w-[80%] flex flex-col md:flex-row justify-between ">
                            <div>
                                <p className="text-[#00c0ff]">Phone</p>
                                <a href="tel:2349055549416" className="text-white">+2349055549416</a>
                            </div>

                            {/* <div>
                                <p className="text-white">2017 - 2018</p>
                            </div> */}
                        </div>

                    </div>

                    <div data-aos="fade-down" className="flex gap-4">
                        <div className="bg-[#00c0ff] p-3 h-[55px] rounded-full ">
                            <svg width="30px" height="30px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0" />
                                <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white" />
                                <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#5BD066" />
                                        <stop offset="1" stop-color="#27B43E" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="w-full lg:w-[80%] flex flex-col md:flex-row justify-between ">
                            <div>
                                <p className="text-[#00c0ff]">WhatsApp</p>
                                <a href="https://wa.me/2349055549416" className="text-white">+2349055549416</a>
                            </div>

                            {/* <div>
                                <p className="text-white">2017 - 2018</p>
                            </div> */}
                        </div>

                    </div>

                </div>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="max-w-lg mx-auto mt-10 space-y-4"
                >
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        className="w-full p-3 rounded bg-white/5 text-white"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        className="w-full p-3 rounded bg-white/5 text-white"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        className="w-full p-3 rounded bg-white/5 text-white"
                        rows="5"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className={`${loading
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-[#00c0ff] hover:bg-[#00a9e0]"
                            } px-6 py-3 rounded text-white font-semibold transition-all`}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>

        </>



    );
}
