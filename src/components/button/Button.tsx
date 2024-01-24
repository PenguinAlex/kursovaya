import React, {ButtonHTMLAttributes, FC} from 'react';
import styled from "styled-components";

interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    value: string
}

const Button: FC<InputProps> = ({value, ...props}) => {

    const ButtonWrapper = styled.button`
      border-radius: 6px;
      border: 3px solid #006D77;
      background: #006D77;
      color: #FFDDD2;
      height: 40px;
      width: 230px;
      margin-top: 32px;
    `

    return (
        <ButtonWrapper  {...props}>
            {value}
        </ButtonWrapper>
    );
};

export default Button;
