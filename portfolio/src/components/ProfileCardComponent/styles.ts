import styled from "styled-components";

export const ProfileCardContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-end; tela acima de 480*/
  justify-content: center;
  height: 70vh;

  @media only screen and (min-width: 769px) {
    justify-content: flex-end;
    align-items: flex-start;
    margin-top: 2rem;
    margin-right: 1rem;
    height: 90vh;
  }
`;
export const ProfileCardContent = styled.div`
  /* position: absolute; */
`;
export const ProfileCardImage = styled.img`
  width: 80%;
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
  position: relative;
  bottom: 12%;
  color: ${({ theme }) => theme["mirage-50"]};
  padding: 1.7rem 2rem;
  width: 80vw;
  align-self: flex-end;
  z-index: 2;
  .hour {
    font-size: 2rem;
    width: 100%;
  }

  .secondaryText {
    /* width: 13vw; */
    width: 70%;
  }

  @media only screen and (min-width: 769px) {
    width: 28vw;
    bottom: 14vh;
    
    .hour{
      font-size: 2.5rem;
    }
    .secondaryText {
      width: 13vw;
      font-size: 1.5rem;
      line-height: 2.1rem;
    }
  }

`;
