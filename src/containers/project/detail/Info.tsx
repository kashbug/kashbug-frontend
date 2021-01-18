import styled from "styled-components";

const Wrap = styled.div`
    &:after{content:'';display:block;clear: both;}
`;
interface ColProps {
    width: string;
};
const Col = styled.div<ColProps>`
    width:${(props:any) => props.width || '20%'};
    height:150px;
    float:left;
`;
const Logo = styled.div`
    border:1px solid #000;
    height:150px;
    width:150px;
    border-radius: 10px;
`;
const Category = styled.span`
    cursor: pointer;
    margin-right:5px;
    color:#0054FF;
    font-weight:bold;
`;
const Title = styled.h4`
    margin: 0 0;
`;
interface TxtProps {
    top?: string;
};
const Txt = styled.div<TxtProps>`
    margin-top: ${(props:any) => props.top || '0px'};
`;
const Emp = styled.span`
    cursor: pointer;
    font-weight:bold;
    color: ${(props:any) => props.color || '#000'};
`;
const openPop = () => {
    window.open('', "_target", "width=500,height=600");
};
const Info = () => {
    return (
        <Wrap>
            <Col width={'20%'}>
                <Logo>Logo</Logo>
            </Col>
            <Col width={'30%'}>
                <Title>이미지 보정 앱</Title>
                <Txt top="30px">오픈일: 2021/12/32</Txt>
                <Txt top="5px">마감일: 2021/12/32</Txt>
                <Txt top="5px">서비스 확인 경로</Txt>
                <Txt onClick={openPop}><Emp color="#0054FF">https://www.naver.com/aa/ssasdasda</Emp></Txt>
            </Col>
            <Col width={'30%'}>
                <Category>#영화 #게임</Category>
                <Txt top="30px">보상 금액: <Emp color="#1DDB16">10,000원</Emp></Txt>
                <Txt top="5px">버그 채택 후 <Emp color="#FF0000">1주일</Emp> 이내 보상</Txt>
                <Txt top="5px">버그 채택율: <Emp color="#FF0000">70%</Emp></Txt>
                <Txt top="5px">보상 지급율: <Emp color="#FF0000">70%</Emp></Txt>
            </Col>
            <Col width={'20%'} />
        </Wrap>
    );
};

export default Info;