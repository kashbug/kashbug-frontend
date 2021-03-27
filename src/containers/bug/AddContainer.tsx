import styled from 'styled-components';

interface ButtonProps {
    bgc?: String;
    color?: String;
}

const Benner = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: center no-repeat url("/addbugbenner.png");
`;
const BennerBox = styled.div`
    margin: 0 auto;
    padding: 32px 0;
    width: 800px;
    text-align: left;
`;
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto 100px;
    padding: 24px 0;
    max-width: 800px;
    min-height: calc(100vh - 257px);
`;
const CorporationName = styled.p`
    font-size: 18px;
    color: #efefef;
`;
const ProjectName = styled.p`
    padding-bottom: 12px;
    font-size: 32px;
    font-weight: bold;
    color: #ffffff;
`;
const ProjectInfor = styled.p`
    font-size: 16px;
    color: #ffffff;
`;
const SelectInput = styled.select`
    margin-top: 16px;
    padding: 12px 16px;
    width: 100%;
    height: 42px;
    background-color: #F5F5F5;
    border: 0;
    outline: 0;
    font-size: 16px;
`;
const TextInput = styled.input`
    margin-top: 16px;
    padding: 12px 16px;
    width: 100%;
    height: 34px;
    background-color: #F5F5F5;
    border: 0;
    outline: 0;
    font-size: 16px;
`;
const TextareaInput = styled.textarea`
    margin-top: 16px;
    padding: 12px 16px;
    width: 100%;
    height: 200px;
    background-color: #F5F5F5;
    border: 0;
    outline: 0;
    font-size: 16px;
    resize: none;
`;
const BugList = styled.ul`
    margin: 24px 0;
    font-size: 0;
`;
const Bug = styled.li`
    display: inline-block;
    margin-left: 16px;
    width: 188px;
    height: 188px;
    vertical-align: top;
    background-color: #ababab;
    &:first-child {
        margin-left: 0;
    }
`;
const FileLabel = styled.label`
    display: block;
    width: 100%;
    height: 100%;
    font-size: 31px;
    color: #ffffff;
    background-color: #2ecc71;
    border: 1px solid #2ecc71;
    text-align: center;
    cursor: pointer;
    :hover {
        background-color: #27b160;
        border: 1px solid #27b160;
    }
    &:after {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
`;
const FileInput = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
`;
const BugAdd = () => {
    return (
        <FileLabel>
            <span>+</span>
            <FileInput type="file"/>
        </FileLabel>
    )
}
const BugImg = styled.img`
    width: 100%;
    height: 100%;
`; 
const Button = styled.button<ButtonProps>`
    width: 50%;
    padding: 16px 24px;
    outline: 0;
    border: 1px solid #2ecc71;
    background-color: ${(props:any) => props.bgc || '#ffffff'};
    color: ${(props:any) => props.color || '#222222'};
    transition: 0.2s;
    cursor: pointer;
    :hover {
        background-color: #27b160;
        border: 1px solid #27b160;
        color: #ffffff;
    }
`;

const AddContainer = () => {
    return (
        <>
            <Benner>
                <BennerBox>
                    <CorporationName>무지익</CorporationName>
                    <ProjectName>[무지익] 새로운 프로젝트</ProjectName>
                    <ProjectInfor>보상 금액: 10,000원</ProjectInfor>
                    <ProjectInfor>오픈일: 2021/12/32</ProjectInfor>
                    <ProjectInfor>마감일: 2021/12/32</ProjectInfor>
                    <ProjectInfor>버그 채택 후 이내 1주일이내 보상</ProjectInfor>
                </BennerBox>
            </Benner>
            <Wrap>
                <SelectInput>
                    <option value="" disabled selected>버그 유형</option>
                </SelectInput>
                <TextInput type="text" placeholder="제목" />
                <TextareaInput placeholder="문제 증상" />
                <TextareaInput placeholder="테스트 환경" />
                <TextareaInput placeholder="재현 방법" />
                <BugList>
                    <Bug>
                        <BugAdd />
                    </Bug>
                    <Bug>
                        <BugImg src="/img_notfound.png" />
                    </Bug>
                    <Bug>
                        <BugImg src="/img_notfound.png" />
                    </Bug>
                    <Bug>
                        <BugImg src="/img_notfound.png" />
                    </Bug>
                </BugList>
                <div>
                    <Button>뒤로가기</Button>
                    <Button bgc="#2ecc71" color="#ffffff">등록하기</Button>
                </div>
            </Wrap>
        </>
    );
};

export default AddContainer;