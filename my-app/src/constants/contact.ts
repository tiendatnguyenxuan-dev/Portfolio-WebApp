import { Mail, MapPin, Phone } from "lucide-react"

export const CONTACT_DATA = {
    header: {
        number: "05.",
        text: "What's Next?"
    },
    title: {
        line1: "Get In",
        line2: "Touch."
    },
    description: "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    email: "user@example.com",
    details: [
        { icon: Mail, label: "Email", value: "dev@example.com", href: "mailto:dev@example.com" },
        { icon: MapPin, label: "Location", value: "Ho Chi Minh, Vietnam", href: "#" },
        { icon: Phone, label: "Phone", value: "(+84) 123 456 789", href: "tel:+84123456789" }
    ]
}
