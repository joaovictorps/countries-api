import styled from 'styled-components';

const LabelStyled = styled.label`
    color: ${props => props.theme.color};
    font-weight: 800;

    span {
        font-weight: 400;
    }
`

export default function Label({title, values}) {
    function transformArrayToString() {
        if(typeof values === 'string') return values;
        
        if(values.length === 1) return values[0];
        
        let string;

        values.forEach(value =>{
            if(string === undefined) {
                string = value;

            } else {
                string= string + `, ${value}`;
            } 
        });
        return string;
    }

    return(
        <div>
            <LabelStyled>{title}: <span>{transformArrayToString()}</span></LabelStyled>
        </div>
    )
}