import { FaFacebook, FaInstagram, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { MAIN_LINKS } from "../components/MainRoutes";

export const CONTACT_MENU= [
    {title: "Facebook" , link: MAIN_LINKS.facebook , icon: FaFacebook },
    {title: "WhatsApp" , link: MAIN_LINKS.whatsapp , icon: FaWhatsapp },
    {title: "LinkedIn" , link: MAIN_LINKS.linkedin , icon: FaLinkedin },
    {title: "Instagram" , link: MAIN_LINKS.instagram , icon: FaInstagram },
    {title: "Telegram" , link: MAIN_LINKS.telegram , icon: FaTelegram },
]