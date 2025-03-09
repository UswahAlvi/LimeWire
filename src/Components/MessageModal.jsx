
import styled from "styled-components";

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
`;

const ModalContainer = styled.div`
  background: linear-gradient(to bottom, #c0c9e4, #f8f8f8);
  border-radius: 8px;
  width: 350px;
  max-width: 90%;
  
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  background: #832121;
  color: white;
  border: none;
  padding: 3px 18px;
  cursor: pointer;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 0px;
  border-top-left-radius: 0px;
  float: right;
`;
const Title= styled.div`
    padding-top: 5px
`;
const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  span {
    font-size: 11px;
  }
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;
const InputSearches = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #a8935a;
  border-radius: 3px;
  background: #fae6a8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: #fae6a8;
    border: 2px solid #a8935a;
  }

  &:checked::before {
    content: "✔";
    color: #a8935a;
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
    flex-direction: column;
    align-items: center;
`;
const Wrapper = styled.div`
    display:flex;
`
const Icon = styled.div`
    width: 20%;
    margin-top: 5px;
`;
const Container = styled.div`
margin: 10px;
font-weight: 500;
`;
const Span = styled.span`
    
`;
const Button= styled.button`
    width: fit-content;
    padding: 3px 25px;
    border: 2px solid #e2cb86;
    border-radius: 2px;
    margin-top: 10px;
    background: linear-gradient(to top left, #ebe1c6, #f9da84);
    &:hover{
      background-color: #d5c9a6;
    }
`;
const Circle = styled.div`
    font-size: 24px;
    color: blue;
    padding: 2px 16px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);

`;
const MessageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
            <Title> Message </Title>
            <CloseButton onClick={onClose}>X</CloseButton>
        </Header>
        <Body>
            <Wrapper>
            <Icon> <Circle> i </Circle></Icon>
            <Container>
                <Span>
                    Your client is a leaf node shielded by an Ultrapeer. Hence, you will see few or no searches in the monitor window.
                </Span>
                <CheckboxContainer>
                    <InputSearches type="checkbox" 
                        checked={false}
                    />
                    <span style={{cursor:'pointer'}} role='button'> Do not display this message again</span>
                </CheckboxContainer>
            </Container>
            </Wrapper>
            <Button onClick={onClose}>OK</Button>
        </Body>
        
      </ModalContainer>
    </ModalOverlay>
  );
};

export default MessageModal;
