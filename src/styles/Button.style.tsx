import styled from "styled-components";

const StyledButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background-color: var(--white);
    color: var(--bg-dark);
    font-size: 60px;
    position: relative;
    top: 65px;
    right: 10px;

    &:hover {
        cursor: pointer;
        color: var(--bg-darker);
        background-image: radial-gradient(var(--bg-light) 60%, var(--white) 40%);
    }
`

export default StyledButton;