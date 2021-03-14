import Layout from '../../containers/layout/layout';
import CalculateListContainer from '../../containers/corporation/calculate/CalculateListContainer';
import NavBar from '../../containers/layout/navbar';
import Footer from '../../components/common/footer';

const CalculateList = () => {
	return (
		<>
			<NavBar />
			<Layout>
                <CalculateListContainer/>
			</Layout>
			<Footer/>
		</>
	)
};

export default CalculateList;