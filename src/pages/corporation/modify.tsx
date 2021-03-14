import Layout from '../../containers/layout/layout';
import ModifyContainer from '../../containers/corporation/modify/ModifyContainer';
import NavBar from '../../containers/layout/navbar';
import Footer from '../../components/common/footer';

const Modify = () => {
	return (
		<>
			<NavBar />
			<Layout>
				<ModifyContainer />
			</Layout>
			<Footer/>
		</>
	)
};

export default Modify;