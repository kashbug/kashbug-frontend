import Header from "../containers/common/header"; 
import Benner from "../components/index/benner";
import Intro from "../components/index/intro";
import AddProject from "../containers/index/addproject";
import Explanation from "../components/index/explanation";
import Projects from "../containers/index/projectlist";
import Footer from '../components/common/footer';

const Index = () => {
	return (
		<>
			<Header />
			<Benner />
			<Intro />
			<AddProject />
			<Explanation />
			<Projects />
			<Footer/>
		</>
	)
};

export default Index;