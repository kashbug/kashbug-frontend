import Container from '@material-ui/core/Container';

type Props = {
	children: JSX.Element,
};

const Layout = ({ children }: Props) => {
	return (
		<Container maxWidth="lg">{children}</Container>
	)
};

export default Layout;