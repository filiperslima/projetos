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
    padding: 24px 80px;
    background-color: ${({ theme }) => theme["mirage-950"]};;
    @media only screen and (max-width: 600px){
        padding: 24px;
    }
    @media only screen and (min-width: 600px) and (max-width: 900px){
      padding: 24px 58px;
    }
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background: #141928;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 2px;
    border: 2px solid #ffffff;
  }
  
  body, input, text, button {
    font: 400 1rem "Plus Jakarta Sans", sans-serif;
    overflow-x: hidden;
    letter-spacing: 2px;
    /* scrollbar-color: ${({ theme }) => theme["mirage-50"]}; */
    scrollbar-width: thin;
    scrollbar-color: #ffffff #141928;
     p{
    line-height: 26px;
  }
  scroll-behavior: smooth;

  }

 
`;
