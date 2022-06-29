import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import { EffectCoverflow, Pagination } from "swiper";
import { ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography } from "@mui/material";
import { useApi } from "../../hooks/useApi";
import { IPropertyProps } from "../../services/api";
import { Link } from "react-router-dom";

export default function Carousel() {
    function dataAtualFormatada() {
        var data = new Date(),
            dia = data.getDate().toString().padStart(2, '0'),
            mes = (data.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
            ano = data.getFullYear();
        return dia + "/" + mes + "/" + ano;
    }
    const { data: property, isFetching } = useApi<IPropertyProps[]>('catalog')
    console.log("property", property)
    return (
        <>
            <ListSubheader
                component="p">{`Você está vendo os imóveis no dia ${dataAtualFormatada()}`}
            </ListSubheader>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={5}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 400,
                    modifier: 3,
                    slideShadows: true,

                }}
                loop={true}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {property?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ImageListItemBar sx={{}} title={item.title} />
                        <Link to="">
                            <img src={item.url}
                                alt={item.title}
                                loading="lazy"
                            />
                        </Link>
                    </SwiperSlide>
                ))}
                {/* <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide> */}
            </Swiper>
        </>
    );
}

// import { Swiper, SwiperSlide } from "swiper/react";
// import "./styles.css";



// import SwiperCore, {
//     EffectCoverflow,
//     Pagination,
//     Navigation
// } from "swiper";
// import { useApi } from "../../hooks/useApi";
// import { IRepositoryProps } from "../../services/api";

// SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

// export default function Carousel() {
//     const { data: property } = useApi<IRepositoryProps[]>('')
//     return (
//         <div className="container">
//             <div className="title_wrapper">
//                 <div className="reactLogo">
//                     <img src="images/react.png" />
//                 </div>
//                 <div className="title_">
//                     <span>React</span>Swiper Slider
//                 </div>
//             </div>
//             <Swiper
//                 navigation={true}
//                 effect={"coverflow"}
//                 centeredSlides={true}
//                 slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
//                 loop={true}
//                 coverflowEffect={{
//                     rotate: 50,
//                     stretch: 0,
//                     depth: 100,
//                     modifier: 1,
//                     slideShadows: true
//                 }}
//                 pagination={{
//                     clickable: true
//                 }}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     {property?.map((item, index) => (
//                         <ul key={index}>
//                             <li>
//                                 <img src={item.url} />
//                             </li>
//                         </ul>
//                     ))}
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// }