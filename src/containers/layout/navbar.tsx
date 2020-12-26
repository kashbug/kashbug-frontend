// mui
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);


const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    KashBug
                </Typography>
                <Button color="inherit">로그인</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default NavBar;