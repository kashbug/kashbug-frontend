import Layout from "../containers/layout/layout"
import IndexContainer from "../containers/index/IndexContainer";
import NavBar from "../containers/layout/navbar"; 
import Slider from '../components/slider';

const Index = () => {
	return (
		<>
			<NavBar />
			<Slider maxWidth="800px" />
			<Layout>
				<IndexContainer />
			</Layout>
		</>
	)
};

export default Index;