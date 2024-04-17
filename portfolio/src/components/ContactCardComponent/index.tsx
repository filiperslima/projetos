import { CardContainer } from "./styles";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
export function ContactCardComponent() {
    return (
        <CardContainer>

            <a href="https://www.instagram.com/filiperslima/" target="_blank"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/filiperslima/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/filiperslima" target="_blank"><FaGithub /></a>
            <h2>Vamos consturir algo juntos!</h2>
        </CardContainer>

    );
}

