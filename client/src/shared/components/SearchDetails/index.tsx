import { Button, Divider, Icon, Paper, useTheme } from "@mui/material"
import { Box } from "@mui/system"


export const SearchDetails: React.FC = () => {
    const theme = useTheme();
    return (
        <Box
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display="flex"
            alignItems="center"
            justifyContent="end"
            height={theme.spacing(5)}
            component={Paper}
        >
            <Button
                variant='contained'
                color="primary"
                startIcon={<Icon>heart</Icon>}
            >Favorito</Button>
            <Button
                variant='outlined'
                color="primary"
                startIcon={<Icon>delete</Icon>}
            >Apagar</Button>
            <Divider variant="middle" orientation="vertical" />
            <Button
                variant='outlined'
                color="primary"
                startIcon={<Icon>arrow_back</Icon>}
            >Voltar</Button>

        </Box>
    )
}