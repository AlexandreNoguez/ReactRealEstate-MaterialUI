import { Icon, Link, Typography, useTheme } from '@mui/material';
import { Box, Button, Paper, TextField } from '@mui/material';

interface ISearchBarProps {
    searchText: string;
    searchInputShow: boolean;
    searchTextChange: (newText: string) => void
    searchBtnText: string;
    searchBtnShow: boolean;
    onClickBtn: () => void
}

export const SearchBar: React.FC<ISearchBarProps> = ({
    searchText,
    searchInputShow = false,
    searchTextChange,
    searchBtnText = 'Search',
    searchBtnShow = true,
    onClickBtn,
}) => {
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
            <Typography sx={{ color: 'black' }} fontSize={30}>
                <Link>Comprar</Link>
                <Link>Alugar</Link>
                <Link>Anunciar</Link>
                <Link>Façar parte</Link>
            </Typography>
            {searchInputShow && (
                <TextField
                    size='small'
                    value={searchText}
                    onChange={(e) => searchTextChange?.(e.target.value)}
                    placeholder='Pesquisar...'
                >
                </TextField>
            )}
            <Box flex={1} display="flex" justifyContent="end">
                {searchBtnShow && (
                    <Button
                        variant='contained'
                        color="primary"
                        onClick={onClickBtn}>{searchBtnText}
                    </Button>
                )}
            </Box>
        </Box >

    )
}

