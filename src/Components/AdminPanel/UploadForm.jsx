import styled from "styled-components";
import { useState } from 'react';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: auto;
`;

const ModalContainer = styled.div`
  background: linear-gradient(to bottom, #c0c9e4,rgb(91 103 139));
  border-radius: 8px;
  color: black;
  position: relative;
  width: 800px;
  max-width: 90%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

const CloseButton = styled.button`
  background: #832121;
  color: white;
  border: none;
  padding: 0px 28px 5px 28px;
  cursor: pointer;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  float: right;
  transition: background 0.2s, transform 0.1s;

  &:hover {
    background: #a52a2a;
  }

  &:active {
    background: #6b1616; 
    transform: scale(0.95); 
  }
`;

const Title= styled.div`
    padding-top: 5px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-inline: 10px;
`;
const Body= styled.div`
    background-color: #fae6a8;
    margin: 10px;
    padding:10px;
    display: flex;
    box-sizing: border-box;
    gap: 10px;
    font-size: 13px;
`;

const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
    padding-block: 12px;
`;
const InputWrap = styled.div`
  display: flex;
  width: 70%;
  justify-self: center;
  flex-direction: column;
  margin-block: 10px;
  gap: 5px;
`;
const Input = styled.input`
  flex: 1;
  padding: 6px;
`;
const Top = styled. div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: 13px;
  align-items: center;
`;

const TopContentContainer = styled.div`
    border: 2px solid #ebd393;
`;

const TopTitle = styled.div`
  color: #a8935a;
  font-weight: 500;
  width: fit-content;
  padding-inline: 5px;
  margin-inline: 4px;
  margin-top: -11px;
  background-color: #fae6a8;
`;
const BottomButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;
const BottomButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color:${(props) => props.disabled ? '#a8935a': 'black'};
  padding: 2px 20px;
  background:${(props) => props.disabled ? '#fae6a8':'linear-gradient(to top left, #d5c9a6, #f9da84)'};
  border: 1px solid #a8935a;
  cursor: pointer;
`;
export default function UploadForm({ isOpen, onClose }) {
    const [songName, setSongName] = useState('');
    const [artistName, setArtistName] = useState('');
    const [image, setImage] = useState(null);
    const [date, setDate] = useState('');
    const [link, setLink] = useState('');
    const [isOkDisabled, setIsOkDisabled] = useState(true)
  
    if (!isOpen) return null;
  
    return (
      <ModalOverlay onClick={onClose}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <Header>
            <Title>Upload</Title>
            <CloseButton onClick={onClose}>X</CloseButton>
          </Header>
          <Body>
            <MainContent>
              <TopContentContainer>
                <TopTitle>Song</TopTitle>
                <Top>
                  <InputWrap>
                    <span>Song Name:</span>
                    <Input type='text' value={songName} onChange={(e) => setSongName(e.target.value)} />
                  </InputWrap>
                  <InputWrap>
                    <span>Artist Name:</span>
                    <Input type='text' value={artistName} onChange={(e) => setArtistName(e.target.value)} />
                  </InputWrap>
                  <InputWrap>
                    <span>Image:</span>
                    <Input type='file' accept='image/*' onChange={(e) => setImage(e.target.files[0])} />
                  </InputWrap>
                  <InputWrap>
                    <span>Date:</span>
                    <Input type='date' value={date} onChange={(e) => setDate(e.target.value)} />
                  </InputWrap>
                  <InputWrap>
                    <span>Link:</span>
                    <Input type='text' value={link} onChange={(e) => setLink(e.target.value)} />
                  </InputWrap>
                </Top>
              </TopContentContainer>
              <BottomButtonsContainer>
                <BottomButton onClick={() => console.log({ songName, artistName, image, date, link })}>
                  OK
                </BottomButton>
                <BottomButton onClick={onClose}>
                  Cancel
                </BottomButton>
              </BottomButtonsContainer>
            </MainContent>
          </Body>
        </ModalContainer>
      </ModalOverlay>
    );
  }
  