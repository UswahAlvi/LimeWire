
import styled from "styled-components";
import Tick from '/tick.png'
import { FaAngleRight, FaCheck } from "react-icons/fa";
const MenuItem = styled.div`
  position: relative;
  cursor: pointer;
  padding: 4px 8px;
  border: 1.5px solid #fae6a8;
  &:hover > div {
    display: flex;
  }
  &:hover{
  background: #f3d284;
  border: 1.5px solid #a8935a;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  flex-direction: column;
  top: 100%;
  z-index: 990;
  left: 0;
  background: white;
  color: black;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1.5px solid #a8935a;
  background: #fae6a8;
  min-width: 185px;
`;

const DropdownItem = styled.div`
  padding: 3px;
  cursor: pointer;
  position: relative;
  border-bottom: 1.5px solid #a8935a;
  .wrap {
    padding: 7px 7px 7px 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .not-active {
    color: #a8935a;
  }
  &:hover {
    .wrap{
    background: #f3d284;
    }
  }
  &:hover > div {
    display: flex;
  }
`;

const DropdownItemNoSub = styled.div`
  padding: 3px;
  cursor: pointer;
  position: relative;
  .wrap {
    padding: 4px 6px 4px 35px;
    display: flex;
    align-items: center;
  }
  .wrap-checked {
    padding: 4px 6px 4px 6px;
    display: flex;
    align-items: center;
  }
  .not-active {
    color: #a8935a !important;
  }
  .span-checked{
    margin-left: 18px;
  }
  &:hover {
    .wrap{
    background: #f3d284;
    }
    .wrap-checked{
    background: #f3d284;
    }
  }
`;

const Submenu = styled.div`
  display: none;
  position: absolute;
  flex-direction: column;
  top: 0;
  left: 98%;
  z-index: 998;
  background: white;
  color: black;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1.5px solid #a8935a;
  background: #fae6a8;
  min-width: 190px;
`;

const CustomHR = styled.hr`
  border: none;
  height: 1px;
  background-color: #a8935a; 
  margin: 0px 2px;
`;
const SubMenuItem = styled.div`
  padding: 2px;
  cursor: pointer;
  position: relative;
  .w {
    padding: 3px 4px 3px 30px;
  }
  &:hover {
    .w{
    background: #f3d284;
    }
  }
`;

export default function Dropdown({ title, items }) {
    return (
      <MenuItem>
        {title}
        <DropdownMenu>
          {items.map((item, index) =>{
           return item.submenu ? (
              <DropdownItem key={index}>
                
                <div className="wrap">
                    <span className={`${item.isActive?'':'not-active'}`}>{item.name}</span>
                    <FaAngleRight size={12} style={{}} />
                </div> 
                
                <Submenu>
                  {item.submenu.map((sub, i) => (
                    sub.name === "break" ?
                        (<CustomHR key={i}/>):
                        (<SubMenuItem key={i}> <div className="w">{sub.name}</div></SubMenuItem>)
                    ))}
                </Submenu>
              </DropdownItem>
            ) : (
              <DropdownItemNoSub key={index} onClick={item.handleClick ? item.handleClick : undefined}>
                <div className={`${item.checked ? 'wrap-checked' : 'wrap'} `}>
                    {item.checked && <img src={Tick} width={10} />}
                    <span
                    className={`${item.checked ? "span-checked" : ""}`}
                    style={{ color: item.isActive? "black" : "#a8935a" }}
                    >
                    {item.name}
                    </span>


                </div> 
            </DropdownItemNoSub>

            )
            })}
        </DropdownMenu>
      </MenuItem>
    );
  }