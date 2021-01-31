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
const BennerText = styled.p`
    position: absolute;
    top: 50%;
    left: 10%;
    font-size: 2rem;
    text-shadow: 0.3px 0.3px #ffffff, 2px 2px #aaaaaa;
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
                            <img src="/benner.png" style={{ height: 'auto', width:'100%' }}/>
                            <BennerText>소프트웨어 테스팅 플랫폼 Kashbug은<br/>소프트웨어 기업이 테스터와 사용자를 만나는 공간!</BennerText>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </SilderWrapper>
    );
};

export default Slider;