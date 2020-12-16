import React from 'react';
import {BiMoon} from 'react-icons/bi';
import './style.css';

export default function Header() {
    return(
        <header id='header'>
            <div>
                <h1>Where in the world?</h1>
                <span><BiMoon className='moon' /> Dark Mode</span>

            </div>
        </header>
    )
}