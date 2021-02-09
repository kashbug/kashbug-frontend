import React, { useState } from 'react';
import styled from 'styled-components';
// mui
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    leftContent: {
        flex: '1 1',
        marginRight: '16px'
    },
    rightContent: {
        flex: '1 1',
        marginLeft: '16px'
    },
    content: {
        flex: '1 1',
    },
    submitBtn: {
        margin: '0 8px',
        '&:first-child': {
            marginLeft: '0'
        },
        '&:last-child': {
            marginRight: '0'
        }
    }
}));

const ContentBox = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 24px;
`;
const ImgBox = styled.div`
    display: flex;
    padding-bottom: 24px;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const BugImg = styled.img`
    width: calc(50% - 16px);
    padding-bottom: 8px;
`;

interface calculateItem {
    idx: Number;
    profile: String;
    bugType: Number;
    project: String;
    deadLineDate: String;
    writer: String;
    accountNumber: String;
    title: String;
    content: String;
    state: Number;
}

const CalculateDetailContainer = () => {
    const [calculateItem, setCalculateItem] = useState<calculateItem>({
        idx: 0,
        profile: '/logo_1.png',
        bugType: 0,
        project: '이미지보정 앱',
        deadLineDate: '2020/01/01',
        writer: 'jungjh',
        accountNumber: '국민 213******-**-*******',
        title: '뒤로 가기 누루니 404 뜹니다.',
        content: '제가 메인 페이지에서 뒤로가기 하니 에러가 뜹니다.',
        state: 0
    });
    const classes = useStyles();
    return (
        <>
            <ContentBox>
                <TextField className={classes.leftContent} label="작성자" value={calculateItem.writer} disabled/>
                <TextField className={classes.rightContent} label="계좌 번호" value={calculateItem.accountNumber} disabled/>
            </ContentBox>
            <ContentBox>
                <TextField className={classes.leftContent} label="프로젝트" value={calculateItem.project} disabled/>
                {calculateItem.bugType === 0 && <TextField className={classes.rightContent} label="카테고리" value="오타" disabled/>}
                {calculateItem.bugType === 1 && <TextField className={classes.rightContent} label="카테고리" value="기능오류" disabled/>}
                {calculateItem.bugType === 2 && <TextField className={classes.rightContent} label="카테고리" value="화면배치" disabled/>}
            </ContentBox>
            <ContentBox>
                <TextField className={classes.leftContent} label="제목" value={calculateItem.title} disabled/>
                <TextField className={classes.rightContent} label="등록일" value={calculateItem.deadLineDate} disabled/>
            </ContentBox>
            <ContentBox>
                <TextField className={classes.content} label="내용" value={calculateItem.content} multiline disabled/>
            </ContentBox>
            <ImgBox>
                <BugImg src="/img_notfound.png" alt="#" />
                <BugImg src="/img_notfound.png" alt="#" />
                <BugImg src="/img_notfound.png" alt="#" />
            </ImgBox>
            <ContentBox>
                <Button className={classes.submitBtn} variant="contained" color="primary">입금완료</Button>
                <Button className={classes.submitBtn} variant="contained" color="secondary">취소</Button>
            </ContentBox>
        </>
    );
};

export default CalculateDetailContainer;