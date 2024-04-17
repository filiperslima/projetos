import styled from "styled-components";

export const BadgeContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => theme["mirage-600"]};
  background-color: white;
  border-radius: 30px;
  padding: 0.8rem 1rem;
  p {
    width: fit-content;
    font-size: small;
    font-weight: 600;
    margin-left: 0.5rem;
  }
`;
