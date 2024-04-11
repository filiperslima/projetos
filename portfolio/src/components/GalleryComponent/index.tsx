import { ActualImage, ActualItemContainer, ButtonContainer, CarouselContainer, CarouselItem, DescriptionContainer, GalleryContainer, LinksContent, ProjectDescription, ProjectName, Subtitle, ToolsContent, UsedToolsContainer } from "./styles";
import { useState } from "react";
import { BsReverseLayoutTextWindowReverse, BsGithub } from "react-icons/bs";
import { TiSocialGithub } from "react-icons/ti";
import { ComingSoonComponent } from "../ComingSoonComponent";


interface GalleryComponentProps {
    id: number,
    name: string,
    description: string,
    usedTools: string[],
    image: string,
    isCompleted: boolean
}
interface Props {
    GalleryData: GalleryComponentProps[]
}

interface ICurrentItem {
    current: number
}

export function GalleryComponent({ GalleryData }: Props) {
    const [currentItem, setCurrentItem] = useState<ICurrentItem>({ current: 1 })
    const [isDragging, setIsDragging] = useState<boolean>(false)

    return (
        <GalleryContainer>
            <h1>Projetos</h1>
            <ActualItemContainer>
                {GalleryData.map((item) => {
                    return item.id === currentItem.current ? (item.isCompleted ? <ActualImage src={item.image} /> : <ComingSoonComponent />) : null
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
                                <a href="ilariê" target="_blank" className="side top">Abrir no Github</a>
                            </div>
                        </ButtonContainer>
                        <ButtonContainer>
                            <div className="icon">
                                <BsReverseLayoutTextWindowReverse />
                            </div>
                            <div className="cube">
                                <span className="side front">Demonstração</span>
                                <a href="ilariê" target="_blank" className="side top">Abrir site</a>
                            </div>
                        </ButtonContainer>

                    </LinksContent>
                </DescriptionContainer>
            </ActualItemContainer>
            <CarouselContainer
                onMouseDown={(e) => {
                    setIsDragging(true)
                    console.log(e.pageX)
                    console.log(isDragging)
                }}
                onMouseMove={(e) => {
                    if (!isDragging) {
                        return
                    }
                    console.log(e.pageX)
                    console.log(isDragging)

                }}
                onMouseUp={(e) => {
                    console.log(e.pageX)
                    setIsDragging(false)
                    console.log(isDragging)

                }}
            >
                {GalleryData.map((item) => {
                    return (
                        <CarouselItem
                            src={item.image}
                            onClick={() => { setCurrentItem({ current: item.id }) }}

                            isDragging={isDragging}


                        />
                    )
                })}
            </CarouselContainer>



        </GalleryContainer>


    )

}