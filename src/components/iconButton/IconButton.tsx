import React, {ButtonHTMLAttributes, FC} from 'react';
import styled from "styled-components";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: string
    value?: string
}


const IconButton: FC<IconButtonProps> = ({icon, value, ...props}) => {
    const IconButtonWrapper = styled.button`
      background: none;
      border: none;
      margin-top: 10px;
      color: #FFDDD2;
      align-items: center;
      justify-content: center;
      display: flex;
      font-family: Inter, sans-serif;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    `
    const Icon = styled.img`
      margin-right: 8px;
    `
    return (
        <IconButtonWrapper {...props}>
            <Icon src={icon} alt='icon'/>
            {value}
        </IconButtonWrapper>
    );
};

export default IconButton;
