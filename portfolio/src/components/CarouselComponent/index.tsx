import { useRef } from "react";
import { CarouselContainer, CarouselItem, ComingSoonItem } from "./styles";
import { useDraggable } from "react-use-draggable-scroll";
import { ICurrentItem } from "../GalleryComponent";
import { GalleryData, IGalleryData } from "../../pages/Projects";
import { ComingSoonComponent } from "../ComingSoonComponent";

interface CarouselProps {
    data: typeof GalleryData,
    current: number,
    updateState: (novoEstado: ICurrentItem) => void;
}

function CarouselComponent({ data, current, updateState }: CarouselProps) {
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const refSelectedItem = useRef(null);
    const { events } = useDraggable(ref);
    const handleClick = (item: number) => {
        updateState({ current: item })
    }
    const updateSelectedItem = () => {

    }
    return (
        <CarouselContainer
            {...events}
            ref={ref}
        >
            {data.map((item) => {
                return item.isCompleted || item.image  ? <CarouselItem
                    key={item.id}
                    src={item.image}
                    onClick={() => handleClick(item.id)}
                    isCurrent={item.id === current}
                />
                    : <ComingSoonItem
                        onClick={() => handleClick(item.id)}
                        isCurrent={item.id === current}

                    > <p>Em breve</p> </ComingSoonItem>

            })}
        </CarouselContainer>
    );
}

export default CarouselComponent;