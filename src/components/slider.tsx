import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

interface SliderProps {
    images?: Array<string>;
    maxWidth?: string;
    radius?: string;
};
interface WrapProps {
    maxWidth?: string;
    radius?: string;
};
const SilderWrapper = styled.div<WrapProps>`
    margin: 0 auto;
    max-width: ${(props:any) => props.maxWidth || '320px'};
    border-radius: ${(props:any) => props.radius || '0px'};
`;
SwiperCore.use([Navigation, Pagination]);

const Slider = ({ images, maxWidth, radius }: SliderProps) => {
    const [imageData, setImageData] = useState([]);
    useEffect(() => {
        if (images) {
            const temp = images.map((v, i) => (
                <SwiperSlide tag="li" key={`slide-${i}`}>
                    <img src={v} style={{ height: 'auto', width:'100%' }}/>
                </SwiperSlide>
            ));
            // @ts-ignore
            setImageData(temp);
        }
    }, [])
    return (
        <SilderWrapper maxWidth={maxWidth} radius={radius}>
            <Swiper tag="ul" navigation pagination>
                {
                    imageData.length > 0 ? imageData : (
                        <SwiperSlide tag="li" key={`slide`}>
                            <img src="/img_notfound.png" style={{ height: 'auto', width:'100%' }}/>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </SilderWrapper>
    );
};

export default Slider;