import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface MenuProps {
    href: string;
    name: string;
}
interface CategoriesProps {
    idx: Number;
    categories: String;
}

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    padding-bottom: 128px;
    max-width: 800px;
`;
const Benner = styled.div`
    padding: 124px 0;
`;
const IntroText = styled.p`
    font-size: 32px;
    color: #555555;
`;
const MenuList = styled.ul`
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 24px 0;
`;
const MenuBox = styled.li`
    margin: 0 24px;
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
`;
const MenuAnchor = styled.a`
    font-size: 32px;
    font-weight: bold;
    color: ${(props) => props.color || '#444444'};
`;
const Menu = ({ href, name }: MenuProps) => {
    let color = '';
    if (name === '1:1 문의') {
        color = '#2ecc71';
    } else {
        color = '#444444';
    }
    return (
        <MenuBox>
            <Link href={href} passHref>
                <MenuAnchor color={color}>{name}</MenuAnchor>
            </Link>
        </MenuBox>
    )
}
const SelectInput = styled.select`
    margin-top: 8px;
    padding: 12px 16px;
    width: 100%;
    height: 42px;
    background-color: #F5F5F5;
    border: 0;
    outline: 0;
    font-size: 16px;
`;
const TextInput = styled.input`
    margin-top: 8px;
    padding: 12px 16px;
    width: 100%;
    height: 34px;
    background-color: #F5F5F5;
    border: 0;
    outline: 0;
    font-size: 16px;
`;
const TextareaInput = styled.textarea`
    margin-top: 8px;
    padding: 12px 16px;
    width: 100%;
    height: 320px;
    background-color: #F5F5F5;
    border: 0;
    outline: 0;
    font-size: 16px;
    resize: none;
`;
const inquiry = () => {
    const [categoriesItems] = useState<CategoriesProps[]>([
        {idx: 0, categories: '게임'},
        {idx: 1, categories: '영화'},
        {idx: 2, categories: '만화'},
    ]);
    return (
        <>
            <Wrap>
                <Benner>
                    <IntroText>얼마나 미묘한 것은 사라지지보라.</IntroText>
                    <IntroText>피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.</IntroText>
                </Benner>
                <MenuList>
                    <Menu href="/help/faq" name="FAQ" />
                    <Menu href="/help/inquiry" name="1:1 문의" />
                </MenuList>
                <div>
                    <SelectInput>
                        <option value="" disabled selected>관심사</option>
                        {categoriesItems.map((row, index) => {
                            return <option key={`${index}_key`}>{row.categories}</option>
                        })}
                    </SelectInput>
                    <TextInput type="text" placeholder="제목"/>
                    <TextareaInput placeholder="문의사항"/>
                </div>
            </Wrap>
        </>
    )
};

export default inquiry;