import {FaAngleDown} from 'react-icons/fa';
import './style.css';

export default function FilterRegion() {

    function handleRegions() {
        let regions = document.getElementById('regions-filter');

        if(regions.classList.contains('none')){
            regions.classList.remove('none');
        } else {
            regions.classList.add('none');
        }
    }

    return(
        <div id="container-filter">
            <div id='filter' onClick={handleRegions} className='title-filter'>
                <span id='title-filter'>Filter by Region</span>
                <FaAngleDown />
            </div>

            <div id='regions-filter' className='regions none'>
                <button className='region' value="Africa" >Africa</button>
                <button className='region' value="America" >America</button>
                <button className='region' value="Asia">Asia</button>
                <button className='region' value="Europe">Europe</button>
                <button className='region' value="Oceania">Oceania</button>
            </div>
        </div>
    )
}