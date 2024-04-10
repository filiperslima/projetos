import styled, { css } from "styled-components";

export const TagMessageContainer = styled.div`
  max-width: 60vw;
  display: flex;
  flex-direction: column;
  gap: 8vh;

  @media only screen and (min-width: 728px) {
    gap: 8vh;
    max-width: 25vw;
  }
`;
interface TagMessageProps {
  variant?: "professionalTagline";
}

export const TagMessageContent = styled.div<TagMessageProps>`
  min-width: 30vw;
  display: flex;
  /* justify-content: flex-start; */
  justify-content:center;
  flex-direction: column;
  align-content: center;
  height: 90px;
  padding: 1.5rem;
  background: ${({ theme }) => theme["mirage-50"]};
  color: ${({ theme }) => theme["mirage-500"]};

  h1 {
    font-weight: 400;
    /* font-size: clamp(0.5rem, 3vw, 3.6rem); */
    font-size: clamp(0.5rem, 3vw, 3.6rem);
  }
  h2 {
    font-weight: 200;
    /* font-size: clamp(1.6vw, 2rem, 2.6vw); */
    font-size: clamp(0.9vw, 1.4rem, 3vw);
  }

  ${(props) =>
    props.variant === "professionalTagline" &&
    css`
      background: ${props.theme["mirage-500"]};
      color: ${({ theme }) => theme["mirage-50"]};
      /* padding-top: 1.4vh; */
      flex-direction: column;
      flex-wrap: nowrap;
      position: relative;
      /* padding: 1.5rem; */

      h2 {
        /* font-size: clamp(0.6vw, 1.2rem, 1.6vw); */
        font-size: clamp(1vw, 1.6rem, 2.5vw);
      }
      a>svg {
        /* font-size: clamp(3vw, 2.25em, 3.5vw); */
        font-size: calc(2rem - 8px);
        color: ${({ theme }) => theme["mirage-50"]};
        border: 0.03rem solid ${({ theme }) => theme["mirage-50"]};
        border-radius: 0.08rem;
      }
      div {
        position: absolute;
        /* left: 17vw;
        bottom: 1.5rem; */
        right: 1vw;
        bottom: 1vh;
        display: flex;
        gap: 0.5vw;
      }
      @media only screen and (min-width: 429px) {
        /* padding: 1rem; */
        h2 {
          font-size: clamp(1.8vw, 0.8rem, 2vw);
        }
        
    `};

  @media only screen and (min-width: 429px) and (max-width: 728px) {
    padding: 1.2rem 1.6rem;
  }

  @media only screen and (min-width: 728px) and (max-width: 1024px) {
    width: 30vw;
    min-width: inherit;
    height: 19vh;
    /* padding: 2rem 1.4rem 3rem 1.4rem; */

    h1 {
      font-size: clamp(0.5rem, 3vw, 3.6rem);
    }
    h2 {
      font-size: clamp(1.6vw, 2rem, 2.6vw);
    }
    ${(props) =>
      props.variant === "professionalTagline" &&
      css`
      padding: 1rem 1.4rem;
      }
    h1{
      font-size: clamp(0.5rem, 2.5vw, 3.6rem);
      margin-top: inherit;
    }
    div {
      width: 10vw;
      gap: 1vw;
      justify-content: flex-end;
      a>svg {
        font-size: 1.8rem;
        text-align: end;
      }
    }
    `};
  }

  @media only screen and (min-width: 1025px) {
    height: 21vh;
    width: 28vw;
    min-width: inherit;
    justify-content:center;
    h1 {
      font-weight: 400;
      font-size: clamp(2rem, 2.4vw, 3rem);
    }
    h2 {
      font-weight: 200;
      font-size: clamp(1rem, 2.2vw, 3rem);
    }
    div>a>svg{
      font-size: calc(3rem - 8px);
    }
  
  }
  /* 
  @media only screen and (min-width: 429px) and (max-width: 728px) {
    width: 100%;
  }
  @media only screen and (max-width: 428px) {
    width: 100%;
    h1 {
      width: 100%;
      font-size: clamp(1vw, 1rem, 4vw);
    }
    h2 {
      font-size: clamp(0.9vw, 1.4rem, 3vw);
    }
    svg {
      font-size: clamp(1vw, 1.6rem, 8vw);
    }
  } */
`;
