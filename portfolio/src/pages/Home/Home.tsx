
import Photo from '../../assets/Camisa-azul-escura-com-fundo.webp'
import { TagMessageComponent } from '../../components/TagMessageComponent'
import { ProfileImage, WelcomeElementsContainer } from './styles'
export function Home() {
    return (
        <>
            <WelcomeElementsContainer className='home'>
                <span>
                <TagMessageComponent />
                </span>
                <ProfileImage src={Photo} />

            </WelcomeElementsContainer>

        </>
    )
}