import { forwardRef } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 60px;
  font-size: 1.4rem;
`;

const StyledInput = styled.input`
  padding: 6px 8px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  unicode-bidi: isolate;
`;

export const Input = forwardRef(
  ({ label, uniqueId, type, placeholder }, ref) => {
    return (
      <InputWrapper>
        <label htmlFor={uniqueId}>{label}</label>
        <StyledInput
          type={type}
          id={uniqueId}
          placeholder={placeholder}
          ref={ref}
        />
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";
