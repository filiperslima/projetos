import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
  
  /* :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["mirage-500"]};;
  } */
  /* div[status=show]::after{
    content: "";
    opacity: 0;
  } */
  @keyframes opacity-increase {
    0% {
      opacity: 0;
    }
    100%{
      opacity: 0.6;
    }
  }
  div[status=show]::after{
    content: "";
    width: 1000vw;
    height: 100vh;
    background-color: #141928;
    position: absolute;
    top: 0;
    z-index: -1;
    opacity: 0.6;
    animation: opacity-increase ease-in 1s;
  }
  section{
    @media only screen and (min-width: 769px){
      height: 100vh;
    }
    display: flex;
    flex-wrap: wrap;   
    padding: 8vh 10vw;
    background-color: ${({ theme }) => theme["mirage-950"]};;
    @media only screen and (min-width: 320px) and (max-width: 768px){
        padding: 24px;
    }
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
      padding: 24px 58px;
    }
    
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme["mirage-950"]};;
    border-radius: 10px;

  }
  *::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 5px;
    border: 2px solid #ffffff;
  }
  
  body, input, text, button {
    font: 400 1rem "Plus Jakarta Sans", sans-serif;
    overflow-x: hidden;
    letter-spacing: 2px;
    scrollbar-width: thin;
    scrollbar-color: #ffffff #141928;
     p{
    line-height: 26px;
  }
  scroll-behavior: smooth;

  }

 
`;
