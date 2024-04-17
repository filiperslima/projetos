import styled from 'styled-components';


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
