import { useState } from "react";
import styled from "styled-components"
import Arrow from '/image.png'
import Junk from '/junk.png'
import Browse from '/browsehost.png'
import Stop from '/stopsearch.png'
import MessageModal from "./MessageModal";
const Container = styled.div`
  display: flex;
  flex: 1;
`;
const Card=styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 6px;
cursor: pointer;
width: 80px;
border: 2px solid #fae6a8;
  &:hover{
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid #d8a200;
    border-bottom: 2px solid #d8a200;
  }
`;
const LastCard=styled.div`
border: 2px solid #fae6a8;
display: flex;
flex-direction: column;
align-items: center;
width: 80px;
cursor: pointer;
margin-inline: 26% 2%;
  &:hover{
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid #d8a200;
    border-bottom: 2px solid #d8a200;
  }
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  table-layout: auto;
  
  background-color: white;
  height: 22vh;
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
  height: ${({ height }) => (typeof height === "number" ? `${height}px` : height || "170px")};
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #fae6a8;
`;
const SearchesTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 5px;
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
const TopRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const Input = styled.input`
  width: 22px;
  height: 16px;
  font-size: 11px;
  color:#fae6a8;
  border: 1px solid #a8935a;
  text-align: center;
`;
const SearchesBottomContainer = styled.div`
  border: 1px solid #a8935a;
  background-color: white;
  height: 220px;
  margin-bottom: 4px;
`;
const ArrowsContainer = styled.div`
  background: linear-gradient(to bottom , #f8e5c2, #fae6a8);
  border-top: 1px solid #a8935a;
  border-bottom: 1px solid #a8935a;
`;
export default function MonitorComponent() {
  const [showIncomingSearch, setShowIncomingSearch] = useState(false);
  const [numOfSearches, setNumOfSearches] = useState(32)
  const [isOpen, setIsOpen] = useState(false);
  return (<>
    {isOpen &&
      <MessageModal isOpen={isOpen} onClose={()=>setIsOpen(false)} />
    }
    <Container>
        <InnerContainer>
            <div style={{paddingTop: '8px', paddingInline: '8px'}}>
            <SearchesTopContainer>
                <CheckboxContainer>
                    <Checkbox type="checkbox" 
                        checked={showIncomingSearch} 
                        onChange={()=>setShowIncomingSearch(!showIncomingSearch)} 
                    />
                    <span style={{cursor:'pointer'}} role='button' onClick={()=>setIsOpen(true)}>Show Incoming Searches</span>
                </CheckboxContainer>
                <TopRightContainer>
                    <span>Show Last</span>
                    <Input type='text'  onChange={(e)=>setNumOfSearches(e.target.value)} value={numOfSearches} />
                    
                    <span>Searches</span>
                </TopRightContainer>
            </SearchesTopContainer>
            
            <SearchesBottomContainer>

            </SearchesBottomContainer>
            </div>
            <ArrowsContainer>
                <img src={Arrow} alt="Arrow Icon" />
                <img src={Arrow} alt="Arrow Icon" style={{ transform: 'rotate(180deg)' }} />
            </ArrowsContainer>

            <div style={{paddingLeft:'14px'}}>Uploads (0 active, 0 queued)</div>
            <TableContainer >
              <div style={{border: '1.5px solid #a8935a'}}>
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
            </TableContainer>
            <div style={{display:'flex', paddingBlock:'4px', width:'100%', fontWeight:'500'}}>
              
              <div style={{display:'flex', gap: '15px' , alignItems: 'center', justifyContent:'center',  width:'100%'}}>  
              
              <Card><img src={Stop} width={24}/>
              <span>Kill Upload</span></Card>
                
                
                <Card><img src={Browse} width={24}/>
                  <span>Browse Host</span></Card>
                
                
               
                
                
                <Card><img src={Junk} width={18}/>
                  <span>Clear Inactive</span></Card>
                
              </div>
              
            </div>
                    </InnerContainer>
    </Container> 
    </>
  )
}
