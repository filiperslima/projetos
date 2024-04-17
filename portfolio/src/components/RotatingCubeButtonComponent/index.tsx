import { BsGithub, BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { ButtonContainer } from "./styles";
import { ReactNode } from "react";

interface RotatingCubeProps {
    children: ReactNode,
}
interface Icon {
    children: ReactNode
}
interface MainMessage {
    children: ReactNode
}
interface SecondaryMessage {
    children: ReactNode,
    href: string
}
interface Main {
    children: ReactNode
}
export function Icon({ children }: Icon) {
    return <div className="icon"> {children} </div>
}
export function Main({ children }: Main) {
    return <div className="cube">{children}</div>
}
export function VisibleText({ children }: MainMessage) {
    return <span className="side front">{children}</span>
}
export function HiddenText({ children, href }: SecondaryMessage) {
    return <a href={href} target="_blank" className="side top">{children}</a>
}
export function RotatingCubeButton({ children }: RotatingCubeProps) {
    return (
        <>
            <ButtonContainer>
                {children}
            </ButtonContainer>
        </>
    );
}
RotatingCubeButton.Icon = Icon;
RotatingCubeButton.Main = Main;
RotatingCubeButton.Visible = VisibleText
RotatingCubeButton.Hidden = HiddenText;

export default RotatingCubeButton;

