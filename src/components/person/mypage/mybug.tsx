import styled from "styled-components";

interface BugProps {
    flex?: String;
    width?: String;
    textAlign?: String;
    color?: String;
}

const Bug = styled.li`
display: flex;
align-items: center;
:first-child {
    height: 56px;
}
`;
const BugCategory = styled.p<BugProps>`
flex: ${(props:any) => props.flex};
text-align: ${(props:any) => props.textAlign || 'center'};
margin: 4px 0;
padding: 0 8px;
width: ${(props:any) => props.width};
text-overflow:ellipsis;
white-space:nowrap;
word-wrap:normal;
overflow:hidden;
font-size: 16px;
border-left: 1px solid #cacaca;
color: ${(props:any) => props.color || '#333333'};
:first-child {
    border-left: 0;
}
`;
const BugNumber = styled.p<BugProps>`
text-align: center;
margin: 4px 0;
padding: 0 8px;
width: ${(props:any) => props.width};
font-weight: 600;
border-left: 1px solid #cacaca;
`;
const CorporationName = styled.span`
display: block;
font-size: 14px;
color: #bbbbbb;
`;

const MyBug = ({...props}) => {
    return (
        <>
            <Bug>
                <BugCategory width={'280px'} textAlign={'left'}>
                    <CorporationName>{props.corporationName}</CorporationName>
                    <span>{props.projectName}</span>
                </BugCategory>
                <BugNumber width={'100px'}>{props.price}</BugNumber>
                <BugNumber width={'100px'}>{props.registrationDate}</BugNumber>
                <BugCategory width={'100px'}>{props.bugType}</BugCategory>
                <BugCategory flex={'1 1'}>{props.bugTitle}</BugCategory>
                <BugCategory width={'100px'} color={props.stateColor}>{props.state}</BugCategory>
            </Bug>
        </>
    )
};

export default MyBug;