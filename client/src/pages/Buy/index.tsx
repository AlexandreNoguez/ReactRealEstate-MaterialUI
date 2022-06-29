import { Box, Typography } from "@mui/material";
import { LayoutBase } from "../../shared/layouts/LayoutBase";


export const BuyProperty = () => {
    return (
        <LayoutBase title="">
            <Box>
                <Typography
                    display="flex"
                    justifyContent="center"
                    fontSize="32px"
                    component={'span'} variant={'body2'}
                >
                    Compre seu imóvel hoje mesmo!
                </Typography>
            </Box>
            <Box>
            </Box>
        </LayoutBase>
    );
}
