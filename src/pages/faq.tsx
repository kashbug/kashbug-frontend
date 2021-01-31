import Layout from '../containers/layout/layout';
import QnaContainer from '../containers/qna/QnaContainer';
import NavBar from '../containers/layout/navbar';
import Footer from '../components/common/footer';

const Faq = () => {
	return (
		<>
			<NavBar />
			<Layout>
				<QnaContainer />
			</Layout>
			<Footer/>
		</>
	)
};

export default Faq;