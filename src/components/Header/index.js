import React from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';
import styled from 'styled-components';

const Head = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    -webkit-box-shadow: var(--webkit-box-shadow);
    -moz-box-shadow: var(--moz-box-shadow);
    box-shadow: var(--box-shadow);

    div {
        padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1400px;
    }

    div > h1 {
        font-weight: 800;
        font-size: 16px;
    }

    div > span {
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 600;
        width: auto;
    }

    @media (min-width: 660px) {
        div > h1 {
            font-size: 24px;
        }
    
        div > span {
            width: 130px;
            font-size: 20px;
            justify-content: space-between;
        }
    }
`

export default function Header({toggleTheme, theme, themes}) {
    return (
        <Head id='header'>
            <div>
                <h1>Where in the world?</h1>
                    {theme === themes.dark ? <span onClick={toggleTheme}>
                    <BiSun className='moon' /> Light Mode
                </span> : <span onClick={toggleTheme}>
                    <BiMoon className='moon' /> Dark Mode
                </span>}
                

            </div>
        </Head>
    )
}