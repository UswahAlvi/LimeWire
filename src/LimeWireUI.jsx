
import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Logo from "/logo.png";
import { IoCloseSharp } from "react-icons/io5";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { FaMusic, FaImages, FaFileAlt, FaVideo, FaFolderOpen } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import Junk from '/junk.png'
import Arrow from '/downarrow.png'
import Browse from '/browsehost.png'
import Stop from '/stopsearch.png'
import Inactive from '/inactive.png'
import Pause from '/pause.png'
import Premium from '/premium.png'
import Explore from '/explore.png'
import Cancel from '/cancel.png'
import Resume from '/resume.png'
import Search from '/searchbar.png'
import Library from '/library.png'
import Monitor from '/monitor.png'
import Connect from '/connection.png'
import World from '/world.png'
import Prev from '/prev.png'
import Next from '/next.png'
import PauseButton from '/pauseButton.png'
import StopButton from '/stop.png'
import Play from '/play.png'

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
  background: #bcbcb8;
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
  font-size: 12px;
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
  padding-inline: 5px;
  cursor: pointer;
  font-size: 12px;
  background: #d6d5d1;
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
  padding-inline: 5px;
  cursor: pointer;
  background: #d6d5d1;
  font-size: 12px;
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
  padding-inline: 5px;
  cursor: pointer;
  background: #d6d5d1;
  font-size: 12px;
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
  display: flex;
  align-items:center;
  background: #d6d5d1;
  border-top: 1px solid black;
  
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
  border: 1.5px solid black;
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
  background: ${({ $isSelected }) => ($isSelected ? '#c8f07e' : '#f4f7f0')};
  text-align: center;
`;
const TableContainer = styled.div`
  width: 100%;
  font-size: 9px;
  border: 1px solid grey;
  overflow-y: auto;  /* Enables vertical scrolling */
  overflow-x: hidden;
  height: ${({ height }) => (typeof height === "number" ? `${height}px` : height || "300px")};
`;
const ProgressBar = styled.div`
  height: 12px;
  background-color: #d6d5d1;
  color: black;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  font-size: 10px;
  color: white;
  font-weight: bold;
`;

const ProgressFill = styled.div`
  position: absolute;
  height: 100%;
  width: ${(props) => props.$progress}%;
  background-color: #81b648;
  transition: width 0.3s ease-in-out;
`;

const StarRating = styled.span`
  color: gold;
