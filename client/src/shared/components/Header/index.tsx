import { Box } from "@mui/material";
import { MenuButton } from "../MenuButton";
import { SearchBar } from "../SearchBar";
import { ThemeButton } from "../ThemeButton";
import { IconButton, Theme, Typography, useMediaQuery } from "@mui/material"
import { ReactNode } from "react"
import SearchInput from "../SearchInput";

interface ILayoutBase {
    title: string
    toolBar?: ReactNode
    children?: ReactNode;
}

export const Header: React.FC<ILayoutBase> = ({ children, title, toolBar }) => {
    const showMenuSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

    return (
        <Box>
            <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <MenuButton />
                <Typography variant="h2" component="h2">
                    {title}
                </Typography>
                <ThemeButton />
            </Box >
            <Box>
            </Box>
            {/* 
            {
                (toolBar && <Box>
                    {toolBar}
                </Box>)
            }

            <SearchBar
                searchInputShow
            /> */}

            <Box flex={1} overflow="auto">
                {children}
            </Box>

        </Box >
    )
}