import StyledButton from "@/styles/Button.style";
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

export default function Button() {
    return(
        <StyledButton type="submit">
            <BsFillArrowDownCircleFill />
        </StyledButton>
    )
}