`;

const LimeWireUI = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null)
  const [songInput, setSongInput] =useState('Spoonman');
  const [selectedSearchType, setSelectedSearchType]=useState('Audio')
  const data = [
    { quality: "⭐⭐⭐⭐⭐", number: 1, name: "You know I love you",file: '1tHl-vQd2OCw0naB4gdvXbRBRWHYx46wI' ,type: "mp3", size: "3,172 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐⭐", number: 3, name: "Soundgarden: Outshined", type: "mp3", size: "4,852 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 2, name: "Soundgarden: Black Hole Sun", type: "mp3", size: "4,098 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 4, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 23, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 11, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 13, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐", number: 15, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 16, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 21, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 17, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
    { quality: "⭐⭐⭐⭐", number: 18, name: "Soundgarden: Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128 },
  
  ];

  const [searchResult, setSearchResult] = useState(()=>{
    const query = songInput.trim().toLowerCase();
    if (!query) {
      setSearchResult([]); 
      return;
    }
  
    return data.filter((song) =>
      song.name.toLowerCase().includes(query)
    );
  
  })

  const [downloads, setDownloads] = useState([
    {
      name: "Soundgarden - Outshined.mp3",
      size: "4,852 KB",
      status: "Completed",
      progress: 100,
      speed:0,
      timeMin: 0,
      timeSecond: 0
    },
    {
      name: "Soundgarden - The Day I Tried To Live.mp3",
      size: "7,487 KB",
      status: "Completed",
      progress: 100,
      speed: 0,
      timeMin: 0,
      timeSecond: 0
    }
  ]);
  const handleSearch = () => {
    const query = songInput.trim().toLowerCase();
    if (!query) {
      setSearchResult([]); 
      return;
    }
  
    const filteredSongs = data.filter((song) =>
      song.name.toLowerCase().includes(query)
    );
  
    setSearchResult(filteredSongs);
  };
  
 
  const handleRowClick = (song) => { 
    setSelectedSong(song === selectedSong ? null : song);
  };
  

  const handleOutsideClick = (e) => {
    const table = document.getElementById("songs-table");
    if (table && !table.contains(e.target)) {
      setSelectedSong(null);
    }
  };
  const startDownload = () => {
    console.log(selectedSong)
    if (selectedSong === null) {
      alert("No song selected");
      return;
    }
  
    if (!selectedSong.file) {
      alert("Selected song not available to download");
      return;
    }
  
    setIsDownloading(true);
    handleDownload(); 
  
    // Reset animation after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 3000);
  };
  const handleSongInput=(e)=>{
    setSongInput(e.target.value)
    console.log(songInput)
  }
  

  const handleDownload = () => {
    if (!selectedSong) return;

    const fileId = selectedSong.file;
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const downloadId = Date.now(); // Generate a unique ID for each download

    // Add new download entry with initial state
    const newDownload = {
        id: downloadId, // Unique ID for tracking
        ...selectedSong,
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
    const fileSizeKB = parseInt(selectedSong.size.replace(/,/g, ""), 10); // Convert size to KB
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
            setSelectedSong(null)
        }
    }, 500); // Update every 500ms for faster progress

    // Trigger direct download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = `${selectedSong.name}.mp3`;
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
                <img src={Search} /> Search
              </Button1>
              <Button2>
                <img src={Monitor}/> Monitor
              </Button2>
              <Button3>
                <img src={Library} /> Library
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
                <GridItem className={selectedSearchType === 'All Types' ? 'active' : ''}>
                  <IoMdCheckboxOutline color="green" />
                  All Types
                </GridItem>
                <GridItem className={selectedSearchType === 'Audio' ? 'active' : ''}>
                  <FaMusic color="black" />
                  Audio
                </GridItem>
                <GridItem className={selectedSearchType === 'Images' ? 'active' : ''}>
                  <FaImages color="green" />
                  Images
                </GridItem>
                <GridItem className={selectedSearchType === 'Video' ? 'active' : ''}>
                  <FaVideo color="brown" />
                  Video
                </GridItem>
                <GridItem className={selectedSearchType === 'Documents' ? 'active' : ''}>
                  <FaFileAlt color="gray" />
                  Documents
                </GridItem>
                <GridItem className={selectedSearchType === 'Programs' ? 'active' : ''}>
                  <FaFolderOpen color="blue" />
                  Programs
                </GridItem>
              </GridContainer>
            </SearchType>
            <FormContainer>
              <Upper>
                <Title>Audio</Title>
                <Label>Title</Label>
                <Input type="text" value={songInput} onChange={(e)=>handleSongInput(e)}/>
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
                <Button onClick={handleSearch}>Search</Button>
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
            <TableContainer height={300}>
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
                {searchResult.map((item, index) => (
                  <tr key={index} onClick={() => {handleRowClick(item)}}>
                    <Td $isSelected={item===selectedSong}><StarRating>{item.quality}</StarRating></Td>
                    <Td $isSelected={item===selectedSong}>{item.number}</Td>
                    <Td $isSelected={item===selectedSong}>{item.name}</Td>
                    <Td $isSelected={item===selectedSong}>{item.type}</Td>
                    <Td $isSelected={item===selectedSong}>{item.size}</Td>
                    <Td $isSelected={item===selectedSong}>{item.speed}</Td>
                    <Td $isSelected={item===selectedSong}>{item.bitrate}</Td>
                    <Td $isSelected={item===selectedSong}>?</Td>
                  </tr>
                ))}
              </tbody>
              </Table>
            </TableContainer>
            <div style={{display:'flex', paddingBlock:'4px'}}>
              <div style={{display:'flex', gap: '15px' , alignItems: 'center'}}>  
                <div onClick={startDownload} style={{role:'button', cursor:'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '130px'}}>
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
                          <span style={{ position: "relative", zIndex: 1, color: 'black' }}>{item.progress}%</span>
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
            <div style={{display:'flex', alignItems:'center', gap: '20px', justifyContent:'center', marginTop:'10px'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Cancel} height={30} />
                  <span>Cancel</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Resume} height={30}/>
                  <span>Resume</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Pause} height={30}/>
                  <span>Pause</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Premium} height={30}/>
                  <span>Premium</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Explore}height={30} />
                  <span>Explore</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <img src={Inactive} height={30} />
                  <span>Clear Inactive</span>
                </div>
              
            </div>

          </MainContent>
        </div>

        <Footer>
          <div style={{display:'flex', alignItems:'center', borderRight: '1px solid black', paddingRight:'10px'}}>
            <img src={Connect} />
            <span style={{whiteSpace:'nowrap'}}>Turbo Charged Connection</span>
          </div>
          <div  style={{display:'flex', borderRight: '1px solid black'}} >
            <img src={World} width={24}/>
          </div>
          <div  style={{display:'flex', borderRight: '1px solid black'}} >
            <div style={{borderRadius:'16px',color: 'white', border: '1px solid black', background:'green', paddingInline:'8px', fontWeight:'normal', margin:'1px 4px'}}>
              0
            </div>
          </div>
          <Icon $isDownloading={isDownloading}/>
          <span>0 @ 0kbps</span>
          <img src={Arrow} height={20} style={{transform:'rotate(180deg)'}}/>
          <span style={{borderRight: '1px solid black', paddingRight:'6px'}}>0 @ 0kbps</span>
          <u><a style={{color: 'red', paddingInline:'8px',borderRight: '1px solid black'}} href="/">a newer version is available, update?</a></u>
          <div style={{display: 'flex', alignItems:'center', paddingInline:'3px'}}>
            <img src={Prev} height={16}/>
            <img src={Play} height={16}/>
            <img src={PauseButton} height={16} />
            <img src={StopButton} height={16} />
            <img src={Next} height={16}/>
          </div>
          <div style={{border: '1px solid black', padding:'2px 4px'}}>
            LimeWire Media Player
          </div>

        </Footer>
      </Container>
    </Div>
  );
};

export default LimeWireUI;