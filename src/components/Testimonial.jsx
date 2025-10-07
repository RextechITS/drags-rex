import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            role: "CEO, TechCorp Solutions",
            message:
                "Working with this team has completely transformed our online presence. From the initial consultation to the final delivery, every stage of the project was handled with professionalism and creativity. Our website now loads faster, ranks higher, and converts better than ever before. I couldn’t recommend them highly enough!",
        },
        {
            id: 2,
            name: "Sarah Williams",
            role: "Marketing Director, BrightEdge Agency",
            message:
                "They took our vague ideas and turned them into a beautiful, fully functional website that perfectly represents our brand. The attention to detail, responsiveness, and seamless communication made the entire process stress-free. We’ve seen a significant increase in client engagement since launch!",
        },
        {
            id: 3,
            name: "Michael Lee",
            role: "Freelance Photographer",
            message:
                "I needed a sleek, visually captivating portfolio site to showcase my work, and they absolutely delivered. The animations are smooth, the design is elegant, and it works perfectly across all devices. My clients love how easy it is to navigate. Truly a game-changer for my freelance business.",
        },
        {
            id: 4,
            name: "Aisha Bello",
            role: "Founder, LuxeBoutique",
            message:
                "Our eCommerce platform was outdated and hard to manage before we found this team. They rebuilt everything from scratch using modern tools and improved the shopping experience for our customers. Sales have grown steadily, and the backend is now so easy for us to update. Absolutely worth every penny!",
        },
        {
            id: 5,
            name: "David Thompson",
            role: "Project Manager, NextGen Tech",
            message:
                "From SEO optimization to UI enhancements, the team brought an exceptional level of expertise to our website revamp. They not only delivered ahead of schedule but also took the time to explain their process in simple terms. Their dedication and technical know-how make them a partner we’ll continue working with for future projects.",
        },
    ];


    return (
        <section className="max-w-4xl mx-auto text-center mt-20 text-white">
            {/* <h2 className="text-2xl font-bold mb-8 text-[#00c0ff]">Testimonials</h2> */}

            <style>
                {`
          /* Customize Swiper pagination dots */
          .swiper-pagination-bullet {
            background-color: #00c0ff !important;
            opacity: 0.6;
            width: 14px;
            height: 14px;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            opacity: 1;
            transform: scale(1.3);
          }
        `}
            </style>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
            // navigation
            >
                {testimonials.map((testimony) => (
                    <SwiperSlide key={testimony.id}>
                        <div className="bg-transparent p-10 rounded-xl shadow-lg text-center flex flex-col items-center gap-5">
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="70px" x="0px" y="0px"
                                viewBox="0 0 191.029 191.029" xml:space="preserve">
                                <path fill="#00c0ff" d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918
	                            C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433
	                            c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474
	                            C152.613,48.759,171.149,48.759,181.107,48.759z"/>
                            </svg>
                            <p className="text-lg italic mb-4">"{testimony.message}"</p>
                            <h3 className="font-semibold text-[#00c0ff]">{testimony.name}</h3>
                            <p className="text-sm text-gray-400 mb-5">{testimony.role}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
