import {styled} from "styled-components"

export const Wrapper = styled.section`
    align-content: center;
    width:99svw;
    background-color: rebeccapurple;
    padding: 4em;
`;
export const Form = styled.form`
    width:100%;
    display: flex;
    justify-content: center;
 
`;
export const Search = styled.input`
    width:70%;
    padding: 1em;
    border-radius: 45px;
    @media (max-width: 600px) {
        width:95%;        
        
    }
`;
export const FilterSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
// Styl dla label
export const DropdownLabel = styled.label`
margin: 1em;
  display: block;
  font-size: 1.2em;
  font-weight: bold;
  width: 200px;
  display: flex;
  flex-direction: column;
  color: #333;
  margin-bottom: 0.5rem;
    color: white;
`;

// Styl dla select
export const DropdownSelect = styled.select`
 
  padding: .6em;
  font-size: .9em;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #888;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

// Styl dla opcji
export const DropdownOption = styled.option`
  font-size: 1em;
  color: #333;
  
`;