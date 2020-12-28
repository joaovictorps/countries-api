import {AiOutlineSearch} from 'react-icons/ai';
import styled from 'styled-components';

const Search = styled.div`
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
    max-width: 450px;
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.inputColor};
    display: flex;
    align-items: center;
    height: 60px;
    border-radius: 8px;
    -webkit-box-shadow: var(--webkit-box-shadow);
    -moz-box-shadow: var(--moz-box-shadow);
    box-shadow: var(--box-shadow);

    .search-input {
        color: ${props => props.theme.colors.inputColor};
        background-color: ${props => props.theme.colors.backgroundColor};
        height: 100%;
        width: 100%;
    }

    .search-icon {
        margin: 0 20px;
    }



    @media (min-width: 660px) {
        .container-search {
            margin: 0 10px 0 0;
        }

    }
`

export default function SearchInput({searchCountry}) {
    return(
        <Search className='container-search'>
            <AiOutlineSearch className='search-icon' size={24}/>
            <input type='text' id='search-input' className='search-input'onChange={searchCountry} placeholder='Search for a country'/>
        </Search>
    )
}