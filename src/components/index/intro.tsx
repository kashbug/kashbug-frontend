import styled from 'styled-components';

interface ButtonProps {
    bgc?: String;
    color?: String;
}

const Wrap = styled.div`
    max-width: 1304px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const IntroTitle = styled.p`
    margin-top: 132px;
    margin-bottom: 24px;
    font-size: 40px;
    font-weight: bolder;
`;
const LogoBox = styled.span`
    font-size: 48px;
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
const IntroText = styled.p`
    font-size: 18px;
    color: #9e9e9e;
`;
const GuideBox = styled.div`
    margin-top: 56px;
    margin-bottom: 146px;
`;
const GuideBtn = styled.button<ButtonProps>`
    width: 204px;
    height: 52px;
    margin-right: 21px;
    border: 1px solid #10c05b;
    background-color: ${(props:any) => props.bgc || '#ffffff'};
    color: ${(props:any) => props.color || '#222222'};
    border-radius: 26px;
    outline: 0;
    font-size: 18px;
    cursor: pointer;
`;
const BennerImg = styled.img`
    height: 500px;
`;
const Intro = () => {
    return (
        <>
            <Wrap>
                <div>
                    <IntroTitle>안녕하세요 <Logo /></IntroTitle>
                    <IntroText>얼마나 미묘한 것은 사라지지보라.</IntroText>
                    <IntroText>피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.</IntroText>
                    <GuideBox>
                        <GuideBtn>사용자 가입하기</GuideBtn>
                        <GuideBtn bgc="#10c05b" color="#ffffff">회사 가입하기</GuideBtn>
                    </GuideBox>
                </div>
                <BennerImg src="/intro_benner_1.png" alt="" />
            </Wrap>
        </>
    )
};

export default Intro;