// mui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Container } from '@material-ui/core';
// next
import  Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        headerWrap: {
            position: 'fixed',
            backgroundColor: '#ffffff',
            boxShadow: 'none'
        },
        headerBox: {
            justifyContent: 'space-between',
            minHeight: '88px'
        },
        title: {
            fontWeight: 'bold',
            fontSize: '1rem',
            color: '#3B4E32'
        },
        menu: {
            marginRight: '16px',
            color: '#3B4E32',
            '&:last-child': {
                marginRight: 0
            }
        },
    }),
);
interface NavBarProps {
    position?:string;
}

const NavBar = ({ position }: NavBarProps) => {
    const classes = useStyles();
    return (
        <>
            <AppBar className={classes.headerWrap}>
                <Container maxWidth="lg">
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