import Layout from '../../containers/layout/layout';
import CalculateDetailContainer from '../../containers/corporation/calculate/CalculateDetailContainer';
import NavBar from '../../containers/layout/navbar';
import Footer from '../../components/common/footer';

const CalculteDetail = () => {
	return (
		<>
			<NavBar />
			<Layout>
				<CalculateDetailContainer />
			</Layout>
			<Footer/>
		</>
	)
};

export default CalculteDetail;