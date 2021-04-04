import Link from 'next/link';
import styled from 'styled-components';

interface LevelProps {
    bgc?: String;
}

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
const Level = styled.div<LevelProps>`
    display: inline-block;
    width: 6px;
    height: 200px;
    vertical-align: middle;
    background-color: ${(props:any) => props.bgc || '#ffa44b'};
`;
const ProjectItem = styled.div`
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

const CheckerInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
`;
const CheckLabel = styled.label`
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
`;
const CheckImg = styled.img`
    width: 24px;
    height: 24px;
    color: #ffffff;
`;
const Checker = ({...props}) => {
    const img = props.checker === '1' ? '/service-fill.svg' : '/service-line.svg';
    return (
        <CheckLabel>
            <CheckerInput type="checkbox" />
            <CheckImg src={img} alt="like-checker" />
        </CheckLabel>
    )
}

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
            <Level bgc={props.level}></Level>
                <ProjectItem>
                    <Link href={props.href} passHref>
                        <a>
                            <CorporationName>{props.corporationName}</CorporationName>
                            <ProjectName>{props.projectName}</ProjectName>
                        </a>
                    </Link>
                    <Participants><img /><span>{props.participants}</span>명 참여중</Participants>
                    <ClosingDate color={closingDate}>{props.closingDate} 종료<Checker checker={props.checker}/></ClosingDate>
                </ProjectItem>
        </ProjectBox>
    )
}

export default Project;