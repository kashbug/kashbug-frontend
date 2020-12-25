import Layout from '../containers/layout/layout';
import QnaContainer from '../containers/qna/QnaContainer';
import NavBar from '../containers/layout/navbar';

const Faq = () => {
	return (
		<>
			<NavBar />
			<Layout>
				<QnaContainer />
			</Layout>
		</>
	)
};

export default Faq;