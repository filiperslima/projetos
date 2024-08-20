import styled from "styled-components";

export const CardContainer = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60%;
  margin-top: 12vh;
  align-items: center;
  svg {
    width: 70px;
    height: 70px;
    border-radius: 100%;
    margin: 20px;
    padding: 15px;
    background-color: ${({ theme }) => theme["mirage-50"]};
    color: ${({ theme }) => theme["mirage-500"]};
  }
  h2,
  h3 {
    width: 100%;
    color: ${({ theme }) => theme["mirage-50"]};
    font-size: clamp(0.9rem, 3vw, 2rem);
    text-align: center;
  }
  @media only screen and (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-between;
    svg {
      width: 140px;
      height: 140px;
    }
    h2,
    h3 {
      text-align: center;
    }
  }
`;
