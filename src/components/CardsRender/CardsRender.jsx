import { useEffect, useState } from "react";
import { CardsContainer, LoadingMessage } from "../CardsRender/styled";
import Card from "../Card/Card";

const CardsRender = () => {
 
 return (
    <CardsContainer>
      {
        Array.from({length: 1025},(_,index)=>(
          <Card key={index} pokemonId={index + 1}/>
        ))
      }
    </CardsContainer>
  );
};

export default CardsRender;