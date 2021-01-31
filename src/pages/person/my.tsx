import NavBar from "../../containers/layout/navbar";
import Layout from "../../containers/layout/layout";
import MyContainer from "../../containers/person/MyContainer";

const My = () => {
    return (
        <>
            <NavBar />
            <Layout>
                <MyContainer />
            </Layout>
        </>
    )
};

export default My;