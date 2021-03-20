import Header from "../../containers/common/header";
import ProjectDetailContainer from '../../containers/project/detail/ProjectDetailContainer';
import Footer from '../../components/common/footer';

const ProjectDetail = () => {
    return (
        <>
            <Header />
            <ProjectDetailContainer />
            <Footer />
        </>
    );
};

export default ProjectDetail;