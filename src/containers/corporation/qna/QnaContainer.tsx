import React, { useState } from 'react';
import styled from 'styled-components';
// mui
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const WrapDiv = styled.div`
    margin-top: 64px;
`;
const PageTitle = styled.p`
    padding: 24px 0;
    font-size: 1.5rem;
`;

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

interface qnaItems {
    idx: Number;
    writer: string;
    category: string;
    title: string;
    registrationDate: string;
}

const QnaContainer = () => {
    const classes = useStyles();
    const [qnaItems, setQnaItems] = useState<qnaItems[]>([
        {idx: 0, writer: '정준희', category: '기티', title: '보상 언제 주나요', registrationDate: '2021-12-31'},
        {idx: 1, writer: '준희', category: '금액', title: '보상 언제?', registrationDate: '2021-12-31'},
        {idx: 2, writer: '희', category: '버그', title: '보상 언제 주나요?', registrationDate: '2021-12-31'},
        {idx: 3, writer: '정준희', category: '기타', title: '보상?', registrationDate: '2021-12-31'},
        
    ]);
    return (
        <WrapDiv>
            <PageTitle>Q&A 리스트</PageTitle>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center" component="th">작성자</TableCell>
                        <TableCell align="center" component="th">구분</TableCell>
                        <TableCell align="center" component="th">제목</TableCell>
                        <TableCell align="center" component="th">등록일</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {qnaItems.map((row, index) => (
                        <TableRow key={`${index}_key`}>
                            <TableCell align="center">{row.idx}</TableCell>
                            <TableCell align="center">{row.writer}</TableCell>
                            <TableCell align="center">{row.category}</TableCell>
                            <TableCell align="center">{row.title}</TableCell>
                            <TableCell align="center">{row.registrationDate}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </WrapDiv>
    );
};

export default QnaContainer;