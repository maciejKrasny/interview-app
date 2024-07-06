import React, { Children } from "react";
import { StyledOption, StyledSelect } from "./Select.styled";

export interface SelectOptionProps {
    label: string;
    value: string;
    test?: boolean;
}

type SelectProps = Omit<React.HTMLAttributes<HTMLSelectElement>, 'onSelect'> & {
    onSelect: (data: string) => void;
}

export const SelectOption: React.FC<SelectOptionProps> = ({ label, value }) => {
    return (
        <StyledOption value={value}>{label}</StyledOption>
    )
}

const Select: React.FC<SelectProps> = ({ children, onSelect }) => {
    const handleOnSelect: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        onSelect(event.target.value);
    }
    return (
        <StyledSelect onChange={handleOnSelect}>
            {Children.map(children, (child) => (
                React.isValidElement<SelectOptionProps>(child) && (
                    React.cloneElement(child, {
                        ...child.props,
                        test: true,
                    })
                )
            ))}
        </StyledSelect>
    )
}

export default Select;