import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryItem from '../../components/index/CategoryItem';

const IndexListWrap = styled.ul`
    margin-top: 60px;
`;

interface indexItems {
    idx: Number;
    projectLogo: string;
    projectName: string;
    price: Number;
    closingDate: string;
}

const IndexContainer = () => {
    const [indexItems, setIndexItems] = useState<indexItems[]>([
        {idx: 0, projectLogo: '../#', projectName: '야구게임', price: 30000, closingDate: '2021-12-31'},
        {idx: 1, projectLogo: '../#', projectName: '축구게임', price: 20000, closingDate: '2021-12-30'},
        {idx: 2, projectLogo: '../#', projectName: '배구게임', price: 10000, closingDate: '2021-12-29'},
        {idx: 3, projectLogo: '../#', projectName: '농구게임', price: 20000, closingDate: '2021-12-28'},
    ]);

    return (
        <IndexListWrap>
            {indexItems.map((row, index) =>
                <CategoryItem key={`${index}_key`} projectLogo={row.projectLogo} projectName={row.projectName} price={row.price} closingDate={row.closingDate} />
            )}
        </IndexListWrap>
    );
};

export default IndexContainer;