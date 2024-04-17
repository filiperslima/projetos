import { ProfileCardImage, ProfileCardContainer, ProfileCardInformations } from "./styles";
import ProfilePhoto from '../../assets/Camisa-azul-escura-com-fundo.webp'
import { Badge } from "../BadgeComponent";
export function ProfileCardComponent() {
    return (
        <>
            <ProfileCardContainer>
                <ProfileCardImage src={ProfilePhoto} />
                <ProfileCardInformations>
                    <Badge>
                        <p>+1700 horas certificadas</p>
                        <p>em cursos HTML/CSS/JS</p>
                    </Badge>
                    <Badge>
                        <p>+3100 horas em cursos</p>
                        <p>de Desenvolvimento Web</p>
                    </Badge>
                </ProfileCardInformations>
            </ProfileCardContainer>
        </>
    );
}

