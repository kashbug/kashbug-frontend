import React, { useState } from 'react';
import styled from "styled-components";
// mui
import { Button, Tooltip } from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
// component
import MyLi from './MyLi';

const Wrap = styled.div`
    padding-top:90px;
`;
const MyInfo = styled.div`
    &:after{content:'';display:block;clear: both;}
`;
interface ColProps {
    width?: string;
}
const Col = styled.div<ColProps>`
    width:${(props:any) => props.width || '20%'};
    height:150px;
    float:left;
`;
const ListWrap = styled.div`
    position: relative;
    background-color: green;
    margin-top:30px;
    padding: 20px;
`;
const CategoryBtn = styled.h3`
    position: absolute;
    background-color:green;
    border-radius: 10px 10px 0 0;
    padding: 5px;
    color: #fff;
    left:0;
    top:-40px;
`;
const UL = styled.ul`
    list-style:none;
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
        { id: 1, content: '1' },
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
                            <Tooltip title="보상받을 계좌를 등록하시려면 계좌등록 버튼을 클릭하세요." style={{ verticalAlign: 'middle' }} placement="top-start">
                                <ContactSupportIcon />
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
                <UL>
                    {listStatus.map((v, i) => (<MyLi key={`key_${i}`} liData={v}/>))}
                </UL>
            </ListWrap>
        </Wrap>
    )
};

export default MyContainer;