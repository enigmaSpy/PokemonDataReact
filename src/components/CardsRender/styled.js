import styled from "styled-components";

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  width: 70%;
  margin: 0 auto;

  & > * {
    flex: 1 1 200px; /* Adjust the width as needed */
    max-width: 200px; /* Adjust the max-width as needed */
  }

  @media (max-width: 600px) {
    min-width: 100vw;
    padding: 0;

    & > * {
      flex: 1 1 100%; /* Adjust the width for smaller screens */
      max-width: 100%; /* Adjust the max-width for smaller screens */
    }
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