import styled from 'styled-components';

const Wrap = styled.div`
    margin: 86px 0 96px;
    padding-top: 66px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #fbfbff;
`;
const Title = styled.p`
    text-align: center;
    font-size: 40px;
    font-weight: bold;
`;
const Text = styled.p`
    margin-top: 26px;
    text-align: center;
    font-size: 18px;
    color: #9e9e9e;
`;
const ExplanationImg = styled.img`
    margin-top: 24px;
    height: 400px;
`;
const Explanation = () => {
    return (
        <>
            <Wrap>
                <Title>안녕하세요.</Title>
                <Text>얼마나 미묘한 것은 사라지지 보라.<br/>피어나기 창공에 품으며, 이상이 가장 천지는 있음으로써 부패를 뿐이다.</Text>
                <ExplanationImg src="" alt=""/>
            </Wrap>
        </>
    )
};

export default Explanation;