
import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import MonitorComponent from './Monitor'
import LibraryComponent from './LibraryComponent'
import { IoCloseSharp } from "react-icons/io5";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { FaMusic, FaImages, FaFileAlt, FaVideo, FaFolderOpen } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import {setNewActiveTab, setNewActiveRow, makeActiveRowNull} from '../../store/index'
import Junk from '/junk.png'
import Arrow from '/download.png'
import Browse from '/browsehost.png'
import Stop from '/stopsearch.png'
import All from '/all.png'
import Inactive from '/junk.png'
import Pause from '/pause.png'
import Images from '/images.png'
import Docs from '/docs.png'
import Videos from '/videos.png'
import Programs from '/programs.png'
import Premium from '/premium.png'
import Explore from '/library.png'
import Cancel from '/cancel.png'
import Resume from '/play.png'
import Search from '/searchbar.png'
import Library from '/library.png'
import Monitor from '/monitor.png'
import Connect from '/connection.png'
import World from '/world.png'
import Prev from '/prev.png'
import Next from '/next.png'
import Audio from '/audio.png'
import PauseButton from '/pause.png'
import StopButton from '/stop.png'
import Play from '/play.png'
import { useDispatch, useSelector } from "react-redux";
import { deleteTab } from "../../store";
import AudioFormContainer from "./AudioFormContainer";
import VideoFormContainer from "./VideoFormContainer";
import Dropdown from "./Dropdown";
import OptionsModal from "./OptionsModal";
import ProgramFormContainer from "./ProgramFormContainer";
import AllTypesFormContainer from "./AllTypesFormContainer";
import ImagesFormContainer from "./ImagesFormContainer";
import DocumentsFormContainer from "./DocumentsFormContainer";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
  font-weight: bold;
  border: 1px solid black;
  ::-webkit-scrollbar {
    width: 14px;
  }

  /* Scrollbar Thumb */
  ::-webkit-scrollbar-thumb {
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

  /* Scrollbar Track */
  ::-webkit-scrollbar-track {
    background: linear-gradient(to bottom, #fceabb, #f8b500);
    border-radius: 10px;
    border: 1px solid #d8a200;
  }

  /* Scrollbar Buttons */
  ::-webkit-scrollbar-button {
    background: linear-gradient(to bottom, #ffecb3, #d4a017);
    border: 1px solid #d8a200;
    border-radius: 4px;
  }
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px;
  background: #f3d284;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid black;
  border-right: none;
  color: black;

  &.active {
    background-color: #f6e0b9;
  }
  &:hover {
    background-color: #f6e0b9;
  }
`;

const Menu = styled.div`
  border-bottom: 1.5px solid #a8935a;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
`;
const Cont = styled.div`
  display: flex;
`;
const ButtonLogin = styled.button`
  all: unset;
  padding-right: 10px;
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
  height: 25px;
  align-items: center;
  justify-content: center;
  padding-inline: 5px;
  cursor: pointer;
  font-size: 12px;
  background: #fae6a8;
  position: relative;
  border-radius: 6px 6px 0px 0px;
  border-top: 2px solid white;
  border-left: 2px solid white;
  border-bottom: ${(props) => (props.$hasBorder ? "2px solid white" : "2px solid #fae6a8")};
  border-right: 2px solid #a9a9a9;
  align-self: flex-end;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  color: black;
`;

const Button2 = styled.div`
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: center;
  padding-inline: 5px;
  cursor: pointer;
  background: #fae6a8;
  font-size: 12px;
  border-top: 2px solid white;
  border-radius: 6px 6px 0px 0px;
  border-bottom: ${(props) => (props.$hasBorder ? "2px solid white" : "2px solid #fae6a8")};
  border-right: 2px solid #a9a9a9;
  border-left: none;
  align-self: flex-end;
`;

const Button3 = styled.div`
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: center;
  padding-inline: 5px;
  cursor: pointer;
  background: #fae6a8;
  font-size: 12px;
  border-radius: 6px 6px 0px 0px;
  border-top: 2px solid white;
  border-bottom: ${(props) => (props.$hasBorder ? "2px solid white" : "2px solid #fae6a8")};
  border-right: 2px solid #a9a9a9;
  border-left: none;
  align-self: flex-end;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  border: 10px solid;
  border-image: linear-gradient(to bottom, #757399, #6c6891) 1;
  font-size: 11px;
  font-weight: bold;
`;


const Navbar = styled.div`
  background: #fae6a8;
  color: black;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const Sidebar = styled.div`
  width: 20%;
  background: #fae6a8;
  padding: 0px 5px;
  display: flex;
  flex-direction: column;
  border: 1.5px solid #a8935a;
`;

const FilterBox = styled.div`
  margin: 0.5px;
  border: 1.5px solid #a8935a;
  flex: 3;
  padding: 2px;
`;
const FilterBoxLast = styled.div`
  margin: 0.5px;
  border: 1.5px solid #a8935a;
  flex: 1;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchButton = styled.div`
  background: linear-gradient(to bottom, #f3e6cb,#fae6a8);
  border: 1.5px solid #a8935a;
  padding: 5px 8px;
  border-radius: 3px;
  cursor: pointer;
`;
const FilterTitle = styled.div`
  text-align: center;
  color: black;
`;
const Box = styled.div`
  background-color: white;
  height: 90%;
  width: 100%;
  border: 1.5px solid #a8935a;
  box-sizing: border-box;
`;
const BoxRow= styled.div`
  background-color: #fff6de;
  padding: 3px 6px;
`
const MainContent = styled.div`
  flex: 1;
  background: #fae6a8;
  padding: 5px;
`;

const Footer = styled.div`
  display: flex;
  align-items:center;
  background: #fae6a8;
  border-top: 1px solid #a8935a;
  justify-content: space-between;
`;

const FooterSection = styled.div`
  display: flex;
  align-items: center;
  padding-inline: 2px;
  border-inline: ${(props) => (props.$hasBorder ? "1px solid black" : "none")};
`;

const ConnectionText = styled.span`
  white-space: nowrap;
`;

const SpeedInfo = styled.span`
  padding: 0 5px;
`;

const VersionUpdateLink = styled.a`
  color: red;
  padding-inline: 8px;
  display: flex;
  justify-content: center;
  text-decoration: underline;
`;

const StatusBadge = styled.div`
  border-radius: 16px;
  color: white;
  border: 1px solid black;
  background: green;
  padding-inline: 8px;
  font-weight: normal;
  margin: 1px 4px;
`;

const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-inline: 20px;
  border-inline: ${(props) => (props.$hasBorder ? "1px solid black" : "none")};
`;

const Span = styled.span`
  padding: 1px;
  font-size: 11px;
  color: black;
  background: linear-gradient(to bottom, #f3e6cb,#fae6a8);
`;

const SearchType = styled.div`
  background: #fae6a8;
  display: flex;
  flex-direction: column;
  /* margin-top: 5px; */
`;

const SearchTypeTitle = styled.span`
  color: black;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  padding-block: 2px;
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
  cursor: pointer;
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
const wipeAnimation = keyframes`
  0% { clip-path: inset(0 0 100% 0); opacity: 1; }  /* Fully hidden */
  50% { clip-path: inset(0 0 0 0); opacity: 1; }    /* Fully visible */
  100% { clip-path: inset(0 0 100% 0); opacity: 1; } /* Hidden again */
`;
const Icon = styled.img.attrs({ src: Arrow, alt: "down Icon" })`
  height: 22px;
  cursor: pointer;
  transition: clip-path 0.3s ease-in-out;

   ${({ $isDownloading }) =>
    $isDownloading &&
    css`
      animation: ${wipeAnimation} 1s ease-in-out infinite;
    `}
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  table-layout: auto;
`;

const Wrap = styled.div`
  padding: 2px 4px;
  background: #fae6a8;
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
  font-size: 9px;
  border: 1px solid grey;
  overflow-y: auto;  /* Enables vertical scrolling */
  overflow-x: hidden;
  height: ${({ height }) => (typeof height === "number" ? `${height}%` : height || "50%")};
`;
const ProgressBar = styled.div`
  height: 12px;
  background-color: #fae6a8;
  overflow: hidden;
  position: relative;
  display: flex;
  font-size: 10px;
  font-weight: bold;
  span{
    position: relative;
    zIndex: 1;
    width: 100%;
    text-align: center;
  }
`;

const ProgressFill = styled.div`
  position: absolute;
  height: 100%;
  width: ${(props) => props.$progress}%;
  background-color: #fae6a8;
  transition: width 0.3s ease-in-out;
`;

const StarRating = styled.span`
  color: gold;
`;
const Containerrr = styled.div`
  display: flex;
  padding-block: 4px;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 80px;
  border: 2px solid #fae6a8;
  &:hover {
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid #d8a200;
    border-bottom: 2px solid #d8a200;
  }
`;

const LastCard = styled(Card)`
  margin-inline: 26% 2%;
`;

const IconButtonn = ({ src, label, onDownload }) => (
  <Card onClick={onDownload}>
    <img src={src} height={30} alt={label} />
    <span>{label}</span>
  </Card>
);

const LimeWireUI = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloads, setDownloads] = useState([]);
  const [selectedSearchType, setSelectedSearchType]=useState('Audio')
  const [navItem, setNavItem] = useState('file')
  const tabs = useSelector(state=>state.tab.tabs || [])
  const reduxActiveTab = useSelector(state => state.tab.activeTab);
  const [activeTab, setActiveTab] = useState(reduxActiveTab);
  const reduxActiveRow= useSelector(state => state.tab.activeRow);
  const [activeRow, setActiveRow] = useState(reduxActiveRow);
  const [sidebar, setSidebar] = useState(true)
  const dispatch = useDispatch()
  
  const [isOpen, setIsOpen] = useState(false)
  const handleOptions = () => setIsOpen(true)
  const DropDownItemsNavigation = [{ name: "Search", checked:false, isActive:true},
                                    { name: "Monitor", checked:false, isActive:true},
                                    { name: "Connection", checked:false, isActive:false},
                                    { name: "Library", checked:false, isActive:true}
                                  ]
  const DropDownItemsTools = [{ name: "Options", checked:false, isActive:true, handleClick:handleOptions},]
  const DropDownItemsFile = [{ name: "File", checked:false, isActive:true},
                                    { name: "Export", checked:false, isActive:true},
                                    { name: "Connection", checked:true, isActive:false},

                                    { name: "Import", checked:false, isActive:true},];
 const DropDownItemsResources = [{ name: "File", checked:false, isActive:true},
                                    { name: "Export", checked:false, isActive:true},
                                    { name: "Users", checked:true, isActive:true},
                                    { name: "Connect", checked:false, isActive:true},
                                    { name: "Export", checked:false, isActive:true},
                                    { name: "Switch", checked:true, isActive:false},
                                    { name: "Extend", checked:false, isActive:true},
                                  ]
  const DropDownItemsView = [{ name: "Show/Hide", checked:false, isActive:true,
                               submenu: [{name:"Monitor", checked:false, hasDropDown: false}, 
                                         {name:"Connections", checked:false, hasDropDown: false},
                                         {name:"Library", checked:true, hasDropDown: false},
                                         {name:"Search", checked:false, hasDropDown: false}] },
                              {name: "Apply Skins", checked:false, isActive:true,
                               submenu: [ {name:"Refresh Skins", checked:false, hasDropDown: false}, 
                                          {name:"Use default", checked:false, hasDropDown: false},
                                          {name:"break"},
                                         {name:"Black themes", checked:false, hasDropDown: false}, 
                                         {name:"Brown themes", checked:false, hasDropDown: false},
                                         {name:"Pink themes", checked:false, hasDropDown: false},
                                         {name:"Maroon themes", checked:false, hasDropDown: false},
                                          {name:"Grey themes", checked:false, hasDropDown: false}, 
                                          {name:"Yellow themes", checked:false, hasDropDown: false},
                                          {name:"Golden themes", checked:false, hasDropDown: false},
                                          {name:"Red themes", checked:false, hasDropDown: false},
                                          {name:"Maroon themes", checked:false, hasDropDown: false},
                                           {name:"Grey themes", checked:false, hasDropDown: false}, 
                                           {name:"Yellow themes", checked:false, hasDropDown: false},
                                           {name:"Carbon themes", checked:false, hasDropDown: false},
                                            {name:"Grey themes", checked:false, hasDropDown: false}, 
                                            {name:"Yellow themes", checked:false, hasDropDown: false},
                                            {name:"Carbon themes", checked:false, hasDropDown: false},
                                            {name:"Metal themes", checked:false, hasDropDown: false},
                                         ] },
                              {name: "Use small icons", checked:false, isActive:true},
                              {name: "Show icon texts", checked:true, isActive:true},
                            ]

  const [results, setResults] = useState(()=>{
    if(activeTab){
      const tab =  tabs.find(tab=>tab.id === activeTab)
      return tab.result
    }
    return []
  })
  useEffect(() => {
    setActiveTab(reduxActiveTab);
  }, [reduxActiveTab]);
  useEffect(() => {
    setActiveRow(reduxActiveRow);
    console.log('act',JSON.parse(JSON.stringify(activeRow)))
  }, [reduxActiveRow]);
    
  useEffect(()=>{
    const tab =  tabs.find(tab=>tab.id === activeTab)
    setResults(tab?.result)
  },[activeTab,tabs])
 
  const handleRowClick = (song) => {
    if(activeRow?.name === song?.name){
      dispatch(makeActiveRowNull())
    }
    dispatch(setNewActiveRow({id: song.name}))
  };
  

  const handleOutsideClick = (e) => {
    const table = document.getElementById("songs-table");
    if (table && !table.contains(e.target)) {
      dispatch(makeActiveRowNull())
    }
  };
  const startDownload = () => {
    console.log('starting')
    if (activeRow === null) {
      alert("Nothing selected");
      return;
    }
  
    if (!activeRow.file) {
      alert("Selected file not available to download");
      return;
    }
  
    setIsDownloading(true);
    handleDownload(); 
  
    // Reset animation after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 3000);
  };
  
  const handleDownload = () => {
    if (!activeRow) return;

    const fileId = activeRow.file;
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const downloadId = Date.now(); // Generate a unique ID for each download
    console.log('downloading ', JSON.parse(JSON.stringify(activeRow)))
    // Add new download entry with initial state
    const newDownload = {
        id: downloadId, // Unique ID for tracking
        ...activeRow,
        progress: 0,
        speed: 0,
        timeMin: 0,
        timeSecond: 0,
        status: "Starting",
    };

    setDownloads((prevDownloads) => [...prevDownloads, newDownload]);

    setTimeout(() => {
        setDownloads((prev) =>
            prev.map((d) =>
                d.id === downloadId ? { ...d, status: "Downloading" } : d
            )
        );
    }, 300); // Faster status update

    // Simulate download progress
    const fileSizeKB = parseInt(activeRow.size.replace(/,/g, ""), 10); // Convert size to KB
    const fakeDownloadSpeed = 1000; // Increased speed to 1000 KB/s
    const totalTime = (fileSizeKB / fakeDownloadSpeed) * 1000; // Adjusted total time in ms

    let startTime = Date.now();
    let progress = 0;

    const updateInterval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        progress = Math.floor((elapsedTime / totalTime) * 100); // Ensure integer progress

        const remainingTime = Math.max(totalTime - elapsedTime, 0);
        const remainingMinutes = Math.floor(remainingTime / 60000);
        const remainingSeconds = Math.floor((remainingTime % 60000) / 1000);

        setDownloads((prev) =>
            prev.map((d) =>
                d.id === downloadId
                    ? {
                          ...d,
                          progress: Math.min(progress, 100),
                          speed: fakeDownloadSpeed,
                          timeMin: remainingMinutes,
                          timeSecond: remainingSeconds,
                      }
                    : d
            )
        );

        if (progress >= 100) {
            clearInterval(updateInterval);
            setDownloads((prev) =>
                prev.map((d) =>
                    d.id === downloadId
                        ? { ...d, status: "Completed", speed: 0, progress: 100 }
                        : d
                )
            );
            setActiveRow(null)
        }
    }, 500); // Update every 500ms for faster progress

    // Trigger direct download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${activeRow.name}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

};

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <>
    <Div>
      <Container>
        <Navbar>
          <Menu>
            <Cont>
              <Dropdown title="File" items={DropDownItemsFile} />
              <Dropdown title="View" items={DropDownItemsView} />
              <Dropdown title="Navigation" items={DropDownItemsNavigation} />
              <Dropdown title="Tools" items={DropDownItemsTools} />
              <Dropdown title="Help" items={DropDownItemsResources} />
            </Cont>
              <ButtonLogin >Login</ButtonLogin>
          </Menu>
          <IconBar>
          <IconContainer>
          <Button1
            $hasBorder={navItem === "file"}
            role="button"
            onClick={() => { 
              if (navItem !== "file") setNavItem("file"); 
              if (!sidebar) setSidebar(true) 
              }}
          >

              <img src={Search} width={22} alt="Search Icon" /> Search
            </Button1>

            <Button2 
              $hasBorder={navItem === 'monitor'} 
              role="button" 
              onClick={() => navItem !== 'monitor' && setNavItem('monitor')}
            >
              <img src={Monitor} width={22} alt="Monitor Icon" /> Monitor
            </Button2>

            <Button3 
              $hasBorder={navItem === 'library'} 
              role="button" 
              onClick={() => navItem !== 'library' && setNavItem('library')}
            >
              <img src={Library}  width={22} alt="Library Icon" /> Library
            </Button3>
          </IconContainer>

            {/* <div style={{ display: "flex", alignItems: "center" }}>
              <img src={Logo} width={40} alt="logo" />
              <LimeWireText>LimeWire PRO</LimeWireText>
            </div> */}
          </IconBar>
        </Navbar>
        {navItem === 'file'? 
        (<div style={{ display: "flex", flex: 1 }}>
          {sidebar?
          <Sidebar>
            <SearchType>
              <SearchTypeTitle>Select Search Type:</SearchTypeTitle>
              <GridContainer>
                <GridItem className={selectedSearchType === 'All Types' ? 'active' : ''} onClick={()=>setSelectedSearchType('All Types')}>
                 <img src={All} width={18}/>
                  All Types
                </GridItem>
                <GridItem onClick={()=>setSelectedSearchType('Audio')} 
                          className={selectedSearchType === 'Audio' ? 'active' : ''}>
                  <img src={Audio} width={18}/>
                  Audio
                </GridItem>
                <GridItem onClick={()=>setSelectedSearchType('Images')} 
                          className={selectedSearchType === 'Images' ? 'active' : ''}>
                  <img src={Images} width={18}/>
                  Images
                </GridItem>
                <GridItem onClick={()=>setSelectedSearchType('Video')} 
                          className={selectedSearchType === 'Video' ? 'active' : ''}>
                  <img src={Videos} width={20}/>
                  Video
                </GridItem>
                <GridItem onClick={()=>setSelectedSearchType('Documents')} 
                          className={selectedSearchType === 'Documents' ? 'active' : ''}>
                  <img src={Docs} width={18}/>
                  Documents
                </GridItem>
                <GridItem onClick={()=>setSelectedSearchType('Programs')} 
                          className={selectedSearchType === 'Programs' ? 'active' : ''}>
                  <img src={Programs} width={18}/>
                  Programs
                </GridItem>
              </GridContainer>
            </SearchType>
            {selectedSearchType === "Video" ? (
              <VideoFormContainer onSearch={()=>setSidebar(false)}/>
            ) :  selectedSearchType === 'Audio' ?
                <AudioFormContainer onSearch={()=>setSidebar(false)}/>
              : selectedSearchType === 'Programs' ?
                <ProgramFormContainer onSearch={()=>setSidebar(false)} /> 
              : selectedSearchType === 'All Types' ?
                <AllTypesFormContainer onSearch={()=>setSidebar(false)}/>
              : selectedSearchType === 'Images' ?
               <ImagesFormContainer />
              : <DocumentsFormContainer />
              }
            
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
          </Sidebar> :
          <Sidebar>
            <FilterBox>
            <FilterTitle>Genre</FilterTitle>
              <Box>
                <BoxRow>All(0)</BoxRow>
              </Box>
            </FilterBox>
            <FilterBox>
              <FilterTitle>Artist</FilterTitle>
              <Box>
                <BoxRow>All(0)</BoxRow>
              </Box>
            </FilterBox>
            <FilterBox>
              <FilterTitle>Album</FilterTitle>
              <Box>
                <BoxRow>All(0)</BoxRow>
              </Box>
            </FilterBox>
            <FilterBoxLast>
              <SearchButton onClick={()=>setSidebar(true)}>Back To Search</SearchButton>
            </FilterBoxLast>
          </Sidebar>
        }

          <MainContent>
          <div style={{display: 'flex'}}>
          {tabs?.length > 0 &&
            tabs.map((tab) => (
              <TabContainer key={tab.id} role='button' onClick={() => {dispatch(setNewActiveTab({id: tab.id})); setSidebar(true)}}>
                <CloseButton role="button" onClick={() => {dispatch(deleteTab({ id: tab.id })); setSidebar(true)}}>
                  <IoCloseSharp size={12} />
                </CloseButton>
                <Span>{tab?.input?.title || tab?.input?.artist} ({tab?.result?.length})</Span>
              </TabContainer>
            ))}
          </div> 

            <TableContainer height={50}>
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
                {results?.map((item, index) => {
  const isSelected = activeRow?.name === item.name;

  return (
    <tr 
      key={index} 
      onClick={() => handleRowClick(item)}
    >
      <Td $isSelected={activeRow?.name === item.name} $index={index} ><StarRating>{item.quality}</StarRating></Td>
      <Td $isSelected={activeRow?.name === item.name} $index={index}>{item.number}</Td>
      <Td $isSelected={activeRow?.name === item.name} $index={index}>{item.name}</Td>
      <Td $isSelected={activeRow?.name === item.name} $index={index}>{item.type}</Td>
      <Td $isSelected={activeRow?.name === item.name} $index={index}>{item.size}</Td>
      <Td $isSelected={activeRow?.name === item.name} $index={index}>{item.speed}</Td>
      <Td $isSelected={activeRow?.name === item.name} $index={index}>{item.bitrate}</Td>
      <Td $isSelected={activeRow?.name === item.name} $index={index}>?</Td>
    </tr>
  );
})}
              </tbody>
              </Table>
            </TableContainer>
            <Containerrr>
      <ButtonGroup >
        <IconButtonn src={Arrow} label="Download" onDownload={startDownload} />
        <IconButtonn src={Browse} label="Browse Host" />
        <IconButtonn src={Stop} label="Stop" />
        <LastCard>
          <img src={Junk} height={30} alt="Junk" />
          <span>Junk</span>
        </LastCard>
      </ButtonGroup>
    </Containerrr>
            <hr style={{margin:'0px'}} />
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaSortUp size={20} />
              <FaSortDown size={20}  />
            </div>
            <hr style={{margin:'0px'}} />
            <div style={{display:'flex', flexDirection:'column', width:'100%'}}>
              <div>Downloads</div>
              <TableContainer height={80}>
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
                      <Td>
                        <ProgressBar>
                          <ProgressFill $progress={item.progress} />
                          <span> {item.progress}%</span>
                        </ProgressBar>

                      </Td>
                      <Td>{item.speed} KB/s</Td>
                      <Td>{item.timeMin}:{item.timeSecond}</Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
            </div>
            <div style={{display: 'flex', justifyContent:'center' , width: '100%'}}>
            <Containerr>
      <IconButton src={Cancel} label="Cancel" />
      <IconButton src={Resume} label="Resume" />
      <IconButton src={Pause} label="Pause" />
      <IconButton src={Premium} label="Premium" />
      <IconButton src={Explore} label="Explore" />
      <IconButton src={Inactive} label="Clear Inactive" />
    </Containerr>
    </div>
          </MainContent>
        </div>)
        :
        navItem === 'monitor'? 
        (
          <MonitorComponent />
        )
        :
        (
          <LibraryComponent/>
        )
        }

    <Footer>
      <div style={{display: 'flex'}}>
      <FooterSection>
        <img src={Connect} alt="Connect" width={16}/>
        <ConnectionText>Turbo Charged Connection</ConnectionText>
      </FooterSection>

      <FooterSection $hasBorder>
        <img src={World} width={24} alt="World Icon" />
      </FooterSection>

      <FooterSection>
        <StatusBadge>0</StatusBadge>
      </FooterSection>

      <FooterSection $hasBorder>
        <Icon $isDownloading={isDownloading} />
        <SpeedInfo>0 @ 0kbps</SpeedInfo>
        <img src={Arrow} height={20} style={{ transform: "rotate(180deg)" }} />
        <SpeedInfo>0 @ 0kbps</SpeedInfo>
      </FooterSection>
      </div>
      
      <div style={{display: 'flex'}}>
      <FooterSection>
        <VersionUpdateLink href="/">
          a newer version is available, update?
        </VersionUpdateLink>
      </FooterSection>

      <PlayerControls $hasBorder>
        <img src={Prev} height={16} alt="Previous" />
        <img src={Play} height={16} alt="Play" />
        <img src={PauseButton} height={16} alt="Pause" />
        <img src={StopButton} height={16} alt="Stop" />
        <img src={Next} height={16} alt="Next" />
      </PlayerControls>

      <FooterSection>
        <span >LimeWire Media Player</span>
      </FooterSection>
      </div>
        </Footer>
      </Container>
    </Div>
    {isOpen &&
      <OptionsModal isOpen={isOpen} onClose={()=>setIsOpen(false)}/>
    }
    </>
  );
};

export default LimeWireUI;



const Containerr = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 5px;
  justify-content: center;
  margin-top: 10px;
  width: 50%
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconButton = ({ src, label }) => (
  <ButtonWrapper>
    <img src={src} height={30} alt={label} />
    <span>{label}</span>
  </ButtonWrapper>
);