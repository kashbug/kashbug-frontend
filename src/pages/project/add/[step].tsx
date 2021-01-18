import { NextPageContext } from 'next';
import NavBar from "../../../containers/layout/navbar";
import ProjectAddContainer from "../../../containers/project/add/ProjectAddContainer";
import Layout from "../../../containers/layout/layout";

interface StepProps {
    asPath?: string;
}

const Step = ({ asPath }: StepProps) => {
    return(
        <>
            <NavBar position="relative"/>
            <Layout>
                <ProjectAddContainer />
            </Layout>
        </>
    );
};

Step.getInitialProps = async (ctx: NextPageContext) => {
    const { asPath } = ctx
    return { asPath };
}

export default Step;
