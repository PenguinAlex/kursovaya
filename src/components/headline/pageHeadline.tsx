import {FC} from "react";
import styled from "styled-components";


interface PageHeadlineProps {
    value: string
}

const PageHeadline: FC<PageHeadlineProps> = ({value}) => {
    const HeadlineWrapper = styled.h1`
      margin: 16px 0;
      width: 100%;
      background: #83C5BE;
      padding: 16px 0;
      text-align: center;
      color: #FFF;
      font-family: Inter, sans-serif;
      font-size: 25px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    `
    return (

        <HeadlineWrapper>{value}</HeadlineWrapper>

    );
};

export default PageHeadline;
