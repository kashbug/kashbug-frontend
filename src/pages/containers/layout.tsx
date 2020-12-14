import styled from 'styled-components';

const CommonLayout = styled.div`
	max-width:1290px;min-width:320px;padding:20px;
`;

type Props = {
	children: JSX.Element,
};

const Layout = ({ children }: Props) => {
	return (
		<CommonLayout>{children}</CommonLayout>
	)
};

export default Layout;