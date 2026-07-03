import { Mail, MapPin, Phone } from "lucide-react"

const EMAIL = "tiendatnguyenxuan1607@gmail.com"

export const CONTACT_DATA = {

    description: "I'm actively looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    email: EMAIL,
    header: {
        number: "06.",
        text: "What's Next?"
    },      
    details: [
        { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
        { icon: MapPin, label: "Location", value: "Ho Chi Minh, Vietnam", href: "#" },
        { icon: Phone, label: "Phone", value: "(+84) 826 277 899", href: "tel:+84826277899" }
    ]
}
