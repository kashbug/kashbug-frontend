import styled from 'styled-components';

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
const Logo = () => {
    const Box = styled.span`
        font-size: 48px;
        font-family: Roboto, sans-serif;
    `;
    const Color = styled.span`
        color: #2ecc71;
    `;
    return (
        <Box><Color>Kash</Color>bug</Box>
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
const UserGuide = styled.button`
    width: 204px;
    height: 52px;
    margin-right: 21px;
    border: 1px solid #10c05b;
    background-color: #ffffff;
    border-radius: 26px;
    outline: 0;
`;
const CorporationGuide = styled.button`
    width: 204px;
    height: 52px;
    border: 1px solid #10c05b;
    background-color: #10c05b;
    border-radius: 26px;
    outline: 0;
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
                        <UserGuide></UserGuide>
                        <CorporationGuide></CorporationGuide>
                    </GuideBox>
                </div>
                <img src="" alt="" />
            </Wrap>
        </>
    )
};

export default Intro;