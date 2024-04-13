import styled, { css } from "styled-components";

export const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  color: ${({ theme }) => theme["mirage-50"]};
  && > h1 {
    font-size: clamp(2vw, 2.2rem, 10vw);
    font-weight: 500;
    color: ${({ theme }) => theme["mirage-500"]};
  }
  @media only screen and (min-width: 768px) {
    && > h1 {
      width: 80%;
      padding: 0 3.4%;
    }
  }
`;

export const ActualItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  gap: 2vw;
  @media only screen and (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const ActualImage = styled.img`
  /* width: 45%; */
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media only screen and (min-width: 769px) {
    width: 42%;
    object-position: 12%;
  }
`;
export const DescriptionContainer = styled.div`
  /* width: 45%; */
  width: 100%;
  padding: 1.5rem 0 0 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-self: flex-end;

  h3 {
    color: ${({ theme }) => theme["mirage-400"]};
  }
  @media only screen and (min-width: 769px) {
    width: 45%;
    align-self: flex-start;
    padding: 0;
    gap: 12px;
  }
`;

export const ProjectName = styled.h1`
  font-size: 2em;
  font-weight: 300;
  color: ${({ theme }) => theme["mirage-400"]};
`;
export const ProjectDescription = styled.p`
  font-weight: 200;
  line-height: 2rem;
`;
export const ToolsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-wrap: nowrap;
  /* gap: 12px; */

  gap: 6px;
  align-items: center;
  margin-bottom: 1.3rem;
  svg {
    /* font-size: 2em; */
    font-size: 1.3em;
    margin: 0.3rem;
  }
`;

export const LinksContent = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2vw;

  a {
    background-color: ${({ theme }) => theme["mirage-500"]};
    color: ${({ theme }) => theme["mirage-50"]};
    text-decoration: none;
    padding: 1.2rem;
    width: 45%;
    text-align: center;
  }

  @media only screen and (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    a {
      width: 100%;
    }
  }
  @media only screen and (min-width: 769px) {
    width: 40vw;
    gap: 3vw;
  }
`;

export const CarouselContainer = styled.div`
  display: none;
  @media only screen and (min-width: 769px) {
    width: 95%;
    height: 25vh;
    margin-left: 3.5%;
    display: flex;
    justify-content: space-evenly;
    gap: 60px;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;
    cursor: grab;
    padding-left: 40px;
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
  ${props => props.isCurrent && css`
  transform: scale(1.2);
  `};

  /* &:hover &:not(:hover){
    transform: scale(0.5);
  } */
`;

export const ButtonContainer = styled.div`
  display: flex;
  /* border: 3px #fff solid; */
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme["mirage-500"]};
  }

  .icon {
    background-color: #4e6da9;
    padding: 10px 10px 8px 10px;
  }

  .icon svg {
    width: 25px;
    height: 25px;
    color: white;
  }

  .cube {
    transition: all 0.4s;
    transform-style: preserve-3d;
    width: 200px;
    height: 20px;
  }
  &:hover .cube {
    transform: rotateX(90deg);
  }

  .side {
    position: absolute;
    height: 47px;
    width: 200px;
    display: flex;
    font-size: 0.8em;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: bold;
  }

  .top {
    background: ${({ theme }) => theme["mirage-50"]};
    color: ${({ theme }) => theme["mirage-500"]};
    transform: rotateX(-90deg) translate3d(0, 13.5px, 2em);
  }

  .front {
    background: #4e6da9;
    color: #fff;
    transform: translate3d(0, 0, 1em);
  }
  @media only screen and (max-width: 768px) {
    .cube {
      transform: rotateX(90deg);
    }
    .side {
      width: 100%;
    }
  }
  @media only screen and (min-width: 769px) {
    width: 100%;
    .side {
      width: 15vw;
      font-size: clamp(0.6em, 0.8em, 1em);
    }
    .cube {
      width: 50%;
    }
    .side .front {
      width: 15vw;
    }
  }
`;
