import styled from 'styled-components';

interface MenuProps {
    href: string;
    name: string;
}

const Wrap = styled.div`
    background-color: #10c05b;
`;
const Benner = styled.p`
    max-width: 1304px;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    color: #ffffff;
    &:after {
        content: '';
        display: inline-block;
        height: 80px;
        vertical-align: middle;
    }
`;

const Header = () => {
    return (
        <>
            <Wrap>
                <Benner>이곳은 이벤트 배너 영역입니다.</Benner>
            </Wrap>
        </>
    )
};

export default Header;