import NavBar from "../../containers/layout/navbar";
import AddContainer from "../../containers/bug/AddContainer";
import Layout from "../../containers/layout/layout";


const BugId = () => {
    return(
        <>
            <NavBar color="#F8F8FF" />
            <Layout>
                <AddContainer />
            </Layout>
        </>
    );
};

export default BugId;
