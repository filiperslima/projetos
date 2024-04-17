import styled, { css } from "styled-components";

export const CarouselContainer = styled.div`
  display: none;
  @media only screen and (min-width: 769px) {
    /* width: 50%; */
    height: 25vh;
    margin-left: 3.5%;
    display: flex;
    justify-content: space-evenly;
    gap: 60px;
    /* overflow-x: scroll; */
    /* overflow-y: hidden; */
    overflow: auto;
    cursor: grab;
    /* padding-left: 40px; */
    margin-right: 3vw;
    
    scrollbar-width: none;
  }
`;
interface CurrentStatus {
  isCurrent: boolean;
}

export const CarouselItem = styled.img<CurrentStatus>`
  width: 20%;
  height: 80%;
  margin-top: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.2);
  }
  ${(props) =>
    props.isCurrent &&
    css`
      transform: scale(1.2);
    `};

  /* &:hover &:not(:hover){
    transform: scale(0.5);
  } */
`;
