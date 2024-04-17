import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-end; tela acima de 480*/
  justify-content: flex-start;
  height: 70vh;
  justify-content: center;

  @media only screen and (min-width: 769px) {
    align-items: flex-start;
    margin-right: 1rem;
    margin-top: 8vh;
    height: 90vh;
    align-self: baseline;
    justify-content: center;
  }
`;
export const ProfileCardContent = styled.div`
  /* position: absolute; */
  
`;
export const ProfileCardImage = styled.img`
  width: 80%;
  transform: scaleX(-1);
  border-radius: 32px;
  position: absolute;
  height: 60%;
  object-fit: cover;
  mask-image: linear-gradient(#000, rgba(0, 0, 0, 0.6));
  -webkit-mask-image: linear-gradient(#000, rgba(0, 0, 0, 0.4));

  @media only screen and (min-width: 769px) {
    width: 30vw;
    height: 77vh;
  }
`;

export const ProfileCardInformations = styled.div`
  @keyframes floating {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(5px);
    }
  }
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: flex-end;
  left: -12px;
  
  > :nth-child(1) {
    animation: floating 2s ease-in-out 0s infinite alternate;
  }
  > :nth-child(2) {
    margin-left: 16px;
    text-align: center;
    animation: floating 2s ease-in-out 0.4s infinite alternate;

   
  }

  @media only screen and (min-width: 769px) {
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-self: flex-end;
    bottom: 25%;
    left: -10vw;
    > :nth-child(1) {
      animation: floating 2s ease-in-out 0s infinite alternate;
    }
    > :nth-child(2) {
      margin-left: 16px;
      text-align: center;
      animation: floating 2s ease-in-out 0.4s infinite alternate;

      
    }
  }
`;
