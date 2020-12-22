import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi';

const Button = styled.button`
    cursor: pointer;
    width: 120px;
    height: 38px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.inputColor};

    display: flex;
    align-items: center;
    justify-content: center;

    -webkit-box-shadow: var(--webkit-box-shadow);
    -moz-box-shadow: var(--moz-box-shadow);
    box-shadow: var(--box-shadow);

    .icon {
        margin-right: 10px;
        color: ${props => props.theme.colors.color};
    }
`

export default function Back() {
    let history = useHistory();
      
    function handleClick() {
      history.push("/");
    }
    return(
        <Button onClick={handleClick}><HiOutlineArrowNarrowLeft className='icon' size={28} />Back</Button>
    )
}