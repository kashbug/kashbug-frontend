import React, { useState } from 'react';
import styled from "styled-components";
// mui
import { Button, Tooltip } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
// component
import MyLi from './MyLi';

const Wrap = styled.div`

`;
const MyInfo = styled.div`
    padding-top: 50px;
    &:after{content:'';display:block;clear: both;}
`;
interface ColProps {
    width?: string;
};
const Col = styled.div<ColProps>`
    width:${(props:any) => props.width || '20%'};
    height:150px;
    float:left;
`;
const ListWrap = styled.div`
    position: relative;
    background-color: #56A902;
    margin-top:60px;
    padding: 20px;
`;
interface ColProps {
    color?: string;
    textColor?: string;
    left?: string;
};
const CategoryBtn = styled.h4<ColProps>`
    position: absolute;
    background-color:${(props:any) => props.color || '#56A902'};
    border-radius: 10px 10px 0 0;
    padding: 15px;
    color: ${(props:any) => props.textColor || '#fff'};
    left:${(props: any) => props.left || 0};
    top:-55px;
    z-index: -100;
`;
const UL = styled.ul`
    list-style:none;
    height: 400px;
    overflow: auto;
`;
const Img = styled.span`
    text-align: center;
    display: block;
    border-radius: 7px;
    width:170px;
    height: 150px;
    border: 1px solid #000;
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
const MyContainer = () => {
    const [listStatus, setListStatus] = useState([
        { id: 1, content: '1', type: '1' },
        { id: 2, content: '2', type: '2' },
        { id: 2, content: '2', type: '3' },
        { id: 2, content: '2', type: '4' },
        { id: 2, content: '2' },
        { id: 2, content: '2' },
        { id: 2, content: '2' },
        { id: 2, content: '2' },
        { id: 2, content: '2' },
        { id: 2, content: '2' },
    ])
    return (
        <Wrap>
            <MyInfo>
                <Col width="20%">
                    <Img>사진 없음</Img>
                </Col>
                <Col width="20%">
                    <strong>jeongh389</strong>
                    <TextBox style={{ marginTop: '45px' }}>받은 상금:<Emp color="green"> 3,000원</Emp></TextBox>
                    <TextBox>등록한 버그:<Emp color="#0054FF"> 3</Emp></TextBox>
                    <TextBox>채택된 버그:<Emp color="#0054FF"> 3</Emp></TextBox>
                    <TextBox>보상된 버그:<Emp color="#0054FF"> 3</Emp></TextBox>
                </Col>
                <Col width="40%">
                    <TextBox style={{ marginTop: '61px' }}>등록된 계좌:
                        <Emp color="#FF0000">없음
                            <Tooltip title="보상받을 계좌를 등록하시려면 계좌등록 버튼을 클릭하세요." style={{ verticalAlign: 'middle' }} placement="top">
                                <HelpIcon />
                            </Tooltip>
                        </Emp>
                    </TextBox>
                </Col>
                <Col width="20%">
                    <Button color="primary" variant="contained" size="small">회원정보 수정</Button><br />
                    <Button color="primary" variant="contained" size="small" style={{ marginTop: '10px' }}>계좌등록 하기</Button>
                </Col>
            </MyInfo>
            <ListWrap>
                <CategoryBtn>등록한 버그</CategoryBtn>
                <CategoryBtn left="95px" color="#D5D5D5" textColor="#000">보상 내역</CategoryBtn>
                <UL>
                    {listStatus.map((v, i) => (<MyLi key={`key_${i}`} liData={v}/>))}
                </UL>
            </ListWrap>
        </Wrap>
    )
};

export default MyContainer;