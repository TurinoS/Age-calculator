import styled from "styled-components";

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: space-evenly;
    padding: 3em;

    
    @media (max-width: 400px) {
        padding: 1.5em;
    }
    
    & h2 {
        font-size: 64px;

        @media (max-width: 400px) {
            font-size: 56px;
        }
    }

    & span {
        color: var(--bg-darker);
    }
`

export default StyledSection;