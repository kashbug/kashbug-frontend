import styled from 'styled-components';

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
const IntroText = styled.p`
    font-size: 32px;
    color: #ffffff;
`;
const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto 100px;
    padding: 52px 0 24px;
    max-width: 800px;
    min-height: calc(100vh - 257px);
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
    margin-top: 24px;
    padding: 12px 16px;
    width: 100%;
    height: 34px;
    background-color: #F5F5F5;
    border: 0;
    outline: 0;
    font-size: 16px;
`;
const TextareaInput = styled.textarea`
    margin-top: 8px;
    padding: 12px 16px;
    width: 100%;
    height: 320px;
    background-color: #F5F5F5;
    border: 0;
    outline: 0;
    font-size: 16px;
    resize: none;
`;
const BugList = styled.ul`
    margin-top: 24px;
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

const AddContainer = () => {
    return (
        <>
            <Benner>
                <BennerBox>
                    <IntroText>버그 등록하기</IntroText>
                </BennerBox>
            </Benner>
            <Wrap>
                <SelectInput>
                    <option value="" disabled selected>버그</option>
                </SelectInput>
                <TextInput type="text" placeholder="제목" />
                <TextareaInput placeholder="내용" />
                <BugList>
                    <Bug>
                        <BugAdd>+</BugAdd>
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
            </Wrap>
        </>
    );
};

export default AddContainer;