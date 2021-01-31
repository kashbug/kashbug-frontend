import SignupContainer from "../containers/signup/SignupContainer";
import NavBar from "../containers/layout/navbar";
import Footer from '../components/common/footer';

const Signup = () => {
    return (
        <>
            <NavBar />
            <SignupContainer />
			<Footer/>
        </>
    );
};

export default Signup;