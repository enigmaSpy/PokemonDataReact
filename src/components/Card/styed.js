import styled from 'styled-components';

const getTypeColor = (type) => {
  switch (type) {
    case "normal": return { background: "#B0B080", color: "#FFFFFF" };
    case "fire": return { background: "#FF4422", color: "#FFFFFF" };
    case "water": return { background: "#3399FF", color: "#FFFFFF" };
    case "electric": return { background: "#FFCC33", color: "#333333" };
    case "grass": return { background: "#44DD66", color: "#FFFFFF" };
    case "ice": return { background: "#66CCEE", color: "#333333" };
    case "fighting": return { background: "#D32F2F", color: "#FFFFFF" };
    case "poison": return { background: "#AA00AA", color: "#FFFFFF" };
    case "ground": return { background: "#E6B800", color: "#333333" };
    case "flying": return { background: "#99AAFF", color: "#FFFFFF" };
    case "psychic": return { background: "#FF5588", color: "#FFFFFF" };
    case "bug": return { background: "#88CC33", color: "#FFFFFF" };
    case "rock": return { background: "#CCAA33", color: "#FFFFFF" };
    case "ghost": return { background: "#8866BB", color: "#FFFFFF" };
    case "dragon": return { background: "#6600FF", color: "#FFFFFF" };
    case "dark": return { background: "#554433", color: "#FFFFFF" };
    case "steel": return { background: "#AABBCC", color: "#333333" };
    case "fairy": return { background: "#FF99BB", color: "#333333" };
    default: return { background: "#E6E6E6", color: "#333333" };
  }
};
export const CardContainer = styled.div`
font-size: 1.6em;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  background: linear-gradient(145deg,rgb(209, 196, 196),rgba(236, 234, 234, 0.9));
  border: 2px solidrgb(15, 86, 218); /* Złote obramowanie */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  min-width: 230px;
  max-width: 240px;
  transition: transform 0.2s ease;
  &:hover {
    translate: 0 -1px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const PokemonImage = styled.img`
    width: 100%;
  border-radius: 10px;
  padding: 8px;
  background: radial-gradient(circle, rgba(190, 182, 182, 0.9), rgba(236, 234, 234, 0.9));
 
`;

export const InfoContainer = styled.div`
  margin-top: 8px;
`;
export const PokemonIdC = styled.span`
display: block;
  font-size: 14px;
  font-family: 'Arial', sans-serif;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px 2px rgba(52, 48, 48, 1);
`;

export const PokemonNameC = styled.span`
  display: block;
  color: #4B0082;
  text-transform: capitalize;
  margin: 8px 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`
export const PokemonTypesWprapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  gap: 8px;
`;
export const PokemonType =styled.p`
  border: 1px solid rgb(190, 137, 137);
  border-radius: 5px;
  padding: 2px 8px;
  background-color: ${({styledType})=>getTypeColor(styledType).background};
  color:${({styledType})=>getTypeColor(styledType).color};
  font-size: 0.8em;
  text-transform: capitalize;
 
`; 