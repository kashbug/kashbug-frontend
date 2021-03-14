import NavBar from "../../containers/layout/navbar";
import ModifyContainer from "../../containers/bug/ModifyContainer";
import Layout from "../../containers/layout/layout";


const Modify = () => {
    return(
        <>
            <NavBar color="#F8F8FF" />
            <Layout>
                <ModifyContainer />
            </Layout>
        </>
    );
};

export default Modify;
