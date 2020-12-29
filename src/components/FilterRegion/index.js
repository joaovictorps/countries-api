import {FaAngleDown} from 'react-icons/fa';
import styled from 'styled-components';

const Filter = styled.div`
    width: 180px;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.backgroundColor};
    border-radius: 8px;
    color: ${props => props.theme.colors.color};
    height: 60px;
    -webkit-box-shadow: var(--webkit-box-shadow);
    -moz-box-shadow: var(--moz-box-shadow);
    box-shadow: var(--box-shadow);

    .title-filter {
        cursor: pointer;
        font-weight: 600;
        width: 100%;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .regions {
        padding: 10px 20px;
        background-color: ${props => props.theme.colors.backgroundColor};
        border-radius: 8px;
        width: 180px;
        position: absolute;
        -webkit-box-shadow: var(--webkit-box-shadow);
        -moz-box-shadow: var(--moz-box-shadow);
        box-shadow: var(--box-shadow);

        margin-top: 345px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .region {
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
        margin: 10px 0;
        color: ${props => props.theme.colors.color};
        background-color: ${props => props.theme.colors.backgroundColor};
    }

    .none {
        display: none;
    }
`

export default function FilterRegion({filter, handleRegions}) {

    return(
        <Filter id="container-filter">
            <div id='filter' onClick={handleRegions} className='title-filter'>
                <span id='title-filter'>Filter by Region</span>
                <FaAngleDown />
            </div>

            <div id='regions-filter' className='regions none'>
                <button className='region' onClick={filter} >All</button>
                <button className='region' onClick={filter} >Africa</button>
                <button className='region' onClick={filter}>Americas</button>
                <button className='region' onClick={filter}>Asia</button>
                <button className='region' onClick={filter}>Europe</button>
                <button className='region' onClick={filter}>Oceania</button>
            </div>
        </Filter>
    )
}