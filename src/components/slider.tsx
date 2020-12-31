import styled from 'styled-components';

const SliderWrap = styled.div`
    position:relative;height:100%;border:1px solid blue;
`;
const PointerWrap = styled.div`
    position:absolute;top:90%;left:50%;transform:translate(-50%,-50%);
    &::after {content:'';display:block;clear:both;}
`;
const Pointer = styled.div`
    width:10px;height:10px;border:1px solid #000;border-radius:5px;float:left;margin: 3px;background-color:${props =>props.color|| ''};
`;

const RightBtn = styled.div`
    position:absolute;top:50%;left:90%;transform:translate(-50%,-50%);border-right:3px solid #000;border-bottom:3px solid #000;width:15px;height:15px;transform:rotate(-45deg);
`;
const LeftBtn = styled.div`
    position:absolute;top:50%;left:10%;transform:translate(-50%,-50%);border-top:3px solid #000;border-left:3px solid #000;width:15px;height:15px;transform:rotate(-45deg);
`;

const Slider = () => {
    return (
        <SliderWrap>
            <RightBtn />
            <LeftBtn />
            <PointerWrap>
                <Pointer color="blue"/>
                <Pointer />
                <Pointer />
            </PointerWrap>
        </SliderWrap>
    );
};

export default Slider;