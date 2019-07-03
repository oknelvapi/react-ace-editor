import styled from 'styled-components';

export const Button = styled.button`
        position: absolute;
        top: 0;
        right: ${props => props.save ? "32px" : "0"};
        border: none;
        background-color: inherit;
        z-index: 10;
        color: grey;
        :hover {
            color: black;
        }
        :focus {
            outline: none;
        }
    `;