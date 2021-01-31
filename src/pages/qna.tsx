import NavBar from "../containers/layout/navbar";
import Layout from "../containers/layout/layout";
import QnaContainer from "../containers/corporation/qna/QnaContainer";

const Qna = () => {
	return (
		<>
			<NavBar />
			<Layout>
				<QnaContainer />
			</Layout>
		</>
	)
};

export default Qna;