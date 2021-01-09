import styled from "styled-components";
// mui
import { TextField, FormControl, } from '@material-ui/core';

const Pictures = styled.div`
    margin-top:20px;width:100%;
`;
interface Picture {
    src: string;
    alt: string;
    id: string;
}
const MobilePicBox = styled.div`
    display:inline-block;box-sizing:border-box;width:50%;padding:2px;
`;
const WebPicBox = styled.div`
    display:inline-block;
    box-sizing:border-box;
    width:20%;
    &:nth-child(2){margin:0 20%;}
`;
const Picture = styled.img.attrs<Picture>(props => ({
    src: props.src,
    alt: props.alt,
    id: props.id,
  }))`
    width:100%;height:auto;border-radius:10px;
`;
const WebAddPic = styled.div`
    position:relative;display:inline-block;box-sizing:border-box;width:20%;padding-top: 20%;border: 1px solid #000;border-radius:10px;
`;
const MobileAddPic = styled.div`
    position:relative;display:inline-block;box-sizing:border-box;width:50%;padding-top:40%;border: 1px solid #000;border-radius:10px;
`;
const Plus = styled.span`
    position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:40px;color:#0054FF;
`;
interface SubInfoProps {
    layoutSize: string;
};
const SubInfo = ({ layoutSize }: SubInfoProps) => {
    return (
        <div>
            <FormControl style={{ width: '100%' }}>
                <TextField
                    id="explain"
                    label="프로젝트 설명"
                    multiline
                    rows={4}
                    placeholder="프로젝트 설명을 작성해주세요."
                    variant="outlined"
                />
            </FormControl>
            <Pictures>
                {
                    layoutSize === 'xs' ? (
                        <>
                            <MobilePicBox>
                                <Picture src="/naver.png" alt='test' id='test' />
                            </MobilePicBox>
                            <MobilePicBox>
                                <Picture src="/naver.png" alt='test' id='test' />
                            </MobilePicBox>
                            <MobileAddPic>
                                <Plus>+</Plus>
                            </MobileAddPic>
                        </>
                    ) : (
                        <>
                            <WebPicBox>
                                <Picture src="/naver.png" alt='test' id='test' />
                            </WebPicBox>
                            <WebPicBox>
                                <Picture src="/naver.png" alt='test' id='test' />
                            </WebPicBox>
                            <WebAddPic>
                                <Plus>+</Plus>
                            </WebAddPic>
                        </>
                    )
                }
            </Pictures>
        </div>
    );
};

export default SubInfo;