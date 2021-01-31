import { useState } from 'react';
import styled from 'styled-components';

const ItemWrap = styled.li`
    display: inline-block;
    padding: 16px;
    &:first-child {
        padding-left: 0;
    }
    &:last-child {
        padding-right: 0;
    }
`;
const LogoBox = styled.div`
    position: relative;
    display: flex;
    padding: 8px;
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;
    background-color: #123123;
    border-radius: 16px;
`;
const Logo = styled.img`

`;
const BugStateBox = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 8px;
    text-align: right;
    color: #ffffff;
    font-weight: 500;
    font-size: 0.875rem;
    border-radius: 0 0 16px 16px;
    background-color: rgba(0, 0, 0, 0.3);
`;
const ProjectName = styled.p`
    display: flex;
    justify-content: center;
    padding: 8px 0;
    font-size: 1rem;
`;
const toDay = new Date();
const CorporationItem = ({...props}) => {
    const [count, setCount] = useState(0);
    console.log(props.closingDate);
    return (
        <>
            <ItemWrap>
                <LogoBox>
                    <img src={props.projectLogo} alt="Logo"/>
                    <BugStateBox>
                        <p>등록된 버그: {props.registerBugCount}</p>
                        <p>채택된 버그: {props.adoptBugCount}</p>
                    </BugStateBox>
                </LogoBox>
                <ProjectName>{props.projectName} - {props.closingDate}일 남음</ProjectName>
            </ItemWrap>
        </>
    );
};

export default CorporationItem;