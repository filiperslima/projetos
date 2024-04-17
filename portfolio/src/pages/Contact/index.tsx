
import { ContactContainer, Inner, Outter } from "./styles";
import { ContactCardComponent } from "../../components/ContactCardComponent";
import { SectionTitleComponent } from "../../components/SectionTitleComponent";

export function Contact() {
    return (


        <ContactContainer className="contact">
            <SectionTitleComponent section="Contatos" />
            <ContactCardComponent />
        </ContactContainer>


    );
}

