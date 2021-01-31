import styled from "styled-components";
// mui
import { Avatar, Button } from '@material-ui/core';

const Li = styled.li`
    border: 1px solid grey;
    background-color: #FFF;
    border-radius: 10px;
    margin-top:10px;
    &:first-child{margin-top:0px;}
    padding: 5px;
    &:after{content:'';display:block;clear: both;}
`;
interface ColProps {
    width?: string;
}
const Col = styled.div<ColProps>`
    text-align:center;
    height:42px;
    vertical-align: bottom;
    width:${(props:any) => props.width || '20%'};
    float:left;
`;

interface TextBoxProps {
    lineHeight?: string;
}
const TextBox = styled.span<TextBoxProps>`
    display: block;
    line-height: ${(props:any) => props.lineHeight};
`;

const Emp = styled.strong`
    color: ${(props:any) => props.color};
`;
interface MyLiProps {
    liData: any;
    key: string
};

const MyLi = ({ liData }: MyLiProps) => {
    return (
        <Li>
            <Col width="10%">
                <Avatar alt="img" src="/img_notfound.png" />
            </Col>
            <Col width="20%">
                <TextBox><Emp>2011/02/23</Emp></TextBox>
                <TextBox><Emp color="green">300원</Emp></TextBox>
            </Col>
            <Col width="10%">
                <TextBox lineHeight="42px"><Emp>오타</Emp></TextBox>
            </Col>
            <Col width="40%">
                <TextBox lineHeight="42px">"아예 동작을 안하던데요?"</TextBox>
            </Col>
            <Col width="20%">
                <Button color="primary" variant="contained" size="small" style={{ marginTop: '6px' }}>미확인</Button>
            </Col>
        </Li>
    )
};

export default MyLi;