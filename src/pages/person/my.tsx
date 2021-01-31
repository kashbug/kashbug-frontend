import NavBar from "../../containers/layout/navbar";
import Layout from "../../containers/layout/layout";
import MyContainer from "../../containers/person/MyContainer";

const My = () => {
    return (
        <>
            <NavBar color="#56A902" textColor="#fff" />
            <Layout>
                <MyContainer />
            </Layout>
        </>
    )
};

export default My;