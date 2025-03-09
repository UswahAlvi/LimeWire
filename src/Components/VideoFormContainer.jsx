import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { setVideoTab } from '../../store';

const FormContainer = styled.div`
  background: #f8e7b5;
  border: 1.5px solid #a8935a;
  margin-top: 8px;
  padding: 10px;
  height: 51vh;
  overflow-y: auto; /* Enables scrolling */
  overflow-x: hidden; /* Prevents horizontal scrolling */

  /* Scrollbar Styles */
  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #f9d976, #f7c948);
    border: 2px solid #e8b647;
    background-image: repeating-linear-gradient(
      90deg,
      rgba(255, 230, 150, 0.8) 0px,
      rgba(255, 200, 100, 0.8) 5px,
      transparent 10px
    );
  }

  &::-webkit-scrollbar-track {
    background: #fceabb;
    border: 1px solid #d8a200;
  }

  &::-webkit-scrollbar-button {
    background: #ffecb3;
    border: 1px solid #d8a200;
  }
`;
const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 14px;
  font-weight: bold;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  display: block;
  margin-top: 4px;
`;
const LabelDropDown = styled.label`
  font-size: 12px;
  font-weight: bold;
  display: block;
  margin-top: 4px;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #a5865a;
  background: white;
  font-size: 12px;
  width: 80%;
`;

const Select = styled.select`
  width: 83%;
  padding: 4px;
  border: 1px solid #a5865a;
  font-size: 12px;
  background: linear-gradient(to bottom right, #f8e5c2, #fae6a8);
  border-radius: 3px;
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
  padding: 5px 10px;
  background: linear-gradient(to top left, #ebe1c6, #f9da84);
  border-radius: 2px;
  border: 1px solid #999;
  cursor: pointer;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  &:hover {
    background: #c5c5c5;
  }
`;

export default function VideoFormContainer() {
    const [title, setTitle] =useState(['']);
  const [rating, setRating] = useState(null);
  const [moreSearchOption, setMoreSearchOption] = useState(false);
  const [track, setTrack] = useState("");
  const [year, setYear] = useState("");
  const [length, setLength] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  const handleVideoSearch = () => {
    if (![title, rating, track, year, length, type].some(value => value.trim())) {
        alert("Please fill at least one field before searching.");
        return;
    }

    dispatch(setVideoTab({ 
        title, 
        rating, 
        more: moreSearchOption, 
        track, 
        year, 
        length, 
        type 
    }));
  }

    // const songQuery = title.trim().toLowerCase();
    // const artistQuery = artistInput.trim().toLowerCase();

    // if (!songQuery && !artistQuery) {
    //     setSearchResult([]);
    //     return;
    // }

    // const filteredSongs = data.filter((song) => {
    //     const  [artistPart, songPart] = song.name.toLowerCase().split(" - ");
    //     console.log(`artist ${artistPart}`)
    //     console.log(`song ${songPart}`)
    //     const matchesArtist = artistQuery ? artistPart.includes(artistQuery) : true;
    //     const matchesSong = songQuery ? songPart.includes(songQuery) : true;

    //     return matchesArtist && matchesSong;
    // });

    // setSearchResult(filteredSongs);

  return (
    <FormContainer>
             <Title>Video</Title>
             <Label>Title</Label>
             <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
             <LabelDropDown>Type</LabelDropDown>
                     <Select value={type} onChange={(e) => setType(e.target.value)}>
                         <option value=""></option>
                         <option value="single">Single</option>
                         <option value="album">Album</option>
                     </Select>
             
             <Label>Year</Label>
             <Input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
             <LabelDropDown>Rating</LabelDropDown>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value=""></option> 
                    <option value="1">1</option>  
                    <option value="2">2</option>  
                    <option value="3">3</option>  
                    <option value="4">4</option>  
                    <option value="5">5</option>  
                </Select>
                <Label>Length</Label>
                <Input type="text" value={length} onChange={(e) => setLength(e.target.value)} />
                <CheckboxContainer>
                 <Checkbox
                     type="checkbox"
                     checked={moreSearchOption}
                     onChange={() => setMoreSearchOption(!moreSearchOption)}
                 />
                 <span>More Search Options</span>
             </CheckboxContainer>
             {moreSearchOption && (
                 <>
                     <Label>Track</Label>
                     <Input type="text" value={track} onChange={(e) => setTrack(e.target.value)} />
                 </>
             )}
             <Button onClick={handleVideoSearch}>Search</Button>
         </FormContainer>
  )
}
