import { Pagination, Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { Box, Icon, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography } from "@mui/material";
import { useApi } from "../../hooks/useApi";
import { IPropertyProps } from "../../services/api";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Carousel2() {
    function dataAtualFormatada() {
        var data = new Date(),
            dia = data.getDate().toString().padStart(2, '0'),
            mes = (data.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
            ano = data.getFullYear();
        return dia + "/" + mes + "/" + ano;
    }

    const [favIconColor, setFavIconColor] = useState(false)
    const { data: property, isFetching } = useApi<IPropertyProps[]>('catalog')
    
    
    return (
        <Box>
            <ListSubheader
                sx={{ justifyContent: 'center', textAlign: 'center'}}
                component="p">{`Você está vendo os imóveis no dia ${dataAtualFormatada()}`}
            </ListSubheader>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                loopedSlides={3}
                pagination={{
                    clickable: true,
                    
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 3,
                        spaceBetween: 20
                      },
                }}
                navigation={true}
                modules={[Pagination, Navigation, EffectCoverflow]}
                className="mySwiper"
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 200,
                    modifier: 2,
                    slideShadows: false,
                }}
            >
            {isFetching ? <Typography sx={{ width: "100%", textAlign: "center"}}>Carregando...</Typography> : undefined}
            {property?.map((item, index) => {
                
                return (
            <SwiperSlide key={index}>
                <ImageListItemBar
                    actionIcon={
                        <IconButton
                            // onClick={handleFavoriteIcon}
                        >
                            <Icon sx={{ color: 'rgba(255, 255, 255, 0.54)' }}>favorite</Icon>
                        </IconButton>
                    }
                    sx={{ textAlign: 'center', height: 90, marginBottom: "3px" }}
                    title={item.title} />
                <Link to={`/catalog/${item.title}`}>
                    <img src={item.image}
                        alt={item.title}
                        loading="lazy"
                    />
                </Link>
            </SwiperSlide>
)})}

            </Swiper>
        </Box>
    );
}

//     <Swiper
        
//     >
//         <SwiperSlide>
//             <ImageList>
//                 <ImageListItem>

//                 </ImageListItem>

//                 <ImageListItem>
//                     <ImageListItemBar title={"Teste"} />
//                     <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
//                 </ImageListItem>
//             </ImageList>

//         </SwiperSlide>
       
//  }