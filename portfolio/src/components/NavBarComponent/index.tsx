import { useState } from "react";
import { LinksContainer, LogoContent, NavBarContainer, NavigationLink } from "./styles";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-scroll';


interface StatusModal {
    status?: 'show' | 'hiding' | 'hidden';
}

export function NavBarComponent() {
    const [status, setStatus] = useState<StatusModal>({ status: 'hidden' })
    return (

        <>
            <NavBarContainer>
                <LogoContent
                    to='home'
                    smooth={true}
                    offset={-200}
                    duration={500}
                >Portfólio</LogoContent>


                <LinksContainer status={status.status}>
                    <button onClick={() => { setStatus({ status: 'hiding' }) }}>X</button>
                    <NavigationLink
                        to='home'
                        smooth={true}
                        offset={-200}
                        duration={500}
                        onClick={() => { setStatus({ status: 'hiding' }) }}

                    >Início</NavigationLink>
                    <NavigationLink
                        to='about-me'
                        smooth={true}
                        offset={-30}
                        duration={500}
                        onClick={() => { setStatus({ status: 'hiding' }) }}

                    >Sobre mim</NavigationLink>
                    <NavigationLink
                        to='projects'
                        smooth={true}
                        offset={-140}
                        duration={500}
                        onClick={() => { setStatus({ status: 'hiding' }) }}
                    >Projetos</NavigationLink>
                    <NavigationLink
                        to='contact'
                        smooth={true}
                        offset={-50}
                        duration={500}
                        onClick={() => { setStatus({ status: 'hiding' }) }}
                    >Contato</NavigationLink>
                </LinksContainer>
                <button onClick={() => { setStatus({ status: 'show' }) }}>
                    <RxHamburgerMenu />
                </button>
            </NavBarContainer>
        </>


    );
}

