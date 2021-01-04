import styled from "styled-components";

const AddWrap = styled.div`
    position: fixed;
  width: 100%;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  background-color: red;
  padding: 20px 50px;
  border-radius: 40px;
  border:1px solid red;
`;

const ProjectAddContainer = () => {
    return (
        <AddWrap>body</AddWrap>
    );
};

export default ProjectAddContainer;