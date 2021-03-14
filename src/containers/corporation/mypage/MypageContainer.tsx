import React, { useState } from 'react';
import styled from 'styled-components';
import CorporationInfor from '../../../components/mypage/CorporationInfor';
import CorporationItem from '../../../components/mypage/CorporationItem';

const ProjectBox = styled.ul`
    margin-top: 64px;
`;
interface indexItems {
    idx: Number;
    projectLogo: string;
    projectName: string;
    price: Number;
    closingDate: string;
    registerBugCount: Number;
    adoptBugCount: Number;
}

const MypageContainer = () => {
    const [projectItems, setProjectItems] = useState<indexItems[]>([
        {idx: 0, projectLogo: '../#', projectName: '야구게임', price: 30000, closingDate: '2021-12-31', registerBugCount: 2, adoptBugCount: 3},
        {idx: 1, projectLogo: '../#', projectName: '축구게임', price: 20000, closingDate: '2021-12-30', registerBugCount: 2, adoptBugCount: 3},
        {idx: 2, projectLogo: '../#', projectName: '배구게임', price: 10000, closingDate: '2021-12-29', registerBugCount: 2, adoptBugCount: 3},
        {idx: 3, projectLogo: '../#', projectName: '농구게임', price: 20000, closingDate: '2021-12-28', registerBugCount: 2, adoptBugCount: 3},
    ]);

    return (
        <div>
            <CorporationInfor />
            <ProjectBox>
            {projectItems.map((row, index) =>
                <CorporationItem
                    key={`${index}_key`}
                    projectLogo={row.projectLogo}
                    projectName={row.projectName}
                    price={row.price}
                    closingDate={row.closingDate}
                    registerBugCount={row.registerBugCount}
                    adoptBugCount={row.adoptBugCount}
                />
            )}
            </ProjectBox>
        </div>
    );
};

export default MypageContainer;