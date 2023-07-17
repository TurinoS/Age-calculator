import StyledForm from "@/styles/Form.style";
import Input from "./Input";
import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

export default function Form() {
    const { handleDay, handleMonth, handleYear, calcAge, futureDate, invalidDay, invalidMonth } = useContext(AppContext)

    const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userDay = event.target.value;
        handleDay(userDay);
    };
      
      const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userMonth = event.target.value;
        handleMonth(userMonth);
    };
      
      const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const userYear = event.target.value;
        handleYear(userYear);
    };
      
    return(
        <StyledForm onSubmit={calcAge}>
            {futureDate ? <p>Data inválida</p> : null}
            {invalidDay ? <p>dia inválido</p> : null}
            {invalidMonth ? <p>mês inválido</p> : null}
            <Input id="dia" placeholder="dd" maxLength={2} minLength={2} onChange={handleDayChange} />
            <Input id="mes" placeholder="mm" maxLength={2} minLength={2} onChange={handleMonthChange} />
            <Input id="ano" placeholder="aaaa" maxLength={4} minLength={4} onChange={handleYearChange} />
            <Button />
        </StyledForm>
    )
}