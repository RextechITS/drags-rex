
import ContactForm from "../components/ContactForm";

export default function contact() {
    return (
        <div className="p-3 md:p-8 w-[95vw] lg:w-[80vw] mx-auto space-y-10 mt-20 lg:mt-40">
            <h2 className="text-xl font-medium mb-8 text-center text-[#00c0ff]">Contact  </h2>
            <ContactForm />
        </div>
    )
}