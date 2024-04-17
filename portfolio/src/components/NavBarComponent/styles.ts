import styled, { css } from "styled-components";
import { Link } from "react-scroll";

export const NavBarContainer = styled.div`
  width: 100vw;
  background-color: ${({ theme }) => theme["mirage-50"]};
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0 24px;
  button {
    border: 0;
    svg {
      font-size: 32px;
      background-color: ${({ theme }) => theme["mirage-50"]};
    }
  }

  @media only screen and (min-width: 768px) {
    justify-content: space-around;

    button {
      display: none;
    }
  }

  /* @media (min-width: 1025px) and (max-width: 1280px) {
  }

  @media (min-width: 1281px) {
  } */
`;
export const LogoContent = styled(Link)`
  
  max-width: 30%;
  font-size: 3.3rem;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 600px) and (max-width: 900px) {
    font-size: 3.3rem;
  }
  @media only screen and (max-width: 600px) {
    font-size: 2.3rem;
  }
`;

interface LinksContainerProps {
  status?: "show" | "hiding" | "hidden";
}
export const LinksContainer = styled.div<LinksContainerProps>`
  width: 60%;
  display: flex;
  text-align: right;
  padding: 24px;
  @media only screen and (max-width: 767px) {
    height: 100vh;
    gap: 3vh;
    flex-direction: column;
    align-items: end;
    position: absolute;
    right: 0;
    top: 0;

    transition: right 1s ease-in-out, inset 1s;

    background-color: ${({ theme }) => theme["mirage-50"]};
    ${(props) =>
      props.status === "hiding" &&
      css`
        @keyframes hidding {
          0% {
            height: 100vh;
            gap: 3vh;
            flex-direction: column;
            align-items: flex-end;
            position: absolute;
            right: 0;
            top: 0;
            opacity: 1;
            left: 50%;
          }
          50% {
            display: flex;
            opacity: 0.5;
            position: absolute;
            right: 0;
          }
          100% {
            opacity: 0;
            inset: 0;
            position: absolute;
            right: -300px;
            left: 100vw;
            height: 100vh;
          }
        }
        /* display: block; */
        opacity: 0;
        inset: 0;
        position: absolute;
        right: -300px;
        height: 0vh;
        transition: inset 1s, height 1s;
        animation: hidding ease-in 0.2s;
      `};
    ${(props) =>
      props.status === "hidden" &&
      css`
        opacity: 0;
        inset: 0;
        position: absolute;
        right: -300px;
        height: 0vh;
      `};
    a {
      margin-right: 20px;
      text-align: end;
      min-width: 90%;
    }
    button {
      width: 36px;
      height: 36px;
      background-color: ${({ theme }) => theme["mirage-50"]};
    }
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: inherit;
    opacity: 1;
    height: fit-content;
    width: 50% !important;
    a {
      /* width: 15vw; */
      position: relative;
    }

    a::before {
      content: "";
      width: 0;
      height: 2px;
      border-radius: 2px;
      background-color: ${({ theme }) => theme["mirage-500"]};
      position: absolute;
      top: 25px;
      bottom: -0.1rem;
      right: 0;
      transition: right 0.4s, width 0.4s, left 0.4s;
    }
    a:hover::before {
      width: 100%;
      left: 0;
    }
  }
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: black;
  /* max-width: 90px; */
  white-space: nowrap;
  height: 20px;
  user-select: none;
  &:hover{
    cursor: pointer;
  }
`;
