import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
			padding: '88px 0',
			minHeight: 'calc(100vh - 88px)'
        },
    }),
);
type Props = {
	children: JSX.Element,
};

const Layout = ({ children }: Props) => {
    const classes = useStyles();
	return (
		<Container className={classes.container} maxWidth="lg">{children}</Container>
	)
};

export default Layout;