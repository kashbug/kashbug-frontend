import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderWrap = styled.div`
    position:relative;height:${(props:any) => props.height || '400px'};
    background-image: url(${(props:any) => props.image || ''});
    background-repeat: no-repeat;
    background-size: cover; 
    background-position: center; 
    border-radius: ${(props:any) => props.radius || 0};
`;
const PointerWrap = styled.div`
    position:absolute;top:90%;left:50%;transform:translate(-50%,-50%);
    &::after {content:'';display:block;clear:both;}
`;
const Pointer = styled.div`
    width:10px;height:10px;border:1px solid #BDBDBD;border-radius:5px;float:left;margin: 3px;background-color:${props =>props.color || ''};
`;

const RightBtn = styled.div`
    position:absolute;top:50%;left:90%;transform:translate(-50%,-50%);border-right:3px solid #000;border-bottom:3px solid #000;width:15px;height:15px;transform:rotate(-45deg);cursor: pointer;
`;
const LeftBtn = styled.div`
    position:absolute;top:50%;left:10%;transform:translate(-50%,-50%);border-top:3px solid #000;border-left:3px solid #000;width:15px;height:15px;transform:rotate(-45deg);cursor: pointer;
`;
interface SliderProps {
    images: Array<string>;
    height: string;
    radius?: string;
};
interface ImageProps {
    image: string;
    id: string;
    active: boolean;
};
const Slider = ({ images, height, radius }: SliderProps) => {
    const [imageData, setImageData] = useState<ImageProps[]>([]);
    // 이미지 데이터 설정
    useEffect(() => {
        const tempImageData: ImageProps[] = images.map((v: any, i: number)=> ({ image: v, active: i === 0 ? true : false, id: `${i}_key` }));
        setImageData(tempImageData);
    }, []);
    const onRightBtn = () => {
        setImageData((prev:ImageProps[]) => {
            const activeIndex = prev.findIndex(v => v.active);
            const initActive = prev.map(v => ({ ...v, active: false }));
            return prev.map((v: ImageProps, i: number) => {
                let tempActive: boolean = v.active;
                if (tempActive) {
                    tempActive = false;
                }
                if (((activeIndex + 1) === prev.length) && i === 0) {
                    tempActive = true;
                }
                if ((activeIndex + 1) === i) {
                    tempActive = true;
                }
                return {
                    ...v,
                    active: tempActive,
                }
            });
        });
    };
    const onLeftBtn = () => {
        setImageData((prev:ImageProps[]) => {
            const activeIndex = prev.findIndex(v => v.active);
            const initActive = prev.map(v => ({ ...v, active: false }));
            return initActive.map((v: ImageProps, i: number) => {
                let tempActive: boolean = v.active;
                if ((activeIndex === 0 && initActive.length === i + 1)) {
                    tempActive = true;
                }
                if ((activeIndex - 1) === i) {
                    tempActive = true;
                }
                return {
                    ...v,
                    active: tempActive,
                }
            });
        });
    };
    return (
        // @ts-ignore
        <SliderWrap image={imageData.length > 0 && imageData.filter(v => v.active)[0].image} height={height} radius={radius}>
            <RightBtn onClick={onRightBtn} />
            <LeftBtn onClick={onLeftBtn} />
            <PointerWrap>
                {
                    imageData.map((v: ImageProps) => (
                        <Pointer key={v.id} color={v.active ? '#000' : ''}/>
                    ))
                }
            </PointerWrap>
        </SliderWrap>
    );
};

export default Slider;