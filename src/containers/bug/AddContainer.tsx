import styled from 'styled-components';
//  mui
import {
    FormControl,
    TextField,
    Button,
    Select,
    MenuItem,
    InputLabel,
} from '@material-ui/core';
// enum
import { BugType } from '../../enumType/Bug';

interface Img {
    src: string;
    alt: string;
    id: string;
}
const Img = styled.img.attrs<Img>(props => ({
    src: props.src,
    alt: props.alt,
    id: props.id,
  }))`
    width:200px;height:200px;margin:5px;border-radius:10px;
`;
const BtnWrap = styled.div`
    margin-top:20px;
    text-align:center;
`;
const PicWrap = styled.div`
    margin-top:20px;
    text-align:center;
`;

const AddContainer = () => {
    return (
        <>
            <h2>버그 등록하기</h2>
            <FormControl style={{ width: '100%' }}>
                <InputLabel htmlFor="category">버그 종류</InputLabel>
                <Select
                    labelId="category"
                    id="category"
                >
                    {
                        Object.entries(BugType).map(v => (
                            <MenuItem key={v[0]} value={v[0]}>{v[1]}</MenuItem>
                        ))
                    }
                </Select>
                <TextField id="standard-basic" label="제목" style={{ marginTop: '20px' }} />
                <TextField
                    id="contents"
                    label="상세설명"
                    name="contents"
                    multiline
                    rows={4}
                    variant="outlined"
                    style={{ marginTop: '20px' }}
                />
            </FormControl>
            <PicWrap>
                <Img src="/img_notfound.png" />
                <Img src="/img_notfound.png" />
            </PicWrap>
            <BtnWrap>
                <Button variant="contained" color="primary">확인</Button>
                <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>취소</Button>
            </BtnWrap>
        </>
    );
};

export default AddContainer;