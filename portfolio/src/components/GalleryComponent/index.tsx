import { ActualImage, ActualItemContainer, ButtonContainer, CarouselContainer, CarouselItem, DescriptionContainer, GalleryContainer, LinksContent, ProjectDescription, ProjectName, Subtitle, ToolsContent, UsedToolsContainer } from "./styles";
import { useState } from "react";
import { BsReverseLayoutTextWindowReverse, BsGithub } from "react-icons/bs";
import { TiSocialGithub } from "react-icons/ti";


interface GalleryComponentProps {
    id: number,
    name: string,
    description: string,
    usedTools: string[],
    image: string,
}
interface Props {
    GalleryData: GalleryComponentProps[]
}

interface ICurrentItem {
    current: number
}

export function GalleryComponent({ GalleryData }: Props) {
    const [currentItem, setCurrentItem] = useState<ICurrentItem>({ current: 1 })
    return (
        <GalleryContainer>
            <h1>Projetos</h1>
            <ActualItemContainer>
                {GalleryData.map((item) => {
                    return item.id === currentItem.current ? <ActualImage src={`${item.image}`} /> : null

                })}
                <DescriptionContainer>
                    {GalleryData.map((item) => {
                        return (

                            item.id === currentItem.current ?
                                <>
                                    <ProjectName>{item.id === currentItem.current && item.name}</ProjectName>
                                    <ProjectDescription>{item.id === currentItem.current && item.description}</ProjectDescription>
                                    <h3>Ferramentas Utilizadas</h3>
                                    <ToolsContent>
                                        {item.usedTools.map((item) => { return (<p>{item}</p>) })}
                                    </ToolsContent>
                                </> : null
                        )
                    })}

                    <LinksContent>
                        {/* <a href="ilariê" target="_blank" >Ver no github</a>
                        <a href="ôôô" target="_blank">Ver projeto</a> */}

                        <ButtonContainer>
                            <div className="icon">
                                <BsGithub />
                            </div>
                            <div className="cube">
                                <span className="side front">Código fonte</span>
                                <span className="side top">Abrir no Github</span>
                            </div>
                        </ButtonContainer>
                        <ButtonContainer>
                            <div className="icon">
                                <BsReverseLayoutTextWindowReverse />
                            </div>
                            <div className="cube">
                                <span className="side front">Demonstração</span>
                                <span className="side top">Abrir site</span>
                            </div>
                        </ButtonContainer>

                    </LinksContent>
                </DescriptionContainer>
            </ActualItemContainer>
            <CarouselContainer>
                {GalleryData.map((item) => {
                    return (
                        <CarouselItem
                            src={item.image}
                            onClick={() => { setCurrentItem({ current: item.id }) }}

                        />
                    )
                })}
            </CarouselContainer>



        </GalleryContainer>


    )

}