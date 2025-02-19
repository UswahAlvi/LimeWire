import { useState } from "react";
import styled from "styled-components";
import Logo from "./assets/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { FaSearch, FaDesktop, FaFolder, FaSortUp, FaSortDown } from "react-icons/fa";
import { FaMusic, FaImages, FaFileAlt, FaVideo, FaFolderOpen } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import Junk from './assets/junk.png'
import Arrow from './assets/downarrow.png'
import Browse from './assets/browsehost.png'
import Stop from './assets/stopsearch.png'
import Inactive from './assets/inactive.png'
import Pause from './assets/inactive.png'
import Premium from './assets/premium.png'
import Explore from './assets/explore.png'
import Cancel from './assets/cancel.png'
import Resume from './assets.resume.png'
// Styled components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-weight: bold;
  border: 1px solid black;
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px;
  background: #dcdcdc;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid black;
  border-right: none;
  color: black;

  &:hover {
    background: #b5b5b5;
  }

  &.active {
    background: linear-gradient(to bottom, #c8f07e, #86b34d);
    border: 1px solid #567d2d;
  }
`;

const Menu = styled.div`
  margin: 10px 0px 0px 0px;
  padding: 0px 20px 5px 20px;
  border-bottom: 1.5px solid black;
  display: flex;
  gap: 15px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 17px;
  position: relative;
`;

const IconBar = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
`;

const Button1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  cursor: pointer;
  background: #d6d5d1;
  font-size: 14px;
  position: relative;
  border-radius: 6px 6px 0px 0px;
  border-top: 2px solid white;
  border-left: 2px solid white;
  border-bottom: none;
  border-right: 2px solid #a9a9a9;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Button2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  cursor: pointer;
  background: #d6d5d1;
  font-size: 14px;
  border-top: 2px solid white;
  border-radius: 6px 6px 0px 0px;
  border-bottom: none;
  border-right: 2px solid #a9a9a9;
  border-left: none;
`;

const Button3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  cursor: pointer;
  background: #d6d5d1;
  font-size: 14px;
  border-radius: 6px 6px 0px 0px;
  border-top: 2px solid white;
  border-bottom: none;
  border-right: 2px solid #a9a9a9;
  border-left: none;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-size: 11px;
  font-weight: bold;
`;

const Navbar = styled.div`
  background: #d6d5d1;
  color: black;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const Sidebar = styled.div`
  width: 26%;
  background: #d6d5d1;
  padding: 5px;
`;

const MainContent = styled.div`
  flex: 1;
  background: #d6d5d1;
  padding: 5px;
`;

const Footer = styled.div`
  background: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 14px;
`;

const Span = styled.span`
  padding: 1px;
  font-size: 11px;
  color: black;
  background: linear-gradient(to bottom, #7ba44c, #5c872f);
`;

const SearchType = styled.div`
  background: #d6d5d1;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

const SearchTypeTitle = styled.span`
  color: black;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  padding-block: 2px;
`;

const FormContainer = styled.div`
  background: #d6d5d1;
  border: 2px solid black;
  margin-top: 8px;
`;

const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 16px;
  font-weight: bold;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  display: block;
  margin-top: 8px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #999;
  background: white;
  font-size: 12px;
  width: 80%;
`;

const Select = styled.select`
  width: 80%;
  padding: 4px;
  border: 1px solid #999;
  font-size: 12px;
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

const Button = styled.button`
  margin-top: 10px;
  padding: 5px;
  background: linear-gradient(to bottom, #fff, #dcdcdc);
  border: 1px solid #999;
  cursor: pointer;
  font-size: 11px;
  font-weight: bold;
  text-align: center;

  &:hover {
    background: #c5c5c5;
  }
`;

const LimeWireText = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom, #ffffff, #c0c0c0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.6), -1px -1px 1px rgba(150, 150, 150, 0.6);
  padding: 5px 10px;
  border-radius: 3px;
  display: inline-block;
`;

const Upper = styled.div`
  padding: 0px 10px 0px 10px;
`;

const Middle = styled.div`
  background: #dcebce;
  padding-left: 10px;
`;

const Bottom = styled.div`
  background: white;
  padding: 10px;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #a0a0a0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 2px 5px;
  font-size: 14px;
  color: white;
  font-weight: bold;
  font-family: Arial, sans-serif;
  position: relative;
  box-shadow: inset 0px 1px #ffffff;
  width: fit-content;
`;

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: white;
  color: black;
  font-size: 12px;
  font-weight: bold;
  margin-right: 8px;
  border: 1px solid #7c7c7c;
  cursor: pointer;
  box-shadow: inset 0px 1px #ffffff;

  &:hover {
    background: #bbbbbb;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  table-layout: auto;
`;

const Wrap = styled.div`
  padding: 2px 4px;
  background: #81b648;
  border-top: 1.5px solid white;
  border-left: 1.5px solid white;
  font-weight: bold;
  text-align: center;
`;

const Th = styled.th`
  padding: 1px;
  border: 1.5px solid black;
  width: ${(props) => props.width || "auto"};
`;
const ThName = styled.th`
  padding-block: 1px;
  border: 1.5px solid black;
  width: ${(props) => props.width || "auto"};
`;

const Td = styled.td`
  padding: 2px;
  border: 1px solid #ccc;
  background: #f4f7f0;
  text-align: center;
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  font-size: 9px;
`;

const StarRating = styled.span`
  color: gold;
`;

const LimeWireUI = () => {
  const data = [
    { quality: "⭐⭐⭐⭐⭐", number: 37, name: "Soundgarden: Outshined", type: "mp3", size: "4,852 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐⭐", number: 33, name: "Soundgarden: Black Hole Sun", type: "mp3", size: "4,098 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 24, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 24, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 24, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 24, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 24, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 24, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 24, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 24, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 24, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 24, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 24, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
  
  ];
  const downloads = [
    {
      name: "Soundgarden - Outshined.mp3",
      size: "4,852 KB",
      status: "Downloading from 8 hosts",
      progress: 78,
      speed: "213 KB/s",
      time: "0:04"
    },
    {
      name: "Soundgarden - The Day I Tried To Live.mp3",
      size: "7,487 KB",
      status: "Downloading from 2 hosts",
      progress: 19,
      speed: "36 KB/s",
      time: "2:50"
    },
    {
      name: "Soundgarden - Black Hole Sun.mp3",
      size: "4,968 KB",
      status: "Complete",
      progress: 100,
      speed: "0 KB/s",
      time: "0:00"
    }
  ];

  return (
    <Div>
      <Container>
        <Navbar>
          <Menu>
            <span>File</span>
            <span>View</span>
            <span>Navigation</span>
            <span>Resources</span>
            <span>Tools</span>
            <span>Filters</span>
            <span>Help</span>
          </Menu>
          <IconBar>
            <IconContainer>
              <Button1>
                <FaSearch /> Search
              </Button1>
              <Button2>
                <FaDesktop /> Monitor
              </Button2>
              <Button3>
                <FaFolder /> Library
              </Button3>
            </IconContainer>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={Logo} width={40} alt="logo" />
              <LimeWireText>LimeWire PRO</LimeWireText>
            </div>
          </IconBar>
        </Navbar>

        <div style={{ display: "flex", flex: 1 }}>
          <Sidebar>
            <SearchType>
              <SearchTypeTitle>Select Search Type:</SearchTypeTitle>
              <GridContainer>
                <GridItem>
                  <IoMdCheckboxOutline color="green" />
                  All Types
                </GridItem>
                <GridItem className="active">
                  <FaMusic color="black" />
                  Audio
                </GridItem>
                <GridItem>
                  <FaImages color="green" />
                  Images
                </GridItem>
                <GridItem>
                  <FaVideo color="brown" />
                  Video
                </GridItem>
                <GridItem>
                  <FaFileAlt color="gray" />
                  Documents
                </GridItem>
                <GridItem>
                  <FaFolderOpen color="blue" />
                  Programs
                </GridItem>
              </GridContainer>
            </SearchType>
            <FormContainer>
              <Upper>
                <Title>Audio</Title>
                <Label>Title</Label>
                <Input type="text" defaultValue="spoonman" />
                <Label>Artist</Label>
                <Input type="text" defaultValue="soundgarden" />
                <Label>Album</Label>
                <Input type="text" />
              </Upper>
              <Middle>
                <Label>Genre</Label>
                <Select>
                  <option></option>
                </Select>
                <Label>License Type</Label>
                <Select>
                  <option></option>
                </Select>
              </Middle>
              <Bottom>
                <CheckboxContainer>
                  <Checkbox type="checkbox" />
                  <span>More Search Options</span>
                </CheckboxContainer>
                <Button>Search</Button>
              </Bottom>
            </FormContainer>
            <div style={{display:'flex', flexDirection:'column'}}>
              <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{padding:'3px 8px', borderLeft:'1px solid white', borderRight: '1px solid black', borderBottom: '1px solid black', borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px'}}>
                    keyword
                </div >
                <div style={{padding:'3px 8px',borderLeft:'1px solid white', borderRight: '1px solid black', borderBottom: '1px solid black', borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px'}}>
                  What's next
                </div>
              </div>
              
              <div style={{padding:'3px 8px', width: 'fit-content',borderLeft:'1px solid white', borderRight: '1px solid black', borderBottom: '1px solid black', borderBottomLeftRadius:'5px', borderBottomRightRadius:'5px'}}>
                  Direct Connect
                </div>
            </div>
          </Sidebar>

          <MainContent>
            <TabContainer>
              <CloseButton>
                <IoCloseSharp size={12} />
              </CloseButton>
              <Span>soundgarden(23)</Span>
            </TabContainer>
            <TableContainer>
              <Table>
                <thead>
                  <tr>
                    <Th><Wrap>Quality</Wrap></Th>
                    <Th><Wrap>#</Wrap></Th>
                    <ThName><Wrap>Name</Wrap></ThName>
                    <Th><Wrap>Type</Wrap></Th>
                    <Th><Wrap>Size</Wrap></Th>
                    <Th><Wrap>Speed</Wrap></Th>
                    <Th><Wrap>Bitrate</Wrap></Th>
                    <Th><Wrap>?</Wrap></Th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <Td><StarRating>{item.quality}</StarRating></Td>
                      <Td>{item.number}</Td>
                      <Td>{item.name}</Td>
                      <Td>{item.type}</Td>
                      <Td>{item.size}</Td>
                      <Td>{item.speed}</Td>
                      <Td>{item.bitrate}</Td>
                      <Td>?</Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
            <div style={{display:'flex', paddingBlock:'8px'}}>
              <div style={{display:'flex', gap: '15px' , alignItems: 'center'}}>  
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '130px'}}>
                  <img src={Arrow} />
                  <span>Download</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Browse}/>
                  <span>Browse Host</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Stop} />
                  <span>Stop</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '100px'}}>
                  <img src={Junk} />
                  <span>Junk</span>
                </div>
              </div>
              
            </div>
            <hr style={{margin:'0px'}} />
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaSortUp size={20} />
              <FaSortDown size={20}  />
            </div>
            <hr style={{margin:'0px'}} />
            <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
              <div>Downloads</div>
              <TableContainer>
              <Table>
                <thead>
                  <tr>
                    <Th><Wrap>Name</Wrap></Th>
                    <Th><Wrap>Size</Wrap></Th>
                    <Th><Wrap>Status</Wrap></Th>
                    <Th><Wrap>Progress</Wrap></Th>
                    <Th><Wrap>Speed</Wrap></Th>
                    <Th><Wrap>Time</Wrap></Th>
                  </tr>
                </thead>
                <tbody>
                  {downloads.map((item, index) => (
                    <tr key={index}>
                      <Td>{item.name}</Td>
                      <Td>{item.size}</Td>
                      <Td>{item.status}</Td>
                      <Td>{item.progress}</Td>
                      <Td>{item.speed}</Td>
                      <Td>{item.time}</Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
            </div>
            <div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Cancel} />
                  <span>Cancel</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Resume} />
                  <span>Resume</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Pause} />
                  <span>Pause</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Premium} />
                  <span>Premium</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Explore} />
                  <span>Explore</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Inactive} />
                  <span>Clear Inactive</span>
                </div>
              
            </div>

          </MainContent>
        </div>

        <Footer>
          
        </Footer>
      </Container>
    </Div>
  );
};

export default LimeWireUI;