// next
import  Link from 'next/link';
// stled-components
import styled from 'styled-components';

interface MenuProps {
    href: string;
    name: string;
}

const Wrap = styled.footer`
    bottom: 0;
    right: 0;
    left: 0;
    padding: 24px 0;
    background-color:#fafafa;
`;
const MenuList = styled.ul`
    display: flex;
    justify-content: center;
    align-content: center;
`;
const MenuBox = styled.li`
    margin: 0 24px;
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
`;
const MenuAnchor = styled.a`
    font-size: 16px;
    font-weight: bold;
    color: #444444;
`;
const Menu = ({ href, name }: MenuProps) => {
    return (
        <MenuBox>
            <Link href={href} passHref>
                <MenuAnchor>{name}</MenuAnchor>
            </Link>
        </MenuBox>
    )
}
const InforList = styled.ul`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-content: center;
`;
const Infor = styled.li`
    padding: 0 5px;
    font-size: 14px;
    color: #808080;
    border-right: 1px solid #808080;
    &:first-child {
        padding-left: 0;
    }
    &:last-child {
        padding-right: 0;
        border-right: 0;
    }
`;
const Copyright = styled.p`
    margin-top: 21px;
    font-size: 14px;
    color: #999999;
    text-align: center;
`;
const Logo = styled.p`
    margin-top: 44px;
    font-size: 30px;
    font-weight: bolder;
    color: #d1d1d1;
    text-align: center;
`;

const Footer = () => {
    return (
        <>
            <Wrap>
                <nav>
                    <MenuList>
                        <Menu href="/" name="서비스소개" />
                        <Menu href="/" name="이용약관" />
                        <Menu href="/" name="개인정보처리방침" />
                        <Menu href="/" name="고객지원" />
                    </MenuList>
                </nav>
                <InforList>
                    <Infor>대표이사 최유빈</Infor>
                    <Infor>사업자 등록번호 123-455-67890</Infor>
                    <Infor>서울특별시 서초구 서초동 서초로 123번길 45</Infor>
                </InforList>
                <Copyright>ⓒ 2021 KASHBUG  All rights reserved.</Copyright>
                <Logo>Kashbug</Logo>
            </Wrap>
        </>
    )
};

export default Footer;