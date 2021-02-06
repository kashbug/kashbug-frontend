import { createStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: any) =>
    createStyles({
        container: {
			padding: '88px 20px',
			minHeight: '100vh',
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