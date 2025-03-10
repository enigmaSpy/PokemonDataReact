import styled from "styled-components";

// Stylizowany kontener główny
export const Container = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: 90vw;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
`;

// Stylizowany nagłówek
export const Title = styled.h1`
  color: #333;
  text-align: center;
  text-transform: capitalize;
`;

// Stylizowany kontener dla obrazków
export const SpriteContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

// Stylizowany obrazek
export const SpriteImage = styled.img`
  width: 100px;
  height: 100px;
  border: 2px solid #ccc;
  border-radius: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

// Stylizowana sekcja
export const Section = styled.section`
  margin: 20px 0;
`;

// Stylizowany nagłówek sekcji
export const SectionTitle = styled.h2`
  color: #555;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
`;

// Stylizowana lista
export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

// Stylizowany element listy
export const ListItem = styled.li`
  background-color: #fff;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Stylizowany audio
export const AudioPlayer = styled.audio`
  width: 100%;
  margin-top: 10px;
`;