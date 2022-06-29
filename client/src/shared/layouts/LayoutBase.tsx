import { IconButton, Theme, Typography, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import { ReactNode } from "react"
import { Header } from "../components/Header"

export interface ILayoutBase {
    title: string
    toolBar?: ReactNode
    children?: ReactNode;
}

export const LayoutBase: React.FC<ILayoutBase> = ({ children, title, toolBar }) => {
    const showMenuSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

    return (
        <Box height="100%" display="flex" flexDirection="column">
            <Header title="" />

            <Box display="flex" justifyContent="space-between">
                {showMenuSmallScreen &&
                    <IconButton>
                        {/* <MenuButton /> */}
                    </IconButton>}
                <Typography variant="h2" component="h2">
                    {title}
                </Typography>
            </Box>

            {(toolBar && <Box>
                {toolBar}
            </Box>)}

            <Box flex={1} overflow="auto">
                {children}
            </Box>

        </Box>
    )
}