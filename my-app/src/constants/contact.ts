import { Mail, MapPin, Phone } from "lucide-react"

export const CONTACT_DATA = {

    description: "Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    email: "itcsiu22278@student.hcmiu.edu.vn",
    header: {
        number: "06.",
        text: "What's Next?"
    },
    details: [
        { icon: Mail, label: "Email", value: "itcsiu22278@student.hcmiu.edu.vn", href: "mailto:itcsiu22278@student.hcmiu.edu.vn" },
        { icon: MapPin, label: "Location", value: "Ho Chi Minh, Vietnam", href: "#" },
        { icon: Phone, label: "Phone", value: "(+84) 938 355 333", href: "tel:+84938355333" }
    ]
}
