import { TagMessageContainer, TagMessageContent } from "./styles"
import { PiLinkedinLogoThin, PiGithubLogoThin } from "react-icons/pi";
import { LiaLinkedin, LiaGithubSquare } from "react-icons/lia";

import { RiLinkedinLine } from "react-icons/ri";





export function TagMessageComponent() {
    return (
        <TagMessageContainer>
            <TagMessageContent>
                <h1>Bem-vindo!</h1>
                <h2>Sou Filipe</h2>
            </TagMessageContent>
            <TagMessageContent variant="professionalTagline">
                <h2>Aspirante a</h2>
                <h1>Desenvolvedor full-stack

                </h1>

                <div>
                    <a href="https://www.linkedin.com/in/filipe-rodrigues-7433a01b9/" target="_blank">
                    <RiLinkedinLine/>
                    </a>
                    <a href="https://github.com/filiperslima" target="_blank">
                    <PiGithubLogoThin />
                    </a>
                    
                </div>


            </TagMessageContent>


        </TagMessageContainer>
    )
}