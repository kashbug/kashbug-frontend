import React, { useState } from 'react';
import styled from 'styled-components';
import Project from '../../components/index/projectlist/project';

interface ProjectProps {
    href: string;
    idx: Number;
    level: Number;
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
const Projects = () => {
    const [projectItems, setProjectItems] = useState<ProjectProps[]>([
        {idx: 0, href: '#', level: 1, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 30000, closingDate: '2021-12-31'},
        {idx: 1, href: '#', level: 2, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-30'},
        {idx: 2, href: '#', level: 3, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 10000, closingDate: '2021-12-29'},
        {idx: 3, href: '#', level: 1, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-28'},
        {idx: 4, href: '#', level: 1, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 30000, closingDate: '2021-12-31'},
        {idx: 5, href: '#', level: 1, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-30'},
        {idx: 6, href: '#', level: 1, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 10000, closingDate: '2021-12-29'},
        {idx: 7, href: '#', level: 1, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-28'},
        {idx: 8, href: '#', level: 1, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 30000, closingDate: '2021-12-31'},
        {idx: 9, href: '#', level: 1, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-30'},
        {idx: 10, href: '#', level: 2, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 10000, closingDate: '2021-12-29'},
        {idx: 11, href: '#', level: 2, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-12-28'},
        {idx: 12, href: '#', level: 2, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 30000, closingDate: '2021-12-31'},
        {idx: 13, href: '#', level: 2, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2020-12-30'},
        {idx: 14, href: '#', level: 2, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 10000, closingDate: '2020-12-29'},
        {idx: 15, href: '#', level: 3, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 10000, closingDate: '2021-03-13'},
        {idx: 16, href: '#', level: 3, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 10000, closingDate: '2021-03-12'},
        {idx: 17, href: '#', level: 2, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-02-27'},
        {idx: 18, href: '#', level: 2, corporationName: '카카오게임즈', projectName: '[카카오르막] 새로운 프로젝트', participants: 3, price: 20000, closingDate: '2021-03-06'},
    ]);

    return (
        <>
            <Wrap>
                <Title>새로운 프로젝트</Title>
                <ProjectList>
                    {projectItems.map((row, index) => {
                        let level = '';
                        if (row.level === 1) {
                            level = '#ffe488';
                        } else if (row.level === 2) {
                            level = '#ffa44b';
                        } else if (row.level === 3) {
                            level = '#ed7d7d';
                        }
                        return <Project key={`${index}_key`} href={row.href} idx={row.idx} level={level} corporationName={row.corporationName} projectName={row.projectName} participants={row.participants} price={row.price} closingDate={row.closingDate} />
                    })}
                </ProjectList>
            </Wrap>
        </>
    );
};

export default Projects;