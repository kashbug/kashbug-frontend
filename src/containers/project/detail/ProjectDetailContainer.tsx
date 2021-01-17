import styled from "styled-components";
import Info from "./Info";
import Slider from "../../../components/slider";
// mui
import { TextField, FormControl, Button } from '@material-ui/core';

const Wrap = styled.div`
    margin-top:20px;
`;
const ProjectDetailContainer = () => {
    return (
        <Wrap>
            <Info />
            <div style={{ marginTop: '30px' }}>
                <Slider images={['/img_notfound.png']} height="300px" radius="10px" />
            </div>
            <FormControl style={{ width: '100%', marginTop: '30px' }}>
                <TextField
                    id="contents"
                    label="프로젝트 설명"
                    name="contents"
                    multiline
                    rows={4}
                    value="aaaa"
                    variant="outlined"
                />
            </FormControl>
            <div style={{ margin: '30px 0', textAlign: 'center' }}>
                <Button variant="contained" color="primary">버그 등록하기</Button>
            </div>
        </Wrap>
    );
};

export default ProjectDetailContainer;