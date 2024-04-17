import { Title } from "./styles";

interface TitleProps {
    section: string
}

export function SectionTitleComponent({ section }: TitleProps) {
    return (  
        <Title>{section}</Title>
    );
}

