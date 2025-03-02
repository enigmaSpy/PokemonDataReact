import styled from "styled-components";

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  padding: 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const LoadingMessage = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-top: 32px;
`;