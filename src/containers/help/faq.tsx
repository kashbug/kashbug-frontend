import  Link from 'next/link';
import styled from 'styled-components';

interface MenuProps {
    href: string;
    name: string;
}

const Wrap = styled.header`
    max-width: 1304px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Faq = () => {
    return (
        <>
            <Wrap>
            </Wrap>
        </>
    )
};

export default Faq;