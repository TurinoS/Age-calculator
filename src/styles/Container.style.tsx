import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    margin: 15vh 25vw;
    height: 70vh;
    border-radius: 25px 25px 150px 25px;
    box-shadow: 15px 15px 30px 20px var(--black);

    @media (max-width: 980px) {
        margin: 15vh 15vw;
    }

    @media (max-width: 510px) {
        margin: 15vh 5vw;
    }
`

export default Container;