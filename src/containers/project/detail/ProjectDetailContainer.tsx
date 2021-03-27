import  Link from 'next/link';
import styled from "styled-components";
import Slider from "../../../components/slider";

const Benner = styled.div`
    background: center no-repeat url("/projectbenner.png");
`;
const ProfileBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 72px 0;
    background-color: rgba(0,0,0,0.4);
`;
const ProfileImg = styled.img`
    width: 140px;
    height: 140px;
    border-radius: 8px;
`;
const ProfileName = styled.p`
    padding-top: 16px;
    font-size: 32px;
    color: #ffffff;
`;
const ProfileTagList = styled.ul`
    font-size: 0;
`;
const ProfileTag = styled.li`
    display: inline-block;
    margin-right: 4px;
    padding: 4px 12px;
    border: 2px solid #2ecc71;
    background-color: #F5F5F5;
    border-radius: 16px;
    font-size: 14px;
`;
const Profile = () => {
    return (
        <ProfileBox>
            <ProfileImg src="/logo_1.png" alt="profile" />
            <ProfileName>무지익</ProfileName>
            <ProfileTagList>
                <ProfileTag>#안드로이드 앱</ProfileTag>
                <ProfileTag>#아이폰 앱</ProfileTag>
            </ProfileTagList>
        </ProfileBox>
    )
}
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto 100px;
    padding: 52px 0 24px;
    max-width: 900px;
    border-bottom: 1px solid #e6e6e6;
`;
const CorporationName = styled.p`
    font-size: 14px;
    color: #bbbbbb;
`;
const ProjectName = styled.p`
    padding-bottom: 12px;
    font-size: 22px;
    font-weight: bold;
    color: #171717;
`;
const ProjectInfor = styled.p`
    color: #666;
`;
const ProjectInforBox = styled.div`
    display: flex;
    padding-bottom: 24px;
    border-bottom: 1px solid #e6e6e6;
`;
const ProjectImgBox = styled.div`
    margin-right: 32px;
    width: 600px;
`;
const OptionList = styled.ul`
    margin-top: 34px;
    font-size: 0;
    :after {
        content: '';
        display: inline-block;
        height: 46px;
        vertical-align: middle;
    }
`;
const Option = styled.li`
    display: inline-block;
    vertical-align: middle;
    margin-right: 4px;
    &:last-child {
        margin-right: 0;
    }
`;
const PickBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    border: 1px solid #2ecc71;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover {
        background-color: #2ecc71;
    }
`;
const Pick = styled.div`
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: #2ecc71;
    cursor: pointer;
    transition-duration: 0.5s;
    :hover {
        background-color: #ffffff;
    }
`;
const FindBox = styled.a`
    display: block;
    width: 180px;
    height: 46px;
    color: #2ecc71;
    font-size: 18px;
    font-weight: bold;
    background-color: rgba(0,0,0,0);
    border: 1px solid #2ecc71;
    transition-duration: 0.5s;
    text-align: center;
    :hover {
        color: #ffffff;
        background-color: #2ecc71;
    }
    :after {
        content: '';
        display: inline-block;
        height: 46px;
        vertical-align: middle;
    }
`;
const FindBug = () => {
    return (
        <Link href={'/bug/add'} passHref>
            <FindBox>버그 등록하기</FindBox>
        </Link>
    )
}
const ProjectExplan = styled.p`
    width: 600px;
    margin: 18px 0 12px;
    font-size: 24px;
`;
const Explan = styled.p`
    font-size: 14px;
    color: #aaa;
`;

const openPop = () => {
    window.open('', "_target", "width=500,height=600");
};
const ProjectDetailContainer = () => {
    return (
        <>
            <Benner>
                <Profile />
            </Benner>
            <Wrap>
                <ProjectInforBox>
                    <ProjectImgBox>
                        <Slider images={['/img_notfound.png']} maxWidth="600px" radius="" />
                    </ProjectImgBox>
                    <div>
                        <CorporationName>무지익</CorporationName>
                        <ProjectName>[무지익] 새로운 프로젝트</ProjectName>
                        <ProjectInfor>보상 금액: 10,000원</ProjectInfor>
                        <ProjectInfor>오픈일: 2021/12/32</ProjectInfor>
                        <ProjectInfor>마감일: 2021/12/32</ProjectInfor>
                        <ProjectInfor>버그 채택율: 70%</ProjectInfor>
                        <ProjectInfor>보상 지급율: 70%</ProjectInfor>
                        <ProjectInfor>버그 채택 후 이내 1주일이내 보상</ProjectInfor>
                        <ProjectInfor>서비스 확인 경로 https://www.naver.com/aa/ssasdasda</ProjectInfor>
                        <OptionList>
                            <Option>
                                <FindBug />
                            </Option>
                            <Option>
                                <PickBox>
                                    <Pick />
                                </PickBox>
                            </Option>
                        </OptionList>
                    </div>
                </ProjectInforBox>
                <ProjectExplan>프로젝트 설명</ProjectExplan>
                <Explan>
                    얼마나 미묘한 것은 사라지지보라. 피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.
                    얼마나 미묘한 것은 사라지지보라. 피어나기 창공에 품으며,이상이 가장 천지는<br/> 있음으로써 부패를 뿐이다.<br/>
                    얼마나 미묘한 것은 사라지지보라. 피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.
                    얼마나 미묘한 것은 사라지지보라.<br/> 피어나기 창공에 품으며,이상이 가장 천지는 있음으로써 부패를 뿐이다.
                </Explan>
            </Wrap>
        </>
    );
};

export default ProjectDetailContainer;