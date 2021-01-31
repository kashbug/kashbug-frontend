import Layout from "../containers/layout/layout"
import MypageContainer from "../containers/mypage/MypageContainer";
import NavBar from "../containers/layout/navbar";
import Footer from '../components/common/footer';

const Mypage = () => {
	return (
		<>
            <NavBar />
            <Layout>
                <MypageContainer />
            </Layout>
			<Footer/>
		</>
	)
};

export default Mypage;