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
    top: 70px;
    right: 10px;

    @media (max-width: 660px) {
        top: -2vh;
        left: 25vw;
    }

    @media (max-width: 470px) {
        top: -2vh;
        left: 0vw;
    }

    &:hover {
        cursor: pointer;
        color: var(--bg-darker);
        background-image: radial-gradient(var(--bg-light) 60%, var(--white) 40%);
        transform: scale(1.05);
        transform-origin: center;
    }
`

export default StyledButton;