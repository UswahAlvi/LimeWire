import MenuBar from "./MenuBar"
import styled from "styled-components";
const Container = styled.div`
  background-color: #f8e7b5;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Index = () => {
    return <Container>
        <MenuBar/>
    </Container>
};

export default Index;
