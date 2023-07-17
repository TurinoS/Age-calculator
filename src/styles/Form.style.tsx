import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    gap: 3.5vw;
    border-bottom: 2px dashed var(--bg-dark);
    border-radius: 20px;
    padding: 1.5em 2em;
    width: 50vw;

    & p {
        color: red;
        position: absolute;
        top: 26vh;
        right: 26.5vw;
    }
`

export default StyledForm;