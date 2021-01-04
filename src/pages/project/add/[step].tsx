import { NextPageContext } from 'next';
import NavBar from "../../../containers/layout/navbar";
import ProjectAddContainer from "../../../containers/project/add/ProjectAddContainer";

interface StepProps {
    asPath?: string;
}

const Step = ({ asPath }: StepProps) => {
    return(
        <>
            <NavBar />
            <ProjectAddContainer />
        </>
    );
};

Step.getInitialProps = async (ctx: NextPageContext) => {
    const { asPath } = ctx
    return { asPath };
}

export default Step;
