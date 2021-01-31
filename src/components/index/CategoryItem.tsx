// next
import  Link from 'next/link';

import styled from 'styled-components';

const ItemWrap = styled.li`
    display: inline-block;
    padding: 23px;
`;
const LinkBox = styled.a`
    display: block;
`;
const LogoBox = styled.div`
    position: relative;
    display: flex;
    padding: 8px;
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;
    border: 1px solid #75D701 ;
    border-radius: 16px;
`;
const Logo = styled.img`
    width: 120px;
`;
const ClosingDate = styled.p`
    position: absolute;
    bottom: 0;
    right: 8px;
    color: #000000;
    font-weight: 500;
    text-shadow: -1px 0 #ffffff, 0 1px #ffffff, 1px 0 #ffffff, 0 -1px #ffffff;
    font-size: 0.875rem;
`;
const ProjectName = styled.p`
    display: flex;
    justify-content: center;
    padding: 8px 0;
    font-size: 0.9rem;
`;

const CategoryItem = ({...props}) => {
    return (
        <>
            <ItemWrap>
                <Link href={props.href} passHref>
                    <LinkBox>
                        <LogoBox>
                            <Logo src={props.projectLogo} alt="Logo"/>
                            <ClosingDate>{props.closingDate}</ClosingDate>
                        </LogoBox>
                        <ProjectName>{props.projectName}</ProjectName>
                    </LinkBox>
                </Link>
            </ItemWrap>
        </>
    );
};

export default CategoryItem;