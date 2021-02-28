import styled from 'styled-components';

const Box = styled.div`
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 306px;
    height: 306px;
    padding: 45px 30px;
    background-color: #fbfbff;
`;
const Title = styled.p`
    font-size: 28px;
`;
const Text = styled.p`
    margin-top: 13px;
    font-size: 16px;
    color: #c9c9c9;
`;
const AddProjectInfor = ({...props}) => {
    return (
        <>
            <Box>
                <img src={props.icon} alt="아이콘"/>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </Box>
        </>
    )
};

export default AddProjectInfor;