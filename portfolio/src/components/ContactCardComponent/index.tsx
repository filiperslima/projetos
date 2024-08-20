import { CardContainer } from "./styles";
import { FaGithub, FaInstagram, FaLinkedinIn  } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";

export function ContactCardComponent() {
    return (
        <CardContainer>
            <h2>Entre em contato em uma das minhas redes sociais:</h2>
            <a href="https://www.instagram.com/filiperslima/" target="_blank"><AiOutlineInstagram /></a>
            <a href="https://www.linkedin.com/in/filiperslima/" target="_blank"><TiSocialLinkedin  /></a>
            <a href="https://github.com/filiperslima" target="_blank"><FaGithub /></a>
            <h3>Vamos consturir algo juntos!</h3>
        </CardContainer>

    );
}

