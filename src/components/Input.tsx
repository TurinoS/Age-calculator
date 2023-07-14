import StyledInput from "@/styles/Input.style";

interface InputProps {
  id: string;
  placeholder: string;
  maxLength: number;
  minLength: number;
}

export default function Input({
  id,
  placeholder,
  maxLength,
  minLength,
}: InputProps) {
  return (
    <StyledInput>
        <label htmlFor={id}>{id}</label>
        <input
        type="number"
        id={id}
        name={id}
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        required
        />
    </StyledInput>
  );
}
