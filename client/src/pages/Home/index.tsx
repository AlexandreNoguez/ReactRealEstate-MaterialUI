import { Box, Typography } from "@mui/material";
import Carousel from "../../shared/components/Carousel";
import Carousel2 from "../../shared/components/Carousel2";
import { LayoutBase } from "../../shared/layouts/LayoutBase";

export const Home = () => {
    return (
        <LayoutBase title="">
            <Box>
                <Typography
                    display="flex"
                    justifyContent="center"
                    fontSize="32px"
                    component={'span'} variant={'body2'}
                >
                    Imóveis em Destaque
                </Typography>
            </Box>
            <Box>
                <Carousel2 />
            </Box>
        </LayoutBase>
    );
}