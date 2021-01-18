import Layout from "../containers/layout/layout"
import IndexContainer from "../containers/index/IndexContainer";
import NavBar from "../containers/layout/navbar"; 
import Slider from '../components/slider';

const Index = () => {
	return (
		<>
			<NavBar />
			<div style={{ marginTop: '60px'}}>
                <Slider images={['/img_notfound.png']} height={'400px'} />
            </div>
			<Layout>
				<IndexContainer />
			</Layout>
		</>
	)
};

export default Index;