import  Link from 'next/link';
import styled from "styled-components";

interface InfoBoxProps {
    pd?: String;
}

const Benner = styled.div`
    background: center no-repeat url("/profile-benner.png");
`;
const ProfileBox = styled.div`
    display: flex;
    padding: 48px 0;
    max-width: 1200px;
    margin: 0 auto;
`;
const ImgWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border-radius: 8px;
    background-color: #ffffff;
`;
const ProfileImg = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 8px;
`;
const InfoBox = styled.div<InfoBoxProps>`
    flex: 1 1;
    padding: ${(props:any) => props.pd};
`;
const InfoWrap = styled.div`
    display: flex;
`;
const ProfileWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProfileName = styled.p`
    font-size: 32px;
    color: #4a4a4a;
`;
const Account = styled.p`
    flex: 1 1;
    text-align: right;
`;
const ProfileTagList = styled.ul`
    padding-top: 8px;
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
const Modify = styled.a`
    display: block;
    width: 120px;
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
const ProfileModify = () => {
    return (
        <Link href={'/person/modify'} passHref>
            <Modify>개인정보수정</Modify>
        </Link>
    )
}
const SituationBox = styled.div`
    display: flex;
    padding-top: 28px;
`;
const CurrentSituation = styled.div`
    flex: 1 1;
    padding: 16px;
    :first-child p {
        color: #2ecc71;
        font-weight: bolder;
    }
`;
const CurrentSituationTitle = styled.p`
    font-size: 12px;
`;
const CurrentSituationContent = styled.p`
    text-align: center;
    font-size: 26px;
    font-weight: bold;
`;
const Profile = ({...props}) => {
    return (
        <Benner>
            <ProfileBox>
                <div>
                    <ImgWrap>
                        <ProfileImg src="/unknow-profile.png" alt="profile" />
                    </ImgWrap>
                </div>
                <InfoBox pd ={'0 0 0 32px'}>
                    <InfoWrap>
                        <InfoBox pd ={'0 32px 0 0'}>
                            <ProfileWrap>
                                <ProfileName>jeongh389</ProfileName>
                                <Account>연동 계좌 확인됨</Account>
                            </ProfileWrap>
                            <ProfileTagList>
                                <ProfileTag>#게임</ProfileTag>
                                <ProfileTag>#영화</ProfileTag>
                            </ProfileTagList>
                        </InfoBox>
                        <ProfileModify />
                    </InfoWrap>
                    <SituationBox>
                        <CurrentSituation>
                            <CurrentSituationTitle>받은 상금</CurrentSituationTitle>
                            <CurrentSituationContent>100,000,000</CurrentSituationContent>
                        </CurrentSituation>
                        <CurrentSituation>
                            <CurrentSituationTitle>등록한 버그</CurrentSituationTitle>
                            <CurrentSituationContent>34,321</CurrentSituationContent>
                        </CurrentSituation>
                        <CurrentSituation>
                            <CurrentSituationTitle>채택된 버그</CurrentSituationTitle>
                            <CurrentSituationContent>32,123</CurrentSituationContent>
                        </CurrentSituation>
                        <CurrentSituation>
                            <CurrentSituationTitle>보상된 버그</CurrentSituationTitle>
                            <CurrentSituationContent>32,043</CurrentSituationContent>
                        </CurrentSituation>
                    </SituationBox>
                </InfoBox>
            </ProfileBox>
        </Benner>
    )
}

export default Profile;