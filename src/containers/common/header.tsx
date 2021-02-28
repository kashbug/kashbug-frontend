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
const Logo = () => {
    const Box = styled.span`
        font-size: 30px;
        font-family: Roboto, sans-serif;
    `;
    const Color = styled.span`
        color: #2ecc71;
    `;
    return (
        <Link href={'/'} passHref>
            <Box><Color>Kash</Color>bug</Box>
        </Link>
    )
}
const MenuList = styled.ul`
    display: flex;
`;
const Menu = ({ href, name }: MenuProps) => {
    const Menu = styled.li`
        margin: 0 16px;
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    `;
    const Box = styled.a`
        font-size: 16px;
    `;
    return (
        <Menu>
            <Link href={'/'} passHref>
                <Box>{name}</Box>
            </Link>
        </Menu>
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
                        <Menu href="/" name="로그인" />
                    </MenuList>
                </nav>
            </Wrap>
        </>
    )
};

export default Header;