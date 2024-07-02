import { Label, StyledInput } from "./Input.styled";

interface TextAreaProps extends React.HtmlHTMLAttributes<HTMLInputElement> {
    label: string;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
    return (
        <div>
            <Label>{props.label}</Label>
            <StyledInput {...props} />
        </div>
    )
}

export default TextArea;