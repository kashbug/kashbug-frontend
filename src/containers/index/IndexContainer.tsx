import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryItem from '../../components/index/CategoryItem';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

interface categorys {
    category: string;
}
interface indexItems {
    idx: Number;
    href: string;
    projectLogo: string;
    projectName: string;
    price: Number;
    closingDate: string;
}

const IndexContainer = () => {
    const [category, setCategory] = useState<categorys>('');
    const [indexItems, setIndexItems] = useState<indexItems[]>([
        {idx: 0, href: '#', projectLogo: '/logo_1.png', projectName: '야구게임', price: 30000, closingDate: '2021-12-31'},
        {idx: 1, href: '#', projectLogo: '/logo_2.png', projectName: '축구게임', price: 20000, closingDate: '2021-12-30'},
        {idx: 2, href: '#', projectLogo: '/logo_3.png', projectName: '배구게임', price: 10000, closingDate: '2021-12-29'},
        {idx: 3, href: '#', projectLogo: '/logo_4.png', projectName: '농구게임', price: 20000, closingDate: '2021-12-28'},
        {idx: 4, href: '#', projectLogo: '/logo_2.png', projectName: '야구게임', price: 30000, closingDate: '2021-12-31'},
        {idx: 5, href: '#', projectLogo: '/logo_4.png', projectName: '축구게임', price: 20000, closingDate: '2021-12-30'},
        {idx: 6, href: '#', projectLogo: '/logo_3.png', projectName: '배구게임', price: 10000, closingDate: '2021-12-29'},
        {idx: 7, href: '#', projectLogo: '/logo_1.png', projectName: '농구게임', price: 20000, closingDate: '2021-12-28'},
        {idx: 8, href: '#', projectLogo: '/logo_4.png', projectName: '야구게임', price: 30000, closingDate: '2021-12-31'},
        {idx: 9, href: '#', projectLogo: '/logo_3.png', projectName: '축구게임', price: 20000, closingDate: '2021-12-30'},
        {idx: 10, href: '#', projectLogo: '/logo_2.png', projectName: '배구게임', price: 10000, closingDate: '2021-12-29'},
        {idx: 11, href: '#', projectLogo: '/logo_4.png', projectName: '농구게임', price: 20000, closingDate: '2021-12-28'},
        {idx: 12, href: '#', projectLogo: '/logo_1.png', projectName: '야구게임', price: 30000, closingDate: '2021-12-31'},
        {idx: 13, href: '#', projectLogo: '/logo_2.png', projectName: '축구게임', price: 20000, closingDate: '2021-12-30'},
        {idx: 14, href: '#', projectLogo: '/logo_4.png', projectName: '배구게임', price: 10000, closingDate: '2021-12-29'},
        {idx: 15, href: '#', projectLogo: '/logo_3.png', projectName: '농구게임', price: 20000, closingDate: '2021-12-28'},
        {idx: 16, href: '#', projectLogo: '/logo_2.png', projectName: '농구게임', price: 20000, closingDate: '2021-12-28'},
    ]);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <>
            <FormControl>
                <Select
                    value={category}
                    onChange={handleChange}
                >
                    <MenuItem value={'게임'}>게임</MenuItem>
                    <MenuItem value={'앱'}>앱</MenuItem>
                    <MenuItem value={'웹'}>웹</MenuItem>
                </Select>
            </FormControl>
            <ul>
                {indexItems.map((row, index) =>
                    <CategoryItem key={`${index}_key`} href={row.href} projectLogo={row.projectLogo} projectName={row.projectName} price={row.price} closingDate={row.closingDate} />
                )}
            </ul>
        </>
    );
};

export default IndexContainer;