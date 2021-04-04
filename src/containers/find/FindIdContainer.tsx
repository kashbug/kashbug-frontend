import styled from 'styled-components';
// next
import  Link from 'next/link';

const Wrap = styled.div`
    max-width: 376px;
    min-height: calc(100vh - 257px);
    margin: 0 auto;
    padding: 32px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FindBox = styled.div`
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
const SignupBox = styled.p`
    margin-top: 28px;
    margin-bottom: 12px;
    text-align: right;
    font-size: 12px;
    font-weight: bold;
    color: #2ecc71;
`;
const Signup = () => {
    return (
        <SignupBox>
            <Link href={'/signup'} passHref>
                <a>Kashbug 멤버 가입 ></a>
            </Link>
        </SignupBox>
    )
}
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
const FindIdContainer = () => {
    return (
        <>
            <Wrap>
                <FindBox>
                    <Logo />
                    <Signup />
                    <TextInput type="text" placeholder="가입 이메일"/>
                    <Submit>계정 정보 전송</Submit>
                </FindBox>
            </Wrap>
        </>
    );
};

export default FindIdContainer;