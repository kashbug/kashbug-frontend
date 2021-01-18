// mui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Container,
} from '@material-ui/core';
// next
import  Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1rem',
        flexGrow: 1,
    },
  }),
);
interface NavBarProps {
    position?:string;
}

const NavBar = ({ position }: NavBarProps) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                // @ts-ignore
                position={ position || "fixed" }
            >
                <Container maxWidth="lg">
                    <Toolbar>
                        <Link href="/">
                            <a className={classes.title}>KashBug</a>
                        </Link>
                        <Link href="/faq">
                            <a>문의하기</a>
                        </Link>
                        <Link href="/login">
                            <a style={{ marginLeft: '10px' }}>로그인</a>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
};

export default NavBar;