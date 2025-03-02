import styled from 'styled-components';
export const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 200px;
  margin: 16px;
`;

export const PokemonImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const InfoContainer = styled.div`
  margin-top: 12px;
`;

export const PokemonIdC = styled.span`
  display: block;
  font-size: 14px;
  color: #666;
`;

export const PokemonNameC = styled.span`
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;