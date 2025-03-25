import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
const Container = styled.div`
  background-color: #f8e7b5;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubContainer = styled.div`
  background: linear-gradient(to bottom, #c0c9e4, #f8f8f8);
  border-radius: 8px;
  color: black;
  position: relative;
  width: 800px;
  height:43%;
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
    height: 82%;
    padding:10px;
    display: flex;
    box-sizing: border-box;
    gap: 10px;
    font-size: 13px;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 90%;
  background-color: white;
  border: 1.5px solid #a8935a;
  font-size: 13px;
  padding-left: 4px;
  overflow-y: auto;
  scrollbar-color: #f7c948 #fceabb; /* Scrollbar thumb and track colors */

  .not-extendable {
    padding-left: 20px;
  }

  /* Custom Scrollbar for WebKit Browsers */
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #f9d976, #f7c948);
    border-radius: 8px;
    border: 2px solid #e8b647;
    background-image: repeating-linear-gradient(
      45deg,
      rgba(255, 230, 150, 0.8) 0px,
      rgba(255, 200, 100, 0.8) 5px,
      transparent 10px
    );
  }

  &::-webkit-scrollbar-track {
    background: linear-gradient(to bottom, #fceabb, #f8b500);
    border-radius: 10px;
    border: 1px solid #d8a200;
  }

  &::-webkit-scrollbar-button {
    display: none; /* Hides the scrollbar buttons */
  }
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
const TopContent = styled.div`
`;
const Top = styled. div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: 13px;
`;
const BottomButtonsContainer = styled.div`
display: flex;
justify-content: flex-end;
position: absolute;
bottom: 3%;
right: 3%;
gap: 5px;
position: absolute;
margin-block: ${(props) => `${props.mb}px`};
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
export default function LoginComponent() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  return (
    <Container>
        <SubContainer onClick={(e) => e.stopPropagation()}>
            <Header>
                <Title> Welcome </Title>
                <CloseButton>X</CloseButton>
            </Header>
            <Body>
                <MainContent>
                    <TopContentContainer>
                        <TopTitle>Login</TopTitle>
                        <TopContent>
                            <InputWrap>
                                <span>
                                    Username:
                                </span>
                                <Input type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                            </InputWrap>
                            <InputWrap>
                                <span>
                                    Password :
                                </span>
                                <Input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            </InputWrap>
                        </TopContent>
                    </TopContentContainer>
                    <BottomButtonsContainer mb={10}>
                                <BottomButton disabled={username==="" || password===""}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={() => navigate('/')}>
                                    Cancel
                                </BottomButton>
                </BottomButtonsContainer>
                </MainContent>
            </Body>
        </SubContainer>
    </Container>
  )
}
