import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const InforWrap = styled.div`
    display: flex;
    padding-top: 24px;
`;
const LogoBox = styled.div`
    display: flex;
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
const ContentBox = styled.div`
    flex: 1 1;
    padding: 16px;
`;
const Title = styled.p`
    padding-bottom: 16px;
    font-size: 2rem;
`;
const StatsBox = styled.div`
    display: flex;
`;
const StatsList = styled.dl`
    display: flex;
    margin-right: 16px;
    font-size: 1.2rem;
`;
const StatsTitle = styled.dt`

`;
const StatsContent = styled.dd`
    padding-left: 16px;
`;
const ModifyBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const useStyles = makeStyles((theme) => ({
    ModifyButton: {
        marginBottom: '16px'
    },
}));

const CorporationInfor = () => {
    const classes = useStyles();

    return (
        <InforWrap>
            <LogoBox>
                <Logo src="../#" alt="logo" />
            </LogoBox>
            <ContentBox>
                <Title>내가 그린기린 그림</Title>
                <StatsBox>
                    <div>
                        <StatsList>
                            <StatsTitle>등록된 버그:</StatsTitle>
                            <StatsContent>20</StatsContent>
                        </StatsList>
                        <StatsList>
                            <StatsTitle>정산된 버그:</StatsTitle>
                            <StatsContent>10(입금대기)</StatsContent>
                        </StatsList>
                    </div>
                    <div>
                        <StatsList>
                            <StatsTitle>버그 지급율</StatsTitle>
                            <StatsContent>70%</StatsContent>
                        </StatsList>
                        <StatsList>
                            <StatsTitle>버그 채택율</StatsTitle>
                            <StatsContent>70%</StatsContent>
                        </StatsList>
                    </div>
                </StatsBox>
            </ContentBox>
            <ModifyBox>
                <Button className={classes.ModifyButton} variant="contained" color="primary">기업정보수정</Button>
                <Button variant="contained" color="secondary">프로젝트삭제</Button>
            </ModifyBox>
        </InforWrap>
    );
};

export default CorporationInfor;