import { Rowing } from '@material-ui/icons';
import  Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryItem from '../../components/index/categoryItem';

interface ProjectProps {
    href: string;
    idx: Number;
    corporationName: string;
    projectName: string;
    participants: Number;
    price: Number;
    closingDate: string;
}

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 128px;
    max-width: 1304px;
`;
const Title = styled.p`
    padding: 0 10px;
    font-size: 30px;
`;
const ProjectList = styled.ul`
    font-size: 0;
`;
const Project = ({href, idx, corporationName, projectName, participants, price, closingDate}: ProjectProps) => {
    const Project = styled.li`
        display: inline-block;
        margin: 10px;
        padding: 30px 28px 24px;
        width: 306px;
        background-color: #fbfbff;
    `;
    const Link = styled.a`
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
        color: #ed7d7d;
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
    return (
        <Project>
            <div></div>
            <Link href={href} passHref>
                <CorporationName>{corporationName}</CorporationName>
                <ProjectName>{projectName}</ProjectName>
                <Participants><img /><span>{participants}</span>명 참여중</Participants>
                <ClosingDate>{closingDate} 종료<Checker /></ClosingDate>
            </Link>
        </Project>
    )
}
const Projects = () => {
    const [projectItems, setProjectItems] = useState<ProjectProps[]>([
        {idx: 0, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 30000, closingDate: '2021-12-31'},
        {idx: 1, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-30'},
        {idx: 2, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 10000, closingDate: '2021-12-29'},
        {idx: 3, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-28'},
        {idx: 4, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 30000, closingDate: '2021-12-31'},
        {idx: 5, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-30'},
        {idx: 6, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 10000, closingDate: '2021-12-29'},
        {idx: 7, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-28'},
        {idx: 8, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 30000, closingDate: '2021-12-31'},
        {idx: 9, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-30'},
        {idx: 10, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 10000, closingDate: '2021-12-29'},
        {idx: 11, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-28'},
        {idx: 12, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 30000, closingDate: '2021-12-31'},
        {idx: 13, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-30'},
        {idx: 14, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 10000, closingDate: '2021-12-29'},
        {idx: 15, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-28'},
        {idx: 16, href: '#', corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-28'},
    ]);

    return (
        <>
            <Wrap>
                <Title>새로운 프로젝트</Title>
                <ProjectList >
                    {projectItems.map((row, index) =>
                        <Project key={`${index}_key`} href={row.href} idx={row.idx} corporationName={row.corporationName} projectName={row.projectName} participants={row.participants} price={row.price} closingDate={row.closingDate} />
                    )}
                </ProjectList>
                {/* <ul>
                    {indexItems.map((row, index) =>
                        <CategoryItem key={`${index}_key`} href={row.href} corporationName={row.corporationName} projectName={row.projectName} price={row.price} closingDate={row.closingDate} />
                    )}
                </ul> */}
            </Wrap>
        </>
    );
};

export default Projects;