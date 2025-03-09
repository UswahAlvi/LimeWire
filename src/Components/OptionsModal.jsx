
import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
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
  color: black;
  position: relative;
  width: 800px;
  height:82%;
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
    height: 90%;
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


const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
    padding-block: 12px;
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
const Top1 = styled. div` 
  width: 60%;
  display: flex;
  padding: 10px;
  font-size: 13px;
  gap: 10px;
  align-items: center;
`;
const InputWrap = styled.div`
  display: flex;
`;
const Input = styled.input`
  margin-left: 10px;
  flex: 1;
`;
const FilterInput = styled.input`
  flex: 1;
`;
const TopButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin-block: ${(props) => `${props.mb}px`};
`;
const MiddleButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 20px;
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
const TopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color:${(props) => props.disabled ? '#a8935a': 'black'};
  padding: 2px 20px;
  background:${(props) => props.disabled ? '#fae6a8':'linear-gradient(to top left, #d5c9a6, #f9da84)'};
  border: 1px solid #a8935a;
  cursor: pointer;
`;

const BottomButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 20px;
  background: linear-gradient(to top left, #d5c9a6, #f9da84);
  border: 1px solid #a8935a;
  cursor: pointer;
`;
const SubTitle = styled.div`
cursor: pointer;
  .extendable{
    margin-left: 10px;
  }
  .highlight{
    background-color: #fdfd7e;
  }
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
const Wrap = styled.div`
display: flex;
align-items: center;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  table-layout: auto;
  background-color: white;
  height: 20vh;
`;
const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const RadioContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProgressTrack = styled.div`
  width: 100%;
  height: 6px;
  background: #e3c693;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
`;

const Thumb = styled.div`
  position: absolute;
  right: 0;
  top: -6px;
  transform: translateX(50%);
  width: 24px;
  height: 16px;
  background: #d5b479;
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Percentage = styled.span`
  position: absolute;
  right: 10px;
  bottom: -18px;
  color: black;
  font-size: 12px;
  font-weight: bold;
`;

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #a8935a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: white;
    border: 2px solid #a8935a;
    box-shadow: inset 0 0 0 2px #a8935a;
  }
`;
const Th = styled.th`
  padding: 1px;
  width: ${(props) => props.width || "auto"};
`;
const TableContainer = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  overflow-y: auto; 
  overflow-x: hidden;
  font-size: 12px;
  font-weight: normal;
  background-color: white;
  border: 1.5px solid #a8935a;
  height: 25vh;
`;
const Td = styled.td`
  padding-inline: 6px;
  background-color: ${({ $highlight }) => 
      $highlight 
        ? '#f4f7f0' 
        : '#f0e9d3'};
`;
const WrapHeading = styled.div`
  padding: 2px 4px;
  background: #fae6a8;
  border-top: 1.5px solid white;
  border-left: 1.5px solid white;
  text-align: center;
  border-bottom: 2px solid #a8935a;
  border-right: 2px solid #a8935a;
`;
const TextAreaContainer = styled.div`
  display: flex;
  padding-block: 10px;
  gap: 10px;
`;
const TextArea = styled.textarea`
  flex : 1;
  height: 10vh;
`;
const TextArea1 = styled.textarea`
  flex : 1;
  height: 14vh;
  overflow-y: scroll;
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
const VerticalButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background-color: #e6cda3;
  border-radius: 4px;
`;

const ProgressFill = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 6px;
  background-color: #a67c52;
  border-radius: 4px;
  transition: width 0.3s ease-in-out;
  transform: translateY(-50%);
  width: ${(props) => props.progress}%;
`;

const Marker = styled.div`
  position: absolute;
  left: ${(props) => `calc(${props.progress}% - 10px)`};
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-color: #e6cda3;
  border: 2px solid #a67c52;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MarkerText = styled.span`
  color: #5c3b1e;
  font-size: 12px;
  font-weight: bold;
`;
const OptionsModal = ({ isOpen, onClose }) => {
  const [selected, setSelected] = useState('Saving');
  
  const mediaSaveData = [
  { mediaType: "Audio", saveFolder: "C:\\Users\\informer50\\Shared" },
  { mediaType: "Documents", saveFolder: "C:\\Users\\informer50\\Shared" },
  { mediaType: "Images", saveFolder: "C:\\Users\\informer50\\Shared" },
  { mediaType: "Programs", saveFolder: "C:\\Users\\informer50\\Shared" },
  { mediaType: "Video", saveFolder: "C:\\Users\\informer50\\Shared" }
];

const [sidebarItems, setSidebarItems] = useState([
  { name: "Saving", isExtendable: false },
  { name: "Sharing", isExtendable: false },
  { name: "Speed", isExtendable: false },
  { name: "Downloads", isExtendable: true, isExtended: false ,sub: ["Old", "Keywords", "New"]}, 
  { name: "Uploads", isExtendable: false },
  { name: "Connections", isExtendable: false },
  { name: "System Tray", isExtendable: false },
  { name: "Updates", isExtendable: false },
  { name: "Chat", isExtendable: false },
  { name: "Player", isExtendable: false },
  { name: "Status Bar", isExtendable: false },
  { name: "iTunes", isExtendable: true, isExtended: false , sub: ["Preferencing", "Proxy"]},  
  { name: "Bug Reports", isExtendable: false },
  { name: "View", isExtendable: true, isExtended: false, sub: ["Popups", "Autocompletion"] },
  { name: "Searching", isExtendable: true, isExtended: false, sub: ["Basic", "Quality", "Speed"] },
  { name: "Filters", isExtendable: true, isExtended: false, sub: ["Junk", "Keywords", "Hosts"] },
  { name: "Advanced", isExtendable: true, isExtended: false, sub: ["Preferencing", "Firewall Config", "Proxy"] }
]);

if (!isOpen) return null;
const handleArrowClick = (itemName) => {
  setSidebarItems((prevItems) =>
    prevItems.map((item) =>
      item.name === itemName && item.isExtendable
        ? { ...item, isExtended: !item.isExtended }
        : item
    )
  );
};


  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <Header>
            <Title> Options </Title>
            <CloseButton onClick={onClose}>X</CloseButton>
        </Header>
        <Body>
            <Sidebar>
            {sidebarItems.map((item) => (
              <Wrap className={`${item.isExtendable ? "" : "not-extendable"}`} key={item.name}>
                <SubTitle>
                  {item.isExtendable && (
                    <span onClick={() => handleArrowClick(item.name)} style={{ cursor: "pointer" }}>
                      {item.isExtended ? <FaAngleDown size={12} /> : <FaAngleRight size={12} />}
                    </span>
                  )}
                  <span
                    onClick={() => setSelected(item.name)}
                    className={`${item.isExtendable ? "extendable" : ""} ${selected === item.name ? "highlight" : ""}`}
                  >
                    {item.name}
                  </span>

                  {item.isExtendable && item.isExtended && item.sub?.map((subItem, index) => (
                    <div key={index} onClick={() => setSelected(subItem)} style={{ marginLeft: "30px" }} className={`${selected === subItem ? "highlight" : ""}`}>{subItem}</div>
                  ))}
                </SubTitle>
              </Wrap>
            ))}

            </Sidebar>
            {selected === 'Saving' ?
            <MainContent>
                <TopContentContainer>
                    <TopTitle> Save Folder </TopTitle>
                    <TopContent>
                        <Top>
                            <span>You can choose the folder for saving files.</span>
                            <InputWrap>
                                <span>
                                    Folder:
                                </span>
                                <Input type='folder'/>
                            </InputWrap>
                            <TopButtonsContainer >
                                <TopButton disabled={false}>
                                    Browse...
                                </TopButton>
                                <TopButton disabled={false}>
                                    Use default
                                </TopButton>
                            </TopButtonsContainer>
                            <span>You can specify a location for each media type.</span>
                            <TableContainer>
                            <Table>
                                <thead>
                                <tr>
                                    
                                    <Th><WrapHeading>Media Type</WrapHeading></Th>
                                    <Th><WrapHeading>Save Folder</WrapHeading></Th>
                                </tr>
                                </thead>
                                <tbody>
                                {mediaSaveData.map((item, index) => (
                                <tr key={index}>
                                    <Td $highlight={index % 2 === 0}>{item.mediaType}</Td>
                                    <Td $highlight={index % 2 === 0}>{item.saveFolder}</Td>
                                </tr>
                                ))}
                            </tbody>
                            </Table>
                            </TableContainer>
                            <TopButtonsContainer mb={0}>
                                <TopButton disabled={true}>
                                    Browse...
                                </TopButton>
                                <TopButton disabled={true}>
                                    Reset
                                </TopButton>
                            </TopButtonsContainer>
                        </Top>

                    </TopContent>
                </TopContentContainer>
                <TopContentContainer>
                    <TopTitle> Incomplete Files </TopTitle>
                    <TopContent>
                        <Top>
                            
                            <span>You can automaticaly delete all incomplete download files.</span>
                                <div style={{display: 'flex', justifyContent:'flex-end', gap: '3px'}}>
                                <span>Days to keep Incomplete Files.</span>
                                <InputSearches type='text' value={7} />
                                </div>
                            
                        </Top>
                    </TopContent>
                </TopContentContainer>
                <BottomButtonsContainer mb={10}>
                                <BottomButton style={{marginRight: '100px'}} onClick={onClose}>
                                    Restore Defaults
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    Cancel
                                </BottomButton>
                                <BottomButton onClick={onClose}> 
                                    Apply
                                </BottomButton>
                </BottomButtonsContainer>
            </MainContent> :
            selected === 'Sharing' ?
            <MainContent>
                <TopContentContainer>
                    <TopTitle> Shared Folder </TopTitle>
                    <TopContent>
                        <Top>
                            <span>You can choose the folder for sharing files. Files in theses folders are displayed in library.</span>
                            <InputWrap>
                                <span>
                                    Folder:
                                </span>
                                <Input type='folder'/>
                            </InputWrap>
                            <TopButtonsContainer >
                                <TopButton disabled={false}>
                                    Browse...
                                </TopButton>
                                <TopButton disabled={false}>
                                    Use default
                                </TopButton>
                            </TopButtonsContainer>
                            <TextAreaContainer>
                              <TextArea value="C:\Users\Informer50\Shared"/>
                              <VerticalButtonsContainer>
                                <TopButton disabled={false}>
                                  Add...
                                </TopButton>
                                <TopButton disabled={true}>
                                  Remove
                                </TopButton>
                              </VerticalButtonsContainer>

                            </TextAreaContainer>

                            
                        </Top>

                    </TopContent>
                </TopContentContainer>
                <TopContentContainer>
                    <TopTitle> Shared Extensions </TopTitle>
                    <TopContent>
                        <Top>
                            <span>You can choose which file extensions would you like to share.</span>
                            <InputWrap>
                                <span>
                                    Extensions:
                                </span>
                                <Input type='folder' value='gm;shn;flac;fla;dvi;rmvp;kar;sdg;cue;c;h;m;java;pl;py;pyc;pyo;pyz'/>
                            </InputWrap>
                            <TopButtonsContainer mb={5}>
                                <TopButton disabled={false}>
                                    Use defaults
                                </TopButton>
                            </TopButtonsContainer>

                            
                        </Top>

                    </TopContent>
                </TopContentContainer>
                <TopContentContainer>
                    <TopTitle> Download Sharing </TopTitle>
                    <TopContent>
                        <Top>
                            
                            <span>You can share files that you download on unshared folders.</span>
                                <div style={{display: 'flex', justifyContent:'flex-end', gap: '3px'}}>
                                <span>Share Finished Downloads.</span>
                                <InputSearches type='checkbox' checked={true} />
                                </div>
                            
                        </Top>
                    </TopContent>
                </TopContentContainer>

                <BottomButtonsContainer mb={10}>
                                <BottomButton style={{marginRight: '100px'}} onClick={onClose}>
                                    Restore Defaults
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    Cancel
                                </BottomButton>
                                <BottomButton onClick={onClose}> 
                                    Apply
                                </BottomButton>
                </BottomButtonsContainer>
            </MainContent> : selected === 'Downloads' ?
            <MainContent>
              <TopContentContainer>
                    <TopTitle> Maximum Downloads </TopTitle>
                    <TopContent>
                        <Top>
                            
                            <span>You can set the maximum number of simultaneous downloads.</span>
                                <div style={{display: 'flex', justifyContent:'flex-end', gap: '3px'}}>
                                <span>Maximum Downloads:</span>
                                <InputSearches type='text' value={8} />
                                </div>
                            
                        </Top>
                    </TopContent>
                </TopContentContainer>
                <TopContentContainer>
                    <TopTitle> Clear Downloads </TopTitle>
                    <TopContent>
                        <Top>
                            
                            <span>You can choose whether or not to automatically clear downloads that have completed.</span>
                                <div style={{display: 'flex', justifyContent:'flex-end', gap: '3px'}}>
                                <span>Clear Completed Downloads.</span>
                                <InputSearches type='checkbox' checked={true} />
                                </div>
                            
                        </Top>
                    </TopContent>
                </TopContentContainer>
                <TopContentContainer>
                    <TopTitle> Download Bandwidth </TopTitle>
                    <TopContent>
                        <Top>
                            
                            <span>You can set the percentage of your bandwidth devoted to downloads.</span>
                                <ProgressBarContainer>
                                  <ProgressTrack>
                                    <ProgressFill progress={100} />
                                    <Thumb  />
                                  </ProgressTrack>
                                  <Percentage>100%</Percentage>
                                </ProgressBarContainer>
                                
                                <div style={{display: 'flex', justifyContent:'flex-end', gap: '3px', marginTop:'30px'}}>
                                <span>Download Speed:</span>
                                <span>Unlimited</span>
                                </div>
                            
                        </Top>
                    </TopContent>
                </TopContentContainer>
                <BottomButtonsContainer mb={10}>
                                <BottomButton style={{marginRight: '100px'}} onClick={onClose}>
                                    Restore Defaults
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    Cancel
                                </BottomButton>
                                <BottomButton onClick={onClose}> 
                                    Apply
                                </BottomButton>
                </BottomButtonsContainer>
            </MainContent> : 
            selected === 'Connections' ?
            <MainContent>
              <TopContentContainer>
                    <TopTitle> Connection Startup </TopTitle>
                    <TopContent>
                        <Top>
                            
                            <span>You can choose whether or not to automatically connect to the network when the application starts up.</span>
                                <div style={{display: 'flex', justifyContent:'flex-end', gap: '3px'}}>
                                <span>Connect on Startup.</span>
                                <InputSearches type='checkbox' checked={true} />
                                </div>
                            
                        </Top>
                    </TopContent>
                </TopContentContainer>
                <BottomButtonsContainer mb={10}>
                                <BottomButton style={{marginRight: '100px'}} onClick={onClose}>
                                    Restore Defaults
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    Cancel
                                </BottomButton>
                                <BottomButton onClick={onClose}> 
                                    Apply
                                </BottomButton>
                </BottomButtonsContainer>

            </MainContent>

            : selected === 'System Tray'?
            <MainContent>
              <TopContentContainer>
                    <TopTitle> Shutdown Behaviour </TopTitle>
                    <TopContent>
                        <Top>
                            
                            <span>You can choose the default shutdown behaviour.</span>
                            <RadioContainer>
                              <StyledFieldset>
                                <Label>
                                  <RadioInput type="radio" name="shutdownOption" value="Shut down immediately" />
                                  Shut down immediately
                                </Label>
                                <Label>
                                  <RadioInput type="radio" name="shutdownOption" value="Shut down after transfers" />
                                  Shut down after transfers
                                </Label>
                                <Label>
                                  <RadioInput type="radio" name="shutdownOption" value="Minimize to System Tray" />
                                  Minimize to System Tray
                                </Label>
                              </StyledFieldset>
                            </RadioContainer>
                            
                        </Top>
                    </TopContent>
                </TopContentContainer>
                <TopContentContainer>
                    <TopTitle> System Tray Icon </TopTitle>
                    <TopContent>
                        <Top>
                            
                            <span>You can display the system tray icon while the system tray icon visiible.</span>
                                <div style={{display: 'flex', justifyContent:'flex-end', gap: '3px'}}>
                                <span>Show System Tray Icon.</span>
                                <InputSearches type='checkbox' checked={true} />
                                </div>
                            
                        </Top>
                    </TopContent>
                </TopContentContainer>
                <BottomButtonsContainer mb={10}>
                                <BottomButton style={{marginRight: '100px'}} onClick={onClose}>
                                    Restore Defaults
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    Cancel
                                </BottomButton>
                                <BottomButton onClick={onClose}> 
                                    Apply
                                </BottomButton>
                </BottomButtonsContainer>

            </MainContent>
             : selected === 'Updates' ? 
             <MainContent>
              <TopContentContainer>
                    <TopTitle> Update Options </TopTitle>
                    <TopContent>
                        <Top>
                            
                            <span>You can choose when you want to be notified of new LimeWire music releases.</span>
                            <RadioContainer1>
                              <StyledFieldset>
                                <Label>
                                  <RadioInput type="radio" name="shutdownOption" value="Shut down immediately" />
                                  Major Releases
                                </Label>
                                <Label>
                                  <RadioInput type="radio" name="shutdownOption" value="Shut down after transfers" />
                                  Service Releases
                                </Label>
                                <Label>
                                  <RadioInput type="radio" name="shutdownOption" value="Minimize to System Tray" />
                                  Beta releases
                                </Label>
                              </StyledFieldset>
                            </RadioContainer1>
                            <BottomButtonsContainer mb={10}>
                                <BottomButton style={{marginRight: '100px'}} onClick={onClose}>
                                    Restore Defaults
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    Cancel
                                </BottomButton>
                                <BottomButton onClick={onClose}> 
                                    Apply
                                </BottomButton>
                </BottomButtonsContainer>
                        </Top>
                    </TopContent>
                </TopContentContainer>
             </MainContent> 
             : selected === 'Chat' ?
             <MainContent>
              <TopContentContainer>
                    <TopTitle> Host Communication</TopTitle>
                    <TopContent>
                        <Top>
                            
                            <span>You can turn chat on or off.</span>
                                <div style={{display: 'flex', justifyContent:'flex-end', gap: '3px'}}>
                                <span>Enable Chat.</span>
                                <InputSearches type='checkbox' checked={true} />
                                </div>
                            
                        </Top>
                    </TopContent>
                </TopContentContainer>
                <BottomButtonsContainer mb={10}>
                                <BottomButton style={{marginRight: '100px'}} onClick={onClose}>
                                    Restore Defaults
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    Cancel
                                </BottomButton>
                                <BottomButton onClick={onClose}> 
                                    Apply
                                </BottomButton>
                </BottomButtonsContainer>
             </MainContent>
             : selected === 'Autocompletion' ?
             <MainContent>
              <TopContentContainer>
                    <TopTitle> Text AutoCompletion</TopTitle>
                    <TopContent>
                        <Top>
                            
                            <span>You can enable or disable auto completion of text fields.</span>
                                <div style={{display: 'flex', justifyContent:'flex-end', gap: '3px'}}>
                                <span>Enable Autocompletionog text fields.</span>
                                <InputSearches type='checkbox' checked={true} />
                                </div>
                            
                        </Top>
                    </TopContent>
                </TopContentContainer>
                <BottomButtonsContainer mb={10}>
                                <BottomButton style={{marginRight: '100px'}} onClick={onClose}>
                                    Restore Defaults
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    Cancel
                                </BottomButton>
                                <BottomButton onClick={onClose}> 
                                    Apply
                                </BottomButton>
                </BottomButtonsContainer>
             </MainContent> 
             : selected === 'Quality' ?
             <MainContent>
             <TopContentContainer>
                   <TopTitle> Search Result Quality </TopTitle>
                   <TopContent>
                       <Top>
                           
                           <span>You can select the "quality" of search results to display. Four star results indicate that the host returning the result is not fire walled and has free upload slots.</span>
                           <RadioContainer1>
                             <StyledFieldset>
                               <Label>
                                 <RadioInput type="radio" name="shutdownOption" value="Show Only Four Star Results" />
                                 Show Only Four Star Results
                               </Label>
                               <Label>
                                 <RadioInput type="radio" name="shutdownOption" value="Show Only Three and Four Star Results" />
                                 Show Only Three and Four Star Results
                               </Label>
                               <Label>
                                 <RadioInput type="radio" name="shutdownOption" value="Show Only Two, Three and Four Star Results" />
                                 Show Only Two, Three and Four Star Results
                               </Label>
                               <Label>
                                 <RadioInput type="radio" name="shutdownOption" value="Show All Qualities" />
                                 Show All Qualities
                               </Label>
                             </StyledFieldset>
                           </RadioContainer1>
                          <BottomButtonsContainer mb={10}>
                                <BottomButton style={{marginRight: '100px'}} onClick={onClose}>
                                    Restore Defaults
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    Cancel
                                </BottomButton>
                                <BottomButton onClick={onClose}> 
                                    Apply
                                </BottomButton>
                </BottomButtonsContainer>
                       </Top>
                   </TopContent>
               </TopContentContainer>
            </MainContent> :
            selected === 'Speed' ?
            <MainContent>
              <TopContentContainer>
                    <TopTitle> Speed </TopTitle>
                    <TopContent>
                        <Top>
                            
                            <span>You can choose the default shutdown behaviour.</span>
                            <RadioContainer1>
                             <StyledFieldset>
                               <Label>
                                 <RadioInput type="radio" name="shutdownOption" value="Show Only Results of T3 speed or higher" />
                                 Show Only Results of T3 Speed or Higher
                               </Label>
                               <Label>
                                 <RadioInput type="radio" name="shutdownOption" value="Show Only Results of T1 speed or higher" />
                                 Show Only Results of T1 Speed or Higher
                               </Label>
                               <Label>
                                 <RadioInput type="radio" name="shutdownOption" value="Show Only Two, Three and Four Star Results" />
                                 Show Only Results of CabelDSL Speed or Higher
                               </Label>
                               <Label>
                                 <RadioInput type="radio" name="shutdownOption" value="Show All Speeds" />
                                 Show All Speeds
                               </Label>
                             </StyledFieldset>
                           </RadioContainer1>
                            
                        </Top>
                    </TopContent>
                </TopContentContainer>
                <BottomButtonsContainer mb={10}>
                                <BottomButton style={{marginRight: '100px'}} onClick={onClose}>
                                    Restore Defaults
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    Cancel
                                </BottomButton>
                                <BottomButton onClick={onClose}> 
                                    Apply
                                </BottomButton>
                </BottomButtonsContainer>
             </MainContent> :
             selected === 'Keywords' ?
             <MainContent>
              <TopContentContainer>
                    <TopTitle> Filter Results </TopTitle>
                    <TopContent>
                        <Top>
                            <span>You can filter out search results conntaining certain wirds.</span>
                            <TopButtonsContainer>
                                <FilterInput type='folder'/>
                                
                                <TopButton disabled={false}>
                                    Add
                                </TopButton>
                                <TopButton disabled={true}>
                                    Remove
                                </TopButton>
                                </TopButtonsContainer>
                                <TextAreaContainer>
                                  <TextArea1 />
                                </TextAreaContainer>
                        </Top>

                    </TopContent>
                </TopContentContainer>
                <TopContentContainer>
                    <TopTitle> Filter Result Types </TopTitle>
                    <TopContent>
                        <Top>
                            
                            <span>You can general types of search result to filter.</span>
                            <RadioContainer >
                             <StyledFieldset>
                               <Label>
                                  <InputSearches type='checkbox' checked={false} />
                                 {/* <RadioInput type="checkbox" name="shutdownOption" value="Show Only Results of T3 speed or higher" /> */}
                                 Ignore Adult Content.
                               </Label>
                               <Label>
                               <InputSearches type='checkbox' checked={false} />
                                 {/* <RadioInput type="checkbox" name="shutdownOption" value="Show Only Results of T1 speed or higher" /> */}
                                 Ignore .htm/.html Files
                               </Label>
                               <Label>
                               <InputSearches type='checkbox' checked={true} />
                                 {/* <RadioInput type="checkbox" name="shutdownOption" value="Show Only Two, Three and Four Star Results" /> */}
                                 Ignore .vbs Files
                               </Label>
                               <Label>
                               <InputSearches type='checkbox' checked={true} />
                                 {/* <RadioInput type="checkbox" name="shutdownOption" value="Show All Speeds" /> */}
                                 Ignore .wms/.asf Files
                               </Label>
                             </StyledFieldset>
                           </RadioContainer>
                            
                        </Top>
                    </TopContent>
                </TopContentContainer>
                            <BottomButtonsContainer mb={10}>
                                <BottomButton style={{marginRight: '100px'}} onClick={onClose}>
                                    Restore Defaults
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    Cancel
                                </BottomButton>
                                <BottomButton onClick={onClose}> 
                                    Apply
                                </BottomButton>
                </BottomButtonsContainer>
             </MainContent>
             : selected === 'Junk'?
             <MainContent>
              <TopContentContainer>
                    <TopTitle> Junk </TopTitle>
                    <TopContent>
                        <Top>
                            <span>You can use LimeWire Music's junk filter and delete all previously collected filter data here, if your junk filter is rating too much files as junk.</span>
                            </Top>
                            <Top>
                            <span>Display:</span>
                            <RadioContainer1>
                              <StyledFieldset>
                                <Label>
                                  <RadioInput type="radio" name="shutdownOption" value="Display junk in place" />
                                  Display junk in place
                                </Label>
                                <Label>
                                  <RadioInput type="radio" name="shutdownOption" value="Display junk at the bottom of search result" />
                                  Display junk at the bottom of search result

                                </Label>
                                <Label>
                                  <RadioInput type="radio" name="shutdownOption" value="Do not display junky" />
                                  Do not display junk
                                </Label>
                              </StyledFieldset>
                            </RadioContainer1>
                            
                            </Top>
                            <Top>
                            <span>Sensiticity:</span>
                            </Top>
                            <Top1>
                            <span>Relaxed</span>
                            <ProgressBarContainer>
                            
                                <ProgressFill progress={24} />
                                  <Marker progress={24}>
                                    <MarkerText>•••</MarkerText>
                                  </Marker>
                                  
                                </ProgressBarContainer>
                                <span>Strict</span>
                                
                                </Top1> 
                                <Top>
                                  <MiddleButtonsContainer>
                                  <TopButton>
                                    Forget Training Data
                                  </TopButton>
                                  </MiddleButtonsContainer>
                                </Top>
                                </TopContent>
                            <BottomButtonsContainer mb={10}>
                                <BottomButton style={{marginRight: '100px'}} onClick={onClose}>
                                    Restore Defaults
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    Cancel
                                </BottomButton>
                                <BottomButton onClick={onClose}> 
                                    Apply
                                </BottomButton>
                </BottomButtonsContainer>
                        
                   
                </TopContentContainer>
             </MainContent> :
             <MainContent>
             <TopContentContainer>
                   <TopTitle> {selected} </TopTitle>
                   <TopContent>
                       <Top>
                           
                           <span>You can choose the default shutdown behaviour.</span>
                           <RadioContainer1>
                             <StyledFieldset>
                               <Label>
                                 <RadioInput type="radio" name="shutdownOption" value="Shut down immediately" />
                                 Major Releases
                               </Label>
                               <Label>
                                 <RadioInput type="radio" name="shutdownOption" value="Shut down after transfers" />
                                 Service Releases
                               </Label>
                               <Label>
                                 <RadioInput type="radio" name="shutdownOption" value="Minimize to System Tray" />
                                 Beta releases
                               </Label>
                             </StyledFieldset>
                           </RadioContainer1>
                           <BottomButtonsContainer mb={10}>
                                <BottomButton style={{marginRight: '100px'}} onClick={onClose}>
                                    Restore Defaults
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    OK
                                </BottomButton>
                                <BottomButton onClick={onClose}>
                                    Cancel
                                </BottomButton>
                                <BottomButton onClick={onClose}> 
                                    Apply
                                </BottomButton>
                </BottomButtonsContainer>
                       </Top>
                   </TopContent>
               </TopContentContainer>
            </MainContent>
            }
        </Body>
        
      </ModalContainer>
    </ModalOverlay>
  );
};

export default OptionsModal;
