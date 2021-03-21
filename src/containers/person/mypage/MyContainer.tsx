import React, { useState } from 'react';
import styled from "styled-components";

// component
import Profile from '../../../components/person/mypage/profile';
import MyBug from '../../../components/person/mypage/mybug';

interface BugProps {
    flex?: String;
    width?: String;
}
interface FilterProps {
    color?: String;
}

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 64px auto 100px;
    max-width: 1200px;
    min-height: calc(100vh - 793px);
`;
const BugFilterList = styled.ul`
    font-size: 0;
`;
const BugFilter = styled.li`
    display: inline-block;
`;
const FilterBtn = styled.button<FilterProps>`
    margin: 0;
    padding: 0;
    width: 120px;
    height: 60px;
    border: 0;
    outline: 0;
    font-size: 18px;
    font-weight: bold;
    color: ${(props:any) => props.color || '#cfcfcf'};
    background-color: #ffffff;
    cursor: pointer;
`;
const Bug = styled.li`
    display: flex;
    align-items: center;
    height: 56px;
`;
const BugCategory = styled.p<BugProps>`
    flex: ${(props:any) => props.flex};
    text-align: center;
    margin: 4px 0;
    padding: 0 8px;
    width: ${(props:any) => props.width};
    font-size: 16px;
    border-left: 1px solid #cacaca;
    color: #333333;
    :first-child {
        border-left: 0;
    }
`;
const ScrollTop = styled.button`
    position: fixed;
    bottom: 80px;
    right: 80px;
    width: 60px;
    height: 60px;
    border: 0;
    outline: 0;
    border-radius: 50%;
    background-color: #2ecc71;
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
`;
const ScrollTopHandler = () => {
    window.scrollTo({top: 0, left: 0});
}

const MyContainer = () => {
    const [myProfile, setMyProfile] = useState([
        {id: 1, profileImg: '/unknow-profile.png', userId: 'jeongh389', tag: ['#영화', '#게임'], prizeMoney: 1000000, registrationBug: 123214, adoptionBug: 23432, compensatedBug: 22432, account: ''}
    ])
    const [myBugList, setMyBugList] = useState([
        {id: 1, corporationName: '(주)카카오', projectName: '[카카오르막] 새로운 프로젝트', price: 100000, registrationDate: '2021-04-15', bugType: '오타', bugTitle: '얼마나 미묘한 것은 사라지지보라.피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.', state: '미확인'},
        {id: 2, corporationName: '(주)카카오', projectName: '[카카오르막] 새로운 프로젝트', price: 100000, registrationDate: '2021-04-15', bugType: '오타', bugTitle: '얼마나 미묘한 것은 사라지지보라.피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.', state: '입금대기'},
        {id: 3, corporationName: '(주)카카오', projectName: '[카카오르막] 새로운 프로젝트', price: 100000, registrationDate: '2021-04-15', bugType: '오타', bugTitle: '얼마나 미묘한 것은 사라지지보라.피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.', state: '미채택'},
        {id: 4, corporationName: '(주)카카오', projectName: '[카카오르막] 새로운 프로젝트', price: 100000, registrationDate: '2021-04-15', bugType: '오타', bugTitle: '얼마나 미묘한 것은 사라지지보라.피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.', state: '입금완료'},
        {id: 5, corporationName: '(주)카카오', projectName: '[카카오르막] 새로운 프로젝트', price: 100000, registrationDate: '2021-04-15', bugType: '오타', bugTitle: '얼마나 미묘한 것은 사라지지보라.피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.', state: '기간지남'},
        {id: 6, corporationName: '(주)카카오', projectName: '[카카오르막] 새로운 프로젝트', price: 100000, registrationDate: '2021-04-15', bugType: '오타', bugTitle: '얼마나 미묘한 것은 사라지지보라.피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.', state: '기간지남'},
        {id: 7, corporationName: '(주)카카오', projectName: '[카카오르막] 새로운 프로젝트', price: 100000, registrationDate: '2021-04-15', bugType: '오타', bugTitle: '얼마나 미묘한 것은 사라지지보라.피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.', state: '기간지남'},
        {id: 8, corporationName: '(주)카카오', projectName: '[카카오르막] 새로운 프로젝트', price: 100000, registrationDate: '2021-04-15', bugType: '오타', bugTitle: '얼마나 미묘한 것은 사라지지보라.피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.', state: '기간지남'},
        {id: 9, corporationName: '(주)카카오', projectName: '[카카오르막] 새로운 프로젝트', price: 100000, registrationDate: '2021-04-15', bugType: '오타', bugTitle: '얼마나 미묘한 것은 사라지지보라.피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.', state: '기간지남'},
        {id: 10, corporationName: '(주)카카오', projectName: '[카카오르막] 새로운 프로젝트', price: 100000, registrationDate: '2021-04-15', bugType: '오타', bugTitle: '얼마나 미묘한 것은 사라지지보라.피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.', state: '기간지남'}
    ])
    return (
        <>
            <Profile />
            <Wrap>
                <BugFilterList>
                    <BugFilter>
                        <FilterBtn color={'#333333'}>등록한 버그</FilterBtn>
                    </BugFilter>
                    <BugFilter>
                        <FilterBtn>채택된 버그</FilterBtn>
                    </BugFilter>
                </BugFilterList>
                <ul>
                    <Bug>
                        <BugCategory width={'280px'}>프로젝트</BugCategory>
                        <BugCategory width={'100px'}>보상 금액</BugCategory>
                        <BugCategory width={'100px'}>버그 등록일</BugCategory>
                        <BugCategory width={'100px'}>버그 종류</BugCategory>
                        <BugCategory flex={'1 1'}>버그 등록 제목</BugCategory>
                        <BugCategory width={'100px'}>상태</BugCategory>
                    </Bug>
                    {myBugList.map((row, index) => {
                        let price = row.price.toLocaleString();
                        let stateColor = '';
                        if (row.state === '미확인') {
                            stateColor = '#ffe488';
                        } else if (row.state === '입금대기') {
                            stateColor = '#46c24c';
                        } else if (row.state === '미채택') {
                            stateColor = '#333333';
                        } else if (row.state === '입금완료') {
                            stateColor = '#5c5ad8';
                        } else if (row.state === '기간지남') {
                            stateColor = '#ed7d7d';
                        }
                        return <MyBug key={`${index}_key`} corporationName={row.corporationName} projectName={row.projectName} price={price} registrationDate={row.registrationDate} bugType={row.bugType} bugTitle={row.bugTitle} state={row.state} stateColor={stateColor}/>
                    })}
                </ul>
            </Wrap>
            <ScrollTop onClick={ScrollTopHandler}>TOP</ScrollTop>
        </>
    )
};

export default MyContainer;