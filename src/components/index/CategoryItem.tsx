import styled from 'styled-components';

const ItemWrap = styled.li`
    display: inline-block;
    padding: 16px;
    &:first-child {
        padding-left: 0;
    }
    &:last-child {
        padding-right: 0;
    }
`;
const LogoBox = styled.div`
    display: flex;
    padding: 8px;
    width: 200px;
    height: 200px;
    align-items: flex-end;
    justify-content: flex-end;
    background-color: #491651;
    border-radius: 16px;
`;
const Logo = styled.img`

`;
const ClosingDate = styled.p`
    color: #000000;
    font-weight: 500;
    text-shadow: -1px 0 #ffffff, 0 1px #ffffff, 1px 0 #ffffff, 0 -1px #ffffff;
    font-size: 0.875rem;
`;
const ProjectName = styled.p`
    display: flex;
    justify-content: center;
    padding: 8px 0;
    font-size: 1rem;
`;

const CategoryItem = ({...props}) => {
    return (
        <>
            <ItemWrap>
                <LogoBox>
                    <img src={props.projectLogo} alt="Logo"/>
                    <ClosingDate>{props.closingDate}</ClosingDate>
                </LogoBox>
                <ProjectName>{props.projectName}</ProjectName>
            </ItemWrap>
        </>
    );
};

export default CategoryItem;