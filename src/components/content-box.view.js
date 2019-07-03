import styled from 'styled-components';

export default {
    Main: styled.main`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 16px;
        @media (max-width: 1444px){
                flex-direction: column;
            }
    `,
    Field: styled.div`
        padding: 6px;
        margin: 3px;
        position: relative;
        border: 1px solid silver;
        visibility: ${props => props.opened ? "visible" : "hidden"};
    `,
}