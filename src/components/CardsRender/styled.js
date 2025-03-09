import styled from "styled-components";

export const CardsContainer = styled.section`

  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  width:70%;
  margin: 0 auto;
  @media (max-width: 600px) {
    min-width: 100%;
  }
`;

export const LoadingMessage = styled.h2`
  text-align: center;
  font-size: 24px;
  color: rebeccapurple;
  margin-top: 32px;
`;
export const FilteredResults = styled.div`
   text-align: right; 
   padding: 0 25px;
`;