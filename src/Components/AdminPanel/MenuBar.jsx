import { useState } from "react";
import styled from "styled-components"
import DropDown from '/dropdownArrow.svg'
import Dummy from '/dummyUser.svg'
import Badge from '/premiumbadge.svg'
import SearchIcon from '/SearchIcon.svg'
import Upload from '/uploadMedia.svg'
const Title = styled.div`
    font-size: 38px;
    color: black;
    font-weight: 700;
`;
const Container = styled.div`
  display : flex;
  flex-direction: column;
  width: 100%;
`;
const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: fit-content;
    padding: 10px 20px;
    border-bottom: 1px solid rgba(126, 81, 8, 1);
`;
const SubMenuContainer = styled.div`
    display: flex;
    align-items: center;
    padding:10px 30px;
    height: fit-content;
    border-bottom: 1px solid white;
    gap :10px;
    justify-content: center;
`;
const SubMenu = styled.div`
    display: flex;
    align-items: center;
    border-radius: 23px;
    border: 1px solid black;
    padding: 7px 15px;
    width: 215px;

`;
const SubMenuUpload = styled.div`
display: flex;
align-items: center;
border-radius: 23px;
border: 1px solid black;
padding: 7px 15px;
margin-left: 10%;
`;
const TopLeftContainer = styled.div`
    display: flex;
    position: relative;
    border-radius: 27px;
    border: 2px solid black;
    padding-inline: 50px 10px;
    gap:10px;
`;
const TopLeftUserDetailsContainer= styled.div`
    display: flex;
    flex-direction: column;
    div{
        font-weight: 500;
        color: black;
    }
`;
const HR = styled.hr`
  width: 100%; 
  height: 2px; 
  background-color: black;
  border: none; 
  margin:0px;
`;
const Img = styled.img`
`;
const UserProfile = styled.img`
    border-radius: 50%;
    border: 1px solid black;
    position: absolute;
    right: 80%;
    top: -16%;
`;
const BadgeImg = styled.img`
    border: 2px solid rgba(254, 194, 75, 1);
    border-radius: 50%;
`;
const Div = styled.div`
    gap: 4px;
    align-items : center ;
`;
export default function MenuBar(){
    const [name, setName] = useState('James Rodriguez')
    const [userType, setUserType] = useState('Premium User')
    return <Container>
        <MenuContainer>
        <Title>LimeWire</Title>
        <TopLeftContainer>
            <TopLeftUserDetailsContainer>
                <div>{name}</div>
                <HR />
                <Div style={{display:'flex'}}>
                    {userType}
                    {userType=== 'Premium User' &&
                        <BadgeImg src={Badge} width={20}/>
                    }
                </Div>
                <UserProfile src={Dummy} width={60}/>
            </TopLeftUserDetailsContainer>
            <Img src={DropDown} width={10}/>
        </TopLeftContainer>
    </MenuContainer>
    <SubMenuContainer>
        <SubMenu>
            <img src={SearchIcon} width={30}/>
            Search music...
        </SubMenu>
        <SubMenu>
            <img src={SearchIcon} width={30}/>
            Search Artist...
        </SubMenu>
        <SubMenu>
            <img src={SearchIcon} width={30}/>
            Search Albums...
        </SubMenu>
        <SubMenuUpload>
            <img src={Upload} width={20} />
            Upload
        </SubMenuUpload>
    </SubMenuContainer>
    </Container>
}