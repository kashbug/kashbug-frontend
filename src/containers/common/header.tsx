import  Link from 'next/link';
import styled from 'styled-components';

interface MenuProps {
    href: string;
    name: string;
}

const Wrap = styled.header`
    max-width: 1304px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LogoBox = styled.a`
    font-size: 30px;
    font-family: Roboto, sans-serif;
`;
const LogoAfter = styled.span`
    color: #2ecc71;
`;
const Logo = () => {
    return (
        <Link href={'/'} passHref>
            <LogoBox><LogoAfter>Kash</LogoAfter>bug</LogoBox>
        </Link>
    )
}
const MenuList = styled.ul`
    display: flex;
`;
const MenuBox = styled.li`
    margin: 0 16px;
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
`;
const MenuAnchor = styled.a`
    font-size: 16px;
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

const Header = () => {
    return (
        <>
            <Wrap>
                <h1>
                    <Logo/>
                </h1>
                <nav>
                    <MenuList>
                        <Menu href="/login" name="로그인" />
                        <Menu href="/signup" name="회원가입" />
                    </MenuList>
                </nav>
            </Wrap>
        </>
    )
};

export default Header;