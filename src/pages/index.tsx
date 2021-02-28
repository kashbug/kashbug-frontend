import Header from "../containers/common/header"; 
import Benner from "../components/index/benner";
import Intro from "../components/index/intro";
import IndexContainer from "../containers/index/IndexContainer";
import Footer from '../components/common/footer';

const Index = () => {
	return (
		<>
			<Header />
			<Benner />
			<Intro />
			<IndexContainer />
			<Footer/>
		</>
	)
};

export default Index;