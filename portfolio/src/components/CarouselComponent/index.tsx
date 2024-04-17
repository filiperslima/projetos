import { useRef } from "react";
import { CarouselContainer, CarouselItem } from "./styles";
import { useDraggable } from "react-use-draggable-scroll";
import { ICurrentItem } from "../GalleryComponent";


interface CarouselProps {
    data: any[],
    current: number,
    updateState: (novoEstado: ICurrentItem) => void;
}

function CarouselComponent({ data, current, updateState }: CarouselProps) {
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref);
    const handleClick = (item: number) => {
        updateState({ current: item })
    }
    return (
        <CarouselContainer

            {...events}
            ref={ref}
        >
            {data.map((item) => {
                return (
                    <CarouselItem
                        key={item.id}
                        src={item.image}
                        onClick={() => handleClick(item.id)}
                        isCurrent={item.id === current}
                    />
                )
            })}
        </CarouselContainer>
    );
}

export default CarouselComponent;