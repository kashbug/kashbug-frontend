import  Link from 'next/link';
import styled from 'styled-components';

interface MenuProps {
    href: string;
    name: string;
}

const Wrap = styled.header`
    margin: 0 320px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Logo = () => {
    const Box = styled.a`
        font-size: 30px;
    `;
    return (
        <Link href={'/'} passHref>
            <Box>Kashbug</Box>
        </Link>
    )
}
const MenuList = styled.ul`
    display: flex;
`;
const Menu = ({ href, name }: MenuProps) => {
    const Menu = styled.li`
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