import styled from "styled-components";

const StyledInput = styled.div`
    display: flex;
    flex-direction: column;

    & label {
        text-transform: capitalize;
        font-size: 20px;
        font-weight: 600;
    }
    
    & input {
        padding: .5em .5em;
        font-size: 24px;
        width: 100%;
        border-radius: 10px;
        border: none;
        box-shadow: 2px 2px 4px 2px var(--bg-darker);

        &:focus {
            outline: none;
            border: none;
        }
    }

    &::placeholder {
        font-size: 24px;
    }
`

export default StyledInput;