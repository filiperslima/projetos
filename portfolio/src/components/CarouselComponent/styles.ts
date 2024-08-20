import styled, { css } from "styled-components";

export const CarouselContainer = styled.div`
  display: none;
  padding: 10px 20px;

  background-color: rgba(87, 118, 178, 0.1);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 4px;

  @media only screen and (min-width: 769px) {
    width: 80%;
    height: 25vh;
    margin-left: 3.5%;
    display: flex;
    justify-content: space-evenly;
    gap: 60px;
    overflow: auto;
    cursor: grab;
    margin-right: 3vw;
    scrollbar-width: none;
    /* overflow-x: scroll; */
    align-self: center;
  }
`;

//Como isso será utilizado em 2 locais, dá pra criar criar um hook
interface CurrentStatus {
  isCurrent: boolean;
}

export const CarouselItem = styled.img<CurrentStatus>`
  width: 200px;
  height: 80%;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 30px 20px -20px;
  border-radius: 3px;
  &:hover {
    transform: scale(1.2);
  }
  ${(props) =>
    props.isCurrent &&
    css`
      transform: scale(1.2);
      border: 2px solid ${({ theme }) => theme["mirage-500"]};
    `};
`;

export const ComingSoonItem = styled.span<CurrentStatus>`
  width: 200px;
  height: 80%;
  margin-top: 1rem;
  /* background-color: ${({ theme }) => theme["mirage-800"]}; */
  background-color: #1e1f24;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 30px 20px -20px;
  border-radius: 3px;
  cursor: pointer;

  p {
    width: 200px;
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${(props) =>
    props.isCurrent &&
    css`
      transform: scale(1.2);
      border: 2px solid ${({ theme }) => theme["mirage-500"]};
    `};
`;
