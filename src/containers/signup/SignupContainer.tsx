import React, { useState } from 'react';
import styled from 'styled-components';
// next
import  Link from 'next/link';

interface AgeProps {
    idx: Number;
    age: Number;
}
interface CategoriesProps {
    idx: Number;
    categories: String;
}

const Wrap = styled.div`
    max-width: 376px;
    min-height: calc(100vh - 257px);
    margin: 0 auto;
    padding: 32px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SignupBox = styled.div`
    padding: 56px 24px;
    width: 100%;
    box-shadow: 0 0 10px #dddddd;
`;
const LogoBox = styled.p`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    font-family: Roboto, sans-serif;
`;
const LogoAfter = styled.span`
    color: #2ecc71;
`;
const Logo = () => {
    return (
        <LogoBox><LogoAfter>Kash</LogoAfter>bug</LogoBox>
    )
}
const ProfileBox = styled.div`
    position: relative;
    width: 140px;
    height: 140px;
    margin: 20px auto;
`;
const ProfileImg = styled.img`
    min-width: 140px;
    min-height: 140px;
    border: 1px solid #333333;
    border-radius: 8px;
`;
const FileLabel = styled.label`
    position: absolute;
    bottom: -6px;
    right: -6px;
    width: 20px;
    height: 20px;
    background-color: #333333;
    border-radius: 50%;
`;
const FileInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
`;
const Profile = () => {
    return (
        <ProfileBox>
            <ProfileImg src="#" alt="profile" />
            <FileLabel>
                <FileInput type="file"/>
            </FileLabel>
        </ProfileBox>
    )
}
const FileInfro = styled.p`
    text-align: center;
    font-size: 12px;
    color: #fc4949;
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
const GenderBox = styled.div`
    display: flex;
    margin-top: 32px;
`;
const GenderLabel = styled.label`
    margin-left: ${(props) => props.margin || "0"}; 
    flex: 1 1;
    background-color: #F5F5F5;
    border-radius: 8px;
    text-align: center;
    color: #777777;
    line-height: 2.4;
`;
const GenderInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
    &:checked + label {
        background-color: #2ecc71;
        color: #ffffff;
    }
`;
const GenderSelect = () => {
    return (
        <GenderBox>
            <GenderInput id="Gender-man" type="radio" name="Gender" value="남자" />
            <GenderLabel for="Gender-man" margin="0px">남자</GenderLabel>
            <GenderInput id="Gender-woman" type="radio" name="Gender" value="여자" />
            <GenderLabel for="Gender-woman" margin="8px">여자</GenderLabel>
            <GenderInput id="Gender-non" type="radio" name="Gender" value="비공개" />
            <GenderLabel for="Gender-non" margin="8px">비공개</GenderLabel>
        </GenderBox>
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
const TagList = styled.ul`
    padding: 16px 0 24px;
    font-size: 0;
`;
const Tag = styled.li`
    display: inline-block;
    margin-right: 4px;
    padding: 4px 8px;
    background-color: #F5F5F5;
    border: 1px solid #333333;
    border-radius: 16px;
    font-size: 12px;
`;
const Submit = styled.button`
    margin-top: 8px;
    padding: 12px 16px;
    width: 100%;
    background-color: #2ecc71;
    border: 0;
    outline: 0;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    :after {
        content: '';
        display: inline-block;
        height: 10px;
        vertical-align: middle;
    }
`;
const LoginContainer = () => {
    const [ageItems] = useState<AgeProps[]>([
        {idx: 0, age: 1964},
        {idx: 1, age: 1965},
        {idx: 2, age: 1966},
        {idx: 3, age: 1967},
        {idx: 4, age: 1999},
        {idx: 5, age: 1999},
        {idx: 6, age: 2000},
        {idx: 7, age: 2001},
        {idx: 8, age: 2002},
        {idx: 9, age: 2003},
        {idx: 10, age: 2004},
        {idx: 11, age: 2005},
        {idx: 12, age: 2006},
        {idx: 13, age: 2007},
        {idx: 14, age: 2008},
        {idx: 15, age: 2009},
        {idx: 16, age: 2010},
    ]);
    const [categoriesItems] = useState<CategoriesProps[]>([
        {idx: 0, categories: '게임'},
        {idx: 1, categories: '영화'},
        {idx: 2, categories: '만화'},
    ]);
    return (
        <>
            <Wrap>
                <SignupBox>
                    <Logo />
                    <Profile />
                    <FileInfro><strong>150x150, 5MB 이하</strong>의 이미지를 올려주세요.</FileInfro>
                    <TextInput type="text" placeholder="아이디"/>
                    <TextInput type="password" placeholder="비밀번호"/>
                    <TextInput type="password" placeholder="비밀번호 확인"/>
                    <GenderSelect />
                    <TextInput type="text" placeholder="이메일"/>
                    <TextInput type="text" placeholder="연락처"/>
                    <SelectInput>
                        <option value="" disabled selected>출생년도</option>
                        {ageItems.map((row, index) => {
                            return <option key={`${index}_key`}>{row.age}</option>
                        })}
                    </SelectInput>
                    <SelectInput>
                        <option value="" disabled selected>관심사</option>
                        {categoriesItems.map((row, index) => {
                            return <option key={`${index}_key`}>{row.categories}</option>
                        })}
                    </SelectInput>
                    <TagList>
                        <Tag>#게임</Tag>
                        <Tag>#영화</Tag>
                    </TagList>
                    <Submit>회원가입</Submit>
                </SignupBox>
            </Wrap>
        </>
    );
};

export default LoginContainer;