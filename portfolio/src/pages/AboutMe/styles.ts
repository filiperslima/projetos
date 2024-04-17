import styled, { css } from "styled-components";

export const AboutMeContainer = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: ${({ theme }) => theme["mirage-950"]};
  color: ${({ theme }) => theme["mirage-50"]};
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (min-width: 769px) {
    align-items: center;
    padding-top: 4rem;
  }
  @media only screen and (min-width: 1024px) {
    /* justify-content: center; */
    align-content: flex-start;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  gap: 1rem;
  /* height: 100vh; */
`;

interface DescriptionType {
  variant: "profile" | "skills";
}

export const DescriptionContent = styled.div<DescriptionType>`
  @media only screen and (min-width: 769px) {
    width: 50vw;
    .skillsContainer {
      /* display: flex;
      flex-wrap: wrap; */
      width: 40vw;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 18px;
      padding: 16px 8px;
      span {
        margin-top: 12px;
        width: 100%;
      }
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    .skillsContainer {
      width: 91%;
      display: flex;
      overflow-x: scroll;
      gap: 32px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    .skillsContainer {
      width: 91vw;
      display: flex;
      overflow-x: scroll;
      gap: 32px;
    }
  }
`;
export const Title = styled.h2`
  margin: 2.3rem 0;
  color: #4e6da9;
  font-size: clamp(2vw, 2.2rem, 10vw);
  font-weight: 500;
  @media only screen and (min-width: 769px) {
    font-size: clamp(2vw, 2rem, 10vw);
    margin: 2rem 0;
  }
`;
export const Description = styled.p`
  /* width: 80%; */
  width: 100%;
  font-size: 1em;
  font-weight: 200;
  line-height: 2.1rem;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (min-width: 769px) {
    width: 90%;
    font-size: 0.8em;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 1.3em;
  }
`;

export const Skill = styled.span`
  height: 12vh;
  width: 25%;

  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 2em;
  }
  font-size: 1.2em;
  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    font-size: 0.8em;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 1.3em;
  }
`;
