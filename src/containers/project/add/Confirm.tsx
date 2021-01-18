import styled from "styled-components";
import Slider from "../../../components/slider";
// mui
import { TextField, FormControl, Button } from '@material-ui/core';
// api
import { ProjectAdd as ProjectAddInterface } from '../../../api/Project';
//lib
import dayjs from 'dayjs';
import { CategoryType, StatusType, RewardDurationType, RewardPriceType } from '../../../enumType/Project';

const Wrap = styled.div`
    margin-top:20px;
`;
const InfoWrap = styled.div`
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
    font-weight:bold;
    cursor: pointer;
    color: ${(props:any) => props.color || '#000'};
`;
interface ConfirmProps {
    projectData: ProjectAddInterface,
};
const Confirm = ({ projectData }: ConfirmProps) => {
    const {
        name,
        category,
        contents,
        reward,
        reward_duration,
        url,
        imageUrl,
        status,
        startAt,
        deadlineAt,
    } = projectData;
    const openPop = () => {
        window.open(url, "_target", "width=500,height=600");
    };
    return (
        <Wrap>
            <InfoWrap>
                <Col width={'20%'}>
                    <Logo>Logo</Logo>
                </Col>
                <Col width={'30%'}>
                    <Title>{name}</Title>
                    <Txt top="30px">오픈일: {dayjs(startAt).format('YYYY년 MM월 DD일')}</Txt>
                    <Txt top="5px">마감일: {dayjs(deadlineAt).format('YYYY년 MM월 DD일')}</Txt>
                    <Txt top="5px">서비스 확인 경로</Txt>
                    <Txt onClick={openPop}><Emp color="#0054FF">{url}</Emp></Txt>
                </Col>
                <Col width={'30%'}>
                    <Category>#{category}</Category>
                    <Txt top="30px">보상 금액: <Emp color="#1DDB16">{RewardPriceType[reward]}</Emp></Txt>
                    <Txt top="5px">버그 채택 후 <Emp color="#FF0000">{RewardDurationType[reward_duration]}일</Emp> 이내 보상</Txt>
                    <Txt top="5px">버그 채택율: <Emp color="#FF0000">100%</Emp></Txt>
                    <Txt top="5px">보상 지급율: <Emp color="#FF0000">100%</Emp></Txt>
                </Col>
                <Col width={'20%'} />
            </InfoWrap>
            <div style={{ marginTop: '30px' }}>
                <Slider images={['/img_notfound.png']} height="300px" radius="10px" />
            </div>
            <FormControl style={{ width: '100%', marginTop: '30px' }}>
                <TextField
                    id="contents"
                    label="프로젝트 설명"
                    name="contents"
                    multiline
                    rows={4}
                    value={contents}
                    variant="outlined"
                />
            </FormControl>
        </Wrap>
    );
};

export default Confirm;