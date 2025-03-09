import styled from "styled-components"
import Arrow from '/image.png'
import { FaFolder, FaFolderOpen, FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import Junk from '/junk.png'
import Vector from '/v.png'
import Browse from '/browsehost.png'
import Stop from '/stopsearch.png'
import Launch from '/launch.png'
import Inquire from '/inquire.png'
import Open from '/open.png'
import folder from '/file.png'
import Refresh from '/refresh.png'
import Premium from '/premium.png'
import Explore from '/library.png'
import Cancel from '/cancel.png'
import Resume from '/resume.png'
import Videos from '/videos.png'
import Programs from '/programs.png'
import Images from '/images.png'
import Docs from '/docs.png'
import Audio from '/audio.png'
const Card=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
cursor: pointer;
border: 2px solid #fae6a8;
  &:hover{
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid #d8a200;
    border-bottom: 2px solid #d8a200;
  }
`;
const Icon = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`
const LastCard=styled.div`
border: 2px solid #fae6a8;
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
margin-inline: 26% 2%;
  &:hover{
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid #d8a200;
    border-bottom: 2px solid #d8a200;
  }
`;
const Folder = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  padding: 2px;
  cursor: pointer;
  background: ${({ $isSelected }) => ($isSelected ? "#fae6a8" : "transparent")};

  &:hover {
    background: #f8efd2;
  }
`;

const SubItems = styled.div`
  padding-left: 20px;
`;
const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  table-layout: auto;
  
  background-color: white;
  height: 30vh;
`;

const Table1 = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  table-layout: auto;
  
  background-color: white;
  height: 20vh;
`;
const Wrap = styled.div`
  padding: 2px 4px;
  background: #fae6a8;
  border-top: 1.5px solid white;
  border-left: 1.5px solid white;
  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid #a8935a;
  border-right: 2px solid #a8935a;
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
  text-align: center;
  background-color: ${({ $isSelected, $index }) => 
    $isSelected 
      ? '#fae6a8' 
      : $index % 2 
        ? '#f4f7f0' 
        : '#f0e9d3'};
`;

const TableContainer = styled.div`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  font-size: 9px;
  border: 1px solid grey;
  overflow-y: auto;  /* Enables vertical scrolling */
  overflow-x: hidden;
  height: ${({ height }) => (typeof height === "number" ? `${height}px` : height || "150px")};
`;
const TableContainer1 = styled.div`
  display: flex;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  font-size: 9px;
  border: 1px solid grey;
  overflow-y: auto;  /* Enables vertical scrolling */
  overflow-x: hidden;
  height: ${({ height }) => (typeof height === "number" ? `${height}px` : height || "240px")};
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #fae6a8;
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
const ArrowsContainer= styled.div`
  background: linear-gradient(to bottom , #f8e5c2, #fae6a8);
  border-top: 1px solid #a8935a;
  border-bottom: 1px solid #a8935a;
`;
const ArrowsContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom , #f8e5c2, #fae6a8);
  border-top: 1px solid #a8935a;
  border-bottom: 1px solid #a8935a;
`;
const Sidebar= styled.div`
  width: 15%;
  padding: 10px;
  background-color: white;
`;
export default function LibraryComponent() {
  const [expandedSavedFiles, setExpandedSavedFiles] = useState(true);
  const [expandedSharedFiles, setExpandedSharedFiles] = useState(true);
  const [selected, setSelected] = useState(null);

  const toggleExpandSavedFiles = () => setExpandedSavedFiles(!expandedSavedFiles);
  const toggleExpandSharedFiles = () => setExpandedSharedFiles(!expandedSharedFiles);
  const handleSelect = (name) => setSelected(name);
  return (
    <Container>
        <InnerContainer>
              <TableContainer1>
              <Sidebar>
              <Folder onClick={toggleExpandSharedFiles} $isSelected={selected === "Shared Files"}>
        <img src={folder} width={18}/>
        <span>Shared Files</span>
      </Folder>
      {expandedSharedFiles && (
        <SubItems>
          {["Saved Files"].map((item) => (
            <Folder key={item} onClick={() => handleSelect(item)} $isSelected={selected === item}>
              <img src={Docs} width={16}/> 
              {item}
            </Folder>
          ))}
        </SubItems>
      )}
      <Folder onClick={toggleExpandSavedFiles} isSelected={selected === "Saved Files"}>
      <img src={folder} width={18} />
        <span>Saved Files</span>
      </Folder>
      {expandedSavedFiles && (
        <SubItems>
          {["Audio", "Programs", "Video", "Documents", "Images", "Incomplete Files"].map(
            (item) => {
              return <Folder key={item} onClick={() => handleSelect(item)} isSelected={selected === item}>
                { item === 'Audio' ?
                <><img src={Audio} width={16}/>  Audio</> :
                 item === 'Images' ?
                 <><img src={Images} width={16}/> Images</> :
                 item === 'Documents' ?
                 <><img src={Docs} width={16}/>  Documents</> :
                 item === 'Video' ?
                 <><img src={Videos} width={16}/> Video</> :
                 item === 'Programs' ?
                 <><img src={Programs} width={16}/> Programs </>  :
                 <><img src={Programs} width={16}/> Incomplete File </> 
                }
              </Folder>
            }
          )}
        </SubItems>
      )}

      
    </Sidebar>
              <ArrowsContainer1>
                <img src={Arrow} alt="Arrow Icon"style={{ transform: 'rotate(90deg)' }}  />
                <img src={Arrow} alt="Arrow Icon" style={{ transform: 'rotate(270deg)', marginTop:'5px' }} />
              </ArrowsContainer1>
              <div style={{border: '1.5px solid #a8935a', flex:'1'}}>
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
                {[].map((item, index) => (
                  <tr key={index} >
                    <Td >{item.quality}</Td>
                    <Td >{item.number}</Td>
                    <Td >{item.name}</Td>
                    <Td >{item.type}</Td>
                    <Td >{item.size}</Td>
                    <Td >{item.speed}</Td>
                    <Td >{item.bitrate}</Td>
                    <Td >?</Td>
                  </tr>
                ))}
              </tbody>
              </Table>
              </div>
              </TableContainer1>
              <div style={{display:'flex', alignItems:'center', gap: '20px', marginTop:'10px', paddingInline:'20px'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Refresh} height={30} />
                  <span>Refresh</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Open} height={30}/>
                  <span>Explore</span>
                </div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft:'35%'}}>
                  <img src={Launch} height={30} />
                  <span>Launch</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Inquire} height={30}/>
                  <span>Enquire</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Stop} height={30}/>
                  <span>Delete</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Premium} height={30}/>
                  <span>Describe</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Explore}height={30} />
                  <span>Publish</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Vector} height={30} />
                  <span>Resume</span>
                </div>
              
            </div>
              
            <ArrowsContainer>
                <img src={Arrow} alt="Arrow Icon" />
                <img src={Arrow} alt="Arrow Icon" style={{ transform: 'rotate(180deg)' }} />
            </ArrowsContainer>

           
            <TableContainer >
              <div style={{border: '1.5px solid #a8935a'}}>
              <Table1>
                <thead>
                  <tr>
                    <ThName><Wrap>Name</Wrap></ThName>
                    <Th><Wrap>Length</Wrap></Th>
                    <Th><Wrap>Bitrate</Wrap></Th>
                  </tr>
                </thead>
                <tbody>
                {[].map((item, index) => (
                  <tr key={index} >
                    <Td >{item.quality}</Td>
                    <Td >{item.number}</Td>
                    <Td >{item.name}</Td>
                    <Td >{item.type}</Td>
                    <Td >{item.size}</Td>
                    <Td >{item.speed}</Td>
                    <Td >{item.bitrate}</Td>
                    <Td >?</Td>
                  </tr>
                ))}
              </tbody>
              </Table1>
              </div>
            </TableContainer>
            <div style={{display:'flex', paddingBlock:'4px', width:'100%', alignItems: 'center', paddingInline:'15px'}}>
              
              <div style={{display:'flex', gap: '15px' , alignItems: 'center',  width:'100%'}}>  
              
                <Card><Icon><img src={Open} width={22}/></Icon>
                  <span>Open...</span></Card>
                
                
                <Card><Icon><img src={Browse} width={24}/></Icon>
                  <span>Save As...</span></Card>
                
                
                <Card><Icon><img src={Junk} width={20}/></Icon>
                  <span>Remove</span></Card>
                <div style={{display: 'flex', alignItems:'center', marginLeft:'68%'}}>
                  Play Options
                  <InputSearches type='checkbox' checked={true} /> Continuous
                  <InputSearches type='checkbox' checked={false} /> Shuffle
                </div>

              </div>
              
            </div>
                    </InnerContainer>
    </Container>
  )
}
