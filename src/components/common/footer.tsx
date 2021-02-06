// next
import  Link from 'next/link';
// stled-components
import styled from 'styled-components';
// mui
import { Container } from '@material-ui/core';

const FooterWrap = styled.div`
    bottom: 0;
    right: 0;
    left: 0;
    padding: 54px 0;
    height: 230px;
    background-color:#3B4E32;
`;
const FooterMenuList = styled.ul`
    display: flex;
    padding-bottom: 16px;
`;
const FooterMenu = styled.li`
    margin-right: 36px;
    &:last-child {
        margin-right: 0;
    }
`;
const NavLink = ({ href, name }:any) => {
    const FooterLink = styled.a`
        font-size: 1rem;
        color: #F8F8FF;
    `;
    return (
        <Link href={href} passHref>
            <FooterLink>{name}</FooterLink>
        </Link>
    )
}
const FooterInfor = styled.p`
    padding-top: 8px;
    font-size: 0.9rem;
    color: #F8F8FF;
`;

const Footer = () => {
    return (
        <>
            <FooterWrap>
                <Container maxWidth="xl">
                    <FooterMenuList>
                        <FooterMenu>
                            <NavLink href="/" name="서비스소개"></NavLink>
                        </FooterMenu>
                        <FooterMenu>
                            <NavLink href="/" name="이용약관"></NavLink>
                        </FooterMenu>
                        <FooterMenu>
                            <NavLink href="/" name="개인정보처리방침"></NavLink>
                        </FooterMenu>
                        <FooterMenu>
                            <NavLink href="/" name="고객지원"></NavLink>
                        </FooterMenu>
                    </FooterMenuList>
                    <FooterInfor>Kashbug(주) 서울특별시 서초구 서초동 서초로 123번길 45</FooterInfor>
                    <FooterInfor>사업자등록번호 : 123-45-67890</FooterInfor>
                    <FooterInfor>COPYRIGHT Kashbug. All RIGHTS RESERVED.</FooterInfor>
                </Container>
            </FooterWrap>
        </>
    )
};

export default Footer;