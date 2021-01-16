import Layout from '../../containers/layout/layout';
import ProjectDetailContainer from '../../containers/project/detail/ProjectDetailContainer';
import NavBar from "../../containers/layout/navbar"; 

const ProjectDetail = () => {
    return (
        <>
            <NavBar position="relative" />
            <Layout>
                <ProjectDetailContainer />
            </Layout>
        </>
    );
};

export default ProjectDetail;