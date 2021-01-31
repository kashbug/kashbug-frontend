import Layout from "../containers/layout/layout"
import IndexContainer from "../containers/index/IndexContainer";
import NavBar from "../containers/layout/navbar"; 
import Slider from '../components/slider';
import Footer from '../components/common/footer';

const Index = () => {
	return (
		<>
			<NavBar />
			<Slider maxWidth="100%" />
			<Layout>
				<IndexContainer />
			</Layout>
			<Footer/>
		</>
	)
};

export default Index;