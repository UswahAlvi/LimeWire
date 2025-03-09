import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { setAudioTab } from '../../store';

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

export default function AudioFormContainer({onSearch}) {
    const [songInput, setSongInput] =useState('');
  const [artistInput, setArtistInput] = useState("");
  const [albumInput, setAlbumInput] = useState("");
  const [genre, setGenre] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [moreSearchOption, setMoreSearchOption] = useState(false);
  const [track, setTrack] = useState("");
  const [year, setYear] = useState("");
  const [length, setLength] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  const handleAudioSearch = () => {
    console.log("Song:", songInput, "Artist:", artistInput); // Debugging

    if (songInput.trim() === "" && artistInput.trim() === "") return;
    
    console.log('yes');

    dispatch(setAudioTab({
        title: songInput,
        artist: artistInput,
        album: albumInput,
        genre,
        license: licenseType,
        more: moreSearchOption,
        track,
        year,
        length,
        type
    }));

    onSearch(); // Ensure this is defined
};

    
  return (
    <FormContainer>
             <Title>Audio</Title>
             <Label>Title</Label>
             <Input type="text" value={songInput} onChange={(e) => setSongInput(e.target.value)} />
             <Label>Artist</Label>
             <Input type="text" value={artistInput} onChange={(e) => setArtistInput(e.target.value)} />
             <Label>Album</Label>
             <Input type="text" value={albumInput} onChange={(e) => setAlbumInput(e.target.value)} />
             <LabelDropDown>Genre</LabelDropDown>
             <Select value={genre} onChange={(e) => setGenre(e.target.value)}>
                 <option value=""></option>
                 <option value="acapella">Acappella</option>
                 <option value="rock">Rock</option>
                 <option value="jazz">Jazz</option>
                 <option value="pop">Pop</option>
             </Select>
             <LabelDropDown>License Type</LabelDropDown>
             <Select value={licenseType} onChange={(e) => setLicenseType(e.target.value)}>
                 <option value=""></option>
                 <option value="free">Free</option>
                 <option value="personal">Personal Use</option>
                 <option value="commercial">Commercial Use</option>
                 <option value="exclusive">Exclusive Rights</option>
                 <option value="royalty-free">Royalty-Free</option>
             </Select>
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
                     <LabelDropDown>Type</LabelDropDown>
                     <Select value={type} onChange={(e) => setType(e.target.value)}>
                         <option value=""></option>
                         <option value="single">Single</option>
                         <option value="album">Album</option>
                     </Select>
                     <Label>Year</Label>
                     <Input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
                     <Label>Length</Label>
                     <Input type="text" value={length} onChange={(e) => setLength(e.target.value)} />
                 </>
             )}
             <Button onClick={handleAudioSearch}>Search</Button>
         </FormContainer>
  )
}
