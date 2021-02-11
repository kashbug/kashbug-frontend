// mui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Container } from '@material-ui/core';
// next
import  Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerWrap: {
            boxShadow: 'none'
        },
        headerBox: {
            justifyContent: 'space-between',
            minHeight: '88px'
        },
        title: {
            fontWeight: 'bold',
            fontSize: '1rem',
        },
        menu: {
            marginRight: '16px',
            '&:last-child': {
                marginRight: 0
            }
        },
    }),
);
interface NavBarProps {
    color?: string;
    textColor?: string;
}

const NavBar = ({ color, textColor }: NavBarProps) => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.headerWrap} style={{ backgroundColor: color || '#fff', color: textColor || '#3B4E32', position: 'fixed' }}>
                <Container maxWidth="xl">
                    <Toolbar className={classes.headerBox}>
                        <Link href="/">
                            <a className={classes.title}>KashBug</a>
                        </Link>
                        <nav className={classes.menu}>
                            <Link href="/faq">
                                <a className={classes.menu}>문의하기</a>
                            </Link>
                            <Link href="/login">
                                <a className={classes.menu}>로그인</a>
                            </Link>
                        </nav>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
};

export default NavBar;