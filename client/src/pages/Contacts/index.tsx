import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { LayoutBase } from "../../shared/layouts/LayoutBase";


export const Contacts = () => {
    return (
        <LayoutBase title="">
            <Box>
                <Typography
                    display="flex"
                    justifyContent="center"
                    fontSize="32px"
                    component={'span'} variant={'body2'}
                >
                    Entre em contato
                </Typography>
            </Box>
            <Box>
            </Box>
        </LayoutBase>
    );
}
