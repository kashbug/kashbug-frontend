import NavBar from '../containers/layout/navbar';
import LoginContainer from '../containers/login/LoginContainer';
import Footer from '../components/common/footer';

const Login = () => {
    return (
        <>
            <NavBar />
            <LoginContainer />
			<Footer/>
        </>
    );
};

export default Login;