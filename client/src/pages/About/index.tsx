import { Box, Typography } from '@mui/material';
import React from 'react';
import { LayoutBase } from '../../shared/layouts/LayoutBase';

// import { Container } from './styles';

const About: React.FC = () => {
    return (
        <LayoutBase title="">
            <Box>
                <Typography
                    display="flex"
                    justifyContent="center"
                    fontSize="32px"
                    component={'span'} variant={'body2'}
                >
                    Quem somos?
                </Typography>
            </Box>
            <Box>
            </Box>
        </LayoutBase>
    )
}

export default About;