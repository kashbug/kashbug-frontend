import styled from "styled-components";

const Wrap = styled.div`
    outline:1px solid blue;
    &:after{content:'';display:block;clear: both;}
`;
const Info = () => {
    return (
        <Wrap>
            <div>aa</div>
            <div>b</div>
            <div>ca</div>
            <div>da</div>
        </Wrap>
    );
};

export default Info;