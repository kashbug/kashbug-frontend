import Layout from "../containers/layout/layout"
import MypageContainer from "../containers/mypage/MypageContainer";
import NavBar from "../containers/layout/navbar";

const Mypage = () => {
	return (
		<>
            <NavBar />
            <Layout>
                <MypageContainer />
            </Layout>
		</>
	)
};

export default Mypage;