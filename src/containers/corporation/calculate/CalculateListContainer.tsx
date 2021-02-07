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

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    unidentifiedCell: {
        backgroundColor: '#ffeb3b'
    },
}));

const CompensationRate = styled.p`
    text-align: right;
`;
const Rate = styled.span`
    color: ${(props:any) => props.color || '#ff1744'};
`;
const Profile = styled.img`
    width: 60px;
`;
const BugType = styled.p`
    color: ${(props:any) => props.color || '#000000'};
`;
const Cell = styled.p`
    display: inline;
    padding: 4px 8px;
    background-color: ${(props:any) => props.bgc || ''};
    border-radius: 16px;
`;

interface calculateItems {
    idx: Number;
    profile: String;
    bugType: Number;
    project: String;
    deadLineDate: String;
    writer: String;
    state: Number;
}

const CalculateListContainer = () => {
    const [calculateItems, setCalculateItems] = useState<calculateItems[]>([
        {idx: 0, profile: '/logo_1.png', bugType: 0, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 1, profile: '/logo_1.png', bugType: 1, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 1},
        {idx: 2, profile: '/logo_1.png', bugType: 2, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 2},
        {idx: 3, profile: '/logo_1.png', bugType: 0, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 3},
        {idx: 4, profile: '/logo_1.png', bugType: 0, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 4},
        {idx: 5, profile: '/logo_1.png', bugType: 0, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 5},
        {idx: 6, profile: '/logo_1.png', bugType: 1, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 7, profile: '/logo_1.png', bugType: 1, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 1},
        {idx: 8, profile: '/logo_1.png', bugType: 1, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 2},
        {idx: 9, profile: '/logo_1.png', bugType: 1, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 3},
        {idx: 10, profile: '/logo_1.png', bugType: 2, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 4},
        {idx: 11, profile: '/logo_1.png', bugType: 2, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 5},
        {idx: 12, profile: '/logo_1.png', bugType: 2, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 13, profile: '/logo_1.png', bugType: 2, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 1},
        {idx: 14, profile: '/logo_1.png', bugType: 2, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 2},
        {idx: 15, profile: '/logo_1.png', bugType: 0, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 3},
        {idx: 16, profile: '/logo_1.png', bugType: 1, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 4},
        {idx: 17, profile: '/logo_1.png', bugType: 2, project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 5},
    ]);
    const classes = useStyles();
    return (
        <div>
            <CompensationRate>보상 지급율: <Rate>70%</Rate></CompensationRate>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">프로필</TableCell>
                            <TableCell align="center">버그 종류</TableCell>
                            <TableCell align="center">프로젝트</TableCell>
                            <TableCell align="center">입금 마감일</TableCell>
                            <TableCell align="center">작성자</TableCell>
                            <TableCell align="center">상태</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {calculateItems.map((row, index) => {
                    return (
                        <TableRow key={`${index}_key`}>
                            <TableCell align="center">
                                <Profile src={row.profile} alt="profile"/>
                            </TableCell>
                            <TableCell align="center">
                                {row.bugType === 0 && <BugType>오타</BugType>}
                                {row.bugType === 1 && <BugType>기능오류</BugType>}
                                {row.bugType === 2 && <BugType>화면배치</BugType>}
                            </TableCell>
                            <TableCell align="center">{row.project}</TableCell>
                            <TableCell align="center">{row.deadLineDate}</TableCell>
                            <TableCell align="center">{row.writer}</TableCell>
                            <TableCell align="center">
                                {row.state === 0 && <Cell bgc={'#ffeb3b'}>미확인</Cell>}
                                {row.state === 1 && <Cell bgc={'#c6ff00'}>입금대기</Cell>}
                                {row.state === 2 && <Cell bgc={'#8ab200'}>채택</Cell>}
                                {row.state === 3 && <Cell bgc={'#52b202'}>입금완료</Cell>}
                                {row.state === 4 && <Cell bgc={'#b2102f'}>입금기한지남</Cell>}
                                {row.state === 5 && <Cell bgc={'#ff1744'}>거절</Cell>}
                            </TableCell>
                        </TableRow>
                    )})}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default CalculateListContainer;