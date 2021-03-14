import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { setInterval } from 'timers';

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
const QuestionsBox = styled.label`
    cursor: pointer;
`;
const QuestionsCheck = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
`;
const Questions = styled.p`
    padding: 16px 0;
    font-size: 20px;
`;
const AnswersBox = styled.dd`
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #dfdfdf;
`;
const Answers = styled.div`
    position: absolute;
    padding-bottom: 12px;
    font-size: 16px;
    color: #888888;
`;
const Qna = ({ idx, questions, answers }: QnaProps) => {
    return (
        <>
            <dt>
                <QuestionsBox>
                    <QuestionsCheck type="radio" name="qna" value={idx} onChange={QnaToggleHandler} />
                    <Questions>Q. {questions}</Questions>
                </QuestionsBox>
            </dt>
            <AnswersBox id={idx} className="answers">
                <Answers>
                    <p>{answers}</p>
                </Answers>
            </AnswersBox>
        </>
    )
}

const QnaToggleHandler = e => {
    console.log('start');
    const targetVal = e.target.value;
    const targetBoxs = document.getElementsByClassName('answers');
    const targetBox = document.getElementById(targetVal);
    const maxHeight = targetBox.children[0].offsetHeight;
    let checkVal = 0;
    for (let i = 0; i < targetBoxs.length; i++) {
        targetBoxs[i].style.height = '0';
    }
    var interval = setInterval(() => {
        console.log(checkVal === maxHeight);
        if (checkVal === maxHeight) {
            clearInterval(interval);
        } else {
            checkVal++;
            targetBox.style.height = checkVal + 'px';
        }
    }, 10);
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