import Layout from '../../containers/layout/layout';
import ModifyContainer from '../../containers/corporation/modify/ModifyContainer';
import NavBar from '../../containers/layout/navbar';

const Modify = () => {
	return (
		<>
			<NavBar />
			<Layout>
				<ModifyContainer />
			</Layout>
		</>
	)
};

export default Modify;