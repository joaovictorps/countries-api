import {AiOutlineSearch} from 'react-icons/ai';
import './style.css';

export default function SearchInput() {
    return(
        <div className='container-search'>
            <AiOutlineSearch className='search-icon' size={24}/>
            <input type='text' id='search-input' className='search-input' placeholder='Search for a country'/>
        </div>
    )
}