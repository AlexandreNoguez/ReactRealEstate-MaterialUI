// import "./style.css";
// import { useState } from "react";
// import Slider from "react-slick";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import { useApi } from "../../hooks/useApi";

// interface IRepositoryProps {
//     title: string;
//     url: string;
//     // description: string;
// }
// export default function SwiperCarousel() {
//     const { data: repository } = useApi<IRepositoryProps[]>('catalog');

//     const NextArrow = ({ onClick }) => {
//         return (
//             <div className="arrow next" onClick={onClick}>
//                 <FaArrowRight />
//             </div>
//         );
//     };

//     const PrevArrow = ({ onClick }) => {
//         return (
//             <div className="arrow prev" onClick={onClick}>
//                 <FaArrowLeft />
//             </div>
//         );
//     };

//     const [imageIndex, setImageIndex] = useState(0);

//     const settings = {
//         infinite: true,
//         lazyLoad: true,
//         speed: 300,
//         slidesToShow: 3,
//         centerMode: true,
//         centerPadding: 0,
//         nextArrow: <NextArrow onClick={undefined} />,
//         prevArrow: <PrevArrow onClick={undefined} />,
//         beforeChange: (current, next) => setImageIndex(next),
//     };

//     return (
//         <div className="App">
//             <Slider {...settings}>
//                 {repository.map((item, idx) => (
//                     <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
//                         <img src={item.url} alt={item.title} />
//                         <span>{item.title}</span>
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// }
import React from 'react';

// import { Container } from './styles';

const Swiper: React.FC = () => {
    return <div />;
}

export default Swiper;