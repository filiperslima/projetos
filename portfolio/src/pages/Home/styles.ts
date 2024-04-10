import styled from "styled-components";


export const WelcomeElementsContainer = styled.section`
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    position: relative;
    right: -13vw;
    bottom: 3.4rem;
    z-index: 1;
    align-self: flex-end;
  }

  @media only screen and (min-width: 724px) {
    span {
      right: -8vw;
    }
  }
  
`;

export const ProfileImage = styled.img`
  /* width: clamp(80px, 50vw, 900px); */
  height: 90vh;
  min-width: 60vw;
  object-fit: cover;
  /* margin-right: 6vw; */
  position: relative;
  left: -8vw;
  //Ou só min-width mesmo e vida que segue
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 65vw;
    object-fit: cover;
    z-index: 0;
    left: -4vw;
  }
  @media only screen and (min-width: 1025px) {
    object-fit: fill;
    object-fit: contain;
    object-fit: scale-down;
    object-position: 15vw;
    margin-right: -2vw;
    max-height: 100%;
    /* align-items: flex-end; */
  }
`;