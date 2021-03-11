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
const LoginBox = styled.div`
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
const IdInput = styled.input`
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
const FindUserBox = styled.a`
    display: block;
    margin-top: 36px;
    text-align: center;
    font-size: 12px;
    color: #666666;
`;
const FindUserHighlight = styled.span`
    font-weight: bold;
`;
const FindUser = () => {
    return (
        <Link href={'/'} passHref>
            <FindUserBox><FindUserHighlight>아이디/비밀번호</FindUserHighlight>가 기억이 안나시나요?</FindUserBox>
        </Link>
    )
}
const SNSInfor = styled.p`
    margin-top: 12px;
    padding: 32px 0 12px;
    border-top: 1px solid #E6E6E6;
    text-align: center;
    font-size: 12px;
`;
const SNSBox = styled.div`
    margin-top: 8px;
    display: flex;
`;
const SNSLogin = styled.button`
    flex: 1 1;
    margin-left: 8px;
    padding: 12px 16px;
    border: 0;
    outline: 0;
    font-size: 16px;
    background-color: ${(props) => props.background || ''};
    color: ${(props) => props.color || '#333333'};
    font-weight: bold;
    cursor: pointer;
    :first-child {
        margin-left: 0;
    }
`;
const LoginContainer = () => {
    return (
        <>
            <Wrap>
                <LoginBox>
                    <Logo />
                    <Signup />
                    <IdInput type="text" placeholder="아이디"/>
                    <IdInput type="password" placeholder="비밀번호"/>
                    <Submit>로그인</Submit>
                    <FindUser />
                    {/* <SNSInfor>SNS 계정으로 로그인하기</SNSInfor>
                    <SNSBox>
                        <SNSLogin background="#3B5998" color="#ffffff">페이스북</SNSLogin>
                        <SNSLogin background="#F7E600">카카오</SNSLogin>
                        <SNSLogin background="#03c75a" color="#ffffff">네이버</SNSLogin>
                    </SNSBox> */}
                </LoginBox>
            </Wrap>
        </>
    );
};

export default LoginContainer;