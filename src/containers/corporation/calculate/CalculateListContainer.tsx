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
}));

const Profile = styled.img`
    width: 60px;
`;
const BugType = styled.p`
    color: ${(props:any) => props.color || '#000000'};
`;

interface indexItems {
    idx: Number;
    bugType: string;
    project: string;
    deadLineDate: string;
    writer: string;
    state: Number;
}

const CalculateListContainer = () => {
    const [calculateItems, setCalculateItems] = useState<calculateItems[]>([
        {idx: 0, profile: '/logo_1.png', bugType: '오타', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 1, profile: '/logo_1.png', bugType: '기능오류', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 2, profile: '/logo_1.png', bugType: '화면배치', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 3, profile: '/logo_1.png', bugType: '오타', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 4, profile: '/logo_1.png', bugType: '오타', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 5, profile: '/logo_1.png', bugType: '오타', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 6, profile: '/logo_1.png', bugType: '기능오류', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 7, profile: '/logo_1.png', bugType: '기능오류', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 8, profile: '/logo_1.png', bugType: '기능오류', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 9, profile: '/logo_1.png', bugType: '기능오류', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 10, profile: '/logo_1.png', bugType: '화면배치', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 11, profile: '/logo_1.png', bugType: '화면배치', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 12, profile: '/logo_1.png', bugType: '화면배치', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 13, profile: '/logo_1.png', bugType: '화면배치', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 14, profile: '/logo_1.png', bugType: '화면배치', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 15, profile: '/logo_1.png', bugType: '오타', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 16, profile: '/logo_1.png', bugType: '기능오류', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
        {idx: 17, profile: '/logo_1.png', bugType: '화면배치', project: '이미지보정 앱', deadLineDate: '2020/01/01', writer: 'jungjh', state: 0},
    ]);
    const classes = useStyles();
    return (
        <div>
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
                                <BugType color={'#000000'}>{row.bugType}</BugType>
                            </TableCell>
                            <TableCell align="center">{row.project}</TableCell>
                            <TableCell align="center">{row.deadLineDate}</TableCell>
                            <TableCell align="center">{row.writer}</TableCell>
                            <TableCell align="center">{row.state}</TableCell>
                        </TableRow>
                    )})}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default CalculateListContainer;