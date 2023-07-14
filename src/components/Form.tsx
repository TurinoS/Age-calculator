import StyledForm from "@/styles/Form.style";
import Input from "./Input";
import Button from "./Button";

export default function Form() {
    return(
        <StyledForm>
            <Input id="dia" placeholder="dd" maxLength={2} minLength={2} />
            <Input id="mes" placeholder="mm" maxLength={2} minLength={2} />
            <Input id="ano" placeholder="aaaa" maxLength={4} minLength={4} />
            <Button />
        </StyledForm>
    )
}