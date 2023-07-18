import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    gap: 3.5vw;
    border-bottom: 2px dashed var(--bg-dark);
    border-radius: 20px;
    padding: 1.5em 2em;
    width: 100%;

    @media (max-width: 660px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 150px;
        grid-template-rows: 90% 10%;
    }

    & p {
        color: red;
        position: absolute;
        width: 100px;
        top: 180px;
        right: 25vw;

        @media (max-width: 980px) {
            right: 15vw;
        }

        @media (max-width: 660px) {
            top: 235px;
            right: 20vw;
        }
    }
`

export default StyledForm;