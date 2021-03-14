import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Qna from '../../components/help/faq';
interface MenuProps {
    href: string;
    name: string;
}
interface QnaProps {
    idx: Number;
    questions: String;
    answers: String;
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
const FaqList = styled.dl`
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
    if (name === 'FAQ') {
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
const Faq = () => {
    const [qnaItems, setQnaItems] = useState<QnaProps[]>([
        {idx: 0, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지'},
        {idx: 1, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지'},
        {idx: 2, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지'},
        {idx: 3, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 4, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 5, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 6, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 7, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 8, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 9, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 10, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 11, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 12, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 13, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 14, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 15, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 16, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 17, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
        {idx: 18, questions: '캐시버그는 어떤 플랫폼인가요?', answers: '안녕하세요. 프로젝트 등록은 기업 회원 가입 -> 마이페이지...'},
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
                <FaqList>
                    {qnaItems.map((row, index) => {
                        return <Qna key={`${index}_key`} idx={row.idx} questions={row.questions} answers={row.answers} />
                    })}
                </FaqList>
            </Wrap>
        </>
    )
};

export default Faq;