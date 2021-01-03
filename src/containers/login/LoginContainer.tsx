import styled from 'styled-components';
// next
import  Link from 'next/link';
// mui
import {
    FormControl,
    TextField,
    Button,
} from '@material-ui/core';

const LoginWrap = styled.div`
    position:relative;height:100vh;text-align:center;
`;
const Login = styled.div`
    position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);max-width:340px;width:100%;padding:20px;
`;
const Helper = styled.div`
    margin-top:10px;
    &::after {content:'';display:block;clear:both;}
`;
const Find = styled.a`
    float: left; font-size:0.5rem;font-weight:bold;cursor: pointer;
`;
const Signup = styled.a`
    float: right; font-size:0.5rem;font-weight:bold;cursor: pointer;color:#0054FF;
`;
const BtnWrap = styled.div`
    margin-top:20px;
`;
const Social = styled.div`
    margin-top:20px;text-align:right;
`;
interface SocialIcon {
    src: string;
    alt: string;
    id: string;
}
const SocialIcon = styled.img.attrs<SocialIcon>(props => ({
    src: props.src,
    alt: props.alt,
    id: props.id,
  }))`
    width:40px;height:40px;margin:5px;border-radius:10px;
    opacity: 0.5;
`;
const LoginContainer = () => {
    return (
        <LoginWrap>
            <Login>
                <h2>로그인</h2>
                <Social>
                    <SocialIcon src="/naver.png" alt="naver" id="naver" />
                    <SocialIcon src="/kakao.png" alt="kakao" id="kakao" />
                    <SocialIcon src="/facebook.png" alt="face" id="face" />
                </Social>
                <FormControl style={{ width: '100%' }}>
                    <TextField id="standard-basic" label="아이디" />
                    <TextField id="standard-basic" label="비밀번호" />
                </FormControl>
                <Helper>
                    <Link href="/findId">
                        <Find>비밀번호/아이디 찾기</Find>
                    </Link>
                    <Link href="/signup">
                        <Signup>회원가입</Signup>
                    </Link>
                </Helper>
                <BtnWrap>
                    <Button variant="contained" color="primary">확인</Button>
                    <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>취소</Button>
                </BtnWrap>
            </Login>
        </LoginWrap>
    );
};

export default LoginContainer;