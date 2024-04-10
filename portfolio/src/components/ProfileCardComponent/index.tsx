import { ProfileCardImage, ProfileCardContainer, ProfileCardInformations } from "./styles";
import ProfilePhoto from '../../assets/Camisa-azul-escura-com-fundo.webp'
export function ProfileCardComponent() {
    return (
        <>
            <ProfileCardContainer>
                <ProfileCardImage src={ProfilePhoto} />
                <ProfileCardInformations>
                    <span className="hour">+1700</span>
                    <p className="secondaryText">horas certificadas em cursos HTML/CSS/JS</p>
                </ProfileCardInformations>
            </ProfileCardContainer>
        </>
    );
}

