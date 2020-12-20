import styled from 'styled-components';

const CommonLayout = styled.div`
	padding:20px;
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