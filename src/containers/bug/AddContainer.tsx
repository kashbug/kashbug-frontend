import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto 100px;
    padding: 52px 0 24px;
    max-width: 900px;
    border-bottom: 1px solid #e6e6e6;
`;

const AddContainer = () => {
    return (
        <Wrap>
            <select>
                <option>a</option>
                <option>a</option>
                <option>a</option>
            </select>
            <input type="text" />
            <textarea />
            
        </Wrap>
    );
};

export default AddContainer;