import { ActualImage, ActualItemContainer, ButtonContainer, CarouselContainer, CarouselItem, DescriptionContainer, GalleryContainer, LinksContent, ProjectDescription, ProjectName, Subtitle, ToolsContent, UsedToolsContainer } from "./styles";
import { Fragment, useRef, useState } from "react";
import { BsReverseLayoutTextWindowReverse, BsGithub } from "react-icons/bs";
import { ComingSoonComponent } from "../ComingSoonComponent";
import { useDraggable } from "react-use-draggable-scroll";
import RotatingCubeButton from "../RotatingCubeButtonComponent";
import CarouselComponent from "../CarouselComponent";


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

export interface ICurrentItem {
    current: number
}

export function GalleryComponent({ GalleryData }: Props) {
    const [currentItem, setCurrentItem] = useState<ICurrentItem>({ current: 1 })
    const updateCurrentItem = (newState: ICurrentItem) => {
        setCurrentItem(newState)
    }
    return (
        <GalleryContainer>
            <ActualItemContainer>
                {GalleryData.map((item) => {
                    return item.id === currentItem.current ? (item.isCompleted ? <ActualImage src={item.image} key={item.id} /> : <ComingSoonComponent key={item.id} />) : null
                })}
                <DescriptionContainer>
                    {GalleryData.map((item) => {
                        return (
                            item.id === currentItem.current ?
                                <Fragment key={item.id}>
                                    <ProjectName>{item.id === currentItem.current && item.name}</ProjectName>
                                    <ProjectDescription>{item.id === currentItem.current && item.description}</ProjectDescription>
                                    <h3>Ferramentas Utilizadas</h3>
                                    <ToolsContent>
                                        {item.usedTools.map((item) => { return (<p key={currentItem.current}>{item}</p>) })}
                                    </ToolsContent>
                                </Fragment> : null
                        )
                    })}
                    <LinksContent>
                        <RotatingCubeButton>
                            <RotatingCubeButton.Icon> <BsGithub /></RotatingCubeButton.Icon>
                            <RotatingCubeButton.Main>
                                <RotatingCubeButton.Visible>Código Fonte</RotatingCubeButton.Visible>
                                <RotatingCubeButton.Hidden href="ôôô"> Abrir no Github</RotatingCubeButton.Hidden>
                            </RotatingCubeButton.Main>
                        </RotatingCubeButton>
                        <RotatingCubeButton>
                            <RotatingCubeButton.Icon> <BsReverseLayoutTextWindowReverse /></RotatingCubeButton.Icon>
                            <RotatingCubeButton.Main>
                                <RotatingCubeButton.Visible>Demonstração</RotatingCubeButton.Visible>
                                <RotatingCubeButton.Hidden href="ilariê"> Abrir site</RotatingCubeButton.Hidden>
                            </RotatingCubeButton.Main>
                        </RotatingCubeButton>
                    </LinksContent>
                </DescriptionContainer>
            </ActualItemContainer>
            <CarouselComponent data={GalleryData} current={currentItem.current} updateState={updateCurrentItem} />
        </GalleryContainer>


    )

}