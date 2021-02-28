import styled from 'styled-components';
import AddProjectInfor from "../../components/index/addproject/addprojectinfor";

const Wrap = styled.div`
    display: flex;
    justify-content: center;
`;
const Box = styled.div`
    position: relative;
    width: 306px;
    height: 306px;
    margin: 0 10px;
    padding: 45px 30px;
    box-shadow: 0 0 10px #dddddd;
`;
const Title = styled.p`
    font-size: 28px;
`;
const CurrentSituation = styled.p`
    margin-top: 23px;
    font-size: 18px;
    color: #2ecc71;
`;
const Text = styled.p`
    margin-top: 13px;
    font-size: 16px;
    color: #c9c9c9;
`;
const AddProjectBtn = styled.button`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 70px;
    height: 70px;
    background-color: #2ecc71;
    border: 0;
    outline: 0;
`;
const AddProject = () => {
    return (
        <>
            <Wrap>
                <Box>
                    <Title>프로젝트 등록</Title>
                    <CurrentSituation><span>11,258</span>건 디버깅 완료</CurrentSituation>
                    <Text>얼마나 미묘한 것은 사라지지 보라. 피어나기 창공에 품으며, 이상이 가 장 천지는 있음</Text>
                    <AddProjectBtn>+</AddProjectBtn>
                </Box>
                <AddProjectInfor icon="" title="프로젝트 등록" text="얼마나 미묘한 것은 사라지지 보라. 피어나기 창공에 품으며, 이상이 가 장 천지는 있음" />
                <AddProjectInfor icon="" title="프로젝트 등록" text="얼마나 미묘한 것은 사라지지 보라. 피어나기 창공에 품으며, 이상이 가 장 천지는 있음" />
                <AddProjectInfor icon="" title="프로젝트 등록" text="얼마나 미묘한 것은 사라지지 보라. 피어나기 창공에 품으며, 이상이 가 장 천지는 있음" />
            </Wrap>
        </>
    )
};

export default AddProject;