import { useState } from "react";
import { LinksContainer, LogoContent, NavBarContainer, NavigationLink } from "./styles";
import { RxHamburgerMenu } from "react-icons/rx";


interface StatusModal {
    status?: 'show' | 'hiding' | 'hidden';
}

export function NavBarComponent() {
    const [status, setStatus] = useState<StatusModal>({status:'hidden'})
    // const referedSection = useRef(null);
    // const scrollTo = () => { window.scrollTo({ top: referedSection.current.offsetTop, behavior: 'smooth' }) }
    
    
    
    return (

        <>
            <NavBarContainer>
                <LogoContent>Portfólio</LogoContent>
                <LinksContainer status={status.status}>
                <button onClick={()=>{setStatus({status:'hiding'})}}>X</button>
                    <NavigationLink to={"/"} >Início</NavigationLink> {/* Se não for usar fixed, tire */}
                    <NavigationLink to={"/"} >Sobre mim</NavigationLink>
                    <NavigationLink to={"/"}>Projetos</NavigationLink>
                    <NavigationLink to={"/"}>Contato</NavigationLink>
                </LinksContainer>

                <button onClick={()=>{setStatus({status:'show'})}}>
                    <RxHamburgerMenu/>
                </button>

            </NavBarContainer>
        </>


    );
}

