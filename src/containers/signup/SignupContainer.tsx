import styled from 'styled-components';
//  mui
import {
    FormControl,
    TextField,
    Button,
    Select,
    InputLabel,
    Paper,
} from '@material-ui/core';

const SignUpWrap = styled.div`
    position:relative;height:100vh;text-align:center;
`;
const SignUp = styled.div`
    position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);max-width:440px;width:100%;padding:20px;
`;
const SelectBox = styled.div`
    margin-top:20px;overflow:hidden;
`;
const LeftBox = styled.strong`
    float:left; line-height: 30px;
`;
const RightBox = styled.div`
    float:right;
`;
interface ImageProps {
    src: string;
    alt: string;
    id: string;
}
const Image = styled.img.attrs<ImageProps>(props => ({
    src: props.src,
    alt: props.alt,
    id: props.id,
  }))`
    margin-top:20px;width:80px;height:80px;border-radius:10px;
`;
const Notice = styled.div`
    font-size:0.5rem;font-weight:bold;color: #FF0000;
`;
const Category = styled.ul`
    width:100%;height:50px;border-radius:10px;background-color:#EAEAEA;list-style:none;margin:20px 0;
    padding:10px;
`;
const CategoryLi = styled.li`
    float: left;padding:5px;color:#0054FF;font-weight:bold;
`;
const SignupContainer = () => {
    return (
        <SignUpWrap>
            <SignUp>
                <h2>회원가입</h2>
                <SelectBox>
                    <LeftBox>가입형태</LeftBox>
                    <RightBox>
                        <Button size="small" variant="contained" color="primary">개인</Button>
                        <Button size="small" variant="contained" style={{ marginLeft:'5px' }} disabled>기업</Button>
                    </RightBox>
                </SelectBox>
                <Image />
                <Notice>150x150, 5MB 이하 이미지만 업로드가 가능합니다.</Notice>
                <FormControl style={{ width: '100%' }}>
                    <TextField id="standard-basic" label="아이디" />
                    <TextField id="standard-basic" label="비밀번호" />
                    <TextField id="standard-basic" label="비밀번호 확인" />
                </FormControl>
                <SelectBox>
                    <LeftBox>성별</LeftBox>
                    <RightBox>
                        <Button size="small" variant="contained" color="primary">남자</Button>
                        <Button size="small" variant="contained" style={{ marginLeft:'5px' }} disabled>여자</Button>
                        <Button size="small" variant="contained" style={{ marginLeft:'5px' }} disabled>기타</Button>
                    </RightBox>
                </SelectBox>
                <FormControl style={{ width: '100%' }}>
                    <TextField id="standard-basic" label="이메일" />
                    <TextField id="standard-basic" label="연락처" />
                </FormControl>
                <FormControl style={{ width: '45%', marginRight: '10px' }}>
                    <InputLabel htmlFor="age-native-simple">나이</InputLabel>
                    <Select
                        native
                        inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
                <FormControl style={{ width: '45%' }}>
                    <InputLabel htmlFor="category">관심사</InputLabel>
                    <Select
                        native
                        inputProps={{
                            name: 'category',
                            id: 'category',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
                <Category>
                    <CategoryLi>#게임</CategoryLi>
                    <CategoryLi>#영화</CategoryLi>
                </Category>
                <div style={{ marginTop: '20px' }}>
                    <Button variant="contained" color="primary">확인</Button>
                    <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>취소</Button>
                </div>
            </SignUp>
        </SignUpWrap>
    );
};

export default SignupContainer;