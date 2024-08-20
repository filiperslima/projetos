import styled, { css } from "styled-components";

interface TerminalVariant {
  smaller?: boolean;
}

export const TerminalContainer = styled.div<TerminalVariant>`
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 95%;
    min-height: 50vh;
  }
  border-radius: 4px;
  width: 40%;
  height: 45vh;
  background-color: ${({ theme }) => theme["mirage-900"]};
  border: 0.1em solid ${({ theme }) => theme["mirage-400"]};
  align-self: center;
  position: relative;
  margin-right: -2%;
  * {
    user-select: none;
  }
  -webkit-box-shadow: 10px 10px 10px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: 10px 10px 10px -7px rgba(0, 0, 0, 1);
  box-shadow: 10px 10px 10px -7px rgba(0, 0, 0, 1);

`;
export const TerminalHeader = styled.div`
  width: 100%;
  height: 25px;
  background-color: ${({ theme }) => theme["mirage-50"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
`;
export const TerminalTitle = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 4px;

  color: ${({ theme }) => theme["mirage-950"]};
  font-size: 0.7em;
  svg {
    color: ${({ theme }) => theme["mirage-500"]};
    font-size: 1.7em;
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    width: 50%;
  }
`;
export const TerminalControls = styled.div`
  justify-self: start;
  svg {
    color: ${({ theme }) => theme["mirage-600"]};
    font-size: 0.5em;
    padding: 6px;
    width: 24px;
    height: 26px;
    margin-top: 3px;
  }
  svg:hover {
    color: ${({ theme }) => theme["mirage-50"]};
    background-color: ${({ theme }) => theme["mirage-600"]};
  }
  svg:active {
    background: rgb(69, 75, 136);
    background: linear-gradient(
      360deg,
      rgba(69, 75, 136, 1) 0%,
      rgba(79, 89, 166, 1) 100%
    );
    border-top: 1px solid #3c568d;
  }
  :nth-child(3) {
    margin-right: -6px;
    border-radius: 0 5px 2px 0;
  }
`;
export const TerminalMessage = styled.p`
  @keyframes blinkCursor {
    50% {
      border-right-color: transparent;
    }
  }

  @keyframes typeAndDelete {
    0%,
    10% {
      width: 2%;
      padding-left: 2px;
    }
    45%,
    55% {
      width: 100%;
      padding-left: 2px;
    } /* adjust width based on content */
    90%,
    100% {
      width: 2%;
      padding-left: 2px;
    }
  }
  overflow-y: scroll;
  height: 90%;
  padding: 12px 24px;
  filter: blur(1.3px);
  .text {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    border-right: 0.2em solid green; /* Cursor */
    animation: typeAndDelete 12s steps(22) infinite,
      blinkCursor 0.5s step-end infinite alternate;
  }

  p::before {
    content: "import ";
    color: #ff79c6;
  }
  span[data-variant="pink"] {
    color: #ff79c6;
  }
  span[data-variant="yellow"] {
    color: #e6d478;
  }
  span[data-variant="green"] {
    color: #50d94b;
  }
`;
export const TerminalMainMessage = styled.div`
  width: 100%;
  height: calc(100% - 25px);
  text-align: center;
  position: absolute;
  bottom: 0%;
  h2,
  h3 {
    /* border: 8px solid ${({ theme }) => theme["mirage-50"]};
    background-color: ${({ theme }) => theme["mirage-50"]}; */
    color: ${({ theme }) => theme["mirage-50"]};
    position: relative;
    top: 30%;
    -webkit-backdrop-filter: blur(6.7px);
  }
  h2 {
    font-size: clamp(1vw, 2rem, 5vw);
    font-weight: 400;
    /* background-color: ${({ theme }) => theme["mirage-50"]}; */
  }
  h3 {
    font-size: clamp(1vw, 1.5rem, 5vw);
    font-weight: 200;
  }
  @media only screen and (min-width: 481px) {
    h2,
    h3 {
      top: 40%;
    }
  }
`;
