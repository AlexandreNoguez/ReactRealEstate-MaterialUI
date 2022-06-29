import { Box, Typography } from "@mui/material";
import { LayoutBase } from "../../shared/layouts/LayoutBase";


export const AnnounceProperty = () => {
    return (
        <LayoutBase title="" toolBar="">
            <Box>
                <Typography
                    display="flex"
                    justifyContent="center"
                    fontSize="32px"
                    component={'span'} variant={'body2'}
                >Anuncie!</Typography>
            </Box>
            <Typography fontSize={20} sx={{ margin: "auto" }}>
                Está querendo alugar ou vender seu imóvel? Anuncie conosco sem burocracias!
                Na Antônio Marcos Imóveis Exclusivos é fácil! Você aluga ou vende seu imóvel online no conforto de sua casa.
            </Typography>
        </LayoutBase>
    );
}
