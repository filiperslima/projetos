import styled from "styled-components";

export const ContactContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: flex-start;
`;

// export const Outter = styled.div`
//   width: 70%;
//   height: 70%;
//   h1 {
//     position: absolute;
//     transform: translate(-50%, -50%);
//     left: 50%;
//     top: 50%;
//     transition: all 0.5s ease-in-out;
//     color: ${({ theme }) => theme["mirage-50"]};
//     padding: 8px;
//     z-index: 1;
//   }

//   :hover {
//     transform: rotate(0deg);
//     opacity: 1;
//     p {
//       transform: rotate(0deg);
//     }
//   }
//   &:hover h1 {
//     background-color: ${({ theme }) => theme["mirage-950"]};
//     color: ${({ theme }) => theme["mirage-50"]};
//     top: 17%;
//     left: 27vw;
//     padding: 0.5rem;
//   }
// `;
// export const Inner = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 2px solid ${({ theme }) => theme["mirage-300"]};
//   width: 100%;
//   height: 100%;
//   transform: rotate(10deg);
//   opacity: 0;
//   transition: all 0.2s ease-in-out;
//   p {
//     background-color: ${({ theme }) => theme["mirage-950"]};
//     position: relative;
//     align-self: flex-end;
//     bottom: -10px;
//     color: ${({ theme }) => theme["mirage-50"]};
//     transform: rotate(12deg);
//     transition: all 0.2s ease-in-out;
//   }
//   svg{
//     width: 150px;
//     height: 150px;

//     border-radius: 100%;
//     margin: 20px;
//     padding: 15px;
//     background-color: ${({ theme }) => theme["mirage-50"]};;
//   }
// `;
