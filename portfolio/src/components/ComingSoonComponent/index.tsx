import { TerminalContainer, TerminalControls, TerminalHeader, TerminalMainMessage, TerminalMessage, TerminalTitle } from "./styles";
import { BiLogoVisualStudio } from "react-icons/bi";
import { FaRegWindowMinimize, FaRegWindowRestore, FaRegWindowClose } from "react-icons/fa";
import { IoConstructOutline } from "react-icons/io5";


interface ComingSoonProps {
    onClick? : () => void,
    variant?: boolean
}

export function ComingSoonComponent({onClick, variant}:ComingSoonProps) {
    return (
        <TerminalContainer onClick={onClick} smaller={variant}>
            <TerminalHeader>

                <TerminalTitle>
                    <BiLogoVisualStudio />
                    <span>NewReactApp</span>
                </TerminalTitle>

                <TerminalControls>
                    <FaRegWindowMinimize />
                    <FaRegWindowRestore />
                    <FaRegWindowClose />
                </TerminalControls>

            </TerminalHeader>
            <TerminalMessage>
                <p> {`{ ThemeProvider }`} <span data-variant='pink'>from</span>  <span data-variant='yellow'><span data-variant='yellow'>'styled-components'</span></span></p>
                <p> {`{ defaultTheme }`} <span data-variant='pink'>from</span> <span data-variant='yellow'><span data-variant='yellow'>"./styles/themes/default"</span></span> </p>
                <p> {`{ Home }`} <span data-variant='pink'>from</span> <span data-variant='yellow'>"./pages/Home/Home"</span></p>
                <p> {`{ Global }`}<span data-variant='pink'>from</span> <span data-variant='yellow'>"./styles/global"</span></p>
                <span className="text"><span data-variant='pink'>export function</span> <span data-variant='green'>{`App() { return ()}`}</span></span>

            </TerminalMessage>

            <TerminalMainMessage>
                <h2><IoConstructOutline/></h2>
                <h3>Em construção</h3>
            </TerminalMainMessage>
        </TerminalContainer>


    );
}
