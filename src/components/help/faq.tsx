import styled from 'styled-components';

const QuestionsBox = styled.label`
    cursor: pointer;
`;
const QuestionsCheck = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip:rect(0,0,0,0);
    border: 0;
`;
const Questions = styled.p`
    padding: 16px 0;
    font-size: 20px;
`;
const AnswersBox = styled.dd`
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid #dfdfdf;
`;
const Answers = styled.div`
    position: absolute;
    padding-bottom: 12px;
    font-size: 16px;
    color: #888888;
`;

const QnaToggleHandler = e => {
    console.log('start');
    const targetVal = e.target.value;
    const targetBoxs = document.getElementsByClassName('answers');
    const targetBox = document.getElementById(targetVal);
    const maxHeight = targetBox.children[0].offsetHeight;
    let checkVal = 0;
    for (let i = 0; i < targetBoxs.length; i++) {
        targetBoxs[i].style.height = '0';
    }
    var interval = setInterval(() => {
        console.log(checkVal === maxHeight);
        if (checkVal === maxHeight) {
            clearInterval(interval);
        } else {
            checkVal++;
            targetBox.style.height = checkVal + 'px';
        }
    }, 10);
}

const Qna = ({ idx, questions, answers }: QnaProps) => {
    return (
        <>
            <dt>
                <QuestionsBox>
                    <QuestionsCheck type="radio" name="qna" value={idx} onChange={QnaToggleHandler} />
                    <Questions>Q. {questions}</Questions>
                </QuestionsBox>
            </dt>
            <AnswersBox id={idx} className="answers">
                <Answers>
                    <p>{answers}</p>
                </Answers>
            </AnswersBox>
        </>
    )
}

export default Qna;