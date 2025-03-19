import styled from "styled-components";

// Stylizowany kontener główny
export const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 100svw;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Stylizowany nagłówek
export const Title = styled.h1`
  color: rgba(0, 0, 0, 0.88);
  text-transform: capitalize;
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

// Stylizowany obrazek
export const SpriteImage = styled.img`
  height: 300px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

// Stylizowana sekcja
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  gap: 15%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

// Stylizowana sekcja nagłówka
export const HeadSection = styled(Section)`
  gap: 5%;
  align-items: center;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

// Stylizowany nagłówek sekcji
export const SectionTitle = styled.h2`
  color: #555;
  font-size: 1.2em;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

// Stylizowana lista
export const List = styled.ul`
  list-style: none;
  color: #555;
  padding: 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const ListItemType = styled.li`
  display: block;
  border: 1px solid #555;
  padding: 5px;
  margin: 5px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3px;
    margin: 3px;
  }
`;

// Stylizowany element listy
export const ListItem = styled.li`
  text-decoration: none;
`;
