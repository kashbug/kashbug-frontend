import Layout from "../containers/layout/layout"
import IndexContainer from "../containers/index/IndexContainer";
import NavBar from "../containers/layout/navbar";
import Slider from '../components/slider';

const Index = () => {
	return (
		<>
			<NavBar />
			<div style={{ marginTop: '60px', height: '400px' }}>
                <Slider />
            </div>
			<Layout>
				<IndexContainer />
			</Layout>
		</>
	)
};

export default Index;