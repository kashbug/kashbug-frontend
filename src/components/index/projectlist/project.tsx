import Link from 'next/link';
import styled from 'styled-components';

const ProjectBox = styled.li`
    display: inline-block;
    margin: 10px;
    :after {
        content: '';
        display: inline-block;
        height: 200px;
        vertical-align: middle;
    }
`;
const Level = styled.div`
    display: inline-block;
    width: 6px;
    height: 200px;
    vertical-align: middle;
    background-color: ${(props) => props.background || '#ffa44b'};
`;
const ProjectItem = styled.a`
    display: inline-block;
    padding: 30px 28px 24px;
    width: 300px;
    vertical-align: middle;
    background-color: #fbfbff;
`;
const CorporationName = styled.p`
    font-size: 14px;
    color: #bbbbbb;
`;
const ProjectName = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #171717;
`;
const Participants = styled.p`
    margin-top: 16px;
    font-size: 14px;
    color: #919191;
`;
const ClosingDate = styled.p`
    position: relative;
    margin-top: 44px;
    font-size: 14px;
    color: ${(props) => props.color || "#bababa"}; 
`;
const Checker = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background-color: #2ecc71;
`;

const Project = ({...props}) => {
    const getDateStr = () => {
        const today = new Date();
        const dayOfMonth = today.getDate();
        today.setDate(dayOfMonth + 7);
        const year = today.getFullYear();
        const month = today.getMonth() + 1 > 9 ? today.getMonth() + 1 : '0' + (today.getMonth() + 1);
        const date = today.getDate() > 9 ? today.getDate() : '0' + today.getDate();
        return (year + '-' + month + '-' + date);
    }
    const today = new Date(getDateStr());
    const testDate = new Date(props.closingDate);
    const diffTime = today.getTime() - testDate.getTime();
    const closingDate = diffTime < 0 ? '#bababa' : '#ed7d7d';
    return (
        <ProjectBox>
            <Level background={props.level}></Level>
            <Link href={props.href} passHref>
                <ProjectItem>
                    <CorporationName>{props.corporationName}</CorporationName>
                    <ProjectName>{props.projectName}</ProjectName>
                    <Participants><img /><span>{props.participants}</span>명 참여중</Participants>
                    <ClosingDate color={closingDate}>{props.closingDate} 종료<Checker /></ClosingDate>
                </ProjectItem>
            </Link>
        </ProjectBox>
    )
}

export default Project;