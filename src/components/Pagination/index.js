import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
    color: ${props => props.theme.colors.color};
    max-width: 1400px;
    min-width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 20px;

     > li {
        cursor: pointer;
        text-align: center;
        width: 25px;
        border-bottom: 1px solid rgba(0,0,0,0);
    }
     > li:hover, .actived {
        border-bottom: 1px solid ${props => props.theme.colors.color};
     }
`

const Pagination = ({ countriesPerPage, totalCountries, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return(
        <nav>
            <Ul>
                {pageNumbers.map(number => (
                    <li key={number} >
                        <a onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </li>
                ))}
            </Ul>
        </nav>
    )
}

export default Pagination;