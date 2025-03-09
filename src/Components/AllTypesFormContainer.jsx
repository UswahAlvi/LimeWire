
import { useState } from 'react';
import styled from 'styled-components'
const FormContainer = styled.div`
  background: #f8e7b5;
  border: 1.5px solid #a8935a;
  margin-top: 8px;
  padding: 10px;
  height: 51vh;
  overflow-y: auto; /* Enables scrolling */
  overflow-x: hidden; /* Prevents horizontal scrolling */

  /* Scrollbar Styles */
  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #f9d976, #f7c948);
    border: 2px solid #e8b647;
    background-image: repeating-linear-gradient(
      90deg,
      rgba(255, 230, 150, 0.8) 0px,
      rgba(255, 200, 100, 0.8) 5px,
      transparent 10px
    );
  }

  &::-webkit-scrollbar-track {
    background: #fceabb;
    border: 1px solid #d8a200;
  }

  &::-webkit-scrollbar-button {
    background: #ffecb3;
    border: 1px solid #d8a200;
  }
`;
const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: bold;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  display: block;
  margin-top: 4px;
`;
const Input = styled.input`
  padding: 4px;
  border: 1px solid #a5865a;
  background: white;
  font-size: 12px;
  width: 80%;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  background: linear-gradient(to top left, #ebe1c6, #f9da84);
  border-radius: 2px;
  border: 1px solid #999;
  cursor: pointer;
  font-size: 11px;
  font-weight: bold;
  text-align: center;

  &:hover {
    background: #c5c5c5;
  }
`;


export default function AllTypesFormContainer({onSearch}) {
  const [name, setName] = useState("");

  return (
    <FormContainer>
      <Title>All Types</Title>

      <Label>File name</Label>
      <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <Button>Search</Button>
    </FormContainer>
  );
}

