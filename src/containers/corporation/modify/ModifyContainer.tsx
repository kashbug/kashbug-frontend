import React, { useState } from 'react';
import styled from 'styled-components';
// mui
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// component


const WrapDiv = styled.div`
	padding-top: 128px;
`;
const OutlienBox = styled.div`
    display: flex;
`;
const LogoBox = styled.div`
    display: inline-flex;
    padding: 8px;
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;
    background-color: #cccccc;
    border-radius: 16px;
`;
const Logo = styled.img`
`;
const TopBox = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1 1;
    padding-left: 24px;
`;
const TextBox = styled.div`
    display: flex;
    padding-top: 24px;
`;

const useStyles = makeStyles((theme) => ({
    oneCol: {
        flex: '1 1'
    },
    towCol: {
        marginRight: 16,
        flex: '1 1'
    },
}));

const QnaContainer = () => {
    const classes = useStyles();
    return (
        <WrapDiv>
            <OutlienBox>
                <LogoBox>
                    <Logo src="../#" alt="logo" />
                </LogoBox>
                <TopBox>
                    <TextField label="기업명" placeholder="기업명" />
                    <OutlienBox>
                        <TextField className={classes.towCol} label="사업자 번호" placeholder="사업자 번호" />
                        <TextField className={classes.towCol} label="대표 번호" placeholder="대표 번호"/>
                    </OutlienBox>
                </TopBox>
            </OutlienBox>
            <TextBox>
                <TextField className={classes.towCol} label="회사 사이트 주소" placeholder="회사 사이트 주소" />
                <TextField className={classes.towCol} label="기업 이메일" placeholder="기업 이메일" />
            </TextBox>
            <TextBox>
                <TextField
                    className={classes.oneCol}
                    label="회사소개"
                    multiline
                    rows={4}
                    placeholder="안녕하세요."
                />
            </TextBox>
        </WrapDiv>
    );
};

export default QnaContainer;