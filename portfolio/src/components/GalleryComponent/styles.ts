import styled, { css } from "styled-components";

export const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  color: ${({ theme }) => theme["mirage-50"]};
  && > h1 {
    font-size: clamp(2vw, 2.2rem, 10vw);
    font-weight: 500;
    color: ${({ theme }) => theme["mirage-500"]};
  }
  @media only screen and (min-width: 768px) {
    && > h1 {
      width: 100%;
      padding: 0 3.4%;
    }
  }
  @media only screen and (min-width: 1024px){
    /* padding-left:  4.5%; */
  }
`;

export const ActualItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 4vw;
  @media only screen and (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
    height: 45vh;
  }
`;
export const ActualImage = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
  @media only screen and (min-width: 769px) {
    width: 42%;
    object-position: 12%;
  }
`;
export const DescriptionContainer = styled.div`
  /* height: 45vh; ACHO QUE ESSE VAI PARA O 726 */
  padding: 1.5rem 0.5rem 0 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  align-self: flex-end;
  justify-content: space-between;

  h3 {
    color: ${({ theme }) => theme["mirage-400"]};
  }
  @media only screen and (min-width: 769px) {
    max-width: 70%;
    align-self: flex-start;
    padding: 0;
    gap: 2px;
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
  justify-content: center;
  flex-wrap: wrap;
  /* gap: 12px; */
  p{
    align-self: center;
    width: 40%;
    text-align: center;
  }
  gap: 6px;
  align-items: center;
  margin-bottom: 1.3rem;
  svg {
    /* font-size: 2em; */
    font-size: 1.3em;
    margin: 0.3rem;
  }
  @media only screen and (min-width: 541px){
    width: fit-content;
    justify-content: flex-start;
    flex-wrap: nowrap;
  }
  @media only screen and (min-width: 769px){

  flex-wrap: nowrap;
  }
`;

export const LinksContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: center;
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


